import React, { FC, memo, useEffect, useRef } from 'react';
import cn from 'classnames';
import Highlighter from 'react-highlight-words';
import styles from './Option.scss';
import { AutocompleteResult } from 'app/models/types/store/location';
import { useTranslations } from 'app/hooks/useTranslations';
import { elementIsOutOfView } from 'app/functions';

type DropdownOptionComponentProps = {
  isSelected: boolean;
  result: AutocompleteResult;
  onClick: (x: AutocompleteResult) => void;
  onHover: (e: React.SyntheticEvent) => void;
  inputValue: string;
  icon?: React.ReactNode;
  parentRef: React.RefObject<HTMLDivElement>;
};

export const Option: FC<DropdownOptionComponentProps> = memo(
  ({ isSelected, parentRef, result, onClick, onHover, inputValue, icon }) => {
    const elementRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
      if (isSelected && elementRef.current && parentRef.current) {
        const elemOutOfView = elementIsOutOfView(elementRef.current, parentRef.current);
        if (!elemOutOfView) return;
        elementRef.current.scrollIntoView({
          block: elemOutOfView === 'top' ? 'start' : 'end',
        });
      }
    }, [isSelected]);
    // @ts-ignore
    const { getTranslation } = useTranslations({}, true);
    const countryTranslation = getTranslation(result.country);

    return (
      <li
        className={cn('notranslate', styles.cityInNetwork, styles.optionWrapper, {
          [styles.buttonSelected]: isSelected,
        })}
      >
        <button
          ref={elementRef}
          className={styles.button}
          onClick={() => onClick(result)}
          onMouseEnter={onHover}
        >
          <div className={styles.optionLabel}>
            <div className={styles.cityName}>
              <Highlighter searchWords={[inputValue]} textToHighlight={result.name} autoEscape />
            </div>
            <div className={styles.additionalInfo}>
              {result.district ? `${result.district}, ` : null}
              {countryTranslation
                ? countryTranslation
                : result.country
                ? result.country.toUpperCase()
                : // @ts-ignore
                  result.countryCode.toUpperCase()}
            </div>
          </div>
        </button>
        {icon && icon}
      </li>
    );
  },
);
