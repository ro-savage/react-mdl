"use strict";

import React from "react";
import {
    component,
    mergeImplicitProps,
    buildClassName
} from "../lib";


export default component(props => {
    const {
        size,
        color, // (normal), light, dark
        inactive,
        type
    } = props;

    const children = type || props.children;

    const className = buildClassName({
        "material-icons ": true,
        ["md-" + size]: size !== undefined,
        "md-inactive": inactive === "true",

        // Default: normal
        "md-light": color === "light",
        "md-dark": color === "dark"
    });

    return React.createElement("i", mergeImplicitProps(props, {
        className
    }), children);
});
