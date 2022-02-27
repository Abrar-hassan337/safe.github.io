import {
    TripModePicker as TripModePickerView
} from 'app/components/ui/TripModePicker';
import {
    compose
} from 'recompose';
import {
    connect
} from 'react-redux';
import {
    WithTranslations
} from 'app/containers/WithTranslations';
import {
    returnDateVisibleSelector
} from 'app/store/selectors';
import {
    hideReturnDate,
    showReturnDate
} from 'app/store/actions';
import {
    emitFieldChangedEvent
} from 'app/events';
import {
    FIELD_TRIP_MODE
} from 'app/storage/fieldNames';

const mapStateToProps = (state) => ({
    isRoundTrip: returnDateVisibleSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
    onClickOneWayToggle: () => {
        emitFieldChangedEvent(FIELD_TRIP_MODE, 'oneway');
        dispatch(hideReturnDate());
    },
    onClickRoundTripToggle: () => {
        dispatch(showReturnDate());
        emitFieldChangedEvent(FIELD_TRIP_MODE, 'roundtrip');
    },
});

export const TripModePicker = compose(
    WithTranslations({
        getSearchString: 'Booking find',
        getOneWayTranslation: 'search_mask.label.one_way',
        getRoundTripTranslation: 'search_mask.label.round_trip',
    }),
    connect(mapStateToProps, mapDispatchToProps),
)(TripModePickerView);