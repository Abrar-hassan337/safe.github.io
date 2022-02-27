import React from "react"
import {
    Heading,
    Text
} from "@flixbus/honeycomb-react"

import * as styles from "./ExplorationMapTeaserParagraph.module.scss"
import {
    emitExplorationMapTeaserClickEvent
} from "../../events"

const ExplorationMapTeaserParagraph = ({
    content: {
        explorationMapTeaser,
        headline,
        description,
        link
    },
}) => {
    return ( <
        section id = "map-teaser-component"
        className = {
            styles.wrapper
        }
        data - testid = "exploration-map-teaser" >
        <
        a className = {
            styles.container
        }
        target = "_self"
        href = {
            link.url
        }
        onClick = {
            () => emitExplorationMapTeaserClickEvent()
        } >
        <
        img data - src = {
            explorationMapTeaser[0].url
        }
        data - srcset = {
            explorationMapTeaser[0].sources[0].srcset
        }
        sizes = {
            explorationMapTeaser[0].sources[0].sizes
        }
        className = {
            `${styles.image} lazyload lazy-blur`
        }
        alt = "" /
        >
        <
        div className = {
            styles.textInfo
        } >
        <
        Heading sectionHeader size = {
            2
        }
        extraClasses = {
            styles.title
        } > {
            headline
        } <
        /Heading> <
        Text > {
            description
        } < /Text> <
        span className = {
            `flix-btn-arrow flix-btn-arrow--strong ${styles.link}`
        } >
        {
            link.text
        } <
        /span> <
        /div> <
        /a> <
        /section>
    )
}

export default ExplorationMapTeaserParagraph