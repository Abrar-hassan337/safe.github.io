import React, {
    useContext
} from "react"
import {
    Grid,
    GridCol,
    Heading
} from "@flixbus/honeycomb-react"

import {
    AppContext
} from "../../../store"
import {
    BASE_CDN_URL
} from "../../../constants"
import * as css from "./social.module.scss"
import {
    emitFooterNavigationClickEvent
} from "../../../events"

const Social = ({
    content
}) => {
    const {
        translations,
        langcode
    } = useContext(AppContext)

    const icons = {
        facebook: `${BASE_CDN_URL}/footer/facebook.svg`,
        instagram: `${BASE_CDN_URL}/footer/insta.svg`,
        linkedin: `${BASE_CDN_URL}/footer/linkedin.svg`,
        youtube: `${BASE_CDN_URL}/footer/youtube.svg`,
        twitter: `${BASE_CDN_URL}/footer/twitter.svg`,
    }
    const playStore = `${BASE_CDN_URL}/footer/googleplay.svg`

    const appStore = `${BASE_CDN_URL}/footer/appstore.svg`

    const getIcon = (name) =>
        icons[Object.keys(icons).filter((x) => name ? .indexOf(x) > -1)[0]]

    const getName = (name) =>
        Object.keys(icons).filter((x) => name ? .indexOf(x) > -1)[0]

    const renderLinks = (links) =>
        Object.keys(links).map((x) => {
            if (["footer_adjustlink", "__typename"].indexOf(x) > -1) {
                return ""
            }
            if (["smart_app_banner_adjustlink_ios", "__typename"].indexOf(x) > -1) {
                return ""
            }
            return ( <
                a href = {
                    links[x]
                }
                key = {
                    x
                } >
                <
                img alt = {
                    x
                }
                className = {
                    `lazyload ${css.image}`
                }
                data - src = {
                    getIcon(links[x])
                }
                onClick = {
                    () =>
                    emitFooterNavigationClickEvent(getName(links[x]), "Social")
                }
                /> <
                /a>
            )
        })

    return ( <
        Grid > {
            langcode !== "tr" && ( <
                GridCol size = {
                    12
                }
                sm = {
                    6
                }
                xl = {
                    3
                } >
                <
                Heading size = {
                    4
                }
                extraClasses = {
                    css.title
                } >
                Flix App <
                /Heading> <
                a onClick = {
                    () => emitFooterNavigationClickEvent("app", "Social")
                }
                href = {
                    content.footer_adjustlink
                }
                className = {
                    css.appLinksContainer
                } >
                <
                img alt = "android store img"
                className = {
                    `lazyload ${css.appLink}`
                }
                data - src = {
                    playStore
                }
                /> <
                img alt = "app store img"
                className = {
                    `lazyload ${css.appLink}`
                }
                data - src = {
                    appStore
                }
                /> <
                /a> <
                /GridCol>
            )
        } <
        GridCol size = {
            12
        }
        sm = {
            6
        }
        xl = {
            3
        }
        pushSm = {
            langcode === "tr" ? 6 : 0
        }
        pushXl = {
            langcode === "tr" ? 9 : 6
        } >
        <
        Heading size = {
            4
        }
        extraClasses = {
            css.title
        } > {
            translations.footer_social_media_byline
        } <
        /Heading> <
        div className = {
            css.social
        } > {
            renderLinks(content)
        } < /div> <
        /GridCol> <
        /Grid>
    )
}

export default Social