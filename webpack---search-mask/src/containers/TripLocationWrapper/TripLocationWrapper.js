import React from 'react';
import PropTypes from 'prop-types';
import {
    getTestingAttributes
} from 'app/functions';
import {
    elements
} from 'app/tests/elements';
import cn from 'classnames';
import {
    compose
} from 'recompose';
import {
    connect
} from 'react-redux';
import {
    LazyComponent
} from 'app/containers/LazyComponent';
import {
    WithTranslations
} from 'app/containers/WithTranslations';
import Icon from 'app/components/ui/Icon';
import {
    InputFallback
} from 'app/components/ui/InputFallback';
import {
    arrivalCitySelector
} from 'app/store/selectors';
import TripLocationSwitcher from 'app/containers/TripLocationSwitcher';
import styles from './TripLocationWrapper.scss';
import {
    retryCall
} from 'app/api';

const Dropdown = React.lazy(() => retryCall(() =>
    import ('app/components/ui/Dropdown')));

const DumbTripLocationWrapper = ({
    translationGetFromLabel,
    translationGetToLabel,
    getTranslationLoading,
    selectedArrival,
    variant,
}) => {
    return ( <
        div className = {
            cn(styles.locationWrapper, {
                [styles.compact]: variant === 'compact',
            })
        } >
        <
        TripLocationSwitcher disabled = {!selectedArrival
        }
        />

        <
        div className = {
            styles.locationWrapperDeparture
        } >
        <
        div className = {
            styles.locationWrapperSwitcher
        } { ...getTestingAttributes(elements.DEPARTURE_CITY_INPUT_FIELD)
        } >
        <
        LazyComponent fallback = { <
            InputFallback
            label = {
                translationGetFromLabel()
            }
            icon = { < Icon size = "inherit"
                name = "pin-solid"
                padless / >
            }
            loadingMessage = {
                `${getTranslationLoading()}...`
            }
            />
        } >
        <
        Dropdown direction = "from" / >
        <
        /LazyComponent> <
        /div> <
        /div>

        <
        div className = {
            styles.locationWrapperArrival
        } { ...getTestingAttributes(elements.ARRIVAL_CITY_INPUT_FIELD)
        } >
        <
        LazyComponent fallback = { <
            InputFallback
            label = {
                translationGetToLabel()
            }
            icon = { < Icon size = "inherit"
                name = "pin-solid"
                padless / >
            }
            loadingMessage = {
                `${getTranslationLoading()}...`
            }
            />
        } >
        <
        Dropdown direction = "to" / >
        <
        /LazyComponent> <
        /div> <
        /div>
    );
};

DumbTripLocationWrapper.propTypes = {
    translationGetFromLabel: PropTypes.func.isRequired,
    translationGetToLabel: PropTypes.func.isRequired,
    getTranslationLoading: PropTypes.func.isRequired,
    selectedArrival: PropTypes.shape({
        name: PropTypes.string
    }),
    variant: PropTypes.string.isRequired,
};

DumbTripLocationWrapper.defaultProps = {
    selectedArrival: {
        name: ''
    },
};

const mapStateToProps = (state) => ({
    selectedArrival: arrivalCitySelector(state),
});

export const TripLocationWrapper = compose(
    WithTranslations({
        translationGetFromLabel: 'from',
        translationGetToLabel: 'to',
        getTranslationLoading: 'search_mask.loading',
    }),
    connect(mapStateToProps),
)(DumbTripLocationWrapper);