import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleIncrement = action => {
    console.log('Event ', action);
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <>
        <Increment onAction={this.handleIncrement} />
        <p>Count {this.state.count}</p>
      </>
    );
  }
}

function Increment({ onAction }) {
  return (
    <div>
      <button onClick={onAction}>Click Me!!</button>
    </div>
  );
}

ReactDOM.render(<Counter />, document.getElementById('root'));