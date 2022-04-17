import React from 'react';

function Card({ item }) {
   
  return <div>
   {item.title}
   {item.value}
   
  </div>;
}

export default Card;
