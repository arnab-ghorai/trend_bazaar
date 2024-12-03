import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromCart, updateQuantity } from "../store/cartSlice";
import { MdDeleteOutline } from "react-icons/md";
import Toast from "../component/Toast";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <Toast />
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Your Cart</h2>
          <div className="w-20 h-1 bg-orange-500 rounded-full"></div>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center space-y-8 py-12">
            <img
              src="../assets/emptycart.webp"
              alt="Empty cart"
              className="w-64 h-64 object-contain"
            />
            <p className="text-xl text-gray-600">Your cart is empty</p>
            <button
              onClick={() => navigate("/")}
              className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition duration-300 shadow-md"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
                >
                  <div className="p-6">
                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                      <div className="w-24 h-24 flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-contain rounded-lg"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          ${item.price.toFixed(2)}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <button
                              onClick={() =>
                                dispatch(
                                  updateQuantity({
                                    id: item.id,
                                    quantity: item.quantity - 1,
                                  })
                                )
                              }
                              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition duration-300"
                            >
                              -
                            </button>
                            <span className="text-lg font-medium w-8 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                dispatch(
                                  updateQuantity({
                                    id: item.id,
                                    quantity: item.quantity + 1,
                                  })
                                )
                              }
                              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition duration-300"
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={() => dispatch(removeFromCart(item.id))}
                            className="text-red-500 hover:text-red-700 transition duration-300"
                          >
                            <MdDeleteOutline size={24} />
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-gray-800">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Order Summary
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax</span>
                    <span>${(totalPrice * 0.1).toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-xl font-bold text-gray-800">
                      <span>Total</span>
                      <span>${(totalPrice + totalPrice * 0.1).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => navigate("/checkout")}
                  className="w-full bg-gray-800 text-white mt-6 py-3 rounded-full hover:bg-gray-900 transition duration-300 shadow-md"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
