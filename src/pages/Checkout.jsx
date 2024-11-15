import React from "react";
import { useNavigate } from "react-router-dom";
import PaymentInfo from "../component/PaymentInfo";
import ShippingInfo from "../component/ShippingInfo";
import OrderSummary from "../component/OrderSummary";

const Checkout = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center pt-10">
        Checkout
      </h2>

      <OrderSummary></OrderSummary>

      {/* Payment & Shipping Form */}
      <form className="bg-white shadow-lg rounded-lg p-6">
        <ShippingInfo></ShippingInfo>
        <PaymentInfo></PaymentInfo>

        {/* Submit Button */}
        <div className="mt-8 text-center">
          <button
            type="submit"
            onClick={() => navigate("/placeorder")}
            className="bg-orange-500 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-orange-600 transition duration-300"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
