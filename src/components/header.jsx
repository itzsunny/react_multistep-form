import React from 'react';
import {IoIosPersonAdd} from 'react-icons/io';




const Header = () => {
  return (
    <header className="header">
      <div className="header_user_container">
        <p className="add_user"><IoIosPersonAdd /></p>
        <p className="sign_up_text">Sign-up to create account</p>
      </div>
      <div className="account_information">
        <div className="acc_info_1">
          <p className="numbers">1</p>
          <p className="personal_info">Account<br/>Information</p>
        </div>
        <div className="acc_info_1">
          <p className="numbers">2</p>
          <p className="personal_info">Personal<br/>Information</p>
        </div>
        <div className="acc_info_1 acc_info_last">
          <p className="numbers">3</p>
          <p className="personal_info">Payment<br/>Information</p>
        </div>
        <div></div>
        <div></div>
      </div>
    </header>
  )
}


export default Header;