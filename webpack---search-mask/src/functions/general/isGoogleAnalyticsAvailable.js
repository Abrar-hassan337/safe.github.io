export const isGoogleAnalyticsAvailable = () => {
    try {
        // make sure GA variable can be called without errors
        window.ga.getByName('gaGlobal').get('linkerParam');

        return true;
    } catch (error) {
        return false;
    }
};