import React from 'react';
import './card.styles.css';

export const Card = (prop1) => {
    return (
        <div className='card-container'> 
            <h1> {prop1.cardProp2.name} </h1>
        </div>
    );
}