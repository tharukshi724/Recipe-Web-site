import React from 'react';
import './Styles/Cards.css';
import CardItem from './CardItem';

import cake1 from './images/cake1.jpg';





function Cards() {
    return (
        <div>
            <div className="cards">

           

                <h1>check out food</h1>
                <div className="cards_container">
                    <div className="cards_wrapper">
                        <ul className="cards_items">
                            <CardItem
                             src={cake1}
                             text='Explore the hidden waterfall deep inside the Amazon Jungle'
                             label='Adventure'
                             path='/cookies'
                            
                            />
                              <CardItem
                             src={cake1}
                             text='Explore the hidden waterfall deep inside the Amazon Jungle'
                             label='Adventure'
                             path='/services'
                            
                            />
                             <CardItem
                             src={cake1}
                             text='Explore the hidden waterfall deep inside the Amazon Jungle'
                             label='Adventure'
                             path='/services'
                            
                            />
                              <CardItem
                             src={cake1}
                             text='Explore the hidden waterfall deep inside the Amazon Jungle'
                             label='Adventure'
                             path='/services'
                            
                            />
                        </ul>
                        <ul className="cards_items">
                            <CardItem
                             src={cake1}
                             text='Explore the hidden waterfall deep inside the Amazon Jungle'
                             label='Adventure'
                             path='/services'
                            
                            />
                              <CardItem
                             src={cake1}
                             text='Explore the hidden waterfall deep inside the Amazon Jungle'
                             label='Adventure'
                             path='/services'
                            
                            />
                              <CardItem
                             src={cake1}
                             text='Explore the hidden waterfall deep inside the Amazon Jungle'
                             label='Adventure'
                             path='/services'
                            
                            />
                              <CardItem
                             src={cake1}
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

export default Cards
