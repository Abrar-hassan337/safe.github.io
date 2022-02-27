import { compose } from 'recompose';
import { connect } from 'react-redux';
import {
  ProductSummary as DumbProductSummary,
  ProductSummaryProps,
} from 'app/components/product/ProductSummary';
import { WithTranslations } from 'app/containers/WithTranslations';
import { passengerCountSelector } from 'app/store/selectors';
import { StoreState } from 'app/models/types';

const mapStateToProps = (state: StoreState) => ({
  passengerCount: passengerCountSelector(state),
});

export const ProductSummary = compose<
  ProductSummaryProps,
  Pick<ProductSummaryProps, 'value' | 'onFocus' | 'onClick' | 'label' | 'inputRef'>
>(
  WithTranslations({
    getTranslationSummaryPlaceholder:
      'search_bundle.search_widget.passengers.please_add_passengers_placeholder',
  }),
  connect(mapStateToProps),
)(DumbProductSummary);
