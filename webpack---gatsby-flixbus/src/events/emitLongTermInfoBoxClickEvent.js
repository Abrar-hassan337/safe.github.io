import {
    getEventEmitter
} from "@flixbus/transclusion-eventing"
import {
    CLICKED,
    HOMEPAGE
} from "./identifiers"

export const EVENT_LONG_TERM_INFO_BOX = `${HOMEPAGE}.long_term_info_box.${CLICKED}`

export const emitLongTermInfoBoxClickEvent = () => {
    getEventEmitter().emit(EVENT_LONG_TERM_INFO_BOX)
}