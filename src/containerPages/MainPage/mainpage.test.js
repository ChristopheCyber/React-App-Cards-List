import React from 'react';
// import { render } from '@testing-library/react';
import {MainPage} from './mainpage.component.jsx';

//ENZYME fncts: ( we don't use MOUNT and RENDER here )
import { shallow } from "enzyme";

/*
test('/Cards Selection Board/ text', () => {
  expect.assertions(1);
  const { getByText } = render(<MainPage />);
  const linkElement = getByText(/Cards Selection Board/i);
  expect(linkElement).toBeInTheDocument();
});
 */

const mockStore = {
  cards: [{
    "id": 1,
    "name": "React framework. ( card 1 )",
    "cardname": "React",
    "email": "ChrisCyb01@bla.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "https://reactjs.org/",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "e-business app web01"
    }
  }],
  searchTxt1: '',
  picContentType: "img-class",

  observable : () => null,
  dispatch : () => null,
  suscribe : () => null,
  getState : () => null,
  replaceReducer : () => null
};
describe('Group Script mainpage.test.I: ', () => {
  it('Test mainpage.test.I.1; Snapshot testing:', () => {
    expect.assertions(1);
    const wrapper = shallow( <MainPage tabCards={mockStore.cards} constSearchTxt1={mockStore.searchTxt1} constPicContentType={mockStore.picContentType} methodHandleChange={() => null}/> );
    // testing if shallow rendering correctly:
    expect(wrapper).toMatchSnapshot();
  });
});
/*
describe('Group Script mainpage.test.II: ', () => {
  it('Test mainpage.test.II.1; State testing:', () => {
    expect.assertions(1);
    //test MainPage :
    const wrapper = shallow( <MainPage/> );
    // testing :
    //*
    //.find() and simulate(events) methods comming with ENZYME:
    // wrapper.find('[id="searchBoxId"]').simulate('click');
    // wrapper.find('[id="searchBoxId"]').simulate('change');
    //*
    expect(wrapper.state('picContentType')).toEqual('img-class');
  });
});
*/
