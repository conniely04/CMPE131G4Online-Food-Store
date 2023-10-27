import React, { useState } from 'react';
import '../Components/CategoryItems.css';
import Header from '../Components/Header'; // Correct import path
import CategoryItem from '../Components/CategoryItems'; // Correct import path

const BrowsingPage = () => {
  const [cart, setCart] = useState([]);
  const categoriesData = [
    { id: 1, name: 'Pantry staples', image: 'pantry.png' },
    { id: 2, name: 'Vegetables', image: 'broccoli2.png' },
    { id: 3, name: 'Fruits', image: 'orange.png' },
    { id: 4, name: 'Proteins', image: 'meat.png' },
    { id: 5, name: 'Grains', image: 'wheat.png' },
    { id: 6, name: 'Beverages', image: 'lemonade.png' },
    { id: 7, name: 'Dairy', image: 'cheese.png' },
    { id: 8, name: 'Sea Food', image: 'seafood.png' },
    // Add more categories as needed
  ];

  const maxVisibleCategories = 6;
  const [scrollIndex, setScrollIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(categoriesData[0].name);

  const scrollLeft = () => {
    if (scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
    }
  };

  const scrollRight = () => {
    if (scrollIndex + maxVisibleCategories < categoriesData.length) {
      setScrollIndex(scrollIndex + 1);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="browsing-page">
       <Header cart={cart} /> {/* Add this line to render the header */}
      <div className="background-gradient"></div> {/* New background gradient */}
     
      {/* image banner */}
      <div className="image-banner">
        <img src="/Frame.png" alt="Shop Now" className="banner-image" />
      </div>
      
      {/* category list */}
      <div className="category-list-container">
        <div className="scroll-arrow left-arrow" onClick={scrollLeft}>
          <img src="/arrow-left.png" alt="Left Arrow" />
        </div>
        <div className="category-list">
          {categoriesData
            .slice(scrollIndex, scrollIndex + maxVisibleCategories)
            .map((category) => (
              <div
                key={category.id}
                className={`category-box ${selectedCategory === category.name ? 'selected' : ''}`}
                onClick={() => handleCategoryClick(category.name)}
              >
                <img
                  src={`/images/${category.image}`}
                  alt={category.name}
                  className="category-image"
                />
                <p className="category-name">{category.name}</p>
              </div>
            ))}
        </div>
        <div className="scroll-arrow right-arrow" onClick={scrollRight}>
          <img src="/arrow-right.png" alt="Right Arrow" />
        </div>
      </div>

      <div className="category-line"></div> {/* Add this line to separate the category section from category items */}
      
      <CategoryItem selectedCategory={selectedCategory} cart={cart} setCart={setCart} />
    </div>
  );
};

export default BrowsingPage;