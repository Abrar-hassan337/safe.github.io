import {
    q as o,
    C as l,
    D as i,
    z as n,
    E as r,
    S as d,
    X as t,
    N as u,
    T as a,
    $ as s,
    a0 as e,
    a1 as v,
    a2 as c,
    a3 as g,
    a4 as y
} from "./index.module.js";
var f = function(l) {
        var i = l.customization;
        this.alignment = (null == i ? void 0 : i.buttonAlignment) || g.HORIZONTAL, this.borderRadius = r(o(null == i ? void 0 : i.borderRadiusButton, "4px")), this.secondLayer = l.moreInfoButtonUrl.length > 0 ? l.moreInfoButtonUrl : null
    },
    h = function(g, y) {
        var f, h, C, m, b, k, B, p, I, L, w, A, T, U, x, z, R = y.customization;
        this.customCss = (null === (f = y.features) || void 0 === f ? void 0 : f.customCss) && y.useUnsafeCustomCss && null != y.stylesCss ? y.stylesCss : null, this.enablePrivacyButton = g.privacyButtonIsVisible, this.font = {
            family: o(null === (h = null == R ? void 0 : R.font) || void 0 === h ? void 0 : h.family, l),
            size: o(null === (C = null == R ? void 0 : R.font) || void 0 === C ? void 0 : C.size, i)
        }, this.layer = {
            backgroundColor: o(n(null === (m = null == R ? void 0 : R.color) || void 0 === m ? void 0 : m.layerBackground), "#ffffff"),
            borderRadius: r(o(null == R ? void 0 : R.borderRadiusLayer, d))
        }, this.links = {
            fontColor: o(n(null === (b = null == R ? void 0 : R.color) || void 0 === b ? void 0 : b.linkFont), "#303030"),
            iconColor: o(n(null === (k = null == R ? void 0 : R.color) || void 0 === k ? void 0 : k.linkIcon), "#595959")
        }, this.logo = {
            altTag: o(null == R ? void 0 : R.logoAltTag, null),
            position: t(y.firstLayer.logoPosition),
            url: o(null == R ? void 0 : R.logoUrl, null)
        }, this.overlay = {
            backgroundColor: o(n(null === (B = null == R ? void 0 : R.color) || void 0 === B ? void 0 : B.overlay), "#333"),
            opacity: o(null == R ? void 0 : R.overlayOpacity, u)
        }, this.poweredBy = y.enablePoweredBy ? {
            partnerUrl: y.partnerPoweredByUrl || null,
            url: a
        } : null, this.primaryColor = o(n(null === (p = null == R ? void 0 : R.color) || void 0 === p ? void 0 : p.primary), "#0045A5"), this.showCookieInformation = y.showCookieInformation, this.textColor = o(n(null === (I = null == R ? void 0 : R.color) || void 0 === I ? void 0 : I.text), "#303030"), this.theme = 1, this.toggle = {
            active: {
                backgroundColor: o(n(null === (L = null == R ? void 0 : R.color) || void 0 === L ? void 0 : L.toggleActiveBackground) || n(null === (w = null == R ? void 0 : R.color) || void 0 === w ? void 0 : w.primary), s),
                iconColor: o(n(null === (A = null == R ? void 0 : R.color) || void 0 === A ? void 0 : A.toggleActiveIcon), e)
            },
            disabled: {
                backgroundColor: o(n(null === (T = null == R ? void 0 : R.color) || void 0 === T ? void 0 : T.toggleDisabledBackground), v),
                iconColor: o(n(null === (U = null == R ? void 0 : R.color) || void 0 === U ? void 0 : U.toggleDisabledIcon), e)
            },
            inactive: {
                backgroundColor: o(n(null === (x = null == R ? void 0 : R.color) || void 0 === x ? void 0 : x.toggleInactiveBackground), c),
                iconColor: o(n(null === (z = null == R ? void 0 : R.color) || void 0 === z ? void 0 : z.toggleInactiveIcon), e)
            }
        }, this.useBackgroundShadow = o(null == R ? void 0 : R.useBackgroundShadow, !0)
    },
    C = function(l) {
        this.secondLayerTrigger = o(l.firstLayer.secondLayerTrigger, y.LINK)
    };
export {
    C,
    f,
    h
};