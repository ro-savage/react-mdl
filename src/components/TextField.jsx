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
        placeholder, // string
        errorMsg // string
        } = props;

    const className = buildClassName({
        "mdl-textfield ": true,
        "mdl-js-textfield": true,

        // visual type - default: floating
        "mdl-textfield--floating-label": type === "floating" || typeof type === "undefined",
        "": type === "regular" // regular has no special class
    });

    const labelText = props.children;

    return <div className={className}>
            <input className="mdl-textfield__input"
                   pattern={pattern ? pattern : "*"}
                   type="text"
                   id={"mdl-textfield-" + uniqueId}
                   placeholder={placeholder}
                />
            <label className="mdl-textfield__label" htmlFor={"mdl-textfield-" + uniqueId}>{labelText}</label>
            { errorMsg && <span className="mdl-textfield__error" >{errorMsg}</span> }
        </div>;
});

const TextArea = component((props, uniqueId) => {
    const {
        type, // (floating), regular
        pattern, // (text), number, email, custom
        placeholder, // string
        rows, // (3), int
        errorMsg // string
        } = props;

    const className = buildClassName({
        "mdl-textfield ": true,
        "mdl-js-textfield": true,

        // visual type - default: floating
        "mdl-textfield--floating-label": type === "floating" || typeof type === "undefined",
        "": type === "regular" // regular has no special class
    });

    const labelText = props.children;

    return <div className={className}>
            <textarea className="mdl-textfield__input"
                      type="text"
                      rows={rows ? rows : 3}
                      pattern={pattern ? pattern : "*"}
                      id={"mdl-textfield-" + uniqueId}
                      placholder={placeholder} >
            </textarea>
            <label className="mdl-textfield__label" htmlFor={"mdl-textfield-" + uniqueId}>{labelText}</label>
            { errorMsg && <span className="mdl-textfield__error">{errorMsg}</span> }
        </div>;
});

export {
    TextField,
    TextArea
};
