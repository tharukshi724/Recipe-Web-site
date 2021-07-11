import React from 'react'
import BakeryCards from './BakeryCards';
import bakery5 from './images/bakery5.jpg';

function Bakery() {
    return (
        <div>
             <div className="main">
                  <img src={bakery5} alt=""></img>
               </div>  
               <div className="center-left">
                  Chocolate Cakes
                
               </div>
               <div className="carrd">
                   <BakeryCards/>
               </div>
        </div>
    )
}

export default Bakery
