import React from 'react'



const Step2 = () => {
  return (
    <div className="step2_container">
      <form className="form_step1">
        <label className="label">
          <p className="input_label">Full name</p>
          <input type="text" className="input_step1" />
        </label>
        <label className="label">
          <p className="input_label ">Country</p>
          <select type="text" className="input_step1 input_select" >
            <option>India</option>
            <option>United States</option>
          </select>
        </label>
        <label className="label">
          <p className="input_label">Gender</p>
          <input type="password" className="input_step1" />
        </label>
        <label className="label">
          <p className="input_label">About you</p>
          <textarea type="file" className="input_step1 input_textarea" ></textarea>
        </label>
      </form>
    </div>
  )
}

export default Step2;