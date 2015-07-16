"use strict";

import React from "react"; // eslint-disable-line no-unused-vars
import {
    component,
    mergeImplicitProps,
    buildClassName
} from "../lib";


export default component(props => {
    const {
        min,
        max,
        value
    } = props;

    const lowerSlider = value / (max - min);
    const upperSlider = 1 - lowerSlider;

    return <div className="mdl-slider__container" style={props.style}>
        <input {...props} style={{ flex: "1 1 0%", height: "5em" } }} className="mdl-slider is-upgraded" type="range" />
        <div className="mdl-slider__background-flex">
            <div style={{ flex: lowerSlider + " 1 0%" }} className="mdl-slider__background-lower" />
            <div style={{ flex: upperSlider + " 1 0%" }} className="mdl-slider__background-upper" />
        </div>
    </div>;

});
