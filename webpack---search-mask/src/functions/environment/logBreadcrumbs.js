import {
    getEventEmitter
} from '@flixbus/transclusion-eventing';
import {
    isDevelopment,
    sanitizeEventPayload
} from 'app/functions/environment';
import {
    getNotifier
} from 'app/service';

const logBreadcrumbs = () => {
    if (isDevelopment()) {
        return;
    }

    // listen to ALL search-mask events
    getEventEmitter().on('search.search-mask.*', function eventCallback(payload) {
        const sanitizedPayload = sanitizeEventPayload(this.event, payload);

        getNotifier().leaveBreadcrumb(`[${this.event}] event thrown`, sanitizedPayload);
    });
};

export {
    logBreadcrumbs
};