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
        defaultChecked,
        onChange,
        id: idProp
        } = props;

    const id = idProp || uniqueId;

    const className = buildClassName({
        "mdl-checkbox": true,
        "mdl-js-checkbox": true,
        "mdl-js-ripple-effect": true
    });

    return <label className={className} htmlFor={id}>
            <input type="checkbox" id={id} className="mdl-checkbox__input" defaultChecked={defaultChecked} onChange={onChange} />
            <span className="mdl-checkbox__label">{label}</span>
        </label>;
});

const Switch = component((props, uniqueId) => {

    const {
        disabled,
        label,
        defaultChecked,
        onChange,
        id: idProp
        } = props;

    const id = idProp || uniqueId;

    const className = buildClassName({
        "mdl-switch": true,
        "mdl-js-switch": true,
        "mdl-js-ripple-effect": true
    });

    return <label className={className} htmlFor={id}>
        <input type="checkbox" id={id} className="mdl-switch__input" defaultChecked={defaultChecked} onChange={onChange} />
        <span className="mdl-switch__label">{label}</span>
    </label>;
});

const IconToggle = component((props, uniqueId) => {

    const {
        disabled,
        label,
        defaultChecked,
        onChange,
        id: idProp
        } = props;

    const id = idProp || uniqueId;


    const className = buildClassName({
        "mdl-icon-toggle": true,
        "mdl-js-icon-toggle": true,
        "mdl-js-ripple-effect": true
    });

    return <label className={className} htmlFor={id}>
        <input type="checkbox" id={id} className="mdl-icon-toggle__input" defaultChecked={defaultChecked} onChange={onChange} />
        <span className="mdl-icon-toggle__label material-icons">format_bold</span>
    </label>;
});

export {
    CheckBox,
    Switch,
    IconToggle
};