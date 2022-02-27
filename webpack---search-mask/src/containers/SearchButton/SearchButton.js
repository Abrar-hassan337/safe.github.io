/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import {
    getTestingAttributes
} from 'app/functions';
import {
    elements
} from 'app/tests/elements';
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
    isSearchInvalid
} from 'app/functions/general';
import {
    requestSearch,
    storeRecentCity
} from 'app/store/actions';
import {
    arrivalCitySelector,
    departureCitySelector,
    selectedRouteNameSelector,
    departureDateTimestampSelector,
    selectedReturnDateSelector,
    selectedProductsSelector,
    localeSelector,
    passengerCountSelector,
    variantSelector,
} from 'app/store/selectors';
import styles from './SearchButton.scss';
import {
    mapLocationToAutocomplete
} from 'app/functions/location';

export const SearchButton = ({
    getSearchString,
    departureCity,
    arrivalCity,
    routeName,
    departureDate,
    returnDate,
    selectedProducts,
    locale,
    passengerCount,
    variant,
    onRequestSearch,
    storeRecentCity,
}) => ( <
    div { ...getTestingAttributes(elements.SEARCH_BUTTON)
    }
    className = {
        classNames(styles.searchButtonWrapper, {
            [styles.nonCompact]: variant !== 'compact',
        })
    } >
    <
    button className = {
        classNames({
            'smhc-btn': true,
            'smhc-btn--primary': true,
            'smhc-btn--block': true,
            'smhc-btn--disabled': passengerCount <= 0,
            [styles.searchButton]: true,
        })
    }
    onClick = {
        async () => {
            storeRecentCity('from', mapLocationToAutocomplete(departureCity));
            storeRecentCity('to', mapLocationToAutocomplete(arrivalCity));

            onRequestSearch({
                departureCity: departureCity.uuid,
                arrivalCity: arrivalCity.uuid,
                routeName,
                departureDate,
                returnDate,
                products: selectedProducts,
                locale,
            });
        }
    }
    disabled = {
        isSearchInvalid({
            passengerCount,
            departureDate
        })
    } >
    {
        getSearchString()
    } <
    /button> <
    /div>
);

SearchButton.propTypes = {
    // translations
    getSearchString: PropTypes.func.isRequired,
    // state
    departureCity: PropTypes.shape({
        uuid: PropTypes.oneOfType(PropTypes.string),
    }),
    arrivalCity: PropTypes.shape({
        uuid: PropTypes.oneOfType(PropTypes.string),
    }),
    routeName: PropTypes.string,
    departureDate: PropTypes.number.isRequired,
    returnDate: PropTypes.number,
    selectedProducts: PropTypes.objectOf(PropTypes.any).isRequired,
    locale: PropTypes.string.isRequired,
    passengerCount: PropTypes.number.isRequired,
    variant: PropTypes.string.isRequired,

    onRequestSearch: PropTypes.func.isRequired,
    storeRecentCity: PropTypes.func.isRequired,
};

SearchButton.defaultProps = {
    departureCity: null,
    arrivalCity: null,
    routeName: '',
    returnDate: null,
};

const mapStateToProps = (state) => ({
    departureCity: departureCitySelector(state),
    arrivalCity: arrivalCitySelector(state),
    routeName: selectedRouteNameSelector(state),
    departureDate: departureDateTimestampSelector(state),
    returnDate: selectedReturnDateSelector(state),
    selectedProducts: selectedProductsSelector(state),
    locale: localeSelector(state),
    passengerCount: passengerCountSelector(state),
    variant: variantSelector(state),
});

const mapDispatchToProps = {
    onRequestSearch: requestSearch,
    storeRecentCity: storeRecentCity,
};

export default compose(
    WithTranslations({
        getSearchString: 'Booking find',
    }),
    connect(mapStateToProps, mapDispatchToProps),
)(SearchButton);