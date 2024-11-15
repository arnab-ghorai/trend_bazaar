const Testimonials = () => {
  return (
    <>
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Customer Testimonials
        </h2>
        <div className="space-y-8 px-4">
          {["Virat Kohli", "Sachin Tendulkar", "Victor"].map(
            (customer, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg shadow-lg mx-auto max-w-xl transform transition-transform duration-500 hover:scale-105"
              >
                <p className="text-gray-700 mb-4">
                  "The products exceeded my expectations! High quality and great
                  service."
                </p>
                <h3 className="font-bold text-gray-800">{customer}</h3>
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
};

export default Testimonials;
