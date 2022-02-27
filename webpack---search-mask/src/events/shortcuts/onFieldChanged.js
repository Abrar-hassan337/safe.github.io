import {
    getEventEmitter
} from '@flixbus/transclusion-eventing';
import {
    EVENT_FIELD_CHANGED
} from 'app/events';

/**
 * Register a callback for the field changed event.
 *
 * @param {onFieldChangedCallback} callback Function that will be called when the event is emitted.
 */
export const onFieldChanged = (callback) => getEventEmitter().on(EVENT_FIELD_CHANGED, callback);

/**
 * Callback for field changed event.
 *
 * @callback onFieldChangedCallback
 *
 * @param {string} fieldName Name of the field
 * @param {any} value New value
 */