import React from 'react';
import PropTypes from 'prop-types';
import {
    compose
} from 'recompose';
import {
    connect
} from 'react-redux';
import classNames from 'classnames';
import {
    WithTranslations
} from 'app/containers/WithTranslations';
import {
    charterPopupConfigSelector,
    isCharterPopupActiveSelector
} from 'app/store/selectors';
import styles from './CharterMessage.scss';

const Render = ({
    url,
    active,
    getTranslationForCharterMessage,
    getTranslationForCharterLink
}) => ( <
    div className = {
        classNames({
            [styles.charterPopup]: true,
            [styles.hidden]: !active,
        })
    } >
    {
        getTranslationForCharterMessage()
    } {
        ' '
    } <
    a className = "smhc-link"
    href = {
        url
    }
    target = "_blank"
    rel = "noopener noreferrer" > {
        getTranslationForCharterLink()
    } <
    /a> <
    /div>
);

Render.propTypes = {
    url: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    getTranslationForCharterMessage: PropTypes.func.isRequired,
    getTranslationForCharterLink: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    url: charterPopupConfigSelector(state).url,
    active: isCharterPopupActiveSelector(state),
    getTranslationForCharterMessage: 'search.form.charter.popup.title',
    getTranslationForCharterLink: 'search.form.charter.popup.linkText',
});

export const CharterMessage = compose(
    connect(mapStateToProps),
    WithTranslations({
        getTranslationForCharterMessage: 'search.form.charter.popup.title',
        getTranslationForCharterLink: 'search.form.charter.popup.linkText',
    }),
)(Render);