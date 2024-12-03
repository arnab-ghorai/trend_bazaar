import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BackButton from "../component/BackButton";
const categories = [
  {
    name: "Men's Clothing",
    image: "../assets/women/men.webp",
    description: "Latest trends and timeless styles for men",
  },
  {
    name: "Women's Clothing",
    image: "../assets/women/women.webp",
    description: "Elegant and modern outfits for women",
  },
  {
    name: "Electronics",
    image: "../assets/women/electronic.webp",
    description: "Top electronics for every lifestyle",
  },
  {
    name: "Accessories",
    image: "../assets/women/asse.webp",
    description: "Complete your look with the perfect accessory",
  },
];

const Categories = () => {
  const navigate = useNavigate();
  return (
    <div className="font-sans py-16 px-4 md:px-10 bg-gray-50 text-gray-800">
      <BackButton text="Back to Home" path="/"></BackButton>
      <h2
        className="text-4xl font-extrabold text-center mt-8
      mb-4 text-gray-800"
      >
        Shop by Category
      </h2>
      <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-10"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={`/categories/${category.name.toLowerCase().replace(/ /g, "-")}`}
            className="group bg-white rounded-lg shadow-lg hover:shadow-xl  flex flex-col"
          >
            <div className="overflow-hidden rounded-t-lg h-48">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h2 className="text-2xl font-bold text-gray-800 ">
                {category.name}
              </h2>
              <p className="mt-2 text-gray-600 flex-1">
                {category.description}
              </p>
              <button className="bg-gray-900 text-white px-4 py-2 mt-4 rounded-full hover:bg-gray-800 transition duration-300 w-full">
                Explore
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
