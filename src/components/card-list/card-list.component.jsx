import React from 'react';
import './card-list.styles.css';
export const CardList = (prop1) => {

    return (
        <div className='card-list-divStyle'>
            {prop1.children}
        </div>
    );
}