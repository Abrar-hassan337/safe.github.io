import {
    getEventEmitter
} from '@flixbus/transclusion-eventing';

export const EVENT_FIELD_OPENED = 'search.search-mask.field-opened';
export const emitFieldOpenedEvent = (fieldName) => {
    const eventEmitter = getEventEmitter();

    eventEmitter.emit(EVENT_FIELD_OPENED, {
        fieldName,
    });
};