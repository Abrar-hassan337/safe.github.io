import React from "react"

import {
    FooterNav,
    Grid,
    GridCol
} from "@flixbus/honeycomb-react"
import {
    emitFooterNavigationClickEvent
} from "../../../events"

const Links = ({
    content
}) => {
    const nav = () => {
        const convert = (n) => ({
            text: n.title,
            href: n.url.path,
        })

        return content.items.map((x, i) => ({
            title: x.title,
            href: x.url.path,
            first: i === 0,
            children: x.children.length > 0 ? x.children.map((y) => convert(y)) : null,
        }))
    }

    const renderLinks = (x) =>
        x.map((c) => {
            return (
                c.children !== null && ( <
                    GridCol key = {
                        c.title
                    }
                    size = {
                        12
                    }
                    sm = {
                        6
                    }
                    xl = {
                        3
                    } >
                    <
                    FooterNav content = {
                        c
                    }
                    /> <
                    /GridCol>
                )
            )
        })

    return <Grid > {
        renderLinks(nav())
    } < /Grid>
}

export default Links