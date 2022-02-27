import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
    subDays,
    addDays,
    isSameDay,
    differenceInDays,
    isBefore,
    format,
    startOfDay,
} from 'date-fns';
import DayPicker from 'react-day-picker';
import {
    getFirstDayOfWeek
} from 'app/functions/date';
import {
    breakpointMatches
} from 'app/functions/grid';
import {
    LocaleUtils
} from 'app/components/date/DateRangePicker/LocaleUtils';
import {
    CustomizedDayPickerNavbar
} from './CustomizedDayPickerNavbar';

// Export default for lazy loading
class CustomizedDayPicker extends React.Component {
        getDayPickerProps(from, to, toHover, fromFocused, toFocused, range, shouldSetInitialMonth) {
            const {
                minDepartureDate,
                locale,
                onDepartureDateChange,
                onReturnDateChange,
                setDepartureFocused,
                setReturnHover,
                setReturnFocused,
            } = this.props;

            const disabledDays = {
                before: minDepartureDate,
            };

            // Disable days before from
            if (toFocused) {
                disabledDays.before = from;
            }

            const modifiers = {
                weekend: {
                    daysOfWeek: [0, 6]
                },
                current: (date) =>
                    (fromFocused && isSameDay(date, from)) || (toFocused && isSameDay(date, toHover)),
            };

            if (range) {
                if (!this.isSameOrNextDay(from, toHover)) {
                    modifiers.range = {
                        from: addDays(from, 1),
                        to: subDays(toHover, 1),
                    };
                }

                if (isSameDay(from, toHover)) {
                    modifiers.sameDay = toHover;
                } else {
                    modifiers.other = (date) =>
                        (toFocused && isSameDay(date, from)) || (fromFocused && isSameDay(date, toHover));
                }

                modifiers.from = from;
                modifiers.to = toHover;
            }

            const props = {
                fromMonth: minDepartureDate,
                locale,
                disabledDays,
                modifiers,
                localeUtils: LocaleUtils,
            };

            if (shouldSetInitialMonth) {
                props.initialMonth = this.lastMonth ? this.lastMonth : from;
            }

            // Day click handler when there is only one date
            // After the date is changed, close the datepicker.
            // Only close the date picker now because there is
            // only one date to choose.
            if (fromFocused && !range) {
                props.onDayClick = (date) => {
                    if (!this.validDayForClick(date)) {
                        return;
                    }

                    onDepartureDateChange(date);

                    if (!breakpointMatches('small').matches) {
                        setDepartureFocused(false);
                    }
                };
            }

            // Day click handler when choosing the from date.
            // In this case, change the date and then switch
            // to the second datepicker.
            if (fromFocused && range) {
                props.onDayClick = (date) => {
                    if (!this.validDayForClick(date)) {
                        return;
                    }

                    this.lastMonth = this.dayPicker.state.currentMonth;

                    onDepartureDateChange(date);
                    setReturnHover(date);
                    setDepartureFocused(false);
                    setReturnFocused(true);
                };
            }

            // Day click handler for the to date.
            if (toFocused) {
                props.onDayClick = (date) => {
                    if (!this.validDayForClick(date)) {
                        return;
                    }

                    // In this case, set the departure date.
                    if (isBefore(date, from)) {
                        return;
                    }

                    onReturnDateChange(date);
                    setReturnHover(date);

                    if (breakpointMatches('small').matches) {
                        setDepartureFocused(true);
                        setReturnFocused(false);
                    } else {
                        setReturnFocused(false);
                    }
                };
            }

            // Handle hover when choosing the to date of a range.
            if (toFocused && range) {
                props.onDayMouseEnter = (date) => {
                    if (isBefore(date, from)) {
                        return;
                    }

                    setReturnHover(date);
                };

                props.onDayMouseLeave = () => {
                    setReturnHover(to);
                };
            }

            // Handle pressing escape, which should close the overlay.
            if (range && (fromFocused || toFocused)) {
                props.onKeyDown = (e) => {
                    if (e.which === 27) {
                        setDepartureFocused(false);
                        setReturnFocused(false);
                    }
                };
            }

            this.lastMonth = false;

            return props;
        }

        isSameOrNextDay(a, b) {
            return isSameDay(a, b) || differenceInDays(a, b) === 1;
        }

        validDayForClick(date) {
            const {
                minDepartureDate
            } = this.props;
            return !isBefore(startOfDay(date), startOfDay(minDepartureDate));
        }

        render() {
            const {
                departureDate,
                returnDate,
                returnHover,
                departureFocused,
                returnFocused,
                returnDateVisible,
                numberOfMonths,
                shouldSetInitialMonth,
                locale,
                onClose,
                month,
            } = this.props;

            return ( <
                DayPicker navbarElement = { < CustomizedDayPickerNavbar / >
                }
                firstDayOfWeek = {
                    getFirstDayOfWeek(locale)
                }
                ref = {
                    (el) => {
                        this.dayPicker = el;
                    }
                }
                className = {
                    classNames({
                        'search-mask__date-range-picker-widget': true,
                        'search-mask__date-range-picker-widget--small': breakpointMatches('small').matches,
                        'search-mask__date-range-picker-widget--single': !returnDateVisible,
                        'search-mask__date-range-picker-widget--range': returnDateVisible,
                        'search-mask__date-range-picker-widget--choosing-from': departureFocused,
                        'search-mask__date-range-picker-widget--choosing-to': returnFocused,
                    })
                }
                // // eslint-disable-next-line
                { ...this.getDayPickerProps(
                        departureDate,
                        returnDate,
                        returnHover,
                        departureFocused,
                        returnFocused,
                        returnDateVisible,
                        shouldSetInitialMonth,
                    )
                }
                numberOfMonths = {
                    numberOfMonths
                }
                renderDay = {
                    (day) => < span data - date = {
                        format(day, 'yyyy-MM-dd')
                    } > {
                        day.getDate()
                    } < /span>}
                    month = {
                        month
                    }
                    onKeyDown = {
                        (e) => {
                            if (e.keyCode === 27) {
                                onClose();
                            }
                        }
                    }
                    />
                );
            }
        }

        CustomizedDayPicker.propTypes = {
            minDepartureDate: PropTypes.instanceOf(Date).isRequired,
            departureDate: PropTypes.instanceOf(Date).isRequired,
            returnDate: PropTypes.instanceOf(Date).isRequired,
            returnDateVisible: PropTypes.bool.isRequired,
            locale: PropTypes.string.isRequired,
            departureFocused: PropTypes.bool.isRequired,
            returnFocused: PropTypes.bool.isRequired,
            returnHover: PropTypes.instanceOf(Date).isRequired,
            numberOfMonths: PropTypes.number.isRequired,
            shouldSetInitialMonth: PropTypes.bool.isRequired,
            setDepartureFocused: PropTypes.func.isRequired,
            setReturnFocused: PropTypes.func.isRequired,
            setReturnHover: PropTypes.func.isRequired,
            onDepartureDateChange: PropTypes.func.isRequired,
            onReturnDateChange: PropTypes.func.isRequired,
            onClose: PropTypes.func.isRequired,
            month: PropTypes.instanceOf(Date).isRequired,
        };

        export {
            CustomizedDayPicker
        };