import React, { Component } from "react";
class table extends Component {
  render() {
    const prmData = this.props.data;
    return <div><p>{prmData.alamat}</p></div>;
  }
}

export default table;