import React from "react";
import { Slider } from "@blueprintjs/core";

export default class EmpiricaSlider extends React.Component {
  render() {
    const { hideHandleOnEmpty, showTrackFill, value, ...rest } = this.props;

    // Blueprint's Slider does not like a null value, it's fine with undefined.
    const val = value === null ? undefined : value;

    // We want to add an "empty" class to the slider to hide the handle if no
    // value is given and the option is activated.
    const emptyClass = hideHandleOnEmpty && val === undefined ? "empty" : "";

    // Default to showTrackFill = false if not set by parent.
    let showTrackFillVar = showTrackFill;
    if (showTrackFillVar === undefined) {
      showTrackFillVar = false;
    }

    return (
      <div className={`empirica-slider ${emptyClass}`}>
        <Slider value={val} showTrackFill={showTrackFillVar} {...rest} />
      </div>
    );
  }
}
