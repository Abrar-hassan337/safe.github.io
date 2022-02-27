import {
    getEventEmitter
} from "@flixbus/transclusion-eventing"
import {
    CLICKED,
    NAVIGATION_MENUS
} from "./identifiers"

export const EVENT_MAIN_NAVIGATION = `${NAVIGATION_MENUS}.main_navigation.${CLICKED}`

/**
 * @param {string} itemName - Name of menu item
 */
export const emitMainNavigationClickEvent = (itemName) => {
    getEventEmitter().emit(EVENT_MAIN_NAVIGATION, {
        itemName,
    })
}