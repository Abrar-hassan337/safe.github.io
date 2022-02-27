import React, { FC, useEffect, useRef } from 'react';
import Icon from '../Icon';
import styles from './DropdowResults.scss';
import { Option } from 'app/components/ui/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { emitSelectCityEvent } from 'app/events';
import { AutocompleteResult, SearchMaskDirection } from 'app/models/types/store/location';
import { removeRecentCity } from 'app/store/actions';
import { useResults } from 'app/hooks/useResults';
import { featureRecentSearchesWithMapSelector } from 'app/store/selectors';
import { MapLink } from '../MapLink/MapLink';
import { useTranslations } from 'app/hooks/useTranslations';

export type DropdownResultsProps = {
  inputValue: string;
  selectedResult: AutocompleteResult | null;
  wrapperRef: React.RefObject<HTMLDivElement>;
  onHover: (e: React.SyntheticEvent, result: AutocompleteResult) => void;
  onChange: (city: AutocompleteResult) => void;
  direction: SearchMaskDirection;
  isOpen: boolean;
};

export const DropdownResults: FC<DropdownResultsProps> = ({
  inputValue,
  selectedResult,
  onHover,
  onChange,
  direction,
  isOpen,
  wrapperRef,
}) => {
  const dispatch = useDispatch();
  const { results, type: resultsType } = useResults(direction, inputValue !== '');
  const isRecentSearchesWithMapEnabled = useSelector(featureRecentSearchesWithMapSelector);
  const { getTranslation } = useTranslations({}, true);

  const RemoveButton: FC<{ city: AutocompleteResult }> = ({ city }) => (
    <button
      className={styles.removeIcon}
      onClick={() => dispatch(removeRecentCity(direction, city.id))}
    >
      <Icon size="inherit" name="close" extraClassName={styles.resetLeft} />
    </button>
  );

  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleHover = (e: React.SyntheticEvent, city: AutocompleteResult) => {
    e.persist();
    // TODO: investigate why it does happen only with recent
    if (resultsType === 'recent') {
      timeoutId.current = setTimeout(onHover, 0, e, city);
      return;
    }
    onHover(e, city);
  };

  useEffect(() => {
    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, []);

  return (
    <ul className={styles.dropdownList}>
      {isOpen &&
        [...results.keys()].map((key) => {
          const section = results.get(key);
          if (section) {
            return (
              <React.Fragment key={key}>
                <li className={styles.continent}>
                  {resultsType !== 'autocomplete' && (
                    <Icon size="inherit" name="time-solid" extraClassName={styles.resetLeft} />
                  )}
                  <span>{key}</span>
                </li>
                {section.map((result: AutocompleteResult, index: number) => (
                  <Option
                    key={result.hash}
                    result={result}
                    inputValue={inputValue}
                    parentRef={wrapperRef}
                    isSelected={result.hash === selectedResult?.hash}
                    onClick={(city: AutocompleteResult) => {
                      onChange(city);
                      emitSelectCityEvent(
                        direction,
                        city.isFlixbusCity,
                        city.id,
                        city.name,
                        city.country,
                        inputValue,
                        index,
                        resultsType === 'recent',
                        resultsType === 'popular',
                      );
                    }}
                    onHover={(e: React.SyntheticEvent) => {
                      handleHover(e, result);
                    }}
                    icon={resultsType === 'recent' ? <RemoveButton city={result} /> : null}
                  />
                ))}
              </React.Fragment>
            );
          }
        })}
      {isRecentSearchesWithMapEnabled && resultsType !== 'autocomplete' && (
        <li>
          <MapLink
            title={getTranslation(
              `search_mask.label.${direction === 'from' ? 'where_to_start' : 'where_to_go'}`,
            )}
            text={getTranslation('search_mask.label.explore_the_map')}
          />
        </li>
      )}
    </ul>
  );
};
