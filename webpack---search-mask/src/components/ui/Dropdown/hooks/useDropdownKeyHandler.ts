import { mapAutocompleteToLocation } from 'app/functions';
import { AutocompleteResult, SearchMaskDirection } from 'app/models/types/store/location';
import { requestUpdateLocation } from 'app/store/actions';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

export const useDropdownKeyHandler = (
  direction: SearchMaskDirection,
  results: Map<string, AutocompleteResult[]>,
  hoveredResult: AutocompleteResult | null,
  setHoveredResult: (r: AutocompleteResult | null) => void,
  closeDropdown: () => void,
) => {
  const [flattened, setFlattened] = useState(() =>
    [...new Map(results).values()].reduce((acc, curr) => [...acc, ...curr], []),
  );
  const tabKeyPressed = useRef<boolean>(false);
  const forceScrollIntoView = useRef<boolean>(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setFlattened([...results.values()].reduce((acc, curr) => [...acc, ...curr], []));
  }, [results]);
  return {
    handler: (e: React.KeyboardEvent) => {
      // ESC key
      if (e.which === 27) {
        closeDropdown();
      }

      // ENTER or TAB: select current value
      if ((e.which === 13 || e.which === 9) && hoveredResult) {
        dispatch(requestUpdateLocation(direction, mapAutocompleteToLocation(hoveredResult)));
        closeDropdown();
      }

      tabKeyPressed.current = e.which === 9;

      // UP or DOWN keys:
      if (e.which === 38 || e.which === 40) {
        e.preventDefault();
        const hoveredIndex = flattened.findIndex((result: AutocompleteResult) => {
          return hoveredResult && hoveredResult.hash === result.hash;
        });

        let newIndex;

        switch (e.which) {
          // up key
          case 38: {
            newIndex = Math.abs(Math.max(hoveredIndex - 1, 0));
            break;
          }
          // down key
          case 40: {
            // prevent index from going over the number of results
            newIndex = Math.min(hoveredIndex + 1, flattened.length ? flattened.length - 1 : 0);
            break;
          }
          default: // noop
        }

        // because we are using keyboard navigation, force elements into view
        forceScrollIntoView.current = true;
        setHoveredResult(flattened[newIndex ?? 0]);
      }
    },
    tabKeyPressed,
    forceScrollIntoView,
  };
};
