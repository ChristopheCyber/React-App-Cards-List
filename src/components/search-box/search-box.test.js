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
    it('Test search-box.test.II.1; testing Event onChange in <input/> button:', () => {
        //mocking methodHandleChange fn :
        const mockMethodHandleChange = jest.fn().mockReturnValue(null);
        expect.assertions(5);
        const wrapper = shallow(<SearchBox propPlaceHolder="Type text for Searching" handleChangeFct={mockMethodHandleChange} />);
        // testing :
        //.find() and simulate(click or change or keypress.. events) methods comming with ENZYME:
        wrapper.find('[id="searchBoxId"]').simulate('change');
        expect(mockMethodHandleChange).toBeCalled();
        expect(mockMethodHandleChange.mock.calls.length).toBe(1);
        wrapper.find('[id="searchBoxId"]').simulate('change');
        expect(mockMethodHandleChange.mock.calls.length).toBe(2);
        /*
        const input = wrapper.find('input');
        input.simulate('change', { target: { value: 'abcdefg'} });
        input.simulate('keydown', { keyCode: 13 });
        input.simulate('keydown', { key: 'Enter' });
        wrapper.find('#id1').simulate('keyDown', {key: 'ArrowRight'});
        */
       // directly invoking props :
        expect(wrapper.find('input').props().id).toEqual('searchBoxId'); 
        expect(wrapper.find('input').prop('id')).toEqual('searchBoxId'); 
    });
});

