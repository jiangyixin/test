import React from 'react';

export default class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // 为了在回调中使用 `this`，这个绑定是必不可少的
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (num) => {
    console.log(num, this);
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this, 1)}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
