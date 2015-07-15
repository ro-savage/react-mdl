"use strict";

import React from "react"; // eslint-disable-line no-unused-vars
import {
    component,
    mergeImplicitProps,
    buildClassName
} from "../lib";

const TextField = component((props, uniqueId) => {
    const {
        type, // (floating), regular
        pattern, // (text), number, email, custom
        placeholder // (required) string
        } = props;

    const className = buildClassName({
        "mdl-textfield ": true,
        "mdl-js-textfield": true,

        // visual type - default: floating
        "mdl-textfield--floating-label": type === "floating" || typeof type === "undefined",
        "": type === "regular" // regular has no special class
    });

    // If there are multiple children just ignore it.
    const errormsg = props.children;

    return <div className={className}>
            <input className="mdl-textfield__input"
                   pattern={pattern ? pattern : "*"}
                   type="text"
                   id={"mdl-textfield-" + uniqueId}
                />
            <label className="mdl-textfield__label" htmlFor={"mdl-textfield-" + uniqueId}>{placeholder}</label>
            { errormsg && <span className="mdl-textfield__error" >{errormsg}</span> }
        </div>;
});

const TextArea = component((props, uniqueId) => {
    const {
        type, // (floating), regular
        pattern, // (text), number, email, custom
        placeholder, // (required) string
        rows // (3), int
        } = props;

    const className = buildClassName({
        "mdl-textfield ": true,
        "mdl-js-textfield": true,

        // visual type - default: floating
        "mdl-textfield--floating-label": type === "floating" || typeof type === "undefined",
        "": type === "regular" // regular has no special class
    });

    // If there are multiple children just ignore it.
    const errormsg = props.children;

    return <div className={className}>
            <textarea className="mdl-textfield__input"
                      type="text"
                      rows={rows ? rows : 3}
                      pattern={pattern ? pattern : "*"}
                      id={"mdl-textfield-" + uniqueId} >
            </textarea>
            <label className="mdl-textfield__label" htmlFor={"mdl-textfield-" + uniqueId}>{placeholder}</label>
            { errormsg && <span className="mdl-textfield__error">{errormsg}</span> }
        </div>;
});

export {
    TextField,
    TextArea
};