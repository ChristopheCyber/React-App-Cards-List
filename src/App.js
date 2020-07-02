import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    constructor(){
    super();
    this.state={//Array cards
      cards:[
        {
          name:"Egypt Giza Pyramid Cheops", id:"card1"
        },
        {
          name:"Egypt Giza Pyramid Chephren", id:"card2"
        },
        {
          name:"Egypt Giza Pyramid Mykerinos", id:"card3"
        },        
        {
          name:"Egypt Giza Sphinx", id:"card4"
        }
      ]
    }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then ( resp1 => resp1.json() )
    .then ( users1 => this.setState( {cards : users1} ) )
  }
  render() {
    return (
      <div className="App">
        {
          this.state.cards.map( cardElt => <h1 key={cardElt.id}> {cardElt.name} </h1> )
        }
      </div>
    )
  }
}

export default App;
