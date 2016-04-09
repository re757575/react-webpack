import React from "react";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.title = 'Hello World!!';
  }

  render() {
    return (
      <div>
        <h1>{this.title}</h1>
      </div>
    );
  }

}
