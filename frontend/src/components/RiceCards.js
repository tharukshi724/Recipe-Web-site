import React from 'react'
import CardItem from './CardItem';
import rice1 from './images/rice1.jpg';
import rice2 from './images/rice2.jpg';
import rice3 from './images/rice3.jpg';
import rice4 from './images/rice4.jpg';


function RiceCards() {
    return (
        <div>
             <div className="cards">

           

<h1>check out food</h1>
<div className="cards_container">
    <div className="cards_wrapper">
        <ul className="cards_items">
            <CardItem
             src={rice1}
             text='Explore the hidden waterfall deep inside the Amazon Jungle'
             label='Adventure'
             path='/cookies'
            
            />
              <CardItem
             src={rice2}
             text='Explore the hidden waterfall deep inside the Amazon Jungle'
             label='Adventure'
             path='/services'
            
            />
           
        </ul>
        <ul className="cards_items">
           
              <CardItem
             src={rice3}
             text='Explore the hidden waterfall deep inside the Amazon Jungle'
             label='Adventure'
             path='/services'
            
            />
              <CardItem
             src={rice4}
             text='Explore the hidden waterfall deep inside the Amazon Jungle'
             label='Adventure'
             path='/services'
            
            />
        </ul>
        <ul className="cards_items">
           
           <CardItem
          src={rice4}
          text='Explore the hidden waterfall deep inside the Amazon Jungle'
          label='Adventure'
          path='/services'
         
         />
           <CardItem
          src={rice2}
          text='Explore the hidden waterfall deep inside the Amazon Jungle'
          label='Adventure'
          path='/services'
         
         />
     </ul>
    </div>
</div>
</div> 
        </div>
    )
}

export default RiceCards
