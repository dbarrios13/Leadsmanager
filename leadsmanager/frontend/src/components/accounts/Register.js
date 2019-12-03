import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { register } from "../../actions/auth";
import { createMessage } from "../../actions/messages";
import PropTypes from "prop-types";

class Register extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    register: PropTypes.func.isRequired
  };

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
    const { username, email, passwordConfirm, password } = this.state.newUser;
    if (password !== passwordConfirm) {
      this.props.createMessage({ passwordNotMatch: "Passwords do not match" });
    } else {
      const newUser = {
        username: username,
        email: email,
        password: password
      };
      this.props.register(newUser);
    }
  };

  render() {
    if (this.props.isAuthenticated) return <Redirect to="/" />;
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

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register, createMessage })(Register);
