import React from 'react';
import PropTypes from 'prop-types';
import {
    elements
} from 'app/tests/elements';
import {
    getTestingAttributes
} from 'app/functions';
import styles from './TripModePicker.scss';

const TripModePicker = ({
    isRoundTrip,
    onClickOneWayToggle,
    onClickRoundTripToggle,
    getOneWayTranslation,
    getRoundTripTranslation,
}) => ( <
    div className = {
        styles.wrapper
    } >
    <
    div className = {
        `${styles.item} smhc-radio`
    } { ...getTestingAttributes(elements.ONE_WAY_TRIP_MODE)
    } >
    <
    input id = "search-mask-trip-mode-oneway-toggle"
    type = "radio"
    className = "smhc-radio__input"
    checked = {!isRoundTrip
    }
    onChange = {
        onClickOneWayToggle
    }
    /> <
    label className = "smhc-radio__label"
    htmlFor = "search-mask-trip-mode-oneway-toggle" > {
        getOneWayTranslation()
    } <
    /label> <
    /div>

    <
    div className = {
        `${styles.item} smhc-radio`
    } { ...getTestingAttributes(elements.ROUND_TRIP_MODE)
    } >
    <
    input id = "search-mask-trip-mode-roundtrip-toggle"
    type = "radio"
    className = "smhc-radio__input"
    checked = {
        isRoundTrip
    }
    onChange = {
        onClickRoundTripToggle
    }
    /> <
    label className = "smhc-radio__label"
    htmlFor = "search-mask-trip-mode-roundtrip-toggle" > {
        getRoundTripTranslation()
    } <
    /label> <
    /div> <
    /div>
);

TripModePicker.propTypes = {
    isRoundTrip: PropTypes.bool.isRequired,
    onClickOneWayToggle: PropTypes.func.isRequired,
    onClickRoundTripToggle: PropTypes.func.isRequired,
    getOneWayTranslation: PropTypes.func.isRequired,
    getRoundTripTranslation: PropTypes.func.isRequired,
};

export {
    TripModePicker
};