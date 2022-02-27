import cookie, { CookieAttributes } from 'js-cookie';

export const getCookie = (name: string) => cookie.get(name) || null;

export const getCookieParsed = <T>(name: string): T | null => {
  const val = getCookie(name);
  if (!val) return null;
  try {
    return JSON.parse(val) as T;
  } catch (error) {
    return null;
  }
};

export const setCookie = (name: string, value: string, opt: CookieAttributes = {}) => {
  cookie.set(name, value, opt);
};
