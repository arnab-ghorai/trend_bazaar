import React from "react";
import { useNavigate } from "react-router-dom";
import PaymentInfo from "../component/PaymentInfo";
import ShippingInfo from "../component/ShippingInfo";
import OrderSummary from "../component/OrderSummary";
import BackButton from "../component/BackButton";

const Checkout = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 pt-14 pb-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <BackButton text="Back to Cart" path="/cart"></BackButton>
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Checkout</h2>
          <div className="w-20 h-1 bg-orange-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {/* Progress Steps */}
              <div className="flex justify-between mb-8">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <span className="text-sm mt-1 text-gray-600">Shipping</span>
                </div>
                <div className="flex-1 flex items-center px-4">
                  <div className="h-1 w-full bg-orange-200"></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <span className="text-sm mt-1 text-gray-600">Payment</span>
                </div>
              </div>

              {/* Forms */}
              <div className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <ShippingInfo />
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <PaymentInfo />
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <OrderSummary />
              <button
                onClick={() => navigate("/placeorder")}
                className="w-full bg-orange-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-orange-600 transition duration-300 flex items-center justify-center space-x-2 group"
              >
                <span>Place Order</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 
                  transition duration-300
                  group-hover:translate-x-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
