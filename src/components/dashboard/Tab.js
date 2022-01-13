import React, { Component } from "react";
import { Button } from "react-bootstrap";

class table extends Component {
  render() {
    const prmData = this.props.data;
    return (
      <div>
        <Button
          variant="primary"
          onClick={() => this.props.update(prmData)}
        >
          <strong>Edit</strong>
        </Button>
      </div>
    );
  }
}

export default table;