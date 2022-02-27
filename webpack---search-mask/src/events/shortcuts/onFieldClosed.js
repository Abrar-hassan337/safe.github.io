import {
    getEventEmitter
} from '@flixbus/transclusion-eventing';
import {
    EVENT_FIELD_CLOSED
} from 'app/events';

/**
 * Register a callback for the field closed event.
 *
 * @param {onFieldClosedCallback} callback Function that will be called when the event is emitted.
 */
export const onFieldClosed = (callback) => getEventEmitter().on(EVENT_FIELD_CLOSED, callback);

/**
 * Callback for field closed event.
 *
 * @callback onFieldClosedCallback
 *
 * @param {string} fieldName Name of the field
 */