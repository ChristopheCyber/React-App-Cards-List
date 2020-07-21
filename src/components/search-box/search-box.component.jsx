import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({propPlaceHolder, handleChangeFct }) => (
  <input
    className='search-box'
    type='search'
    //destructuring props entered
    propPlaceHolder1={propPlaceHolder}
    onChange={handleChangeFct}
  />
);
