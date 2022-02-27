import React, {
    Component
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
    Responsive
} from 'app/components/ui/Responsive';
import {
    Button
} from 'app/components/ui/Button';
import {
    breakpointMatches
} from 'app/functions/grid';
import styles from './ResponsivePopup.scss';
import {
    useFixBody
} from 'app/hooks/useFixBody';

const Render = ({
        children,
        size,
        notFlex,
        visible,
        title,
        onClose,
        onCancel,
        actions,
        outerRef,
        innerRef,
        border,
        autoWidth,
        padding,
        scrollableContent,
        centerAligned,
    }) => {
        useFixBody(breakpointMatches('small').matches && visible);

        if (!visible) {
            return null;
        }

        return ( <
            div key = {
                size
            }
            ref = {
                outerRef
            }
            className = {
                classNames({
                    [styles.responsivePopupContainer]: true,
                    [styles.responsivePopupContainerSmall]: size === 'small',
                    [styles.responsivePopupContainerMedium]: size === 'medium',
                    [styles.responsivePopupContainerMediumNotFlex]: size === 'medium' && notFlex,
                    [styles.responsivePopupContainerLarge]: size === 'large',
                    [styles.responsivePopupContainerVisible]: visible,
                    [styles.responsivePopupContainerHideBorder]: !border,
                    [styles.responsivePopupContainerAutoWidth]: autoWidth,
                    [styles.responsivePopupContainerNoPadding]: !padding,
                    [styles.centerAligned]: centerAligned,
                })
            } >
            <
            div className = {
                classNames({
                    [styles.responsivePopup]: true,
                    [styles[`responsivePopup${size}`]]: true,
                    [styles.responsivePopupSmallWithButton]: actions,
                })
            } >
            <
            div className = {
                styles.responsivePopupHeader
            } > {
                title
            } <
            div className = {
                styles.responsivePopupHeaderCloseIcon
            } >
            <
            Button onClick = {
                (e) => {
                    onCancel();
                    onClose(true, e);
                }
            } >
            <
            i className = {
                `flix-icon flix-icon-close ${styles.closeIcon}`
            }
            /> <
            /Button> <
            /div> <
            /div> <
            div ref = {
                innerRef
            }
            className = {
                classNames({
                    [styles.responsivePopupWrapper]: true,
                    [styles.responsivePopupWrapperNotScrollable]: !scrollableContent,
                })
            } >
            {
                children
            } <
            /div> {
                actions ? < div className = {
                        styles.responsivePopupFooter
                    } > {
                        actions
                    } < /div> : null} <
                    /div> <
                    /div>
            );
        };

        export class ResponsivePopup extends Component {
            constructor() {
                super();
                this.handleClickOutside = this.handleClickOutside.bind(this);
                this.handleTouchOutside = this.handleTouchOutside.bind(this);
                this.handleResize = this.handleResize.bind(this);
            }

            componentDidMount() {
                document.addEventListener('mousedown', this.handleClickOutside);
                document.addEventListener('touchstart', this.handleTouchOutside);
                window.addEventListener('resize', this.handleResize);
            }

            componentWillUnmount() {
                document.removeEventListener('mousedown', this.handleClickOutside);
                document.removeEventListener('touchstart', this.handleTouchOutside);
                window.removeEventListener('resize', this.handleResize);
            }

            maybeCallCloseFunction(close, event) {
                if (typeof this.props.onClose !== 'function') {
                    return;
                }

                this.props.onClose(close, event);
            }

            handleClickOutside(event) {
                if (!this.props.visible) {
                    return;
                }

                if (
                    (this.outer && this.outer.contains(event.target)) ||
                    (this.inner && this.inner.contains(event.target))
                ) {
                    this.maybeCallCloseFunction(false, event);

                    return;
                }

                this.maybeCallCloseFunction(true, event);
            }

            handleTouchOutside(e) {
                this.props.onTouch(e);
                this.handleClickOutside(e);
            }

            handleResize(e) {
                this.props.onResize(e);
            }

            render() {
                const {
                    children,
                    onChange,
                    ...rest
                } = this.props;

                return ( <
                    Responsive onChange = {
                        onChange
                    }
                    small = { <
                        Render
                        innerRef = {
                            (el) => {
                                this.inner = el;
                            }
                        }
                        outerRef = {
                            (el) => {
                                this.outer = el;
                            }
                        } { ...rest
                        }
                        size = "small" >
                        {
                            children
                        } <
                        /Render>
                    }
                    medium = { <
                        Render
                        innerRef = {
                            (el) => {
                                this.inner = el;
                            }
                        } { ...rest
                        }
                        size = "medium" >
                        {
                            children
                        } <
                        /Render>
                    }
                    large = { <
                        Render
                        innerRef = {
                            (el) => {
                                this.inner = el;
                            }
                        } { ...rest
                        }
                        size = "large" >
                        {
                            children
                        } <
                        /Render>
                    }
                    />
                );
            }
        }

        ResponsivePopup.propTypes = {
            children: PropTypes.node.isRequired,
            visible: PropTypes.bool.isRequired,
            title: PropTypes.string.isRequired,
            actions: PropTypes.node,
            border: PropTypes.bool,
            autoWidth: PropTypes.bool,
            onClose: PropTypes.func,
            onCancel: PropTypes.func,
            padding: PropTypes.bool,
            onChange: PropTypes.func,
            onTouch: PropTypes.func,
            onResize: PropTypes.func,
            notFlex: PropTypes.bool,
            scrollableContent: PropTypes.bool,
            centerAligned: PropTypes.bool,
        };

        ResponsivePopup.defaultProps = {
            onClose: () => {},
            border: true,
            autoWidth: true,
            padding: true,
            actions: null,
            notFlex: false,
            scrollableContent: true,
            centerAligned: true,
            onChange: () => {},
            onTouch: () => {},
            onResize: () => {},
            onCancel: () => {},
        };

        Render.propTypes = {
            ...ResponsivePopup.propTypes,
            size: PropTypes.string.isRequired,
            innerRef: PropTypes.func.isRequired,
        };