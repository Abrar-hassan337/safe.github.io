import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
    breakpointMatches
} from 'app/functions/grid';
import styles from './CustomizedDayPickerNavbar.scss';

const CustomizedDayPickerNavbar = ({
    showPreviousButton,
    onPreviousClick,
    onNextClick
}) => ( <
    div className = {
        `DayPicker-NavBar ${styles.customizedNavBar}`
    } >
    <
    button // eslint-disable-line
    className = {
        classNames({
            'DayPicker-NavButton': true,
            'DayPicker-NavButton--custom': true,
            'DayPicker-NavButton--prev': true,
            'DayPicker-NavButton--interactionDisabled':
                !showPreviousButton || breakpointMatches('small').matches,
        })
    }
    onClick = {
        () => onPreviousClick()
    } >
    <
    i className = "flix-icon smhc-icon--lg flix-icon-arrow-left" / >
    <
    /button> <
    button // eslint-disable-line
    className = {
        classNames({
            'DayPicker-NavButton': true,
            'DayPicker-NavButton--custom': true,
            'DayPicker-NavButton--next': true,
            'DayPicker-NavButton--interactionDisabled': breakpointMatches('small').matches,
        })
    }
    onClick = {
        () => onNextClick()
    } >
    <
    i className = "flix-icon smhc-icon--lg flix-icon-arrow-right" / >
    <
    /button> <
    /div>
);

CustomizedDayPickerNavbar.propTypes = {
    showPreviousButton: PropTypes.bool,
    onPreviousClick: PropTypes.func,
    onNextClick: PropTypes.func,
};

CustomizedDayPickerNavbar.defaultProps = {
    onPreviousClick: () => {},
    onNextClick: () => {},
    showPreviousButton: true,
};

export {
    CustomizedDayPickerNavbar
};