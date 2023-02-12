import React, { Component, PureComponent } from "react";
import Butondisable from "./Butondisable";

type CounterProps = {
  name: string;
};

type Counterstate = {
  count: number;
};

class Counter extends PureComponent<CounterProps, Counterstate> {
  constructor(props: CounterProps) {
    super(props);
    this.state = {
      count: 0,
    };

    this.handleincrement = this.handleincrement.bind(this);
  }
  handleincrement() {
    this.setState({ count: this.state.count + 1 });
  }

  render(): React.ReactNode {
    return (
      <>
        <h1>{this.props.name}</h1>
        <h1>{this.state.count}</h1>

        <button
          className="bg-green-500 px-8 py-1 rounded-sm text-sm shadow-md"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          {" "}
          incremet
        </button>

        <Butondisable></Butondisable>
      </>
    );
  }
}
export default Counter;
