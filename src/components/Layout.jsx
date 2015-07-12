"use strict";

import React from "react"; // eslint-disable-line no-unused-vars
import {
    component,
    mergeImplicitProps,
    buildClassName
} from "../lib";


const Appbar = component(props => {
    const {
        left,
        title,
        right,
        children
    } = props;

    return <header className="mdl-layout__header" style={{ position: "relative", maxWidth: "100%" }}>
        <div className="mdl-layout__drawer-button" children={left} />
        <div className="mdl-layout__header-row" style={{ overflow: "hidden" }}>
            <div className="mdl-layout-title" children={title} />
            <div className="mdl-layout-spacer" />
            <div className="mdl-navigation" children={right} />
        </div>
        { children && <div
            className="mdl-layout__header-row"
            children={children} /> }
    </header>;
});


export {
    Appbar
};
