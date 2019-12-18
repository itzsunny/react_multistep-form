import React from "react";

const Step2 = props => {
  return (
    <div className="step2_container">
      <form className="form_step1">
        <label className="label">
          <p className="input_label">Full name</p>
          <input
            type="text"
            name="fullname"
            className="input_step1"
            onChange={props.handleChange}
            value={props.info.fullname}
          />
        </label>
        <label className="label">
          <p className="input_label ">Country</p>
          <select
            name="country"
            type="text"
            value={props.info.country}
            className="input_step1 input_select"
            onChange={props.handleChange}
          >
            <option>Select country</option>
            <option>India</option>
            <option>United States</option>
          </select>
        </label>
        <label className="label">
          <p className="input_label">Gender</p>
          <input
            type="password"
            className="input_step1"
            name="gender"
            onChange={props.handleChange}
            value={props.info.gender}
          />
        </label>
        <label className="label">
          <p className="input_label">About you</p>
          <textarea
            type="file"
            name="aboutyou"
            className="input_step1 input_textarea"
            onChange={props.handleChange}
            value={props.info.aboutyou}
          ></textarea>
        </label>
      </form>
    </div>
  );
};

export default Step2;
