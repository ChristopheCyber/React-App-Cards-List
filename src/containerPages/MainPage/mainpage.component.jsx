import React from 'react';
import './mainpage.styles.css';
import { CardList } from '../../components/card-list/card-list.component.jsx';
import { SearchBox } from '../../components/search-box/search-box.component.jsx';
//TypeScript tsParticles API :
import Particles from "react-tsparticles";
import { jspConfig1 } from "../../jsParticles/particles-configs";

export const MainPage = ({tabCards, constSearchTxt1,  constPicContentType, methodHandleChange}) => {
  //*** Life Cycle method render() {}
    const filteredCards = tabCards.filter(eltTab =>
      eltTab.name.toLowerCase().includes(constSearchTxt1.toLowerCase()));
    // console.log('const filteredCards.length=',
    //   filteredCards.length);
    //               
    //counting filtered cards + according text
    var nbrCards;
    if (filteredCards.length > 1) {
      nbrCards = " ( " + filteredCards.length + " cards in list now ) ";
    }
    else {
      nbrCards = " ( " + filteredCards.length + " card in list now ) ";
    }
    //coloring text number filtered cards 
    var filterBigLowNumber = "bigLow-search";
    if (filteredCards.length < tabCards.length) {
      filterBigLowNumber = "bigLow-search-filtered";
    }
    return (
      <div className="MainPage img-class" >
        <h1> Cards Selection Board </h1>
        <label>
          <i className="bigLow js-grid">Search in cards titles -&gt;</i>
        </label>
        <SearchBox
          id = "searchBoxId"
          propPlaceHolder="Type text for Searching"
          handleChangeFct={methodHandleChange}
        />
        <label>
          <i className={"bigLow " + filterBigLowNumber}>&nbsp; {nbrCards}</i>
        </label>
        <CardList cardsProp1={filteredCards} cardsPropImg={constPicContentType} />
        {/* tsParticles */}
        <div id="tsparticles">
          <Particles
            options={jspConfig1}
          />
        </div>
      </div>
    );
}
