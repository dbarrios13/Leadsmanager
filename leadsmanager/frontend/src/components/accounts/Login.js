import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import { } from '../../actions/'

class Login extends Component {
  state = {
    user: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      newUser: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { username, password } = this.state.user;
    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Login</h2>
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
              <button className="btn btn-success">Login</button>
            </div>
            <p>
              Don't have an account? <Link to="register">Register</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, {})(Login);
