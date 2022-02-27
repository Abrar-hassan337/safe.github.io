import { emitFieldClosedEvent, emitFieldOpenedEvent } from 'app/events';
import { useTranslations } from 'app/hooks/useTranslations';
import { AutocompleteResult, SearchMaskDirection } from 'app/models/types/store/location';
import { FIELD_ARRIVAL_CITY, FIELD_DEPARTURE_CITY } from 'app/storage/fieldNames';
import { requestAutocomplete } from 'app/store/actions';
import { autocompleteSelector, selectedLocationsSelector } from 'app/store/selectors';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useDropdown = (direction: SearchMaskDirection) => {
  const dispatch = useDispatch();
  const selected = useSelector(selectedLocationsSelector)[direction];
  const { getLoadingTranslation, getAutocompleteErrorTranslation } = useTranslations({
    getLoadingTranslation: 'search_mask.loading_autocomplete',
    getAutocompleteErrorTranslation: 'search_mask.error.autocomplete',
  });
  const autocomplete = useSelector(autocompleteSelector)[direction];
  const [hoveredResult, setHoveredResult] = useState<AutocompleteResult | null>(null);

  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>(selected.name || '');
  const [timeoutElapsed, setTimeoutElapsed] = useState<boolean>(true);

  const inputRef = useRef<HTMLInputElement>(null);
  const fullScreenInputRef = useRef<HTMLInputElement>(null);
  const timeout = useRef<ReturnType<typeof window.setTimeout> | null>(null);
  const loadingTimeout = useRef<ReturnType<typeof window.setTimeout> | null>(null);

  let message = null;
  if (autocomplete.error.present && timeoutElapsed) {
    message = getAutocompleteErrorTranslation();
  }
  if (autocomplete.loading && timeoutElapsed) {
    message = getLoadingTranslation();
  }

  useEffect(() => {
    if (selected.name) {
      setValue(selected.name || '');
    }
  }, [selected.name]);
  useEffect(() => {
    if (open) {
      fullScreenInputRef.current?.focus();
    }
  }, [open]);
  return {
    inputRef,
    fullScreenInputRef,
    value,
    setValue,
    message,
    onOpen: () => {
      setOpen(true);
      emitFieldOpenedEvent(direction === 'from' ? FIELD_DEPARTURE_CITY : FIELD_ARRIVAL_CITY);
    },
    onClose: () => {
      inputRef.current?.blur();
      setValue(selected.name ?? '');
      setOpen(false);
      emitFieldClosedEvent(direction === 'from' ? FIELD_DEPARTURE_CITY : FIELD_ARRIVAL_CITY);
    },
    open,
    hoveredResult,
    setHoveredResult,
    onChange: (e: React.SyntheticEvent, updateValue = true) => {
      const target = e.target as HTMLInputElement;
      const newValue = target.value;
      setHoveredResult(null);
      if (loadingTimeout.current) clearTimeout(loadingTimeout.current);
      if (timeout.current) clearTimeout(timeout.current);

      setTimeoutElapsed(false);
      timeout.current = setTimeout(
        () => {
          dispatch(
            requestAutocomplete(
              newValue ? newValue : selected.name || '',
              direction,
              direction === 'to',
            ),
          );
          loadingTimeout.current = setTimeout(() => {
            setTimeoutElapsed(true);
          }, 500);
        },
        value === '' ? 1 : 150,
      );
      if (updateValue) {
        setValue(newValue);
      }
    },
  };
};
