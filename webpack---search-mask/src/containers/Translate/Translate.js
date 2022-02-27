import React from 'react';
import PropTypes from 'prop-types';
import {
    WithTranslations
} from 'app/containers/WithTranslations';

export const DumbTranslate = ({
    string,
    placeholders,
    count
}) => ( <
    span className = "translated-value" > {
        string(placeholders, count)
    } < /span>
);

DumbTranslate.propTypes = {
    string: PropTypes.func.isRequired,
    placeholders: PropTypes.objectOf(PropTypes.string),
    count: PropTypes.number,
};

export const Translate = WithTranslations(({
    id
}) => ({
    string: id,
}))(DumbTranslate);

Translate.propTypes = {
    id: PropTypes.string.isRequired,
    placeholders: PropTypes.objectOf(PropTypes.string),
    count: PropTypes.number,
};

Translate.defaultProps = {
    placeholders: {},
    count: undefined,
};

DumbTranslate.defaultProps = {
    ...Translate.defaultProps,
};