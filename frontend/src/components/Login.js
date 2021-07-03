import React from 'react';
import back from './images/back.png';
import loginimg from './images/loginimg.png';
import profile from './images/profile.png';

import { Link } from "react-router-dom";
import  './Styles/login.css';



export default function Login() {
    return (
        <div>
            <div className="fContainer">
              <img src={back} ></img>
            </div>
      
          <div className="log-img-setting">
              <img src={loginimg} width="600px"></img>
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
                        <label>Username</label>
                        <input type="text" name="Username" placeholder="Enter Username"></input>
                         </div>
                         <div className="field">
                        <label>Password</label>
                       <input type="password" name="password" placeholder="Enter password"></input>
                         </div>
                         <Link to="#" className="linkTo">Forget Password</Link>
                        
                             <button type="submit" className="fluid ui orange big button">Login</button>
                          
                     </form>

                    
                      
                    
                 </div>
        </div>
    )
}
