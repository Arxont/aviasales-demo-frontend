import React from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

class DoubleRangeSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value5: {
        min: 0,
        max: 50
      }
    };
  }

  render() {
    return (
      <form>
        <InputRange
          draggableTrack
          maxValue={50}
          minValue={0}
          onChange={value => this.setState({ value5: value })}
          onChangeComplete={value => console.log(value)}
          value={this.state.value5}
        />
      </form>
    );
  }
}

export default function RangeSlider() {
  return <DoubleRangeSlider />;
}
