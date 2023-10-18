import ItemDetail from "../Components/ItemDetail";
import React from "react";

export default function ItemInfo() {
    const bananaiInfo = {
        name: 'Banana',
        price: '$1.99',
        description: 'Bananas, with their vibrant yellow peel and distinct curved shape, are a universally beloved fruit that not only delights the taste buds but also offers a myriad of health benefits. Known for being a convenient and portable snack, bananas are a natural energy booster, making them a favorite choice for those on the go',
        weight: '1',
        image: '/images/banana.png',  
       
      };
      
  return (
    <div className="itempage">
      <ItemDetail{...bananaiInfo}/>
    </div>
  );
}
