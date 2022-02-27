import { SearchMaskFeatureFlags } from '@webc/meeseeks-ui-sdk/build/types/definitions/components/SearchMaskFeatures';

export const FEATURE_DARKEN_PAGE = 'feature.darken_page';
export const FEATURE_DISTRIBUSION = 'feature.enable_distribusion';
export const FEATURE_POPULAR_SEARCHES = 'feature.popular_searches';
export const FEATURE_RECENT_SEARCHES_WITH_MAP = 'feature.recent_searches_with_map';
export const FEATURE_ONLY_TRAIN_CITIES = 'feature.train_cities_only';

export const features: { [flag in SearchMaskFeatureFlags]: boolean } = {
  [FEATURE_DARKEN_PAGE]: false,
  [FEATURE_DISTRIBUSION]: true,
  [FEATURE_POPULAR_SEARCHES]: false,
  [FEATURE_RECENT_SEARCHES_WITH_MAP]: false,
  [FEATURE_ONLY_TRAIN_CITIES]: false,
};

export const featuresToggledByCookies: {
  [flag in SearchMaskFeatureFlags]?: {
    cookieName: string;
    isEnabled: (cookieValue?: string) => boolean;
  };
} = {
  [FEATURE_DARKEN_PAGE]: {
    cookieName: 'search_darken_page',
    isEnabled: (cookieValue?: string) => cookieValue === 'b',
  },
  [FEATURE_DISTRIBUSION]: {
    cookieName: 'search_distribusion',
    isEnabled: (cookieValue?: string) => cookieValue === '1',
  },
  [FEATURE_POPULAR_SEARCHES]: {
    cookieName: 'recent_searches',
    isEnabled: (cookieValue?: string) => cookieValue === '1' || cookieValue === '2',
  },
  [FEATURE_RECENT_SEARCHES_WITH_MAP]: {
    cookieName: 'recent_searches',
    isEnabled: (cookieValue?: string) => cookieValue === '2',
  },
};
