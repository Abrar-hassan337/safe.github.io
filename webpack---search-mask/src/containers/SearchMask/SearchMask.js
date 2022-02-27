import React, {
    useEffect,
    useState
} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import {
    compose,
    lifecycle,
    withProps,
    withState
} from 'recompose';
import {
    onFieldOpened,
    onFieldClosed
} from 'app/events/shortcuts';
import {
    featureDarkenPageSelector,
    themeSelector
} from 'app/store/selectors';
import {
    connect
} from 'react-redux';
import {
    emitSearchMaskReadyEvent
} from 'app/events';
import {
    DateRangeWrapper
} from 'app/components/date/DateRangeWrapper/DateRangeWrapper';
import {
    WithOptions
} from 'app/containers/WithOptions';
import SearchButton from 'app/containers/SearchButton';
import {
    TripLocationWrapper
} from 'app/containers/TripLocationWrapper';
import TripProductPicker from 'app/containers/TripProductPicker';
import {
    TripModePicker
} from 'app/containers/TripModePicker/TripModePicker';
import {
    Head
} from 'app/containers/Head';
import {
    HONEYCOMB_THEMES
} from 'app/options';
import styles from './SearchMask.scss';

const DumbSearchMask = ({
    datePickerVisible,
    productPickerVisible,
    variant,
    pageDarkened,
    theme,
}) => {
    // we want variant to be updated after hydration to ensure we show correct version
    // this is not ideal but ensures correct search mask is rendered
    const [localVariant, setLocalVariant] = useState(variant);
    const [localTheme, setLocalTheme] = useState('default');
    useEffect(() => {
        setLocalVariant(variant);
    }, [variant]);
    useEffect(() => {
        setLocalTheme(theme);
    }, [theme]);
    return ( <
        div className = {
            `smhc-theme-${localTheme}`
        } >
        <
        Head / >
        <
        div className = {
            cn({
                [styles.searchMask]: true,
                [styles.frontpage]: localVariant === 'frontpage',
                [styles.compact]: localVariant === 'compact',
                [styles.fullWidth]: localVariant === 'fullWidth',
                [styles.pageDarkened]: Boolean(pageDarkened),
            })
        } >
        <
        TripModePicker / >

        <
        TripLocationWrapper variant = {
            variant
        }
        /> {
            datePickerVisible && < DateRangeWrapper / >
        }

        {
            productPickerVisible && < TripProductPicker / >
        }

        <
        SearchButton / >
        <
        /div> <
        /div>
    );
};

DumbSearchMask.propTypes = {
    datePickerVisible: PropTypes.bool,
    productPickerVisible: PropTypes.bool,
    variant: PropTypes.string.isRequired,
    pageDarkened: PropTypes.bool.isRequired,
    theme: PropTypes.oneOf(HONEYCOMB_THEMES),
};

DumbSearchMask.defaultProps = {
    datePickerVisible: true,
    productPickerVisible: true,
    theme: 'default',
};

const mapStateToProps = (state) => ({
    isDarkenPageEnabled: featureDarkenPageSelector(state),
    theme: themeSelector(state),
});

export const SearchMask = compose(
    WithOptions,
    withProps(({
        options
    }) => ({
        datePickerVisible: options.datePickerVisible,
        productPickerVisible: options.productPickerVisible,
        variant: options.variant,
    })),
    withState('pageDarkened', 'setPageDarkened', false),
    connect(mapStateToProps),
    lifecycle({
        componentDidMount() {
            emitSearchMaskReadyEvent();
            onFieldOpened(() => {
                if (this.props.isDarkenPageEnabled) {
                    this.props.setPageDarkened(true);
                }
            });
            onFieldClosed(() => {
                this.props.setPageDarkened(false);
            });
        },
    }),
)(DumbSearchMask);