import React from 'react';
import PropTypes from 'prop-types';
import {
    compose
} from 'recompose';
import {
    InputFallback
} from 'app/components/ui/InputFallback';
import Icon from 'app/components/ui/Icon';
import {
    WithTranslations
} from 'app/containers/WithTranslations';
import stylesFallback from 'app/components/ui/InputFallback/InputFallback.scss';
import styles from './DatePickerFallback.scss';

export const DumbDatePickerFallback = ({
    getTranslationDepartureDateLabel,
    getTranslationLoading,
}) => ( <
    div className = {
        `${styles.datePickerFallback} ${stylesFallback.fallback}`
    } >
    <
    div className = {
        `${styles.dateInput} ${styles.dateInputDeparture}`
    } >
    <
    InputFallback label = {
        getTranslationDepartureDateLabel()
    }
    icon = { < Icon name = "calendar-solid"
        size = "inherit" / >
    }
    loadingMessage = {
        `${getTranslationLoading()}...`
    }
    /> <
    /div> <
    /div>
);

DumbDatePickerFallback.propTypes = {
    getTranslationDepartureDateLabel: PropTypes.func.isRequired,
    getTranslationLoading: PropTypes.func.isRequired,
};

export const DatePickerFallback = compose(
    WithTranslations({
        getTranslationDepartureDateLabel: 'depart',
        getTranslationLoading: 'search_mask.loading',
    }),
)(DumbDatePickerFallback);