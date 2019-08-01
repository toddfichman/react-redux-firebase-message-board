import React, { Component } from 'react'

export default class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
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
        <form onSubmit={this.handleSubmit} className="white-text grey darken-3">
          <h5 className="white-text">Sign Up</h5>
          <div className="input-field">
            <label className="email">Email</label>
            <input className="white-text" type="email" id="email" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label className="password">Password</label>
            <input className="white-text" type="password" id="password" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label className="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label className="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <button className="btn blue lighten-1">Sign In</button>
          </div>
        </form>
      </div>
    )
  }
}
