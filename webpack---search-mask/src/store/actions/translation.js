export const REQUEST_TRANSLATIONS_SUCCEEDED = 'REQUEST_TRANSLATIONS_SUCCEEDED';
export const requestTranslationsSucceeded = (strings) => ({
    type: REQUEST_TRANSLATIONS_SUCCEEDED,
    strings,
});