import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { getProducts } from "../activity/api";

const ProductShowcase = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <section className="py-12 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Top Selling Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl">
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-white p-6 rounded-lg shadow-md hover:shadow-lg flex flex-col cursor-pointer"
            onClick={() => navigate(`/product/${product.id}`)} // Navigate to Product Details
          >
            <div className="overflow-hidden rounded-lg duration-500 group-hover:scale-105">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="mt-4 flex-1">
              <h3 className="text-lg font-bold text-gray-800">
                {product.title}
              </h3>
              <p className="text-gray-600 mt-2">Price: ${product.price}</p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the card's onClick
                addToCart(product);
              }}
              className="bg-orange-500 text-white px-4 py-2 mt-4 rounded-full shadow-md hover:bg-orange-600 transition duration-300 w-full"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;
