import React from "react"

import {
    Grid,
    GridCol
} from "@flixbus/honeycomb-react"

import Usp from "./Usp"

import * as css from "./uspSection.module.scss"

const Usps = ({
    content,
    langcode
}) => {
    const renderBox = ({
        description,
        headline,
        icon,
        link
    }, i, length) => ( <
        GridCol size = {
            12
        }
        sm = {
            6
        }
        xl = {
            3
        }
        key = {
            headline
        } >
        <
        Usp langcode = {
            langcode
        }
        icon = {
            icon
        }
        headline = {
            headline
        }
        description = {
            description
        }
        dataTestId = {
            i
        }
        first = {
            i === 0
        }
        last = {
            i === length - 1
        }
        link = {
            link
        }
        /> <
        /GridCol>
    )

    return ( <
        div data - testid = "usps" >
        <
        div className = {
            css.container
        } >
        <
        Grid > {
            content.map((b, i) => renderBox(b, i, content.length))
        } < /Grid> <
        /div> <
        /div>
    )
}

export default Usps