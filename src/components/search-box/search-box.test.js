import React from 'react';
// import { render } from '@testing-library/react';
import { SearchBox } from './search-box.component.jsx';

//ENZYME fncts: ( we don't use MOUNT and RENDER here )
import { shallow } from "enzyme";


// console.log("mockMethodHandleChange() triggered in search-box.test.js");

describe('Group Script search-box.test.I: ', () => {
    it('Test search-box.test.I.1; Snapshot testing:', () => {
        //mocking methodHandleChange fn :
        const mockMethodHandleChange = jest.fn().mockReturnValue(null);
        expect.assertions(1);
        // const methodHandleChange = mockMethodHandleChange;
        // testing if shallow rendering correctly:
        expect(shallow(<SearchBox propPlaceHolder="Type text for Searching" handleChangeFct={mockMethodHandleChange} />)).toMatchSnapshot();
    });
});
describe('Group Script search-box.test.II: ', () => {
    it('Test search-box.test.II.1; testing Event onChange in <input/> button:', async () => {
        //mocking methodHandleChange fn :
        const mockMethodHandleChange = jest.fn().mockReturnValue(null);
        expect.assertions(1);
        const wrapper = shallow(<SearchBox propPlaceHolder="Type text for Searching" handleChangeFct={mockMethodHandleChange} />);
        // testing :
        //.find() and simulate(events) methods comming with ENZYME:
        wrapper.find('[id="searchBoxId"]').simulate('change');
        await expect(mockMethodHandleChange.mock.calls.length).toBe(1);
    });
});
/*
describe('Group Script search-box.test.II: ', () => {
  it('Test search-box.test.II.1; State testing:', () => {
    expect.assertions(1);
    const wrapper = shallow( <SearchBox propPlaceHolder="Type text for Searching"  mockMethodHandleChange /> );
    // testing :
    //.find() and simulate(events) methods comming with ENZYME:
    // wrapper.find('[id="searchBoxId"]').simulate('click');
    // wrapper.find('[id="searchBoxId"]').simulate('change');
    expect(wrapper.state('picContentType')).toEqual('img-class');
  });
*/

