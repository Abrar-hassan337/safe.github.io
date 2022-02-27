import React, {
    useState
} from "react"

import {
    Heading,
    PageContainer,
    Text
} from "@flixbus/honeycomb-react"

import * as styles from "./emergencyBox.module.scss"

const EmergencyBox = ({
    message,
    headline
}) => {
    const [expanded, setExpanded] = useState(false)

    return ( <
        div className = "emergency-box" >
        <
        PageContainer >
        <
        div className = {
            styles.container
        } >
        <
        div className = {
            styles.textContainer
        } >
        <
        Heading extraClasses = {
            styles.title
        }
        size = {
            4
        } > {
            headline
        } <
        /Heading> <
        Text extraClasses = {
            [
                styles.text,
                expanded ? styles.expanded : "",
            ]
        }
        small dangerouslySetInnerHTML = {
            {
                __html: message
            }
        } >
        < /Text> <
        /div> <
        flix - icon size = "md"
        class = {
            styles.button
        }
        name = {
            expanded ? "arrow-up" : "arrow-down"
        }
        onClick = {
            () => setExpanded((v) => !v)
        } >
        < /flix-icon> <
        /div> <
        /PageContainer> <
        /div>
    )
}

export default EmergencyBox