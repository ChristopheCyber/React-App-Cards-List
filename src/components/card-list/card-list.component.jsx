import React from 'react';
import './card-list.styles.css';
export const CardList = (prop1) => {
    {/*
    const card-list-divStyle = {
        margin: '20px 40px 20px 40px',
        border: '5px solid pink',
        height: '80px',
        backgroundColor:`lightgreen`
      };
       return (
        <div style={card-list-divStyle}>
            {prop1.children}
        </div>
    );
    */}
    return (
        <div className='card-list-divStyle'>
            {prop1.children}
        </div>
    );
}