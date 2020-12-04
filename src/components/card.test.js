import React from 'react';
import { Card } from "./card/card.component.jsx";

//ENZYME fncts: ( we don't use MOUNT and RENDER here )
// import { shallow,mount,render } from "enzyme";
import { shallow } from "enzyme";

//REACT TEST RENDER:
// import { create } from "react-test-renderer";

/* describe('Group Script card.III: ', () => {
    it('Test card.III.1; Snapshot testing with create of REACT TEST RENDER:', () => {
        expect.assertions(1);
        // testing if create rendering something :
        expect(create( <Card cardProp2={card_0} cardProp3={"img-class"}/> ).toJSON()).toMatchSnapshot();
    });
});
 */

const mockCard_0 = {
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

console.log("card.test script => mockCard_0 =",mockCard_0);
describe('Group Script card.test.I: ', () => {
    it('Test card.test.I.1; shallow rendering:', () => {
        expect.assertions(1);
        console.log("****************** 1 * card.test script => shallow(<Card />) =",shallow( <Card cardProp2={mockCard_0} cardProp3={"img-class"}/> ));
        // testing if shallow rendering something (ie .length = 1) :
        expect(shallow( <Card cardProp2={mockCard_0} cardProp3={"img-class"}/> ).length).toBe(1);
    });
});
describe('Group Script card.test.II: ', () => {
    it('Test card.test.II.1; Snapshot testing:', () => {
        expect.assertions(1);
        // testing if shallow rendering correctly:
        expect(shallow( <Card cardProp2={mockCard_0} cardProp3={"img-class"}/> )).toMatchSnapshot();
    });
});
