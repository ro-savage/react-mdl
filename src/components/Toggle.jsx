"use strict";

import React from "react"; // eslint-disable-line no-unused-vars
import R from "ramda";
import {
    component,
    mergeImplicitProps,
    buildClassName
} from "../lib";


export default component(props => {

    const {
        type, // (flat), raised, icon, fab, mini-fab
        color, // (none), primary, accent
        disabled,
        checked,
        defaultChecked,
        onChange
        } = props;

    // if checkbox is set to 'on', 'true' or true by the onChange event then make the checkbox checked
    const isChecked = checked === "on" || checked === "true" || checked === true ? "checked" : "";

    const className = buildClassName({
        "mdl-button": true,
        "mdl-js-button": true,
        "mdl-js-ripple-effect": true,

        // Default: uncolored
        "mdl-button--colored": color === "primary",
        "mdl-button--accent": color === "accent",

        // Default: flat
        "mdl-button--raised": type === "raised",
        "mdl-button--icon": type === "icon",
        "mdl-button--fab": type === "fab" || type === "mini-fab",
        "mdl-button--mini-fab": type === "mini-fab"
    });

    return <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-1">
            <input type="checkbox" id="checkbox-1" className="mdl-checkbox__input" defaultChecked={defaultChecked} onChange={onChange} />
            <span className="mdl-checkbox__label">Checkbox</span>
        </label>;
});
