# Empirica Slider

Empirica Slider is a wrapper around BluePrintJS' slider to add a few extra
features useful for developing experiments.

See https://blueprintjs.com/docs/#core/components/sliders for props supported by
this component.

## Usage

Add to your Empirica project with `meteor add empirica:slider`.

Example usage:

```jsx
import React from "react";
import Slider from "meteor/empirica:slider";

export default class MyComponent extends React.Component {
  handleChange = num => {
    const { stage, player } = this.props;
    // Rounding the number to 2 decimals max
    const value = Math.round(num * 100) / 100;
    player.stage.set("someValue", value);
  };

  render() {
    const { player } = this.props;
    const value = player.stage.get("someValue");

    return (
      <Slider
        hideHandleOnEmpty
        min={0}
        max={1}
        stepSize={0.01}
        labelStepSize={0.25}
        value={value}
        onChange={this.handleChange}
      />
    );
  }
}
```

## Default Props

### showTrackFill

Contrary to the Blueprint Slider default, `showTrackFill` defaults to false for
the Empirica Slider, as it often makes more sense in the context of an
experiment. You can still explicitely set it to `true`.

## Additional Props

### hideHandleOnEmpty (bool)

_Default: false_

When `hideHandleOnEmpty` is set to true, if the `value` prop is not defined,
the slider handle will be hidden.
