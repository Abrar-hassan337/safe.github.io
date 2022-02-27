import React from "react"
import {
    Grid,
    GridCol
} from "@flixbus/honeycomb-react"

import * as css from "./legal.module.scss"
import {
    emitFooterNavigationClickEvent
} from "../../../events"

const Legal = ({
    flixBrands,
    copyright,
    legalMenu
}) => {
    const CHARTER_IMG = "https://cdn-cf.cms.flixbus.com/drupal-assets/charter.svg"
    const FLIXTRAIN_IMG =
        "https://cdn-cf.cms.flixbus.com/drupal-assets/flixtrain_color.svg"
    const FLIXBUS_IMG =
        "https://cdn-cf.cms.flixbus.com/drupal-assets/flixbus_color.svg"
    const FLIX_IMG =
        "https://cdn-cf.cms.flixbus.com/drupal-assets/flix-logo-color.svg"

    const getBrandImg = (brand) => {
        switch (brand) {
            case "flixcharter":
                return CHARTER_IMG
            case "flixbus":
                return FLIXBUS_IMG
            case "flixtrain":
                return FLIXTRAIN_IMG
            case "flix":
                return FLIX_IMG
            default:
                return FLIXBUS_IMG
        }
    }

    const renderCopyright = (domain) =>
        Object.keys(domain).map((k) => {
            return ( <
                div className = {
                    css.copyright
                }
                key = {
                    k
                } > {
                    domain[k]
                } <
                /div>
            )
        })

    const showUsercentricCookieBox = () => {
        if (typeof window.UC_UI !== "undefined") {
            window.UC_UI.showSecondLayer()
        }
    }

    const renderLinks = (links) =>
        links.map((l, idx) => {
            return l.url.path === "/manage-consent-settings" ? ( <
                a key = {
                    idx
                }
                href = "#"
                className = {
                    css.link
                }
                onClick = {
                    () => {
                        emitFooterNavigationClickEvent(l.title, "Legal")
                        showUsercentricCookieBox()
                    }
                } >
                {
                    l.title
                } <
                /a>
            ) : ( <
                a onClick = {
                    () => emitFooterNavigationClickEvent(l.title, "Legal")
                }
                key = {
                    idx
                }
                href = {
                    l.url.path
                }
                className = {
                    css.link
                } >
                {
                    l.title
                } <
                /a>
            )
        })

    return ( <
        Grid >
        <
        GridCol size = {
            12
        }
        md = {
            4
        } >
        <
        div className = {
            css.images
        } > {
            flixBrands === null ?
            null :
                flixBrands.map((x) => {
                return ( <
                    a href = {
                        x.url
                    }
                    target = "_blank"
                    rel = "noopener noreferrer"
                    key = {
                        x.name
                    }
                    onClick = {
                        () =>
                        emitFooterNavigationClickEvent(x.name, "Brand")
                    } >
                    <
                    img className = {
                        `lazyload ${css.image}`
                    }
                    data - src = {
                        getBrandImg(x.name)
                    }
                    alt = {
                        `flixbus ${x.name}`
                    }
                    /> <
                    /a>
                )
            })
        } <
        /div> <
        /GridCol> <
        GridCol size = {
            12
        }
        md = {
            8
        } >
        <
        div className = {
            css.links
        } >
        <
        div className = {
            css.privacy
        } > {
            renderLinks(legalMenu.items)
        } < /div> {
            renderCopyright(copyright)
        } <
        /div> <
        /GridCol> <
        /Grid>
    )
}

export default Legal