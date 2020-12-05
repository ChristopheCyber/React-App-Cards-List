import React from 'react';
import { CardList } from "./card-list.component.jsx";

//ENZYME fncts: ( we don't use MOUNT and RENDER here )
import { shallow } from "enzyme";

const mockArrayCard_0 = [{
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
  }];

  describe('Group Script card-list.test.I: ', () => {
    it('Test card-list.test.I.1; Snapshot testing:', () => {
        expect.assertions(1);
        // testing if shallow rendering correctly:
        expect(shallow( <CardList cardsProp1={mockArrayCard_0} cardsPropImg={"img-class"}/> )).toMatchSnapshot();
    });
});
