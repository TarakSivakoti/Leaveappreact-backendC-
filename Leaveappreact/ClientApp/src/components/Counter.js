import React, { Component } from 'react';

export class Counter extends Component {
  static displayName = Counter.name;

  constructor (props) {
    super(props);
      this.state = {
          currentCount: 0,
          message:null
      };

      this.incrementCounter = this.incrementCounter.bind(this);
      this.decrementCounter = this.decrementCounter.bind(this);
  }

  incrementCounter () {
    this.setState({
        currentCount: this.state.currentCount + 1,
        message: null
    });
    }

    decrementCounter() {
        if (this.state.currentCount) {
            this.setState({
                currentCount: this.state.currentCount - 1,
                message: null
                });
    }
                else {
            this.setState({
                message: "Can't decrement. Since 0 is the min value"
                });
}
}

  render () {
    return (
      <div>
        <h1>Counter</h1>

        <p>This is a simple example of a React component.</p>

            <p>Current count: <strong>{this.state.currentCount} </strong> {this.state.message}</p>

            <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button> <br /> <br />
            <button className="btn btn-primary" onClick={this.decrementCounter}>Decrement</button>
      </div>
    );
  }
}
