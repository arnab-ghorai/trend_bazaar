const HeroBanner = () => {
  return (
    <section className=" text-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 ">
        <div className=" pt-24 md:pt-32 pb-8 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                Up to <span className="text-orange-500">50% Off</span> on All
                Men's Wear
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Discover our exclusive collection of premium fashion. Limited
                time offer!
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition duration-300 shadow-lg">
                  Shop Now
                </button>
                <button className="bg-transparent border-2 border-gray-800 text-gray-800 px-8 py-3 rounded-full hover:bg-gray-800 hover:text-white transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="../assets/hero/women.png"
                alt="Fashion Collection"
                className="w-full max-w-lg md:max-w-xl mx-auto transform hover:scale-105 transition duration-500"
              />
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white text-lg font-bold px-6 py-2 rounded-full transform rotate-12 mr-1">
                Sale!
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div> */}
    </section>
  );
};

export default HeroBanner;
