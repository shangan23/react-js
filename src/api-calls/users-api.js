import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import User from './user-api'

class Users extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/users?_limit=8')
      .then(response => this.setState({ users: response.data }));
  }

  constructor(props) {
    super(props);
    // this.state.users = [];
  }
  render() {
    console.log('Is Users available');
    console.log(this.state.users);

    return (
      <div>
        <h2>Users List</h2>
        {this.state.users.map(user => (
          <User key={user.id} userId={user.id} />
        ))}
      </div>
    );
  }
}

ReactDOM.render(<Users />, document.getElementById('root'));