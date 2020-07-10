import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component.jsx';

class App extends React.Component {
    constructor(){
    super();
    this.state={//Array cards
      cards:[],
      searchTxt1: ''
    }
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
    return (
      <div className="App">
        <label>Search cards: </label>
        <input type="search" placeholder="Type text for Searching" 
          name="search1" onChange={event1 => 
              this.setState ({searchTxt1:event1.target.value},
                ()=>console.log(this.state))
          }/>
        <CardList cardsProp1={this.state.cards} />
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
