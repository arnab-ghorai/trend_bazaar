const MidPageBanner = () => {
  return (
    <>
      <section className="py-16 bg-gray-100 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800">
            Winter Sale - Up to 50% Off
          </h2>
          <p className="mt-4 text-gray-600">
            Get your winter essentials at the best prices.
          </p>
          <ul className="list-none mt-6 space-y-4 text-gray-700">
            {[
              "Quality Products",
              "Fast Delivery",
              "Easy Payment",
              "Exclusive Offers",
            ].map((perk, idx) => (
              <li key={idx} className="text-lg">
                {perk}
              </li>
            ))}
          </ul>
        </div>
        <img
          src="../assets/hero/sale.png"
          alt="Winter Sale"
          className="mt-10 mx-auto opacity-90"
        />
      </section>
    </>
  );
};
export default MidPageBanner;
