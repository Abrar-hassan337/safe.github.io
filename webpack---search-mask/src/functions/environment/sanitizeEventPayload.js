import {
    getTimeDifference
} from 'app/service';

// Used to track how many times an event happens in a single page visit.
const eventCounter = {};

export const sanitizeEventPayload = (event, payload) => {
    if (!eventCounter[event]) {
        eventCounter[event] = 0;
    }

    // Increase the times this event happened
    eventCounter[event] += 1;

    const now = new Date();
    const extraPayload = {
        time: now.getTime(),
        timeDifference: getTimeDifference(now),
        count: eventCounter[event],
    };

    return {
        ...payload,
        ...extraPayload,
    };
};