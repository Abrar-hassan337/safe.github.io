! function() {
    "use strict";
    var e = function(e) {
            return (document.cookie.match("(^|; )" + e + "=([^;]*)") || 0)[2]
        },
        t = function(e) {
            var t = {};
            return decodeURIComponent(window.location.search).replace(/[?&]+([^=&]+)=([^&]*)/gi, (function(e, n, a) {
                t[n] = a
            })), t[e]
        };

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }
    var r = function() {
        function e(t) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            n(this, e), this.settingsId = t, this.controllerId = a
        }
        var t, r;
        return t = e, r = [{
            key: "language",
            get: function() {
                switch (window.location.hostname) {
                    case "www.flixbus.co.uk":
                    case "shop.flixbus.co.uk":
                        return "en";
                    case "www.flixbus.at":
                    case "shop.flixbus.at":
                        return "de";
                    case "www.flixbus.rs":
                    case "shop.flixbus.rs":
                        return "sr_latn";
                    default:
                        return document.documentElement.lang.replace("_", "-")
                }
            }
        }, {
            key: "init",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
                    t = e.getElementsByTagName("script")[0],
                    n = e.createElement("script");
                n.defer = !0, n.id = "usercentrics-cmp", n.dataset.settingsId = this.settingsId, this.controllerId && (n.dataset.controllerId = this.controllerId), n.dataset.language = this.language, n.src = "https://app.usercentrics.eu/browser-ui/latest/loader.js", t.parentNode.insertBefore(n, t)
            }
        }], r && a(t.prototype, r), Object.defineProperty(t, "prototype", {
            writable: !1
        }), e
    }();

    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }
    var i, c, s, u, l, f = function() {
            function e(t, n) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.containerId = t, this.useProxy = n
            }
            var t, n;
            return t = e, n = [{
                key: "src",
                get: function() {
                    return this.useProxy ? "//pulse.cro.flixbus.com/".concat(this.containerId, ".js") : "//www.googletagmanager.com/gtm.js?id=GTM-".concat(this.containerId)
                }
            }, {
                key: "initDataLater",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
                    e.dataLayer = e.dataLayer || [], e.gtag = function() {
                        e.dataLayer.push(arguments)
                    }, e.gtag("consent", "default", {
                        ad_storage: "denied",
                        analytics_storage: "denied",
                        wait_for_update: 2e3
                    }), e.dataLayer.push({
                        "gtm.start": (new Date).getTime(),
                        event: "gtm.js"
                    })
                }
            }, {
                key: "init",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
                    this.initDataLater(t);
                    var n = e.getElementsByTagName("script")[0],
                        a = e.createElement("script");
                    a.defer = !0, a.src = this.src, n.parentNode.insertBefore(a, n)
                }
            }], n && o(t.prototype, n), Object.defineProperty(t, "prototype", {
                writable: !1
            }), e
        }(),
        d = !0,
        g = !0;
    i = window, s = e(c = "ab_bucket") || function(e) {
            return "function" == typeof Storage && window.localStorage.getItem(e)
        }(c) || Math.floor(10 * Math.random()).toString(), u = "." + i.location.hostname.replace(/(www|shop)\./, ""), (l = new Date).setFullYear(l.getFullYear() + 1),
        function(e, t, n, a) {
            document.cookie = e + "=" + t + ";domain=" + n + ";expires=" + a + ";secure;path=/;SameSite=None"
        }(c, s, u, l),
        function(e, t) {
            "function" == typeof Storage && window.localStorage.setItem(e, t)
        }(c, s), i.abBucket = s,
        function() {
            if (!(g = "0" !== e("uc_active") && g)) return !1;
            if ("false" === t("consent")) return !1;
            if ("app" === t("platform")) return !1;
            var n = t("_uc") || e("UCCID") || null;
            new r("Cw0rbv9tt", n).init()
        }(),
        function(t) {
            if ("/rebooking/mobile/auth" === t.location.pathname) return !1;
            var n;
            d = "1" !== e("gtm_noproxy") && d, n = "www.flixcar.fr" === t.location.hostname ? "TSG5ZZC" : "QFH9M", new f(n, d).init()
        }(document)
}();