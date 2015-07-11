"use strict";

import React from "react"; // eslint-disable-line no-unused-vars
import R from "ramda";
import {
    component,
    mergeImplicitProps,
    buildClassName
} from "../lib";


// "icon" property unsupported, in lieu of <Badge><Icon></Badge> composition
export default component(props => {
    const {
        badge,
        background
    } = props;

    const hasBackground = R.contains(background, [undefined, "true", true]);

    const className = buildClassName({
        "mdl-badge": true,
        "mdl-badge--no-background": !hasBackground
    });

    const style = R.merge({
        display: "inline-block"
    }, props.style);

    return React.createElement("div", mergeImplicitProps(props, {
        className,
        "data-badge": badge,
        style
    }), props.children);
});
