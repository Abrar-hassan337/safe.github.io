import { AutocompleteResult, SearchMaskLocation } from 'app/models/types/store/location';

export const mapAutocompleteToLocation = (
  result: AutocompleteResult,
): RequireAtLeastOne<
  PartialBy<SearchMaskLocation, 'countryCode' | 'timezoneOffset'>,
  'uuid' | 'legacyId'
> => ({
  uuid: result.id,
  legacyId: result.legacyId,
  name: result.name,
});
