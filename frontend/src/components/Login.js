import React,{useRef,useState,useEffect} from 'react';
import back from './images/back.png';
import loginimg from './images/loginimg.png';
import profile from './images/profile.png';

import { Link } from "react-router-dom";
import  './Styles/login.css';
import axios from 'axios';



export default function Login() {

    
    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");
    const myInput = useRef();


    useEffect(()=>
         myInput.current && myInput.current.focus());
    
    function validate(e){

        e.preventDefault();
        const userValidate ={
            username,
            password
        }
       axios.post("http://localhost:8070/user/validate",userValidate).then(()=>{
           alert("succeefully log in");
       }).catch((err)=>{
           alert(err);
       })

    }
   
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
                     <form className="ui big form" onSubmit={validate}>
                         <div className="sixteen wide field">
                        <label>Username</label>
                        <input type="text" name="Username" placeholder="Enter Username" inputRef={myInput} onChnage={(e)=>{
                            setUsername(e.target.value);
                        }}></input>
                         </div>
                         <div className="field">
                        <label>Password</label>
                       <input type="password" name="password" placeholder="Enter password" onChange={(e)=>{
                           setPassword(e.target.value);
                       }}></input>
                         </div>
                         <Link to="#" className="linkTo">Forget Password</Link>
                        
                             <button type="submit" className="fluid ui orange big button">Login</button>
                          
                     </form>

                    
                      
                    
                 </div>
        </div>
    )
}
