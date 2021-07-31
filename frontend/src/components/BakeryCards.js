import React from 'react'
import CardItem from './CardItem';

import bakery2 from './images/bakery2.jpg';
import bakery3 from './images/bakery3.jpg';
import bakery4 from './images/bakery4.jpg';
import bakery5 from './images/bakery5.jpg';


function BakeryCards() {
    return (
        <div>
              <div className="cards">

           

<h1>check out food</h1>
<div className="cards_container">
    <div className="cards_wrapper">
        <ul className="cards_items">
            <CardItem
             src={bakery2}
             text='Explore the hidden waterfall deep inside the Amazon Jungle'
             label='Adventure'
             path='/cookies'
            
            />
              <CardItem
             src={bakery2}
             text='Explore the hidden waterfall deep inside the Amazon Jungle'
             label='Adventure'
             path='/services'
            
            />
           
        </ul>
        <ul className="cards_items">
           
              <CardItem
             src={bakery3}
             text='Explore the hidden waterfall deep inside the Amazon Jungle'
             label='Adventure'
             path='/services'
            
            />
              <CardItem
             src={bakery4}
             text='Explore the hidden waterfall deep inside the Amazon Jungle'
             label='Adventure'
             path='/services'
            
            />
        </ul>
        <ul className="cards_items">
           
           <CardItem
          src={bakery3}
          text='Explore the hidden waterfall deep inside the Amazon Jungle'
          label='Adventure'
          path='/services'
         
         />
           <CardItem
          src={bakery5}
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

export default BakeryCards
