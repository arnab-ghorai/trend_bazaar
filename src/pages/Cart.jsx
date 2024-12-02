import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromCart, updateQuantity } from "../store/cartSlice";
import { MdDeleteOutline } from "react-icons/md";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Calculate the total price of all items in the cart
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 pt-11">Your Cart</h2>
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center">
          <img
            src="../assets/emptycart.webp"
            alt="Empty cart"
            className="mx-auto"
          />
          <button
            type="submit"
            className="w-28 bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition duration-300"
            onClick={() => navigate("/")}
          >
            Home Page
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center sm:justify-between bg-white p-6 rounded-lg shadow-md space-y-4 sm:space-y-0"
            >
              <div className="flex items-center space-x-4 w-full sm:w-1/3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-gray-600">
                    Price: ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 w-full sm:w-1/3 justify-center">
                <button
                  onClick={() =>
                    dispatch(
                      updateQuantity({
                        id: item.id,
                        quantity: item.quantity - 1,
                      })
                    )
                  }
                  className="bg-gray-200 px-2 py-1 rounded-md text-gray-800 hover:bg-gray-300"
                >
                  -
                </button>
                <span className="text-lg font-semibold">{item.quantity}</span>
                <button
                  onClick={() =>
                    dispatch(
                      updateQuantity({
                        id: item.id,
                        quantity: item.quantity + 1,
                      })
                    )
                  }
                  className="bg-gray-200 px-2 py-1 rounded-md text-gray-800 hover:bg-gray-300"
                >
                  +
                </button>
              </div>
              <div className="text-right w-full sm:w-1/3 flex flex-col items-end">
                <div className="flex flex-col items-center">
                  <p className="text-lg font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-red-500 hover:text-red-700 mt-2 text-3xl"
                  >
                    <MdDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center mt-8 border-t pt-4">
            <h3 className="text-xl font-bold">Total:</h3>
            <p className="text-xl font-bold">${totalPrice.toFixed(2)}</p>
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => navigate("/checkout")}
              className="bg-gray-800 font-semibold text-white px-6 py-3 rounded-full hover:bg-gray-900 transition duration-300"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
