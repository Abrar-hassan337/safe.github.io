import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Icon.scss';

const Icon = ({
    name,
    size,
    extraClassName
}) => ( <
    i className = {
        classNames({
            [styles.icon]: true,
            [styles.iconSmall]: size === 'small',
            [styles.iconBig]: size === 'big',
            'flix-icon': true,
            [`flix-icon-${name}`]: true,
            [extraClassName]: Boolean(extraClassName),
        })
    }
    />
);

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['small', 'big', 'inherit']),
    extraClassName: PropTypes.string,
};

Icon.defaultProps = {
    size: 'small',
    extraClassName: null,
};

export default Icon;