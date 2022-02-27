import React, {
    useContext
} from "react"

import {
    HeaderNavigation
} from "@flixbus/honeycomb-react"

import LanguageSwitcherItem from "./LanguageSwitcherItem"
import {
    emitLanguageSwitcherClickEvent
} from "../../events"
import {
    AppContext
} from "../../store"

import * as css from "./languageSwitcher.module.scss"

const LanguageSwitcher = ({
    items,
    langcode,
    domains,
    hiddenMd
}) => {
    const {
        project
    } = useContext(AppContext)
    const langMenuItems = [{}]
    let currentLangName = ""

    items.sort(function(a, b) {
        var lanA = a.langcode.toLowerCase()
        var lanB = b.langcode.toLowerCase()
        return lanA < lanB ? -1 : lanA > lanB ? 1 : 0
    })

    langMenuItems[0].children = items.map((lang) => {
        if (lang.langcode === langcode) {
            currentLangName = lang.name
        }

        return {
            content: ( <
                LanguageSwitcherItem languageName = {
                    lang.name
                }
                langcode = {
                    lang.langcode
                }
                borderClass = {
                    css.borderDropdown
                }
                emitClickEvent = {
                    () => emitLanguageSwitcherClickEvent(lang.langcode)
                }
                />
            ),
            href: `https://${
        domains.find((domain) => domain.langcode === lang.langcode).name
      }/?noRedirect=true`,
            current: lang.langcode === langcode,
            key: lang.langcode,
        }
    })

    // Parent Item
    langMenuItems[0].content = ( <
        LanguageSwitcherItem languageName = {
            currentLangName
        }
        langcode = {
            langcode
        }
        borderClass = {
            css.borderDropdownWhite
        }
        />
    )

    return ( <
        HeaderNavigation navigation = {
            langMenuItems
        }
        extraClasses = {
            `${project === "flixtrain" ? css.listTrain : css.list} ${
        hiddenMd ? css.hiddenMd : ""
      }`
        }
        />
    )
}

export default LanguageSwitcher