import {
    getProductTypes
} from 'app/functions/product';

export const queryStringMapping = {
    departureCity: {
        type: 'intOrUuid',
        paramName: 'departureCity',
    },
    arrivalCity: {
        type: 'intOrUuid',
        paramName: 'arrivalCity',
    },
    routeName: {
        type: 'string',
        paramName: 'route',
        exportOnly: true,
    },
    departureDate: {
        type: 'date',
        paramName: 'rideDate',
        format: 'dd.MM.yyyy',
    },
    returnDateActive: {
        type: 'string',
        paramName: 'backRide',
    },
    returnDate: {
        type: 'date',
        paramName: 'backRideDate',
        format: 'dd.MM.yyyy',
    },
    products: {
        type: 'custom',
        fromUrl: (urlParams) => {
            const products = {};

            Object.keys(getProductTypes()).forEach((productType) => {
                if (urlParams.has(productType)) {
                    let quantity = parseInt(urlParams.get(productType), 10);

                    // only 5 bikes allowed per bus
                    if (productType === 'bike_slot') {
                        quantity = Math.min(quantity, 5);
                    }

                    if (quantity >= 0) {
                        products[productType] = quantity;
                    }
                }
            });

            // return object only if we have values
            return Object.keys(products).length > 0 ? products : null;
        },
        toUrl: (urlParams, products) => {
            if (typeof products !== 'object') {
                return;
            }

            // This is needed otherwise shop will break,
            // as the default value for "adult" when a value
            // is not specified is 1, and not 0.
            // This will be changed if needed in the next statement.
            urlParams.set('adult', 0);

            Object.keys(products).forEach((productType) => {
                if (products[productType] < 1) {
                    return;
                }

                urlParams.set(productType, products[productType]);
            });
        },
    },
    locale: {
        type: 'string',
        paramName: '_locale',
        exportOnly: true,
    },
    filters: {
        type: 'string',
        paramName: 'filters',
    },
};