import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Virat Kohli",
      role: "Professional Cricketer",
      content:
        "The quality of products exceeded my expectations! The customer service was exceptional, and delivery was prompt.",
      image: "../assets/testimonial/virat.jpg",
    },
    {
      name: "Sachin Tendulkar",
      role: "Cricket Legend",
      content:
        "I've been shopping here for years. The consistency in quality and service is remarkable. Highly recommended!",
      image: "../assets/testimonial/sachin.jpg",
    },
    {
      name: "Sagar Gupta",
      role: "Fashion Enthusiast",
      content:
        "Found amazing deals on premium brands. The website is user-friendly and the checkout process is smooth.",
      image: "../assets/testimonial/sagar.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-orange-500"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="relative">
                <svg
                  className="absolute -top-4 -left-4 w-8 h-8 text-orange-500/20"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-gray-600 italic relative">
                  {testimonial.content}
                </p>
              </div>

              <div className="mt-6 flex items-center">
                <div className="flex text-orange-400">{"★".repeat(5)}</div>
                <span className="ml-2 text-gray-600">5.0</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
