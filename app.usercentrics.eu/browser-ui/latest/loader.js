! function() {
    "use strict";
    var e, t = "usercentrics-cmp";
    ! function(e) {
        e.AMP_ENABLED = "ampEnabled", e.AVOID_PREFETCH_SERVICES = "avoidPrefetchServices", e.BLOCK_DATA_LAYER_PUSH = "blockDataLayerPush", e.CONTROLLER_ID = "controllerId", e.CLIENT_CONFIG = "clientConfig", e.DISABLE_TRACKING = "disableTracking", e.EU_MODE = "euMode", e.ID = "id", e.LANGUAGE = "language", e.DISABLE_SERVER_CONSENTS = "disableServerConsents", e.RULESET_ID = "rulesetId", e.SANDBOX_ENV = "sandbox", e.SETTINGS_CACHE = "settingsCache", e.SETTINGS_ID = "settingsId", e.SUPPRESS_CMP_DISPLAY = "suppressCmpDisplay", e.TCF_ENABLED = "tcfEnabled", e.VERSION = "version"
    }(e || (e = {}));
    var r = "uc_ui_version";

    function n(e) {
        return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, n(e)
    }
    var i = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function o(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
    }
    var a = {
        exports: {}
    };
    a.exports = function(e) {
        var t = {};

        function r(n) {
            if (t[n]) return t[n].exports;
            var i = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
        }
        return r.m = e, r.c = t, r.d = function(e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }, r.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, r.t = function(e, t) {
            if (1 & t && (e = r(e)), 8 & t) return e;
            if (4 & t && "object" == n(e) && e && e.__esModule) return e;
            var i = Object.create(null);
            if (r.r(i), Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var o in e) r.d(i, o, function(t) {
                    return e[t]
                }.bind(null, o));
            return i
        }, r.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return r.d(t, "a", t), t
        }, r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, r.p = "", r(r.s = 90)
    }({
        17: function(e, t, r) {
            t.__esModule = !0, t.default = void 0;
            var i = r(18),
                o = function() {
                    function e() {}
                    return e.getFirstMatch = function(e, t) {
                        var r = t.match(e);
                        return r && r.length > 0 && r[1] || ""
                    }, e.getSecondMatch = function(e, t) {
                        var r = t.match(e);
                        return r && r.length > 1 && r[2] || ""
                    }, e.matchAndReturnConst = function(e, t, r) {
                        if (e.test(t)) return r
                    }, e.getWindowsVersionName = function(e) {
                        switch (e) {
                            case "NT":
                                return "NT";
                            case "XP":
                            case "NT 5.1":
                                return "XP";
                            case "NT 5.0":
                                return "2000";
                            case "NT 5.2":
                                return "2003";
                            case "NT 6.0":
                                return "Vista";
                            case "NT 6.1":
                                return "7";
                            case "NT 6.2":
                                return "8";
                            case "NT 6.3":
                                return "8.1";
                            case "NT 10.0":
                                return "10";
                            default:
                                return
                        }
                    }, e.getMacOSVersionName = function(e) {
                        var t = e.split(".").splice(0, 2).map((function(e) {
                            return parseInt(e, 10) || 0
                        }));
                        if (t.push(0), 10 === t[0]) switch (t[1]) {
                            case 5:
                                return "Leopard";
                            case 6:
                                return "Snow Leopard";
                            case 7:
                                return "Lion";
                            case 8:
                                return "Mountain Lion";
                            case 9:
                                return "Mavericks";
                            case 10:
                                return "Yosemite";
                            case 11:
                                return "El Capitan";
                            case 12:
                                return "Sierra";
                            case 13:
                                return "High Sierra";
                            case 14:
                                return "Mojave";
                            case 15:
                                return "Catalina";
                            default:
                                return
                        }
                    }, e.getAndroidVersionName = function(e) {
                        var t = e.split(".").splice(0, 2).map((function(e) {
                            return parseInt(e, 10) || 0
                        }));
                        if (t.push(0), !(1 === t[0] && t[1] < 5)) return 1 === t[0] && t[1] < 6 ? "Cupcake" : 1 === t[0] && t[1] >= 6 ? "Donut" : 2 === t[0] && t[1] < 2 ? "Eclair" : 2 === t[0] && 2 === t[1] ? "Froyo" : 2 === t[0] && t[1] > 2 ? "Gingerbread" : 3 === t[0] ? "Honeycomb" : 4 === t[0] && t[1] < 1 ? "Ice Cream Sandwich" : 4 === t[0] && t[1] < 4 ? "Jelly Bean" : 4 === t[0] && t[1] >= 4 ? "KitKat" : 5 === t[0] ? "Lollipop" : 6 === t[0] ? "Marshmallow" : 7 === t[0] ? "Nougat" : 8 === t[0] ? "Oreo" : 9 === t[0] ? "Pie" : void 0
                    }, e.getVersionPrecision = function(e) {
                        return e.split(".").length
                    }, e.compareVersions = function(t, r, n) {
                        void 0 === n && (n = !1);
                        var i = e.getVersionPrecision(t),
                            o = e.getVersionPrecision(r),
                            a = Math.max(i, o),
                            s = 0,
                            u = e.map([t, r], (function(t) {
                                var r = a - e.getVersionPrecision(t),
                                    n = t + new Array(r + 1).join(".0");
                                return e.map(n.split("."), (function(e) {
                                    return new Array(20 - e.length).join("0") + e
                                })).reverse()
                            }));
                        for (n && (s = a - Math.min(i, o)), a -= 1; a >= s;) {
                            if (u[0][a] > u[1][a]) return 1;
                            if (u[0][a] === u[1][a]) {
                                if (a === s) return 0;
                                a -= 1
                            } else if (u[0][a] < u[1][a]) return -1
                        }
                    }, e.map = function(e, t) {
                        var r, n = [];
                        if (Array.prototype.map) return Array.prototype.map.call(e, t);
                        for (r = 0; r < e.length; r += 1) n.push(t(e[r]));
                        return n
                    }, e.find = function(e, t) {
                        var r, n;
                        if (Array.prototype.find) return Array.prototype.find.call(e, t);
                        for (r = 0, n = e.length; r < n; r += 1) {
                            var i = e[r];
                            if (t(i, r)) return i
                        }
                    }, e.assign = function(e) {
                        for (var t, r, i = e, o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), s = 1; s < o; s++) a[s - 1] = arguments[s];
                        if (Object.assign) return Object.assign.apply(Object, [e].concat(a));
                        var u = function() {
                            var e = a[t];
                            "object" == n(e) && null !== e && Object.keys(e).forEach((function(t) {
                                i[t] = e[t]
                            }))
                        };
                        for (t = 0, r = a.length; t < r; t += 1) u();
                        return e
                    }, e.getBrowserAlias = function(e) {
                        return i.BROWSER_ALIASES_MAP[e]
                    }, e.getBrowserTypeByAlias = function(e) {
                        return i.BROWSER_MAP[e] || ""
                    }, e
                }();
            t.default = o, e.exports = t.default
        },
        18: function(e, t, r) {
            t.__esModule = !0, t.ENGINE_MAP = t.OS_MAP = t.PLATFORMS_MAP = t.BROWSER_MAP = t.BROWSER_ALIASES_MAP = void 0, t.BROWSER_ALIASES_MAP = {
                "Amazon Silk": "amazon_silk",
                "Android Browser": "android",
                Bada: "bada",
                BlackBerry: "blackberry",
                Chrome: "chrome",
                Chromium: "chromium",
                Electron: "electron",
                Epiphany: "epiphany",
                Firefox: "firefox",
                Focus: "focus",
                Generic: "generic",
                "Google Search": "google_search",
                Googlebot: "googlebot",
                "Internet Explorer": "ie",
                "K-Meleon": "k_meleon",
                Maxthon: "maxthon",
                "Microsoft Edge": "edge",
                "MZ Browser": "mz",
                "NAVER Whale Browser": "naver",
                Opera: "opera",
                "Opera Coast": "opera_coast",
                PhantomJS: "phantomjs",
                Puffin: "puffin",
                QupZilla: "qupzilla",
                QQ: "qq",
                QQLite: "qqlite",
                Safari: "safari",
                Sailfish: "sailfish",
                "Samsung Internet for Android": "samsung_internet",
                SeaMonkey: "seamonkey",
                Sleipnir: "sleipnir",
                Swing: "swing",
                Tizen: "tizen",
                "UC Browser": "uc",
                Vivaldi: "vivaldi",
                "WebOS Browser": "webos",
                WeChat: "wechat",
                "Yandex Browser": "yandex",
                Roku: "roku"
            }, t.BROWSER_MAP = {
                amazon_silk: "Amazon Silk",
                android: "Android Browser",
                bada: "Bada",
                blackberry: "BlackBerry",
                chrome: "Chrome",
                chromium: "Chromium",
                electron: "Electron",
                epiphany: "Epiphany",
                firefox: "Firefox",
                focus: "Focus",
                generic: "Generic",
                googlebot: "Googlebot",
                google_search: "Google Search",
                ie: "Internet Explorer",
                k_meleon: "K-Meleon",
                maxthon: "Maxthon",
                edge: "Microsoft Edge",
                mz: "MZ Browser",
                naver: "NAVER Whale Browser",
                opera: "Opera",
                opera_coast: "Opera Coast",
                phantomjs: "PhantomJS",
                puffin: "Puffin",
                qupzilla: "QupZilla",
                qq: "QQ Browser",
                qqlite: "QQ Browser Lite",
                safari: "Safari",
                sailfish: "Sailfish",
                samsung_internet: "Samsung Internet for Android",
                seamonkey: "SeaMonkey",
                sleipnir: "Sleipnir",
                swing: "Swing",
                tizen: "Tizen",
                uc: "UC Browser",
                vivaldi: "Vivaldi",
                webos: "WebOS Browser",
                wechat: "WeChat",
                yandex: "Yandex Browser"
            }, t.PLATFORMS_MAP = {
                tablet: "tablet",
                mobile: "mobile",
                desktop: "desktop",
                tv: "tv"
            }, t.OS_MAP = {
                WindowsPhone: "Windows Phone",
                Windows: "Windows",
                MacOS: "macOS",
                iOS: "iOS",
                Android: "Android",
                WebOS: "WebOS",
                BlackBerry: "BlackBerry",
                Bada: "Bada",
                Tizen: "Tizen",
                Linux: "Linux",
                ChromeOS: "Chrome OS",
                PlayStation4: "PlayStation 4",
                Roku: "Roku"
            }, t.ENGINE_MAP = {
                EdgeHTML: "EdgeHTML",
                Blink: "Blink",
                Trident: "Trident",
                Presto: "Presto",
                Gecko: "Gecko",
                WebKit: "WebKit"
            }
        },
        90: function(e, t, r) {
            t.__esModule = !0, t.default = void 0;
            var n, i = (n = r(91)) && n.__esModule ? n : {
                    default: n
                },
                o = r(18);

            function a(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            var s = function() {
                function e() {}
                var t, r, n;
                return e.getParser = function(e, t) {
                    if (void 0 === t && (t = !1), "string" != typeof e) throw new Error("UserAgent should be a string");
                    return new i.default(e, t)
                }, e.parse = function(e) {
                    return new i.default(e).getResult()
                }, t = e, n = [{
                    key: "BROWSER_MAP",
                    get: function() {
                        return o.BROWSER_MAP
                    }
                }, {
                    key: "ENGINE_MAP",
                    get: function() {
                        return o.ENGINE_MAP
                    }
                }, {
                    key: "OS_MAP",
                    get: function() {
                        return o.OS_MAP
                    }
                }, {
                    key: "PLATFORMS_MAP",
                    get: function() {
                        return o.PLATFORMS_MAP
                    }
                }], (r = null) && a(t.prototype, r), n && a(t, n), e
            }();
            t.default = s, e.exports = t.default
        },
        91: function(e, t, r) {
            t.__esModule = !0, t.default = void 0;
            var i = c(r(92)),
                o = c(r(93)),
                a = c(r(94)),
                s = c(r(95)),
                u = c(r(17));

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var f = function() {
                function e(e, t) {
                    if (void 0 === t && (t = !1), null == e || "" === e) throw new Error("UserAgent parameter can't be empty");
                    this._ua = e, this.parsedResult = {}, !0 !== t && this.parse()
                }
                var t = e.prototype;
                return t.getUA = function() {
                    return this._ua
                }, t.test = function(e) {
                    return e.test(this._ua)
                }, t.parseBrowser = function() {
                    var e = this;
                    this.parsedResult.browser = {};
                    var t = u.default.find(i.default, (function(t) {
                        if ("function" == typeof t.test) return t.test(e);
                        if (t.test instanceof Array) return t.test.some((function(t) {
                            return e.test(t)
                        }));
                        throw new Error("Browser's test function is not valid")
                    }));
                    return t && (this.parsedResult.browser = t.describe(this.getUA())), this.parsedResult.browser
                }, t.getBrowser = function() {
                    return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser()
                }, t.getBrowserName = function(e) {
                    return e ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || ""
                }, t.getBrowserVersion = function() {
                    return this.getBrowser().version
                }, t.getOS = function() {
                    return this.parsedResult.os ? this.parsedResult.os : this.parseOS()
                }, t.parseOS = function() {
                    var e = this;
                    this.parsedResult.os = {};
                    var t = u.default.find(o.default, (function(t) {
                        if ("function" == typeof t.test) return t.test(e);
                        if (t.test instanceof Array) return t.test.some((function(t) {
                            return e.test(t)
                        }));
                        throw new Error("Browser's test function is not valid")
                    }));
                    return t && (this.parsedResult.os = t.describe(this.getUA())), this.parsedResult.os
                }, t.getOSName = function(e) {
                    var t = this.getOS().name;
                    return e ? String(t).toLowerCase() || "" : t || ""
                }, t.getOSVersion = function() {
                    return this.getOS().version
                }, t.getPlatform = function() {
                    return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform()
                }, t.getPlatformType = function(e) {
                    void 0 === e && (e = !1);
                    var t = this.getPlatform().type;
                    return e ? String(t).toLowerCase() || "" : t || ""
                }, t.parsePlatform = function() {
                    var e = this;
                    this.parsedResult.platform = {};
                    var t = u.default.find(a.default, (function(t) {
                        if ("function" == typeof t.test) return t.test(e);
                        if (t.test instanceof Array) return t.test.some((function(t) {
                            return e.test(t)
                        }));
                        throw new Error("Browser's test function is not valid")
                    }));
                    return t && (this.parsedResult.platform = t.describe(this.getUA())), this.parsedResult.platform
                }, t.getEngine = function() {
                    return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine()
                }, t.getEngineName = function(e) {
                    return e ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || ""
                }, t.parseEngine = function() {
                    var e = this;
                    this.parsedResult.engine = {};
                    var t = u.default.find(s.default, (function(t) {
                        if ("function" == typeof t.test) return t.test(e);
                        if (t.test instanceof Array) return t.test.some((function(t) {
                            return e.test(t)
                        }));
                        throw new Error("Browser's test function is not valid")
                    }));
                    return t && (this.parsedResult.engine = t.describe(this.getUA())), this.parsedResult.engine
                }, t.parse = function() {
                    return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this
                }, t.getResult = function() {
                    return u.default.assign({}, this.parsedResult)
                }, t.satisfies = function(e) {
                    var t = this,
                        r = {},
                        i = 0,
                        o = {},
                        a = 0;
                    if (Object.keys(e).forEach((function(t) {
                            var s = e[t];
                            "string" == typeof s ? (o[t] = s, a += 1) : "object" == n(s) && (r[t] = s, i += 1)
                        })), i > 0) {
                        var s = Object.keys(r),
                            c = u.default.find(s, (function(e) {
                                return t.isOS(e)
                            }));
                        if (c) {
                            var f = this.satisfies(r[c]);
                            if (void 0 !== f) return f
                        }
                        var d = u.default.find(s, (function(e) {
                            return t.isPlatform(e)
                        }));
                        if (d) {
                            var l = this.satisfies(r[d]);
                            if (void 0 !== l) return l
                        }
                    }
                    if (a > 0) {
                        var p = Object.keys(o),
                            v = u.default.find(p, (function(e) {
                                return t.isBrowser(e, !0)
                            }));
                        if (void 0 !== v) return this.compareVersion(o[v])
                    }
                }, t.isBrowser = function(e, t) {
                    void 0 === t && (t = !1);
                    var r = this.getBrowserName().toLowerCase(),
                        n = e.toLowerCase(),
                        i = u.default.getBrowserTypeByAlias(n);
                    return t && i && (n = i.toLowerCase()), n === r
                }, t.compareVersion = function(e) {
                    var t = [0],
                        r = e,
                        n = !1,
                        i = this.getBrowserVersion();
                    if ("string" == typeof i) return ">" === e[0] || "<" === e[0] ? (r = e.substr(1), "=" === e[1] ? (n = !0, r = e.substr(2)) : t = [], ">" === e[0] ? t.push(1) : t.push(-1)) : "=" === e[0] ? r = e.substr(1) : "~" === e[0] && (n = !0, r = e.substr(1)), t.indexOf(u.default.compareVersions(i, r, n)) > -1
                }, t.isOS = function(e) {
                    return this.getOSName(!0) === String(e).toLowerCase()
                }, t.isPlatform = function(e) {
                    return this.getPlatformType(!0) === String(e).toLowerCase()
                }, t.isEngine = function(e) {
                    return this.getEngineName(!0) === String(e).toLowerCase()
                }, t.is = function(e, t) {
                    return void 0 === t && (t = !1), this.isBrowser(e, t) || this.isOS(e) || this.isPlatform(e)
                }, t.some = function(e) {
                    var t = this;
                    return void 0 === e && (e = []), e.some((function(e) {
                        return t.is(e)
                    }))
                }, e
            }();
            t.default = f, e.exports = t.default
        },
        92: function(e, t, r) {
            t.__esModule = !0, t.default = void 0;
            var n, i = (n = r(17)) && n.__esModule ? n : {
                    default: n
                },
                o = /version\/(\d+(\.?_?\d+)+)/i,
                a = [{
                    test: [/googlebot/i],
                    describe: function(e) {
                        var t = {
                                name: "Googlebot"
                            },
                            r = i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) || i.default.getFirstMatch(o, e);
                        return r && (t.version = r), t
                    }
                }, {
                    test: [/opera/i],
                    describe: function(e) {
                        var t = {
                                name: "Opera"
                            },
                            r = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t
                    }
                }, {
                    test: [/opr\/|opios/i],
                    describe: function(e) {
                        var t = {
                                name: "Opera"
                            },
                            r = i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) || i.default.getFirstMatch(o, e);
                        return r && (t.version = r), t
                    }
                }, {
                    test: [/SamsungBrowser/i],
                    describe: function(e) {
                        var t = {
                                name: "Samsung Internet for Android"
                            },
                            r = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t
                    }
                }, {
                    test: [/Whale/i],
                    describe: function(e) {
                        var t = {
                                name: "NAVER Whale Browser"
                            },
                            r = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e);
                        return r && (t.version = r), t
                    }
                }, {
                    test: [/MZBrowser/i],
                    describe: function(e) {
                        var t = {
                                name: "MZ Browser"
                            },
                            r = i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                        return r && (t.version = r), t
                    }
                }, {
                    test: [/focus/i],
                    describe: function(e) {
                        var t = {
                                name: "Focus"
                            },
                            r = i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                        return r && (t.version = r), t
                    }
                }, {
                    test: [/swing/i],
                    describe: function(e) {
                        var t = {
                                name: "Swing"
                            },
                            r = i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                        return r && (t.version = r), t
                    }
                }, {
                    test: [/coast/i],
                    describe: function(e) {
                        var t = {
                                name: "Opera Coast"
                            },
                            r = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t
                    }
                }, {
                    test: [/opt\/\d+(?:.?_?\d+)+/i],
                    describe: function(e) {
                        var t = {
                                name: "Opera Touch"
                            },
                            r = i.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                        return r && (t.version = r), t
                    }
                }, {
                    test: [/yabrowser/i],
                    describe: function(e) {
                        var t = {
                                name: "Yandex Browser"
                            },
                            r = i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                        return r && (t.version = r), t
                    }
                }, {
                    test: [/ucbrowser/i],
                    describe: function(e) {
                        var t = {
                                name: "UC Browser"
                            },
                            r = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t
                    }
                }, {
                    test: [/Maxthon|mxios/i],
                    describe: function(e) {
                        var t = {
                                name: "Maxthon"
                            },
                            r = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t
                    }
                }, {
                    test: [/epiphany/i],
                    describe: function(e) {
                        var t = {
                                name: "Epiphany"
                            },
                            r = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t
                    }
                }, {
                    test: [/puffin/i],
                    describe: function(e) {
                        var t = {
                                name: "Puffin"
                            },
                            r = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t
                    }
                }, {
                    test: [/sleipnir/i],
                    describe: function(e) {
                        var t = {
                                name: "Sleipnir"
                            },
                            r = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t
                    }
                }, {
                    test: [/k-meleon/i],
                    describe: function(e) {
                        var t = {
                                name: "K-Meleon"
                            },
                            r = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t
                    }
                }, {
                    test: [/micromessenger/i],
                    describe: function(e) {
                        var t = {
                                name: "WeChat"
                            },
                            r = i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                        return r && (t.version = r), t
                    }
                }, {
                    test: [/qqbrowser/i],
                    describe: function(e) {
                        var t = {
                                name: /qqbrowserlite/i.test(e) ? "QQ Browser Lite" : "QQ Browser"
                            },
                            r = i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                        return r && (t.version = r), t
                    }
                }, {
                    test: [/msie|trident/i],
                    describe: function(e) {
                        var t = {
                                name: "Internet Explorer"
                            },
                            r = i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t
                    }
                }, {
                    test: [/\sedg\//i],
                    describe: function(e) {
                        var t = {
                                name: "Microsoft Edge"
                            },
                            r = i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t
                    }
                }, {
                    test: [/edg([ea]|ios)/i],
                    describe: function(e) {
                        var t = {
                                name: "Microsoft Edge"
                            },
                            r = i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t
                    }
                }, {
                    test: [/vivaldi/i],
                    describe: function(e) {
                        var t = {
                                name: "Vivaldi"
                            },
                            r = i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t
                    }
                }, {
                    test: [/seamonkey/i],
                    describe: function(e) {
                        var t = {
                                name: "SeaMonkey"
                            },
                            r = i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t
                    }
                }, {
                    test: [/sailfish/i],
                    describe: function(e) {
                        var t = {
                                name: "Sailfish"
                            },
                            r = i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
                        return r && (t.version = r), t
                    }
                }, {
                    test: [/silk/i],
                    describe: function(e) {
                        var t = {
                                name: "Amazon Silk"
                            },
                            r = i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t
                    }
                }, {
                    test: [/phantom/i],
                    describe: function(e) {
                        var t = {
                                name: "PhantomJS"
                            },
                            r = i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t
                    }
                }, {
                    test: [/slimerjs/i],
                    describe: function(e) {
                        var t = {
                                name: "SlimerJS"
                            },
                            r = i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t
                    }
                }, {
                    test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                    describe: function(e) {
                        var t = {
                                name: "BlackBerry"
                            },
                            r = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t
                    }
                }, {
                    test: [/(web|hpw)[o0]s/i],
                    describe: function(e) {
                        var t = {
                                name: "WebOS Browser"
                            },
                            r = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t
                    }
                }, {
                    test: [/bada/i],
                    describe: function(e) {
                        var t = {
                                name: "Bada"
                            },
                            r = i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t
                    }
                }, {
                    test: [/tizen/i],
                    describe: function(e) {
                        var t = {
                                name: "Tizen"
                            },
                            r = i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                        return r && (t.version = r), t
                    }
                }, {
                    test: [/qupzilla/i],
                    describe: function(e) {
                        var t = {
                                name: "QupZilla"
                            },
                            r = i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                        return r && (t.version = r), t
                    }
                }, {
                    test: [/firefox|iceweasel|fxios/i],
                    describe: function(e) {
                        var t = {
                                name: "Firefox"
                            },
                            r = i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t
                    }
                }, {
                    test: [/electron/i],
                    describe: function(e) {
                        var t = {
                                name: "Electron"
                            },
                            r = i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t
                    }
                }, {
                    test: [/MiuiBrowser/i],
                    describe: function(e) {
                        var t = {
                                name: "Miui"
                            },
                            r = i.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t
                    }
                }, {
                    test: [/chromium/i],
                    describe: function(e) {
                        var t = {
                                name: "Chromium"
                            },
                            r = i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                        return r && (t.version = r), t
                    }
                }, {
                    test: [/chrome|crios|crmo/i],
                    describe: function(e) {
                        var t = {
                                name: "Chrome"
                            },
                            r = i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t
                    }
                }, {
                    test: [/GSA/i],
                    describe: function(e) {
                        var t = {
                                name: "Google Search"
                            },
                            r = i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t
                    }
                }, {
                    test: function(e) {
                        var t = !e.test(/like android/i),
                            r = e.test(/android/i);
                        return t && r
                    },
                    describe: function(e) {
                        var t = {
                                name: "Android Browser"
                            },
                            r = i.default.getFirstMatch(o, e);
                        return r && (t.version = r), t
                    }
                }, {
                    test: [/playstation 4/i],
                    describe: function(e) {
                        var t = {
                                name: "PlayStation 4"
                            },
                            r = i.default.getFirstMatch(o, e);
                        return r && (t.version = r), t
                    }
                }, {
                    test: [/safari|applewebkit/i],
                    describe: function(e) {
                        var t = {
                                name: "Safari"
                            },
                            r = i.default.getFirstMatch(o, e);
                        return r && (t.version = r), t
                    }
                }, {
                    test: [/.*/i],
                    describe: function(e) {
                        var t = -1 !== e.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
                        return {
                            name: i.default.getFirstMatch(t, e),
                            version: i.default.getSecondMatch(t, e)
                        }
                    }
                }];
            t.default = a, e.exports = t.default
        },
        93: function(e, t, r) {
            t.__esModule = !0, t.default = void 0;
            var n, i = (n = r(17)) && n.__esModule ? n : {
                    default: n
                },
                o = r(18),
                a = [{
                    test: [/Roku\/DVP/],
                    describe: function(e) {
                        var t = i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
                        return {
                            name: o.OS_MAP.Roku,
                            version: t
                        }
                    }
                }, {
                    test: [/windows phone/i],
                    describe: function(e) {
                        var t = i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e);
                        return {
                            name: o.OS_MAP.WindowsPhone,
                            version: t
                        }
                    }
                }, {
                    test: [/windows /i],
                    describe: function(e) {
                        var t = i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e),
                            r = i.default.getWindowsVersionName(t);
                        return {
                            name: o.OS_MAP.Windows,
                            version: t,
                            versionName: r
                        }
                    }
                }, {
                    test: [/Macintosh(.*?) FxiOS(.*?)\//],
                    describe: function(e) {
                        var t = {
                                name: o.OS_MAP.iOS
                            },
                            r = i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
                        return r && (t.version = r), t
                    }
                }, {
                    test: [/macintosh/i],
                    describe: function(e) {
                        var t = i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e).replace(/[_\s]/g, "."),
                            r = i.default.getMacOSVersionName(t),
                            n = {
                                name: o.OS_MAP.MacOS,
                                version: t
                            };
                        return r && (n.versionName = r), n
                    }
                }, {
                    test: [/(ipod|iphone|ipad)/i],
                    describe: function(e) {
                        var t = i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e).replace(/[_\s]/g, ".");
                        return {
                            name: o.OS_MAP.iOS,
                            version: t
                        }
                    }
                }, {
                    test: function(e) {
                        var t = !e.test(/like android/i),
                            r = e.test(/android/i);
                        return t && r
                    },
                    describe: function(e) {
                        var t = i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e),
                            r = i.default.getAndroidVersionName(t),
                            n = {
                                name: o.OS_MAP.Android,
                                version: t
                            };
                        return r && (n.versionName = r), n
                    }
                }, {
                    test: [/(web|hpw)[o0]s/i],
                    describe: function(e) {
                        var t = i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e),
                            r = {
                                name: o.OS_MAP.WebOS
                            };
                        return t && t.length && (r.version = t), r
                    }
                }, {
                    test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                    describe: function(e) {
                        var t = i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) || i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) || i.default.getFirstMatch(/\bbb(\d+)/i, e);
                        return {
                            name: o.OS_MAP.BlackBerry,
                            version: t
                        }
                    }
                }, {
                    test: [/bada/i],
                    describe: function(e) {
                        var t = i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
                        return {
                            name: o.OS_MAP.Bada,
                            version: t
                        }
                    }
                }, {
                    test: [/tizen/i],
                    describe: function(e) {
                        var t = i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e);
                        return {
                            name: o.OS_MAP.Tizen,
                            version: t
                        }
                    }
                }, {
                    test: [/linux/i],
                    describe: function() {
                        return {
                            name: o.OS_MAP.Linux
                        }
                    }
                }, {
                    test: [/CrOS/],
                    describe: function() {
                        return {
                            name: o.OS_MAP.ChromeOS
                        }
                    }
                }, {
                    test: [/PlayStation 4/],
                    describe: function(e) {
                        var t = i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e);
                        return {
                            name: o.OS_MAP.PlayStation4,
                            version: t
                        }
                    }
                }];
            t.default = a, e.exports = t.default
        },
        94: function(e, t, r) {
            t.__esModule = !0, t.default = void 0;
            var n, i = (n = r(17)) && n.__esModule ? n : {
                    default: n
                },
                o = r(18),
                a = [{
                    test: [/googlebot/i],
                    describe: function() {
                        return {
                            type: "bot",
                            vendor: "Google"
                        }
                    }
                }, {
                    test: [/huawei/i],
                    describe: function(e) {
                        var t = i.default.getFirstMatch(/(can-l01)/i, e) && "Nova",
                            r = {
                                type: o.PLATFORMS_MAP.mobile,
                                vendor: "Huawei"
                            };
                        return t && (r.model = t), r
                    }
                }, {
                    test: [/nexus\s*(?:7|8|9|10).*/i],
                    describe: function() {
                        return {
                            type: o.PLATFORMS_MAP.tablet,
                            vendor: "Nexus"
                        }
                    }
                }, {
                    test: [/ipad/i],
                    describe: function() {
                        return {
                            type: o.PLATFORMS_MAP.tablet,
                            vendor: "Apple",
                            model: "iPad"
                        }
                    }
                }, {
                    test: [/Macintosh(.*?) FxiOS(.*?)\//],
                    describe: function() {
                        return {
                            type: o.PLATFORMS_MAP.tablet,
                            vendor: "Apple",
                            model: "iPad"
                        }
                    }
                }, {
                    test: [/kftt build/i],
                    describe: function() {
                        return {
                            type: o.PLATFORMS_MAP.tablet,
                            vendor: "Amazon",
                            model: "Kindle Fire HD 7"
                        }
                    }
                }, {
                    test: [/silk/i],
                    describe: function() {
                        return {
                            type: o.PLATFORMS_MAP.tablet,
                            vendor: "Amazon"
                        }
                    }
                }, {
                    test: [/tablet(?! pc)/i],
                    describe: function() {
                        return {
                            type: o.PLATFORMS_MAP.tablet
                        }
                    }
                }, {
                    test: function(e) {
                        var t = e.test(/ipod|iphone/i),
                            r = e.test(/like (ipod|iphone)/i);
                        return t && !r
                    },
                    describe: function(e) {
                        var t = i.default.getFirstMatch(/(ipod|iphone)/i, e);
                        return {
                            type: o.PLATFORMS_MAP.mobile,
                            vendor: "Apple",
                            model: t
                        }
                    }
                }, {
                    test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
                    describe: function() {
                        return {
                            type: o.PLATFORMS_MAP.mobile,
                            vendor: "Nexus"
                        }
                    }
                }, {
                    test: [/[^-]mobi/i],
                    describe: function() {
                        return {
                            type: o.PLATFORMS_MAP.mobile
                        }
                    }
                }, {
                    test: function(e) {
                        return "blackberry" === e.getBrowserName(!0)
                    },
                    describe: function() {
                        return {
                            type: o.PLATFORMS_MAP.mobile,
                            vendor: "BlackBerry"
                        }
                    }
                }, {
                    test: function(e) {
                        return "bada" === e.getBrowserName(!0)
                    },
                    describe: function() {
                        return {
                            type: o.PLATFORMS_MAP.mobile
                        }
                    }
                }, {
                    test: function(e) {
                        return "windows phone" === e.getBrowserName()
                    },
                    describe: function() {
                        return {
                            type: o.PLATFORMS_MAP.mobile,
                            vendor: "Microsoft"
                        }
                    }
                }, {
                    test: function(e) {
                        var t = Number(String(e.getOSVersion()).split(".")[0]);
                        return "android" === e.getOSName(!0) && t >= 3
                    },
                    describe: function() {
                        return {
                            type: o.PLATFORMS_MAP.tablet
                        }
                    }
                }, {
                    test: function(e) {
                        return "android" === e.getOSName(!0)
                    },
                    describe: function() {
                        return {
                            type: o.PLATFORMS_MAP.mobile
                        }
                    }
                }, {
                    test: function(e) {
                        return "macos" === e.getOSName(!0)
                    },
                    describe: function() {
                        return {
                            type: o.PLATFORMS_MAP.desktop,
                            vendor: "Apple"
                        }
                    }
                }, {
                    test: function(e) {
                        return "windows" === e.getOSName(!0)
                    },
                    describe: function() {
                        return {
                            type: o.PLATFORMS_MAP.desktop
                        }
                    }
                }, {
                    test: function(e) {
                        return "linux" === e.getOSName(!0)
                    },
                    describe: function() {
                        return {
                            type: o.PLATFORMS_MAP.desktop
                        }
                    }
                }, {
                    test: function(e) {
                        return "playstation 4" === e.getOSName(!0)
                    },
                    describe: function() {
                        return {
                            type: o.PLATFORMS_MAP.tv
                        }
                    }
                }, {
                    test: function(e) {
                        return "roku" === e.getOSName(!0)
                    },
                    describe: function() {
                        return {
                            type: o.PLATFORMS_MAP.tv
                        }
                    }
                }];
            t.default = a, e.exports = t.default
        },
        95: function(e, t, r) {
            t.__esModule = !0, t.default = void 0;
            var n, i = (n = r(17)) && n.__esModule ? n : {
                    default: n
                },
                o = r(18),
                a = [{
                    test: function(e) {
                        return "microsoft edge" === e.getBrowserName(!0)
                    },
                    describe: function(e) {
                        if (/\sedg\//i.test(e)) return {
                            name: o.ENGINE_MAP.Blink
                        };
                        var t = i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
                        return {
                            name: o.ENGINE_MAP.EdgeHTML,
                            version: t
                        }
                    }
                }, {
                    test: [/trident/i],
                    describe: function(e) {
                        var t = {
                                name: o.ENGINE_MAP.Trident
                            },
                            r = i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t
                    }
                }, {
                    test: function(e) {
                        return e.test(/presto/i)
                    },
                    describe: function(e) {
                        var t = {
                                name: o.ENGINE_MAP.Presto
                            },
                            r = i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t
                    }
                }, {
                    test: function(e) {
                        var t = e.test(/gecko/i),
                            r = e.test(/like gecko/i);
                        return t && !r
                    },
                    describe: function(e) {
                        var t = {
                                name: o.ENGINE_MAP.Gecko
                            },
                            r = i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t
                    }
                }, {
                    test: [/(apple)?webkit\/537\.36/i],
                    describe: function() {
                        return {
                            name: o.ENGINE_MAP.Blink
                        }
                    }
                }, {
                    test: [/(apple)?webkit/i],
                    describe: function(e) {
                        var t = {
                                name: o.ENGINE_MAP.WebKit
                            },
                            r = i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t
                    }
                }];
            t.default = a, e.exports = t.default
        }
    });
    var s = o(a.exports),
        u = "2.21.1",
        c = "bundle.js",
        f = "bundle_legacy.js",
        d = "index.module.js",
        l = function(e) {
            if (e && e.source && e.source.postMessage) {
                var t = "string" == typeof e.data,
                    r = e.data;
                if (t) try {
                    r = JSON.parse(e.data)
                } catch (e) {
                    return
                }
                if ("object" === n(r) && r.__tcfapiCall) {
                    var i = r.__tcfapiCall;
                    window.__tcfapi(i.command, i.version, (function(r, n) {
                        var o = {
                                __tcfapiReturn: {
                                    returnValue: r,
                                    success: n,
                                    callId: i.callId
                                }
                            },
                            a = t ? JSON.stringify(o) : o;
                        try {
                            e.source.postMessage(a, "*")
                        } catch (e) {}
                    }), i.parameter)
                }
            }
        },
        p = [],
        v = function(e, t, r, n) {
            if (!e) return p;
            switch (e) {
                case "ping":
                    "function" == typeof r && r(!0, !1, "stub");
                    break;
                case "pending":
                    return p;
                default:
                    p.push([e, t, r, n])
            }
        },
        h = "__tcfapiLocator",
        g = function() {
            return ! function() {
                for (var e = window, t = !1; e;) {
                    try {
                        if (e.frames.__tcfapiLocator) {
                            t = !0;
                            break
                        }
                    } catch (e) {}
                    if (e === window.top) {
                        t = !1;
                        break
                    }
                    e = e.parent
                }
                return t
            }() && (function(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2e4,
                    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 5;
                return new Promise((function(i, o) {
                    var a = setInterval((function() {
                            e() && (clearTimeout(s), clearInterval(a), i())
                        }), n),
                        s = setTimeout((function() {
                            clearTimeout(s), clearInterval(a), o(new Error(t))
                        }), r)
                }))
            }((function() {
                return !!window.document.body
            }), "").then((function() {
                var e = window.document.createElement("iframe");
                e.style.cssText = "display:none", e.name = h, window.document.body.appendChild(e)
            })), !0)
        },
        m = function() {
            "undefined" != typeof window && (window.__tcfapi || g() && (window.addEventListener("message", l, !1), window.__tcfapi = v))
        },
        b = function(e) {
            return e && e.Math == Math && e
        },
        y = b("object" == ("undefined" == typeof globalThis ? "undefined" : n(globalThis)) && globalThis) || b("object" == ("undefined" == typeof window ? "undefined" : n(window)) && window) || b("object" == ("undefined" == typeof self ? "undefined" : n(self)) && self) || b("object" == n(i) && i) || function() {
            return this
        }() || Function("return this")(),
        w = {},
        S = function(e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        },
        M = !S((function() {
            return 7 != Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1]
        })),
        _ = !S((function() {
            var e = function() {}.bind();
            return "function" != typeof e || e.hasOwnProperty("prototype")
        })),
        O = _,
        P = Function.prototype.call,
        A = O ? P.bind(P) : function() {
            return P.apply(P, arguments)
        },
        E = {},
        F = {}.propertyIsEnumerable,
        T = Object.getOwnPropertyDescriptor,
        k = T && !F.call({
            1: 2
        }, 1);
    E.f = k ? function(e) {
        var t = T(this, e);
        return !!t && t.enumerable
    } : F;
    var R, j, x = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        },
        L = _,
        N = Function.prototype,
        B = N.bind,
        I = N.call,
        C = L && B.bind(I, I),
        G = L ? function(e) {
            return e && C(e)
        } : function(e) {
            return e && function() {
                return I.apply(e, arguments)
            }
        },
        V = G,
        W = V({}.toString),
        D = V("".slice),
        z = function(e) {
            return D(W(e), 8, -1)
        },
        q = G,
        U = S,
        H = z,
        Q = y.Object,
        K = q("".split),
        Y = U((function() {
            return !Q("z").propertyIsEnumerable(0)
        })) ? function(e) {
            return "String" == H(e) ? K(e, "") : Q(e)
        } : Q,
        Z = y.TypeError,
        J = function(e) {
            if (null == e) throw Z("Can't call method on " + e);
            return e
        },
        X = Y,
        $ = J,
        ee = function(e) {
            return X($(e))
        },
        te = function(e) {
            return "function" == typeof e
        },
        re = te,
        ne = function(e) {
            return "object" == n(e) ? null !== e : re(e)
        },
        ie = y,
        oe = te,
        ae = function(e) {
            return oe(e) ? e : void 0
        },
        se = function(e, t) {
            return arguments.length < 2 ? ae(ie[e]) : ie[e] && ie[e][t]
        },
        ue = G({}.isPrototypeOf),
        ce = se("navigator", "userAgent") || "",
        fe = y,
        de = ce,
        le = fe.process,
        pe = fe.Deno,
        ve = le && le.versions || pe && pe.version,
        he = ve && ve.v8;
    he && (j = (R = he.split("."))[0] > 0 && R[0] < 4 ? 1 : +(R[0] + R[1])), !j && de && (!(R = de.match(/Edge\/(\d+)/)) || R[1] >= 74) && (R = de.match(/Chrome\/(\d+)/)) && (j = +R[1]);
    var ge = j,
        me = ge,
        be = S,
        ye = !!Object.getOwnPropertySymbols && !be((function() {
            var e = Symbol();
            return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && me && me < 41
        })),
        we = ye && !Symbol.sham && "symbol" == n(Symbol.iterator),
        Se = se,
        Me = te,
        _e = ue,
        Oe = we,
        Pe = y.Object,
        Ae = Oe ? function(e) {
            return "symbol" == n(e)
        } : function(e) {
            var t = Se("Symbol");
            return Me(t) && _e(t.prototype, Pe(e))
        },
        Ee = y.String,
        Fe = function(e) {
            try {
                return Ee(e)
            } catch (e) {
                return "Object"
            }
        },
        Te = te,
        ke = Fe,
        Re = y.TypeError,
        je = function(e) {
            if (Te(e)) return e;
            throw Re(ke(e) + " is not a function")
        },
        xe = je,
        Le = function(e, t) {
            var r = e[t];
            return null == r ? void 0 : xe(r)
        },
        Ne = A,
        Be = te,
        Ie = ne,
        Ce = y.TypeError,
        Ge = {
            exports: {}
        },
        Ve = y,
        We = Object.defineProperty,
        De = function(e, t) {
            try {
                We(Ve, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch (r) {
                Ve[e] = t
            }
            return t
        },
        ze = De,
        qe = "__core-js_shared__",
        Ue = y[qe] || ze(qe, {}),
        He = Ue;
    (Ge.exports = function(e, t) {
        return He[e] || (He[e] = void 0 !== t ? t : {})
    })("versions", []).push({
        version: "3.21.0",
        mode: "global",
        copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.21.0/LICENSE",
        source: "https://github.com/zloirock/core-js"
    });
    var Qe = J,
        Ke = y.Object,
        Ye = function(e) {
            return Ke(Qe(e))
        },
        Ze = Ye,
        Je = G({}.hasOwnProperty),
        Xe = Object.hasOwn || function(e, t) {
            return Je(Ze(e), t)
        },
        $e = G,
        et = 0,
        tt = Math.random(),
        rt = $e(1..toString),
        nt = function(e) {
            return "Symbol(" + (void 0 === e ? "" : e) + ")_" + rt(++et + tt, 36)
        },
        it = y,
        ot = Ge.exports,
        at = Xe,
        st = nt,
        ut = ye,
        ct = we,
        ft = ot("wks"),
        dt = it.Symbol,
        lt = dt && dt.for,
        pt = ct ? dt : dt && dt.withoutSetter || st,
        vt = function(e) {
            if (!at(ft, e) || !ut && "string" != typeof ft[e]) {
                var t = "Symbol." + e;
                ut && at(dt, e) ? ft[e] = dt[e] : ft[e] = ct && lt ? lt(t) : pt(t)
            }
            return ft[e]
        },
        ht = A,
        gt = ne,
        mt = Ae,
        bt = Le,
        yt = function(e, t) {
            var r, n;
            if ("string" === t && Be(r = e.toString) && !Ie(n = Ne(r, e))) return n;
            if (Be(r = e.valueOf) && !Ie(n = Ne(r, e))) return n;
            if ("string" !== t && Be(r = e.toString) && !Ie(n = Ne(r, e))) return n;
            throw Ce("Can't convert object to primitive value")
        },
        wt = vt,
        St = y.TypeError,
        Mt = wt("toPrimitive"),
        _t = function(e, t) {
            if (!gt(e) || mt(e)) return e;
            var r, n = bt(e, Mt);
            if (n) {
                if (void 0 === t && (t = "default"), r = ht(n, e, t), !gt(r) || mt(r)) return r;
                throw St("Can't convert object to primitive value")
            }
            return void 0 === t && (t = "number"), yt(e, t)
        },
        Ot = Ae,
        Pt = function(e) {
            var t = _t(e, "string");
            return Ot(t) ? t : t + ""
        },
        At = ne,
        Et = y.document,
        Ft = At(Et) && At(Et.createElement),
        Tt = function(e) {
            return Ft ? Et.createElement(e) : {}
        },
        kt = Tt,
        Rt = !M && !S((function() {
            return 7 != Object.defineProperty(kt("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })),
        jt = M,
        xt = A,
        Lt = E,
        Nt = x,
        Bt = ee,
        It = Pt,
        Ct = Xe,
        Gt = Rt,
        Vt = Object.getOwnPropertyDescriptor;
    w.f = jt ? Vt : function(e, t) {
        if (e = Bt(e), t = It(t), Gt) try {
            return Vt(e, t)
        } catch (e) {}
        if (Ct(e, t)) return Nt(!xt(Lt.f, e, t), e[t])
    };
    var Wt = {},
        Dt = M && S((function() {
            return 42 != Object.defineProperty((function() {}), "prototype", {
                value: 42,
                writable: !1
            }).prototype
        })),
        zt = y,
        qt = ne,
        Ut = zt.String,
        Ht = zt.TypeError,
        Qt = function(e) {
            if (qt(e)) return e;
            throw Ht(Ut(e) + " is not an object")
        },
        Kt = M,
        Yt = Rt,
        Zt = Dt,
        Jt = Qt,
        Xt = Pt,
        $t = y.TypeError,
        er = Object.defineProperty,
        tr = Object.getOwnPropertyDescriptor,
        rr = "enumerable",
        nr = "configurable",
        ir = "writable";
    Wt.f = Kt ? Zt ? function(e, t, r) {
        if (Jt(e), t = Xt(t), Jt(r), "function" == typeof e && "prototype" === t && "value" in r && ir in r && !r.writable) {
            var n = tr(e, t);
            n && n.writable && (e[t] = r.value, r = {
                configurable: nr in r ? r.configurable : n.configurable,
                enumerable: rr in r ? r.enumerable : n.enumerable,
                writable: !1
            })
        }
        return er(e, t, r)
    } : er : function(e, t, r) {
        if (Jt(e), t = Xt(t), Jt(r), Yt) try {
            return er(e, t, r)
        } catch (e) {}
        if ("get" in r || "set" in r) throw $t("Accessors not supported");
        return "value" in r && (e[t] = r.value), e
    };
    var or = Wt,
        ar = x,
        sr = M ? function(e, t, r) {
            return or.f(e, t, ar(1, r))
        } : function(e, t, r) {
            return e[t] = r, e
        },
        ur = {
            exports: {}
        },
        cr = te,
        fr = Ue,
        dr = G(Function.toString);
    cr(fr.inspectSource) || (fr.inspectSource = function(e) {
        return dr(e)
    });
    var lr, pr, vr, hr = fr.inspectSource,
        gr = te,
        mr = hr,
        br = y.WeakMap,
        yr = gr(br) && /native code/.test(mr(br)),
        wr = Ge.exports,
        Sr = nt,
        Mr = wr("keys"),
        _r = function(e) {
            return Mr[e] || (Mr[e] = Sr(e))
        },
        Or = {},
        Pr = yr,
        Ar = y,
        Er = G,
        Fr = ne,
        Tr = sr,
        kr = Xe,
        Rr = Ue,
        jr = _r,
        xr = Or,
        Lr = "Object already initialized",
        Nr = Ar.TypeError,
        Br = Ar.WeakMap;
    if (Pr || Rr.state) {
        var Ir = Rr.state || (Rr.state = new Br),
            Cr = Er(Ir.get),
            Gr = Er(Ir.has),
            Vr = Er(Ir.set);
        lr = function(e, t) {
            if (Gr(Ir, e)) throw new Nr(Lr);
            return t.facade = e, Vr(Ir, e, t), t
        }, pr = function(e) {
            return Cr(Ir, e) || {}
        }, vr = function(e) {
            return Gr(Ir, e)
        }
    } else {
        var Wr = jr("state");
        xr[Wr] = !0, lr = function(e, t) {
            if (kr(e, Wr)) throw new Nr(Lr);
            return t.facade = e, Tr(e, Wr, t), t
        }, pr = function(e) {
            return kr(e, Wr) ? e[Wr] : {}
        }, vr = function(e) {
            return kr(e, Wr)
        }
    }
    var Dr = {
            set: lr,
            get: pr,
            has: vr,
            enforce: function(e) {
                return vr(e) ? pr(e) : lr(e, {})
            },
            getterFor: function(e) {
                return function(t) {
                    var r;
                    if (!Fr(t) || (r = pr(t)).type !== e) throw Nr("Incompatible receiver, " + e + " required");
                    return r
                }
            }
        },
        zr = M,
        qr = Xe,
        Ur = Function.prototype,
        Hr = zr && Object.getOwnPropertyDescriptor,
        Qr = qr(Ur, "name"),
        Kr = {
            EXISTS: Qr,
            PROPER: Qr && "something" === function() {}.name,
            CONFIGURABLE: Qr && (!zr || zr && Hr(Ur, "name").configurable)
        },
        Yr = y,
        Zr = te,
        Jr = Xe,
        Xr = sr,
        $r = De,
        en = hr,
        tn = Kr.CONFIGURABLE,
        rn = Dr.get,
        nn = Dr.enforce,
        on = String(String).split("String");
    (ur.exports = function(e, t, r, n) {
        var i, o = !!n && !!n.unsafe,
            a = !!n && !!n.enumerable,
            s = !!n && !!n.noTargetGet,
            u = n && void 0 !== n.name ? n.name : t;
        Zr(r) && ("Symbol(" === String(u).slice(0, 7) && (u = "[" + String(u).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!Jr(r, "name") || tn && r.name !== u) && Xr(r, "name", u), (i = nn(r)).source || (i.source = on.join("string" == typeof u ? u : ""))), e !== Yr ? (o ? !s && e[t] && (a = !0) : delete e[t], a ? e[t] = r : Xr(e, t, r)) : a ? e[t] = r : $r(t, r)
    })(Function.prototype, "toString", (function() {
        return Zr(this) && rn(this).source || en(this)
    }));
    var an = {},
        sn = Math.ceil,
        un = Math.floor,
        cn = function(e) {
            var t = +e;
            return t != t || 0 === t ? 0 : (t > 0 ? un : sn)(t)
        },
        fn = cn,
        dn = Math.max,
        ln = Math.min,
        pn = cn,
        vn = Math.min,
        hn = function(e) {
            return e > 0 ? vn(pn(e), 9007199254740991) : 0
        },
        gn = function(e) {
            return hn(e.length)
        },
        mn = ee,
        bn = function(e, t) {
            var r = fn(e);
            return r < 0 ? dn(r + t, 0) : ln(r, t)
        },
        yn = gn,
        wn = function(e) {
            return function(t, r, n) {
                var i, o = mn(t),
                    a = yn(o),
                    s = bn(n, a);
                if (e && r != r) {
                    for (; a > s;)
                        if ((i = o[s++]) != i) return !0
                } else
                    for (; a > s; s++)
                        if ((e || s in o) && o[s] === r) return e || s || 0;
                return !e && -1
            }
        },
        Sn = {
            includes: wn(!0),
            indexOf: wn(!1)
        },
        Mn = Xe,
        _n = ee,
        On = Sn.indexOf,
        Pn = Or,
        An = G([].push),
        En = function(e, t) {
            var r, n = _n(e),
                i = 0,
                o = [];
            for (r in n) !Mn(Pn, r) && Mn(n, r) && An(o, r);
            for (; t.length > i;) Mn(n, r = t[i++]) && (~On(o, r) || An(o, r));
            return o
        },
        Fn = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        Tn = En,
        kn = Fn.concat("length", "prototype");
    an.f = Object.getOwnPropertyNames || function(e) {
        return Tn(e, kn)
    };
    var Rn = {};
    Rn.f = Object.getOwnPropertySymbols;
    var jn = se,
        xn = an,
        Ln = Rn,
        Nn = Qt,
        Bn = G([].concat),
        In = jn("Reflect", "ownKeys") || function(e) {
            var t = xn.f(Nn(e)),
                r = Ln.f;
            return r ? Bn(t, r(e)) : t
        },
        Cn = Xe,
        Gn = In,
        Vn = w,
        Wn = Wt,
        Dn = function(e, t, r) {
            for (var n = Gn(t), i = Wn.f, o = Vn.f, a = 0; a < n.length; a++) {
                var s = n[a];
                Cn(e, s) || r && Cn(r, s) || i(e, s, o(t, s))
            }
        },
        zn = S,
        qn = te,
        Un = /#|\.prototype\./,
        Hn = function(e, t) {
            var r = Kn[Qn(e)];
            return r == Zn || r != Yn && (qn(t) ? zn(t) : !!t)
        },
        Qn = Hn.normalize = function(e) {
            return String(e).replace(Un, ".").toLowerCase()
        },
        Kn = Hn.data = {},
        Yn = Hn.NATIVE = "N",
        Zn = Hn.POLYFILL = "P",
        Jn = Hn,
        Xn = y,
        $n = w.f,
        ei = sr,
        ti = ur.exports,
        ri = De,
        ni = Dn,
        ii = Jn,
        oi = function(e, t) {
            var r, i, o, a, s, u = e.target,
                c = e.global,
                f = e.stat;
            if (r = c ? Xn : f ? Xn[u] || ri(u, {}) : (Xn[u] || {}).prototype)
                for (i in t) {
                    if (a = t[i], o = e.noTargetGet ? (s = $n(r, i)) && s.value : r[i], !ii(c ? i : u + (f ? "." : "#") + i, e.forced) && void 0 !== o) {
                        if (n(a) == n(o)) continue;
                        ni(a, o)
                    }(e.sham || o && o.sham) && ei(a, "sham", !0), ti(r, i, a, e)
                }
        },
        ai = !S((function() {
            function e() {}
            return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
        })),
        si = y,
        ui = Xe,
        ci = te,
        fi = Ye,
        di = ai,
        li = _r("IE_PROTO"),
        pi = si.Object,
        vi = pi.prototype,
        hi = di ? pi.getPrototypeOf : function(e) {
            var t = fi(e);
            if (ui(t, li)) return t[li];
            var r = t.constructor;
            return ci(r) && t instanceof r ? r.prototype : t instanceof pi ? vi : null
        },
        gi = y,
        mi = te,
        bi = gi.String,
        yi = gi.TypeError,
        wi = G,
        Si = Qt,
        Mi = function(e) {
            if ("object" == n(e) || mi(e)) return e;
            throw yi("Can't set " + bi(e) + " as a prototype")
        },
        _i = Object.setPrototypeOf || ("__proto__" in {} ? function() {
            var e, t = !1,
                r = {};
            try {
                (e = wi(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set))(r, []), t = r instanceof Array
            } catch (e) {}
            return function(r, n) {
                return Si(r), Mi(n), t ? e(r, n) : r.__proto__ = n, r
            }
        }() : void 0),
        Oi = {},
        Pi = En,
        Ai = Fn,
        Ei = Object.keys || function(e) {
            return Pi(e, Ai)
        },
        Fi = M,
        Ti = Dt,
        ki = Wt,
        Ri = Qt,
        ji = ee,
        xi = Ei;
    Oi.f = Fi && !Ti ? Object.defineProperties : function(e, t) {
        Ri(e);
        for (var r, n = ji(t), i = xi(t), o = i.length, a = 0; o > a;) ki.f(e, r = i[a++], n[r]);
        return e
    };
    var Li, Ni = se("document", "documentElement"),
        Bi = Qt,
        Ii = Oi,
        Ci = Fn,
        Gi = Or,
        Vi = Ni,
        Wi = Tt,
        Di = _r("IE_PROTO"),
        zi = function() {},
        qi = function(e) {
            return "<script>" + e + "</" + "script>"
        },
        Ui = function(e) {
            e.write(qi("")), e.close();
            var t = e.parentWindow.Object;
            return e = null, t
        },
        Hi = function() {
            try {
                Li = new ActiveXObject("htmlfile")
            } catch (e) {}
            var e, t;
            Hi = "undefined" != typeof document ? document.domain && Li ? Ui(Li) : ((t = Wi("iframe")).style.display = "none", Vi.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(qi("document.F=Object")), e.close(), e.F) : Ui(Li);
            for (var r = Ci.length; r--;) delete Hi.prototype[Ci[r]];
            return Hi()
        };
    Gi[Di] = !0;
    var Qi = Object.create || function(e, t) {
            var r;
            return null !== e ? (zi.prototype = Bi(e), r = new zi, zi.prototype = null, r[Di] = e) : r = Hi(), void 0 === t ? r : Ii.f(r, t)
        },
        Ki = G("".replace),
        Yi = String(Error("zxcasd").stack),
        Zi = /\n\s*at [^:]*:[^\n]*/,
        Ji = Zi.test(Yi),
        Xi = ne,
        $i = sr,
        eo = je,
        to = _,
        ro = G(G.bind),
        no = function(e, t) {
            return eo(e), void 0 === t ? e : to ? ro(e, t) : function() {
                return e.apply(t, arguments)
            }
        },
        io = {},
        oo = io,
        ao = vt("iterator"),
        so = Array.prototype,
        uo = {};
    uo[vt("toStringTag")] = "z";
    var co = "[object z]" === String(uo),
        fo = y,
        lo = co,
        po = te,
        vo = z,
        ho = vt("toStringTag"),
        go = fo.Object,
        mo = "Arguments" == vo(function() {
            return arguments
        }()),
        bo = lo ? vo : function(e) {
            var t, r, n;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(r = function(e, t) {
                try {
                    return e[t]
                } catch (e) {}
            }(t = go(e), ho)) ? r : mo ? vo(t) : "Object" == (n = vo(t)) && po(t.callee) ? "Arguments" : n
        },
        yo = bo,
        wo = Le,
        So = io,
        Mo = vt("iterator"),
        _o = function(e) {
            if (null != e) return wo(e, Mo) || wo(e, "@@iterator") || So[yo(e)]
        },
        Oo = A,
        Po = je,
        Ao = Qt,
        Eo = Fe,
        Fo = _o,
        To = y.TypeError,
        ko = A,
        Ro = Qt,
        jo = Le,
        xo = no,
        Lo = A,
        No = Qt,
        Bo = Fe,
        Io = function(e) {
            return void 0 !== e && (oo.Array === e || so[ao] === e)
        },
        Co = gn,
        Go = ue,
        Vo = function(e, t) {
            var r = arguments.length < 2 ? Fo(e) : t;
            if (Po(r)) return Ao(Oo(r, e));
            throw To(Eo(e) + " is not iterable")
        },
        Wo = _o,
        Do = function(e, t, r) {
            var n, i;
            Ro(e);
            try {
                if (!(n = jo(e, "return"))) {
                    if ("throw" === t) throw r;
                    return r
                }
                n = ko(n, e)
            } catch (e) {
                i = !0, n = e
            }
            if ("throw" === t) throw r;
            if (i) throw n;
            return Ro(n), r
        },
        zo = y.TypeError,
        qo = function(e, t) {
            this.stopped = e, this.result = t
        },
        Uo = qo.prototype,
        Ho = function(e, t, r) {
            var i, o, a, s, u, c, f, d = r && r.that,
                l = !(!r || !r.AS_ENTRIES),
                p = !(!r || !r.IS_ITERATOR),
                v = !(!r || !r.INTERRUPTED),
                h = xo(t, d),
                g = function(e) {
                    return i && Do(i, "normal", e), new qo(!0, e)
                },
                m = function(e) {
                    return l ? (No(e), v ? h(e[0], e[1], g) : h(e[0], e[1])) : v ? h(e, g) : h(e)
                };
            if (p) i = e;
            else {
                if (!(o = Wo(e))) throw zo(Bo(e) + " is not iterable");
                if (Io(o)) {
                    for (a = 0, s = Co(e); s > a; a++)
                        if ((u = m(e[a])) && Go(Uo, u)) return u;
                    return new qo(!1)
                }
                i = Vo(e, o)
            }
            for (c = i.next; !(f = Lo(c, i)).done;) {
                try {
                    u = m(f.value)
                } catch (e) {
                    Do(i, "throw", e)
                }
                if ("object" == n(u) && u && Go(Uo, u)) return u
            }
            return new qo(!1)
        },
        Qo = bo,
        Ko = y.String,
        Yo = function(e) {
            if ("Symbol" === Qo(e)) throw TypeError("Cannot convert a Symbol value to a string");
            return Ko(e)
        },
        Zo = Yo,
        Jo = x,
        Xo = !S((function() {
            var e = Error("a");
            return !("stack" in e) || (Object.defineProperty(e, "stack", Jo(1, 7)), 7 !== e.stack)
        })),
        $o = oi,
        ea = y,
        ta = ue,
        ra = hi,
        na = _i,
        ia = Dn,
        oa = Qi,
        aa = sr,
        sa = x,
        ua = function(e, t) {
            if (Ji && "string" == typeof e)
                for (; t--;) e = Ki(e, Zi, "");
            return e
        },
        ca = function(e, t) {
            Xi(t) && "cause" in t && $i(e, "cause", t.cause)
        },
        fa = Ho,
        da = function(e, t) {
            return void 0 === e ? arguments.length < 2 ? "" : t : Zo(e)
        },
        la = Xo,
        pa = vt("toStringTag"),
        va = ea.Error,
        ha = [].push,
        ga = function(e, t) {
            var r, n = arguments.length > 2 ? arguments[2] : void 0,
                i = ta(ma, this);
            na ? r = na(new va, i ? ra(this) : ma) : (r = i ? this : oa(ma), aa(r, pa, "Error")), void 0 !== t && aa(r, "message", da(t)), la && aa(r, "stack", ua(r.stack, 1)), ca(r, n);
            var o = [];
            return fa(e, ha, {
                that: o
            }), aa(r, "errors", o), r
        };
    na ? na(ga, va) : ia(ga, va, {
        name: !0
    });
    var ma = ga.prototype = oa(va.prototype, {
        constructor: sa(1, ga),
        message: sa(1, ""),
        name: sa(1, "AggregateError")
    });
    $o({
        global: !0
    }, {
        AggregateError: ga
    });
    var ba = Qi,
        ya = Wt,
        wa = vt("unscopables"),
        Sa = Array.prototype;
    null == Sa[wa] && ya.f(Sa, wa, {
        configurable: !0,
        value: ba(null)
    });
    var Ma, _a, Oa, Pa = S,
        Aa = te,
        Ea = hi,
        Fa = ur.exports,
        Ta = vt("iterator"),
        ka = !1;
    [].keys && ("next" in (Oa = [].keys()) ? (_a = Ea(Ea(Oa))) !== Object.prototype && (Ma = _a) : ka = !0);
    var Ra = null == Ma || Pa((function() {
        var e = {};
        return Ma[Ta].call(e) !== e
    }));
    Ra && (Ma = {}), Aa(Ma[Ta]) || Fa(Ma, Ta, (function() {
        return this
    }));
    var ja = {
            IteratorPrototype: Ma,
            BUGGY_SAFARI_ITERATORS: ka
        },
        xa = Wt.f,
        La = Xe,
        Na = vt("toStringTag"),
        Ba = function(e, t, r) {
            e && !r && (e = e.prototype), e && !La(e, Na) && xa(e, Na, {
                configurable: !0,
                value: t
            })
        },
        Ia = ja.IteratorPrototype,
        Ca = Qi,
        Ga = x,
        Va = Ba,
        Wa = io,
        Da = function() {
            return this
        },
        za = oi,
        qa = A,
        Ua = Kr,
        Ha = te,
        Qa = function(e, t, r, n) {
            var i = t + " Iterator";
            return e.prototype = Ca(Ia, {
                next: Ga(+!n, r)
            }), Va(e, i, !1), Wa[i] = Da, e
        },
        Ka = hi,
        Ya = _i,
        Za = Ba,
        Ja = sr,
        Xa = ur.exports,
        $a = io,
        es = Ua.PROPER,
        ts = Ua.CONFIGURABLE,
        rs = ja.IteratorPrototype,
        ns = ja.BUGGY_SAFARI_ITERATORS,
        is = vt("iterator"),
        os = "keys",
        as = "values",
        ss = "entries",
        us = function() {
            return this
        },
        cs = function(e, t, r, n, i, o, a) {
            Qa(r, t, n);
            var s, u, c, f = function(e) {
                    if (e === i && h) return h;
                    if (!ns && e in p) return p[e];
                    switch (e) {
                        case os:
                        case as:
                        case ss:
                            return function() {
                                return new r(this, e)
                            }
                    }
                    return function() {
                        return new r(this)
                    }
                },
                d = t + " Iterator",
                l = !1,
                p = e.prototype,
                v = p[is] || p["@@iterator"] || i && p[i],
                h = !ns && v || f(i),
                g = "Array" == t && p.entries || v;
            if (g && (s = Ka(g.call(new e))) !== Object.prototype && s.next && (Ka(s) !== rs && (Ya ? Ya(s, rs) : Ha(s[is]) || Xa(s, is, us)), Za(s, d, !0)), es && i == as && v && v.name !== as && (ts ? Ja(p, "name", as) : (l = !0, h = function() {
                    return qa(v, this)
                })), i)
                if (u = {
                        values: f(as),
                        keys: o ? h : f(os),
                        entries: f(ss)
                    }, a)
                    for (c in u)(ns || l || !(c in p)) && Xa(p, c, u[c]);
                else za({
                    target: t,
                    proto: !0,
                    forced: ns || l
                }, u);
            return p[is] !== h && Xa(p, is, h, {
                name: i
            }), $a[t] = h, u
        },
        fs = ee,
        ds = function(e) {
            Sa[wa][e] = !0
        },
        ls = io,
        ps = Dr,
        vs = Wt.f,
        hs = cs,
        gs = M,
        ms = "Array Iterator",
        bs = ps.set,
        ys = ps.getterFor(ms),
        ws = hs(Array, "Array", (function(e, t) {
            bs(this, {
                type: ms,
                target: fs(e),
                index: 0,
                kind: t
            })
        }), (function() {
            var e = ys(this),
                t = e.target,
                r = e.kind,
                n = e.index++;
            return !t || n >= t.length ? (e.target = void 0, {
                value: void 0,
                done: !0
            }) : "keys" == r ? {
                value: n,
                done: !1
            } : "values" == r ? {
                value: t[n],
                done: !1
            } : {
                value: [n, t[n]],
                done: !1
            }
        }), "values"),
        Ss = ls.Arguments = ls.Array;
    if (ds("keys"), ds("values"), ds("entries"), gs && "values" !== Ss.name) try {
        vs(Ss, "name", {
            value: "values"
        })
    } catch (e) {}
    var Ms = bo,
        _s = co ? {}.toString : function() {
            return "[object " + Ms(this) + "]"
        },
        Os = co,
        Ps = ur.exports,
        As = _s;
    Os || Ps(Object.prototype, "toString", As, {
        unsafe: !0
    });
    var Es = y.Promise,
        Fs = ur.exports,
        Ts = se,
        ks = Wt,
        Rs = M,
        js = vt("species"),
        xs = ue,
        Ls = y.TypeError,
        Ns = vt("iterator"),
        Bs = !1;
    try {
        var Is = 0,
            Cs = {
                next: function() {
                    return {
                        done: !!Is++
                    }
                },
                return: function() {
                    Bs = !0
                }
            };
        Cs[Ns] = function() {
            return this
        }, Array.from(Cs, (function() {
            throw 2
        }))
    } catch (e) {}
    var Gs = G,
        Vs = S,
        Ws = te,
        Ds = bo,
        zs = hr,
        qs = function() {},
        Us = [],
        Hs = se("Reflect", "construct"),
        Qs = /^\s*(?:class|function)\b/,
        Ks = Gs(Qs.exec),
        Ys = !Qs.exec(qs),
        Zs = function(e) {
            if (!Ws(e)) return !1;
            try {
                return Hs(qs, Us, e), !0
            } catch (e) {
                return !1
            }
        },
        Js = function(e) {
            if (!Ws(e)) return !1;
            switch (Ds(e)) {
                case "AsyncFunction":
                case "GeneratorFunction":
                case "AsyncGeneratorFunction":
                    return !1
            }
            try {
                return Ys || !!Ks(Qs, zs(e))
            } catch (e) {
                return !0
            }
        };
    Js.sham = !0;
    var Xs, $s, eu, tu, ru = !Hs || Vs((function() {
            var e;
            return Zs(Zs.call) || !Zs(Object) || !Zs((function() {
                e = !0
            })) || e
        })) ? Js : Zs,
        nu = ru,
        iu = Fe,
        ou = y.TypeError,
        au = Qt,
        su = function(e) {
            if (nu(e)) return e;
            throw ou(iu(e) + " is not a constructor")
        },
        uu = vt("species"),
        cu = function(e, t) {
            var r, n = au(e).constructor;
            return void 0 === n || null == (r = au(n)[uu]) ? t : su(r)
        },
        fu = _,
        du = Function.prototype,
        lu = du.apply,
        pu = du.call,
        vu = "object" == ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) && Reflect.apply || (fu ? pu.bind(lu) : function() {
            return pu.apply(lu, arguments)
        }),
        hu = G([].slice),
        gu = y.TypeError,
        mu = /(?:ipad|iphone|ipod).*applewebkit/i.test(ce),
        bu = "process" == z(y.process),
        yu = y,
        wu = vu,
        Su = no,
        Mu = te,
        _u = Xe,
        Ou = S,
        Pu = Ni,
        Au = hu,
        Eu = Tt,
        Fu = function(e, t) {
            if (e < t) throw gu("Not enough arguments");
            return e
        },
        Tu = mu,
        ku = bu,
        Ru = yu.setImmediate,
        ju = yu.clearImmediate,
        xu = yu.process,
        Lu = yu.Dispatch,
        Nu = yu.Function,
        Bu = yu.MessageChannel,
        Iu = yu.String,
        Cu = 0,
        Gu = {},
        Vu = "onreadystatechange";
    try {
        Xs = yu.location
    } catch (e) {}
    var Wu = function(e) {
            if (_u(Gu, e)) {
                var t = Gu[e];
                delete Gu[e], t()
            }
        },
        Du = function(e) {
            return function() {
                Wu(e)
            }
        },
        zu = function(e) {
            Wu(e.data)
        },
        qu = function(e) {
            yu.postMessage(Iu(e), Xs.protocol + "//" + Xs.host)
        };
    Ru && ju || (Ru = function(e) {
        Fu(arguments.length, 1);
        var t = Mu(e) ? e : Nu(e),
            r = Au(arguments, 1);
        return Gu[++Cu] = function() {
            wu(t, void 0, r)
        }, $s(Cu), Cu
    }, ju = function(e) {
        delete Gu[e]
    }, ku ? $s = function(e) {
        xu.nextTick(Du(e))
    } : Lu && Lu.now ? $s = function(e) {
        Lu.now(Du(e))
    } : Bu && !Tu ? (tu = (eu = new Bu).port2, eu.port1.onmessage = zu, $s = Su(tu.postMessage, tu)) : yu.addEventListener && Mu(yu.postMessage) && !yu.importScripts && Xs && "file:" !== Xs.protocol && !Ou(qu) ? ($s = qu, yu.addEventListener("message", zu, !1)) : $s = Vu in Eu("script") ? function(e) {
        Pu.appendChild(Eu("script")).onreadystatechange = function() {
            Pu.removeChild(this), Wu(e)
        }
    } : function(e) {
        setTimeout(Du(e), 0)
    });
    var Uu, Hu, Qu, Ku, Yu, Zu, Ju, Xu, $u = {
            set: Ru,
            clear: ju
        },
        ec = y,
        tc = /ipad|iphone|ipod/i.test(ce) && void 0 !== ec.Pebble,
        rc = /web0s(?!.*chrome)/i.test(ce),
        nc = y,
        ic = no,
        oc = w.f,
        ac = $u.set,
        sc = mu,
        uc = tc,
        cc = rc,
        fc = bu,
        dc = nc.MutationObserver || nc.WebKitMutationObserver,
        lc = nc.document,
        pc = nc.process,
        vc = nc.Promise,
        hc = oc(nc, "queueMicrotask"),
        gc = hc && hc.value;
    gc || (Uu = function() {
        var e, t;
        for (fc && (e = pc.domain) && e.exit(); Hu;) {
            t = Hu.fn, Hu = Hu.next;
            try {
                t()
            } catch (e) {
                throw Hu ? Ku() : Qu = void 0, e
            }
        }
        Qu = void 0, e && e.enter()
    }, sc || fc || cc || !dc || !lc ? !uc && vc && vc.resolve ? ((Ju = vc.resolve(void 0)).constructor = vc, Xu = ic(Ju.then, Ju), Ku = function() {
        Xu(Uu)
    }) : fc ? Ku = function() {
        pc.nextTick(Uu)
    } : (ac = ic(ac, nc), Ku = function() {
        ac(Uu)
    }) : (Yu = !0, Zu = lc.createTextNode(""), new dc(Uu).observe(Zu, {
        characterData: !0
    }), Ku = function() {
        Zu.data = Yu = !Yu
    }));
    var mc = gc || function(e) {
            var t = {
                fn: e,
                next: void 0
            };
            Qu && (Qu.next = t), Hu || (Hu = t, Ku()), Qu = t
        },
        bc = {},
        yc = je,
        wc = function(e) {
            var t, r;
            this.promise = new e((function(e, n) {
                if (void 0 !== t || void 0 !== r) throw TypeError("Bad Promise constructor");
                t = e, r = n
            })), this.resolve = yc(t), this.reject = yc(r)
        };
    bc.f = function(e) {
        return new wc(e)
    };
    var Sc = Qt,
        Mc = ne,
        _c = bc,
        Oc = function(e, t) {
            if (Sc(e), Mc(t) && t.constructor === e) return t;
            var r = _c.f(e);
            return (0, r.resolve)(t), r.promise
        },
        Pc = y,
        Ac = function(e) {
            try {
                return {
                    error: !1,
                    value: e()
                }
            } catch (e) {
                return {
                    error: !0,
                    value: e
                }
            }
        },
        Ec = function() {
            this.head = null, this.tail = null
        };
    Ec.prototype = {
        add: function(e) {
            var t = {
                item: e,
                next: null
            };
            this.head ? this.tail.next = t : this.head = t, this.tail = t
        },
        get: function() {
            var e = this.head;
            if (e) return this.head = e.next, this.tail === e && (this.tail = null), e.item
        }
    };
    var Fc, Tc, kc, Rc, jc = Ec,
        xc = "object" == ("undefined" == typeof window ? "undefined" : n(window)),
        Lc = oi,
        Nc = y,
        Bc = se,
        Ic = A,
        Cc = Es,
        Gc = ur.exports,
        Vc = function(e, t, r) {
            for (var n in t) Fs(e, n, t[n], r);
            return e
        },
        Wc = _i,
        Dc = Ba,
        zc = function(e) {
            var t = Ts(e),
                r = ks.f;
            Rs && t && !t[js] && r(t, js, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        },
        qc = je,
        Uc = te,
        Hc = ne,
        Qc = function(e, t) {
            if (xs(t, e)) return e;
            throw Ls("Incorrect invocation")
        },
        Kc = hr,
        Yc = Ho,
        Zc = function(e, t) {
            if (!t && !Bs) return !1;
            var r = !1;
            try {
                var n = {};
                n[Ns] = function() {
                    return {
                        next: function() {
                            return {
                                done: r = !0
                            }
                        }
                    }
                }, e(n)
            } catch (e) {}
            return r
        },
        Jc = cu,
        Xc = $u.set,
        $c = mc,
        ef = Oc,
        tf = function(e, t) {
            var r = Pc.console;
            r && r.error && (1 == arguments.length ? r.error(e) : r.error(e, t))
        },
        rf = bc,
        nf = Ac,
        of = jc,
        af = Dr,
        sf = Jn,
        uf = xc,
        cf = bu,
        ff = ge,
        df = vt("species"),
        lf = "Promise",
        pf = af.getterFor(lf),
        vf = af.set,
        hf = af.getterFor(lf),
        gf = Cc && Cc.prototype,
        mf = Cc,
        bf = gf,
        yf = Nc.TypeError,
        wf = Nc.document,
        Sf = Nc.process,
        Mf = rf.f,
        _f = Mf,
        Of = !!(wf && wf.createEvent && Nc.dispatchEvent),
        Pf = Uc(Nc.PromiseRejectionEvent),
        Af = "unhandledrejection",
        Ef = !1,
        Ff = sf(lf, (function() {
            var e = Kc(mf),
                t = e !== String(mf);
            if (!t && 66 === ff) return !0;
            if (ff >= 51 && /native code/.test(e)) return !1;
            var r = new mf((function(e) {
                    e(1)
                })),
                n = function(e) {
                    e((function() {}), (function() {}))
                };
            return (r.constructor = {})[df] = n, !(Ef = r.then((function() {})) instanceof n) || !t && uf && !Pf
        })),
        Tf = Ff || !Zc((function(e) {
            mf.all(e).catch((function() {}))
        })),
        kf = function(e) {
            var t;
            return !(!Hc(e) || !Uc(t = e.then)) && t
        },
        Rf = function(e, t) {
            var r, n, i, o = t.value,
                a = 1 == t.state,
                s = a ? e.ok : e.fail,
                u = e.resolve,
                c = e.reject,
                f = e.domain;
            try {
                s ? (a || (2 === t.rejection && Bf(t), t.rejection = 1), !0 === s ? r = o : (f && f.enter(), r = s(o), f && (f.exit(), i = !0)), r === e.promise ? c(yf("Promise-chain cycle")) : (n = kf(r)) ? Ic(n, r, u, c) : u(r)) : c(o)
            } catch (e) {
                f && !i && f.exit(), c(e)
            }
        },
        jf = function(e, t) {
            e.notified || (e.notified = !0, $c((function() {
                for (var r, n = e.reactions; r = n.get();) Rf(r, e);
                e.notified = !1, t && !e.rejection && Lf(e)
            })))
        },
        xf = function(e, t, r) {
            var n, i;
            Of ? ((n = wf.createEvent("Event")).promise = t, n.reason = r, n.initEvent(e, !1, !0), Nc.dispatchEvent(n)) : n = {
                promise: t,
                reason: r
            }, !Pf && (i = Nc["on" + e]) ? i(n) : e === Af && tf("Unhandled promise rejection", r)
        },
        Lf = function(e) {
            Ic(Xc, Nc, (function() {
                var t, r = e.facade,
                    n = e.value;
                if (Nf(e) && (t = nf((function() {
                        cf ? Sf.emit("unhandledRejection", n, r) : xf(Af, r, n)
                    })), e.rejection = cf || Nf(e) ? 2 : 1, t.error)) throw t.value
            }))
        },
        Nf = function(e) {
            return 1 !== e.rejection && !e.parent
        },
        Bf = function(e) {
            Ic(Xc, Nc, (function() {
                var t = e.facade;
                cf ? Sf.emit("rejectionHandled", t) : xf("rejectionhandled", t, e.value)
            }))
        },
        If = function(e, t, r) {
            return function(n) {
                e(t, n, r)
            }
        },
        Cf = function(e, t, r) {
            e.done || (e.done = !0, r && (e = r), e.value = t, e.state = 2, jf(e, !0))
        },
        Gf = function e(t, r, n) {
            if (!t.done) {
                t.done = !0, n && (t = n);
                try {
                    if (t.facade === r) throw yf("Promise can't be resolved itself");
                    var i = kf(r);
                    i ? $c((function() {
                        var n = {
                            done: !1
                        };
                        try {
                            Ic(i, r, If(e, n, t), If(Cf, n, t))
                        } catch (e) {
                            Cf(n, e, t)
                        }
                    })) : (t.value = r, t.state = 1, jf(t, !1))
                } catch (e) {
                    Cf({
                        done: !1
                    }, e, t)
                }
            }
        };
    if (Ff && (bf = (mf = function(e) {
            Qc(this, bf), qc(e), Ic(Fc, this);
            var t = pf(this);
            try {
                e(If(Gf, t), If(Cf, t))
            } catch (e) {
                Cf(t, e)
            }
        }).prototype, (Fc = function(e) {
            vf(this, {
                type: lf,
                done: !1,
                notified: !1,
                parent: !1,
                reactions: new of ,
                rejection: !1,
                state: 0,
                value: void 0
            })
        }).prototype = Vc(bf, {
            then: function(e, t) {
                var r = hf(this),
                    n = Mf(Jc(this, mf));
                return r.parent = !0, n.ok = !Uc(e) || e, n.fail = Uc(t) && t, n.domain = cf ? Sf.domain : void 0, 0 == r.state ? r.reactions.add(n) : $c((function() {
                    Rf(n, r)
                })), n.promise
            },
            catch: function(e) {
                return this.then(void 0, e)
            }
        }), Tc = function() {
            var e = new Fc,
                t = pf(e);
            this.promise = e, this.resolve = If(Gf, t), this.reject = If(Cf, t)
        }, rf.f = Mf = function(e) {
            return e === mf || e === kc ? new Tc(e) : _f(e)
        }, Uc(Cc) && gf !== Object.prototype)) {
        Rc = gf.then, Ef || (Gc(gf, "then", (function(e, t) {
            var r = this;
            return new mf((function(e, t) {
                Ic(Rc, r, e, t)
            })).then(e, t)
        }), {
            unsafe: !0
        }), Gc(gf, "catch", bf.catch, {
            unsafe: !0
        }));
        try {
            delete gf.constructor
        } catch (e) {}
        Wc && Wc(gf, bf)
    }
    Lc({
        global: !0,
        wrap: !0,
        forced: Ff
    }, {
        Promise: mf
    }), Dc(mf, lf, !1), zc(lf), kc = Bc(lf), Lc({
        target: lf,
        stat: !0,
        forced: Ff
    }, {
        reject: function(e) {
            var t = Mf(this);
            return Ic(t.reject, void 0, e), t.promise
        }
    }), Lc({
        target: lf,
        stat: !0,
        forced: Ff
    }, {
        resolve: function(e) {
            return ef(this, e)
        }
    }), Lc({
        target: lf,
        stat: !0,
        forced: Tf
    }, {
        all: function(e) {
            var t = this,
                r = Mf(t),
                n = r.resolve,
                i = r.reject,
                o = nf((function() {
                    var r = qc(t.resolve),
                        o = [],
                        a = 0,
                        s = 1;
                    Yc(e, (function(e) {
                        var u = a++,
                            c = !1;
                        s++, Ic(r, t, e).then((function(e) {
                            c || (c = !0, o[u] = e, --s || n(o))
                        }), i)
                    })), --s || n(o)
                }));
            return o.error && i(o.value), r.promise
        },
        race: function(e) {
            var t = this,
                r = Mf(t),
                n = r.reject,
                i = nf((function() {
                    var i = qc(t.resolve);
                    Yc(e, (function(e) {
                        Ic(i, t, e).then(r.resolve, n)
                    }))
                }));
            return i.error && n(i.value), r.promise
        }
    });
    var Vf = A,
        Wf = je,
        Df = bc,
        zf = Ac,
        qf = Ho;
    oi({
        target: "Promise",
        stat: !0
    }, {
        allSettled: function(e) {
            var t = this,
                r = Df.f(t),
                n = r.resolve,
                i = r.reject,
                o = zf((function() {
                    var r = Wf(t.resolve),
                        i = [],
                        o = 0,
                        a = 1;
                    qf(e, (function(e) {
                        var s = o++,
                            u = !1;
                        a++, Vf(r, t, e).then((function(e) {
                            u || (u = !0, i[s] = {
                                status: "fulfilled",
                                value: e
                            }, --a || n(i))
                        }), (function(e) {
                            u || (u = !0, i[s] = {
                                status: "rejected",
                                reason: e
                            }, --a || n(i))
                        }))
                    })), --a || n(i)
                }));
            return o.error && i(o.value), r.promise
        }
    });
    var Uf = je,
        Hf = se,
        Qf = A,
        Kf = bc,
        Yf = Ac,
        Zf = Ho,
        Jf = "No one promise resolved";
    oi({
        target: "Promise",
        stat: !0
    }, {
        any: function(e) {
            var t = this,
                r = Hf("AggregateError"),
                n = Kf.f(t),
                i = n.resolve,
                o = n.reject,
                a = Yf((function() {
                    var n = Uf(t.resolve),
                        a = [],
                        s = 0,
                        u = 1,
                        c = !1;
                    Zf(e, (function(e) {
                        var f = s++,
                            d = !1;
                        u++, Qf(n, t, e).then((function(e) {
                            d || c || (c = !0, i(e))
                        }), (function(e) {
                            d || c || (d = !0, a[f] = e, --u || o(new r(a, Jf)))
                        }))
                    })), --u || o(new r(a, Jf))
                }));
            return a.error && o(a.value), n.promise
        }
    });
    var Xf = oi,
        $f = Es,
        ed = S,
        td = se,
        rd = te,
        nd = cu,
        id = Oc,
        od = ur.exports;
    if (Xf({
            target: "Promise",
            proto: !0,
            real: !0,
            forced: !!$f && ed((function() {
                $f.prototype.finally.call({
                    then: function() {}
                }, (function() {}))
            }))
        }, {
            finally: function(e) {
                var t = nd(this, td("Promise")),
                    r = rd(e);
                return this.then(r ? function(r) {
                    return id(t, e()).then((function() {
                        return r
                    }))
                } : e, r ? function(r) {
                    return id(t, e()).then((function() {
                        throw r
                    }))
                } : e)
            }
        }), rd($f)) {
        var ad = td("Promise").prototype.finally;
        $f.prototype.finally !== ad && od($f.prototype, "finally", ad, {
            unsafe: !0
        })
    }
    var sd = G,
        ud = cn,
        cd = Yo,
        fd = J,
        dd = sd("".charAt),
        ld = sd("".charCodeAt),
        pd = sd("".slice),
        vd = function(e) {
            return function(t, r) {
                var n, i, o = cd(fd(t)),
                    a = ud(r),
                    s = o.length;
                return a < 0 || a >= s ? e ? "" : void 0 : (n = ld(o, a)) < 55296 || n > 56319 || a + 1 === s || (i = ld(o, a + 1)) < 56320 || i > 57343 ? e ? dd(o, a) : n : e ? pd(o, a, a + 2) : i - 56320 + (n - 55296 << 10) + 65536
            }
        },
        hd = {
            codeAt: vd(!1),
            charAt: vd(!0)
        }.charAt,
        gd = Yo,
        md = Dr,
        bd = cs,
        yd = "String Iterator",
        wd = md.set,
        Sd = md.getterFor(yd);
    bd(String, "String", (function(e) {
        wd(this, {
            type: yd,
            string: gd(e),
            index: 0
        })
    }), (function() {
        var e, t = Sd(this),
            r = t.string,
            n = t.index;
        return n >= r.length ? {
            value: void 0,
            done: !0
        } : (e = hd(r, n), t.index += e.length, {
            value: e,
            done: !1
        })
    })), y.Promise;
    var Md = Tt("span").classList,
        _d = Md && Md.constructor && Md.constructor.prototype,
        Od = _d === Object.prototype ? void 0 : _d,
        Pd = y,
        Ad = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        },
        Ed = Od,
        Fd = ws,
        Td = sr,
        kd = vt,
        Rd = kd("iterator"),
        jd = kd("toStringTag"),
        xd = Fd.values,
        Ld = function(e, t) {
            if (e) {
                if (e[Rd] !== xd) try {
                    Td(e, Rd, xd)
                } catch (t) {
                    e[Rd] = xd
                }
                if (e[jd] || Td(e, jd, t), Ad[t])
                    for (var r in Fd)
                        if (e[r] !== Fd[r]) try {
                            Td(e, r, Fd[r])
                        } catch (t) {
                            e[r] = Fd[r]
                        }
            }
        };
    for (var Nd in Ad) Ld(Pd[Nd] && Pd[Nd].prototype, Nd);
    Ld(Ed, "DOMTokenList");
    var Bd = {
            desktop: {
                chrome: "<=63",
                edge: "<=18",
                electron: "<6",
                firefox: "<67",
                ie: "11",
                opera: "<=50",
                safari: "<=12",
                yandex: "<=9999"
            },
            mobile: {
                android: "<96",
                chrome: "<=63",
                firefox: "<67",
                opera: "<=50",
                safari: "<=12",
                samsung_internet: "<8.2"
            },
            tablet: {
                android: "<96",
                chrome: "<=63",
                firefox: "<67",
                opera: "<=50",
                safari: "<=12",
                samsung_internet: "<8.2"
            }
        },
        Id = {
            desktop: {
                chrome: ">63",
                edge: ">18",
                electron: ">6",
                firefox: ">=67",
                opera: ">50",
                safari: ">=14"
            },
            mobile: {
                android: ">=96",
                chrome: ">63",
                firefox: ">67",
                opera: ">50",
                safari: ">=14",
                samsung_internet: ">=8.2"
            },
            tablet: {
                android: ">=96",
                chrome: ">=63",
                firefox: ">=67",
                opera: ">50",
                safari: ">=14",
                samsung_internet: ">=8.2"
            }
        },
        Cd = function(e) {
            return s.getParser(window.navigator.userAgent).satisfies(e)
        };
    document.head.appendChild(function() {
        var n, i, o = null,
            a = (n = {
                percentage: Number(void 0),
                version: ""
            }, i = {
                percentage: Number(void 0),
                version: ""
            }, n.version && n.percentage && i.version && i.percentage ? {
                a: n,
                b: i
            } : n.version && 100 === n.percentage ? {
                a: n,
                b: null
            } : {
                a: {
                    percentage: 100,
                    version: u
                },
                b: null
            }),
            s = a.a,
            l = a.b;
        if (l) {
            var p = localStorage.getItem(r);
            o = !p || s.version !== p && l.version !== p ? Math.random() <= s.percentage / 100 ? s.version : l.version : p
        } else o = s.version;
        localStorage.setItem(r, o);
        var v = document.getElementById(t) || document.querySelector('script[src*="loader.js"][src*="browser-ui"]');
        if (!v) throw new Error('No Usercentrics script ID "'.concat(t, '" found'));
        v.setAttribute("data-avoid-prefetch-services", ""), e.TCF_ENABLED in v.dataset && m();
        var h = document.createElement("script");
        return v.nonce && (h.nonce = v.nonce), Cd(Bd) ? h.src = v.src.replace("loader.js", f) : Cd(Id) ? (h.type = "module", h.src = v.src.replace("loader.js", d)) : h.src = v.src.replace("loader.js", c), o && /^([0-9]+\.[0-9]+\.[0-9])$/.test(o) && (h.src = h.src.replace("/latest/", "/".concat(o, "/"))), h
    }())
}();