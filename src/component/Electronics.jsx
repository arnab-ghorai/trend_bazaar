const topElectronics = [
  {
    name: "Phone",
    image: "../assets/electronics/Phone.webp",
    rating: "4.8",
  },
  {
    name: "Laptop",
    image: "../assets/electronics/Laptop.webp",
    rating: "4.2",
  },
  {
    name: "Headphones",
    image: "../assets/electronics/Headphones.webp",
    rating: "4.5",
  },
  {
    name: "TV",
    image: "../assets/electronics/TV.webp",
    rating: "4.6",
  },
];

const Electronics = () => {
  return (
    <>
      <section className="py-12 flex flex-col content-center items-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Top Electronics
        </h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-10"></div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 max-w-7xl mx-auto px-2 lg:px-4 ">
          {topElectronics.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md  hover:shadow-lg flex flex-col
          items-center"
            >
              <div className="overflow-hidden rounded-lg hover:scale-105 duration-500">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-32 md:h-48 object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                <p className="text-yellow-500 mt-2">⭐ {item.rating}</p>
                <button className="bg-gray-800 text-white px-4 py-2 mt-4 rounded-full hover:bg-gray-900 transition duration-300 w-full">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default Electronics;
