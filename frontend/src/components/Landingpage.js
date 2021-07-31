import React from 'react';
import Cards from './Cards';
import Description from './Description';

import Footer from './Footer';
import main from './images/main.jpg';
import './Styles/Landingpage.css';

function Landingpage() {
    return (
        <div>
             
           <div className="hero-container">
           <img src={main}></img>
            
            <div className="titleName">
                <h1>Tasty Food</h1>
            </div> 
            <div className="dis">
                <h3>Try Best Recipes All Over The World</h3>
            </div>
            <div className="btn">
                <button type="submit" className="huge ui inverted green button">Get Started</button>
                </div>
          </div> 

          
     
         
            <Cards></Cards>
          
           <Footer/>
          
          
        </div>
         
    )
}

export default Landingpage
