import React, {
    PureComponent
} from 'react';
import PropTypes from 'prop-types';
import {
    getTestingAttributes
} from 'app/functions';
import {
    elements
} from 'app/tests/elements';
import cn from 'classnames';
import {
    compose,
    withState,
    withProps
} from 'recompose';
import {
    isBefore,
    startOfDay,
    subMonths,
    differenceInMonths
} from 'date-fns';
import 'react-day-picker/lib/style.css?raw'; // eslint-disable-line
import {
    emitFieldOpenedEvent,
    emitFieldClosedEvent
} from 'app/events';
import {
    FIELD_DEPARTURE_DATE,
    FIELD_RETURN_DATE
} from 'app/storage/fieldNames';
import {
    Button
} from 'app/components/ui/Button';
import {
    ResponsivePopup
} from 'app/components/ui/ResponsivePopup';
import {
    breakpointMatches
} from 'app/functions/grid';
import {
    Label
} from 'app/components/ui/Label';
import {
    CustomizedDayPicker
} from 'app/components/date/CustomizedDayPicker';
import {
    DateInput
} from 'app/components/date/DateInput';
import {
    LocaleUtils
} from './LocaleUtils';
import styles from './DateRangePicker.scss';
import './CustomizedReactDayPicker.scss';

const getNumberOfMonths = () => (breakpointMatches('small').matches ? 18 : 2);
const getShouldSetInitialMonth = () => !breakpointMatches('small').matches; // When breakpoint is NOT small

class DumbDateRangePicker extends PureComponent {
    constructor() {
        super();

        this.setDepartureFocused = this.setDepartureFocused.bind(this);
        this.setReturnFocused = this.setReturnFocused.bind(this);
        this.close = this.close.bind(this);
        this.maybeClose = this.maybeClose.bind(this);
        this.maybeCancel = this.maybeCancel.bind(this);
        this.calculatePropsByWindowSize = this.calculatePropsByWindowSize.bind(this);
        this.isNumberOfMonthsChanged = this.isNumberOfMonthsChanged.bind(this);
        this.isShouldSetInitialMonthChanged = this.isShouldSetInitialMonthChanged.bind(this);
        this.scrollIntoSelectedDate = this.scrollIntoSelectedDate.bind(this);
        this.openDepartureDate = this.openDepartureDate.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (breakpointMatches('small').matches && this.props.focused && !this.props.scrolledToView) {
            this.scrollIntoSelectedDate();
        }

        const {
            focused,
            returnFocused,
            departureFocused,
            returnDateVisible
        } = this.props;

        if (!prevProps.focused && focused && departureFocused) {
            emitFieldOpenedEvent(FIELD_DEPARTURE_DATE);
        }
        if (!prevProps.focused && focused && returnFocused) {
            emitFieldOpenedEvent(FIELD_RETURN_DATE);
        }
        if (prevProps.focused && !focused && !departureFocused && !returnDateVisible) {
            emitFieldClosedEvent(FIELD_DEPARTURE_DATE);
        }
        if (prevProps.focused && !focused && !departureFocused && returnDateVisible) {
            emitFieldClosedEvent(FIELD_RETURN_DATE);
        }
    }

    setDepartureFocused(focused) {
        const {
            setDepartureFocused
        } = this.props;

        setDepartureFocused(focused);
    }

    setReturnFocused(focused) {
        const {
            setReturnFocused
        } = this.props;

        setReturnFocused(focused);
    }

    handleKeyDown(e) {
        switch (e.keyCode) {
            case 13:
                this.openDepartureDateByIcon(e);
                break;
            case 27:
                this.close(e);
                break;
            default:
                break;
        }
    }

    getDisplayedMonth(
        minDepartureDate,
        departureDate,
        returnDate,
        returnFocused,
        preSelectReturnMonth,
    ) {
        const isSmallBreakpoint = breakpointMatches('small').matches;

        // on mobile, always display all available months
        if (isSmallBreakpoint) return minDepartureDate;

        // if departure date, or not preSelectFlag always show departure month
        if (!returnFocused || !preSelectReturnMonth) return departureDate;

        // need to display selected return date month
        // if possible pad month by one, to display it in second column
        const returnMonth =
            differenceInMonths(departureDate, returnDate) <= -1 ? subMonths(returnDate, 1) : returnDate;
        return returnMonth;
    }

    validDayForClick(date) {
        const {
            minDepartureDate
        } = this.props;
        return !isBefore(startOfDay(date), startOfDay(minDepartureDate));
    }

    close() {
        const {
            setScrolledToView
        } = this.props;

        this.setDepartureFocused(false);
        this.setReturnFocused(false);
        setScrolledToView(false);
    }

    maybeClose(close, event) {
        if (!close) {
            return;
        }

        if (event) {
            const {
                departureFocused,
                returnFocused
            } = this.props;
            const departureClicked = this.departureInput && event.target === this.departureInput;
            const returnClicked = this.returnInput && event.target === this.returnInput;

            if ((departureFocused && departureClicked) || (returnFocused && returnClicked)) {
                return;
            }
        }

        this.close();
    }

    maybeCancel() {
        const {
            temporaryDepartureDate
        } = this.props;
        this.props.onDepartureDateChange(temporaryDepartureDate);
    }

    calculatePropsByWindowSize() {
        this.isNumberOfMonthsChanged();
        this.isShouldSetInitialMonthChanged();
    }

    isNumberOfMonthsChanged() {
        const {
            numberOfMonths,
            setNumberOfMonths
        } = this.props;
        const newNumberOfMonths = getNumberOfMonths();

        if (newNumberOfMonths !== numberOfMonths) {
            setNumberOfMonths(newNumberOfMonths);
        }
    }

    isShouldSetInitialMonthChanged() {
        const {
            shouldSetInitialMonth,
            setShouldSetInitialMonth
        } = this.props;
        const newShouldSetInitialMonth = getShouldSetInitialMonth();

        if (newShouldSetInitialMonth !== shouldSetInitialMonth) {
            setShouldSetInitialMonth(newShouldSetInitialMonth);
        }
    }

    scrollIntoSelectedDate() {
        const {
            setScrolledToView
        } = this.props;
        const currentDate = document.querySelector('.DayPicker-Day--current');

        if (currentDate) {
            currentDate.closest('.DayPicker-Month').scrollIntoView();
            setScrolledToView(true);
        }
    }

    openDepartureDate(e) {
        const {
            departureFocused,
            onTemporaryDepartureDateChange
        } = this.props;

        if (departureFocused) {
            return;
        }

        const {
            departureDate,
            returnDate,
            setReturnHover
        } = this.props;

        setReturnHover(returnDate);

        onTemporaryDepartureDateChange(departureDate);

        this.setDepartureFocused(true);

        this.departureInput.blur();
        e.preventDefault(); // prevent focusing on this field
        e.stopPropagation();
    }

    render() {
            const {
                getTranslationDepartureDateLabel,
                getTranslationReturnDateLabel,
                getTranslationConfirmButtonLabel,
                minDepartureDate,
                departureDate,
                returnDate,
                returnDateVisible,
                dateFormatter,
                focused,
                departureFocused,
                returnFocused,
                onDepartureDateChange,
                onReturnDateChange,
                returnHover,
                setReturnHover,
                numberOfMonths,
                shouldSetInitialMonth,
                locale,
                preSelectReturnMonth,
            } = this.props;

            const isSmallBreakpoint = breakpointMatches('small').matches;
            const isLargeBreakpoint = breakpointMatches('large').matches;
            const displayedMonth = this.getDisplayedMonth(
                minDepartureDate,
                departureDate,
                returnDate,
                returnFocused,
                preSelectReturnMonth,
            );

            return ( <
                >
                <
                div className = {
                    cn({
                        [styles.dateInput]: true,
                        [styles.dateInputDeparture]: true,
                        [styles.wideInput]: !returnDateVisible,
                    })
                } >
                <
                DateInput { ...getTestingAttributes(elements.DEPARTURE_DATE_INPUT_FIELD)
                }
                inputRef = {
                    (el) => {
                        this.departureInput = el;
                    }
                }
                date = {
                    dateFormatter(departureDate, locale)
                }
                label = { < Label > {
                        getTranslationDepartureDateLabel()
                    } < /Label>}
                    invalid = {!this.validDayForClick(departureDate)
                    }
                    showTooltipArrow = {
                        departureFocused && !isSmallBreakpoint
                    }
                    onFocus = {
                        this.openDepartureDate
                    }
                    appearAsFocused = {
                        departureFocused
                    }
                    setDepartureFocused = {
                        this.setDepartureFocused
                    }
                    setReturnFocused = {
                        this.setReturnFocused
                    }
                    /> <
                    /div>

                    {
                        returnDateVisible && ( <
                                div className = {
                                    `${styles.dateInput} ${styles.dateInputReturn}`
                                } >
                                <
                                DateInput { ...getTestingAttributes(elements.ARRIVAL_DATE_INPUT_FIELD)
                                }
                                inputRef = {
                                    (el) => {
                                        this.returnInput = el;
                                    }
                                }
                                date = {
                                    dateFormatter(returnDate, locale)
                                }
                                label = { < Label > {
                                        getTranslationReturnDateLabel()
                                    } < /Label>}
                                    showTooltipArrow = {
                                        returnFocused && !isSmallBreakpoint
                                    }
                                    onFocus = {
                                        (e) => {
                                            setReturnHover(returnDate);
                                            this.setReturnFocused(true);
                                            e.preventDefault(); // prevent focusing on this field
                                            e.stopPropagation();
                                        }
                                    }
                                    appearAsFocused = {
                                        returnFocused
                                    }
                                    setDepartureFocused = {
                                        this.setDepartureFocused
                                    }
                                    setReturnFocused = {
                                        this.setReturnFocused
                                    }
                                    icon = {
                                        null
                                    }
                                    /> <
                                    /div>
                                )
                            }

                            <
                            br / >
                            <
                            ResponsivePopup
                        title = {
                            departureFocused ? getTranslationDepartureDateLabel() : getTranslationReturnDateLabel()
                        }
                        visible = {
                            focused
                        }
                        notFlex
                        onClose = {
                            this.maybeClose
                        }
                        onCancel = {
                            this.maybeCancel
                        }
                        onResize = {
                            this.calculatePropsByWindowSize
                        }
                        centerAligned = {
                            isLargeBreakpoint
                        }
                        actions = { <
                                Button variant = "primary"
                                onClick = {
                                    (e) => this.maybeClose(true, e)
                                } > {
                                    getTranslationConfirmButtonLabel()
                                } <
                                /Button>
                            } >
                            <
                            div
                        ref = {
                                (el) => {
                                    this.overlay = el;
                                }
                            } >
                            <
                            CustomizedDayPicker
                        minDepartureDate = {
                            minDepartureDate
                        }
                        departureDate = {
                            departureDate
                        }
                        returnDate = {
                            returnDate
                        }
                        returnHover = {
                            returnHover
                        }
                        departureFocused = {
                            departureFocused
                        }
                        returnFocused = {
                            returnFocused
                        }
                        returnDateVisible = {
                            returnDateVisible
                        }
                        numberOfMonths = {
                            numberOfMonths
                        }
                        shouldSetInitialMonth = {
                            shouldSetInitialMonth
                        }
                        locale = {
                            locale
                        }
                        setDepartureFocused = {
                            this.setDepartureFocused
                        }
                        setReturnFocused = {
                            this.setReturnFocused
                        }
                        setReturnHover = {
                            setReturnHover
                        }
                        onDepartureDateChange = {
                            onDepartureDateChange
                        }
                        onReturnDateChange = {
                            onReturnDateChange
                        }
                        onClose = {
                            this.close
                        }
                        month = {
                            displayedMonth
                        }
                        /> <
                        /div> <
                        /ResponsivePopup> <
                        />
                    );
                }
            }

            DumbDateRangePicker.propTypes = {
                // Translations
                getTranslationDepartureDateLabel: PropTypes.func.isRequired,
                getTranslationReturnDateLabel: PropTypes.func.isRequired,
                getTranslationConfirmButtonLabel: PropTypes.func.isRequired,

                departureDate: PropTypes.instanceOf(Date).isRequired,
                minDepartureDate: PropTypes.instanceOf(Date).isRequired,
                temporaryDepartureDate: PropTypes.instanceOf(Date).isRequired,
                returnDate: PropTypes.instanceOf(Date).isRequired,
                returnDateVisible: PropTypes.bool.isRequired,
                onDepartureDateChange: PropTypes.func.isRequired,
                onTemporaryDepartureDateChange: PropTypes.func.isRequired,
                onReturnDateChange: PropTypes.func.isRequired,
                locale: PropTypes.string.isRequired,
                dateFormatter: PropTypes.func,
                preSelectReturnMonth: PropTypes.bool.isRequired,

                // Date internal props
                focused: PropTypes.bool.isRequired,
                departureFocused: PropTypes.bool.isRequired,
                setDepartureFocused: PropTypes.func.isRequired,
                returnFocused: PropTypes.bool.isRequired,
                setReturnFocused: PropTypes.func.isRequired,
                returnHover: PropTypes.instanceOf(Date).isRequired,
                setReturnHover: PropTypes.func.isRequired,
                setNumberOfMonths: PropTypes.func.isRequired,
                shouldSetInitialMonth: PropTypes.bool.isRequired,
                setShouldSetInitialMonth: PropTypes.func.isRequired,
                numberOfMonths: PropTypes.number.isRequired,
                scrolledToView: PropTypes.bool.isRequired,
                setScrolledToView: PropTypes.func.isRequired,

                // Theme
                variant: PropTypes.string.isRequired,
            };

            const dateFormatter = (date, locale) => LocaleUtils.getDateLabel(date, locale);

            DumbDateRangePicker.defaultProps = {
                dateFormatter,
            };

            export default compose(
                withState('departureFocused', 'setDepartureFocused', false),
                withState('returnFocused', 'setReturnFocused', false),
                withState('returnHover', 'setReturnHover', (props) => props.returnDate),
                withState('numberOfMonths', 'setNumberOfMonths', getNumberOfMonths()),
                withState('shouldSetInitialMonth', 'setShouldSetInitialMonth', getShouldSetInitialMonth()),
                withState('scrolledToView', 'setScrolledToView', false),
                withProps((props) => ({
                    focused: props.departureFocused || props.returnFocused,
                })),
            )(DumbDateRangePicker);