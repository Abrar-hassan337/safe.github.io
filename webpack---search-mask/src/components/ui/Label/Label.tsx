import React, { FC, ReactNode } from 'react';
import cn from 'classnames';
import styles from './Label.scss';

export type LabelProps = {
  icon?: ReactNode | null;
  hideOnSmallScreens?: boolean;
  children: ReactNode;
};

export const Label: FC<LabelProps> = ({ children, icon = null, hideOnSmallScreens = false }) => (
  <label
    className={cn(`smhc-label smhc-input__label ${styles.label}`, {
      [styles.hideOnSmallScreens]: Boolean(hideOnSmallScreens),
    })}
  >
    {icon}
    <span>{children}</span>
  </label>
);
