import {
    n as e,
    Z as n,
    A as s,
    l as t,
    u as r,
    a as i,
    b as u,
    p as a,
    c,
    d as o,
    F as d,
    y as l,
    I as v,
    Y as f,
    _ as g
} from "./index.module.js";
var h = function(n) {
        function s(e, h, S) {
            var b = n.call(this, S) || this;
            return b.categorySlug = e.categorySlug, b.consent = i(e, h), b.id = e.templateId, b.isEssential = h.isEssential, b.isHidden = !!h.isHidden || e.isHidden, b.processorId = "".concat(u(a())), b.subServices = [], b.subServicesLength = e.subConsents ? e.subConsents.length : 0, b.version = e.version, b.fetchSubServices = function() {
                return c(b, void 0, void 0, (function() {
                    var n, i, u, a, c;
                    return o(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                if (n = l.getInstance(), i = e.subConsents, !(u = v(i)).length) return [2, []];
                                c = null, o.label = 1;
                            case 1:
                                return o.trys.push([1, 4, , 5]), [4, n.fetchAggregatedServices(u, !1)];
                            case 2:
                                return a = o.sent(), [4, n.fetchTranslations()];
                            case 3:
                                return c = o.sent(), [3, 5];
                            case 4:
                                throw o.sent(), new Error(d.FETCH_DATA_PROCESSING_SERVICES);
                            case 5:
                                return a && i ? (this.subServices = i.reduce((function(e, n) {
                                    var i = null == a ? void 0 : a.find((function(e) {
                                        return n.templateId === e.templateId && n.version === e.version
                                    }));
                                    if (!i) return t([], r(e), !1);
                                    var u = new s(n, h, i);
                                    return t(t([], r(e), !1), [u], !1)
                                }), []), [2, this.subServices.reduce((function(e, n) {
                                    var s = i.find((function(e) {
                                        return n.id === e.templateId && n.version === e.version
                                    }));
                                    if (!s) return t([], r(e), !1);
                                    var u = new f(s, c, a),
                                        o = g(g(g({}, u), n), {
                                            subServices: []
                                        });
                                    return t(t([], r(e), !1), [o], !1)
                                }), [])]) : [2, []]
                        }
                    }))
                }))
            }, b
        }
        return e(s, n), s
    }(n),
    S = function(e, n, s) {
        this.isEssential = e.isEssential, this.isHidden = e.isHidden, this.services = b(e, n, s), this.slug = e.categorySlug
    },
    b = function(e, n, s) {
        return n.reduce((function(n, i) {
            if (i.categorySlug === e.categorySlug) {
                var u = null == s ? void 0 : s.find((function(e) {
                        return i.templateId === e.templateId && i.version === e.version
                    })),
                    a = new h(i, e, u);
                return t(t([], r(n), !1), [a], !1)
            }
            return t([], r(n), !1)
        }), [])
    },
    p = function(e, n, i) {
        this.categories = e.categories.reduce((function(n, u) {
            var a = new S(u, e.consentTemplates, i);
            return s(a.services) ? t(t([], r(n), !1), [a], !1) : t([], r(n), !1)
        }), []), this.controllerId = n
    };
export {
    p as
    default
};