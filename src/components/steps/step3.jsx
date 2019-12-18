import React from 'react';

const Step3 = () => {
  return (
    <section className="step1_container">
    <form className="form_step1">
      <label className="label">
        <p className="input_label">Payment type</p>
        <input type="text" className="input_step1" />
      </label>
      <label className="label">
        <p className="input_label">Credit Card</p>
        <input type="email" className="input_step1" />
      </label>
      <label className="label">
        <p className="input_label">Expiration date</p>
        <input type="password" className="input_step1" />
      </label>
      <label className="label">
        <p className="input_label">Name on card</p>
        <input type="text" className="input_step1" />
      </label>
    </form>
  </section>
  )
}

export default Step3;