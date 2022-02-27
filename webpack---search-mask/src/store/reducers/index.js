import {
    combineReducers
} from 'redux';
import general from './general';
import ui from './ui';
import date from './date';
import location from './location';
import product from './product';
import translation from './translation';

export default combineReducers({
    general,
    ui,
    date,
    location,
    product,
    translation,
});