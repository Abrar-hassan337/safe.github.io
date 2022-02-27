import React from 'react';
import PropTypes from 'prop-types';
import {
    WithOptions
} from 'app/containers/WithOptions';
import {
    variants,
    options as optionsShape
} from 'app/options';
import locales from 'app/config/locales.json';
import languageNames from 'app/config/files/languageNames.json';
import {
    DebugDropdown
} from 'app/components/ui/DebugDropdown';
import {
    DebugSwitch
} from 'app/components/ui/DebugSwitch';
import styles from './Debug.scss';

const getLanguageObject = (locale) => ({
    value: locale,
    label: languageNames[locale] || locale,
});

export const DumbDebug = ({
    options,
    updateOptions
}) => ( <
    div className = {
        styles.debugWrapper
    } >
    <
    div className = {
        styles.debug
    } >
    <
    div className = {
        `search-mask__language-chooser ${styles.debugSection}`
    } >
    <
    span className = {
        styles.debugSectionLabel
    } > Locale < /span> <
    DebugDropdown selected = {
        getLanguageObject(options.locale)
    }
    options = {
        Object.keys(locales).map(getLanguageObject)
    }
    onChange = {
        (locale) =>
        updateOptions({
            locale: locale.value,
        })
    }
    /> <
    /div> <
    div className = {
        styles.debugSection
    } >
    <
    span className = {
        `search-mask__variant-chooser ${styles.debugSectionLabel}`
    } > Layout < /span>

    <
    DebugSwitch options = {
        variants
    }
    selected = {
        options.variant
    }
    onChange = {
        (variant) =>
        updateOptions({
            variant: variant.value,
        })
    }
    /> <
    /div> <
    div className = {
        `search-mask__train-chooser ${styles.debugSection}`
    } >
    <
    span className = {
        styles.debugSectionLabel
    } > FlixTrain < /span>

    <
    DebugSwitch options = {
        [{
                value: 'off',
                label: 'Off',
            },
            {
                value: 'on',
                label: 'On',
            },
        ]
    }
    selected = {
        options.flixTrain ? 'on' : 'off'
    }
    onChange = {
        (action) =>
        updateOptions({
            flixTrain: action.value === 'on',
        })
    }
    /> <
    /div> <
    div className = {
        `search-mask__train-chooser ${styles.debugSection}`
    } >
    <
    span className = {
        styles.debugSectionLabel
    } > Theme < /span>

    <
    DebugSwitch options = {
        [{
                value: 'default',
                label: 'flix',
            },
            {
                value: 'kamil',
                label: 'kk',
            },
            {
                value: 'dark',
                label: 'dark',
            },
        ]
    }
    selected = {
        options.theme
    }
    onChange = {
        (action) =>
        updateOptions({
            theme: action.value,
        })
    }
    /> <
    /div> <
    /div> <
    /div>
);

DumbDebug.propTypes = {
    options: PropTypes.shape(optionsShape).isRequired,
    updateOptions: PropTypes.func.isRequired,
};

export const Debug = WithOptions(DumbDebug);