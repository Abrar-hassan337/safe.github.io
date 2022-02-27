import {
    getEventEmitter
} from '@flixbus/transclusion-eventing';
import {
    EVENT_FIELD_OPENED
} from 'app/events';

/**
 * Register a callback for the field opened event.
 *
 * @param {onFieldOpenedCallback} callback Function that will be called when the event is emitted.
 */
export const onFieldOpened = (callback) => getEventEmitter().on(EVENT_FIELD_OPENED, callback);

/**
 * Callback for field opened event.
 *
 * @callback onFieldOpenedCallback
 *
 * @param {string} fieldName Name of the field
 */