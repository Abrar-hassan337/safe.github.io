import React from 'react';
import PropTypes from 'prop-types';
import {
    withState
} from 'recompose';
import classNames from 'classnames';
import Downshift from 'downshift';
import {
    Scrollbars
} from 'react-custom-scrollbars';
import styles from './DebugDropdown.scss';

export const DumbDebugDropdown = ({
    inputValue,
    setInputValue,
    selected,
    options,
    onChange,
    open,
    setOpen,
}) => ( <
    Downshift selectedItem = {
        selected
    }
    inputValue = {
        inputValue
    }
    onChange = {
        (item) => {
            setInputValue('');
            onChange(item);
        }
    }
    itemToString = {
        (o) => {
            if (!o) {
                return '';
            }

            return o.label;
        }
    }
    isOpen = {
        open
    }
    render = {
        ({
            getInputProps,
            getItemProps,
            selectedItem,
            selectItem
        }) => ( <
            div className = {
                styles.debugDropdown
            } >
            <
            input className = {
                classNames({
                    [styles.debugDropdownInput]: true,
                    [styles.debugDropdownInputHasDropdown]: open,
                })
            } { ...getInputProps({
                    placeholder: (selectedItem && selectedItem.label) || '',
                    onFocus: () => setOpen(true),
                    onBlur: () => setOpen(false),
                    onChange: (e) => {
                        setInputValue(e.target.value);
                    },
                })
            }
            tabIndex = {-1
            }
            /> <
            Scrollbars className = {
                classNames({
                    [styles.debugDropdownDropdown]: true,
                    [
                        [styles.debugDropdownDropdownOpen]
                    ]: open,
                })
            }
            style = {
                {
                    height: 400,
                }
            } >
            {
                options
                .filter((option) => {
                    if (inputValue.trim() === '') {
                        return true;
                    }

                    const search = inputValue.toLowerCase();
                    const value = option.value.trim().toLowerCase();
                    const label = option.label.trim().toLowerCase();

                    return value.indexOf(search) !== -1 || label.indexOf(search) !== -1;
                })
                .map((option) => ( <
                    button key = {
                        option.value
                    }
                    className = {
                        styles.debugDropdownDropdownOption
                    } { ...getItemProps({
                            item: option,
                        })
                    }
                    onMouseDown = {
                        () => {
                            selectItem(option);
                        }
                    }
                    tabIndex = {-1
                    } >
                    {
                        option.label
                    } <
                    /button>
                ))
            } <
            /Scrollbars> <
            /div>
        )
    }
    />
);

DumbDebugDropdown.propTypes = {
    selected: PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
    }).isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        }),
    ).isRequired,
    onChange: PropTypes.func.isRequired,
    inputValue: PropTypes.string.isRequired,
    setInputValue: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
};

const withInputValue = withState('inputValue', 'setInputValue', '');
const withOpen = withState('open', 'setOpen', false);

export const DebugDropdown = withInputValue(withOpen(DumbDebugDropdown));