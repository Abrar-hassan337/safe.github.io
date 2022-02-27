import continents from 'app/config/continents';

const getContinentByCountry = (countryCode) => continents[countryCode.toUpperCase()];

export {
    getContinentByCountry
};