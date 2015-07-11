"use strict";

import React from "react"; // eslint-disable-line no-unused-vars
import R from "ramda";
import {
    component,
    mergeImplicitProps,
    buildClassName
} from "../lib";


export default component("Button", props => {
    const {
        type, // (flat), raised, icon, fab, mini-fab
        color, // (none), primary, accent
        disabled,
        ripple
    } = props;

    const hasRippleEffect = R.contains(ripple, [undefined, "true", true]);

    const className = buildClassName({
        "mdl-button": true,
        "mdl-js-button": true,
        "mdl-js-ripple-effect": hasRippleEffect,

        // Default: uncolored
        "mdl-button--colored": color === "primary",
        "mdl-button--accent": color === "accent",

        // Default: flat
        "mdl-button--raised": type === "raised",
        "mdl-button--icon": type === "icon",
        "mdl-button--fab": type === "fab" || type === "mini-fab",
        "mdl-button--mini-fab": type === "mini-fab"
    });

    return React.createElement("button", mergeImplicitProps(props, {
        className,
        disabled
    }), props.children);
}, true);
