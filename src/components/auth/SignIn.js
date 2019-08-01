import React, { Component } from 'react'

export default class SignIn extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = (event) => {
    console.log('handlechage')
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="grey darken-3">
          <h5 className="white-text">Sign In</h5>
          <div className="input-field">
            <label className="email">Email</label>
            <input className="white-text" type="email" id="email" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label className="password">Password</label>
            <input className="white-text" type="password" id="password" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <button className="btn blue lighten-1">Sign In</button>
          </div>
        </form>
      </div>
    )
  }
}
