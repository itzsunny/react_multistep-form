import React from 'react';
import {IoIosPersonAdd} from 'react-icons/io';
import {IoIosPerson} from 'react-icons/io'




const Header = (props) => {
  return (
    <header className="header">
      <div className="header_user_container">
  <p className="add_user">{props.step > 1 ? <IoIosPerson/>:<IoIosPersonAdd />}</p>
        <p className="sign_up_text">{props.step > 1 ? `Create account for full access` : `Sign-up to create account`}</p>
      </div>
      <div className="account_information">
        <div className="acc_info_1 ">
  <p className="numbers numbers2">{props.step > 1 ? `✓` : `1`}</p>
          <p className="personal_info personal_info2">Account<br/>Information</p>
        </div>
        <div className="acc_info_1">
          <p className={props.step > 1 ? `numbers numbers2` : `numbers`}>{props.step > 2 ? `✓` : `2`}</p>
          <p className= {props.step > 1 ? `personal_info personal_info2` : `personal_info`}>Personal<br/>Information</p>
        </div>
        <div className="acc_info_1 acc_info_last">
          <p className={props.step > 2 ? `numbers numbers2` : `numbers`}>3</p>
          <p className={props.step > 2 ? `personal_info personal_info2` : `personal_info`}>Payment<br/>Information</p>
        </div>
        <div></div>
        <div></div>
      </div>
    </header>
  )
}


export default Header;