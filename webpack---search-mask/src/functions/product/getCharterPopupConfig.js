import locales from 'app/config/locales.json';

export const getCharterPopupConfig = (locale) => {
    const defaultConfig = {
        active: false,
        url: '',
        threshold: 15,
    };

    if (locales[locale] && locales[locale].charter) {
        return {
            ...defaultConfig,
            ...locales[locale].charter,
        };
    }

    return defaultConfig;
};