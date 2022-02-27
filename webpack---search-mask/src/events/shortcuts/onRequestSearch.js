import {
    getEventEmitter
} from '@flixbus/transclusion-eventing';
import {
    EVENT_REQUEST_SEARCH
} from 'app/events';

/**
 * Register a callback for the request search event.
 *
 * @param {onRequestSearchCallback} callback Function that will be called when the event is emitted.
 */
export const onRequestSearch = (callback) => getEventEmitter().on(EVENT_REQUEST_SEARCH, callback);

/**
 * Callback for search request event.
 *
 * @callback onRequestSearchCallback
 *
 * @param {number} departureCity ID of the selected departure city
 * @param {number} [departureStation=null] ID of the selected departure station, if applicable
 * @param {number} arrivalCity ID of the selected arrival city
 * @param {number} [arrivalStation=null] ID of the selected arrival station, if applicable
 * @param {string} routeName Route name
 * @param {number} [departureDate=null] Departure date (UNIX timestamp), if applicable
 * @param {number} [returnDate=null] Return date (UNIX timestamp), if applicable
 * @param {object} products Selected products. Object where each key is a product name, and the
 *                          value is the amount of selected products.
 * @param {string} locale Current locale
 */