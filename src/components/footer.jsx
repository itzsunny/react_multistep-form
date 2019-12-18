import React from 'react';

const Footer = (props) => {
  return (
    <footer className="footer">
      {props.step < 3 ?
      <>
           <div>
           <span className="step_count">Step {props.step} 0f 3</span>
               </div>
               <div>
                 <span className="cancel" onClick={props.prevStep}>cancel</span>
                 <span className="or" >or</span>
                 <button className="btn_next" onClick={props.nextStep}>NEXT STEP</button>
         
               </div>
               </> : 
               <div className="footer2">
<button className="btn_next" onClick={props.nextStep}>SUBMIT</button> 
<span className="submit_text">By submitting this form, you agree with our <span className="cancel">Terms and Conditions</span></span>
               </div>
                }
 
    </footer>
  )
}


export default Footer;