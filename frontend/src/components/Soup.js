import React from 'react'
import soup3 from './images/soup3.jpg';
import SoupCards from './SoupCards';

function Soup() {
    return (
        <div>
              <div className="main">
                  <img src={soup3} alt=""></img>
               </div>  
               <div className="center-left">
                  Chocolate Cakes
                
               </div>
               <div className="carrd">
                   <SoupCards/>
               </div>
        </div>
    )
}

export default Soup
