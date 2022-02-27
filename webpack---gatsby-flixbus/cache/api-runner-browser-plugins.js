module.exports = [{
    plugin: require('../node_modules/@wardpeet/gatsby-plugin-static-site/gatsby-browser.js'),
    options: {
        "plugins": []
    },
}, {
    plugin: require('../node_modules/gatsby-plugin-asset-path/gatsby-browser.js'),
    options: {
        "plugins": []
    },
}, {
    plugin: require('../gatsby-browser.js'),
    options: {
        "plugins": []
    },
}]