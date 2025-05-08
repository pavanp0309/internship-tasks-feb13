import React, { useRef } from "react";
import CategorySliderCard from "./CategorySliderCard";
import categoryData from "../api/categoryData";
import "./CategorySlider.css";

const CategorySlider = () => {
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);

  const handleMouseOver = (ref) => {
    if (ref.current) {
      ref.current.style.animationPlayState = "paused";
    }
  };

  const handleMouseOut = (ref) => {
    if (ref.current) {
      ref.current.style.animationPlayState = "running";
    }
  };

  return (
    <div className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="text-center mb-5">
        <h4 className="fw-bold text-primary text-uppercase fs-2">
          Choose Your Desired Category
        </h4>
        <div className="bg-primary mx-auto mt-2" style={{ width: '100px', height: '4px', borderRadius: '2px' }}></div>
      </div>

      <div className="overflow-hidden">
        {/* First Row */}
        <div
          className="category-logos mb-4"
          ref={firstRowRef}
          onMouseOver={() => handleMouseOver(firstRowRef)}
          onMouseOut={() => handleMouseOut(firstRowRef)}
        >
          {categoryData.map(category => (
            <CategorySliderCard key={category.id} name={category.name} icon={category.icon} />
          ))}
          {categoryData.map(category => (
            <CategorySliderCard key={category.id + "-dup1"} name={category.name} icon={category.icon} />
          ))}
        </div>

        {/* Second Row */}
        <div
          className="category-logos"
          ref={secondRowRef}
          onMouseOver={() => handleMouseOver(secondRowRef)}
          onMouseOut={() => handleMouseOut(secondRowRef)}
        >
          {categoryData.map(category => (
            <CategorySliderCard key={category.id + "-dup2"} name={category.name} icon={category.icon} />
          ))}
          {categoryData.map(category => (
            <CategorySliderCard key={category.id + "-dup3"} name={category.name} icon={category.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};


// First batch: key={category.id}

// Duplicate batch 1: key={category.id + "-dup1"}

// Duplicate batch 2: key={category.id + "-dup2"}

// Duplicate batch 3: key={category.id + "-dup3"}

// ➔ This ensures all keys are unique ✅, and React can properly track each card separately even if they are showing the same data.


// Imagine you have categoryData = [{ id: 1, name: "Remote" }, { id: 2, name: "MNC" }]

// When you render:

// Card	                 Key Value
// Remote (first set)      	1
// MNC (first set)	            2
// Remote (duplicate)	        1-dup1
// MNC (duplicate)	            2-dup1
// Remote (duplicate again)	1-dup2
// MNC (duplicate again)	    2-dup2

export default CategorySlider;
