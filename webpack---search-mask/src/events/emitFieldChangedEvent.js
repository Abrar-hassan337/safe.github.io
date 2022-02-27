import {
    getEventEmitter
} from '@flixbus/transclusion-eventing';

export const EVENT_FIELD_CHANGED = 'search.search-mask.field-changed';
export const emitFieldChangedEvent = (fieldName, value) => {
    const eventEmitter = getEventEmitter();

    eventEmitter.emit(EVENT_FIELD_CHANGED, {
        fieldName,
        value,
    });
};