/* eslint-disable */
// Because we run this script directly on the client, I have to write it in the old fashioned way
export default function mountSearchMask(locale, departureCity, arrivalCity, shopUrl) {
    var SEARCH_PERSONALIZATION = "search-personalization"
    var SP_DEPARTURE_CITY = SEARCH_PERSONALIZATION + "-dep-city"
    var SP_ARRIVAL_CITY = SEARCH_PERSONALIZATION + "-arr-city"
    var SP_DEPARTURE_DATE = SEARCH_PERSONALIZATION + "-dep-date"
    var SP_RETURN_DATE = SEARCH_PERSONALIZATION + "-arr-date"
    var SP_PRODUCTS = SEARCH_PERSONALIZATION + "-products"
    var AGENT_COOKIE = "IMAGNC";

    function isEmpty(val) {
        return val === null || val === "" || val === undefined;
    }

    var getCookie = function(name) {
        var value = "; " + document.cookie
        var parts = value.split("; " + name + "=")
        if (parts.length == 2)
            return parts
                .pop()
                .split(";")
                .shift()
    }

    function createCookie(name, value, days) {
        var date, expires
        if (days) {
            date = new Date()
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
            expires = "; expires=" + date.toGMTString()
        } else {
            expires = ""
        }
        document.cookie =
            name +
            "=" +
            value +
            expires +
            "; domain=" +
            window.location.host +
            "; path=/"
    }

    var options = {
        initialSearchMaskValues: {},
    }

    options.features = {}
    if (departureCity !== "undefined" && arrivalCity !== "undefined") {
        options.initialSearchMaskValues.departureCity = departureCity
        options.initialSearchMaskValues.arrivalCity = arrivalCity
    }
    options.handleOwnRequestSearchEvent = true
    options.locale = locale

    options.searchResultsHost = shopUrl ? shopUrl.replace('https://', '') : process.env.SEARCH_MASK_HOST

    options.theme = locale === "tr" ? "kamil" : "default"

    if (!isEmpty(getCookie(SP_DEPARTURE_CITY)) &&
        !isEmpty(getCookie(SP_ARRIVAL_CITY))
    ) {
        options.initialSearchMaskValues.departureCity = getCookie(SP_DEPARTURE_CITY)
        options.initialSearchMaskValues.arrivalCity = getCookie(SP_ARRIVAL_CITY)
    }

    function spDepartureDate() {
        try {
            return window.sessionStorage.getItem(SP_DEPARTURE_DATE)
        } catch (e) {
            return null
        }
    }

    function spReturnDate() {
        try {
            return window.sessionStorage.getItem(SP_RETURN_DATE)
        } catch (e) {
            return null
        }
    }

    function spProducts() {
        try {
            return window.sessionStorage.getItem(SP_PRODUCTS)
        } catch (e) {
            return null
        }
    }

    const spDepartureDateVal = spDepartureDate()
    const spReturnDateVal = spReturnDate()
    const spProductsVal = spProducts()
    const IS_AGENT = getCookie(AGENT_COOKIE) !== undefined;

    if (!IS_AGENT) {
        if (!isEmpty(spDepartureDateVal)) {
            options.initialSearchMaskValues.departureDate = spDepartureDateVal
        }

        if (!isEmpty(spReturnDateVal)) {
            options.initialSearchMaskValues.returnDate = spReturnDateVal
        }

        if (!isEmpty(spProductsVal)) {
            options.initialSearchMaskValues.products = JSON.parse(spProductsVal)
        }
    }

    window.searchMaskComponent.onRequestSearch(function(payload) {
        try {
            window.sessionStorage.setItem(SP_DEPARTURE_DATE, payload.departureDate)
        } catch (e) {
            console.log(e)
        }

        if (payload.returnDate !== null) {
            try {
                window.sessionStorage.setItem(SP_RETURN_DATE, payload.returnDate)
            } catch (e) {
                console.log(e)
            }
        } else {
            try {
                window.sessionStorage.removeItem(SP_RETURN_DATE)
            } catch (e) {
                console.log(e)
            }
        }

        try {
            window.sessionStorage.setItem(
                SP_PRODUCTS,
                JSON.stringify(payload.products)
            )
        } catch (e) {
            console.log(e)
        }

        createCookie(SP_DEPARTURE_CITY, payload.departureCity, 30)
        createCookie(SP_ARRIVAL_CITY, payload.arrivalCity, 30)
    })

    // Hides the Placeholder
    window.searchMaskComponent.onReady(function() {
        document.getElementById("search-mask-placeholder").style.display = "none"
        // TODO: Here report search mask readyness to Data Dog.
    })

    // Firefox does not respect CSS loading order, so we need an
    // interval until the styles are loaded before we mount the
    // search mask
    const mountSearchMaskWithStyles = setInterval(() => {
        if (window.SEARCH_MASK_STYLES_LOADED) {
            window.searchMaskComponent.mount(options)
            clearTimeout(mountSearchMaskWithStyles)
        }
    }, 100)
}