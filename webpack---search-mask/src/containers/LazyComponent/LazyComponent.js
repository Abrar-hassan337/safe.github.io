import React from 'react';
import PropTypes from 'prop-types';
import {
    connect
} from 'react-redux';
import {
    serverSelector
} from 'app/store/selectors';

const DumbLazyComponent = ({
        fallback,
        children,
        server,
        ...rest
    }) =>
    server ? (
        fallback
    ) : ( <
        React.Suspense fallback = {
            fallback
        } { ...rest
        } > {
            children
        } <
        /React.Suspense>
    );

DumbLazyComponent.propTypes = {
    fallback: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    server: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
    server: serverSelector(state),
});

export const LazyComponent = connect(mapStateToProps)(DumbLazyComponent);