import { SET_PRODUCT_QUANTITY, REMOVE_BIKES_FROM_PRODUCT, ProductActions } from 'app/store/actions';
import { getProductTypes } from 'app/functions/product';
import { StoreState } from 'app/models/types';

const defaultState = {
  types: getProductTypes(),
  productPickerVisible: true,
};

export default (
  state: StoreState['product'] = defaultState,
  action: ProductActions,
): StoreState['product'] => {
  switch (action.type) {
    case SET_PRODUCT_QUANTITY: {
      return {
        ...state,
        types: {
          ...state.types,
          [action.productType]: {
            ...state.types[action.productType],
            selectedAmount: Number.isNaN(action.quantity) ? 0 : action.quantity,
          },
        },
      };
    }
    case REMOVE_BIKES_FROM_PRODUCT: {
      return {
        ...state,
        types: {
          ...state.types,
          bike_slot: {
            ...state.types.bike_slot,
            selectedAmount: 0,
          },
        },
      };
    }

    default:
      return state;
  }
};
