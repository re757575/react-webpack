import React from "react";

export default class Header extends React.Component {

  constructor() {
    super();
    this.title = 'Hello World!!';
  }

  render() {
    return (
      <h1>{this.title}</h1>
    );
  }
}
