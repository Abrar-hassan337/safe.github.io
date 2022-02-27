import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './DebugSwitch.scss';

export const DebugSwitch = ({
    selected,
    options,
    onChange
}) => ( <
    div className = {
        styles.debugSwitch
    } > {
        options.map((option) => ( <
            button tabIndex = {-1
            }
            key = {
                option.value
            }
            className = {
                classNames({
                    [styles.debugSwitchButton]: true,
                    [styles.debugSwitchButtonSelected]: selected === option.value,
                })
            }
            onClick = {
                () => onChange(option)
            } >
            {
                option.label
            } <
            /button>
        ))
    } <
    /div>
);

DebugSwitch.propTypes = {
    selected: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        }),
    ).isRequired,
    onChange: PropTypes.func.isRequired,
};

DebugSwitch.defaultProps = {
    selected: null,
};