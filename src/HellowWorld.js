import React, { Component } from 'react';

class HellowWorld extends Component {
  render() {
    return (
      <div className="HellowWorld">
        Hellow World from {this.props.tech}
      </div>
    );
  }
}

export default HellowWorld;
