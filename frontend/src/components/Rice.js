import React from 'react'
import rice3 from './images/rice3.jpg';
import RiceCards from './RiceCards';

function Rice() {
    return (
        <div>
               <div className="main">
                  <img src={rice3} alt=""></img>
               </div>  
               <div className="center-left">
                  Chocolate Cakes
                
               </div>
               <div className="carrd">
                   <RiceCards/>
               </div>

        </div>
    )
}

export default Rice
