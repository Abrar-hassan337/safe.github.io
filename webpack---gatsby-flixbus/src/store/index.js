import React, {
    createContext
} from 'react';

const initialState = {
    langcode: 'en-gl',
    translations: [],
    domain: 'global.flixbus.com'
};

const AppContext = createContext(initialState);

const AppContextProvider = ({
        children,
        value
    }) => {
        const translations = [];

        Object.keys(value.translations).forEach(x => {
            translations[value.translations[x].key] =
                value.translations[x].value;
        });

        const newVal = {
            ...value,
            translations
        }

        return ( < AppContext.Provider value = {
                newVal
            } > {
                children
            } < /AppContext.Provider>);
        };

        const AppContextConsumer = AppContext.Consumer;

        export {
            initialState,
            AppContext,
            AppContextProvider,
            AppContextConsumer
        }