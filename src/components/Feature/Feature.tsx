import {
  FaGlobeAsia,
  FaPlaneDeparture,
  FaBookOpen,
} from "react-icons/fa";

export default function Feature() {
  return (
    <section
      id="feature"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-blue-600 font-semibold">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Explore the World with Confidence
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto">
            Travel Articles provides inspiring destinations,
            practical travel tips, and informative articles
            to make every journey unforgettable.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}

          <div className="bg-sky-50 rounded-3xl p-10 shadow hover:-translate-y-3 transition duration-300">

            <FaGlobeAsia
              className="text-blue-600 text-5xl mb-6"
            />

            <h3 className="text-2xl font-bold mb-4">
              Destinations
            </h3>

            <p className="text-gray-600">
              Discover famous tourist attractions,
              hidden gems, and breathtaking places
              from around the world.
            </p>

          </div>

          {/* Card 2 */}

          <div className="bg-sky-50 rounded-3xl p-10 shadow hover:-translate-y-3 transition duration-300">

            <FaPlaneDeparture
              className="text-blue-600 text-5xl mb-6"
            />

            <h3 className="text-2xl font-bold mb-4">
              Travel Tips
            </h3>

            <p className="text-gray-600">
              Learn useful tips, travel hacks,
              budgeting ideas, and safety guides
              for your next adventure.
            </p>

          </div>

          {/* Card 3 */}

          <div className="bg-sky-50 rounded-3xl p-10 shadow hover:-translate-y-3 transition duration-300">

            <FaBookOpen
              className="text-blue-600 text-5xl mb-6"
            />

            <h3 className="text-2xl font-bold mb-4">
              Inspiring Articles
            </h3>

            <p className="text-gray-600">
              Read stories and experiences
              from travelers to inspire
              your next destination.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}