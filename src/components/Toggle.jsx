"use strict";

import React from "react"; // eslint-disable-line no-unused-vars
import R from "ramda";
import {
    component,
    mergeImplicitProps,
    buildClassName
} from "../lib";


const CheckBox = component((props, uniqueId) => {

    const {
        disabled,
        label,
        checked,
        defaultChecked,
        onChange
        } = props;

    // if checkbox is set to 'on', 'true' or true by the onChange event then make the checkbox checked
    const isChecked = checked === "on" || checked === "true" || checked === true ? "checked" : "";

    const className = buildClassName({
        "mdl-checkbox": true,
        "mdl-js-checkbox": true,
        "mdl-js-ripple-effect": true
    });

    return <label className={className} htmlFor={"mdl-checkbox-" + uniqueId}>
            <input type="checkbox" id={"mdl-checkbox-" + uniqueId} className="mdl-checkbox__input" defaultChecked={defaultChecked} onChange={onChange} />
            <span className="mdl-checkbox__label">{label}</span>
        </label>;
});

const Switch = component((props, uniqueId) => {

    const {
        disabled,
        label,
        checked,
        defaultChecked,
        onChange
        } = props;

    // if checkbox is set to 'on', 'true' or true by the onChange event then make the checkbox checked
    const isChecked = checked === "on" || checked === "true" || checked === true ? "checked" : "";

    const className = buildClassName({
        "mdl-switch": true,
        "mdl-js-switch": true,
        "mdl-js-ripple-effect": true
    });

    return <label className={className} htmlFor={"mdl-switch-" + uniqueId}>
        <input type="checkbox" id={"mdl-switch-" + uniqueId} className="mdl-switch__input" defaultChecked={defaultChecked} onChange={onChange} />
        <span className="mdl-switch__label">{label}</span>
    </label>;
});

export {
    CheckBox,
    Switch
};