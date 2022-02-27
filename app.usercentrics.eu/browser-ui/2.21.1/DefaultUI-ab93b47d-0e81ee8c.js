import {
    n as e,
    _ as o,
    q as n,
    z as i,
    W as r
} from "./index.module.js";
import {
    h as t,
    f as a,
    C as s
} from "./FirstLayerCustomization-a587deff-6e17254a.js";
import {
    l
} from "./ButtonsCustomization-96418a84-9a6d4e6e.js";
import {
    i as d,
    t as u
} from "./SecondLayerUI-33f36c9a-d548c573.js";
var c = function(t) {
    function c(e, c) {
        var g, v, y, L, h = t.call(this, e, c) || this,
            f = c.customization;
        return h.buttons = o(o(o({}, new l(c)), new a(c)), {
            more: {
                backgroundColor: n(i(null === (g = null == f ? void 0 : f.color) || void 0 === g ? void 0 : g.moreBtnBackground), "#0045A5"),
                textColor: n(i(null === (v = null == f ? void 0 : f.color) || void 0 === v ? void 0 : v.moreBtnText), "#FAFAFA")
            },
            save: {
                backgroundColor: i(null === (y = null == f ? void 0 : f.color) || void 0 === y ? void 0 : y.saveBtnBackground),
                textColor: i(null === (L = null == f ? void 0 : f.color) || void 0 === L ? void 0 : L.saveBtnText)
            }
        }), h.firstLayer = o(o(o({}, new d(c)), new s(c)), {
            closeOption: c.firstLayer.closeOption || null,
            hideButtonDeny: r(c.firstLayer.hideButtonDeny, !c.btnDenyIsVisible),
            hideToggles: !1,
            isCategoryTogglesEnabled: c.firstLayer.isCategoryTogglesEnabled,
            isLanguageSelectorEnabled: !r(c.firstLayer.hideLanguageSwitch, !c.showLanguageDropdown),
            showShortDescriptionOnMobile: c.bannerMobileDescriptionIsActive,
            variant: n(c.firstLayer.variant, "BANNER")
        }), h.secondLayer = o(o({}, new u(c)), {
            hideButtonDeny: r(c.secondLayer.hideButtonDeny, !c.btnDenyIsVisible),
            hideToggles: !1,
            hideTogglesForServices: n(c.secondLayer.hideTogglesForServices, !1),
            isLanguageSelectorEnabled: !r(c.secondLayer.hideLanguageSwitch, !c.showLanguageDropdown),
            side: c.secondLayer.side || "LEFT",
            variant: c.secondLayer.variant || "CENTER"
        }), h
    }
    return e(c, t), c
}(t);
export {
    c as
    default
};