import React from 'react';
import './Styles/Cards.css';
import CardItem from './CardItem';

import cake1 from './images/cake1.jpg';





function Cards() {
    return (
        <div>
            <div className="cards">

           

                <h1>We Cook Best Tasty Foods</h1>
                <p>you jheen dhfjdf fhdjf fhdjf fhdj dfhjdf dfjdfdf dfkjkfjdk dfjhdf jdfdkf fdhfkdf dfkjkfjdkkn
                    jnfdfkd jfkdfjdkf fkjsks dkfjkdf dfkd djfkdf fdfkf fjdfkd fkfdj dkjfkdf dkjfkdf fkdfkjd 
                    dfkdf kfdjdkf kfkdf kfjdkf flf fkdjf kfjk kdfjdk kdf kdfkd dkfj  kjskf kfdk kfd kf kfkd kf kfjd dff

                    It wouldn't be fair to say that conservatives cherish property the way liberals cherish equality. But it would be fair to say that the takings clause is the conservatives' recipe for judicial activism just as they say liberals have misused the equal protection clause.
Read more at https://www.brainyquote.com/topics/recipe-quotes
It wouldn't be fair to say that conservatives cherish property the way liberals cherish equality. But it would be fair to say that the takings clause is the conservatives' recipe for judicial activism just as they say liberals have misused the equal protection clause.
Read more at https://www.brainyquote.com/topics/recipe-quotes

                </p>
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
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
