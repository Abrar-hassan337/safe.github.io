import React from "react"

import Links from "./Links"
import Social from "./Social"
import Legal from "./Legal"

import * as css from "./footer.module.scss"

const Footer = ({
    footerMenu,
    socialLinks,
    flixBrands,
    copyright,
    legalMenu,
}) => {
    return ( <
        >
        <
        footer className = {
            css.container
        }
        data - testid = "footer" >
        <
        div className = {
            css.sizer
        }
        data - testid = "footer-links" >
        <
        Links content = {
            footerMenu
        }
        /> <
        /div> <
        div className = {
            css.sizer
        }
        data - testid = "footer-social" >
        <
        Social content = {
            socialLinks
        }
        /> <
        /div> <
        div className = {
            css.separator
        }
        /> <
        div className = {
            `${css.sizer} ${css.last}`
        }
        data - testid = "footer-legal" >
        <
        Legal flixBrands = {
            flixBrands
        }
        copyright = {
            copyright
        }
        legalMenu = {
            legalMenu
        }
        /> <
        /div> <
        /footer> <
        />
    )
}

export default Footer