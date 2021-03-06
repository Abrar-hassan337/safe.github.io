(function(m) {
    var v = null;
    try {
        var q = m.navigator,
            t = m.screen,
            N = m.location,
            e = m.document,
            w = e.documentElement,
            x = e.body || e.getElementsByTagName("body").item(0) || null,
            D = e.getElementById("adtriba-js").getAttribute("data-project-tracker-id") || null,
            O = e.getElementById("adtriba-js").getAttribute("data-project-sync") || !1,
            z = e.getElementById("adtriba-js").getAttribute("data-project-domain") || null,
            n = e.getElementById("adtriba-js").getAttribute("data-project-cross-domain") || null,
            A = null,
            y = function() {
                for (var b = [], a = 0; 256 >
                    a; a++) b[a] = (a + 256).toString(16).substr(1);
                for (var a = Array(16), c = 0, d; 16 > c; c++) 0 === (c & 3) && (d = 4294967296 * Math.random()), a[c] = d >>> ((c & 3) << 3) & 255;
                a[6] = a[6] & 15 | 64;
                a[8] = a[8] & 63 | 128;
                d = 0;
                return b[a[d++]] + b[a[d++]] + b[a[d++]] + b[a[d++]] + "-" + b[a[d++]] + b[a[d++]] + "-" + b[a[d++]] + b[a[d++]] + "-" + b[a[d++]] + b[a[d++]] + "-" + b[a[d++]] + b[a[d++]] + b[a[d++]] + b[a[d++]] + b[a[d++]] + b[a[d]]
            },
            E = function(b) {
                var a = window.location.href;
                b = b.replace(/[\[\]]/g, "\\$&");
                return (a = (new RegExp("[?&]" + b + "(=([^&#]*)|&|#|$)")).exec(a)) ? a[2] ? decodeURIComponent(a[2].replace(/\+/g,
                    " ")) : "" : null
            },
            F = function() {
                if (null !== z && 0 < z.length) return z;
                if (null !== v && 0 < v.length) return v;
                for (var b = 0, a = e.domain, c = a.split("."), d = "atbdomain" + (new Date).getTime(); b < c.length - 1 && -1 == e.cookie.indexOf(d + "=" + d);) a = c.slice(-1 - ++b).join("."), e.cookie = d + "=" + d + ";domain=" + a + ";";
                v = a;
                e.cookie = d + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=" + a + ";";
                return a
            },
            g = function(b, a) {
                if (!b || !a) return null;
                var c = new Date;
                c.setTime(c.getTime() + 63072E6);
                var c = "; expires=" + c.toGMTString(),
                    d = "; domain=." + F();
                document.cookie =
                    b + "=" + encodeURIComponent(a) + c + d + "; path=/"
            },
            p = function(b) {
                if (!b) return null;
                b += "=";
                for (var a = document.cookie.split(";"), c = 0; c < a.length; c++) {
                    for (var d = a[c];
                        " " == d.charAt(0);) d = d.substring(1, d.length);
                    if (0 === d.indexOf(b)) return decodeURIComponent(d.substring(b.length, d.length))
                }
                return null
            },
            G = function(b, a) {
                if (a && 0 < a.length)
                    for (var c = 0; c < a.length; c++)
                        if ("object" === typeof a[c] && "function" === typeof b[a[c][0]]) {
                            var d = a[c];
                            b[d[0]].apply(null, Array.prototype.slice.call(d, 1))
                        }
            },
            P = function() {
                var b = p("atbpdid");
                b ? g("atbpdid", b) : g("atbpdid", y())
            },
            H = function(b) {
                var a = p("atbpuid");
                b ? g("atbpuid", b) : a && g("atbpuid", a)
            },
            Q = function() {
                var b = D || null,
                    a = p("atbpdid") || null || null;
                null !== b && null !== a && (b = "https://pixel.tapad.com/idsync/ex/receive?partner_id=2755&partner_device_id=" + (b + "-" + a), (new Image(1, 1)).src = b)
            },
            f = function(b, a) {
                var c = y(),
                    d = A,
                    h = p("atbpdid") || null || null,
                    f = p("atbpuid") || null || null,
                    u = (new Date).getTime(),
                    k = (new Date).getTimezoneOffset(),
                    l = N.href || null,
                    r = e.referrer && 0 < e.referrer.trim().length ? e.referrer.trim() :
                    null,
                    n = q.doNotTrack || q.msDoNotTrack,
                    g = encodeURIComponent;
                c = JSON.stringify({
                    id: c,
                    version: "2.23.0",
                    action: b,
                    data: a,
                    context: {
                        ptid: D,
                        pvid: d,
                        pdid: h,
                        puid: f,
                        timestamp: u,
                        timezone: k,
                        location: l,
                        referrer: r,
                        user_agent: q.userAgent || null,
                        platform: q.platform || null,
                        language: q.language || null,
                        languages: q.languages || null,
                        cookie_enabled: q.cookieEnabled || null,
                        dnt_enabled: !("yes" !== n && "1" !== n),
                        screen_color_depth: t.colorDepth || null,
                        screen_width: t.width || null,
                        screen_height: t.height || null,
                        window_width: t.availWidth || null,
                        window_height: t.availHeight || null,
                        viewport_width: m.innerWidth || w.clientWidth || x.clientWidth || w.offsetWidth || x.offsetWidth || null,
                        viewport_height: m.innerHeight || w.clientHeight || x.clientHeight || w.offsetHeight || x.offsetHeight || null,
                        document_title: e.title || null,
                        document_charset: e.characterSet || e.charset || null
                    }
                });
                h = d = 0;
                f = [];
                if (c) {
                    c = unescape(encodeURIComponent(c));
                    do u = c.charCodeAt(d++), k = c.charCodeAt(d++), l = c.charCodeAt(d++), r = u << 16 | k << 8 | l, u = r >> 18 & 63, k = r >> 12 & 63, l = r >> 6 & 63, r &= 63, f[h++] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(u) +
                        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(k) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(l) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(r); while (d < c.length);
                    d = f.join("");
                    c = c.length % 3;
                    c = (c ? d.slice(0, c - 3) : d) + "===".slice(c || 3)
                }
                g = g(c);
                g = "?id=" + y() + "&ts=" + (new Date).getTime() + "&data=" + g;
                (new Image(1, 1)).src = "https://o.adtriba.com/collect" + g
            },
            I = function(b, a, c, d) {
                if (b.addEventListener) return b.addEventListener(a,
                    c, d), !0;
                if (b.attachEvent) return b.attachEvent("on" + a, c);
                b["on" + a] = c
            },
            J = function(b) {
                var a = b.target,
                    c = p("atbpdid") || null;
                if ("A" !== b.target.tagName) a: {
                    for (a = b.target; a && a !== e; a = a.parentNode)
                        if (a.matches("a")) break a;a = null
                }
                if (void 0 !== a && null !== a && a.href && c) {
                    b = a;
                    var c = "atb_pdid=" + c,
                        d = a.href.split("#"),
                        h = d[0].split("?"),
                        f = h.shift();
                    if (h = h.join("?")) {
                        for (var g = !0, k = h.split("&"), l = 0; l < k.length; l++)
                            if ("atb_pdid=" === k[l].substr(0, 9)) {
                                g = !1;
                                k[l] = c;
                                h = k.join("&");
                                break
                            }
                        g && (h = c + "&" + h)
                    } else h = c;
                    d[0] = f + "?" + h;
                    c =
                        d.join("#");
                    b.href = c;
                    a.isDecorated = !0
                }
            },
            B = function() {
                var b = m.location.hostname;
                (0 < n.indexOf(",") ? n.split(",") : [n]).forEach(function(a) {
                    a = a.trim();
                    a = document.querySelectorAll("[href*='" + a + "']");
                    for (var c = 0, d = a.length; c < d; c++) {
                        var e = a[c];
                        e.hostname !== b && (I(e, "click", J, !0), I(e, "mousedown", J, !0))
                    }
                })
            },
            R = function() {
                A || (A = y());
                var b = E("atb_pdid");
                b && K(b);
                P();
                (b = E("atb_puid")) && L(b, {});
                "true" === O && Q();
                null !== n && (B(), window.addEventListener("load", function() {
                    B()
                }, !1))
            },
            L = function(b, a) {
                var c = b && 0 < b.trim().length ?
                    b.trim() : null;
                a = a || {};
                H(c);
                f("identity", {
                    identity: c,
                    properties: a
                })
            },
            K = function(b) {
                var a = p("atbpdid");
                "string" === typeof b && 36 === b.length && b !== a && (g("atbpdid", b), f("device", {
                    previous_pdid: a
                }))
            },
            C = function() {
                return {
                    push: function() {
                        G(this, arguments)
                    },
                    init: function() {
                        R()
                    },
                    identity: function(b, a) {
                        L(b, a)
                    },
                    alias: function(b, a) {
                        var c = b && 0 < b.trim().length ? b.trim() : null,
                            d = a && 0 < a.trim().length ? a.trim() : null;
                        H(c);
                        f("alias", {
                            identity: c,
                            previous_identity: d
                        })
                    },
                    reset: function() {
                        var b = p("atbpuid") || null;
                        document.cookie =
                            "atbpuid=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=." + F() + "; path=/";
                        f("reset", {
                            identity: b
                        })
                    },
                    pageview: function(b, a) {
                        var c;
                        c = a || {};
                        f("pageview", {
                            label: b || null,
                            properties: c
                        })
                    },
                    conversion: function(b, a) {
                        var c;
                        c = a || {};
                        f("conversion", {
                            goal: b || null,
                            properties: c
                        })
                    },
                    track: function(b, a) {
                        var c;
                        c = a || {};
                        f("track", {
                            event: b || null,
                            properties: c
                        })
                    },
                    device: function(b) {
                        K(b)
                    },
                    session: function(b, a) {
                        var c;
                        c = a || {};
                        f("session", {
                            id: b || null,
                            properties: c
                        })
                    },
                    _initAutoLinker: function() {
                        null !== n && (console.log("Adtriba: activate auto linker"),
                            B())
                    }
                }
            }(),
            S = m.adtriba;
        C.init();
        G(C, S);
        m.adtriba = C
    } catch (b) {
        try {
            var M = (new Date).getTime(),
                T = "https://log.adtriba.com/collect?ts=" + M + "&error=" + encodeURIComponent(JSON.stringify({
                    version: "2.23.0",
                    ptid: null,
                    message: b.message,
                    created_at: M
                }));
            (new Image(1, 1)).src = T;
            document.cookie && "y" === ("; " + document.cookie).split("; atbdbg=").pop().split(";").shift() && console.log(b)
        } catch (a) {}
    }
})(window);