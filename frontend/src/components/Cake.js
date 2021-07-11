import React from 'react'
import CakeCards from './CakeCards';

import cake3 from './images/cake3.jpg';
import  './Styles/CookiesRecipe.css';

function Cake() {
    return (
        <div>
            <div class="ui category search">
               <div class="ui icon input">
                  <input class="prompt" type="text" placeholder="Search cookies..."></input>
                     <i class="search icon"></i>
              </div>
              <div class="results"></div>
            </div>
           
               <div className="main">
                  <img src={cake3} alt=""></img>
               </div>  
               <div className="center-left">
                  Chocolate Cakes
                
               </div>
               <div className="carrd">
                   <CakeCards/>
               </div>

        </div>
    )
}

export default Cake
