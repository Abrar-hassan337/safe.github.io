import {
    getTimestampInSeconds
} from 'app/functions/date';
import {
    connect
} from 'react-redux';
import {
    compose,
    withProps
} from 'recompose';
import {
    format
} from 'date-fns';
import {
    emitFieldChangedEvent
} from 'app/events';
import {
    FIELD_DEPARTURE_DATE,
    FIELD_RETURN_DATE
} from 'app/storage/fieldNames';
import {
    WithTranslations
} from 'app/containers/WithTranslations';
import DateRangePicker from 'app/components/date/DateRangePicker';
import {
    WithOptions
} from 'app/containers/WithOptions';
import {
    setDepartureDate,
    setTempDepartureDate,
    setReturnDate
} from 'app/store/actions';
import {
    currentDateAtDepartureCitySelector,
    departureDateSelector,
    returnDateSelector,
    returnDateVisibleSelector,
    temporaryDepartureDateSelector,
    variantSelector,
    preSelectReturnMonthSelector,
} from 'app/store/selectors';

const mapStateToProps = (state) => ({
    departureDate: departureDateSelector(state),
    minDepartureDate: currentDateAtDepartureCitySelector(state),
    temporaryDepartureDate: temporaryDepartureDateSelector(state),
    returnDate: returnDateSelector(state),
    returnDateVisible: returnDateVisibleSelector(state),
    variant: variantSelector(state),
    preSelectReturnMonth: preSelectReturnMonthSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
    onDepartureDateChange: (date) => {
        dispatch(setDepartureDate(getTimestampInSeconds(date)));
        emitFieldChangedEvent(FIELD_DEPARTURE_DATE, format(date, 'dd.MM.yyyy'));
    },
    onTemporaryDepartureDateChange: (date) => {
        dispatch(setTempDepartureDate(getTimestampInSeconds(date)));
    },
    onReturnDateChange: (date) => {
        dispatch(setReturnDate(getTimestampInSeconds(date)));
        emitFieldChangedEvent(FIELD_RETURN_DATE, format(date, 'dd.MM.yyyy'));
    },
});

export default compose(
    WithOptions,
    withProps(({
        options
    }) => ({
        locale: options.locale,
    })),
    WithTranslations({
        getTranslationDepartureDateLabel: 'depart',
        getTranslationReturnDateLabel: 'back',
        getTranslationConfirmButtonLabel: 'search_bundle.search_widget.passengers.popup.btn.confirm',
        getTranslationAddDateLabel: 'search_bundle.search_widget.add_date',
        getTranslationAddReturnLabel: 'search_mask.add_return',
    }),
    connect(mapStateToProps, mapDispatchToProps),
)(DateRangePicker);