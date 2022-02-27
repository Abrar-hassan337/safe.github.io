import React, {
    useEffect,
    useState
} from "react";
import classnames from "classnames";

import {
    Text
} from "@flixbus/honeycomb-react";

import * as css from "./emergencyOverlay.module.scss";
import "./emergencyOverlay.scss";

const EmergencyOverlay = ({
    message
}) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            document.body.classList.add("emergencyOverlay");
        }
        setVisible(true);
    }, []);

    return ( <
        div className = {
            classnames(css.container, visible ? css.visible : "", "emergency-overlay")
        } >
        <
        div className = {
            css.wrapper
        } >
        <
        Text >
        <
        span className = {
            css.text
        }
        dangerouslySetInnerHTML = {
            {
                __html: message
            }
        }
        /> <
        /Text> <
        /div> <
        /div>
    );
};

export default EmergencyOverlay;