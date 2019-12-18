import React from "react";

class Step1 extends React.Component {
  constructor() {
    super();
  }
  
onSubmit = () => {
alert(this.props.info.username)
}

  render() {
    return (
      <section className="step1_container">
        <form className="form_step1" onSubmit={this.onSubmit}>
          <label className="label">
            <p className="input_label">Username</p>
            <input
              type="text"
              className="input_step1"
              name="username"
              onChange={this.props.handleChange}
              value={this.props.info.username}
            />
          </label>
          <label className="label">
            <p className="input_label">Email</p>
            <input
              type="email"
              className="input_step1"
              name="email"
              onChange={this.props.handleChange}
              value={this.props.info.email}
            />
          </label>
          <label className="label">
            <p className="input_label">Password</p>
            <input
              type="password"
              className="input_step1"
              name="password"
              onChange={this.props.handleChange}
              value={this.props.info.password}
            />
          </label>
          <label className="label">
            <p className="input_label">Select avatar</p>
            <input type="file" className="input_step1" />
          </label>
        </form>
      </section>
    );
  }
}

export default Step1;
