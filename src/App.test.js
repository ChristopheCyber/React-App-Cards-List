import React from 'react';
// import { render } from '@testing-library/react';
import App from './App';

//ENZYME fncts: ( we don't use MOUNT and RENDER here )
import { shallow } from "enzyme";

/*
test('/Cards Selection Board/ text', () => {
  expect.assertions(1);
  const { getByText } = render(<App />);
  const linkElement = getByText(/Cards Selection Board/i);
  expect(linkElement).toBeInTheDocument();
});
 */

describe('Group Script App.test.I: ', () => {
  it('Test App.test.I.1; Snapshot testing:', () => {
      expect.assertions(1);
      // testing if shallow rendering correctly:
      expect(shallow( <App /> )).toMatchSnapshot();
  });
});

