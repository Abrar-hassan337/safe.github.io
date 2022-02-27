import React from 'react';
import PropTypes from 'prop-types';
import ProductStepper from 'app/components/product/ProductStepper';
import {
    getProductTranslationKey
} from 'app/functions/product';
import styles from './ProductList.scss';

export const ProductList = ({
    products,
    onSetProductQuantity
}) => ( <
    div className = {
        styles.productPicker
    } > {
        Object.keys(products).map((productType) => ( <
            ProductStepper key = {
                productType
            }
            productType = {
                productType
            }
            title = {
                getProductTranslationKey(productType, 'label')
            }
            description = {
                getProductTranslationKey(productType, 'description')
            }
            onChange = {
                (newQuantity) => {
                    onSetProductQuantity(productType, newQuantity);
                }
            }
            value = {
                products[productType].selectedAmount
            }
            max = {
                products[productType].maxAmount
            }
            />
        ))
    } <
    /div>
);

ProductList.propTypes = {
    products: PropTypes.objectOf(PropTypes.any).isRequired,
    onSetProductQuantity: PropTypes.func.isRequired,
};

export default ProductList;