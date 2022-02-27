import React, { FC, ReactNode } from 'react';
import { isSearchInvalid } from 'app/functions/general';
import { Input, InputProps } from 'app/components/ui/Input';
import Icon from 'app/components/ui/Icon';
import styles from './ProductSummary.scss';

export type ProductSummaryProps = {
  value: string;
  label: ReactNode;
  passengerCount: number;
  onFocus?: InputProps['onFocus'];
  onClick?: InputProps['onClick'];
  getTranslationSummaryPlaceholder: () => string;
  inputRef: InputProps['inputRef'];
};
export const ProductSummary: FC<ProductSummaryProps> = ({
  value,
  label,
  getTranslationSummaryPlaceholder,
  passengerCount,
  onFocus,
  onClick,
  inputRef = null,
}) => (
    <div className={styles.input}>
      <Input
        value={value}
        label={label}
        placeholder={getTranslationSummaryPlaceholder()}
        onChange={() => {}}
        onFocus={onFocus}
        onClick={onClick}
        readOnly
        invalid={isSearchInvalid({ passengerCount })}
        inputRef={inputRef}
        icon={<Icon name="arrow-down" size="big" />}
        iconPosition="right"
      />
    </div>
  );
