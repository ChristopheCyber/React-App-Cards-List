import React from 'react';
import './card.styles.css';
//import img01 from './img/img01.jpg' // relative path to image 

// for REDUX use
import { connect } from 'react-redux';
//for REDUX / Selectors
// import { selectCurrentUser } from '../../redux/user/user.selectors.js';

//Redux exporting: export const Card = (prop1) => (
const Card = ( prop1 , cardType ) => (
    <div className={'card-container ' + cardType + '-card'} >
        {/*<div className='card-container'> */}
        <strong> {prop1.cardProp2.name} </strong>
        { console.log('In Card ', prop1.cardProp2.id
            , '=>', prop1.cardProp2.name
            , 'cardType=>', cardType)}
        {/* ---my pics--- */}
        {/* WebPack pbm require('pic') => <img src="[object Module]"/>
            SOLUTION => put require('pic').DEFAULT as: 
            <img src={require(`./img/img${prop1.cardProp2.id}.jpg`).default} />

            or => without require(); and with placing directory /img/ in /public (= window.location.origin = http://localhost:3000/):    
            <img src={window.location.origin + `/img/img${prop1.cardProp2.id}.jpg`} />
        */}
        <img src={require(`./img/img${prop1.cardProp2.id}.jpg`).default}
            alt={`Pic ${prop1.cardProp2.id}`}
        /* title={`${prop1.cardProp2.cardname} card`} */
        /* className={`${cardType}`} */
        />
        <span>
            <a href={prop1.cardProp2.website} target="_blank" rel="noopener noreferrer">
                <strong>Website Info: </strong>{prop1.cardProp2.cardname}
            </a>
        </span>
        <strong> Pic content : </strong>
        <span>
            One of my skills{cardType === "img-class" ? "." : " (filtered)"}
        </span>
        {/* 
        {/*---origin pics---
        <img src={ require(`./img/img${prop1.cardProp2.id}.jpg`)} 
            alt={`Pic ${prop1.cardProp2.id}`} 
            title={`Image ${prop1.cardProp2.id}`}
        />
        <img src={`https://robohash.org/${prop1.cardProp2.id}?set=set4&size=180x180`} alt="pic 03"/>
        <img src={ require('./img/min/img02.jpg')} alt={"pic 02"} />
        <img title={"Image 01"} src={img01} alt={"pic 01"} />
        <img src={`https://robohash.org/${prop1.cardProp2.id}?set=set3`} alt="pic 03"/>
        */}
    </div>
);

//REDUCER simple calling 
const mapStateToProps = (state) => ({
    cardType: state.keyCardType.cardType
  }); 
//connecting component to Redux:
export default connect(mapStateToProps)(Card);
  
