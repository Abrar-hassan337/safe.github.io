import {
    getEventEmitter
} from '@flixbus/transclusion-eventing';
import {
    removeBikesFromProduct,
    updateDates,
    updateLocations
} from 'app/store/actions';

// EXTERNAL EVENTS
const EVENT_REMOVE_BIKES = 'search.results.remove_bikes';
const EVENT_OTHER_DATE_SELECTED = 'search.results.other_date_selected';
const EVENT_UPDATE_CITIES = 'search.results.update_cities';

export const registerEventListeners = (dispatch) => {
    const eventEmitter = getEventEmitter();

    eventEmitter.on(EVENT_REMOVE_BIKES, (payload) => {
        dispatch(removeBikesFromProduct(payload));
    });

    eventEmitter.on(EVENT_OTHER_DATE_SELECTED, ({
        tripIndex,
        newDateUTC
    }) => {
        dispatch(updateDates(tripIndex, newDateUTC));
    });

    eventEmitter.on(EVENT_UPDATE_CITIES, ({
        fromCityDetails,
        toCityDetails
    }) => {
        dispatch(updateLocations(fromCityDetails, toCityDetails));
    });
};