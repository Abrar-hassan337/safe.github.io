import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {
    requestSearchWatcher,
    setReturnDateWatcher,
    onUpdateOptions,
    onRemoveBikesFromProduct,
    onUpdateLocations,
    onUpdateDates,
    onToggleFeature,
    onRetrieveRecentCities,
    onLoadPopularCities,
    onLoadArrivalPopularCities,
    onStoreRecentCity,
    onRemoveRecentCity,
    onSetLocation,
    onRequestUpdateLocation,
    onRequestAutocomplete,
} from 'app/store/sagas';
import {
    isDevelopment,
    isProduction
} from 'app/functions/environment';
import {
    features as defaultFeatures
} from 'app/config/features';
import {
    featureToggler
} from 'app/functions/abTests/featureToggler';
import {
    isIsolated
} from 'app/index';
import {
    variants
} from 'app/options';
import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

const enhancers = [];
const middleware = [sagaMiddleware];

if (isDevelopment()) {
    const {
        __REDUX_DEVTOOLS_EXTENSION__
    } = window;

    if (typeof __REDUX_DEVTOOLS_EXTENSION__ === 'function') {
        enhancers.push(__REDUX_DEVTOOLS_EXTENSION__());
    }
}

const sagas = [
    onRequestAutocomplete,
    onUpdateOptions,
    requestSearchWatcher,
    setReturnDateWatcher,
    onRemoveBikesFromProduct,
    onUpdateLocations,
    onUpdateDates,
    onToggleFeature,
    onRetrieveRecentCities,
    onLoadPopularCities,
    onLoadArrivalPopularCities,
    onStoreRecentCity,
    onRemoveRecentCity,
    onSetLocation,
    onRequestUpdateLocation,
];

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

let unsubscribe;

export const getStore = (initialState = {}) => {
    if (typeof unsubscribe === 'function') {
        unsubscribe();
    }

    const initialFeatures = initialState.general.options.features || {};

    const defaultStore = {
        ...initialState,
        general: {
            ...initialState.general,
            features: {
                ...defaultFeatures,
                ...initialFeatures,
            },
        },
    };

    const store = createStore(rootReducer, defaultStore, composedEnhancers);

    featureToggler(store.dispatch);

    if (!isProduction()) {
        if (module.hot) {
            module.hot.accept('./reducers', () => {
                store.replaceReducer(rootReducer);
            });
        }
    }

    // register sagas
    sagas.map((saga) => sagaMiddleware.run(saga));

    // Add some options to the body when the options change.
    if (isIsolated) {
        unsubscribe = store.subscribe(() => {
            const {
                general
            } = store.getState();
            const {
                options
            } = general;
            const {
                variant
            } = options;

            variants.map((v) => `variant-${v.value}`).forEach((v) => document.body.classList.remove(v));

            document.body.classList.add(`variant-${variant}`);
        });
    }

    return store;
};