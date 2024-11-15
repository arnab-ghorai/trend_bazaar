import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const OrderSummary = () => {
  const { cartItems } = useContext(CartContext);

  // Calculate total price of all items
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">
          Order Summary
        </h3>
        <ul className="divide-y divide-gray-200 mb-4">
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between py-4">
              <span className="text-lg font-medium text-gray-800">
                {item.title} (x{item.quantity})
              </span>
              <span className="text-lg text-gray-600">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between font-bold text-xl">
          <span>Total:</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
      </div>
    </>
  );
};
export default OrderSummary;
