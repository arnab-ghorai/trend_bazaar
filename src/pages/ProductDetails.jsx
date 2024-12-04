import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProductById } from "../activity/api";
import { addToCart } from "../store/cartSlice";

import LoadingSpinner from "../component/LoadingSpinner";
import BackButton from "../component/BackButton";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
        setSelectedImage(data?.image);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl text-gray-600">Product not found</div>
      </div>
    );
  }

  const handleBuyNow = () => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 pt-14 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <BackButton text="Back to Home" path="/"></BackButton>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              {/* Image Section */}
              <div className="flex justify-center items-center bg-white p-8 rounded-xl">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 group-hover:to-black/10 rounded-xl transition-all duration-300"></div>
                  <img
                    src={selectedImage}
                    alt={product.title}
                    className="w-full max-h-[400px] object-contain rounded-xl transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Product Info Section */}
              <div className="space-y-6">
                <div className="border-b pb-6">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {product.title}
                  </h1>
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl font-bold text-orange-600">
                      ${product.price.toFixed(2)}
                    </span>
                    <div className="flex items-center">
                      <div className="flex text-yellow-400">
                        {"★".repeat(Math.round(product.rating?.rate || 0))}
                        <span className="text-gray-300">
                          {"★".repeat(
                            5 - Math.round(product.rating?.rate || 0)
                          )}
                        </span>
                      </div>
                      <span className="ml-2 text-sm text-gray-600">
                        ({product.rating?.count} reviews)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Description
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Category:
                    </h3>
                    <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium capitalize">
                      {product.category}
                    </span>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Highlights
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <li className="flex items-center text-gray-600">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        Premium Quality
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        30-Day Returns
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        Free Shipping
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        24/7 Support
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <button
                      onClick={() => dispatch(addToCart(product))}
                      className="flex-1 bg-white border-2 border-gray-800 text-gray-800 px-8 py-3 rounded-full hover:bg-gray-800
                      hover:text-white
                      transition duration-300 font-semibold"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={handleBuyNow}
                      className="flex-1 bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition duration-300 font-semibold shadow-lg"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
