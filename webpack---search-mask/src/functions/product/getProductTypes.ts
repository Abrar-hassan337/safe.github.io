import { ProductsId, productsConfig } from '@webc/meeseeks-ui-sdk';
import { StoreProductField } from 'app/models/types/store/product';

export const getProductTypes = (): StoreProductField['types'] => {
  const config = productsConfig.productTypes;
  return (Object.keys(config) as ProductsId[])
    .map((key) => ({
      id: key,
      selectedAmount: config[key].defaultAmount,
      maxAmount: config[key].maxAmount,
      defaultAmount: config[key].defaultAmount,
    }))
    .reduce((acc, curr) => {
      const { id, ...rest } = curr;
      acc[id] = { id, ...rest };
      return acc;
    }, {} as StoreProductField['types']);
};
