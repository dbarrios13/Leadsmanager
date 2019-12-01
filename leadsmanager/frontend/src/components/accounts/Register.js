import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import { } from '../../actions/'

class Register extends Component {
  state = {
    newUser: {
      username: "",
      email: "",
      password: "",
      passwordConfirm: ""
    }
  };

  handleChange = e => {
    this.setState({
      newUser: {
        ...this.state.newUser,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { username, email, password, passwordConfirm } = this.state.newUser;
    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Register</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={this.handleChange}
                value={username}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={this.handleChange}
                value={email}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={this.handleChange}
                value={password}
              />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="passwordConfirm"
                onChange={this.handleChange}
                value={passwordConfirm}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-success">Register</button>
            </div>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, {})(Register);
