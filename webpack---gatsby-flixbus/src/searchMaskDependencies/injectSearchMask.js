const loadSearchMask = async (locale, departure, arrival, shopData) => {
    const url = process.env.SEARCH_MASK_URL
    const shopUrl = shopData.shop_url
    let scripts = []
    let styles = []
    const manifest = await fetch(`${url}asset-manifest.json`).then(x => x.json())

    const initialSearchMaskValues = {
        departureCity: departure,
        arrivalCity: arrival,
    }

    scripts = scripts.concat(
        (() => {
            const s = document.createElement("script")

            s.type = "text/javascript"
            s.onload = () => {
                window.mountSearchMask(
                    locale,
                    initialSearchMaskValues.departureCity,
                    initialSearchMaskValues.arrivalCity,
                    shopUrl,
                )
            }
            s.src = `${url}${manifest["main_cms.js"]}`
            return s
        })()
    )

    styles = styles.concat(
        (() => {
            const s = document.createElement("link")
            s.type = "text/css"
            s.rel = "stylesheet"
            s.onload = () => {
                window.SEARCH_MASK_STYLES_LOADED = true
            }
            s.onerror = () => {
                window.SEARCH_MASK_STYLES_LOADED = true
            }
            s.href = `${url}${manifest["main_cms.css"]}`

            return s
        })()
    )

    return {
        styles,
        scripts,
    }
}

export const injectSearchMask = async (locale, departure, arrival, shopData) => {
    const {
        styles,
        scripts
    } = await loadSearchMask(locale, departure, arrival, shopData)

    styles.forEach(x => document.head.appendChild(x))
    scripts.forEach(x => document.body.appendChild(x))
}