import React from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

export default class DoubleRangeSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value5: {
        min: props.minValue,
        max: props.maxValue
      }
    };
  }

  render() {
    return (
      <form>
        <InputRange
          draggableTrack
          maxValue={this.props.maxValue}
          minValue={this.props.minValue}
          onChange={value => this.setState({ value5: value })}
          onChangeComplete={value => console.log(value)}
          value={this.state.value5}
        />
      </form>
    );
  }
}
