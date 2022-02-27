import React, {
    useState,
    useEffect,
    useContext
} from "react"

import {
    Header,
    HeaderUserWidget
} from "@flixbus/honeycomb-react"
import {
    emitMainNavigationClickEvent
} from "../../events"

import LanguageSwitcher from "../LanguageSwitcher"

import {
    AppContext
} from "../../store"
import {
    BASE_CDN_URL
} from "../../constants"

import * as css from "./header.module.scss"

const HeaderComponent = ({
    navigation,
    languageSwitcher,
    domains,
    shopData,
}) => {
    const {
        langcode,
        project
    } = useContext(AppContext)

    const [mobileMenuVisible, setMobileMenuVisible] = useState(false)

    const brandAltMap = {
        flixbus: "FlixBus",
        flixtrain: "FlixTrain",
        flix: "Flix",
        kamil: "Kamil Koç",
    }

    const brand = {
        alt: langcode === "tr" ? brandAltMap["kamil"] : brandAltMap[project],
        image: langcode === "tr" ?
            `${BASE_CDN_URL}/logos/kamilkoc.svg` :
            `${BASE_CDN_URL}/logos/${project}.svg`,
        href: "/",
        onClick: () => emitMainNavigationClickEvent("Logo"),
    }

    const nav = () => {
        const convert = (n) => ({
            content: n.title,
            href: n.url.path,
            onClick: () => emitMainNavigationClickEvent(n.title),
        })

        return navigation.items.map((x) => ({
            ...convert(x),
            children: x.children.length > 0 ? x.children.map((y) => convert(y)) : null,
        }))
    }

    useEffect(() => {
        if (mobileMenuVisible) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [mobileMenuVisible])

    return ( <
        Header extraClasses = {
            `${css.header} ${langcode === "tr" ? css.kamil : ""}`
        }
        fixed = {
            false
        }
        brand = {
            brand
        }
        navigation = {
            nav()
        }
        widget = { <
            >
            <
            LanguageSwitcher
            langcode = {
                langcode
            }
            items = {
                languageSwitcher
            }
            domains = {
                domains
            }
            hiddenMd /
            >
            <
            HeaderUserWidget
            url = {
                `${shopData.shop_url}${shopData.shop_login_path}`
            }
            text = "" /
            >
            <
            />
        }
        mobileWidget = { <
            LanguageSwitcher
            langcode = {
                langcode
            }
            items = {
                languageSwitcher
            }
            domains = {
                domains
            }
            />
        }
        stickyWidget menuVisible = {
            mobileMenuVisible
        }
        toggleMenu = {
            () => setMobileMenuVisible((prev) => !prev)
        }
        />
    )
}

export default HeaderComponent