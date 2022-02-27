import React from "react"
import {
    Skeleton
} from "@flixbus/honeycomb-react"

import * as css from "./searchMaskPlaceholder.module.scss"

const SearchMaskPlaceholder = () => ( <
    div id = "search-mask-placeholder"
    className = {
        css.container
    }
    data - testid = "search-mask-placeholder" >
    <
    div className = {
        css.big
    } >
    <
    Skeleton width = "lg"
    height = "lg"
    extraClasses = {
        css.hiddenXs
    }
    /> <
    Skeleton width = "md"
    height = "sm"
    extraClasses = {
        css.hiddenXs
    }
    /> <
    Skeleton width = "lg"
    height = "lg"
    extraClasses = {
        css.lg
    }
    /> <
    /div> <
    div className = {
        css.big
    } >
    <
    Skeleton width = "lg"
    height = "lg"
    extraClasses = {
        css.hiddenXs
    }
    /> <
    Skeleton width = "md"
    height = "sm"
    extraClasses = {
        css.hiddenXs
    }
    /> <
    Skeleton width = "lg"
    height = "lg"
    extraClasses = {
        css.lg
    }
    /> <
    /div> <
    div className = {
        css.small
    } >
    <
    Skeleton width = "md"
    height = "md"
    extraClasses = {
        css.hiddenXs
    }
    /> <
    Skeleton width = "lg"
    height = "lg"
    extraClasses = {
        css.lg
    }
    /> <
    /div> <
    div className = {
        css.small
    } >
    <
    Skeleton width = "md"
    height = "md"
    extraClasses = {
        css.hiddenXs
    }
    /> <
    Skeleton width = "lg"
    height = "lg"
    extraClasses = {
        css.lg
    }
    /> <
    /div> <
    div className = {
        css.medium
    } >
    <
    Skeleton width = "md"
    height = "md"
    extraClasses = {
        css.hiddenXs
    }
    /> <
    Skeleton width = "lg"
    height = "lg"
    extraClasses = {
        css.lg
    }
    /> <
    /div> <
    div className = {
        css.button
    } >
    <
    Skeleton height = "lg" / >
    <
    /div> <
    /div>
)

export default SearchMaskPlaceholder