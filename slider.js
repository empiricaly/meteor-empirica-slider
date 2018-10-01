import React from "react";
import { Slider } from "@blueprintjs/core";

export default class EmpiricaSlider extends React.Component {
  render() {
    const { hideHandleOnEmpty, showTrackFill, value, ...rest } = this.props;

    const empty = hideHandleOnEmpty && value === undefined ? "empty" : "";

    // Default to showTrackFill = false if not set by parent.
    let showTrackFillVar = showTrackFill;
    if (showTrackFillVar === undefined) {
      showTrackFillVar = false;
    }

    return (
      <div className={`empirica-slider ${empty}`}>
        <Slider value={value} showTrackFill={showTrackFillVar} {...rest} />
      </div>
    );
  }
}
