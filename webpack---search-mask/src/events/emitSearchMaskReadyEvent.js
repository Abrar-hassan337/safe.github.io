import {
    getEventEmitter
} from '@flixbus/transclusion-eventing';

// This event is triggered when the search mask component finished mounting (componentDidMount)
// Used by trackers to analise search mask loading times and so on.
export const EVENT_SEARCH_MASK_READY = 'search.search-mask.ready';

export const emitSearchMaskReadyEvent = () => {
    getEventEmitter().emit(EVENT_SEARCH_MASK_READY);
};