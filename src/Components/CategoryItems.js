import React from 'react';

const CategoryItems = ({ selectedCategory }) => {
    // Define data for items in each category
    const itemsData = {
        'Pantry staples': [
            { id: 1, name: 'Egg', image: 'item1.png', itemPrice: 1.99 },
            { id: 2, name: 'Bread', image: 'item2.png' },
            { id: 2, name: 'Beans', image: 'item2.png' },
            // Add more items for 'Pantry staples'
        ],
        'Vegetables': [
            { id: 1, name: 'Carrot', image: 'veggie2.png', itemPrice: 1.99  },
            { id: 2, name: 'Spinach', image: 'veggie2.png' },
            { id: 3, name: 'Cabbage', image: 'veggie3.png' },
            // Add more items for 'Vegetables'
        ],
        'Fruits': [
            { id: 1, name: 'Banana', image: 'fruit1.png', itemPrice: 1.99},
            { id: 2, name: 'Apple', image: 'fruit2.png' },
            { id: 3, name: 'Strawberry', image: 'fruit2.png' },
            // Add more items for 'Fruits'
        ],
        'Proteins': [
            { id: 1, name: 'Item 1', image: 'protein1.png' },
            { id: 2, name: 'Item 2', image: 'protein2.png' },
            // Add more items for 'Proteins'
        ],

        'Grains': [
            { id: 1, name: 'Item 1', image: 'protein1.png' },
            { id: 2, name: 'Item 2', image: 'protein2.png' },
            // Add more items for 'Grains'
        ],

        'Dairy': [
            { id: 1, name: 'Item 1', image: 'protein1.png' },
            { id: 2, name: 'Item 2', image: 'protein2.png' },
            // Add more items for 'Dairy'
        ],

        'Beverages': [
            { id: 1, name: 'Item 1', image: 'protein1.png' },
            { id: 2, name: 'Item 2', image: 'protein2.png' },
            // Add more items for 'Drinks'
        ],

        'Sea Food': [
            { id: 1, name: 'Item 1', image: 'protein1.png' },
            { id: 2, name: 'Item 2', image: 'protein2.png' },
            // Add more items for 'Drinks'
        ],
    };

    const items = itemsData[selectedCategory];

    return (
        <div className="category-items">
            {items.map((item) => (
                <div key={item.id} className="item-box">
                    <img src={`/images/${item.image}`} alt={item.name} className="item-image" />
                    <hr className="item-line" ></hr>
                    <p className="item-name">{item.name}</p>
                    <p className='item-price'>{item.price}</p>
                </div>
            ))}
        </div>
    );
};

export default CategoryItems;