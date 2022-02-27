import {
    getEventEmitter
} from '@flixbus/transclusion-eventing';
import {
    EVENT_SEARCH_MASK_READY
} from 'app/events';

/**
 * Register a callback for the search mask is ready event.
 *
 * @param {onReadyCallback} callback Function that will be called when the event is emitted.
 */
export const onReady = (callback) => getEventEmitter().on(EVENT_SEARCH_MASK_READY, callback);

/**
 * Callback for search request event.
 * It has no payload.
 *
 * @callback onReadyCallback
 */