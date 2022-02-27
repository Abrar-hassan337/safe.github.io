import React from 'react';
import PropTypes from 'prop-types';
import {
    breakpointMatches,
    iterateBreakpointsToObjects
} from 'app/functions/grid';

export class Responsive extends React.Component {
        constructor() {
            super();

            this.breakpointNames = iterateBreakpointsToObjects().map((b) => b.name);
            this.observers = {};
            this.handlers = {};

            this.breakpointNames.forEach((name) => {
                this.observers[name] = breakpointMatches(name);
            });

            this.state = this.breakpointNames.reduce(
                (previous, current) => ({
                    ...previous,
                    [current]: this.observers[current].matches,
                }), {},
            );
        }

        componentDidMount() {
            if (!this.observers) {
                return;
            }

            Object.keys(this.observers).forEach((name) => {
                const observer = this.observers[name];
                this.handlers[name] = (media) => {
                    this.setState({
                            [name]: media.matches,
                        },
                        () => {
                            if (media.matches) {
                                this.props.onChange(name);
                            }
                        },
                    );
                };

                observer.addListener(this.handlers[name]);
            });
        }

        componentWillUnmount() {
            if (!this.observers) {
                return;
            }

            Object.keys(this.observers).forEach((name) => {
                const observer = this.observers[name];
                observer.removeListener(this.handlers[name]);
                this.handlers[name] = null;
            });
        }

        render() {
            return this.breakpointNames
                .filter((name) => this.state[name])
                .map((name) => < React.Fragment key = {
                        name
                    } > {
                        this.props[name]
                    } < /React.Fragment>);
                }
        }

        Responsive.propTypes = {
            onChange: PropTypes.func,
        };

        Responsive.defaultProps = {
            onChange: () => {},
        };