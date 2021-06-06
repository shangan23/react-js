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

  handleReset = action => {
    console.log('Count Reset');
    this.setState({ count: 0 });
  };

  render() {
    return (
      <>
        <Increment onAction={this.handleIncrement} />
        <Reset onReset={this.handleReset} />
        <p>Count {this.state.count}</p>
      </>
    );
  }
}
class Reset extends React.Component {
  render() {
    return (
      <div style={{ marginTop: '10px' }}>
        <button onClick={this.props.onReset}> Reset</button>
      </div>
    );
  }
}
class Increment extends React.Component {
  render() {
    console.log('this props', this.props);
    return (
      <div>
        <button onClick={this.props.onAction}>Click Me!!</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('root'));