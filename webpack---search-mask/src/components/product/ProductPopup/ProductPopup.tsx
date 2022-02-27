import React, { ReactNode } from 'react';
import { CharterMessage } from 'app/containers/CharterMessage';
import { getTranslatedSummary } from 'app/functions/product';
import { ProductSummary } from 'app/containers/ProductSummary';
import ProductList from 'app/components/product/ProductList';
import { ResponsivePopup } from 'app/components/ui/ResponsivePopup';
import { Button } from 'app/components/ui/Button';
import { ProductsId } from '@webc/meeseeks-ui-sdk';
import styles from './ProductPopup.scss';
import { WheelchairMessage } from 'app/containers/WheelchairMessage';

export type ProductPopupProps = {
  label: ReactNode;
  selectedProducts: { [key in ProductsId]?: number };
  products: { [key in ProductsId]?: number };
  extendedProducts: { [key in ProductsId]?: number };
  extendedProductsInformationLink: string;
  onSetProductQuantity: (s: ProductsId, amount: number) => void;
  onPopupClosed: () => void;
  hasExtendedProducts: boolean;
  getTranslationConfirmButtonLabel: () => string;
  getTranslationDiscountsShow: () => string;
  getTranslationDiscountsBack: () => string;
  getTranslationDiscountsInfo: () => string;
  getTranslation: () => string;
  isExtendedVisible: boolean;
  setExtendedVisible: (set: boolean) => void;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  popupTitle: string;
  showExtendedProductsInfo: boolean;
};
export class ProductPopup extends React.PureComponent<ProductPopupProps> {
  input?: HTMLInputElement;

  constructor(props: ProductPopupProps) {
    super(props);
    this.close = this.close.bind(this);
  }

  close() {
    const { close, onPopupClosed } = this.props;

    close();
    onPopupClosed();
  }

  render() {
    const {
      selectedProducts,
      getTranslation,
      products,
      hasExtendedProducts,
      extendedProducts,
      extendedProductsInformationLink,
      isOpen,
      open,
      isExtendedVisible,
      setExtendedVisible,
      onSetProductQuantity,
      getTranslationConfirmButtonLabel,
      getTranslationDiscountsShow,
      getTranslationDiscountsBack,
      getTranslationDiscountsInfo,
      label,
      popupTitle,
      showExtendedProductsInfo,
    } = this.props;
    return (
      <div className={styles.productWrapper}>
        <ProductSummary
          value={getTranslatedSummary(selectedProducts, getTranslation)}
          onFocus={() => {
            open();
            this.input && this.input.blur();
          }}
          onClick={open}
          label={label}
          inputRef={(el: any) => {
            this.input = el;
          }}
        />

        <ResponsivePopup
          title={popupTitle}
          // @ts-ignore
          onClose={(hide, event) => {
            // @ts-ignore
            const isVisible = event.target === this.input ? true : !hide;

            if (isVisible) {
              open();
            } else {
              this.close();
            }

            if (!isVisible) {
              setExtendedVisible(false);
            }
          }}
          visible={isOpen}
          actions={
            <Button variant="primary" onClick={this.close}>
              {getTranslationConfirmButtonLabel()}
            </Button>
          }
        >
          <div className={styles.productWrapperList}>
            {isExtendedVisible && hasExtendedProducts ? (
              <div className={styles.productWrapperExtendedHeader}>
                <div className={`${styles.backProduct} smhc-control`}>
                  <button
                    onClick={() => setExtendedVisible(false)}
                    className={`${styles.productButton} smhc-btn-arrow smhc-btn-arrow--back smhc-link`}
                    type="button"
                  >
                    {getTranslationDiscountsBack()}
                  </button>
                </div>
                {showExtendedProductsInfo && (
                  <a
                    className="smhc-link"
                    href={extendedProductsInformationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {getTranslationDiscountsInfo()}
                  </a>
                )}
              </div>
            ) : null}

            <CharterMessage />

            <ProductList
              products={isExtendedVisible ? extendedProducts : products}
              onSetProductQuantity={onSetProductQuantity}
            />

            <WheelchairMessage />

            {isExtendedVisible || !hasExtendedProducts ? null : (
              <div className={styles.productWrapperExtendedFooter}>
                <div className="smhc-control">
                  <button
                    onClick={() => setExtendedVisible(true)}
                    className={`${styles.productButton} smhc-btn-arrow smhc-link`}
                    type="button"
                  >
                    {getTranslationDiscountsShow()}
                  </button>
                </div>
                {showExtendedProductsInfo && (
                  <a
                    className="smhc-link"
                    href={extendedProductsInformationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {getTranslationDiscountsInfo()}
                  </a>
                )}
              </div>
            )}
          </div>
        </ResponsivePopup>
      </div>
    );
  }
}
