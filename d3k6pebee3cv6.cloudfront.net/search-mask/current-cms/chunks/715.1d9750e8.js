"use strict";
(self.wpJsonpSearchMask = self.wpJsonpSearchMask || []).push([
    [715], {
        8923: function(e, n, t) {
            t.d(n, {
                E: function() {
                    return b
                }
            });
            var r = t(4942),
                o = t(5671),
                i = t(3144),
                s = t(136),
                a = t(2963),
                c = t(1120),
                u = t(7363),
                l = t.n(u),
                p = t(5697),
                d = t.n(p),
                f = t(1744);

            function m(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function h(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? m(Object(t), !0).forEach((function(n) {
                        (0, r.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }

            function v(e) {
                var n = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var t, r = (0, c.Z)(e);
                    if (n) {
                        var o = (0, c.Z)(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return (0, a.Z)(this, t)
                }
            }
            var b = function(e) {
                (0, s.Z)(t, e);
                var n = v(t);

                function t() {
                    var e;
                    return (0, o.Z)(this, t), (e = n.call(this)).breakpointNames = (0, f.uy)().map((function(e) {
                        return e.name
                    })), e.observers = {}, e.handlers = {}, e.breakpointNames.forEach((function(n) {
                        e.observers[n] = (0, f.Vj)(n)
                    })), e.state = e.breakpointNames.reduce((function(n, t) {
                        return h(h({}, n), {}, (0, r.Z)({}, t, e.observers[t].matches))
                    }), {}), e
                }
                return (0, i.Z)(t, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        this.observers && Object.keys(this.observers).forEach((function(n) {
                            var t = e.observers[n];
                            e.handlers[n] = function(t) {
                                e.setState((0, r.Z)({}, n, t.matches), (function() {
                                    t.matches && e.props.onChange(n)
                                }))
                            }, t.addListener(e.handlers[n])
                        }))
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        var e = this;
                        this.observers && Object.keys(this.observers).forEach((function(n) {
                            e.observers[n].removeListener(e.handlers[n]), e.handlers[n] = null
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return this.breakpointNames.filter((function(n) {
                            return e.state[n]
                        })).map((function(n) {
                            return l().createElement(l().Fragment, {
                                key: n
                            }, e.props[n])
                        }))
                    }
                }]), t
            }(l().Component);
            b.propTypes = {
                onChange: d().func
            }, b.defaultProps = {
                onChange: function() {}
            }
        },
        4375: function(e, n, t) {
            t.d(n, {
                _: function() {
                    return T
                }
            });
            var r = t(7462),
                o = t(5987),
                i = t(5671),
                s = t(3144),
                a = t(7326),
                c = t(136),
                u = t(2963),
                l = t(1120),
                p = t(4942),
                d = t(7363),
                f = t.n(d),
                m = t(5697),
                h = t.n(m),
                v = t(4184),
                b = t.n(v),
                g = t(8923),
                y = t(2203),
                P = t(1744),
                C = {
                    responsivePopupContainer: "d3PsF",
                    closeIcon: "oliOq",
                    responsivePopupContainerVisible: "Z6uIg",
                    responsivePopupContainerMedium: "w4N6R",
                    responsivePopupContainerLarge: "vubgW",
                    centerAligned: "c1wN0",
                    responsivePopup: "HHHZr",
                    responsivePopupWrapper: "dl5VI",
                    responsivePopupContainerMediumNotFlex: "dOWPL",
                    responsivePopupHeader: "cZfpl",
                    responsivePopupFooter: "g9qSW",
                    responsivePopupHeaderCloseIcon: "C5km7",
                    icon: "T9uNW",
                    responsivePopupContainerSmall: "fHpre",
                    responsivePopupSmallWithButton: "oqqFG",
                    responsivePopupContainerHideBorder: "yDCZ0",
                    responsivePopupContainerAutoWidth: "LxIS7",
                    responsivePopupContainerNoPadding: "P8VlF"
                },
                O = ["children", "onChange"];

            function E(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function k(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? E(Object(t), !0).forEach((function(n) {
                        (0, p.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }

            function Z(e) {
                var n = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var t, r = (0, l.Z)(e);
                    if (n) {
                        var o = (0, l.Z)(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return (0, u.Z)(this, t)
                }
            }
            var R = function(e) {
                    var n, t, r, o = e.children,
                        i = e.size,
                        s = e.notFlex,
                        a = e.visible,
                        c = e.title,
                        u = e.onClose,
                        l = e.onCancel,
                        m = e.actions,
                        h = e.outerRef,
                        v = e.innerRef,
                        g = e.border,
                        O = e.autoWidth,
                        E = e.padding,
                        k = e.scrollableContent,
                        Z = e.centerAligned;
                    return function() {
                        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                        (0, d.useEffect)((function() {
                            var n = void 0,
                                t = void 0;
                            return e.every(Boolean) && (t = document.body.scrollTop, n = document.body.style.position, document.body.style.position = "fixed"),
                                function() {
                                    void 0 !== t && (document.body.scrollTop = t), void 0 !== n && (document.body.style.position = n)
                                }
                        }), e)
                    }((0, P.Vj)("small").matches && a), a ? f().createElement("div", {
                        key: i,
                        ref: h,
                        className: b()((n = {}, (0, p.Z)(n, C.responsivePopupContainer, !0), (0, p.Z)(n, C.responsivePopupContainerSmall, "small" === i), (0, p.Z)(n, C.responsivePopupContainerMedium, "medium" === i), (0, p.Z)(n, C.responsivePopupContainerMediumNotFlex, "medium" === i && s), (0, p.Z)(n, C.responsivePopupContainerLarge, "large" === i), (0, p.Z)(n, C.responsivePopupContainerVisible, a), (0, p.Z)(n, C.responsivePopupContainerHideBorder, !g), (0, p.Z)(n, C.responsivePopupContainerAutoWidth, O), (0, p.Z)(n, C.responsivePopupContainerNoPadding, !E), (0, p.Z)(n, C.centerAligned, Z), n))
                    }, f().createElement("div", {
                        className: b()((t = {}, (0, p.Z)(t, C.responsivePopup, !0), (0, p.Z)(t, C["responsivePopup".concat(i)], !0), (0, p.Z)(t, C.responsivePopupSmallWithButton, m), t))
                    }, f().createElement("div", {
                        className: C.responsivePopupHeader
                    }, c, f().createElement("div", {
                        className: C.responsivePopupHeaderCloseIcon
                    }, f().createElement(y.z, {
                        onClick: function(e) {
                            l(), u(!0, e)
                        }
                    }, f().createElement("i", {
                        className: "flix-icon flix-icon-close ".concat(C.closeIcon)
                    })))), f().createElement("div", {
                        ref: v,
                        className: b()((r = {}, (0, p.Z)(r, C.responsivePopupWrapper, !0), (0, p.Z)(r, C.responsivePopupWrapperNotScrollable, !k), r))
                    }, o), m ? f().createElement("div", {
                        className: C.responsivePopupFooter
                    }, m) : null)) : null
                },
                T = function(e) {
                    (0, c.Z)(t, e);
                    var n = Z(t);

                    function t() {
                        var e;
                        return (0, i.Z)(this, t), (e = n.call(this)).handleClickOutside = e.handleClickOutside.bind((0, a.Z)(e)), e.handleTouchOutside = e.handleTouchOutside.bind((0, a.Z)(e)), e.handleResize = e.handleResize.bind((0, a.Z)(e)), e
                    }
                    return (0, s.Z)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            document.addEventListener("mousedown", this.handleClickOutside), document.addEventListener("touchstart", this.handleTouchOutside), window.addEventListener("resize", this.handleResize)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            document.removeEventListener("mousedown", this.handleClickOutside), document.removeEventListener("touchstart", this.handleTouchOutside), window.removeEventListener("resize", this.handleResize)
                        }
                    }, {
                        key: "maybeCallCloseFunction",
                        value: function(e, n) {
                            "function" == typeof this.props.onClose && this.props.onClose(e, n)
                        }
                    }, {
                        key: "handleClickOutside",
                        value: function(e) {
                            this.props.visible && (this.outer && this.outer.contains(e.target) || this.inner && this.inner.contains(e.target) ? this.maybeCallCloseFunction(!1, e) : this.maybeCallCloseFunction(!0, e))
                        }
                    }, {
                        key: "handleTouchOutside",
                        value: function(e) {
                            this.props.onTouch(e), this.handleClickOutside(e)
                        }
                    }, {
                        key: "handleResize",
                        value: function(e) {
                            this.props.onResize(e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                n = this.props,
                                t = n.children,
                                i = n.onChange,
                                s = (0, o.Z)(n, O);
                            return f().createElement(g.E, {
                                onChange: i,
                                small: f().createElement(R, (0, r.Z)({
                                    innerRef: function(n) {
                                        e.inner = n
                                    },
                                    outerRef: function(n) {
                                        e.outer = n
                                    }
                                }, s, {
                                    size: "small"
                                }), t),
                                medium: f().createElement(R, (0, r.Z)({
                                    innerRef: function(n) {
                                        e.inner = n
                                    }
                                }, s, {
                                    size: "medium"
                                }), t),
                                large: f().createElement(R, (0, r.Z)({
                                    innerRef: function(n) {
                                        e.inner = n
                                    }
                                }, s, {
                                    size: "large"
                                }), t)
                            })
                        }
                    }]), t
                }(d.Component);
            T.propTypes = {
                children: h().node.isRequired,
                visible: h().bool.isRequired,
                title: h().string.isRequired,
                actions: h().node,
                border: h().bool,
                autoWidth: h().bool,
                onClose: h().func,
                onCancel: h().func,
                padding: h().bool,
                onChange: h().func,
                onTouch: h().func,
                onResize: h().func,
                notFlex: h().bool,
                scrollableContent: h().bool,
                centerAligned: h().bool
            }, T.defaultProps = {
                onClose: function() {},
                border: !0,
                autoWidth: !0,
                padding: !0,
                actions: null,
                notFlex: !1,
                scrollableContent: !0,
                centerAligned: !0,
                onChange: function() {},
                onTouch: function() {},
                onResize: function() {},
                onCancel: function() {}
            }, R.propTypes = k(k({}, T.propTypes), {}, {
                size: h().string.isRequired,
                innerRef: h().func.isRequired
            })
        },
        8715: function(e, n, t) {
            t.r(n), t.d(n, {
                ProductPopup: function() {
                    return de
                }
            });
            var r = t(8216),
                o = t(235),
                i = t(2429),
                s = t(7070),
                a = t(7363),
                c = t.n(a),
                u = t(4942),
                l = t(5697),
                p = t.n(l),
                d = t(4184),
                f = t.n(d),
                m = t(7302),
                h = "NWchR",
                v = "nK4lu",
                b = function(e) {
                    var n, t = e.url,
                        r = e.active,
                        o = e.getTranslationForCharterMessage,
                        i = e.getTranslationForCharterLink;
                    return c().createElement("div", {
                        className: f()((n = {}, (0, u.Z)(n, h, !0), (0, u.Z)(n, v, !r), n))
                    }, o(), " ", c().createElement("a", {
                        className: "smhc-link",
                        href: t,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, i()))
                };
            b.propTypes = {
                url: p().string.isRequired,
                active: p().bool.isRequired,
                getTranslationForCharterMessage: p().func.isRequired,
                getTranslationForCharterLink: p().func.isRequired
            };
            var g = (0, o.qC)((0, r.$j)((function(e) {
                    return {
                        url: (0, m.VZ)(e).url,
                        active: (0, m.yR)(e),
                        getTranslationForCharterMessage: "search.form.charter.popup.title",
                        getTranslationForCharterLink: "search.form.charter.popup.linkText"
                    }
                })), (0, i.i)({
                    getTranslationForCharterMessage: "search.form.charter.popup.title",
                    getTranslationForCharterLink: "search.form.charter.popup.linkText"
                }))(b),
                y = t(5885),
                P = t(1097),
                C = t(2008),
                O = t(5870),
                E = "dtmbO",
                k = (0, o.qC)((0, i.i)({
                    getTranslationSummaryPlaceholder: "search_bundle.search_widget.passengers.please_add_passengers_placeholder"
                }), (0, r.$j)((function(e) {
                    return {
                        passengerCount: (0, m.WD)(e)
                    }
                })))((function(e) {
                    var n = e.value,
                        t = e.label,
                        r = e.getTranslationSummaryPlaceholder,
                        o = e.passengerCount,
                        i = e.onFocus,
                        s = e.onClick,
                        a = e.inputRef,
                        u = void 0 === a ? null : a;
                    return c().createElement("div", {
                        className: E
                    }, c().createElement(C.I, {
                        value: n,
                        label: t,
                        placeholder: r(),
                        onChange: function() {},
                        onFocus: i,
                        onClick: s,
                        readOnly: !0,
                        invalid: (0, P.Wu)({
                            passengerCount: o
                        }),
                        inputRef: u,
                        icon: c().createElement(O.Z, {
                            name: "arrow-down",
                            size: "big"
                        }),
                        iconPosition: "right"
                    }))
                })),
                Z = t(7462),
                R = t(9358),
                T = t(8042);

            function w(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }
            var j = function(e) {
                var n = e.string,
                    t = e.placeholders,
                    r = e.count;
                return c().createElement("span", {
                    className: "translated-value"
                }, n(t, r))
            };
            j.propTypes = {
                string: p().func.isRequired,
                placeholders: p().objectOf(p().string),
                count: p().number
            };
            var N = (0, i.i)((function(e) {
                return {
                    string: e.id
                }
            }))(j);
            N.propTypes = {
                id: p().string.isRequired,
                placeholders: p().objectOf(p().string),
                count: p().number
            }, N.defaultProps = {
                placeholders: {},
                count: void 0
            }, j.defaultProps = function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? w(Object(t), !0).forEach((function(n) {
                        (0, u.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : w(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }({}, N.defaultProps);
            var _ = t(5987),
                x = t(5671),
                S = t(3144),
                q = t(136),
                D = t(2963),
                F = t(1120),
                L = ["allowEmpty", "min", "max", "value"];

            function I(e) {
                var n = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var t, r = (0, F.Z)(e);
                    if (n) {
                        var o = (0, F.Z)(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return (0, D.Z)(this, t)
                }
            }
            var z = function(e) {
                (0, q.Z)(t, e);
                var n = I(t);

                function t() {
                    var e;
                    return (0, x.Z)(this, t), (e = n.call(this)).state = {
                        uiValue: void 0
                    }, e
                }
                return (0, S.Z)(t, [{
                    key: "getUiValue",
                    value: function(e) {
                        return 0 === e && "" === this.state.uiValue ? "0" : String(e)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            n = this.props,
                            t = n.allowEmpty,
                            r = n.min,
                            o = n.max,
                            i = n.value,
                            s = (0, _.Z)(n, L);
                        return c().createElement(C.I, (0, Z.Z)({
                            value: this.getUiValue(i)
                        }, s, {
                            isValid: function(e) {
                                if (t && "" === e) return !0;
                                var n = parseInt(e, 10);
                                return !!/^\d+$/.test(e) && (!!Number.isInteger(n) && (!(Number.isInteger(r) && n < r) && !(Number.isInteger(o) && n > o)))
                            },
                            onChange: function(n) {
                                e.setState({
                                    uiValue: n.target.value
                                }), "function" == typeof e.props.onChange && e.props.onChange(n)
                            }
                        }))
                    }
                }]), t
            }(c().Component);
            z.propTypes = {
                value: p().number,
                min: p().number,
                max: p().number,
                allowEmpty: p().bool,
                onChange: p().func
            }, z.defaultProps = {
                min: null,
                max: null,
                value: 0,
                allowEmpty: !1,
                onChange: function() {}
            };
            var V = z,
                B = t(2203),
                W = "_z9V4",
                M = "lC_IN",
                A = "rnbLY",
                H = "HY3Ba",
                U = function(e) {
                    var n = e.productType,
                        t = e.value,
                        r = e.title,
                        o = e.description,
                        i = e.min,
                        s = e.max,
                        a = e.onChange;
                    return c().createElement("div", {
                        className: W,
                        "data-product-type": n
                    }, c().createElement("div", {
                        className: M
                    }, c().createElement("div", {
                        className: A
                    }, c().createElement(N, {
                        id: r
                    })), c().createElement("div", null, c().createElement(N, {
                        id: o
                    }))), c().createElement("div", {
                        className: H
                    }, c().createElement(B.z, (0, Z.Z)({}, (0, R.Je)(T.R.PRODUCTS_MINUS_BUTTON), {
                        onClick: function() {
                            a(t - 1)
                        },
                        icon: "minus",
                        disabled: t === i,
                        padless: !0
                    })), c().createElement(V, (0, Z.Z)({}, (0, R.Je)(T.R.PRODUCTS_NUMBER), {
                        min: i,
                        max: s,
                        allowEmpty: !0,
                        value: t,
                        onChange: function(e) {
                            a(e.target.value)
                        }
                    })), c().createElement(B.z, (0, Z.Z)({}, (0, R.Je)(T.R.PRODUCTS_PLUS_BUTTON), {
                        onClick: function() {
                            a(t + 1)
                        },
                        icon: "plus",
                        disabled: t === s,
                        padless: !0
                    }))))
                };
            U.propTypes = {
                productType: p().string.isRequired,
                value: p().number.isRequired,
                title: p().string.isRequired,
                description: p().string.isRequired,
                min: p().number,
                max: p().number,
                onChange: p().func.isRequired
            }, U.defaultProps = {
                min: 0,
                max: null
            };
            var J = U,
                Q = "avRmL",
                $ = function(e) {
                    var n = e.products,
                        t = e.onSetProductQuantity;
                    return c().createElement("div", {
                        className: Q
                    }, Object.keys(n).map((function(e) {
                        return c().createElement(J, {
                            key: e,
                            productType: e,
                            title: (0, y.em)(e, "label"),
                            description: (0, y.em)(e, "description"),
                            onChange: function(n) {
                                t(e, n)
                            },
                            value: n[e].selectedAmount,
                            max: n[e].maxAmount
                        })
                    })))
                };
            $.propTypes = {
                products: p().objectOf(p().any).isRequired,
                onSetProductQuantity: p().func.isRequired
            };
            var Y, G = $,
                K = t(4375),
                X = "XcA2Z",
                ee = "SbP8I",
                ne = "c2Zyt",
                te = "Mfvie",
                re = "X5P9b",
                oe = "aLJcq",
                ie = "ZuIac",
                se = "VQQ3Y",
                ae = (0, o.qC)((0, r.$j)((function(e) {
                    return {
                        active: (0, m.gZ)(e)
                    }
                })), (0, i.i)({
                    message: "search_mask.wheelchair_extra_info_message"
                }))((function(e) {
                    var n, t = e.active,
                        r = e.message;
                    return c().createElement("div", {
                        className: f()((n = {}, n[ie] = !0, n[se] = !t, n))
                    }, c().createElement("div", {
                        dangerouslySetInnerHTML: {
                            __html: r()
                        }
                    }))
                })),
                ce = (Y = function(e, n) {
                    return Y = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, n) {
                        e.__proto__ = n
                    } || function(e, n) {
                        for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
                    }, Y(e, n)
                }, function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

                    function t() {
                        this.constructor = e
                    }
                    Y(e, n), e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, new t)
                }),
                ue = function(e) {
                    function n(n) {
                        var t = e.call(this, n) || this;
                        return t.close = t.close.bind(t), t
                    }
                    return ce(n, e), n.prototype.close = function() {
                        var e = this.props,
                            n = e.close,
                            t = e.onPopupClosed;
                        n(), t()
                    }, n.prototype.render = function() {
                        var e = this,
                            n = this.props,
                            t = n.selectedProducts,
                            r = n.getTranslation,
                            o = n.products,
                            i = n.hasExtendedProducts,
                            s = n.extendedProducts,
                            a = n.extendedProductsInformationLink,
                            u = n.isOpen,
                            l = n.open,
                            p = n.isExtendedVisible,
                            d = n.setExtendedVisible,
                            f = n.onSetProductQuantity,
                            m = n.getTranslationConfirmButtonLabel,
                            h = n.getTranslationDiscountsShow,
                            v = n.getTranslationDiscountsBack,
                            b = n.getTranslationDiscountsInfo,
                            P = n.label,
                            C = n.popupTitle,
                            O = n.showExtendedProductsInfo;
                        return c().createElement("div", {
                            className: X
                        }, c().createElement(k, {
                            value: (0, y.qT)(t, r),
                            onFocus: function() {
                                l(), e.input && e.input.blur()
                            },
                            onClick: l,
                            label: P,
                            inputRef: function(n) {
                                e.input = n
                            }
                        }), c().createElement(K._, {
                            title: C,
                            onClose: function(n, t) {
                                var r = t.target === e.input || !n;
                                r ? l() : e.close(), r || d(!1)
                            },
                            visible: u,
                            actions: c().createElement(B.z, {
                                variant: "primary",
                                onClick: this.close
                            }, m())
                        }, c().createElement("div", {
                            className: ee
                        }, p && i ? c().createElement("div", {
                            className: ne
                        }, c().createElement("div", {
                            className: re + " smhc-control"
                        }, c().createElement("button", {
                            onClick: function() {
                                return d(!1)
                            },
                            className: oe + " smhc-btn-arrow smhc-btn-arrow--back smhc-link",
                            type: "button"
                        }, v())), O && c().createElement("a", {
                            className: "smhc-link",
                            href: a,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, b())) : null, c().createElement(g, null), c().createElement(G, {
                            products: p ? s : o,
                            onSetProductQuantity: f
                        }), c().createElement(ae, null), p || !i ? null : c().createElement("div", {
                            className: te
                        }, c().createElement("div", {
                            className: "smhc-control"
                        }, c().createElement("button", {
                            onClick: function() {
                                return d(!0)
                            },
                            className: oe + " smhc-btn-arrow smhc-link",
                            type: "button"
                        }, h())), O && c().createElement("a", {
                            className: "smhc-link",
                            href: a,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, b())))))
                    }, n
                }(c().PureComponent),
                le = t(7669),
                pe = {
                    onSetProductQuantity: t(3137).D7
                },
                de = (0, o.qC)((0, i.i)((function() {
                    return {
                        getTranslationConfirmButtonLabel: "search_bundle.search_widget.passengers.popup.btn.confirm",
                        getTranslationDiscountsShow: "search_bundle.search_widget.passengers.popup.btn.social_show",
                        getTranslationDiscountsBack: "search_bundle.search_widget.passengers.popup.btn.social_hide",
                        getTranslationDiscountsInfo: "search_bundle.search_widget.passengers.popup.link.social_info"
                    }
                }), !0), (0, o.xJ)("isExtendedVisible", "setExtendedVisible", !1), (0, r.$j)((function(e) {
                    return {
                        selectedProducts: (0, m.Fd)(e),
                        products: (0, m.n4)(e),
                        extendedProducts: (0, m.Z6)(e),
                        showExtendedProductsInfo: (0, m.nq)(e),
                        variant: (0, m.xp)(e)
                    }
                }), pe), (0, o.t3)((function() {
                    return {
                        isOpen: !1
                    }
                }), {
                    open: function() {
                        return function() {
                            return {
                                isOpen: !0
                            }
                        }
                    },
                    close: function() {
                        return function() {
                            return {
                                isOpen: !1
                            }
                        }
                    }
                }), o.A$, (0, o.vl)((function(e) {
                    var n = e.isOpen,
                        t = e.open,
                        r = e.extendedProducts;
                    return {
                        open: function() {
                            n || (0, s.oV)(le.mK), t()
                        },
                        hasExtendedProducts: Object.keys(r).length > 0,
                        onPopupClosed: function() {
                            (0, s.GT)("products")
                        }
                    }
                })))(ue)
        }
    }
]);
//# sourceMappingURL=715.1d9750e8.js.map