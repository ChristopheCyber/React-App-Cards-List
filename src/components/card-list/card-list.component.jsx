import React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component.jsx';

export const CardList = (prop1) => (
        <div className='card-list-divStyle'>
            { prop1.cardsProp1.map( 
                cardElt => ( 
                    <Card key={cardElt.id} cardProp2={cardElt}/>
                )                    
             ) }

        </div>
)