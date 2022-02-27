const mapping = {
    hr: 'https://www.flixbus.hr/tvrtka/cijene/popusti',
    cs: 'https://www.flixbus.cz/servis/ceny/slevy',
    da: 'https://www.flixbus.dk/selskabet/priser/rabatter',
    nl: 'https://www.flixbus.nl/over-ons/prijzen/kortingen',
    nl_BE: 'https://www.flixbus.be/over-ons/prijzen/kortingen',
    en: 'https://www.flixbus.com/company/prices/discounts',
    en_GB: 'https://www.flixbus.co.uk/company/prices/discounts',
    fr: 'https://www.flixbus.fr/entreprise/prix/reductions',
    fr_BE: 'https://fr.flixbus.be/entreprise/prix/reductions',
    de: 'https://www.flixbus.de/service/preise/ermaessigungen',
    hu: 'https://www.flixbus.hu/rolunk/arak/kedvezmenyek',
    it: 'https://www.flixbus.it/informazioni/prezzi/sconti',
    pl: 'https://www.flixbus.pl/firma/ceny/rabaty',
    ru: 'https://www.flixbus.ru/o-nas/ceny/skidki',
    sk: 'https://www.flixbus.sk/podnik/ceny/zlavy',
    es: 'https://www.flixbus.es/empresa/precios/descuentos',
    se: 'https://www.flixbus.se/foeretag/priser/rabatter',
    tr: 'https://tr.flixbus.com/kurumsal/fiyatlari/indirimleri',
    ro: 'https://www.flixbus.ro/firma/preturi/reduceri',
    sl: 'https://www.flixbus.si/storitve/cene/popusti',
    bg: 'https://www.flixbus.bg/za-nas/tseni/namalenia',
    sr_Latn_RS: 'https://www.flixbus.rs/kompanija/cene/umanjenja',
    no: 'https://www.flixbus.no/om-oss/priser/rabatter',
    pt: 'https://www.flixbus.pt/empresa/precos/descontos',
    sq: 'https://www.flixbus.al/kompania/cmimet/zbritjet',
    uk: 'https://www.flixbus.com.ua/kompaniia/tsiny/znyzhky',
    ca: 'https://www.flixbus.cat/empresa/preus/descomptes',
    mk: 'https://www.flixbus.mk/nashata-kompanija/ceni/namaluvanja',
    at: 'https://www.flixbus.at/service/preise/ermaessigungen',
    en_US: 'https://www.flixbus.com/company/prices/discounts',
    es_US: 'https://es-us.flixbus.com/empresa/precios/descuentos',
    de_CH: 'https://www.flixbus.ch/service/preise/ermaessigungen',
    it_CH: 'https://it.flixbus.ch/informazioni/prezzi/sconti',
    fr_CH: 'https://fr.flixbus.ch/entreprise/prix/reductions',
};

/**
 * Given a locale, get the link used for the Polish discounts.
 *
 * @param {string} locale
 */
export const getPolishDiscountLink = (locale) => (locale in mapping ? mapping[locale] : '');