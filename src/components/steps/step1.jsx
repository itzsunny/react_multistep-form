import React from "react";

const Step1 = props => {
  return (
    <section className="step1_container">
      <form className="form_step1" onSubmit={props.onSubmit} noValidate>
        <label className="label">
          <p className="input_label">Username</p>
          <input
            type="text"
            className={
              props.info.username === "user name can't be empty!"
                ? `input_step1 error_input`
                : `input_step1`
            }
            name="username"
            onChange={props.handleChange}
            value={props.info.username}
            required
          />
        </label>
        <label className="label">
          <p className="input_label">Email</p>
          <input
            type="email"
            className={
              props.info.email === `Email can't be empty!` ||
              props.info.email === `Invalid Email format!`
                ? `input_step1 error_input`
                : `input_step1`
            }
            name="email"
            onChange={props.handleChange}
            value={props.info.email}
            required
          />
        </label>
        <label className="label">
          <p className="input_label">Password</p>
          <input
            type={
              props.info.password === `Password can't be empty!`
                ? `text`
                : `password`
            }
            className={
              props.info.password === `Password can't be empty!`
                ? `input_step1 error_input`
                : `input_step1`
            }
            name="password"
            onChange={props.handleChange}
            value={props.info.password}
            required
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
