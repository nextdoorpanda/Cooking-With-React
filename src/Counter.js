import React, { Component } from 'react';
import { ThemeContext } from './App';

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.initialCount
    };
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {style => (
          <div>
            <button style={style} onClick={() => this.changeCount(-1)}>-</button>
            <span>{this.state.count}</span>
            <button style={style} onClick={() => this.changeCount(1)}>+</button>
          </div>
        )}
      </ThemeContext.Consumer >
    );
  }

  changeCount(amount) {
    //if you need the previous state to set the new state, use this -function- version
    this.setState(prevState => {
      return { count: prevState.count + amount }
    });

    //if you don't need to use the previous state to set the new state, e.g. here, if you use count: 0, then use this -normal- version
    // this.setState({ count: this.state.count + amount });
  }
}