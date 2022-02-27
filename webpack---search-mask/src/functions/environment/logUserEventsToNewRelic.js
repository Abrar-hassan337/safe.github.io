import {
    getEventEmitter
} from '@flixbus/transclusion-eventing';

const newRelicLogger = (eventName, payload) => {
    // only try to log when the NewRelic Browser Agent is mounted in the page
    if (!window || !window.newrelic || !window.newrelic.addPageAction) {
        return;
    }

    // log custom event to NewRelic browser agent
    window.newrelic.addPageAction(eventName, payload);
};

const logUserEventsToNewRelic = () => {
    // listen to ALL search-mask events
    getEventEmitter().on('search.search-mask.*', function eventCallback(payload) {
        newRelicLogger(this.event, payload);
    });
};

export {
    logUserEventsToNewRelic
};