import { Component } from 'react'
import axios from 'axios'
export class User extends Component {
  state = {
    user: '',
  }
  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/users/' + this.props.userId)
      .then((res) => this.setState({ user: res.data }))
  }
  constructor(props) {
    super(props)
  }
  render() {
    return <div>{this.state.user.name}</div>
  }
}
