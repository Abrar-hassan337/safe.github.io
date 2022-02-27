import {
    getEventEmitter
} from '@flixbus/transclusion-eventing';

export const EVENT_SELECT_CITY = 'search.search-mask.city_selected';

/**
 *
 * @param {string} direction - Departure or arrival
 * @param {boolean} isFlixbusCity - Is a wished city from our network?
 * @param {string} selectedCityId - Actually selected city ID
 * @param {string} selectedCityName - Actually selected city name
 * @param {string} country - The country of a selected city
 * @param {string} searchedTerm - Input value that user types in
 * @param {number} positionFromTop - Position of a selected item from top of the list (outer scope)
 */
export const emitSelectCityEvent = (
    direction,
    isFlixbusCity,
    selectedCityId,
    selectedCityName,
    country,
    searchedTerm,
    positionFromTop,
    isRecent = false,
    isPopular = false,
) => {
    getEventEmitter().emit(EVENT_SELECT_CITY, {
        direction: direction === 'from' ? 'departure' : 'arrival',
        isFlixbusCity,
        selectedCityId,
        selectedCityName,
        country,
        searchedTerm,
        positionFromTop,
        isRecent,
        isPopular,
    });
};