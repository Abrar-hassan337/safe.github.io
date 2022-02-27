import Bugsnag from '@bugsnag/js';
import BugsnagPluginReact from '@bugsnag/plugin-react';
import {
    getEnvironment,
    getVersion
} from 'app/functions/environment';

let client;

export const getNotifier = () => {
    if (!client) {
        const bugsnagClient = Bugsnag.start({
            apiKey: process.env.SEARCH_BUGSNAG_TOKEN,
            plugins: [new BugsnagPluginReact()],
            releaseStage: getEnvironment(),
            appVersion: getVersion(),
            enabledReleaseStages: ['production'],
        });
        client = bugsnagClient;
    }

    return client;
};