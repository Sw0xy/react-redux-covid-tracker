import React from 'react';

function Card({ item }) {
    console.log(item);
  return <div>
   asdad {item.title}
   {item.value}
   
  </div>;
}

export default Card;
