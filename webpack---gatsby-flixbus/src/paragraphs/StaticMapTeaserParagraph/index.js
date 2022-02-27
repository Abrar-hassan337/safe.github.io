import React from "react"
import {
    Text
} from "@flixbus/honeycomb-react"

import * as styles from "./StaticMapTeaserParagraph.module.scss"

const StaticMapTeaserParagraph = ({
    content: {
        staticMapTeaser,
        body
    }
}) => {
    return ( <
        section id = "train-teaser-component"
        className = {
            styles.wrapper
        }
        data - testid = "static-map-teaser" >
        <
        div className = {
            styles.container
        } >
        <
        div className = {
            styles.imageContainer
        } >
        <
        img data - src = {
            staticMapTeaser[0].url
        }
        data - srcset = {
            staticMapTeaser[0].sources[0].srcset
        }
        sizes = {
            staticMapTeaser[0].sources[0].sizes
        }
        className = {
            `${styles.image} lazyload lazy-blur`
        }
        alt = "" /
        >
        <
        /div> <
        div className = {
            styles.textContainer
        } >
        <
        div className = {
            styles.text
        } >
        <
        div className = {
            styles.brandImages
        } >
        <
        img className = {
            `lazyload ${styles.brandImage}`
        }
        data - src = "https://cdn-cf.cms.flixbus.com/drupal-assets/flixbus_color.svg"
        alt = "flixbus" /
        >
        <
        img className = {
            `lazyload ${styles.brandImage}`
        }
        data - src = "https://cdn-cf.cms.flixbus.com/drupal-assets/flixtrain_color.svg"
        alt = "flixbus" /
        >
        <
        /div> <
        Text Elem = "div"
        dangerouslySetInnerHTML = {
            {
                __html: body
            }
        }
        /> <
        /div> <
        /div> <
        /div> <
        /section>
    )
}

export default StaticMapTeaserParagraph