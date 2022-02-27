import {
    replaceUrl
} from 'app/functions/environment';

const {
    location
} = window;

export const updateLocationSearch = (urlParams) => {
    replaceUrl(
        `${location.protocol}//${location.host}${location.pathname}?${urlParams.toString()}${
      window.location.hash
    }`,
    );
};