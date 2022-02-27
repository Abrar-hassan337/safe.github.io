import React from "react"

import {
    Divider,
    Grid,
    GridCol,
    PageContainer
} from "@flixbus/honeycomb-react"
import {
    emitServiceMenuClickEvent
} from "../../events"

import * as css from "./serviceMenu.module.scss"

const ServiceMenu = ({
    content
}) => {
    return ( <
        > {
            content ? ( <
                >
                <
                PageContainer extraClasses = {
                    css.container
                } >
                <
                Grid > {
                    content.map(({
                        icon,
                        link
                    }, i) => ( <
                        GridCol key = {
                            `${icon}-${i}`
                        }
                        size = {
                            4
                        }
                        extraClasses = {
                            css.col
                        } >
                        <
                        a data - testid = {
                            `service-menu-${i}`
                        }
                        href = {
                            link.url
                        }
                        className = {
                            css.item
                        }
                        onClick = {
                            () => emitServiceMenuClickEvent(link.text)
                        } >
                        <
                        flix - icon name = {
                            icon
                        }
                        size = "lg" > < /flix-icon> <
                        span className = {
                            css.text
                        } > {
                            link.text
                        } < /span> <
                        /a> <
                        /GridCol>
                    ))
                } <
                /Grid> <
                /PageContainer> <
                Divider extraClasses = {
                    css.divider
                }
                /> <
                />
            ) : null
        } <
        />
    )
}

export default ServiceMenu