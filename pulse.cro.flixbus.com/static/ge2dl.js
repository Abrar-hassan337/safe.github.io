/*! For license information please see ge2dl.js.LICENSE.txt */ ! function() {
    var e = {
            487: function(e) {
                var t = {
                    utf8: {
                        stringToBytes: function(e) {
                            return t.bin.stringToBytes(unescape(encodeURIComponent(e)))
                        },
                        bytesToString: function(e) {
                            return decodeURIComponent(escape(t.bin.bytesToString(e)))
                        }
                    },
                    bin: {
                        stringToBytes: function(e) {
                            for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));
                            return t
                        },
                        bytesToString: function(e) {
                            for (var t = [], n = 0; n < e.length; n++) t.push(String.fromCharCode(e[n]));
                            return t.join("")
                        }
                    }
                };
                e.exports = t
            },
            12: function(e) {
                var t, n;
                t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = {
                    rotl: function(e, t) {
                        return e << t | e >>> 32 - t
                    },
                    rotr: function(e, t) {
                        return e << 32 - t | e >>> t
                    },
                    endian: function(e) {
                        if (e.constructor == Number) return 16711935 & n.rotl(e, 8) | 4278255360 & n.rotl(e, 24);
                        for (var t = 0; t < e.length; t++) e[t] = n.endian(e[t]);
                        return e
                    },
                    randomBytes: function(e) {
                        for (var t = []; e > 0; e--) t.push(Math.floor(256 * Math.random()));
                        return t
                    },
                    bytesToWords: function(e) {
                        for (var t = [], n = 0, r = 0; n < e.length; n++, r += 8) t[r >>> 5] |= e[n] << 24 - r % 32;
                        return t
                    },
                    wordsToBytes: function(e) {
                        for (var t = [], n = 0; n < 32 * e.length; n += 8) t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
                        return t
                    },
                    bytesToHex: function(e) {
                        for (var t = [], n = 0; n < e.length; n++) t.push((e[n] >>> 4).toString(16)), t.push((15 & e[n]).toString(16));
                        return t.join("")
                    },
                    hexToBytes: function(e) {
                        for (var t = [], n = 0; n < e.length; n += 2) t.push(parseInt(e.substr(n, 2), 16));
                        return t
                    },
                    bytesToBase64: function(e) {
                        for (var n = [], r = 0; r < e.length; r += 3)
                            for (var a = e[r] << 16 | e[r + 1] << 8 | e[r + 2], o = 0; o < 4; o++) 8 * r + 6 * o <= 8 * e.length ? n.push(t.charAt(a >>> 6 * (3 - o) & 63)) : n.push("=");
                        return n.join("")
                    },
                    base64ToBytes: function(e) {
                        e = e.replace(/[^A-Z0-9+\/]/gi, "");
                        for (var n = [], r = 0, a = 0; r < e.length; a = ++r % 4) 0 != a && n.push((t.indexOf(e.charAt(r - 1)) & Math.pow(2, -2 * a + 8) - 1) << 2 * a | t.indexOf(e.charAt(r)) >>> 6 - 2 * a);
                        return n
                    }
                }, e.exports = n
            },
            738: function(e) {
                function t(e) {
                    return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
                }
                e.exports = function(e) {
                    return null != e && (t(e) || function(e) {
                        return "function" == typeof e.readFloatLE && "function" == typeof e.slice && t(e.slice(0, 0))
                    }(e) || !!e._isBuffer)
                }
            },
            568: function(e, t, n) {
                var r, a, o, i, c;
                r = n(12), a = n(487).utf8, o = n(738), i = n(487).bin, (c = function(e, t) {
                    e.constructor == String ? e = t && "binary" === t.encoding ? i.stringToBytes(e) : a.stringToBytes(e) : o(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || e.constructor === Uint8Array || (e = e.toString());
                    for (var n = r.bytesToWords(e), s = 8 * e.length, u = 1732584193, d = -271733879, v = -1732584194, p = 271733878, l = 0; l < n.length; l++) n[l] = 16711935 & (n[l] << 8 | n[l] >>> 24) | 4278255360 & (n[l] << 24 | n[l] >>> 8);
                    n[s >>> 5] |= 128 << s % 32, n[14 + (s + 64 >>> 9 << 4)] = s;
                    var y = c._ff,
                        f = c._gg,
                        h = c._hh,
                        m = c._ii;
                    for (l = 0; l < n.length; l += 16) {
                        var g = u,
                            b = d,
                            w = v,
                            _ = p;
                        u = y(u, d, v, p, n[l + 0], 7, -680876936), p = y(p, u, d, v, n[l + 1], 12, -389564586), v = y(v, p, u, d, n[l + 2], 17, 606105819), d = y(d, v, p, u, n[l + 3], 22, -1044525330), u = y(u, d, v, p, n[l + 4], 7, -176418897), p = y(p, u, d, v, n[l + 5], 12, 1200080426), v = y(v, p, u, d, n[l + 6], 17, -1473231341), d = y(d, v, p, u, n[l + 7], 22, -45705983), u = y(u, d, v, p, n[l + 8], 7, 1770035416), p = y(p, u, d, v, n[l + 9], 12, -1958414417), v = y(v, p, u, d, n[l + 10], 17, -42063), d = y(d, v, p, u, n[l + 11], 22, -1990404162), u = y(u, d, v, p, n[l + 12], 7, 1804603682), p = y(p, u, d, v, n[l + 13], 12, -40341101), v = y(v, p, u, d, n[l + 14], 17, -1502002290), u = f(u, d = y(d, v, p, u, n[l + 15], 22, 1236535329), v, p, n[l + 1], 5, -165796510), p = f(p, u, d, v, n[l + 6], 9, -1069501632), v = f(v, p, u, d, n[l + 11], 14, 643717713), d = f(d, v, p, u, n[l + 0], 20, -373897302), u = f(u, d, v, p, n[l + 5], 5, -701558691), p = f(p, u, d, v, n[l + 10], 9, 38016083), v = f(v, p, u, d, n[l + 15], 14, -660478335), d = f(d, v, p, u, n[l + 4], 20, -405537848), u = f(u, d, v, p, n[l + 9], 5, 568446438), p = f(p, u, d, v, n[l + 14], 9, -1019803690), v = f(v, p, u, d, n[l + 3], 14, -187363961), d = f(d, v, p, u, n[l + 8], 20, 1163531501), u = f(u, d, v, p, n[l + 13], 5, -1444681467), p = f(p, u, d, v, n[l + 2], 9, -51403784), v = f(v, p, u, d, n[l + 7], 14, 1735328473), u = h(u, d = f(d, v, p, u, n[l + 12], 20, -1926607734), v, p, n[l + 5], 4, -378558), p = h(p, u, d, v, n[l + 8], 11, -2022574463), v = h(v, p, u, d, n[l + 11], 16, 1839030562), d = h(d, v, p, u, n[l + 14], 23, -35309556), u = h(u, d, v, p, n[l + 1], 4, -1530992060), p = h(p, u, d, v, n[l + 4], 11, 1272893353), v = h(v, p, u, d, n[l + 7], 16, -155497632), d = h(d, v, p, u, n[l + 10], 23, -1094730640), u = h(u, d, v, p, n[l + 13], 4, 681279174), p = h(p, u, d, v, n[l + 0], 11, -358537222), v = h(v, p, u, d, n[l + 3], 16, -722521979), d = h(d, v, p, u, n[l + 6], 23, 76029189), u = h(u, d, v, p, n[l + 9], 4, -640364487), p = h(p, u, d, v, n[l + 12], 11, -421815835), v = h(v, p, u, d, n[l + 15], 16, 530742520), u = m(u, d = h(d, v, p, u, n[l + 2], 23, -995338651), v, p, n[l + 0], 6, -198630844), p = m(p, u, d, v, n[l + 7], 10, 1126891415), v = m(v, p, u, d, n[l + 14], 15, -1416354905), d = m(d, v, p, u, n[l + 5], 21, -57434055), u = m(u, d, v, p, n[l + 12], 6, 1700485571), p = m(p, u, d, v, n[l + 3], 10, -1894986606), v = m(v, p, u, d, n[l + 10], 15, -1051523), d = m(d, v, p, u, n[l + 1], 21, -2054922799), u = m(u, d, v, p, n[l + 8], 6, 1873313359), p = m(p, u, d, v, n[l + 15], 10, -30611744), v = m(v, p, u, d, n[l + 6], 15, -1560198380), d = m(d, v, p, u, n[l + 13], 21, 1309151649), u = m(u, d, v, p, n[l + 4], 6, -145523070), p = m(p, u, d, v, n[l + 11], 10, -1120210379), v = m(v, p, u, d, n[l + 2], 15, 718787259), d = m(d, v, p, u, n[l + 9], 21, -343485551), u = u + g >>> 0, d = d + b >>> 0, v = v + w >>> 0, p = p + _ >>> 0
                    }
                    return r.endian([u, d, v, p])
                })._ff = function(e, t, n, r, a, o, i) {
                    var c = e + (t & n | ~t & r) + (a >>> 0) + i;
                    return (c << o | c >>> 32 - o) + t
                }, c._gg = function(e, t, n, r, a, o, i) {
                    var c = e + (t & r | n & ~r) + (a >>> 0) + i;
                    return (c << o | c >>> 32 - o) + t
                }, c._hh = function(e, t, n, r, a, o, i) {
                    var c = e + (t ^ n ^ r) + (a >>> 0) + i;
                    return (c << o | c >>> 32 - o) + t
                }, c._ii = function(e, t, n, r, a, o, i) {
                    var c = e + (n ^ (t | ~r)) + (a >>> 0) + i;
                    return (c << o | c >>> 32 - o) + t
                }, c._blocksize = 16, c._digestsize = 16, e.exports = function(e, t) {
                    if (null == e) throw new Error("Illegal argument " + e);
                    var n = r.wordsToBytes(c(e, t));
                    return t && t.asBytes ? n : t && t.asString ? i.bytesToString(n) : r.bytesToHex(n)
                }
            }
        },
        t = {};

    function n(r) {
        var a = t[r];
        if (void 0 !== a) return a.exports;
        var o = t[r] = {
            exports: {}
        };
        return e[r](o, o.exports, n), o.exports
    }
    n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, {
                a: t
            }), t
        }, n.d = function(e, t) {
            for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        function() {
            "use strict";

            function e(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function t(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var r, a = {
                    currency: void 0
                },
                o = {},
                i = function(e) {
                    window.dataLayer.push({
                        event: "ga_event",
                        eventCategory: "Search Interactions",
                        eventAction: e,
                        eventLabel: void 0,
                        eventProperty: void 0
                    })
                },
                c = {
                    state: window.checkout && window.checkout.initState ? window.checkout.initState.cart.items : [],
                    set items(e) {
                        var t = this,
                            n = this.state.map((function(e) {
                                return e.id
                            })),
                            r = e.map((function(e) {
                                return e.id
                            })),
                            a = n.filter((function(e) {
                                return -1 === r.indexOf(e)
                            })),
                            o = r.filter((function(e) {
                                return -1 === n.indexOf(e)
                            })),
                            i = function(n) {
                                t.pushAdd(e.find((function(e) {
                                    return e.id === o[n]
                                })))
                            };
                        for (var c in o) i(c);
                        var s = function(e) {
                            t.pushRemove(t.state.find((function(t) {
                                return t.id === a[e]
                            })))
                        };
                        for (var u in a) s(u);
                        this.state = e
                    },
                    get items() {
                        return this.state
                    },
                    pushAdd: function(e) {
                        if (window.dataLayer.push({
                                "ecommerce.add": void 0
                            }), "luggage" === e.product.type) return !1;
                        window.dataLayer.push({
                            event: "addToCart",
                            ecommerce: {
                                currencyCode: e.price.currency,
                                add: {
                                    products: [{
                                        id: e.id,
                                        name: e.product.type,
                                        price: (+e.price.amount).toFixed(2),
                                        quantity: 1
                                    }]
                                }
                            }
                        })
                    },
                    pushRemove: function(e) {
                        if (window.dataLayer.push({
                                "ecommerce.remove": void 0
                            }), "luggage" === e.product.type) return !1;
                        window.dataLayer.push({
                            event: "removeFromCart",
                            ecommerce: {
                                currencyCode: e.price.currency,
                                remove: {
                                    products: [{
                                        id: e.id,
                                        name: e.product.type,
                                        price: (+e.price.amount).toFixed(2),
                                        quantity: 1
                                    }]
                                }
                            }
                        })
                    }
                },
                s = null,
                u = function() {
                    window.dataLayer.push({
                        event: "ga_event",
                        eventCategory: "Payments",
                        eventAction: "payments.submit",
                        eventLabel: s,
                        eventProperty: void 0
                    })
                },
                d = n(568),
                v = n.n(d),
                p = "_transaction_ids",
                l = function(e) {
                    var t = [78168, 78188, 284211, 284221],
                        n = ["B", "L", "M"],
                        r = [5, 7],
                        a = !1;
                    return Object.keys(e.items).forEach((function(o) {
                        var i = e.items[o].tickets;
                        if (1 !== i.length) return !0;
                        var c = i[0];
                        return !t.includes(c.line_variation_id) || !r.includes(new Date(1e3 * c.stations.from.departure_tz.timestamp).getDay()) || !n.includes(c.stations.from.code) || !n.includes(c.stations.to.code) || void(a = !0)
                    })), a
                },
                y = function(n, r) {
                    try {
                        switch (n) {
                            case "cms.navigation.language_switcher.clicked":
                                ! function(e, t) {
                                    window.dataLayer.push({
                                        event: "ga_event",
                                        eventCategory: "CMS",
                                        eventAction: e,
                                        eventLabel: t.domainLink,
                                        eventProperty: void 0
                                    })
                                }(n, r);
                                break;
                            case "robotnik.ab_test_flags":
                                ! function(e, t) {
                                    if (!Object.keys(t).length) return !1;
                                    Object.keys(t).forEach((function(e) {
                                        var n = String(e),
                                            r = String(t[e]);
                                        window.dataLayer.push({
                                            event: "ab_cc",
                                            ab_cc_id: n,
                                            ab_cc_v: r,
                                            ab_cc_src: "cat"
                                        })
                                    }))
                                }(0, r);
                                break;
                            case "search.search-mask.field-changed":
                                ! function(e, t) {
                                    window.dataLayer.push({
                                        event: "ga_event",
                                        eventCategory: "Search Interactions",
                                        eventAction: t.fieldName,
                                        eventLabel: t.value,
                                        eventProperty: void 0
                                    })
                                }(0, r);
                                break;
                            case "search.search-mask.request-search":
                                ! function(e, t) {
                                    var n = {
                                        ride_date: new Date(1e3 * t.departureDate).toISOString().slice(0, 10),
                                        route: "",
                                        adult: t.products.adult || 0,
                                        children: t.products.children || 0,
                                        bike_slot: t.products.bike_slot || 0
                                    };
                                    t.departureCity && (n.departure_city_uuid = t.departureCity), t.arrivalCity && (n.arrival_city_uuid = t.arrivalCity), t.returnDate && t.returnDate > 0 && (n.back_ride = !0, n.back_ride_date = new Date(1e3 * t.returnDate).toISOString().slice(0, 10)), window.dataLayer.push({
                                        event: "ga_event",
                                        eventCategory: "Search Interactions",
                                        eventAction: "submit",
                                        eventLabel: "Search Button",
                                        eventProperty: JSON.stringify(n)
                                    }), window.dataLayer.push({
                                        event: "searchmask.submit"
                                    })
                                }(0, r);
                                break;
                            case "search.search-mask.nearby_city_selected":
                                ! function(e, t) {
                                    window.dataLayer.push({
                                        event: "ga_event",
                                        eventCategory: "Search Interactions",
                                        eventAction: t.direction,
                                        eventLabel: t.isFlixbusCity,
                                        eventProperty: void 0
                                    })
                                }(0, r);
                                break;
                            case "search.search-mask.field-opened":
                                ! function(e, t) {
                                    window.dataLayer.push({
                                        event: "ga_event",
                                        eventCategory: "Search Interactions",
                                        eventAction: "Field Opened",
                                        eventLabel: t.fieldName,
                                        eventProperty: void 0
                                    })
                                }(0, r);
                                break;
                            case "search.search-mask.field-closed":
                                ! function(e, t) {
                                    window.dataLayer.push({
                                        event: "ga_event",
                                        eventCategory: "Search Interactions",
                                        eventAction: "Field Closed",
                                        eventLabel: t.fieldName,
                                        eventProperty: void 0
                                    })
                                }(0, r);
                                break;
                            case "search.search-mask.city_selected":
                                ! function(e, t) {
                                    window.dataLayer.push({
                                        event: "ga_event",
                                        eventCategory: "Search Interactions",
                                        eventAction: e,
                                        eventLabel: t.isPopular,
                                        eventProperty: void 0
                                    })
                                }(n, r);
                                break;
                            case "search.search-mask.map_clicked":
                                ! function(e, t) {
                                    window.dataLayer.push({
                                        event: "ga_event",
                                        eventCategory: "Search Interactions",
                                        eventAction: e,
                                        eventLabel: void 0,
                                        eventProperty: void 0
                                    })
                                }(n);
                                break;
                            case "search.results.results_visible":
                                ! function(e, t) {
                                    window.dataLayer.push({
                                        "ecommerce.impressions": void 0
                                    }), window.dataLayer.push({
                                        event: "ga_event",
                                        eventCategory: "Search Interactions",
                                        eventAction: "results.count",
                                        eventLabel: Object.keys(t.results).length,
                                        eventProperty: void 0
                                    });
                                    var n = t.tripIndex,
                                        r = t.results,
                                        i = t.searchInfo,
                                        c = function(e) {
                                            return Object.keys(e).length + " / " + Object.keys(e).length
                                        },
                                        s = function(e, t) {
                                            return e[t] && e[t].name ? e[t].name : "unknown"
                                        },
                                        u = function(e, t) {
                                            return e[t] && e[t].slug ? e[t].slug : "unknown"
                                        },
                                        d = i.fromCity,
                                        v = i.toCity,
                                        p = i.currency,
                                        l = i.returnDate,
                                        y = i.allTrips,
                                        f = i.leadTimeOutbound,
                                        h = i.leadTimeReturn,
                                        m = i.stations,
                                        g = Object.values(i.products).reduce((function(e, t) {
                                            return e + t
                                        }));
                                    a.currency = p;
                                    var b = y[0].results,
                                        w = y.length > 1 && y[1].results;
                                    window.dataLayer.push({
                                        event: "productImpressions",
                                        origin: d.name,
                                        destination: v.name,
                                        results: c(b),
                                        returnSearch: l ? "return" : "oneway",
                                        returnResults: w ? c(w) : void 0,
                                        city_from_id: d.legacyId,
                                        city_to_id: v.legacyId,
                                        leadtimeDaysDirect: f,
                                        leadtimeDaysReturn: h,
                                        ecommerce: {
                                            currencyCode: p,
                                            impressions: Object.keys(r).map((function(e) {
                                                return r[e]
                                            })).map((function(e) {
                                                var t = new Date,
                                                    r = new Date(e.departure.date),
                                                    a = {};
                                                a.cheapest = !(!e.labels || !e.labels.includes("cheapest")), a.fastest = !(!e.labels || !e.labels.includes("fastest")), e.remaining && e.remaining.capacity && (a.capacity = e.remaining.capacity), a.status = e.status;
                                                var i = {
                                                    id: e.uid,
                                                    name: [u(m, e.departure.stationId), u(m, e.arrival.stationId)].join("#"),
                                                    price: (+e.price.total).toFixed(2),
                                                    origin: s(m, e.departure.stationId),
                                                    destination: s(m, e.arrival.stationId),
                                                    provider: e.provider,
                                                    transferType: e.transferTypeKey,
                                                    duration: 60 * e.duration.hours + e.duration.minutes,
                                                    leadtime: Math.floor(Math.abs(r - t) / 36e5),
                                                    leadtimeDays: Math.floor(Math.abs(r - t) / 864e5),
                                                    connectionType: e.legs.length > 1 ? e.legs.length - 1 + " changes" : "direct",
                                                    returnType: l ? 0 === n ? "return_there" : "return_back" : "oneway",
                                                    utilization: "0",
                                                    station_from_slug: u(m, e.departure.stationId),
                                                    station_to_slug: u(m, e.arrival.stationId),
                                                    labels: JSON.stringify(a),
                                                    quantity: g,
                                                    departure: e.departure.date,
                                                    arrival: e.arrival.date
                                                };
                                                return o[i.id] = i, i
                                            }))
                                        }
                                    })
                                }(0, r);
                                break;
                            case "search.results.trip_selected":
                                ! function(n, r) {
                                    if (!o[r.tripUid]) return !1;
                                    window.dataLayer.push({
                                        "ecommerce.add": void 0
                                    });
                                    var i = o[r.tripUid],
                                        c = function(n) {
                                            for (var r = 1; r < arguments.length; r++) {
                                                var a = null != arguments[r] ? arguments[r] : {};
                                                r % 2 ? e(Object(a), !0).forEach((function(e) {
                                                    t(n, e, a[e])
                                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : e(Object(a)).forEach((function(e) {
                                                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e))
                                                }))
                                            }
                                            return n
                                        }({}, JSON.parse(i.labels));
                                    c.cheapest = !(!r.isTripCheapestFastest || !r.isTripCheapestFastest.isCheapest), c.fastest = !(!r.isTripCheapestFastest || !r.isTripCheapestFastest.isFastest), c.reservationId = "" + r.reservationId, i.labels = JSON.stringify(c), i.buttonLocation = r.buttonLocation, window.dataLayer.push({
                                        event: "addToCart",
                                        ecommerce: {
                                            currencyCode: a.currency,
                                            add: {
                                                products: [i]
                                            }
                                        }
                                    })
                                }(0, r);
                                break;
                            case "search.results.trip_unselected":
                            case "search.results.trip_removed_from_cart":
                                ! function(e, t) {
                                    if (!o[t.tripUid]) return !1;
                                    window.dataLayer.push({
                                        "ecommerce.remove": void 0
                                    }), window.dataLayer.push({
                                        event: "removeFromCart",
                                        ecommerce: {
                                            currencyCode: a.currency,
                                            remove: {
                                                products: [o[t.tripUid]]
                                            }
                                        }
                                    })
                                }(0, r);
                                break;
                            case "search.results.filters_set":
                                ! function(e, t) {
                                    window.dataLayer.push({
                                        event: "ga_event",
                                        eventCategory: "Search Interactions",
                                        eventAction: e,
                                        eventLabel: "string" == typeof t.filterValue ? "".concat(t.filterName, ": ").concat(t.filterValue) : t.filterName,
                                        eventProperty: JSON.stringify({
                                            visibleResults: t.visibleResults
                                        })
                                    })
                                }(n, r);
                                break;
                            case "search.results.sorting_applied":
                                ! function(e, t) {
                                    window.dataLayer.push({
                                        event: "ga_event",
                                        eventCategory: "Search Interactions",
                                        eventAction: e,
                                        eventLabel: t.value,
                                        eventProperty: void 0
                                    })
                                }(n, r);
                                break;
                            case "search.results.trip_share_popup":
                            case "search.results.trip_share_copy":
                            case "search.results.trip_share_unavailable":
                                ! function(e, t) {
                                    window.dataLayer.push({
                                        event: "ga_event",
                                        eventCategory: "Search Interactions",
                                        eventAction: e,
                                        eventLabel: t,
                                        eventProperty: void 0
                                    })
                                }(n, r);
                                break;
                            case "search.results.other_date_selected":
                                ! function(e, t) {
                                    function n(e) {
                                        var t = e.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/);
                                        return t ? new Date(t[3], t[2] - 1, t[1]) : null
                                    }
                                    var r = n(t.newDate) - n(t.originalDate),
                                        a = Math.ceil(r / 864e5);
                                    window.dataLayer.push({
                                        event: "ga_event",
                                        eventCategory: "Search Interactions",
                                        eventAction: "newDateSelected",
                                        eventLabel: a,
                                        eventProperty: void 0
                                    })
                                }(0, r);
                                break;
                            case "search.results.show_overlay":
                                ! function(e, t) {
                                    window.dataLayer.push({
                                        event: "ga_event",
                                        eventCategory: "Search Interactions",
                                        eventAction: e,
                                        eventLabel: t.id,
                                        eventProperty: void 0
                                    })
                                }(n, r);
                                break;
                            case "search.results.time_to_results":
                                ! function(e, t) {
                                    window.dataLayer.push({
                                        event: "ga_event",
                                        eventCategory: "Search Interactions",
                                        eventAction: e,
                                        eventLabel: Math.round(t.time),
                                        eventProperty: void 0
                                    })
                                }(n, r);
                                break;
                            case "search.previous-page":
                            case "search.edit-relations":
                            case "search.edit-button":
                                i(n);
                                break;
                            case "checkout.init":
                                ! function(e, t) {
                                    c.state = t.payload.cart.items;
                                    var n = !1;
                                    c.state.forEach((function(e) {
                                        return !e.product.trip || !e.product.trip.rides || void e.product.trip.rides.forEach((function(e) {
                                            e.type.indexOf("train") > -1 && (n = !0)
                                        }))
                                    })), window.dataLayer.push({
                                        event: "ga_event",
                                        eventCategory: "Checkout",
                                        eventAction: "contains.train",
                                        eventLabel: n,
                                        eventProperty: void 0
                                    })
                                }(0, r);
                                break;
                            case "passengers.initialized":
                                d = [], document.querySelectorAll("#product-donation, .product-list-item").forEach((function(e) {
                                    return d.push(e.id)
                                })), window.dataLayer.push({
                                    event: "ga_event",
                                    eventCategory: "Checkout",
                                    eventAction: "ancillaries.available",
                                    eventLabel: d.length,
                                    eventProperty: JSON.stringify(d)
                                });
                                break;
                            case "checkout.submit_invalid":
                                (function(e, t) {
                                    Object.keys(t.payload.errors).forEach((function(n) {
                                        switch (n) {
                                            case "passengers":
                                                t.payload.errors[n].forEach((function(t) {
                                                    if (!t) return !0;
                                                    Object.keys(t).forEach((function(t) {
                                                        window.dataLayer.push({
                                                            event: "ga_event",
                                                            eventCategory: "Checkout",
                                                            eventAction: e,
                                                            eventLabel: n + "." + t,
                                                            eventProperty: void 0
                                                        })
                                                    }))
                                                }));
                                                break;
                                            case "contact":
                                                Object.keys(t.payload.errors[n]).forEach((function(t) {
                                                    window.dataLayer.push({
                                                        event: "ga_event",
                                                        eventCategory: "Checkout",
                                                        eventAction: e,
                                                        eventLabel: n + "." + t,
                                                        eventProperty: void 0
                                                    })
                                                }));
                                                break;
                                            default:
                                                window.dataLayer.push({
                                                    event: "ga_event",
                                                    eventCategory: "Checkout",
                                                    eventAction: e,
                                                    eventLabel: n,
                                                    eventProperty: void 0
                                                })
                                        }
                                    })), window.dataLayer.push({
                                        event: "ga_event",
                                        eventCategory: "Checkout",
                                        eventAction: "checkout.submit_click",
                                        eventLabel: "invalid",
                                        eventProperty: JSON.stringify(t.payload.errors)
                                    })
                                })(n, r), u();
                                break;
                            case "checkout.submit":
                                window.dataLayer.push({
                                    event: "ga_event",
                                    eventCategory: "Checkout",
                                    eventAction: "checkout.submit_click",
                                    eventLabel: "valid",
                                    eventProperty: void 0
                                }), u();
                                break;
                            case "product.impression":
                                ! function(e, t) {
                                    window.dataLayer.push({
                                        "ecommerce.impressions": void 0
                                    });
                                    var n = t.payload.product;
                                    switch (n) {
                                        case "luggage_additional":
                                            n = "luggage";
                                            break;
                                        case "premium_seat":
                                            n = "seatReservation"
                                    }
                                    if ("luggage" === n) return !1;
                                    window.dataLayer.push({
                                        event: "productImpressions",
                                        ecommerce: {
                                            impressions: [{
                                                id: n,
                                                name: n,
                                                price: 0,
                                                quantity: 1
                                            }]
                                        }
                                    })
                                }(0, r);
                                break;
                            case "cart.update.success":
                                ! function(e, t) {
                                    c.items = t.payload.items
                                }(0, r);
                                break;
                            case "checkout.ancillaries.impression":
                                ! function(e, t) {
                                    window.dataLayer.push({
                                        "ecommerce.impressions": void 0
                                    }), t.data.forEach((function(e) {
                                        window.dataLayer.push({
                                            event: "productImpressions",
                                            ecommerce: {
                                                currencyCode: e.currency,
                                                impressions: [{
                                                    id: e.id,
                                                    name: t.product,
                                                    price: e.price,
                                                    quantity: e.quantity
                                                }]
                                            }
                                        })
                                    }))
                                }(0, r);
                                break;
                            case "checkout.ancillaries.details":
                                ! function(e, t) {
                                    window.dataLayer.push({
                                        "ecommerce.detail": void 0
                                    }), t.data.forEach((function(e) {
                                        window.dataLayer.push({
                                            event: "productDetail",
                                            ecommerce: {
                                                currencyCode: e.currency,
                                                detail: {
                                                    products: [{
                                                        id: e.id,
                                                        name: t.product,
                                                        price: e.price,
                                                        quantity: e.quantity
                                                    }]
                                                }
                                            }
                                        })
                                    }))
                                }(0, r);
                                break;
                            case "payments.payment_selection.payment_method_selected":
                                ! function(e, t) {
                                    window.dataLayer.push({
                                        event: "ga_event",
                                        eventCategory: "Payments",
                                        eventAction: e,
                                        eventLabel: t.id,
                                        eventProperty: void 0
                                    }), s = t.id
                                }(n, r);
                                break;
                            case "payments.payment.processing_failed":
                                ! function(e, t) {
                                    window.dataLayer.push({
                                        event: "ga_event",
                                        eventCategory: "Payments",
                                        eventAction: "Payment Error",
                                        eventLabel: t.errorCode,
                                        eventProperty: t.error
                                    })
                                }(0, r);
                                break;
                            case "payments.payment_selection.save_payment_method":
                                ! function(e, t) {
                                    window.dataLayer.push({
                                        event: "ga_event",
                                        eventCategory: "Payments",
                                        eventAction: e,
                                        eventLabel: t.paymentMethodId,
                                        eventProperty: t.toSave ? "saved" : "unsaved"
                                    })
                                }(n, r);
                                break;
                            case "payments.adyen.card_brand_rejected":
                                ! function(e, t) {
                                    window.dataLayer.push({
                                        event: "ga_event",
                                        eventCategory: "Payments",
                                        eventAction: "Card Rejected",
                                        eventLabel: t.brand,
                                        eventProperty: void 0
                                    })
                                }(0, r);
                                break;
                            case "payments.payment_selection.is_loaded":
                            case "payments.payment_selection.payment_is_ready":
                            case "payments.payment_selection.checking_apple_availability_start":
                            case "payments.payment_selection.checking_apple_availability_end":
                            case "payments.adyen.risk_data_ready":
                                break;
                            case "booking.success":
                                ! function(e, t) {
                                    var n = JSON.parse(function(e) {
                                        if (window.Storage) return window.localStorage.getItem(e);
                                        var t = ("; " + document.cookie).split("; " + e + "=");
                                        return 2 === t.length ? t.pop().split(";").shift() : void 0
                                    }(p) || "[]");
                                    if (n.indexOf(t.id) > -1) return !1;
                                    window.dataLayer.push({
                                        "ecommerce.purchase": void 0
                                    });
                                    var r = t.payments[0].currency,
                                        a = {
                                            affiliation: t.payments[0].method_title,
                                            billingType: "private",
                                            coupon: t.discount > 0 ? "Coupon " + t.promocodes.join(",") : "no",
                                            customerId: v()(t.customer_email.toLowerCase()),
                                            id: t.id,
                                            promotion: "no",
                                            revenue: (+t.value).toFixed(2),
                                            shipping: 0,
                                            tax: t.taxes
                                        },
                                        o = [];
                                    for (var i in t.items) {
                                        var c = t.items[i],
                                            s = {
                                                id: c.trip_uid,
                                                name: c.stations.from.name + " - " + c.stations.to.name,
                                                price: +(c.total.gross / c.qty).toFixed(2),
                                                reduced: "no",
                                                origin: c.stations.from.name,
                                                destination: c.stations.to.name,
                                                departureDate: c.stations.from.departure.substr(0, 10).replace(/-/gi, ""),
                                                transferType: c.transfer_type_key,
                                                connectionType: c.transfers.length > 1 ? c.transfers.length - 1 + " change" : "direct",
                                                utilization: 0,
                                                quantity: c.qty,
                                                station_from_slug: c.stations.from.slug,
                                                station_to_slug: c.stations.to.slug,
                                                city_from_id: c.stations.from.city_id,
                                                city_to_id: c.stations.to.city_id
                                            };
                                        o.push(s)
                                    }
                                    window.dataLayer.push({
                                        event: "purchase",
                                        ecommerce: {
                                            currencyCode: r,
                                            purchase: {
                                                actionField: a,
                                                products: o
                                            }
                                        }
                                    }), window.dataLayer.push({
                                        event: "ga_event",
                                        eventCategory: "Booking",
                                        eventAction: "contains.seats",
                                        eventLabel: "premium_seat" in t.total_by_places,
                                        eventProperty: void 0
                                    });
                                    var u = [];
                                    Object.keys(t.items).forEach((function(e) {
                                            return t.items[e].transfers.forEach((function(e) {
                                                return u.push(e)
                                            }))
                                        })), u = u.filter((function(e, t, n) {
                                            return n.indexOf(e) === t
                                        })), window.dataLayer.push({
                                            event: "ga_event",
                                            eventCategory: "Booking",
                                            eventAction: "contains.transfer_types",
                                            eventLabel: u.join(" "),
                                            eventProperty: void 0
                                        }), l(t) && window.dataLayer.push({
                                            event: "ga_event",
                                            eventCategory: "Booking",
                                            eventAction: "contains.n95",
                                            eventLabel: void 0,
                                            eventProperty: void 0
                                        }), n.push(t.id),
                                        function(e, t, n) {
                                            if (window.Storage) window.localStorage.setItem(e, t);
                                            else {
                                                var r = new Date;
                                                r.setDate(r.getDate() + 365), document.cookie = e + "=" + t + ";expires=" + r.toUTCString()
                                            }
                                        }(p, JSON.stringify(n))
                                }(0, r);
                                break;
                            case "booking.success.fun_fact.load":
                            case "booking.success.fun_fact.open":
                                ! function(e) {
                                    window.dataLayer.push({
                                        event: "ga_event",
                                        eventCategory: "Booking Interactions",
                                        eventAction: e,
                                        eventLabel: void 0,
                                        eventProperty: void 0
                                    })
                                }(n);
                                break;
                            case "rebooking.click":
                                ! function(e, t) {
                                    window.dataLayer.push({
                                        event: "ga_event",
                                        eventCategory: "Rebooking Interactions",
                                        eventAction: "click",
                                        eventLabel: t.element,
                                        eventProperty: void 0
                                    })
                                }(0, r);
                                break;
                            default:
                                n.match(/^cms./) && function(e, t) {
                                    window.dataLayer.push({
                                        event: "ga_event",
                                        eventCategory: "CMS",
                                        eventAction: e,
                                        eventLabel: t && t.itemName ? t.itemName : void 0,
                                        eventProperty: void 0
                                    })
                                }(n, r), n.match(/^search.results./) && i(n), n.match(/^(passenger|contact|checkout|voucher|expiration|reminder|ancillaries|invoice)/) && !n.match(/(\.change)$/) && function(e) {
                                    window.dataLayer.push({
                                        event: "ga_event",
                                        eventCategory: "Checkout",
                                        eventAction: e,
                                        eventLabel: void 0,
                                        eventProperty: void 0
                                    })
                                }(n), n.match(/^(payments)/) && function(e) {
                                    window.dataLayer.push({
                                        event: "ga_event",
                                        eventCategory: "Payments",
                                        eventAction: e,
                                        eventLabel: void 0,
                                        eventProperty: void 0
                                    })
                                }(n)
                        }
                    } catch (e) {
                        console.error(e)
                    }
                    var d
                };

            function f(e) {
                return f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, f(e)
            }
            r = setInterval((function() {
                "object" === f(window.globalEvents) && (window.dataLayer = window.dataLayer || [], clearInterval(r), window.globalEvents.onAny((function(e, t) {
                    return y(e, t)
                })), function() {
                    if (!window.globalEventsCache || !window.globalEventsCache.length) return !1;
                    window.globalEventsCache.forEach((function(e) {
                        return y(e.name, e.payload[0])
                    }))
                }())
            }), 200)
        }()
}();