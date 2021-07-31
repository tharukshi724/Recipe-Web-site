import React,{useState} from 'react';
import whole from './images/whole.png';
import signup from './images/signup.png';
import profile from './images/profile.png';

import { Link } from "react-router-dom";
import  './Styles/register.css';
import axios from 'axios';



export default function Register() {
     
    const[firstname , setFirstname] = useState("");
    const[lastname,setLastname] = useState("");
    const[username,setUsername] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    function subData(e){
         e.preventDefault();

         const newUser={
             firstname,
             lastname,
             username,
             email,
             password
         }

       axios.post("http://localhost:8070/user/adduser",newUser).then(()=>{
           alert("success");
       }).catch((err)=>{
           alert(err);
       })
    }


    return (
        <div>
            <div className="fullBody">

            
            <div className="fContainer">
              <img src={whole} ></img>
            </div>
      
          <div className="log-img-setting">
              <img src={signup} width="600px"></img>
          </div>

             <div className="container">
                
              </div>
                 <div className="title">
                     <h1>SIGNUP</h1>
                     
                 </div>
                 <div class="wrapper">
                     <form className="ui big form" onSubmit={subData}>
                         <div className="sixteen wide field">
                        <label>First name</label>
                        <input type="text" name="fristname" placeholder="Enter First name" onChange={(e)=>{
                            setFirstname(e.target.value);
                        }}></input>
                         </div>
                         <div className="field">
                        <label>Last name</label>
                       <input type="text" name="lastname" placeholder="Enter Last name" onChange={(e)=>{
                           setLastname(e.target.value);
                       }}></input>
                         </div>

                         <div className="field">
                         <label>Username</label>
                             <input type="text" name="username" placeholder="Enter a username" onChange={(e)=>{
                                 setUsername(e.target.value);
                             }}></input>
                             </div>
                         <div className="field">
                       

                        <label>Email</label>
                       <input type="email" name="email" placeholder="Enter Email" onChange={(e)=>{
                           setEmail(e.target.value);
                       }}></input>
                         </div>
                         <div className="field">
                        <label>Password</label>
                       <input type="password" name="password" placeholder="Enter password" onChange={(e)=>{
                           setPassword(e.target.value);
                       }}></input>
                         </div>
                         <Link to="#" className="linkTo">Already SignUp</Link>
                        
                             <button type="submit" className="fluid ui medium sea green big button">Sign Up</button>
                          
                     </form>

                    
                      
                    
                 </div>
                 </div>    
        </div>
    )
}
