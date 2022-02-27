import { cmsApiInstance } from 'app/index';
import {
  FEATURE_DARKEN_PAGE,
  FEATURE_DISTRIBUSION,
  FEATURE_ONLY_TRAIN_CITIES,
  FEATURE_POPULAR_SEARCHES,
  FEATURE_RECENT_SEARCHES_WITH_MAP,
} from 'app/config/features';
import { StoreState } from 'app/models/types';
import { createSelector } from 'reselect';
import { userTypeSelector } from './user';

export const optionsSelector = (state: StoreState) => state.general.options;
export const localeSelector = (state: StoreState) => state.general.options.locale;
export const serverSelector = (state: StoreState) => state.general.server;
export const featuresSelector = (state: StoreState) => state.general.features;

export const featureDarkenPageSelector = createSelector(
  featuresSelector,
  (features) => features[FEATURE_DARKEN_PAGE],
);

export const featureDistribusionSelector = createSelector(
  featuresSelector,
  (features) => features[FEATURE_DISTRIBUSION],
);

export const featurePopularSearchesSelector = createSelector(
  featuresSelector,
  (features) => features[FEATURE_POPULAR_SEARCHES],
);

export const featureRecentSearchesWithMapSelector = createSelector(
  featuresSelector,
  (features) => features[FEATURE_RECENT_SEARCHES_WITH_MAP],
);

export const distribusionEnabledSelector = createSelector(
  featureDistribusionSelector,
  userTypeSelector,
  (featureDistribusion, userType) =>
    featureDistribusion && (userType === 'customer' || userType === 'logged-in-customer'),
);

export const featureOnlyTrainCitiesSelector = createSelector(
  featuresSelector,
  (features) => features[FEATURE_ONLY_TRAIN_CITIES],
);

export const themeSelector = createSelector(optionsSelector, (opts) => opts.theme);

export const variantSelector = createSelector(optionsSelector, (options) => options.variant);

export const cmsApiOnDepartureChangeSelector = (
  state: StoreState,
): ((params: { uuid: string; cityName: string; legacyId: number }) => void) =>
  state.general.options.cmsApi?.onDepartureCityChanged || cmsApiInstance.onDepartureCityChanged;

export const cmsApiOnArrivalChangeSelector = (
  state: StoreState,
): ((params: { uuid: string; cityName: string; legacyId: number }) => void) =>
  state.general.options.cmsApi?.onArrivalCityChanged || cmsApiInstance.onArrivalCityChanged;
