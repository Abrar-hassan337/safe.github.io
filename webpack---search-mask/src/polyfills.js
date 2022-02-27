/* eslint-disable */

if (!Object.values) {
    Object.values = (obj) => Object.keys(obj).map((key) => obj[key]);
}

if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
        value(predicate) {
            // 1. Let O be ? ToObject(this value).
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }

            const o = Object(this);

            // 2. Let len be ? ToLength(? Get(O, "length")).
            const len = o.length >>> 0;

            // 3. If IsCallable(predicate) is false, throw a TypeError exception.
            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }

            // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
            const thisArg = arguments[1];

            // 5. Let k be 0.
            let k = 0;

            // 6. Repeat, while k < len
            while (k < len) {
                // a. Let Pk be ! ToString(k).
                // b. Let kValue be ? Get(O, Pk).
                // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
                // d. If testResult is true, return kValue.
                const kValue = o[k];
                if (predicate.call(thisArg, kValue, k, o)) {
                    return kValue;
                }
                // e. Increase k by 1.
                k++;
            }

            // 7. Return undefined.
            return undefined;
        },
        configurable: true,
        writable: true,
    });
}

// isNan is not supported in IE
// polyfill as advised by MDN
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN#Polyfill
Number.isNaN =
    Number.isNaN ||
    function(value) {
        return value !== value;
    };

// StartsWith is not supported in IE
// polyfill as advised by MDN
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith#Polyfill
if (!String.prototype.startsWith) {
    Object.defineProperty(String.prototype, 'startsWith', {
        value: function(search, rawPos) {
            var pos = rawPos > 0 ? rawPos | 0 : 0;
            return this.substring(pos, pos + search.length) === search;
        },
    });
}

Object.assign = require('object-assign');
require('core-js/es/array/from');
require('core-js/es/array/find-index');