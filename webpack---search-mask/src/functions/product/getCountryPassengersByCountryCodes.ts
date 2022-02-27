import { productsConfig, ProductsId, UserType, extendedProductRules } from '@webc/meeseeks-ui-sdk';
import { StoreProductField } from 'app/models/types/store/product';

const defaultKey = 'Any-Any';

function isProductIds(arg: ProductsId[] | undefined): arg is ProductsId[] {
  return arg !== undefined;
}
/**
 * products rules differ from country to country and this function make sure to apply correct rules
 * it does so by retrieving the overall product config and extracting the pax types that match countries
 * of current search.
 * Rules are always referenced as "DE-DE" where "Any-Any" is the default rule for country which do NOT have specific rules
 *
 * Further more this function applies any custom rule which only exists for search.
 * This rules are described in extendedProductRules
 *
 */
export const getCountryPassengersByCountryCodes = (
  allProducts: StoreProductField['types'],
  departureCountryCode: string | undefined,
  arrivalCountryCode: string | undefined,
  userType: UserType,
  options = { extended: false },
): Partial<StoreProductField['types']> => {
  const passengerRules = !options.extended
    ? productsConfig.countryPassengerRules
    : productsConfig.countryPassengerRulesExtended;
  const countryId = `${departureCountryCode}-${arrivalCountryCode}`;
  const countryRule = passengerRules[countryId];
  const extendedRule = extendedProductRules[countryId] && extendedProductRules[countryId][userType];
  const rule = isProductIds(countryRule) ? countryRule : passengerRules[defaultKey];
  if (!rule) return {};
  return rule.reduce((acc, c) => {
    if (!extendedRule) {
      acc[c] = { ...allProducts[c as ProductsId] };
    } else if (extendedRule && c in extendedRule) {
      acc[c] = { ...allProducts[c as ProductsId] };
      acc[c].maxAmount = extendedRule[c]!.maxAmount;
    }
    if (acc[c] && acc[c].selectedAmount >= acc[c].maxAmount) {
      acc[c].selectedAmount = acc[c].maxAmount;
    }
    return acc;
  }, {} as StoreProductField['types']);
};
