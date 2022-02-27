import React from "react"
import {
    Text
} from "@flixbus/honeycomb-react"

import "@flixbus/honeycomb/assets/scss/components/_text.scss"

import * as css from "./RichTextParagraph.module.scss"

const RichTextParagraph = ({
    content: {
        content
    }
}) => {
    if (content === "") {
        return null
    }
    const updatedContent = content.replace(/&nbsp;/g, " ")
    return ( <
        div className = {
            css.wrapper
        }
        data - testid = "rich-text" >
        <
        div className = {
            css.container
        } >
        <
        Text Elem = "div"
        dangerouslySetInnerHTML = {
            {
                __html: updatedContent
            }
        }
        /> <
        /div> <
        /div>
    )
}

export default RichTextParagraph