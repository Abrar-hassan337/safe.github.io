// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
    "component---src-templates-flix-home-b-js": () =>
        import ("./../../../src/templates/flix_homeB.js" /* webpackChunkName: "component---src-templates-flix-home-b-js" */ ),
    "component---src-templates-flix-home-c-js": () =>
        import ("./../../../src/templates/flix_homeC.js" /* webpackChunkName: "component---src-templates-flix-home-c-js" */ ),
    "component---src-templates-flix-home-js": () =>
        import ("./../../../src/templates/flix_home.js" /* webpackChunkName: "component---src-templates-flix-home-js" */ )
}