import React from 'react';
import './App.css';
import { MainPage } from './containerPages/MainPage/mainpage.component.jsx';
// for Redux use :
import { connect } from 'react-redux';
import { setCardType } from './redux/card/card-actions';
//
export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      searchTxt1: '',
      picContentType: "img-class"
    };
    //binding is necessary to make `this` work in a fct1 called as callback method from another method
    //this.fct1 = this.fct1.bind(this);
  }
  //*** Life Cycle method componentDidMount() {}
  componentDidMount() {
    fetch('./data/json-data-users.json') //fetch("https://jsonplaceholder.typicode.com/users")
      .then(resp1 => resp1.json())
      .then(users1 => this.setState({ cards: users1 }))
  }
  //*** method perso created as an Arrow Function
  methodHandleChange = (evt) => { // (evt) =>{this.setState ( {searchTxt1:evt.target.value} )
    console.log("Change Event !!!");
    // setState() 
    this.setState({ searchTxt1: evt.target.value },
      () => {
        // console.log("in Event deb searchTxt1=", this.state.searchTxt1, " classAnim=", classAnim);

        //  fctClassAnim() placed in callback of setState( ,()=>... )   
        fctClassAnim(this.state.searchTxt1);

        // console.log("in Event fin1 classAnim=", classAnim, '; this.state.picContentType=', this.state.picContentType);
        //
        this.setState({ picContentType: classAnim },
          // console.log("in Event fin2 classAnim= ", classAnim, '; this.state.picContentType= ', this.state.picContentType, '; constPicContentType= ', constPicContentType)
        );
      });
    // 
    // function fctClassAnim() anime filtered cards */
    var classAnim = "img-class";
    const tabCards = this.state.cards;
    const constPicContentType = this.state.picContentType;
    //Redux:
    this.props.fctSetCardType(constPicContentType);

    function fctClassAnim(eltSearch) {
      console.log('in fctClassAnim()=> eltSearch=', eltSearch);
      /*constSearchTxt1 = this.state.searchTxt1;*/
      var filteredCards2 = tabCards.filter(eltTab =>
        eltTab.name.toLowerCase().includes(eltSearch.toLowerCase()));
      console.log('in fctClassAnim()=> filteredCards2.length=',
        filteredCards2.length);
      if (filteredCards2.length < tabCards.length) {
        classAnim = "card-list-filtered";
      }
      else {
        classAnim = "img-class";
      };
      console.log('in fctClassAnim()=> filteredCards2.length=',
        filteredCards2.length, '=> classAnim=', classAnim);
      console.log('document.querySelector(\'.img-class\')=',
        document.querySelector('.img-class'));
    }
    //
  }
  //*** Life Cycle method render() {}
  render() {
    return (
      <div>
        <MainPage tabCards={this.state.cards} constSearchTxt1={this.state.searchTxt1} constPicContentType={this.state.picContentType} methodHandleChange={this.methodHandleChange}/>
      </div>
    );
  }
}
// export default App;

const mapDispatchToProps = dispatch => ({
  //defining the fct 
  fctSetCardType: (type) => dispatch(setCardType(type))
});

export default connect(
  null,
  mapDispatchToProps
)(App);