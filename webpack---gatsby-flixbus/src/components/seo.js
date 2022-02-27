import React, {
    useContext
} from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import {
    AppContext
} from "../store"
import {
    DEFAULT_FLIX_DOMAIN,
    DEFAULT_LANGCODE,
    DEFAULT_TRAIN_DOMAIN,
    BASE_CDN_URL,
    DEFAULT_BUS_DOMAIN,
} from "../constants"

function Seo({
    metatags: {
        title,
        description,
        robots
    },
    hreflangs,
    domains,
    htmlLang,
    iosBanner,
}) {
    const {
        langcode,
        project,
        domain
    } = useContext(AppContext)
    const faviconFolder =
        langcode === "tr" ?
        `${BASE_CDN_URL}/favicon/kamil/` :
        `${BASE_CDN_URL}/favicon/${project}/`

    const defaultHref = () => {
        switch (project) {
            case "flix":
                return DEFAULT_FLIX_DOMAIN
            case "flixtrain":
                return DEFAULT_TRAIN_DOMAIN
            default:
                return DEFAULT_BUS_DOMAIN
        }
    }

    const getOgImage = () => {
        if (langcode === "tr") {
            return `${BASE_CDN_URL}/ogimage/kamilkoc.png`
        }
        return `${BASE_CDN_URL}/ogimage/${project}.png`
    }

    const handleHref = (item) => {
        return `https://${
      hreflangs.find((domain) => domain.langcode === item.langcode).name
    }`
    }

    return ( <
        Helmet htmlAttributes = {
            {
                lang: htmlLang,
            }
        } >
        <
        title > {
            title
        } < /title> <
        meta name = "description"
        content = {
            description
        }
        /> <
        meta name = "robots"
        content = {
            robots ? robots : "index, follow"
        }
        /> <
        link href = "https://d3k6pebee3cv6.cloudfront.net"
        rel = "preconnect" / >
        <
        link href = "https://fonts.googleapis.com"
        rel = "preconnect" / >
        <
        link rel = "canonical"
        href = {
            `https://${domain}`
        }
        /> <
        meta name = "theme-color"
        content = {
            langcode === "tr" ? "#082967" : "#73d700"
        }
        /> <
        meta name = "msapplication-TileColor"
        content = {
            langcode === "tr" ? "#082967" : "#73d700"
        }
        /> <
        meta property = "og:image"
        content = {
            getOgImage()
        }
        /> {
            langcode !== "tr" && iosBanner ? ( <
                meta name = "apple-itunes-app"
                content = {
                    `app-id=778437357, app-argument=${iosBanner}`
                }
                />
            ) : null
        } <
        link rel = "apple-touch-icon"
        sizes = "57x57"
        href = {
            `${faviconFolder}apple-icon-57x57.png`
        }
        /> <
        link rel = "apple-touch-icon"
        sizes = "60x60"
        href = {
            `${faviconFolder}apple-icon-60x60.png`
        }
        /> <
        link rel = "apple-touch-icon"
        sizes = "72x72"
        href = {
            `${faviconFolder}apple-icon-72x72.png`
        }
        /> <
        link rel = "apple-touch-icon"
        sizes = "76x76"
        href = {
            `${faviconFolder}apple-icon-76x76.png`
        }
        /> <
        link rel = "apple-touch-icon"
        sizes = "114x114"
        href = {
            `${faviconFolder}apple-icon-114x114.png`
        }
        /> <
        link rel = "apple-touch-icon"
        sizes = "120x120"
        href = {
            `${faviconFolder}apple-icon-120x120.png`
        }
        /> <
        link rel = "apple-touch-icon"
        sizes = "144x144"
        href = {
            `${faviconFolder}apple-icon-144x144.png`
        }
        /> <
        link rel = "apple-touch-icon"
        sizes = "152x152"
        href = {
            `${faviconFolder}apple-icon-152x152.png`
        }
        /> <
        link rel = "apple-touch-icon"
        sizes = "180x180"
        href = {
            `${faviconFolder}apple-icon-180x180.png`
        }
        /> <
        link rel = "icon"
        type = "image/png"
        sizes = "192x192"
        href = {
            `${faviconFolder}android-icon-192x192.png`
        }
        /> <
        link rel = "icon"
        type = "image/png"
        sizes = "32x32"
        href = {
            `${faviconFolder}favicon-32x32.png`
        }
        /> <
        link rel = "icon"
        type = "image/png"
        sizes = "96x96"
        href = {
            `${faviconFolder}favicon-96x96.png`
        }
        /> <
        link rel = "icon"
        type = "image/png"
        sizes = "16x16"
        href = {
            `${faviconFolder}favicon-16x16.png`
        }
        /> <
        meta name = "msapplication-TileImage"
        content = {
            `${faviconFolder}ms-icon-144x144.png`
        }
        /> {
            domains.map((item) => ( <
                link rel = "alternate"
                hreflang = {
                    item.langcode === DEFAULT_LANGCODE ? "x-default" : item.langcode
                }
                href = {
                    item.langcode === DEFAULT_LANGCODE ?
                    defaultHref() :
                        handleHref(item)
                }
                key = {
                    item.langcode
                }
                />
            ))
        } <
        link rel = "alternate"
        hreflang = "en"
        href = {
            defaultHref()
        }
        /> <
        link rel = "preconnect"
        href = "//fonts.gstatic.com/" / >
        <
        link rel = "preload"
        as = "style"
        href = "//fonts.googleapis.com/css?family=Roboto:400,700&subset=latin"
        crossorigin /
        >
        <
        link href = "//fonts.googleapis.com/css?family=Roboto:400,700&subset=latin"
        rel = "stylesheet"
        type = "text/css"
        crossorigin /
        >
        <
        /Helmet>
    )
}

Seo.propTypes = {
    metatags: PropTypes.object.isRequired,
    hreflangs: PropTypes.arrayOf(PropTypes.object).isRequired,
    htmlLang: PropTypes.string.isRequired,
}

export default Seo