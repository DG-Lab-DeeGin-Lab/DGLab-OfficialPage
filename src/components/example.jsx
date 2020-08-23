import React from "react";
export class example extends React.Component {
  render() {
    const isLoggedIn = this.props.isLoggedIn;
    return isLoggedIn ? (
      <h1>Hello, I'm {this.props.names}.</h1>
    ) : (
      <h1>Hello, World.</h1>
    );
  }
}
