import React from 'react';
import PropTypes from 'prop-types';
import {
    isDevelopment
} from 'app/functions/environment';
import {
    getNotifier
} from 'app/service';

export const getErrorBoundary = () => {
    if (isDevelopment()) {
        const FakeErrorBoundary = ({
            children
        }) => < > {
            children
        } < />;

        FakeErrorBoundary.propTypes = {
            children: PropTypes.node.isRequired,
        };

        return FakeErrorBoundary;
    }

    return getNotifier().getPlugin('react').createErrorBoundary(React);
};