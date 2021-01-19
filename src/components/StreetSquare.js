import React from 'react';

const StreetSquare = ({streetName, streetPrice, color, type}) => {
  return ( 
    <div class={type}>
    <div class="container">
      <div class={`color-bar ${color}`}></div>
      <div class="name">{streetName}</div>
      <div class="price">Price ${streetPrice}</div>
    </div>
  </div>
   );
}
 
export default StreetSquare;