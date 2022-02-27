import {
    l as t,
    u as e,
    y as n
} from "./index.module.js";
var o = function() {
    function o() {
        this.apiInstance = n.getInstance()
    }
    return o.prototype.getTargets = function(n) {
        var o = this;
        return n.reduce((function(n, r) {
            if ("mark" !== r.entryType && "measure" !== r.entryType && "paint" !== r.entryType) {
                var i = r.name,
                    a = o.extractSubdomain(i);
                if (-1 === n.indexOf(a)) return t(t([], e(n), !1), [a], !1)
            }
            return n
        }), [])
    }, o.prototype.initTagLogger = function() {
        var t = this;
        window.addEventListener("beforeunload", (function() {
            document.addEventListener("visibilitychange", (function() {
                "hidden" === document.visibilityState && t.updateLog()
            }))
        }))
    }, o.prototype.extractSubdomain = function(t) {
        var e, n = t.split("/");
        return t.indexOf("://") > -1 ? (e = "".concat(n[2]), n[3] && (e += "/".concat(n[3]))) : (e = "".concat(n[0]), n[1] && (e += "/".concat(n[1]))), "".concat(e.split("?")[0])
    }, o.prototype.updateLog = function() {
        if (Object.prototype.hasOwnProperty.call(window, "performance") && "function" == typeof performance.getEntries) {
            var t = window.performance.getEntries();
            this.apiInstance.updateTagLoggerData(this.getTargets(t))
        } else console.log("UC Warning: tag logger functionality is not supported by your browser.")
    }, o
}();
export {
    o as
    default
};