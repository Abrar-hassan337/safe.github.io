import { connect } from 'react-redux';
import { compose, withState, withStateHandlers, toClass, withProps } from 'recompose';
import { WithTranslations } from 'app/containers/WithTranslations';
import { emitFieldOpenedEvent, emitFieldClosedEvent } from 'app/events';
import {
  ProductPopup as ProductPopupUi,
  ProductPopupProps,
} from 'app/components/product/ProductPopup';
import { FIELD_PRODUCTS } from 'app/storage/fieldNames';
import {
  selectedProductsSelector,
  currentProductTypesSelector,
  currentProductTypesExtendedSelector,
  variantSelector,
  showExtendedProductsInfoSelector,
} from 'app/store/selectors';
import { StoreState } from 'app/models/types';
import { setProductQuantity } from 'app/store/actions';

const mapStateToProps = (state: StoreState) => ({
  selectedProducts: selectedProductsSelector(state),
  products: currentProductTypesSelector(state),
  extendedProducts: currentProductTypesExtendedSelector(state),
  showExtendedProductsInfo: showExtendedProductsInfoSelector(state),
  variant: variantSelector(state),
});

const mapDispatchToProps = {
  onSetProductQuantity: setProductQuantity,
};

export const ProductPopup = compose<ProductPopupProps, {}>(
  WithTranslations(
    () => ({
      getTranslationConfirmButtonLabel: 'search_bundle.search_widget.passengers.popup.btn.confirm',
      getTranslationDiscountsShow: 'search_bundle.search_widget.passengers.popup.btn.social_show',
      getTranslationDiscountsBack: 'search_bundle.search_widget.passengers.popup.btn.social_hide',
      getTranslationDiscountsInfo: 'search_bundle.search_widget.passengers.popup.link.social_info',
    }),
    true,
  ),
  withState('isExtendedVisible', 'setExtendedVisible', false),
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers(
    () => ({
      isOpen: false,
    }),
    {
      open: () => () => ({
        isOpen: true,
      }),
      close: () => () => ({
        isOpen: false,
      }),
    },
  ),
  toClass,
  withProps(
    ({
      isOpen,
      open,
      extendedProducts,
    }: {
      isOpen: boolean;
      open: () => void;
      extendedProducts: { [key: string]: any };
    }) => ({
      open() {
        if (!isOpen) {
          emitFieldOpenedEvent(FIELD_PRODUCTS);
        }
        open();
      },
      hasExtendedProducts: Object.keys(extendedProducts).length > 0,
      onPopupClosed: () => {
        emitFieldClosedEvent('products');
      },
    }),
  ),
)(ProductPopupUi);
