const PaymentInfo = () => {
  return (
    <>
      <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
        Payment Information
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-600 font-medium mb-2">
            Card Number
          </label>
          <input
            type="text"
            name="cardNumber"
            placeholder="1234 5678 9012 3456"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-gray-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-600 font-medium mb-2">
            Expiry Date
          </label>
          <input
            type="text"
            name="expiryDate"
            placeholder="MM/YY"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-gray-500"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-gray-600 font-medium mb-2">CVC</label>
          <input
            type="text"
            name="cvc"
            placeholder="123"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-gray-500"
            required
          />
        </div>
      </div>
    </>
  );
};
export default PaymentInfo;
