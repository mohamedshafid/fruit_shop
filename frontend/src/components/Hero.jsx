import hero from "../assets/images/hero.jpg";

const Hero = () => {
  return (
    <section>
      <div className="bg-hero-banner bg-cover bg-center h-[80vh] relative rounded-xl">
        <div className="absolute inset-0 bg-black opacity-80 rounded-xl">
          <div className="flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-10 lg:px-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center">
              Discover Your Favorite Item <br />
              <span>Product</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 text-center">
              Explore our wide range of products and find what you love.
            </p>
            <div className="mt-8">
              <button className="bg-white text-primary px-6 py-3 rounded-md hover:bg-violet-800 transition duration-200">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
