import React from "react";

const MidPageBanner = () => {
  const features = [
    { title: "Quality Products", description: "Handpicked premium items" },
    { title: "Fast Delivery", description: "Express shipping worldwide" },
    { title: "Easy Payment", description: "Secure payment methods" },
    { title: "Exclusive Offers", description: "Special deals & discounts" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                Winter Sale - Up to{" "}
                <span className="text-orange-500">50% Off</span>
              </h2>
              <p className="text-gray-300 text-lg">
                Get your winter essentials at the best prices. Limited time
                offer!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm hover:bg-gray-800/70 transition duration-300"
                >
                  <h3 className="text-xl font-semibold mb-2 text-orange-400">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>

            <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition duration-300 shadow-lg">
              Shop Now
            </button>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-orange-500/20 rounded-full blur-3xl"></div>
            <img
              src="../assets/hero/sale.png"
              alt="Winter Sale"
              className="relative w-full max-w-lg mx-auto transform hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MidPageBanner;
