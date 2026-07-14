import heroImage from "../../assets/images/hero.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-sky-100 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">

        {/* Left */}

        <div>

          <p className="text-blue-600 font-semibold mb-3">
            Explore The World
          </p>

          <h1 className="text-6xl font-bold leading-tight">

            Discover Amazing

            <span className="text-blue-600">

              Travel Articles

            </span>

          </h1>

          <p className="text-gray-600 mt-8 text-lg leading-8">

            Find travel inspiration, destination guides,
            hotel recommendations,
            culinary experiences,
            and unforgettable adventures from around the world.

          </p>

          <div className="flex gap-5 mt-10">

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl">

              Explore

            </button>

            <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50">

              Learn More

            </button>

          </div>

        </div>

        {/* Right */}

        <div>

          <img
            src={heroImage}
            alt="Travel"
            className="rounded-3xl w-full h-full object-cover"
          />

        </div>

      </div>
    </section>
  );
}