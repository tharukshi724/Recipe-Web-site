import React from 'react';
import back from './images/back.png';
import register from './images/register.png';
import profile from './images/profile.png';

import { Link } from "react-router-dom";
import  './Styles/register.css';



export default function Register() {
    return (
        <div>
            <div className="fContainer">
              <img src={back} ></img>
            </div>
      
          <div className="log-img-setting">
              <img src={register} width="600px"></img>
          </div>

             <div className="container">
                 <img src={profile} width="200px"></img>
              </div>
                 <div className="title">
                     <h1>Welcome</h1>
                     
                 </div>
                 <div class="wrapper">
                     <form className="ui big form">
                         <div className="sixteen wide field">
                        <label>First name</label>
                        <input type="text" name="fristname" placeholder="Enter First name"></input>
                         </div>
                         <div className="field">
                        <label>Last name</label>
                       <input type="text" name="password" placeholder="Enter Last name"></input>
                         </div>
                         <div className="field">
                        <label>Email</label>
                       <input type="email" name="email" placeholder="Enter Email"></input>
                         </div>
                         <div className="field">
                        <label>Password</label>
                       <input type="password" name="password" placeholder="Enter password"></input>
                         </div>
                         <Link to="#" className="linkTo">Already SignUp</Link>
                        
                             <button type="submit" className="fluid ui orange big button">Sign Up</button>
                          
                     </form>

                    
                      
                    
                 </div>
        </div>
    )
}
