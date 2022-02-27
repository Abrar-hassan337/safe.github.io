import React from 'react';
import PropTypes from 'prop-types';
import {
    getTestingAttributes
} from 'app/functions';
import {
    elements
} from 'app/tests/elements';
import {
    Translate
} from 'app/containers/Translate';
import NumericInput from 'app/components/ui/NumericInput';
import {
    Button
} from 'app/components/ui/Button';
import styles from './ProductStepper.scss';

const ProductStepper = ({
    productType,
    value,
    title,
    description,
    min,
    max,
    onChange
}) => ( <
    div className = {
        styles.productStepper
    }
    data - product - type = {
        productType
    } >
    <
    div className = {
        styles.productStepperInfo
    } >
    <
    div className = {
        styles.productStepperTitle
    } >
    <
    Translate id = {
        title
    }
    /> <
    /div> <
    div >
    <
    Translate id = {
        description
    }
    /> <
    /div> <
    /div> <
    div className = {
        styles.productStepperStepper
    } >
    <
    Button { ...getTestingAttributes(elements.PRODUCTS_MINUS_BUTTON)
    }
    onClick = {
        () => {
            onChange(value - 1);
        }
    }
    icon = "minus"
    disabled = {
        value === min
    }
    padless /
    >
    <
    NumericInput { ...getTestingAttributes(elements.PRODUCTS_NUMBER)
    }
    min = {
        min
    }
    max = {
        max
    }
    allowEmpty value = {
        value
    }
    onChange = {
        (e) => {
            onChange(e.target.value);
        }
    }
    /> <
    Button { ...getTestingAttributes(elements.PRODUCTS_PLUS_BUTTON)
    }
    onClick = {
        () => {
            onChange(value + 1);
        }
    }
    icon = "plus"
    disabled = {
        value === max
    }
    padless /
    >
    <
    /div> <
    /div>
);

ProductStepper.propTypes = {
    productType: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    min: PropTypes.number,
    max: PropTypes.number,
    onChange: PropTypes.func.isRequired,
};

ProductStepper.defaultProps = {
    min: 0,
    max: null,
};

export default ProductStepper;