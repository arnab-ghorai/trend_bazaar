import React from "react";

const PlaceOrder = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center max-w-md">
        <h1 className="text-4xl font-bold text-orange-500 mb-4">Thank You!</h1>
        <p className="text-lg text-gray-700 mb-8">
          Your order has been placed successfully. We are getting it ready for
          you!
        </p>
        <p className="text-gray-600 mb-8">
          An email confirmation will be sent to your email address shortly.
        </p>

        {/* Add an optional illustration */}
        <img
          src="../assets/thanks.jpg"
          alt="Thank you illustration"
          className="mx-auto w-32 h-32 mb-8"
        />

        <a
          href="/"
          className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-orange-600 transition duration-300"
        >
          Continue Shopping
        </a>
      </div>
    </div>
  );
};

export default PlaceOrder;
