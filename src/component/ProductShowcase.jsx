import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { getProducts } from "../activity/api";
import LoadingSpinner from "../component/LoadingSpinner";
import { FaRedo } from "react-icons/fa";

const ProductShowcase = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(false);
      const data = await getProducts();
      if (!data) throw new Error("Failed to fetch products");
      setProducts(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <h3 className="mt-4 text-lg font-medium text-gray-900">
            No Connection
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            We couldn't fetch the products. Please check your internet
            connection and try again.
          </p>
          <button
            onClick={fetchProducts}
            className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-300 gap-2"
          >
            <FaRedo />
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="pt-8 py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Featured Products
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div
                className="relative p-3 md:p-6 bg-white cursor-pointer group"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full  h-44 md:h-64 object-contain p-2 md:p-4 transform group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              </div>

              <div className=" p-3 md:p-6 border-t border-gray-100">
                <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2 line-clamp-1  md:line-clamp-2   h-7 md:h-14">
                  {product.title}
                </h3>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl md:text-2xl font-bold text-orange-500">
                    ${product.price.toFixed(2)}
                  </span>
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span className="text-gray-600">
                      {product.rating?.rate || 0}
                    </span>
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(addToCart(product));
                  }}
                  className="w-full bg-gray-800 text-white text-sm md:text-base py-2 md:py-3 rounded-full hover:bg-gray-900 transition duration-300 flex items-center justify-center space-x-2 group"
                >
                  <span>Add to Cart</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transition duration-300 group-hover:translate-x-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
