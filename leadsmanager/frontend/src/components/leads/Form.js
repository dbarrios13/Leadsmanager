import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addLead } from "../../actions/leads";

class Form extends Component {
  state = {
    newLead: {
      name: "",
      email: "",
      message: ""
    }
  };

  static propTypes = {
    addLead: PropTypes.func.isRequired
  };

  handleChange = e => {
    this.setState({
      newLead: {
        ...this.state.newLead,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addLead(this.state.newLead);
  };

  render() {
    const { name, email, message } = this.state.newLead;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Lead Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              onChange={this.handleChange}
              value={name}
              name="name"
              type="text"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              onChange={this.handleChange}
              value={email}
              name="email"
              type="email"
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              className="form-control"
              onChange={this.handleChange}
              value={message}
              name="message"
              type="text"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addLead })(Form);
