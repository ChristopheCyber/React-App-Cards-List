import React from 'react';
//ENZYME fncts: ( we don't use MOUNT and RENDER here )
// import { shallow,mount,render } from "enzyme";
import { shallow } from "enzyme";

import { Card } from "./card.component.jsx";

const card_0 = {
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
  };

console.log("card.test script => card_0 =",card_0);
describe('Group Script card.I: ', () => {
    it('Test card.I.1; shallow rendering:', () => {
        expect.assertions(1);
        console.log("card.test script => shallow(<Card />) =",shallow( <Card cardProp2={card_0} cardProp3={"img-class"}/> ));
        // testing if shallow rendering something (ie .length = 1) :
        expect(shallow( <Card cardProp2={card_0} cardProp3={"img-class"}/> ).length).toBe(1);
    });
});
describe('Group Script card.II: ', () => {
    it('Test card.II.1; Snapshot testing:', () => {
        expect.assertions(1);
        // testing if shallow rendering something (ie length = 1) :
        expect(shallow( <Card cardProp2={card_0} cardProp3={"img-class"}/> )).toMatchSnapshot();
    });
});
