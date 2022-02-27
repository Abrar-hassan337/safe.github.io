const hasWindowHistory = typeof window === 'object' && window.history;

export const replaceUrl = (url) => {
    if (hasWindowHistory) {
        window.history.replaceState(window.history.state, document.title, url);
    }
};