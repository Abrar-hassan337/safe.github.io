import {
    r as i,
    g as r,
    h as s,
    H as t
} from "./p-af1e4393.js";
const e = i => "string" == typeof i,
    l = i => {
        if (1 === i.nodeType) {
            if ("script" === i.nodeName.toLowerCase()) return !1;
            for (let r = 0; r < i.attributes.length; r++) {
                const s = i.attributes[r].value;
                if (e(s) && 0 === s.toLowerCase().indexOf("on")) return !1
            }
            for (let r = 0; r < i.childNodes.length; r++)
                if (!l(i.childNodes[r])) return !1
        }
        return !0
    },
    o = new Map,
    n = new Map,
    c = class {
        constructor(r) {
            i(this, r)
        }
        loadIcon() {
            {
                const i = this.src ? this.src : this.name ? r(`./svg/${this.getName(this.name,this.solid)}.svg`) : void 0;
                i && (o.has(i) ? this.svgContent = o.get(i) : ((i, r) => {
                    let s = n.get(i);
                    if (!s) {
                        if ("undefined" == typeof fetch || "undefined" == typeof document) return o.set(i, ""), Promise.resolve();
                        s = fetch(i).then((s => {
                            if (s.ok) return s.text().then((s => {
                                s && !1 !== r && (s = (i => {
                                    const r = document.createElement("div");
                                    r.innerHTML = i;
                                    for (let i = r.childNodes.length - 1; i >= 0; i--) "svg" !== r.childNodes[i].nodeName.toLowerCase() && r.removeChild(r.childNodes[i]);
                                    const s = r.firstElementChild;
                                    if (s && "svg" === s.nodeName.toLowerCase()) {
                                        const i = s.getAttribute("class") || "";
                                        if (s.setAttribute("class", (i + " flix-icon").trim()), l(s)) return r.innerHTML
                                    }
                                    return ""
                                })(s)), o.set(i, s || "")
                            }));
                            o.set(i, "")
                        })), n.set(i, s)
                    }
                    return s
                })(i, !!this.src).then((() => this.svgContent = o.get(i))))
            }!this.ariaLabel && "true" !== this.ariaHidden && this.name && (this.ariaLabel = this.name.replace(/\-/g, " "))
        }
        render() {
            return s(t, {
                role: "img"
            }, s("div", this.svgContent ? {
                class: Object.assign(Object.assign({
                    inner: !0
                }, this.createColorClasses(this.color)), this.createSizeClasses(this.size)),
                innerHTML: this.svgContent
            } : {
                class: Object.assign(Object.assign({
                    inner: !0
                }, this.createColorClasses(this.color)), this.createSizeClasses(this.size))
            }))
        }
        connectedCallback() {
            this.loadIcon()
        }
        getName(i, r) {
            const s = i.replace("flix-icon-", "").replace("-solid", "").trim().toLocaleLowerCase();
            return r ? `${s}-solid` : s
        }
        createSizeClasses(i) {
            return {
                size: !0,
                [`size-${i}`]: !!i
            }
        }
        createColorClasses(i) {
            return {
                color: !0,
                [`color-${i}`]: !!i
            }
        }
        static get assetsDirs() {
            return ["svg"]
        }
        static get watchers() {
            return {
                name: ["loadIcon"],
                src: ["loadIcon"]
            }
        }
    };
c.style = ":host{display:inline-block;vertical-align:middle}.inner,svg{display:block;max-width:100%}.size{height:1.2em;width:1.2em}.size-xs{height:var(--flix-spacing-xs, 12px);width:var(--flix-spacing-xs, 12px)}.size-sm{height:20px;width:20px}.size-md{height:var(--flix-spacing-sm, 24px);width:var(--flix-spacing-sm, 24px)}.size-lg{height:var(--flix-spacing-md, 36px);width:var(--flix-spacing-md, 36px)}.size-cover{height:var(--flix-spacing-lg, 48px);width:var(--flix-spacing-lg, 48px)}.color{fill:currentColor}.color-primary{fill:var(--flix-primary-ui-color, #73d700)}.color-secondary{fill:var(--flix-secondary-ui-color, #ffad00)}.color-neutral{fill:var(--flix-neutral-color, #00b5e2)}.color-success{fill:var(--flix-success-color, #73d700)}.color-warning{fill:var(--flix-warning-color, #ffad00)}.color-danger{fill:var(--flix-danger-color, #ff5700)}.color-primary-content{fill:var(--flix-primary-content-color, #444)}.color-secondary-content{fill:var(--flix-secondary-content-color, #757575)}";
export {
    c as flix_icon
}