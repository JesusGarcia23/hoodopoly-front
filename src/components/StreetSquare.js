import React from 'react';

const StreetSquare = ({streetName, streetPrice,instructions, color, type}) => {
  console.log(instructions)
  return ( 
    <div class={type}>
    <div className="container">
      <div className={`color-bar ${color}`}></div>
      <div className="name">{streetName}</div>
      {streetPrice && <div className="price">Price {streetPrice}</div>}
      {instructions && (
        <>
        <i className="drawing fa fa-question"></i>
        <div className="instructions">{instructions}</div>
        </>
      )}
    </div>
  </div>
   );
}
 
export default StreetSquare;