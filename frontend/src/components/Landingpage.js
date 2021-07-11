import React from 'react';
import Cards from './Cards';

import Footer from './Footer';
import breakfast from './images/hands.jpg';
import './Styles/Landingpage.css';

function Landingpage() {
    return (
        <div>
             <img src={breakfast}></img>
           <div className="hero-container">
            
             <h1>Wow Foods</h1>
             <p>What are you waiting for ?</p>
             <div class="hero-btn">
                <button className="ui large button" buttonStyle="ui outline" buttonSize="ui large button">Get Started</button>

            </div>  
            <div class="hero-btn">
                <button className="ui primary large button" buttonStyle="ui primary" buttonSize="ui primary large button">Watch</button>

            </div>        
          </div> 

          
     
         
            <Cards></Cards>
         
            <Footer/>
        </div>
         
    )
}

export default Landingpage
