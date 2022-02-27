import React from 'react';
import PropTypes from 'prop-types';
import {
    connect
} from 'react-redux';
import {
    languagesSelector
} from 'app/store/selectors';
import {
    chooseCountableTranslation,
    replacePlaceholders
} from 'app/functions/translation';

const countableObjectValidation = {
    min: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['Infinity'])]).isRequired,
    max: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['Infinity'])]).isRequired,
    value: PropTypes.string.isRequired,
};

const brokenPluralCasesWeDontCareAbout = {
    rule: PropTypes.string,
    value: PropTypes.string,
};

const noTranslationFoundFunction = () => '';

const getTranslationGetterFunction = (strings, translationKey) => {
    if (translationKey instanceof Array) {
        return translationKey.reduce((acc, currKey) => {
            acc[currKey] = !(currKey in strings) ?
                noTranslationFoundFunction :
                (parameters) => replacePlaceholders(strings[currKey], parameters);
            return acc;
        }, {});
    }

    if (!(translationKey in strings)) {
        return noTranslationFoundFunction;
    }

    const value = strings[translationKey];

    // The value is not a string, but it should be.
    if (typeof value === 'string') {
        return (parameters, renderAsNode) => replacePlaceholders(value, parameters, renderAsNode);
    }

    // It should be an array
    if (!('map' in value)) {
        return noTranslationFoundFunction;
    }

    return (parameters, count) =>
        replacePlaceholders(
            chooseCountableTranslation(
                value.map((variant) => ({
                    ...variant,
                    min: variant.min === 'Infinity' ? Infinity : variant.min,
                    max: variant.max === 'Infinity' ? Infinity : variant.max,
                })),
                count,
            ),
            parameters,
        );
};

export const getTranslationProps = (strings, props, getAllTranslations, keysOrFunction) => {
    const translationProps = {};
    let keys;

    if (getAllTranslations) {
        translationProps.getTranslation = (id, ...rest) =>
            getTranslationGetterFunction(strings, id)(...rest);
    }

    // First call keys because it's a function
    // that depends on the passed props.
    if (typeof keysOrFunction === 'function') {
        keys = keysOrFunction(props);
    } else {
        keys = keysOrFunction;
    }

    Object.keys(keys).forEach((propName) => {
        translationProps[propName] = getTranslationGetterFunction(strings, keys[propName]);
    });

    return translationProps;
};

export const WithTranslations =
    (keysOrFunction = {}, getAllTranslations = false) =>
    (Component) => {
        const mapStateToProps = (state) => ({
            strings: languagesSelector(state),
        });

        const HigherOrderComponent = ({
            strings,
            ...rest
        }) => ( <
            Component { ...rest
            } { ...getTranslationProps(strings, rest, getAllTranslations, keysOrFunction)
            }
            />
        );

        HigherOrderComponent.propTypes = {
            strings: PropTypes.objectOf(
                PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.arrayOf(PropTypes.shape(countableObjectValidation)),
                    PropTypes.arrayOf(PropTypes.shape(brokenPluralCasesWeDontCareAbout)),
                ]),
            ).isRequired,
        };

        return connect(mapStateToProps)(HigherOrderComponent);
    };