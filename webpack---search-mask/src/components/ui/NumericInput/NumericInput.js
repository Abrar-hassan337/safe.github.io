import React from 'react';
import PropTypes from 'prop-types';
import {
    Input
} from 'app/components/ui/Input';

class NumericInput extends React.Component {
    constructor() {
        super();
        this.state = {
            uiValue: undefined,
        };
    }

    getUiValue(storeValue) {
        if (storeValue === 0 && this.state.uiValue === '') {
            return '0';
        }
        return String(storeValue);
    }

    render() {
        const {
            allowEmpty,
            min,
            max,
            value,
            ...rest
        } = this.props;
        return ( <
            Input value = {
                this.getUiValue(value)
            } { ...rest
            }
            isValid = {
                (newValue) => {
                    if (allowEmpty && newValue === '') {
                        return true;
                    }

                    const intValue = parseInt(newValue, 10);

                    if (!/^\d+$/.test(newValue)) {
                        return false;
                    }

                    if (!Number.isInteger(intValue)) {
                        return false;
                    }

                    if (Number.isInteger(min) && intValue < min) {
                        return false;
                    }

                    if (Number.isInteger(max) && intValue > max) {
                        return false;
                    }

                    return true;
                }
            }
            onChange = {
                (e) => {
                    this.setState({
                        uiValue: e.target.value
                    });
                    if (typeof this.props.onChange === 'function') {
                        this.props.onChange(e);
                    }
                }
            }
            />
        );
    }
}

NumericInput.propTypes = {
    value: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    allowEmpty: PropTypes.bool,
    onChange: PropTypes.func,
};

NumericInput.defaultProps = {
    min: null,
    max: null,
    value: 0,
    allowEmpty: false,
    onChange: () => {},
};

export default NumericInput;