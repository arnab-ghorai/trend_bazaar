const PaymentInfo = () => {
  return (
    <>
      <div className="flex items-center space-x-2 mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
        <h3 className="text-2xl font-bold text-gray-800">
          Payment Information
        </h3>
      </div>

      <div className="space-y-6">
        {/* Card Icons */}
        <div className="flex space-x-4 items-center">
          <img src="../assets/logos/rupay.svg" alt="rupay" className="h-5" />
          <img
            src="../assets/logos/mastercard.svg"
            alt="mastercard"
            className="h-10"
          />
          <img src="../assets/logos/visa.svg" alt="visa" className="h-10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-2">
              Card Number
            </label>
            <input
              type="text"
              name="cardNumber"
              placeholder="1234 5678 9012 3456"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 "
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Expiry Date
            </label>
            <input
              type="text"
              name="expiryDate"
              placeholder="MM/YY"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 "
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">CVC</label>
            <input
              type="text"
              name="cvc"
              placeholder="123"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 "
              required
            />
          </div>
        </div>

        {/* Security Notice */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 bg-gray-100 p-3 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          <span>Your payment information is encrypted and secure</span>
        </div>
      </div>
    </>
  );
};

export default PaymentInfo;
