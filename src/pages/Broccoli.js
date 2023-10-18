import ItemDetail from "../Components/ItemDetail";
import React from "react";

export default function ItemInfo() {
    const broccoliInfo = {
        name: 'Broccoli',
        price: '$2.67',
        description: 'Discover fresh and versatile broccoli, known for its crisp texture and earthy, slightly bitter flavor. Packed with essential nutrients and fiber, it is a healthy addition to your diet. Look for vibrant, dark green florets and firm stems when you shop with us. Elevate your culinary creations with this nutritious and delicious green vegetable.',
        weight: '0.7',
        image: '/images/broccoli.png',  
       
      };
      
  return (
    <div className="itempage">
      <ItemDetail{...broccoliInfo}/>
    </div>
  );
}
