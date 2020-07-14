import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component.jsx';

class App extends React.Component {
    constructor(){
    super();
    this.state = {
      cards: [],
      searchTxt1: ''
    };
  }

 componentDidMount(){
  fetch('./data/json-data-users.json')
  .then ( resp1 => resp1.json() )
  .then ( users1 => this.setState( {cards : users1} ) )
}
  /*--
    componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then ( resp1 => resp1.json() )
    .then ( users1 => this.setState( {cards : users1} ) )
  }
  */

  render() {
      /*destructuring object state, doing same as:*/
      /* const tabCards = this.state.cards; 
      const constSearchTxt1 = this.state.searchTxt1; */
      const { cards:tabCards, searchTxt1:constSearchTxt1 } = this.state;
      const filteredCards =  tabCards.filter(eltTab => 
          eltTab.name.toLowerCase().includes(constSearchTxt1.toLowerCase()) );  
      const nbrCards =  filteredCards.length;

      return (
      <div className="App">
        <label><i className="bigLow">Search in cards titles -> </i></label>
        <input type="search" placeholder="Type text for Searching" 
          name="search1" onChange={event1 => 
                this.setState ({searchTxt1:event1.target.value})
              }
            />
        <label><i className="bigLow">
        &nbsp; ( &lt; {nbrCards} &gt; cards in list now )</i></label>
        {/*<CardList cardsProp1={this.state.cards} />*/}
        <CardList cardsProp1={filteredCards} />
          {/*1 children of CardList component 
          <h2>CardList children here </h2>
          {
            this.state.cards.map( cardElt => 
              <h1 key={cardElt.id}> {cardElt.name} </h1> )
          }
        </CardList> 
          */}
      </div>
    )
  }
}
export default App;
