"use strict";

import React from "react";
import R from "ramda";

// Attributes that should be passed from <Parent /> to <child />
const implicitAttributes = [
    // https://facebook.github.io/react/docs/tags-and-attributes.html
    "accept",
    "acceptCharset",
    "accessKey",
    "action",
    "allowFullScreen",
    "allowTransparency",
    "alt",
    "async",
    "autoComplete",
    "autoFocus",
    "autoPlay",
    "cellPadding",
    "cellSpacing",
    "charSet",
    "checked",
    "classID",
    // "className", // Automatically combined as string
    "colSpan",
    "cols",
    "content",
    "contentEditable",
    "contextMenu",
    "controls",
    "coords",
    "crossOrigin",
    "data",
    "dateTime",
    "defer",
    "dir",
    "disabled",
    "download",
    "draggable",
    "encType",
    "form",
    "formAction",
    "formEncType",
    "formMethod",
    "formNoValidate",
    "formTarget",
    "frameBorder",
    "headers",
    "height",
    "hidden",
    "high",
    "href",
    "hrefLang",
    "htmlFor",
    "httpEquiv",
    "icon",
    "id",
    "label",
    "lang",
    "list",
    "loop",
    "low",
    "manifest",
    "marginHeight",
    "marginWidth",
    "max",
    "maxLength",
    "media",
    "mediaGroup",
    "method",
    "min",
    "multiple",
    "muted",
    "name",
    "noValidate",
    "open",
    "optimum",
    "pattern",
    "placeholder",
    "poster",
    "preload",
    "radioGroup",
    "readOnly",
    "rel",
    "required",
    "role",
    "rowSpan",
    "rows",
    "sandbox",
    "scope",
    "scoped",
    "scrolling",
    "seamless",
    "selected",
    "shape",
    "size",
    "sizes",
    "span",
    "spellCheck",
    "src",
    "srcDoc",
    "srcSet",
    "start",
    "step",
    "style",
    "tabIndex",
    "target",
    "title",
    "type",
    "useMap",
    "value",
    "width",
    "wmode",
    // https://facebook.github.io/react/docs/events.html
    "onCopy",
    "onCut",
    "onPaste",
    "onKeyDown",
    "onKeyPress",
    "onKeyUp",
    "onChange",
    "onInput",
    "onSubmit",
    "onClick",
    "onContextMenu",
    "onDoubleClick",
    "onDrag",
    "onDragEnd",
    "onDragEnter",
    "onDragExit",
    "onDragLeave",
    "onDragOver",
    "onDragStart",
    "onDrop",
    "onMouseDown",
    "onMouseEnter",
    "onMouseLeave",
    "onMouseMove",
    "onMouseOut",
    "onMouseOver",
    "onMouseUp",
    "onTouchCancel",
    "onTouchEnd",
    "onTouchMove",
    "onTouchStart",
    "onScroll",
    "onWheel"
];


// Pass desired props on to child element
const mergeImplicitProps = (parentProps, explicitProps) => {
    // Pick props that should be passed on to child element
    const implicitProps = R.pick(implicitAttributes, parentProps);
    // Combine implicit and explicit className strings
    const className = ""
        + (explicitProps.className || "")
        + " "
        + (parentProps.className || "");
    // Merge all
    return R.compose(
        R.assoc("className", className),
        R.merge(implicitProps)
    )(explicitProps);
};


// ::  { k0: true, k1: false, k2: true, ... }  ->  "k0 k2 ..."
const buildClassName = R.compose(
    R.join(" "),
    R.keys,
    R.pickBy(R.identity)
);


// Create React component
const component = (
    displayName,
    render,
    mdlUpgradeable
) => React.createClass({
    displayName,
    componentDidMount() {
        // Check that component is upgradeable,
        // and that MDL global "componentHandler" exists
        if (!mdlUpgradeable || typeof componentHandler === "undefined") {
            return;
        }
        // Apply MDL upgrade to element
        const domNode = React.findDOMNode(this);
        componentHandler.upgradeElement(domNode); // eslint-disable-line no-undef
    },
    render() {
        return render.call(this, this.props);
    }
});


export {
    implicitAttributes,
    mergeImplicitProps,
    buildClassName,
    component
};
