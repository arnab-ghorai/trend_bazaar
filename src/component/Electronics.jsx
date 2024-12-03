const Electronics = () => {
  return (
    <>
      <section className="py-12 flex flex-col content-center items-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Top Electronics
        </h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-10"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 ">
          <div
            className="bg-white p-6 rounded-lg shadow-md  hover:shadow-lg flex flex-col
          items-center"
          >
            <div className="overflow-hidden rounded-lg hover:scale-105 duration-500">
              <img
                src="../assets/electronics/Phone.webp"
                alt="Phone"
                className="h-48 object-cover"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-bold text-gray-800">Phone</h3>
              <p className="text-yellow-500 mt-2">⭐ 4.5</p>
              <button className="bg-gray-800 text-white px-4 py-2 mt-4 rounded-full hover:bg-gray-900 transition duration-300 w-full">
                Buy Now
              </button>
            </div>
          </div>

          <div
            className="bg-white p-6 rounded-lg shadow-md  hover:shadow-lg flex flex-col
          items-center"
          >
            <div className="overflow-hidden rounded-lg hover:scale-105 duration-500">
              <img
                src="../assets/electronics/Laptop.webp"
                alt="Laptop"
                className="h-48 object-cover"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-bold text-gray-800">Laptop</h3>
              <p className="text-yellow-500 mt-2">⭐ 4.6</p>
              <button className="bg-gray-800 text-white px-4 py-2 mt-4 rounded-full hover:bg-gray-900 transition duration-300 w-full">
                Buy Now
              </button>
            </div>
          </div>

          <div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg flex flex-col
          items-center"
          >
            <div className="overflow-hidden rounded-lg hover:scale-105  duration-500">
              <img
                src="../assets/electronics/Headphones.webp"
                alt="Headphones"
                className="h-48 object-cover"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-bold text-gray-800">Headphones</h3>
              <p className="text-yellow-500 mt-2">⭐ 4.4</p>
              <button className="bg-gray-800 text-white px-4 py-2 mt-4 rounded-full hover:bg-gray-900 transition duration-300 w-full">
                Buy Now
              </button>
            </div>
          </div>

          <div
            className="bg-white p-6 rounded-lg shadow-md  hover:shadow-lg flex flex-col
          items-center"
          >
            <div className="overflow-hidden rounded-lg hover:scale-105 duration-500">
              <img
                src="../assets/electronics/TV.webp"
                alt="TV"
                className="h-48 object-cover"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-bold text-gray-800">TV</h3>
              <p className="text-yellow-500 mt-2">⭐ 4.7</p>
              <button className="bg-gray-800 text-white px-4 py-2 mt-4 rounded-full hover:bg-gray-900 transition duration-300 w-full">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Electronics;
