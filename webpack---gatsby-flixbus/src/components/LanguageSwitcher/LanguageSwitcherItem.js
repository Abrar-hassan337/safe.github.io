import React, {
    useContext
} from "react"

import {
    BASE_CDN_URL
} from "../../constants"

import {
    AppContext
} from "../../store"

import * as css from "./languageSwitcher.module.scss"

const LanguageSwitcherItem = ({
    languageName,
    langcode,
    borderClass,
    emitClickEvent,
}) => {
    const {
        project
    } = useContext(AppContext)
    const earthLangcode = project === "flixbus" ? "en-gl" : "en-us"
    const icon = langcode === earthLangcode ? "earth" : langcode

    return ( <
        span onClick = {
            emitClickEvent
        } >
        <
        img className = {
            `${css.flag} ${borderClass} lazyload fade`
        }
        alt = {
            `${languageName} flag`
        }
        src = ""
        data - src = {
            `${BASE_CDN_URL}/language-icons/flags--${icon}.svg`
        }
        data - expand = "-10" /
        >
        <
        div > {
            languageName
        } < /div> <
        /span>
    )
}

export default LanguageSwitcherItem