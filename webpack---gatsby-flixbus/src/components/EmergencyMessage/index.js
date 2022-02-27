import React, {
    useEffect,
    useContext,
    useState
} from "react"

import {
    AppContext
} from "../../store"
import EmergencyBox from "./EmergencyBox"
import EmergencyOverlay from "./EmergencyOverlay"

const EmergencyMessage = () => {
    let {
        langcode,
        project
    } = useContext(AppContext)
    const realtimeEP = process.env.GATSBY_EMERGENCY_MANAGEMENT

    const [emergencyData, setEmergencyData] = useState(null)

    useEffect(() => {
        if (typeof window !== "undefined") {
            fetch(`${realtimeEP}?query=query{
        emergency(language:"${langcode}", project:"${project}") {
          message
          headline
          messageStatus
          darkSiteStatus
        }}
      `)
                .then((x) => x.json())
                .then(({
                    data
                }) => data)
                .then(({
                    emergency
                }) => setEmergencyData(emergency))
        }
    }, [langcode, realtimeEP, project])

    return ( <
        > {
            emergencyData !== null ? ( <
                >
                <
                > {
                    emergencyData.messageStatus === true && ( <
                        div className = "emergency-message" >
                        <
                        EmergencyBox message = {
                            emergencyData.message
                        }
                        headline = {
                            emergencyData.headline
                        }
                        /> <
                        /div>
                    )
                } <
                /> <
                > {
                    emergencyData.darkSiteStatus === true && ( <
                        EmergencyOverlay message = {
                            emergencyData.message
                        }
                        />
                    )
                } <
                /> <
                />
            ) : null
        } <
        />
    )
}

export default EmergencyMessage