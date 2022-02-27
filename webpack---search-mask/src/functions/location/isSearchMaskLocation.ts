import { PartialSearchMaskLocation, SearchMaskLocation } from 'app/models/types/store/location';

export const isSearchMaskLocation = (
  loc: SearchMaskLocation | PartialSearchMaskLocation,
): loc is SearchMaskLocation => {
  return (loc as SearchMaskLocation).timezoneOffset !== undefined;
};
