import React from "react"
import {
    PageContainer,
    Heading,
    Text,
    Button
} from "@flixbus/honeycomb-react"
import {
    emitLongTermInfoBoxClickEvent
} from "../../events"
import * as styles from "./LongTermInfoBoxParagraph.module.scss"

const LongTermInfoBoxParagraph = ({
    content: {
        longTermInfoBoxHeadline,
        longTermInfoBoxContent,
        longTermInfoBoxLink,
    },
}) => {
    return longTermInfoBoxHeadline !== null ? ( <
        div className = "longterm-infobox" >
        <
        PageContainer >
        <
        a className = {
            styles.anchor
        }
        href = {
            longTermInfoBoxLink.url
        }
        onClick = {
            () => emitLongTermInfoBoxClickEvent()
        } >
        <
        div className = {
            styles.container
        } >
        <
        div className = {
            styles.textContainer
        } >
        <
        Heading size = {
            4
        }
        extraClasses = {
            styles.title
        } > {
            longTermInfoBoxHeadline
        } <
        /Heading> <
        Text small extraClasses = {
            styles.text
        } > {
            longTermInfoBoxContent
        } <
        /Text> <
        /div> <
        div >
        <
        Button display = "square"
        Elem = "a"
        link href = {
            longTermInfoBoxLink.url
        } >
        <
        flix - icon name = "arrow-right"
        size = "md" > < /flix-icon> <
        /Button> <
        /div> <
        /div> <
        /a> <
        /PageContainer> <
        /div>
    ) : null
}

export default LongTermInfoBoxParagraph