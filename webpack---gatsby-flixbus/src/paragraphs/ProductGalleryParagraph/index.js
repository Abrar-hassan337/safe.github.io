import React from "react"

import {
    Grid,
    GridCol,
    Heading,
    PageContainer,
    Text,
} from "@flixbus/honeycomb-react"

import * as css from "./ProductGalleryParagraph.module.scss"

const ProductGalleryParagraph = ({
    content: {
        alt1,
        alt2,
        alt3,
        body,
        headline,
        image1,
        image2,
        image3
    },
}) => {
    return ( <
        PageContainer >
        <
        section className = {
            css.wrapper
        }
        data - testid = "product-gallery" >
        <
        Heading size = {
            2
        } > {
            headline
        } < /Heading> <
        Text Elem = "div"
        dangerouslySetInnerHTML = {
            {
                __html: body
            }
        }
        /> <
        Grid >
        <
        GridCol size = {
            12
        }
        sm = {
            6
        } >
        <
        img alt = {
            alt1
        }
        className = {
            `${css.image} ${css.imageLeft} lazyload`
        }
        data - src = {
            image1[0].url
        }
        /> <
        /GridCol> <
        GridCol size = {
            12
        }
        sm = {
            6
        } >
        <
        Grid >
        <
        GridCol size = {
            12
        } >
        <
        img alt = {
            alt2
        }
        className = {
            `${css.image} ${css.imageRight} lazyload`
        }
        data - src = {
            image2[0].url
        }
        /> <
        /GridCol> <
        GridCol size = {
            12
        } >
        <
        img alt = {
            alt3
        }
        className = {
            `${css.image} ${css.imageRight} ${css.bottom} lazyload`
        }
        data - src = {
            image3[0].url
        }
        /> <
        /GridCol> <
        /Grid> <
        /GridCol> <
        /Grid> <
        /section> <
        /PageContainer>
    )
}

export default ProductGalleryParagraph