import React from "react";

const Step1 = props => {
  return (
    <section className="step1_container">
      <form className="form_step1">
        <label className="label">
          <p className="input_label">Username</p>
          <input
            type="text"
            className="input_step1"
            name="username"
            onChange={props.handleChange}
            value={props.info.username}
          />
        </label>
        <label className="label">
          <p className="input_label">Email</p>
          <input
            type="email"
            className="input_step1"
            name="email"
            onChange={props.handleChange}
            value={props.info.email}
          />
        </label>
        <label className="label">
          <p className="input_label">Password</p>
          <input
            type="password"
            className="input_step1"
            name="password"
            onChange={props.handleChange}
            value={props.info.password}
          />
        </label>
        <label className="label">
          <p className="input_label">Select avatar</p>
          <input type="file" className="input_step1" />
        </label>
      </form>
    </section>
  );
};

export default Step1;
