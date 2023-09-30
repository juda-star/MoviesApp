import React from "react";
import Button from "@mui/material/Button";

import "./login.css";
export const Login = () => {
  return (
    <div>
      <div className="container">
        <h2>
         Hi For Full Version<br />
           Please Sign In ... 
        </h2>
          
        <label htmlFor="">email</label>
        <input type="text" />
        <h4>At least 8 characters</h4> 
        <label htmlFor="">password</label>
        <input type="text" />
        <h4>At least 8 characters</h4>
        <div className="btn">
          <a href="">
            <Button  variant="contained" size="small" >Submit</Button>
          </a>
        </div>
      </div>
    </div>
  );
};
