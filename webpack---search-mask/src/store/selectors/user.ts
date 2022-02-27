import { UserType } from '@webc/meeseeks-ui-sdk';
import { StoreState } from 'app/models/types';

export const userTokenSelector = (state: StoreState): string | null =>
  state.general.options.userToken;

export const userTypeSelector = (state: StoreState): UserType =>
  state.general.options.userType || 'customer';
