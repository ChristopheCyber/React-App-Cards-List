import React from 'react';
export const CardList = (prop1) => {
    console.log(prop1);
    const divStyle = {
        margin: '20px 40px 20px 40px',
        border: '5px solid pink',
        height: '80px',
        backgroundColor:`lightgreen`
      };
    return (
        <div style={divStyle}>
            {prop1.children}
        </div>
    );
}