import { getEventEmitter } from '@flixbus/transclusion-eventing';

export const EVENT_MAP_CLICKED = 'search.search-mask.map_clicked';

export const emitSearchMaskMapEvent = () => {
  const eventEmitter = getEventEmitter();
  eventEmitter.emit(EVENT_MAP_CLICKED);
};
