import React from 'react';

const Footer = (props) => {
  return (
    <footer className="footer">
      <div>
  <span className="step_count">Step {props.step} 0f 3</span>
      </div>
      <div>
        <span className="cancel" onClick={props.prevStep}>cancel</span>
        <span className="or" >or</span>
        <button className="btn_next" onClick={props.nextStep}>NEXT STEP</button>

      </div>
    </footer>
  )
}


export default Footer;