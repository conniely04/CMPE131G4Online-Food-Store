import ItemDetail from "../Components/ItemDetail";
import React from "react";

export default function ItemInfo() {
    const carrotiInfo = {
    image: '/images/carrot.png',
    name: 'Carrot',
    price: '$2.50',
    weight: '0.5',
    description: 'Fresh and crisp carrots, rich in beta-carotene and essential nutrients...', 
       
      };
      
  return (
    <div className="itempage">
      <ItemDetail{...carrotiInfo}/>
    </div>
  );
}
