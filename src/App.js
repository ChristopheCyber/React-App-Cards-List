import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component.jsx';
import { SearchBox } from './components/search-box/search-box.component.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      searchTxt1: '',
      imgSize1: "img-class"
    };
    // binding is necessary to make `this` work in the fct1 called in callback method
    //this.fct1 = this.fct1.bind(this);
  }

  componentDidMount() {
    fetch('./data/json-data-users.json')
      .then(resp1 => resp1.json())
      .then(users1 => this.setState({ cards: users1 }))
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
    const { cards: tabCards, searchTxt1: constSearchTxt1, imgSize1: constImgSize1 } = this.state;
    const filteredCards = tabCards.filter(eltTab =>
      eltTab.name.toLowerCase().includes(constSearchTxt1.toLowerCase()));
    console.log('const filteredCards.length=',
      filteredCards.length);
    //               
    //function anime filtered cards
    var classAnim = "img-class";
    function fctClassAnim(eltSearch) {
      console.log('in fctClassAnim()=> eltSearch=', eltSearch);
      /*constSearchTxt1 = this.state.searchTxt1;*/
      var filteredCards2 = tabCards.filter(eltTab =>
        eltTab.name.toLowerCase().includes(eltSearch.toLowerCase()));
      console.log('in fctClassAnim()=> filteredCards2.length=',
        filteredCards2.length);
      /*document.querySelector('.img-class').classList.toggle('img-class-filtered');*/
      if (filteredCards2.length < tabCards.length) {
        classAnim = "card-list-filtered";
        /*document.getElementsByTagName('img')[0].style.height='100px';
            this.state.cards.map( cardElt => 
              <h1 key={cardElt.id}> {cardElt.name} </h1> )
          document.querySelectorAll('.img-class')[0].classList.toggle('img-class-filtered');
        */
      }
      else {
        classAnim = "img-class";
      };
      console.log('in fctClassAnim()=> filteredCards2.length=',
        filteredCards2.length, '=> classAnim=', classAnim);
      console.log('document.querySelector(\'.img-class\')=',
        document.querySelector('.img-class'));

    }
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
    /*
    function fctEv(event1){
      console.log("fctEv starts with:",event1);
      fctTestv();
      document.querySelector('.js-grid').classList.toggle('container-grid-animate');
      document.querySelector('.img-class').classList.toggle('card-list-filtered');
    };
    */
    return (
      <div className="App img-class">
        <label>
          <i className="bigLow js-grid">
            Search in cards titles -&gt;
          </i>
        </label>
        <SearchBox
          propPlaceHolder="Type text for Searching"
          handleChangeFct={  /* (evt) =>{
                       this.setState ( {searchTxt1:evt.target.value} )*/
            (evt) => {
              console.log("Change Event !!!");
              //fctClassAnim() placed in callback of setState( ,()=>... )
              this.setState({ searchTxt1: evt.target.value },
                () => {
                  console.log("in Event deb searchTxt1=", this.state.searchTxt1,
                    " classAnim=", classAnim);
                  fctClassAnim(this.state.searchTxt1);
                  console.log("in Event fin1 classAnim=", classAnim,
                    '; this.state.imgSize1=', this.state.imgSize1
                  );
                  this.setState({ imgSize1: classAnim },
                    console.log("in Event fin2 classAnim= ", classAnim,
                      '; this.state.imgSize1= ', this.state.imgSize1,
                      '; constImgSize1= ', constImgSize1)
                  );
                });
            }
          }
        />
        <label>
          <i className={"bigLow " + filterBigLowNumber}>
            &nbsp; {nbrCards}
          </i>
        </label>

        {/*<CardList cardsProp1={this.state.cards} />*/}
        <CardList cardsProp1={filteredCards} cardsPropImg={constImgSize1} />
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
