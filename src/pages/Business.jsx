import React from "react";
import { FaTags, FaSyncAlt, FaSmileBeam, FaHeadset } from "react-icons/fa";
import b from "../assets/business.webp";

const Business = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-[380px] bg-cover bg-center flex items-center justify-center relative"
        style={{
    backgroundImage: `url(${b})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl font-bold">Business Class Flight Booking</h1>
          <p className="text-lg mt-2 opacity-90">
            Elevating Your Travel Experience
          </p>
        </div>
      </section>

      {/* Feature Cards with Icons */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 shadow-lg hover:shadow-2xl transition rounded-xl text-center hover:scale-[1.03]">
          <FaTags className="text-blue-600 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Best Fare Deals</h3>
          <p className="text-gray-600 mt-2">We beat any valid airline fare.</p>
        </div>

        <div className="bg-white p-6 shadow-lg hover:shadow-2xl transition rounded-xl text-center hover:scale-[1.03]">
          <FaSyncAlt className="text-blue-600 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Flexible Changes</h3>
          <p className="text-gray-600 mt-2">Enjoy change-friendly bookings.</p>
        </div>

        <div className="bg-white p-6 shadow-lg hover:shadow-2xl transition rounded-xl text-center hover:scale-[1.03]">
          <FaSmileBeam className="text-blue-600 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Happy Clients</h3>
          <p className="text-gray-600 mt-2">Trusted by frequent travelers.</p>
        </div>

        <div className="bg-white p-6 shadow-lg hover:shadow-2xl transition rounded-xl text-center hover:scale-[1.03]">
          <FaHeadset className="text-blue-600 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">24/7 Support</h3>
          <p className="text-gray-600 mt-2">Dedicated travel assistance.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-6xl mx-auto px-6 leading-relaxed text-gray-700">
          <p className="mb-6">
            Traveling by air can be a grueling experience, but for those who opt for business class, the journey becomes not just tolerable but enjoyable. Business class flight booking is more than just reserving a seat on a plane; it's about ensuring a premium travel experience from start to finish. Here’s a comprehensive guide to help you understand and navigate the world of business class flight booking.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 border-l-4 border-blue-600 pl-3">
            The Benefits of Business Class
          </h2>

          <h3 className="text-xl font-semibold mt-4 mb-2 border-l-4 border-blue-500 pl-3">
            Comfort and Space
          </h3>
          <p className="mb-6">
            Business class seats are designed with comfort in mind. They often recline fully into beds, offering ample legroom and personal space. This is particularly beneficial for long-haul flights where sleep and relaxation are crucial.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2 border-l-4 border-blue-500 pl-3">
            Superior Service
          </h3>
          <p className="mb-6">
            Business class passengers receive enhanced service, including priority boarding and deboarding, access to exclusive airport lounges, and attentive in-flight service. Flight attendants are more readily available, ensuring all needs are met promptly.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2 border-l-4 border-blue-500 pl-3">
            Gourmet Dining
          </h3>
          <p className="mb-6">
            In business class, meal service is a gourmet experience. Passengers can expect a variety of high-quality meal options, often designed by renowned chefs, with fine wines and premium beverages to complement the dining experience.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2 border-l-4 border-blue-500 pl-3">
            Enhanced Entertainment
          </h3>
          <p className="mb-6">
            Passengers have access to a wide range of in-flight entertainment options on larger personal screens. Noise-canceling headphones, a more extensive selection of movies, TV shows, and music ensure a more enjoyable journey.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2 border-l-4 border-blue-500 pl-3">
            Productivity Tools
          </h3>
          <p className="mb-6">
            For business travelers, staying productive during the flight is essential. Business class cabins are equipped with power outlets, USB ports, and Wi-Fi access, enabling passengers to work efficiently throughout the flight.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 border-l-4 border-blue-600 pl-3">
            Booking Tips for Business Class Flights
          </h2>

          <h3 className="text-xl font-semibold mt-4 mb-2 border-l-4 border-blue-500 pl-3">
            Book Early
          </h3>
          <p className="mb-6">
            Business class seats can be limited and are often in high demand. Booking your flight early increases your chances of securing a good deal and selecting your preferred seat.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2 border-l-4 border-blue-500 pl-3">
            Use Points and Miles
          </h3>
          <p className="mb-6">
            Frequent flyers can leverage airline loyalty programs to book business class flights using accumulated points or miles. This can be a cost-effective way to enjoy a premium travel experience.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2 border-l-4 border-blue-500 pl-3">
            Look for Deals and Promotions
          </h3>
          <p className="mb-6">
            Airlines periodically offer promotions and discounts on business class tickets. Signing up for airline newsletters and alerts can help you stay informed about these deals.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2 border-l-4 border-blue-500 pl-3">
            Consider Alternative Airlines and Routes
          </h3>
          <p className="mb-6">
            Sometimes, flying with a less well-known airline or opting for a less direct route can result in significant savings on business class fares. It’s worth exploring all available options before making a decision.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2 border-l-4 border-blue-500 pl-3">
            Use Travel Agents or Booking Services
          </h3>
          <p className="mb-6">
            Travel agents and specialized booking services often have access to exclusive deals and can assist in finding the best business class fares. They can also provide valuable insights and recommendations based on your preferences and travel needs.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Business;