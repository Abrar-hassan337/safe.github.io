import React from 'react';
import PropTypes from 'prop-types';
import {
    getTestingAttributes
} from 'app/functions';
import {
    elements
} from 'app/tests/elements';
import cn from 'classnames';
import {
    compose,
    withProps
} from 'recompose';
import {
    retryCall
} from 'app/api';
import {
    connect
} from 'react-redux';
import {
    LazyComponent
} from 'app/containers/LazyComponent';
import {
    WithTranslations
} from 'app/containers/WithTranslations';
import {
    WithOptions
} from 'app/containers/WithOptions';
import {
    Label
} from 'app/components/ui/Label';
import {
    InputFallback
} from 'app/components/ui/InputFallback';
import {
    variantSelector
} from 'app/store/selectors';
import {
    getPolishDiscountLink
} from 'app/functions/product';
import styles from './TripProductPicker.scss';

const ProductPopup = React.lazy(() =>
    retryCall(() =>
        import ('app/containers/ProductPopup').then((e) => ({
            default: e.ProductPopup,
        })),
    ),
);

export const TripProductPicker = ({
        getPassengersLabel,
        getTranslationLoading,
        locale,
        variant,
    }) => ( <
        div { ...getTestingAttributes(elements.PRODUCTS_INPUT_FIELD)
        }
        className = {
            cn(styles.productPicker, {
                [styles.nonCompact]: variant !== 'compact',
            })
        } >
        <
        LazyComponent fallback = { <
            InputFallback
            label = {
                getPassengersLabel()
            }
            loadingMessage = {
                `${getTranslationLoading()}...`
            }
            />
        } >
        <
        ProductPopup label = { < Label > {
                getPassengersLabel()
            } < /Label>}
            extendedProductsInformationLink = {
                getPolishDiscountLink(locale)
            }
            popupTitle = {
                getPassengersLabel()
            }
            /> <
            /LazyComponent> <
            /div>
        );

        TripProductPicker.propTypes = {
            // Translations
            getPassengersLabel: PropTypes.func.isRequired,
            getTranslationLoading: PropTypes.func.isRequired,
            locale: PropTypes.string.isRequired,
            variant: PropTypes.string.isRequired,
        };

        const mapStateToProps = (state) => ({
            variant: variantSelector(state),
        });

        export default compose(
            WithOptions,
            WithTranslations({
                getPassengersLabel: 'search_bundle.search_widget.passengers',
                getTranslationLoading: 'search_mask.loading',
            }),
            connect(mapStateToProps, {}),
            withProps((props) => ({
                locale: props.options.locale,
            })),
        )(TripProductPicker);