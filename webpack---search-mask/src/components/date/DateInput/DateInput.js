import React from 'react';
import PropTypes from 'prop-types';
import {
    Input
} from 'app/components/ui/Input';
import Icon from 'app/components/ui/Icon';

const DateInput = ({
    inputRef,
    date,
    label,
    setDepartureFocused,
    setReturnFocused,
    ...rest
}) => ( <
    Input label = {
        label
    }
    readOnly = "readonly"
    value = {
        date
    }
    icon = { < Icon name = "calendar-solid"
        size = "inherit" / >
    }
    inputRef = {
        inputRef
    } { ...rest
    }
    onKeyDown = {
        (e) => {
            if (e.which === 27) {
                setDepartureFocused(false);
                setReturnFocused(false);
                e.target.blur();
            }
        }
    }
    />
);

DateInput.propTypes = {
    inputRef: PropTypes.func.isRequired,
    date: PropTypes.string.isRequired,
    label: PropTypes.node.isRequired,
    setDepartureFocused: PropTypes.func.isRequired,
    setReturnFocused: PropTypes.func.isRequired,
};

// export default DateInput;
export {
    DateInput
};