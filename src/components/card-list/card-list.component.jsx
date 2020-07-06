import React from 'react';
import './card-list.styles.css';

export const CardList = (prop1) => {
    return (
        <div className='card-list-divStyle'>
            {/* {prop1.children} */}
            {
            prop1.cardsProp1.map( cardElt => 
            <h1 key={cardElt.id}> {cardElt.name} </h1> )
            }
        </div>
    );
}