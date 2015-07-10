"use strict";

import React from "react"; // eslint-disable-line no-unused-vars
import R from "ramda";
import {
    component,
    mergeImplicitProps,
    buildClassName
} from "../lib";


const Card = component("Card", props => {
    const {
        shadow
    } = props;

    const className = buildClassName({
        "mdl-card": true,
        ["mdl-shadow--" + shadow + "dp"]: !!shadow
    });

    return React.createElement("div", mergeImplicitProps(props, {
        className
    }), props.children);
});


const CardTitle = component("CardTitle", props => {
    const {
        border
    } = props;

    const children = <h2 className="mdl-card__title-text">
        {props.children}
    </h2>;
    // <h2 className="mdl-card__subtitle-text">{subtitle}</h2>

    const className = buildClassName({
        "mdl-card__title": true,
        "mdl-card--expand": true,
        "mdl-card--border ": R.contains(border, ["true", true])
    });

    return React.createElement("div", mergeImplicitProps(props, {
        className
    }), children);
});


// Temporary card-specific className generator
const buildCardClassName = (props, type) => {
    const { border } = props;
    const hasBorder = R.contains(border, ["true", true]);
    const borderString = hasBorder ? "mdl-card--border " : "";

    return borderString + "mdl-card__" + type;
};


const CardActions = component("CardActions", props => {
    return React.createElement("div", mergeImplicitProps(props, {
        className: buildCardClassName(props, "actions")
    }), props.children);
});


const CardMedia = component("CardMedia", props => {
    return React.createElement("div", mergeImplicitProps(props, {
        className: buildCardClassName(props, "media")
    }), props.children);
});


const CardSupporting = component("CardSupporting", props => {
    return React.createElement("div", mergeImplicitProps(props, {
        className: buildCardClassName(props, "supporting-text")
    }), props.children);
});


const CardMenu = component("CardMenu", props => {
    return React.createElement("div", mergeImplicitProps(props, {
        className: buildCardClassName(props, "menu")
    }), props.children);
});


export {
    Card,
    CardTitle,
    CardActions,
    CardMedia,
    CardSupporting,
    CardMenu
};
