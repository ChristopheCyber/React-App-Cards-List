import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component.jsx';
//import jsonData from '../public/data/json-data.json';

class App extends React.Component {
    constructor(){
    super();
    this.state={//Array cards
      cards:[]
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
        <CardList cardsProp1={this.state.cards}>
          {/*1 children of CardList component 
          <h2>CardList children here </h2>
          {
            this.state.cards.map( cardElt => 
              <h1 key={cardElt.id}> {cardElt.name} </h1> )
          }
          */}
        </CardList> 
      </div>
    )
  }
}
export default App;
