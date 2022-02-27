let e, t, n = !1;
const l = "undefined" != typeof window ? window : {},
    s = l.document || {
        head: {}
    },
    o = {
        t: 0,
        l: "",
        jmp: e => e(),
        raf: e => requestAnimationFrame(e),
        ael: (e, t, n, l) => e.addEventListener(t, n, l),
        rel: (e, t, n, l) => e.removeEventListener(t, n, l),
        ce: (e, t) => new CustomEvent(e, t)
    },
    c = e => Promise.resolve(e),
    r = (() => {
        try {
            return new CSSStyleSheet, "function" == typeof(new CSSStyleSheet).replace
        } catch (e) {}
        return !1
    })(),
    i = new WeakMap,
    a = e => "sc-" + e.o,
    u = {},
    f = e => "object" == (e = typeof e) || "function" === e,
    $ = (e, t, ...n) => {
        let l = null,
            s = !1,
            o = !1,
            c = [];
        const r = t => {
            for (let n = 0; n < t.length; n++) l = t[n], Array.isArray(l) ? r(l) : null != l && "boolean" != typeof l && ((s = "function" != typeof e && !f(l)) && (l += ""), s && o ? c[c.length - 1].i += l : c.push(s ? y(null, l) : l), o = s)
        };
        if (r(n), t) {
            const e = t.className || t.class;
            e && (t.class = "object" != typeof e ? e : Object.keys(e).filter((t => e[t])).join(" "))
        }
        const i = y(e, null);
        return i.u = t, c.length > 0 && (i.$ = c), i
    },
    y = (e, t) => ({
        t: 0,
        h: e,
        i: t,
        p: null,
        $: null,
        u: null
    }),
    d = {},
    h = (e, t, n, l, s, o) => {
        if (n !== l) {
            let c = V(e, t);
            if (t.toLowerCase(), "class" === t) {
                const t = e.classList,
                    s = m(n),
                    o = m(l);
                t.remove(...s.filter((e => e && !o.includes(e)))), t.add(...o.filter((e => e && !s.includes(e))))
            } else {
                const r = f(l);
                if ((c || r && null !== l) && !s) try {
                    if (e.tagName.includes("-")) e[t] = l;
                    else {
                        let s = null == l ? "" : l;
                        "list" === t ? c = !1 : null != n && e[t] == s || (e[t] = s)
                    }
                } catch (e) {}
                null == l || !1 === l ? !1 === l && "" !== e.getAttribute(t) || e.removeAttribute(t) : (!c || 4 & o || s) && !r && e.setAttribute(t, l = !0 === l ? "" : l)
            }
        }
    },
    p = /\s/,
    m = e => e ? e.split(p) : [],
    w = (e, t, n, l) => {
        const s = 11 === t.p.nodeType && t.p.host ? t.p.host : t.p,
            o = e && e.u || u,
            c = t.u || u;
        for (l in o) l in c || h(s, l, o[l], void 0, n, t.t);
        for (l in c) h(s, l, o[l], c[l], n, t.t)
    },
    b = (t, n, l) => {
        let o, c, r = n.$[l],
            i = 0;
        if (null !== r.i) o = r.p = s.createTextNode(r.i);
        else if (o = r.p = s.createElement(r.h), w(null, r, !1), null != e && o["s-si"] !== e && o.classList.add(o["s-si"] = e), r.$)
            for (i = 0; i < r.$.length; ++i) c = b(t, r, i), c && o.appendChild(c);
        return o
    },
    S = (e, n, l, s, o, c) => {
        let r, i = e;
        for (i.shadowRoot && i.tagName === t && (i = i.shadowRoot); o <= c; ++o) s[o] && (r = b(null, l, o), r && (s[o].p = r, i.insertBefore(r, n)))
    },
    g = (e, t, n, l) => {
        for (; t <= n; ++t)(l = e[t]) && l.p.remove()
    },
    j = (e, t) => e.h === t.h,
    v = (e, t) => {
        const n = t.p = e.p,
            l = e.$,
            s = t.$,
            o = t.i;
        null === o ? (w(e, t, !1), null !== l && null !== s ? ((e, t, n, l) => {
            let s, o = 0,
                c = 0,
                r = t.length - 1,
                i = t[0],
                a = t[r],
                u = l.length - 1,
                f = l[0],
                $ = l[u];
            for (; o <= r && c <= u;) null == i ? i = t[++o] : null == a ? a = t[--r] : null == f ? f = l[++c] : null == $ ? $ = l[--u] : j(i, f) ? (v(i, f), i = t[++o], f = l[++c]) : j(a, $) ? (v(a, $), a = t[--r], $ = l[--u]) : j(i, $) ? (v(i, $), e.insertBefore(i.p, a.p.nextSibling), i = t[++o], $ = l[--u]) : j(a, f) ? (v(a, f), e.insertBefore(a.p, i.p), a = t[--r], f = l[++c]) : (s = b(t && t[c], n, c), f = l[++c], s && i.p.parentNode.insertBefore(s, i.p));
            o > r ? S(e, null == l[u + 1] ? null : l[u + 1].p, n, l, c, u) : c > u && g(t, o, r)
        })(n, l, t, s) : null !== s ? (null !== e.i && (n.textContent = ""), S(n, null, t, s, 0, s.length - 1)) : null !== l && g(l, 0, l.length - 1)) : e.i !== o && (n.data = o)
    },
    M = (e, t) => {
        t && !e.m && t["s-p"] && t["s-p"].push(new Promise((t => e.m = t)))
    },
    k = (e, t) => {
        if (e.t |= 16, !(4 & e.t)) return M(e, e.S), Y((() => C(e, t)));
        e.t |= 512
    },
    C = (e, t) => {
        const n = e.g;
        return L(void 0, (() => O(e, n, t)))
    },
    O = async (e, t, n) => {
        const l = e.j,
            o = l["s-rc"];
        n && (e => {
            const t = e.v,
                n = e.j,
                l = t.t,
                o = ((e, t) => {
                    let n = a(t),
                        l = D.get(n);
                    if (e = 11 === e.nodeType ? e : s, l)
                        if ("string" == typeof l) {
                            let t, o = i.get(e = e.head || e);
                            o || i.set(e, o = new Set), o.has(n) || (t = s.createElement("style"), t.innerHTML = l, e.insertBefore(t, e.querySelector("link")), o && o.add(n))
                        } else e.adoptedStyleSheets.includes(l) || (e.adoptedStyleSheets = [...e.adoptedStyleSheets, l]);
                    return n
                })(n.shadowRoot ? n.shadowRoot : n.getRootNode(), t);
            10 & l && (n["s-sc"] = o, n.classList.add(o + "-h"))
        })(e);
        x(e, t), o && (o.map((e => e())), l["s-rc"] = void 0); {
            const t = l["s-p"],
                n = () => P(e);
            0 === t.length ? n() : (Promise.all(t).then(n), e.t |= 4, t.length = 0)
        }
    },
    x = (n, l) => {
        try {
            l = l.render(), n.t &= -17, n.t |= 2, ((n, l) => {
                const s = n.j,
                    o = n.v,
                    c = n.M || y(null, null),
                    r = (e => e && e.h === d)(l) ? l : $(null, null, l);
                t = s.tagName, o.k && (r.u = r.u || {}, o.k.map((([e, t]) => r.u[t] = s[e]))), r.h = null, r.t |= 4, n.M = r, r.p = c.p = s.shadowRoot || s, e = s["s-sc"], v(c, r)
            })(n, l)
        } catch (e) {
            _(e, n.j)
        }
        return null
    },
    P = e => {
        const t = e.j,
            n = e.S;
        64 & e.t || (e.t |= 64, R(t), e.C(t), n || E()), e.m && (e.m(), e.m = void 0), 512 & e.t && X((() => k(e, !1))), e.t &= -517
    },
    E = () => {
        R(s.documentElement), X((() => (e => {
            const t = o.ce("appload", {
                detail: {
                    namespace: "flix-icons"
                }
            });
            return e.dispatchEvent(t), t
        })(l)))
    },
    L = (e, t) => e && e.then ? e.then(t) : t(),
    R = e => e.classList.add("hydrated"),
    T = (e, t, n) => {
        if (t.O) {
            e.watchers && (t.P = e.watchers);
            const l = Object.entries(t.O),
                s = e.prototype;
            if (l.map((([e, [l]]) => {
                    (31 & l || 2 & n && 32 & l) && Object.defineProperty(s, e, {
                        get() {
                            return ((e, t) => q(this).L.get(t))(0, e)
                        },
                        set(n) {
                            ((e, t, n, l) => {
                                const s = q(e),
                                    o = s.j,
                                    c = s.L.get(t),
                                    r = s.t,
                                    i = s.g;
                                if (n = ((e, t) => null == e || f(e) ? e : 4 & t ? "false" !== e && ("" === e || !!e) : 1 & t ? e + "" : e)(n, l.O[t][0]), !(8 & r && void 0 !== c || n === c) && (s.L.set(t, n), i)) {
                                    if (l.P && 128 & r) {
                                        const e = l.P[t];
                                        e && e.map((e => {
                                            try {
                                                i[e](n, c, t)
                                            } catch (e) {
                                                _(e, o)
                                            }
                                        }))
                                    }
                                    2 == (18 & r) && k(s, !1)
                                }
                            })(this, e, n, t)
                        },
                        configurable: !0,
                        enumerable: !0
                    })
                })), 1 & n) {
                const n = new Map;
                s.attributeChangedCallback = function(e, t, l) {
                    o.jmp((() => {
                        const t = n.get(e);
                        this[t] = (null !== l || "boolean" != typeof this[t]) && l
                    }))
                }, e.observedAttributes = l.filter((([e, t]) => 15 & t[0])).map((([e, l]) => {
                    const s = l[1] || e;
                    return n.set(s, e), 512 & l[0] && t.k.push([e, s]), s
                }))
            }
        }
        return e
    },
    U = e => {
        ((e, t) => {
            if (e && e[t]) try {
                e[t](void 0)
            } catch (e) {
                _(e)
            }
        })(e, "connectedCallback")
    },
    A = (e, t = {}) => {
        const n = [],
            c = t.exclude || [],
            i = l.customElements,
            u = s.head,
            f = u.querySelector("meta[charset]"),
            $ = s.createElement("style"),
            y = [];
        let d, h = !0;
        Object.assign(o, t), o.l = new URL(t.resourcesUrl || "./", s.baseURI).href, e.map((e => e[1].map((t => {
            const l = {
                t: t[0],
                o: t[1],
                O: t[2],
                R: t[3]
            };
            l.O = t[2], l.k = [], l.P = {};
            const s = l.o,
                u = class extends HTMLElement {
                    constructor(e) {
                        super(e), N(e = this, l), 1 & l.t && e.attachShadow({
                            mode: "open"
                        })
                    }
                    connectedCallback() {
                        d && (clearTimeout(d), d = null), h ? y.push(this) : o.jmp((() => (e => {
                            if (0 == (1 & o.t)) {
                                const t = q(e),
                                    n = t.v,
                                    l = () => {};
                                if (1 & t.t) U(t.g);
                                else {
                                    t.t |= 1; {
                                        let n = e;
                                        for (; n = n.parentNode || n.host;)
                                            if (n["s-p"]) {
                                                M(t, t.S = n);
                                                break
                                            }
                                    }
                                    n.O && Object.entries(n.O).map((([t, [n]]) => {
                                        if (31 & n && e.hasOwnProperty(t)) {
                                            const n = e[t];
                                            delete e[t], e[t] = n
                                        }
                                    })), (async (e, t, n, l, s) => {
                                        if (0 == (32 & t.t)) {
                                            {
                                                if (t.t |= 32, (s = B(n)).then) {
                                                    const e = () => {};
                                                    s = await s, e()
                                                }
                                                s.isProxied || (n.P = s.watchers, T(s, n, 2), s.isProxied = !0);
                                                const e = () => {};
                                                t.t |= 8;
                                                try {
                                                    new s(t)
                                                } catch (e) {
                                                    _(e)
                                                }
                                                t.t &= -9, t.t |= 128, e(), U(t.g)
                                            }
                                            if (s.style) {
                                                let e = s.style;
                                                const t = a(n);
                                                if (!D.has(t)) {
                                                    const l = () => {};
                                                    ((e, t, n) => {
                                                        let l = D.get(e);
                                                        r && n ? (l = l || new CSSStyleSheet, l.replace(t)) : l = t, D.set(e, l)
                                                    })(t, e, !!(1 & n.t)), l()
                                                }
                                            }
                                        }
                                        const o = t.S,
                                            c = () => k(t, !0);
                                        o && o["s-rc"] ? o["s-rc"].push(c) : c()
                                    })(0, t, n)
                                }
                                l()
                            }
                        })(this)))
                    }
                    disconnectedCallback() {
                        o.jmp((() => {}))
                    }
                    componentOnReady() {
                        return q(this).T
                    }
                };
            l.U = e[0], c.includes(s) || i.get(s) || (n.push(s), i.define(s, T(u, l, 1)))
        })))), $.innerHTML = n + "{visibility:hidden}.hydrated{visibility:inherit}", $.setAttribute("data-styles", ""), u.insertBefore($, f ? f.nextSibling : u.firstChild), h = !1, y.length ? y.map((e => e.connectedCallback())) : o.jmp((() => d = setTimeout(E, 30)))
    },
    H = e => {
        const t = new URL(e, o.l);
        return t.origin !== l.location.origin ? t.href : t.pathname
    },
    W = new WeakMap,
    q = e => W.get(e),
    F = (e, t) => W.set(t.g = e, t),
    N = (e, t) => {
        const n = {
            t: 0,
            j: e,
            v: t,
            L: new Map
        };
        return n.T = new Promise((e => n.C = e)), e["s-p"] = [], e["s-rc"] = [], W.set(e, n)
    },
    V = (e, t) => t in e,
    _ = (e, t) => (0, console.error)(e, t),
    z = new Map,
    B = e => {
        const t = e.o.replace(/-/g, "_"),
            n = e.U,
            l = z.get(n);
        return l ? l[t] : import (`./${n}.entry.js`).then((e => (z.set(n, e), e[t])), _)
    },
    D = new Map,
    G = [],
    I = [],
    J = (e, t) => l => {
        e.push(l), n || (n = !0, t && 4 & o.t ? X(Q) : o.raf(Q))
    },
    K = e => {
        for (let t = 0; t < e.length; t++) try {
            e[t](performance.now())
        } catch (e) {
            _(e)
        }
        e.length = 0
    },
    Q = () => {
        K(G), K(I), (n = G.length > 0) && o.raf(Q)
    },
    X = e => c().then(e),
    Y = J(I, !0);
export {
    d as H, A as b, H as g, $ as h, c as p, F as r
}