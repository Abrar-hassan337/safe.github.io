import cookies from 'js-cookie';
import {
    featuresToggledByCookies
} from 'app/config/features';
import {
    toggleFeature
} from 'app/store/actions/general';

const featureToggler = (dispatch) => {
    Object.keys(featuresToggledByCookies).forEach((featureName) => {
        const feature = featuresToggledByCookies[featureName];
        const cookieValue = cookies.get(feature.cookieName);
        // if cookie is not set, no toggling necessary: use default values.
        if (cookieValue === undefined || cookieValue === null) {
            return;
        }

        dispatch(toggleFeature(featureName, feature.isEnabled(cookieValue)));
    });

    const params = new URLSearchParams(window.location.search);
    params.forEach((value, name) => {
        const match = /features\[([.a-zA-Z0-9_-]+)\]/.exec(name);

        if (match && match[1]) {
            const featureName = match[1];
            dispatch(toggleFeature(featureName, value === '1'));
        }
    });
};

export {
    featureToggler
};