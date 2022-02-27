import { ProductsId } from '@webc/meeseeks-ui-sdk';

export const SET_PRODUCT_QUANTITY = 'SET_PRODUCT_QUANTITY';
type SetProductQuantityAction = {
  type: typeof SET_PRODUCT_QUANTITY;
  productType: ProductsId;
  quantity: number;
};
export const setProductQuantity = (
  productType: ProductsId,
  quantity: number,
): SetProductQuantityAction => ({
  type: SET_PRODUCT_QUANTITY,
  productType,
  quantity,
});

export const SET_PRODUCT_PICKER_VISIBILITY = 'SET_PRODUCT_PICKER_VISIBILITY';
type SetProductPickerVisibilityAction = {
  type: typeof SET_PRODUCT_PICKER_VISIBILITY;
  isVisible: boolean;
};
export const setProductPickerVisibility = (
  isVisible: boolean,
): SetProductPickerVisibilityAction => ({
  type: SET_PRODUCT_PICKER_VISIBILITY,
  isVisible,
});

export const REMOVE_BIKES_FROM_PRODUCT = 'REMOVE_BIKES_FROM_PRODUCT';
type RemoveBikesFromProductAction = {
  type: typeof REMOVE_BIKES_FROM_PRODUCT;
};
export const removeBikesFromProduct = (): RemoveBikesFromProductAction => ({
  type: REMOVE_BIKES_FROM_PRODUCT,
});

export type ProductActions =
  | SetProductQuantityAction
  | SetProductPickerVisibilityAction
  | RemoveBikesFromProductAction;
