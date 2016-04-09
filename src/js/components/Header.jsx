import React from "react";

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
        <h1>{this.props.headerTitle}</h1>
        <input value={this.props.headerTitle} onChange={this.handleChange.bind(this)}/>
      </div>
    );
  }
}
