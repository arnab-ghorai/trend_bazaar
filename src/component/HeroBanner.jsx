const HeroBanner = () => {
  return (
    <>
      <section className="py-[6rem] text-center bg-gray-100 ">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold text-gray-800">
            Up to 50% Off on All Men’s Wear
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Discover our exclusive collection of men's fashion.
          </p>
        </div>
        <img
          src="../assets/hero/women.png"
          alt="Woman Shopping"
          className="mt-10 mx-auto opacity-90"
        />
      </section>
    </>
  );
};
export default HeroBanner;
