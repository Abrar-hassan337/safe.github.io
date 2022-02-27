"use strict";
(self.webpackChunkgatsby_flixbus = self.webpackChunkgatsby_flixbus || []).push([
    [269], {
        1813: function(e, t, n) {
            n.r(t);
            var r = n(7294),
                a = n(5092),
                o = (n(9398), n(8802)),
                l = n(389),
                i = n(1266),
                s = n(3751),
                c = n(1342),
                u = n(9447),
                m = n(1519),
                d = n(7798),
                f = n(7589),
                g = n(4933),
                p = n(2174),
                h = n(7855),
                y = n(2496),
                v = n(2354),
                b = (n(1923), n(296));

            function k(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (n) return (n = n.call(e)).next.bind(n);
                if (Array.isArray(e) || (n = function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return x(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return x(e, t)
                    }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var r = 0;
                    return function() {
                        return r >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[r++]
                        }
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function x(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            n(8315).polyfill(), n(9831), "undefined" != typeof window && (0, l.lF)();
            "undefined" != typeof window && void 0 !== navigator.serviceWorker && navigator.serviceWorker && navigator.serviceWorker.getRegistrations && navigator.serviceWorker.getRegistrations().then((function(e) {
                for (var t, n = k(e); !(t = n()).done;) {
                    t.value.unregister()
                }
            }));
            t.default = function(e) {
                var t = e.data,
                    n = e.pageContext,
                    l = n.langcode,
                    k = n.project,
                    x = n.spaLang,
                    E = n.htmlLang,
                    I = n.domain,
                    w = n.showEvent;
                (0, r.useEffect)((function() {
                    if ("undefined" != typeof window) {
                        var e = document.createElement("script"),
                            t = document.createElement("script");
                        e.type = "module", t.type = "nomodule", e.src = "https://d167dmkkzosnsj.cloudfront.net/v0.0.1/flix-icons/flix-icons.esm.js", t.src = "https://d167dmkkzosnsj.cloudfront.net/v0.0.1/flix-icons/flix-icons.js", document.body.appendChild(e), document.body.appendChild(t), w && (0, b.E)(0)
                    }
                }), []);
                var T = t.flix,
                    Z = T.mainMenu,
                    L = T.footerMenu,
                    M = T.legalMenu,
                    _ = T.socialLinks,
                    j = T.copyright,
                    B = T.languages,
                    C = T.shopData,
                    A = T.flixBrands,
                    S = T.hreflangs,
                    D = T.nodeByAlias,
                    F = D.heroImageDesktop,
                    H = D.heroImageTablet,
                    P = D.heroImageMobile,
                    W = D.defaultHeroImageDesktop,
                    X = D.defaultHeroImageTablet,
                    z = D.defaultHeroImageMobile,
                    R = D.headline,
                    O = D.metatags,
                    G = D.arrivalCity,
                    N = D.departureCity,
                    U = D.longTermInfoBoxHeadline,
                    $ = D.longTermInfoBoxContent,
                    q = D.longTermInfoBoxLink,
                    J = D.usps,
                    K = D.serviceMenu,
                    Q = D.paragraphs,
                    V = function(e, t) {
                        return null === e ? null !== W ? t[0] : "https://cdn-cf.cms.flixbus.com/drupal-assets/2021-06/flixtrain-hero.jpeg" : e[0]
                    },
                    Y = {
                        domain: I,
                        langcode: l,
                        spaLang: x,
                        translations: t.flixbus.translations,
                        project: k
                    };
                return r.createElement(a.Z, {
                    theme: "tr" === l ? "kamil" : "default"
                }, r.createElement(o.iz, {
                    value: Y
                }, r.createElement(s.Z, {
                    metatags: O,
                    hreflangs: S,
                    langcode: l,
                    domains: B,
                    htmlLang: E,
                    iosBanner: _[0].smart_app_banner_adjustlink_ios
                }), r.createElement(d.Z, null), null !== $ && r.createElement(g.Z, {
                    content: {
                        longTermInfoBoxHeadline: U,
                        longTermInfoBoxContent: $,
                        longTermInfoBoxLink: q
                    }
                }), r.createElement(c.Z, {
                    navigation: Z,
                    languageSwitcher: B,
                    shopData: C[0],
                    domains: S
                }), r.createElement("main", null, r.createElement(i.Z, {
                    pageTitle: R,
                    locale: x,
                    arrival: G,
                    departure: N,
                    heroDesktop: V(F, W),
                    heroTablet: V(H, X),
                    heroMobile: V(P, z),
                    shopData: C[0]
                }), null !== K && r.createElement("div", {
                    className: "home-section-container"
                }, r.createElement(f.Z, {
                    content: K
                })), r.createElement(m.Z, {
                    content: J,
                    langcode: l
                }), Q.map((function(e, t) {
                    var n = e.__typename,
                        a = e.id;
                    switch (n) {
                        case "FLIX_StaticMapTeaserParagraph":
                            return r.createElement(p.Z, {
                                key: a,
                                content: Q[t]
                            });
                        case "FLIX_ExplorationMapTeaserParagraph":
                            return r.createElement(h.Z, {
                                key: a,
                                content: Q[t]
                            });
                        case "FLIX_RichTextParagraph":
                            return r.createElement(y.Z, {
                                key: a,
                                content: Q[t]
                            });
                        case "FLIX_ProductGalleryParagraph":
                            return r.createElement(v.Z, {
                                key: a,
                                content: Q[t]
                            });
                        default:
                            return null
                    }
                }))), r.createElement(u.Z, {
                    footerMenu: L,
                    socialLinks: _[0],
                    flixBrands: A[0].flixBrands,
                    copyright: j[0],
                    legalMenu: M
                })))
            }
        }
    }
]);
//# sourceMappingURL=component---src-templates-flix-home-js-4474a75cee8ea20686ce.js.map