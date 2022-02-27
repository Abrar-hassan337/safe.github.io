import { ProductsId } from '@webc/meeseeks-ui-sdk';
import { StoreProductField } from 'app/models/types/store/product';

export const getPassengerCount = (productTypes: Partial<StoreProductField['types']>) => {
  let count = 0;

  (Object.keys(productTypes) as ProductsId[]).forEach((type) => {
    // bike is not a valid passenger
    if (type !== 'bike_slot') {
      count += productTypes[type]!.selectedAmount;
    }
  });

  return count;
};
