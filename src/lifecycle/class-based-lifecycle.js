import React from 'react'

/**
 *
 * REACT class lifecycle phases and methods
 *
 * 1. Mounting phase - method will execute in below order
 *
 * constructor() - super(props) initialization;
 * getDerivedStateFromProps() - set state, props
 * render() - DOM is ready for rendering
 * componentDidMount() - DOM available to update
 *
 * 2. Updating phase - methods will execute in below order
 *
 * getDerivedStateFromProps()
 * shouldComponentUpdate()
 * render()
 * getSnapshotBeforeUpdate() - prevState, prevProps
 * componentDidUpdate() - currentState
 *
 * 3. Unmounting phase - methods will execute in below order
 *
 * componentWillUnmount()
 */

export class ClassBasedLifecycle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      favoriteColor: 'red',
      mounting: false,
      updating: false,
      unmounting: false,
      show: true,
    }
    console.log('Mounting Phase:', 'constructor called.')
  }

  static getDerivedStateFromProps(props, state) {
    if (document.getElementById('didUpdate') != null) {
      console.log('Updating Phase:', 'getDerivedStateFromProps called.')
      state.updating = true
    } else {
      console.log('Mounting Phase:', 'getDerivedStateFromProps called.')
      return { favoriteColor: props.favcol, mounting: true }
    }
    return null
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: 'purple', mounting: true })
    }, 10000)
    console.log('Mounting Phase:', 'componentDidMount called.')
  }

  changeColor = () => {
    this.setState({ favoriteColor: 'green' })
  }

  delHeader = () => {
    this.setState({ show: false, unmounting: true })
  }

  shouldComponentUpdate() {
    console.log('Updating Phase:', 'shouldComponentUpdate called.')
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Updating Phase:', 'getSnapshotBeforeUpdate called.')
    document.getElementById('beforeSnapshot').innerHTML =
      'OnUpdate -> Before the update, the favorite was ' +
      prevState.favoriteColor
    if (!prevState.show) {
      document.getElementById('onUnmount').innerHTML =
        'OnUnmount -> After unmount'
    }
    return null
  }

  componentDidUpdate() {
    console.log('Updating Phase:', 'componentDidUpdate called.')
    document.getElementById('didUpdate').innerHTML =
      'OnUpdate -> The updated favorite is ' + this.state.favoriteColor
  }

  render() {
    if (document.getElementById('didUpdate') != null) {
      console.log('Updating Phase:', 'render called.')
    } else {
      console.log('Mounting Phase:', 'render called.')
    }

    let myheader
    if (this.state.show) {
      myheader = <Child />
    }

    return (
      <div style={{ color: this.state.favoriteColor, padding: '10px' }}>
        <h1>REACT Class Component Lifecylce!</h1>
        <hr />
        <b
          style={{
            color: this.state.mounting ? 'green' : 'red',
          }}
        >
          {this.state.mounting ? ' --> ' : ''}
          Phase 1 (MOUNTED): {this.state.mounting ? 'TRUE' : 'FALSE'}
        </b>
        <br />
        <b
          style={{
            color: this.state.updating ? 'green' : 'red',
          }}
        >
          {this.state.updating ? ' --> ' : ''}
          Phase 2 (UPDATED): {this.state.updating ? 'TRUE' : 'FALSE'}
        </b>
        <br />
        <b
          style={{
            color: this.state.unmounting ? 'green' : 'red',
          }}
        >
          {this.state.unmounting ? ' --> ' : ''}
          Phase 3 (UNMOUNTED): {this.state.unmounting ? 'TRUE' : 'FALSE'}
        </b>
        <br />
        <br />
        <div id="beforeSnapshot"></div>
        <div id="didUpdate"></div>
        <div id="onUnmount"></div>
        <br />
        {myheader}
        <br />
        <button onClick={this.changeColor}>Change Color to update</button>&nbsp;
        <button type="button" onClick={this.delHeader}>
          Delete
        </button>
      </div>
    )
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    console.log('UnMounting Phase:', 'componentWillUnmount called.')
  }
  render() {
    return <h3>Click "Delete" to Unmount me!</h3>
  }
}
