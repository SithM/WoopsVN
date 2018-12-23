import React, { Component } from "react";
import { BarLoader } from "react-spinners";

class BarLoading extends Component {
  render() {
    return (
      <BarLoader
        sizeUnit={"px"}
        size={150}
        color={"#009432"}
        loading={true}
      />
    );
  }
}

export default BarLoading;
