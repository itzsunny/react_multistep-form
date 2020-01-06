import React from 'react';

const Step3 = (props) => {
  return (
    <section className="step1_container">
    <form className="form_step1" onSubmit={props.onSubmit} noValidate>
      <label className="label">
        <p className="input_label">Payment type</p>
        <input type="text" className="input_step1" 
        name="paymenttype"
        onChange={props.handleChange}
        value={props.info.paymenttype}/>
      </label>
      <label className="label">
        <p className="input_label">Credit Card</p>
        <input type="number" className="input_step1"
        name="creditcard"
        onChange={props.handleChange}
        value={props.info.creditcard}/>
      </label>
      <label className="label">
        <p className="input_label">Expiration date</p>
        <input type="date" className="input_step1"
         name="expirationdate"
         onChange={props.handleChange}
         value={props.info.expirationdate}/> 
      </label>
      <label className="label">
        <p className="input_label">Name on card</p>
        <input type="text" className="input_step1"
         name="nameoncard"
         onChange={props.handleChange}
         value={props.info.nameoncard}/>
      </label>
    </form>
  </section>
  )
}

export default Step3;