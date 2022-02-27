import {
    getEventEmitter
} from "@flixbus/transclusion-eventing"
import {
    CLICKED,
    HOMEPAGE
} from "./identifiers"

export const EVENT_SERVICE_MENU = `${HOMEPAGE}.service_menu.${CLICKED}`

/**
 * @param {string} itemName - Name of menu item
 */
export const emitServiceMenuClickEvent = (itemName) => {
    getEventEmitter().emit(EVENT_SERVICE_MENU, {
        itemName,
    })
}