export const localeMapping = {
    sr: 'sr_Latn_RS',
    rs: 'sr_Latn_RS',
    nb: 'no',
};

export const mapLocale = (originalLocale) => {
    if (originalLocale in localeMapping) {
        return localeMapping[originalLocale];
    }

    return originalLocale;
};