import {
    getEventEmitter
} from '@flixbus/transclusion-eventing';

export const EVENT_FIELD_CLOSED = 'search.search-mask.field-closed';
export const emitFieldClosedEvent = (fieldName) => {
    const eventEmitter = getEventEmitter();

    eventEmitter.emit(EVENT_FIELD_CLOSED, {
        fieldName,
    });
};