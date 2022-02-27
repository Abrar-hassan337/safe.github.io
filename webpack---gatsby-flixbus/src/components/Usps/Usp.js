import React from "react"
import classnames from "classnames"

import {
    Heading,
    Text
} from "@flixbus/honeycomb-react"

import * as css from "./usp.module.scss"

const Usp = ({
    icon,
    headline,
    description,
    first,
    last,
    link,
    langcode,
    dataTestId
}) => {

    return ( <
        div className = {
            classnames(
                css.container,
                first ? css.first : "",
                last ? css.last : ""
            )
        }
        data - testid = {
            dataTestId
        } >
        <
        div className = {
            css.iconContainer
        } >
        <
        flix - icon name = {
            icon
        }
        size = "lg"
        color = {
            langcode === "tr" ? "primary-icon-color" : "primary"
        }
        /> <
        /div> <
        div className = {
            css.textContainer
        } >
        <
        Heading size = {
            4
        }
        extraClasses = {
            css.title
        } > {
            headline
        } <
        /Heading> <
        Text Elem = "div"
        className = {
            css.text
        } > {
            description
        } <
        /Text> {
            link.url ? ( <
                a className = {
                    `flix-btn-arrow flix-btn-arrow--strong ${css.link}`
                }
                href = {
                    link.url
                } >
                {
                    link.text
                } <
                /a>
            ) : null
        } <
        /div> <
        /div>
    )
}

export default Usp