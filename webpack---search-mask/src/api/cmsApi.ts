import { requestUpdateLocation } from 'app/store/actions';
import { Store } from 'redux';

export const cmsApi = (store: Store) => ({
  setDepartureCity: ({ uuid, cityName }: { uuid: string; cityName: string }) => {
    store.dispatch(requestUpdateLocation('from', { name: cityName, uuid: uuid }));
  },
  setArrivalCity: ({ uuid, cityName }: { uuid: string; cityName: string }) => {
    store.dispatch(requestUpdateLocation('to', { name: cityName, uuid: uuid }));
  },
  onDepartureCityChanged: (_params: { uuid: string; cityName: string; legacyId: number }) => {},
  onArrivalCityChanged: (_params: { uuid: string; cityName: string; legacyId: number }) => {},
});
