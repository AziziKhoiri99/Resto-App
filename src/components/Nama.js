import React, { Component } from "react";
class table extends Component {
  render() {
    const prmData = this.props.data;
    return <div><i class="fas fa-utensils"></i>{prmData.nama}</div>;
  }
}

export default table;