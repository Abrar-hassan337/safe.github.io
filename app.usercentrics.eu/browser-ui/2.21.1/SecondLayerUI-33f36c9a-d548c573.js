import {
    a5 as a,
    a6 as s,
    q as e,
    z as o
} from "./index.module.js";
var i = function(s) {
        this.isOverlayEnabled = a(s)
    },
    n = function(a) {
        var i, n;
        this.isOverlayEnabled = s(a), this.showCategoriesTab = e(a.secondLayer.tabsCategoriesIsEnabled, !0), this.showServicesTab = e(a.secondLayer.tabsServicesIsEnabled, !0), this.tabColor = e(o(null === (n = null === (i = a.customization) || void 0 === i ? void 0 : i.color) || void 0 === n ? void 0 : n.secondLayerTab), null)
    };
export {
    i,
    n as t
};