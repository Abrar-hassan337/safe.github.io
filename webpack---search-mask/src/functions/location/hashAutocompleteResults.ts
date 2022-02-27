import { AutocompleteResult } from 'app/models/types/store/location';

export const hashAutocompleteResults = (results: AutocompleteResult[]) =>
  results.reduce((hash, curr) => `${hash}-${curr.id}`, '');
