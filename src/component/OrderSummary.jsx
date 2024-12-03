import { useSelector } from "react-redux";

const OrderSummary = () => {
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total price of all items
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 50 ? 0 : 10;
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mb-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h3>

      {/* Cart Items */}
      <div className="space-y-4 mb-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div>
                <h4 className="text-gray-800 font-medium">{item.title}</h4>
                <p className="text-gray-500">Qty: {item.quantity}</p>
              </div>
            </div>
            <span className="text-gray-800 font-medium">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      {/* Price Breakdown */}
      <div className="space-y-3 border-t pt-4">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Tax (10%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-lg text-gray-800 border-t pt-3">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      {/* Shipping Notice */}
      {subtotal < 50 && (
        <div className="mt-4 text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
          Add ${(50 - subtotal).toFixed(2)} more to get free shipping!
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
