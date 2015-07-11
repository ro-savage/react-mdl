"use strict";

import React from "react"; // eslint-disable-line no-unused-vars
import {
    component,
    mergeImplicitProps,
    buildClassName
} from "../lib";


const Layout = component(props => {
    const className = "mdl-layout mdl-js-layout " + props.className;
    return <div {...props} className={className} />;
}, true);


const LayoutHeader = component(props => {
    const {
        type // (container), row, spacer, scroll, waterfall, transparent
    } = props;

    const className = buildClassName({
        "mdl-layout__header": true,
        "mdl-layout__header--scroll": type === "scroll",
        "mdl-layout__header--waterfall": type === "waterfall",
        "mdl-layout__header--transparent": type === "transparent"
    });

    return React.createElement("header", mergeImplicitProps(props, {
        className
    }), props.children);
});


const LayoutHeaderRow = component(props => {
    const className = "mdl-layout__header-row " + props.className;
    return <div {...props} className={className} />;
});


const LayoutHeaderSpacer = component(props => {
    const className = "mdl-layout__header-spacer " + props.className;
    return <div {...props} className={className} />;
});


// const Layout = component(props => {
//     const {
//         type, // (flat), raised, icon, fab, mini-fab
//         color, // (none), primary, accent
//         disabled,
//         ripple
//     } = props;
//
//     const hasRippleEffect = R.contains(ripple, [undefined, "true", true]);
//
//     const className = buildClassName({
//         "mdl-button": true,
//         "mdl-js-button": true,
//         "mdl-js-ripple-effect": hasRippleEffect,
//
//         // Default: uncolored
//         "mdl-button--colored": color === "primary",
//         "mdl-button--accent": color === "accent",
//
//         // Default: flat
//         "mdl-button--raised": type === "raised",
//         "mdl-button--icon": type === "icon",
//         "mdl-button--fab": type === "fab" || type === "mini-fab",
//         "mdl-button--mini-fab": type === "mini-fab"
//     });
//
//     return React.createElement("button", mergeImplicitProps(props, {
//         className,
//         disabled
//     }), props.children);
// }, true);


export {
    Layout,
    LayoutHeader,
    LayoutHeaderRow,
    LayoutHeaderSpacer
};
