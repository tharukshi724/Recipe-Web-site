import React from 'react'
import soup1 from './images/soup1.jpg';
import soup2 from './images/soup2.jpg';
import soup3 from './images/soup3.jpg';
import soup4 from './images/soup4.jpg';
import CardItem from './CardItem';

function SoupCards() {
    return (
        <div>
             <div className="cards">

           

<h1>check out food</h1>
<div className="cards_container">
    <div className="cards_wrapper">
        <ul className="cards_items">
            <CardItem
             src={soup1}
             text='Explore the hidden waterfall deep inside the Amazon Jungle'
             label='Adventure'
             path='/cookies'
            
            />
              <CardItem
             src={soup2}
             text='Explore the hidden waterfall deep inside the Amazon Jungle'
             label='Adventure'
             path='/services'
            
            />
           
        </ul>
        <ul className="cards_items">
           
              <CardItem
             src={soup3}
             text='Explore the hidden waterfall deep inside the Amazon Jungle'
             label='Adventure'
             path='/services'
            
            />
              <CardItem
             src={soup4}
             text='Explore the hidden waterfall deep inside the Amazon Jungle'
             label='Adventure'
             path='/services'
            
            />
        </ul>
        <ul className="cards_items">
           
           <CardItem
          src={soup3}
          text='Explore the hidden waterfall deep inside the Amazon Jungle'
          label='Adventure'
          path='/services'
         
         />
           <CardItem
          src={soup1}
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

export default SoupCards
