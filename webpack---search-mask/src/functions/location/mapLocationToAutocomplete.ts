import { AutocompleteResult, SearchMaskLocation } from 'app/models/types/store/location';

export const mapLocationToAutocomplete = (
  location: SearchMaskLocation,
): Pick<AutocompleteResult, 'id' | 'name' | 'legacyId'> => ({
  id: location.uuid,
  name: location.name,
  legacyId: location.legacyId,
});
