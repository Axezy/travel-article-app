import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Johnson",
    country: "United Kingdom",
    review:
      "Travel Articles helped me discover hidden gems in Indonesia. The guides were detailed, inspiring, and easy to follow.",
  },
  {
    name: "Michael Tan",
    country: "Singapore",
    review:
      "I planned my vacation using the travel tips from this website. Everything was well organized and very helpful.",
  },
  {
    name: "Amanda Lee",
    country: "Australia",
    review:
      "Beautiful design, useful information, and amazing destination recommendations. Highly recommended!",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold">
            Testimonials
          </p>

          <h2 className="text-5xl font-bold mt-3">
            What Travelers Say
          </h2>

          <p className="text-gray-600 mt-4">
            Thousands of travelers have trusted Travel Articles
            as their source of travel inspiration.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-3xl p-8 shadow hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex gap-1 text-yellow-400 mb-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="text-gray-600 leading-8">
                "{item.review}"
              </p>

              <div className="mt-8">
                <h3 className="font-bold text-xl">
                  {item.name}
                </h3>

                <p className="text-gray-500">
                  {item.country}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}