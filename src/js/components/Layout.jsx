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

  changeTitle(title) {
    this.setState({title}); // {title} => {title: "Hello World!!"}
  }

  render() {
    return (
      <div>
        <Header changeHeaderTitle={this.changeTitle.bind(this)} headerTitle={this.state.title} />
        <Footer />
      </div>
    );
  }
}
