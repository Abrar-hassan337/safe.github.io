let appStarted;

export const startApp = () => {
    if (appStarted) {
        return;
    }

    appStarted = new Date().getTime();
};

export const getAppStartedTime = () => appStarted;
export const getTimeDifference = (date = new Date()) => date.getTime() - getAppStartedTime();