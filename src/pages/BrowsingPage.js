import React, { useState } from "react";
import CategoryItems from "../Components/CategoryItems"; // Import the CategoryItems component
import "../Components/CategoryItems.css";

const BrowsingPage = () => {
  const categoriesData = [
    { id: 1, name: "Pantry staples", image: "pantry.png" },
    { id: 2, name: "Vegetables", image: "broccoli2.png" },
    { id: 3, name: "Fruits", image: "orange.png" },
    { id: 4, name: "Proteins", image: "meat.png" },
    { id: 5, name: "Grains", image: "wheat.png" },
    { id: 6, name: "Beverages", image: "lemonade.png" },
    { id: 7, name: "Dairy", image: "cheese.png" },
    { id: 8, name: "Sea Food", image: "seafood.png" },
  ];

  const [scrollX, setScrollX] = useState(0);
  const maxVisibleCategories = 6;
  const maxScrollX = categoriesData.length - maxVisibleCategories; // Maximum scroll position

  const [selectedCategory, setSelectedCategory] = useState("Pantry staples"); // Initial category

  const scrollLeft = () => {
    setScrollX(Math.max(0, scrollX - 2));
  };

  const scrollRight = () => {
    const newScrollX = scrollX + 2;
    setScrollX(Math.min(maxScrollX, scrollX + 2));
    setScrollX(Math.min(maxScrollX, newScrollX));
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    //image-banner

    <div className="whole-page">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Cabin"
          rel="stylesheet"
        ></link>
      </head>
      <div className="image-banner">
        <img src="/Frame.png" alt="Shop Now" className="banner-image" />
      </div>

      {/* category-list */}
      <div className="category-list-container">
        <div className="scroll-arrow left-arrow" onClick={scrollLeft}>
          <img src="/arrow-left.png" alt="Left Arrow" />
        </div>
        <div className="category-list-container-inner">
          <div
            className="category-list"
            style={{ transform: `translateX(-${scrollX * 200}px)` }}
          >
            {categoriesData
              .slice(scrollX, scrollX + maxVisibleCategories)
              .map((category) => (
                <div
                  key={category.id}
                  className="category-box"
                  onClick={() => handleCategoryClick(category.name)} // Add this onClick handler
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
        </div>
        <div className="scroll-arrow right-arrow" onClick={scrollRight}>
          <img src="/arrow-right.png" alt="Right Arrow" />
        </div>
        <div className="category-line"></div>{" "}
        {/* Add this line below the category section */}
      </div>

      <CategoryItems selectedCategory={selectedCategory} />
    </div>
  );
};

export default BrowsingPage;

//changes search bar no border
//change font to mstch
