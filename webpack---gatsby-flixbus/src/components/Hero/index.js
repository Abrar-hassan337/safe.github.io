import React, {
    useEffect
} from "react"

import SearchMaskPlaceholder from "./SearchMaskPlaceholder"

import {
    Heading
} from "@flixbus/honeycomb-react"

import {
    injectSearchMask
} from "../../searchMaskDependencies/injectSearchMask"

import * as css from "./hero.module.scss"

const Hero = ({
    pageTitle,
    heroDesktop,
    heroTablet,
    heroMobile,
    locale,
    departure,
    arrival,
    shopData,
}) => {
    useEffect(() => {
        injectSearchMask(locale, departure, arrival, shopData)
    }, [locale, departure, arrival, shopData])

    return ( <
        div className = {
            css.container
        }
        data - testid = "hero" >
        <
        div className = {
            css.imageContainer
        } >
        <
        picture >
        <
        source srcSet = {
            heroDesktop.url
        }
        media = "(min-width: 1200px)" / >
        <
        source srcSet = {
            heroTablet.url
        }
        media = "(min-width: 600px)" / >
        <
        source srcSet = {
            heroMobile.url
        }
        media = "(max-width: 599px)" / >
        <
        img className = {
            `${css.image}`
        }
        alt = ""
        src = {
            heroMobile.url
        }
        /> <
        /picture> <
        /div> <
        div className = {
            css.content
        } >
        <
        Heading size = {
            1
        }
        extraClasses = {
            css.heading
        } > {
            pageTitle
        } <
        /Heading> <
        div className = {
            css.searchMaskWrapper
        } >
        <
        SearchMaskPlaceholder / >
        <
        div id = "search-mask-component"
        style = {
            {
                borderRadius: "5px"
            }
        }
        data - testid = "search-mask-container" /
        >
        <
        /div> <
        /div> <
        /div>
    )
}

export default Hero