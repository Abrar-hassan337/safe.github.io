import { StoreLocationField } from 'app/models/types/store/location';
import {
  CLEAR_AUTOCOMPLETE_RESULTS,
  SET_LOCATION,
  SWITCH_LOCATIONS,
  STORE_AUTOCOMPLETE_RESULTS,
  REPORT_AUTOCOMPLETE_ERROR,
  TOGGLE_AUTOCOMPLETE_LOADING,
  CLEAR_AUTOCOMPLETE_ERROR,
  SET_RECENT_CITIES,
  STORE_RECENT_CITY,
  REMOVE_RECENT_CITY,
  SET_POPULAR_CITIES,
  LocationsActions,
  STORE_AUTOCOMPLETE_CACHE,
} from 'app/store/actions';

const defaultState: StoreLocationField = {
  autocomplete: {
    from: {
      current: [],
      loading: false,
      error: {
        present: false,
        id: null,
        level: null,
      },
    },
    to: {
      current: [],
      loading: false,
      error: {
        present: false,
        id: null,
        level: null,
      },
    },
  },
  selected: {
    // @ts-ignore
    from: {},
    // @ts-ignore
    to: {},
  },
  recentCities: {
    from: [],
    to: [],
  },
  popularCities: {
    from: [],
    to: [],
  },
  recentCitiesCookie: {
    from: 'recent-cities-from',
    to: 'recent-cities-to',
  },
  autoCompleteCache: {},
};

export default (state = defaultState, action: LocationsActions): StoreLocationField => {
  switch (action.type) {
    case SET_LOCATION: {
      const newState = {
        ...state,
        selected: {
          ...state.selected,
          [action.direction]: action.location,
        },
      };
      // if the user selected the same as the arrival city, swap departure/arrival
      if (action.location.uuid === state.selected.to.uuid && action.direction === 'from') {
        newState.selected = {
          ...newState.selected,
          to: {
            ...state.selected.from,
          },
        };
      }

      return newState;
    }

    case TOGGLE_AUTOCOMPLETE_LOADING:
      return {
        ...state,
        autocomplete: {
          ...state.autocomplete,
          [action.direction]: {
            ...state.autocomplete[action.direction],
            loading: action.loading,
          },
        },
      };

    case SWITCH_LOCATIONS: {
      return {
        ...state,
        selected: {
          from: state.selected.to,
          to: state.selected.from,
        },
      };
    }

    case REPORT_AUTOCOMPLETE_ERROR:
      return {
        ...state,
        autocomplete: {
          ...state.autocomplete,
          [action.direction]: {
            ...state.autocomplete[action.direction],
            error: {
              ...state.autocomplete[action.direction].error,
              present: true,
              id: action.id,
              level: action.level,
            },
          },
        },
      };

    case CLEAR_AUTOCOMPLETE_ERROR:
      return {
        ...state,
        autocomplete: {
          ...state.autocomplete,
          [action.direction]: {
            ...state.autocomplete[action.direction],
            error: {
              ...state.autocomplete[action.direction].error,
              present: false,
              id: null,
              level: null,
            },
          },
        },
      };

    case STORE_AUTOCOMPLETE_RESULTS:
      return {
        ...state,
        autocomplete: {
          ...state.autocomplete,
          [action.direction]: {
            current: action.results,
            error: {
              ...state.autocomplete[action.direction].error,
              present: false,
              id: null,
              level: null,
            },
          },
        },
      };

    case CLEAR_AUTOCOMPLETE_RESULTS:
      return {
        ...state,
        autocomplete: {
          ...state.autocomplete,
          [action.direction]: {
            ...state.autocomplete[action.direction],
            current: [],
          },
        },
      };

    case SET_RECENT_CITIES:
      return {
        ...state,
        recentCities: action.recentCities,
      };

    case STORE_RECENT_CITY:
      return {
        ...state,
        recentCities: {
          ...state.recentCities,
          [action.direction]: [
            action.city,
            ...state.recentCities[action.direction].filter(({ id }) => id !== action.city.id),
          ].slice(0, 5),
        },
      };

    case REMOVE_RECENT_CITY:
      return {
        ...state,
        recentCities: {
          ...state.recentCities,
          [action.direction]: [
            ...state.recentCities[action.direction].filter(({ id }) => id !== action.cityId),
          ],
        },
      };

    case SET_POPULAR_CITIES:
      return {
        ...state,
        popularCities: {
          ...state.popularCities,
          [action.direction]: action.popularCities,
        },
      };

    case STORE_AUTOCOMPLETE_CACHE:
      return {
        ...state,
        autoCompleteCache: {
          ...state.autoCompleteCache,
          [action.key]: action.results,
        },
      };

    default:
      return state;
  }
};
