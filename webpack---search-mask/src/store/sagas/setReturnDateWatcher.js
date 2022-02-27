import {
    SET_RETURN_DATE,
    showReturnDate
} from 'app/store/actions';
import {
    takeEvery,
    put
} from 'redux-saga/effects';

function* handleOneWayToggleFeature(action) {
    if (action.date) {
        yield put(showReturnDate());
    }
}

export function* setReturnDateWatcher() {
    yield takeEvery(SET_RETURN_DATE, handleOneWayToggleFeature);
}