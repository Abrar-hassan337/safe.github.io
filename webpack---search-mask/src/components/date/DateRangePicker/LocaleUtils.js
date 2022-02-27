import i18nDates from 'app/config/files/i18n-dates.json';

const ZH_CH_DAY = '日';
const ZH_CH_YEAR = '年';

const getLocaleStrings = (locale) => {
    let sanitizedLocale = locale;

    /**
     * There is some fuckup with Norway locales:
     *  - "nb": Used by the drupal CMS (and is actually the official correct locale)
     *  - "no": Used everywhere else (including Shop and SPA, etc).
     */
    if (locale === 'nb') {
        sanitizedLocale = 'no';
    }

    if (!(locale in i18nDates)) {
        sanitizedLocale = 'en';
    }

    return i18nDates[sanitizedLocale];
};

const formatWeekdayShort = (i, locale = 'en') => getLocaleStrings(locale).weekdaysMin[i];

const formatWeekdayLong = (i, locale = 'en') => getLocaleStrings(locale).weekdays[i];

const getFirstDayOfWeek = (locale) => getLocaleStrings(locale).firstDayOfWeek;

const formatDay = (date, locale = 'en') =>
    `${formatWeekdayLong(date.getDay(), locale)}, ${date.getDate()} ${
    getLocaleStrings(locale).months[date.getMonth()]
  } ${date.getFullYear()}`;

const formatMonthTitle = (date, locale = 'en') => {
    if (locale === 'zh_US') {
        return `${date.getFullYear()}${ZH_CH_YEAR}${
      getLocaleStrings(locale).monthsShort[date.getMonth()]
    }`;
    }
    return `${getLocaleStrings(locale).months[date.getMonth()]} ${date.getFullYear()}`;
};

const getDateLabel = (date, locale = 'en') => {
    switch (locale) {
        case 'zh_US':
            return `${getLocaleStrings(locale).weekdaysShort[date.getDay()]} ${
        getLocaleStrings(locale).monthsShort[date.getMonth()]
      }${date.getDate()}${ZH_CH_DAY}`;
        case 'lt_LT':
            return `${getLocaleStrings(locale).weekdaysShort[date.getDay()]}, ${
        getLocaleStrings(locale).monthsShort[date.getMonth()]
      } ${date.getDate()}`;
        default:
            return `${getLocaleStrings(locale).weekdaysShort[date.getDay()]}, ${date.getDate()} ${
        getLocaleStrings(locale).monthsShort[date.getMonth()]
      }`;
    }
};

export const LocaleUtils = {
    formatDay,
    formatMonthTitle,
    formatWeekdayShort,
    formatWeekdayLong,
    getFirstDayOfWeek,
    getDateLabel,
};