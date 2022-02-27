import React, { FC, InputHTMLAttributes, ReactNode, Ref } from 'react';
import classNames from 'classnames';
import { Label } from 'app/components/ui/Label';
import styles from './Input.scss';

export type InputProps = InputHTMLAttributes<HTMLInputElement | HTMLDivElement> & {
  label?: ReactNode;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  iconPosition?: 'left' | 'right';
  isValid?: ((s: string) => boolean) | null;
  appearAsFocused?: boolean;
  hasMenu?: boolean;
  icon?: ReactNode;
  invalid?: boolean;
  inputRef?: Ref<any>;
  inputComponent?: ReactNode;
  showTooltipArrow?: boolean;
};

const defaults: InputProps = {
  label: null,
  value: '',
  type: 'text',
  isValid: null,
  appearAsFocused: false,
  showTooltipArrow: false,
  hasMenu: false,
  icon: null,
  iconPosition: 'left',
  invalid: false,
  inputRef: () => {},
  inputComponent: null,
};

export const Input: FC<InputProps> = ({
  label,
  value,
  onChange,
  type,
  isValid,
  appearAsFocused, // eslint-disable-line
  hasMenu, // eslint-disable-line
  icon,
  inputRef,
  invalid,
  inputComponent, // eslint-disable-line
  iconPosition,
  showTooltipArrow,
  ...rest
} = defaults) => (
  <div className="smhc-control">
    {label && <Label hideOnSmallScreens>{label}</Label>}
    <div
      className={classNames({
        'smhc-input': true,
        'smhc-input--error': invalid,
        [styles.inputWrapper]: true,
        [styles.tooltipArrow]: showTooltipArrow,
        [styles.hasIcon]: !!icon,
        [styles.iconRight]: iconPosition === 'right',
      })}
    >
      <input
        type={type}
        className="smhc-input__field"
        placeholder="..."
        value={value}
        ref={inputRef}
        {...rest}
        onChange={(e) => {
          const newValue = e.target.value;

          if (typeof isValid === 'function') {
            if (!isValid(newValue)) {
              return;
            }
          }
          if (onChange) {
            onChange(e);
          }
        }}
      />
      {icon && (
        <div
          role="presentation"
          className={styles.icon}
          onClick={(e) => {
            if (rest.onClick) {
              rest.onClick(e);
              return;
            }

            if (rest.onFocus) {
              // @ts-ignore
              rest.onFocus(e);
            }
          }}
        >
          {icon}
        </div>
      )}
    </div>
  </div>
);
