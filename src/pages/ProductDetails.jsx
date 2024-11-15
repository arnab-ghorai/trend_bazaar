import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getProductById } from "../activity/api";
import { CartContext } from "../context/CartContext";
import Toast from "../component/Toast";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl text-gray-600 animate-pulse">
          Loading Product Details...
        </div>
      </div>
    );
  }

  const handleBuyNow = () => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <>
      <Toast></Toast>
      <div className="container mx-auto px-6 py-12 ">
        <button
          onClick={() => navigate("/")}
          className="fixed top-20 right-6 bg-gray-800 text-white rounded-full p-2 shadow-md hover:bg-gray-900 transition duration-300 z-30 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Product Image */}
          <div className="w-full md:w-1/2 p-6 flex justify-center items-center bg-gray-100">
            <img
              src={product.image}
              alt={product.title}
              className="rounded-lg shadow-lg w-full object-contain h-auto max-h-[500px] transform transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {product.title}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {product.description}
            </p>
            <div className="flex items-center justify-between mb-6">
              <span className="text-3xl text-orange-500 font-semibold">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-sm text-gray-500">
                Rating:{" "}
                <span className="text-yellow-500">
                  {product.rating?.rate} ★
                </span>{" "}
                ({product.rating?.count} reviews)
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => addToCart(product)}
                className="bg-orange-500 text-white px-8 py-3 rounded-lg shadow-md hover:bg-orange-600 transition duration-300 w-full sm:w-auto"
              >
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="bg-gray-800 text-white px-8 py-3 rounded-lg shadow-md hover:bg-gray-900 transition duration-300 w-full sm:w-auto"
              >
                Buy Now
              </button>
            </div>

            {/* Additional Product Information */}
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                Product Details
              </h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  <strong>Category:</strong> {product.category}
                </li>
                <li>Premium Quality Guaranteed</li>
                <li>Free Delivery for Orders Above $50</li>
                <li>30-Day Hassle-Free Return Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
