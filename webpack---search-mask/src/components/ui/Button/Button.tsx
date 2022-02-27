import React from 'react';
import cn from 'classnames';
import Icon from 'app/components/ui/Icon';
import styles from './Button.scss';

type Props = {
  onClick: (x: any) => void;
  icon?: string;
  extraClassName?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  variant?: 'clear' | 'primary' | 'secondary';
  iconPosition?: 'left' | 'right';
  padless?: boolean;
  sizeless?: boolean;
  [k: string]: any;
};

export const Button: React.FC<Props> = ({
  onClick,
  icon,
  children,
  disabled = false,
  variant = 'clear',
  iconPosition = 'left',
  padless = false,
  sizeless = false,
  extraClassName,
  ...rest
}) => (
  <button
    className={cn({
      [styles.button]: true,
      [styles.padless]: padless,
      [styles.sizeless]: sizeless,
      [styles.primary]: variant === 'primary',
      [styles.secondary]: variant === 'secondary',
      [extraClassName as string]: extraClassName !== undefined,
    })}
    onClick={onClick}
    disabled={disabled}
    {...rest}
  >
    {icon && iconPosition === 'left' && <Icon name={icon} />}
    {children}
    {icon && iconPosition === 'right' && <Icon name={icon} />}
  </button>
);
