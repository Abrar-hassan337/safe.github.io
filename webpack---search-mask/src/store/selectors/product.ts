import { createSelector } from 'reselect';
import {
  departureCountryCodeSelector,
  arrivalCountryCodeSelector,
  localeSelector,
} from 'app/store/selectors';
import { userTypeSelector } from 'app/store/selectors/user';
import {
  getCountryPassengersByCountryCodes,
  getCharterPopupConfig,
  getPassengerCount,
  isCharterPopupActive,
} from 'app/functions/product';
import { StoreState } from 'app/models/types';
import { StoreProductField } from 'app/models/types/store/product';
import { UserType } from '@webc/meeseeks-ui-sdk';

// this includes products that are not active in the current Country-Country pair
export const allProductTypesSelector = (state: StoreState) => state.product.types;

type currentProductTypesSelectorTyple = [
  StoreProductField['types'],
  string | undefined,
  string | undefined,
  UserType,
];

export const currentProductTypesSelector = createSelector(
  allProductTypesSelector,
  departureCountryCodeSelector,
  arrivalCountryCodeSelector,
  userTypeSelector,
  (...args: currentProductTypesSelectorTyple) => getCountryPassengersByCountryCodes(...args),
);

export const currentProductTypesExtendedSelector = createSelector(
  allProductTypesSelector,
  departureCountryCodeSelector,
  arrivalCountryCodeSelector,
  userTypeSelector,
  (...args: currentProductTypesSelectorTyple) =>
    getCountryPassengersByCountryCodes(...args, { extended: true }),
);

export const showExtendedProductsInfoSelector = createSelector(
  departureCountryCodeSelector,
  arrivalCountryCodeSelector,
  (a, b) => a === 'PL' && b === 'PL',
);

export const allProductsSelector = createSelector(
  currentProductTypesSelector,
  currentProductTypesExtendedSelector,
  (products, extendedProducts) => ({ ...products, ...extendedProducts }),
);

export const selectedProductsSelector = createSelector(allProductsSelector, (products) =>
  Object.values(products).reduce((acc, curr) => {
    if ((curr && curr.selectedAmount >= 1) || (curr && curr.id === 'bike_slot')) {
      acc[curr.id] = curr;
    }
    return acc;
  }, {} as Partial<StoreProductField['types']>),
);

export const charterPopupConfigSelector = createSelector(localeSelector, (locale: string) =>
  getCharterPopupConfig(locale),
);

export const passengerCountSelector = createSelector(allProductsSelector, getPassengerCount);

export const isCharterPopupActiveSelector = createSelector(
  passengerCountSelector,
  charterPopupConfigSelector,
  (...args: [number, any]) => isCharterPopupActive(...args),
);

export const wheelchairSelectedSelector = createSelector(selectedProductsSelector, (products) =>
  Boolean(products?.wheelchair?.selectedAmount),
);
