import {
    getEventEmitter
} from '@flixbus/transclusion-eventing';

export const EVENT_REQUEST_SEARCH = 'search.search-mask.request-search';

export const emitRequestSearchEvent = (payload) => {
    const eventEmitter = getEventEmitter();

    eventEmitter.emit(EVENT_REQUEST_SEARCH, payload);
};