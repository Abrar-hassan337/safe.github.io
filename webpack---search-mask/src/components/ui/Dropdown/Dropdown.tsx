import React, { FC, useEffect, useRef } from 'react';
import { AutocompleteResult, SearchMaskDirection } from 'app/models/types/store/location';
import Icon from 'app/components/ui/Icon';
import classNames from 'classnames';
import { Responsive } from 'app/components/ui/Responsive';
import { Input } from 'app/components/ui/Input';
import { ResponsivePopup } from 'app/components/ui/ResponsivePopup';
import styles from './Dropdown.scss';
import { useTranslations } from 'app/hooks/useTranslations';
import { useDispatch, useSelector } from 'react-redux';
import { selectedLocationsSelector } from 'app/store/selectors';
import { DropdownResults } from '../DropdownResults/DropdownResults';
import { useResults } from 'app/hooks/useResults';
import { breakpointMatches, mapAutocompleteToLocation } from 'app/functions';
import { useDropdown } from './hooks/useDropdown';
import { requestUpdateLocation } from 'app/store/actions';
import { emitFieldChangedEvent } from 'app/events';
import { useDropdownKeyHandler } from './hooks/useDropdownKeyHandler';

export type DropdownProps = {
  direction: SearchMaskDirection;
};

const Dropdown: FC<DropdownProps> = ({ direction }) => {
  const dispatch = useDispatch();
  const { translationGetLabel } = useTranslations({
    translationGetLabel: direction,
  });
  const {
    value,
    setValue,
    inputRef,
    fullScreenInputRef,
    message,
    onChange,
    open,
    onOpen,
    onClose,
    hoveredResult,
    setHoveredResult,
  } = useDropdown(direction);
  const { results } = useResults(direction, !!value);
  const keyboardHandlerHook = useDropdownKeyHandler(
    direction,
    results,
    hoveredResult,
    setHoveredResult,
    onClose,
  );
  const onHoverResult = (event: React.SyntheticEvent, result: AutocompleteResult) => {
    event.stopPropagation();
    if (hoveredResult && result.hash === hoveredResult.hash) {
      return;
    }
    setHoveredResult(result);
  };
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    keyboardHandlerHook.forceScrollIntoView.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, message]);
  const selected = useSelector(selectedLocationsSelector)[direction];
  return (
    <div className={styles.dropdown}>
      <Input
        label={translationGetLabel()}
        inputRef={inputRef}
        value={value}
        onFocus={(e) => {
          onOpen();
          setValue('');
          onChange(e, false);
          if (fullScreenInputRef.current) {
            fullScreenInputRef.current.focus();
          }
        }}
        placeholder={selected.name}
        onChange={onChange}
        onBlur={() => {
          if (!fullScreenInputRef.current) {
            setValue(selected.name || '');
          }
          if (keyboardHandlerHook.tabKeyPressed.current) {
            onClose();
            keyboardHandlerHook.tabKeyPressed.current = false;
          }
        }}
        onKeyDown={keyboardHandlerHook.handler}
        // Horrible hack in order to suppress chrome's address autofill.
        // Passing off or false will not work.
        // It has to be specifically anything but that.
        autoComplete="random-string"
        autoCorrect="off"
        spellCheck={false}
        icon={<Icon size="inherit" name="pin-solid" extraClassName="pin-icon" />}
      />

      <ResponsivePopup
        padding={false}
        visible={open && results.size > 0}
        border={(results.size > 0 || message) && open}
        title={translationGetLabel()}
        autoWidth={!breakpointMatches('medium').matches}
        onClose={(close: boolean, event: React.SyntheticEvent) => {
          if (inputRef.current === event.target) {
            return;
          }
          if (close) {
            onClose();
          }
        }}
        scrollableContent={false}
        onTouch={() => {
          fullScreenInputRef.current?.blur();
        }}
        centerAligned={false}
      >
        <Responsive />
        <div
          className={classNames({
            [styles.dropdownWrapper]: true,
            [styles.breakMedium]: breakpointMatches('medium').matches,
            [styles.breakLarge]: breakpointMatches('large').matches,
            [styles.dropdownWrapperOpen]: open,
          })}
          ref={wrapperRef}
        >
          <div className={styles.fullScreenInputContainer}>
            <Input
              inputRef={fullScreenInputRef}
              value={value}
              placeholder={selected.name}
              onChange={onChange}
              onKeyDown={keyboardHandlerHook.handler}
            />
          </div>

          {message && <div className={styles.errorMessage}>{message}</div>}

          {!message && results.size >= 1 && (
            <DropdownResults
              wrapperRef={wrapperRef}
              inputValue={value}
              selectedResult={hoveredResult}
              onHover={onHoverResult}
              onChange={(city) => {
                dispatch(requestUpdateLocation(direction, mapAutocompleteToLocation(city)));
                emitFieldChangedEvent(
                  direction === 'from' ? 'location.departure' : 'location.arrival',
                  city.name,
                );
                onClose();
              }}
              direction={direction}
              isOpen={open}
            />
          )}
        </div>
      </ResponsivePopup>
    </div>
  );
};

export default Dropdown;
