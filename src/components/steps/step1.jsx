import React from "react";

const Step1 = () => {
  return (
    <section className="step1_container">
      <form className="form_step1">
        <label className="label">
          <p className="input_label">Username</p>
          <input type="text" className="input_step1" />
        </label>
        <label className="label">
          <p className="input_label">Email</p>
          <input type="email" className="input_step1" />
        </label>
        <label className="label">
          <p className="input_label">Password</p>
          <input type="password" className="input_step1" />
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
