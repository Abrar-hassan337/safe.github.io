/* eslint import/first: 0 */
require("es6-promise").polyfill()
require("isomorphic-fetch")
import React, {
    useEffect
} from "react"
import {
    ThemeWrapper
} from "@flixbus/honeycomb-react"
import {
    graphql
} from "gatsby"
import "normalize.css/normalize.css"
import "lazysizes"
import "./home.scss"

import {
    AppContextProvider
} from "../store"

import {
    integrate
} from "@flixbus/transclusion-eventing"

if (typeof window !== "undefined") {
    integrate()
}

import Hero from "../components/Hero"
import Seo from "../components/seo"

import HeaderComponent from "../components/Header"
import Footer from "../components/Footer"
import Usps from "../components/Usps"
import EmergencyMessage from "../components/EmergencyMessage"
import ServiceMenu from "../components/ServiceMenu"

import LongTermInfoBoxParagraph from "../paragraphs/LongTermInfoBoxParagraph/index"
import StaticMapTeaserParagraph from "../paragraphs/StaticMapTeaserParagraph"
import ExplorationMapTeaserParagraph from "../paragraphs/ExplorationMapTeaserParagraph"
import RichTextParagraph from "../paragraphs/RichTextParagraph"
import ProductGalleryParagraph from "../paragraphs/ProductGalleryParagraph"

import "../searchMaskDependencies"
import {
    emitABTestFlagEvent
} from "../events"

const TR_LANGCODE = "tr"

if (typeof window !== "undefined") {
    if (typeof navigator.serviceWorker !== "undefined") {
        if (navigator.serviceWorker && navigator.serviceWorker.getRegistrations) {
            navigator.serviceWorker.getRegistrations().then(function(registrations) {
                for (let registration of registrations) {
                    registration.unregister()
                }
            })
        }
    }
}

const FlixHome = ({
    data,
    pageContext
}) => {
    const {
        langcode,
        project,
        spaLang,
        htmlLang,
        domain,
        showEvent
    } =
    pageContext

    useEffect(() => {
        if (typeof window !== "undefined") {
            const s = document.createElement("script")
            const sPolyfill = document.createElement("script")
            s.type = "module"
            sPolyfill.type = "nomodule"
            s.src =
                "https://d167dmkkzosnsj.cloudfront.net/v0.0.1/flix-icons/flix-icons.esm.js"
            sPolyfill.src =
                "https://d167dmkkzosnsj.cloudfront.net/v0.0.1/flix-icons/flix-icons.js"

            document.body.appendChild(s)
            document.body.appendChild(sPolyfill)
            if (showEvent) {
                emitABTestFlagEvent(0)
            }
        }
    }, [])

    const {
        flix: {
            mainMenu,
            footerMenu,
            legalMenu,
            socialLinks,
            copyright,
            languages,
            shopData,
            flixBrands,
            hreflangs,
            nodeByAlias: {
                heroImageDesktop,
                heroImageTablet,
                heroImageMobile,
                defaultHeroImageDesktop,
                defaultHeroImageTablet,
                defaultHeroImageMobile,
                headline,
                metatags,
                arrivalCity,
                departureCity,
                longTermInfoBoxHeadline,
                longTermInfoBoxContent,
                longTermInfoBoxLink,
                usps,
                serviceMenu,
                paragraphs,
            },
        },
        flixbus: {
            translations
        },
    } = data

    const handleHeroImage = (heroImage, defaultHeroImage) => {
        if (heroImage === null) {
            if (defaultHeroImageDesktop !== null) {
                return defaultHeroImage[0]
            }
            return "https://cdn-cf.cms.flixbus.com/drupal-assets/2021-06/flixtrain-hero.jpeg"
        }
        return heroImage[0]
    }

    const contextValue = {
        domain,
        langcode,
        spaLang,
        translations,
        project,
    }

    return ( <
        ThemeWrapper theme = {
            langcode === TR_LANGCODE ? "kamil" : "default"
        } >
        <
        AppContextProvider value = {
            contextValue
        } >
        <
        Seo metatags = {
            metatags
        }
        hreflangs = {
            hreflangs
        }
        langcode = {
            langcode
        }
        domains = {
            languages
        }
        htmlLang = {
            htmlLang
        }
        iosBanner = {
            socialLinks[0].smart_app_banner_adjustlink_ios
        }
        /> <
        EmergencyMessage / > {
            longTermInfoBoxContent !== null && ( <
                LongTermInfoBoxParagraph content = {
                    {
                        longTermInfoBoxHeadline,
                        longTermInfoBoxContent,
                        longTermInfoBoxLink,
                    }
                }
                />
            )
        } <
        HeaderComponent navigation = {
            mainMenu
        }
        languageSwitcher = {
            languages
        }
        shopData = {
            shopData[0]
        }
        domains = {
            hreflangs
        }
        /> <
        main >
        <
        Hero pageTitle = {
            headline
        }
        locale = {
            spaLang
        }
        arrival = {
            arrivalCity
        }
        departure = {
            departureCity
        }
        heroDesktop = {
            handleHeroImage(
                heroImageDesktop,
                defaultHeroImageDesktop
            )
        }
        heroTablet = {
            handleHeroImage(
                heroImageTablet,
                defaultHeroImageTablet
            )
        }
        heroMobile = {
            handleHeroImage(
                heroImageMobile,
                defaultHeroImageMobile
            )
        }
        shopData = {
            shopData[0]
        }
        /> {
            serviceMenu !== null && ( <
                div className = "home-section-container" >
                <
                ServiceMenu content = {
                    serviceMenu
                }
                /> <
                /div>
            )
        } <
        Usps content = {
            usps
        }
        langcode = {
            langcode
        }
        /> {
            paragraphs.map(({
                __typename,
                id
            }, ix) => {
                switch (__typename) {
                    case "FLIX_StaticMapTeaserParagraph":
                        return ( <
                            StaticMapTeaserParagraph key = {
                                id
                            }
                            content = {
                                paragraphs[ix]
                            }
                            />
                        )
                    case "FLIX_ExplorationMapTeaserParagraph":
                        return ( <
                            ExplorationMapTeaserParagraph key = {
                                id
                            }
                            content = {
                                paragraphs[ix]
                            }
                            />
                        )
                    case "FLIX_RichTextParagraph":
                        return <RichTextParagraph key = {
                            id
                        }
                        content = {
                            paragraphs[ix]
                        }
                        />
                    case "FLIX_ProductGalleryParagraph":
                        return ( <
                            ProductGalleryParagraph key = {
                                id
                            }
                            content = {
                                paragraphs[ix]
                            }
                            />
                        )
                    default:
                        return null
                }
            })
        } <
        /main> <
        Footer footerMenu = {
            footerMenu
        }
        socialLinks = {
            socialLinks[0]
        }
        flixBrands = {
            flixBrands[0].flixBrands
        }
        copyright = {
            copyright[0]
        }
        legalMenu = {
            legalMenu
        }
        /> <
        /AppContextProvider> <
        /ThemeWrapper>
    )
}

export default FlixHome

export const query = graphql `
  query (
    $langcode: String!
    $spaLang: String!
    $project: String!
    $menu: String!
    $footer: String!
    $legal: String!
  ) {
    flixbus {
      translations(langcode: $spaLang, project: $project) {
        key
        value
      }
    }
    flix {
      mainMenu: menu(name: $menu) {
        items(language: $langcode) {
          title
          url {
            path
          }
          children {
            title
            url {
              path
            }
          }
        }
      }
      footerMenu: menu(name: $footer) {
        items(language: $langcode) {
          title
          url {
            path
          }
          children {
            title
            url {
              path
            }
          }
        }
      }
      legalMenu: menu(name: $legal) {
        items(language: $langcode) {
          title
          url {
            path
          }
        }
      }
      socialLinks: domains(language: $langcode, project: $project) {
        footer_social_facebook_link
        footer_social_instagram_link
        footer_social_youtube_link
        footer_social_linkedin_link
        footer_social_twitter_link
        footer_adjustlink
        smart_app_banner_adjustlink_ios
      }
      copyright: domains(language: $langcode, project: $project) {
        footer_copyright
      }
      shopData: domains(language: $langcode, project: $project) {
        shop_url
        shop_login_path
      }
      flixBrands: domains(language: $langcode, project: $project) {
        flixBrands {
          name
          url
        }
      }
      hreflangs: domains(project: $project) {
        hreflang
        langcode
        name
      }
      languages(project: $project) {
        name
        langcode
      }
      nodeByAlias(alias: "/home", language: $langcode, project: $project) {
        id
        domain {
          name
        }
        ... on FLIX_HomePage {
          headline
          arrivalCity
          departureCity
          metatags {
            description
            robots
            title
          }
          usps {
            description
            headline
            icon
            link {
              url
              text
            }
          }
          serviceMenu {
            icon
            id
            link {
              text
              url
            }
          }
          longTermInfoBoxHeadline
          longTermInfoBoxContent
          longTermInfoBoxLink {
            url
          }
          heroImageDesktop(style: "regular") {
            url
          }
          heroImageTablet(style: "regular") {
            url
          }
          heroImageMobile(style: "regular") {
            url
          }
          defaultHeroImageDesktop(style: "regular") {
            url
          }
          defaultHeroImageTablet(style: "regular") {
            url
          }
          defaultHeroImageMobile(style: "regular") {
            url
          }
          paragraphs {
            id
            __typename
            ... on FLIX_ExplorationMapTeaserParagraph {
              description
              headline
              link {
                url
                text
              }
              explorationMapTeaser: image(style: "exploration_map_teaser") {
                url
                sources {
                  sizes
                  srcset
                }
              }
            }
            ... on FLIX_StaticMapTeaserParagraph {
              body
              staticMapTeaser: image(style: "static_map_teaser") {
                url
                sources {
                  sizes
                  srcset
                }
              }
            }
            ... on FLIX_RichTextParagraph {
              content
            }
            ... on FLIX_ProductGalleryParagraph {
              alt1
              alt2
              alt3
              body
              headline
              image1(style: "regular") {
                sources {
                  sizes
                  srcset
                  type
                }
                url
              }
              image2(style: "regular") {
                sources {
                  sizes
                  srcset
                  type
                }
                url
              }
              image3(style: "regular") {
                sources {
                  sizes
                  srcset
                  type
                }
                url
              }
            }
          }
        }
      }
    }
  }
`