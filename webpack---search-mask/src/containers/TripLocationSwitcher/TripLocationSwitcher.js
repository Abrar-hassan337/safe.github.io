import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
    connect
} from 'react-redux';
import {
    Button
} from 'app/components/ui/Button';
import {
    switchLocations
} from 'app/store/actions';
import iconSwitch from 'app/containers/TripLocationSwitcher/iconSwitch.svg';
import styles from './TripLocationSwitcher.scss';
import {
    emitFieldChangedEvent
} from 'app/events';

export const TripLocationSwitcher = ({
    onSwitchLocations,
    rotate,
    disabled
}) => ( <
    Button onClick = {
        onSwitchLocations
    }
    extraClassName = {
        classNames({
            [styles.locationSwitcher]: true,
            [styles.rotate]: rotate,
        })
    }
    tabIndex = {-1
    }
    disabled = {
        disabled
    }
    padless >
    <
    img src = {
        iconSwitch
    }
    className = {
        styles.iconSwitch
    }
    alt = "icon-switch" / >
    <
    /Button>
);

TripLocationSwitcher.propTypes = {
    onSwitchLocations: PropTypes.func.isRequired,
    rotate: PropTypes.bool,
    disabled: PropTypes.bool,
};

TripLocationSwitcher.defaultProps = {
    rotate: false,
    disabled: false,
};

const mapDispatchToProps = (dispatch) => ({
    onSwitchLocations: () => {
        emitFieldChangedEvent('citySwitcher', undefined);
        dispatch(switchLocations());
    },
});

class ClassTripLocationSwitcher extends React.Component {
    constructor() {
        super();

        this.state = {
            rotate: false,
        };
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    render() {
        return ( <
            TripLocationSwitcher { ...this.props
            }
            onSwitchLocations = {
                (...args) => {
                    clearTimeout(this.timeout);

                    this.setState(() => {
                        this.timeout = setTimeout(() => {
                            this.setState({
                                rotate: false
                            });
                        }, 300);

                        return {
                            rotate: true
                        };
                    });

                    this.props.onSwitchLocations(...args);
                }
            }
            rotate = {
                this.state.rotate
            }
            disabled = {
                this.props.disabled
            }
            />
        );
    }
}

ClassTripLocationSwitcher.propTypes = {
    onSwitchLocations: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
};

ClassTripLocationSwitcher.defaultProps = {
    disabled: false,
};

export default connect(null, mapDispatchToProps)(ClassTripLocationSwitcher);