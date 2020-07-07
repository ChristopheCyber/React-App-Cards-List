import React from 'react';
import './card.styles.css';
//import img01 from './img/img01.jpg' // relative path to image 

export const Card = (prop1) => (
    <div className='card-container'> 
        <h1> {prop1.cardProp2.name} </h1>
  
        <img src={ require(`./img/img${prop1.cardProp2.id}.jpg`)} 
            alt={"pic 01"} 
            title={`Image ${prop1.cardProp2.id}`}
        />
        {/*     
        <img src={ require('./img/min/img02.jpg')} alt={"pic 02"} />
        <img title={"Image 01"} src={img01} alt={"pic 01"} />
        <img src={`https://robohash.org/${prop1.cardProp2.id}?set=set3`} alt="pic 03"/>
        */}
    </div>
);
