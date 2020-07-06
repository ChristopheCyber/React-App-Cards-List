import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';


class App extends React.Component {
    constructor(){
    super();
    this.state={//Array cards
      cards:[]
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
        <CardList cardsProp1={this.state.cards}>
          {/* children of CardList component 
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
