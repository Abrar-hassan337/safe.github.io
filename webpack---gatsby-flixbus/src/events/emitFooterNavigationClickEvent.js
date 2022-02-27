import {
    getEventEmitter
} from "@flixbus/transclusion-eventing"
import {
    CLICKED,
    NAVIGATION_MENUS
} from "./identifiers"

export const EVENT_FOOTER_NAVIGATION = `${NAVIGATION_MENUS}.footer_navigation.${CLICKED}`

/**
 * @param {string} itemName - Name of menu item
 * @param {string} itemType - Can be "Regular", "Legal", "Social", "Brand"
 */
export const emitFooterNavigationClickEvent = (itemName, itemType) => {
    getEventEmitter().emit(EVENT_FOOTER_NAVIGATION, {
        itemName,
        itemType,
    })
}