import { ProductsId, SearchMaskMountOptions } from '@webc/meeseeks-ui-sdk';
import { isUuid } from 'app/functions/general/isUuid';
import { fetchTranslations } from 'app/providers';
import {
  loadUi,
  requestTranslationsSucceeded,
  UPDATE_OPTIONS,
  UpdateOptionsAction,
  requestUpdateLocation,
  setDepartureDate,
  setReturnDate,
  setProductQuantity,
} from 'app/store/actions';
import { optionsSelector } from 'app/store/selectors';
import { takeLatest, select, put, call, all } from 'redux-saga/effects';

function* requestTranslations(locale: string) {
  try {
    // @ts-ignore
    const translationsResponse = yield call(fetchTranslations, locale);
    // @ts-ignore
    const translationsJson = yield call([translationsResponse, translationsResponse.json]);

    yield put(requestTranslationsSucceeded(translationsJson));
  } catch (error) {
    // @todo: handle error
  }
}

export function* onUpdateOptions() {
  yield takeLatest<UpdateOptionsAction>(UPDATE_OPTIONS, function* (action: UpdateOptionsAction) {
    const oldOptions: ReturnType<typeof optionsSelector> = yield select(optionsSelector);
    const newOptions: SearchMaskMountOptions = { ...oldOptions, ...action.options };
    const { initialSearchMaskValues } = newOptions;
    const departureId = initialSearchMaskValues.departureCity;
    const arrivalId = initialSearchMaskValues.arrivalCity;
    const key = isUuid(departureId) ? 'uuid' : 'legacyId';
    yield put(
      requestUpdateLocation('from', { [key]: departureId } as
        | { uuid: string }
        | { legacyId: number }),
    );
    yield put(
      requestUpdateLocation('to', { [key]: arrivalId } as { uuid: string } | { legacyId: number }),
    );
    if (initialSearchMaskValues.departureDate) {
      yield put(setDepartureDate(initialSearchMaskValues.departureDate));
    }
    if (initialSearchMaskValues.returnDate) {
      yield put(setReturnDate(initialSearchMaskValues.returnDate));
    }
    const products = Object.keys(initialSearchMaskValues.products) as ProductsId[];
    for (let i = 0; i < products.length; i++) {
      const amount = initialSearchMaskValues.products[products[i]];
      if (typeof amount !== 'undefined') {
        yield put(setProductQuantity(products[i], amount));
      }
    }
    yield all([requestTranslations(newOptions.locale)]);

    yield put(loadUi());
  });
}
