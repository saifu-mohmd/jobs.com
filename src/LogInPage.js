import React, { useState } from "react";
import "./LogInPage.css";
import "react-bootstrap";

const LogInPage = () => {

  const [action,setAction] = useState("Sign Up");


  return (
    <div className="body signInPage">
    <div className="login  ">
      <div className="login_header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs ">
        {action==="Login"?<div></div> :  <div className="input ">
        <img src="Image/person.png" alt='person_img' />
        <input type="text" placeholder="Name" />
      </div>}
     

      <div className="inputs"></div>
      <div className="input ">
        <img src="Image/email.png" alt='email_img'/>
        <input type="email" placeholder="Email Id"/>
      </div>

      <div className="inputs"></div>
      <div className="input ">
        <img src="Image/password.png" alt='password_img' />
        <input type="password" placeholder="Password"/>
      </div>
      </div>

      {action==="Sign Up" ? <div></div> : <div className="forgot_password">
        <a href="#forgot Password" className="forgotPass">
        Forgot Password ?</a>
      </div>}

      

      <div className="submit_container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Log In</div>
      </div>

    </div>
    </div>
  );
}

export default LogInPage;
