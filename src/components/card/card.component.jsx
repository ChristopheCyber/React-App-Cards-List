import React from 'react';
import './card.styles.css';
import img01 from './img/img08.jpg' // relative path to image 

export const Card = (prop1) => (
    <div className='card-container'> 
        <h1> {prop1.cardProp2.name} </h1>
        <img src={img01} alt={"pic 01"} />
        {/*
        <img title="Image 02" src={ require('./img/min/img02.jpg')} alt={"pic 02"} />
        <img title="Image 01" src={img01} alt={"pic 01"} />
        <img src="https://robohash.org/1?set=set3" alt="pic 03"/>
        */}
    </div>
);
