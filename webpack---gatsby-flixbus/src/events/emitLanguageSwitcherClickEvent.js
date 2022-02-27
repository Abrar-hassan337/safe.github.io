import {
    getEventEmitter
} from "@flixbus/transclusion-eventing"
import {
    CLICKED,
    NAVIGATION_MENUS
} from "./identifiers"

export const EVENT_LANGUAGE_SWITCHER = `${NAVIGATION_MENUS}.language_switcher.${CLICKED}`

/**
 * @param {string} domainLangcode - Name of domain langcode
 */
export const emitLanguageSwitcherClickEvent = (domainLangcode) => {
    getEventEmitter().emit(EVENT_LANGUAGE_SWITCHER, {
        domainLangcode,
    })
}