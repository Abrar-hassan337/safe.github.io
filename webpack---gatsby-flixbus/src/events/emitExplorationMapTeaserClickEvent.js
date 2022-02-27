import {
    getEventEmitter
} from "@flixbus/transclusion-eventing"
import {
    CLICKED,
    HOMEPAGE
} from "./identifiers"

export const EVENT_EXPLORATION_MAP_TEASER = `${HOMEPAGE}.exploration_map_teaser.${CLICKED}`

export const emitExplorationMapTeaserClickEvent = () => {
    getEventEmitter().emit(EVENT_EXPLORATION_MAP_TEASER)
}