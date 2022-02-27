import {
    connect
} from 'react-redux';
import {
    optionsSelector
} from 'app/store/selectors';
import {
    updateOptions
} from 'app/store/actions';

const mapStateToProps = (state) => ({
    options: optionsSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
    updateOptions: (options) => dispatch(updateOptions(options)),
});

export const WithOptions = connect(mapStateToProps, mapDispatchToProps);