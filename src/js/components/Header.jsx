import React from "react";

import Title from "./Header/Title";

export default class Header extends React.Component {

  /*
    使用 this.prop 存取父元件 state 、Fn
  */

  handleChange(e) {
    const title = e.target.value;
    this.props.changeHeaderTitle(title);
  }

  render() {
    return (
      <div>
        <Title title={this.props.headerTitle} />
        <input value={this.props.headerTitle} onChange={this.handleChange.bind(this)}/>
      </div>
    );
  }
}
