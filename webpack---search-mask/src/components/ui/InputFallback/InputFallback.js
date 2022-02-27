import React from 'react';
import PropTypes from 'prop-types';
import {
    Input
} from 'app/components/ui/Input';
import styles from './InputFallback.scss';

export const InputFallback = ({
    label,
    icon,
    loadingMessage
}) => ( <
    div className = {
        styles.fallback
    } >
    <
    Input label = {
        label
    }
    icon = {
        icon
    }
    placeholder = {
        loadingMessage
    }
    /> <
    /div>
);

InputFallback.propTypes = {
    label: PropTypes.string.isRequired,
    icon: PropTypes.node,
    loadingMessage: PropTypes.string,
};

InputFallback.defaultProps = {
    loadingMessage: '',
    icon: null,
};