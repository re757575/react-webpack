import React from "react";

import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {

  constructor() {
    super();
    this.state = {
      title: "Hello World!!"
    };
  }

  render() {
    return (
      <div>
        <Header title={this.state.title}></Header>
        <Footer></Footer>
      </div>
    );
  }
}
