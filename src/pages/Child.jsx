import React from "react";
import { FaTags, FaSyncAlt, FaSmileBeam, FaHeadset } from "react-icons/fa";
import c from "../assets/child.jpeg";

const Child = () => {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <section
        className="h-[380px] bg-cover bg-center flex items-center justify-center relative"
        style={{
    backgroundImage: `url(${c})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl font-bold">Child Flight Booking</h1>
          <p className="text-lg mt-2 opacity-90">
            Safe and comfortable flights for children
          </p>
        </div>
      </section>

      {/* Feature Cards - Luxury Style */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white hover:shadow-lg transition hover:scale-[1.03] rounded-xl p-6 shadow-md text-center">
          <FaTags className="text-blue-600 text-4xl mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-gray-800">Best Fare Deals</h3>
          <p className="text-gray-600 mt-2">We beat any genuine airline price.</p>
        </div>

        <div className="bg-white hover:shadow-lg transition hover:scale-[1.03] rounded-xl p-6 shadow-md text-center">
          <FaSyncAlt className="text-blue-600 text-4xl mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-gray-800">Flexible Changes</h3>
          <p className="text-gray-600 mt-2">Enjoy hassle-free flight changes.</p>
        </div>

        <div className="bg-white hover:shadow-lg transition hover:scale-[1.03] rounded-xl p-6 shadow-md text-center">
          <FaSmileBeam className="text-blue-600 text-4xl mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-gray-800">Trusted by Families</h3>
          <p className="text-gray-600 mt-2">Thousands of happy family travelers.</p>
        </div>

        <div className="bg-white hover:shadow-lg transition hover:scale-[1.03] rounded-xl p-6 shadow-md text-center">
          <FaHeadset className="text-blue-600 text-4xl mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-gray-800">24/7 Live Support</h3>
          <p className="text-gray-600 mt-2">We're here any time you need us.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-6xl mx-auto px-6 leading-relaxed text-gray-700">
          <p className="mb-6">
            Booking a flight with children can be a challenging experience for parents, as there are multiple factors to consider to ensure the comfort and safety of young passengers. Airlines offer various options and services to make traveling with children more convenient and pleasant. Here's what you need to know about child class flight booking.
          </p>

          <p className="mb-6">
            Are you looking to plan your next vacation or business trip? Look no further than Flydealhub. We offer a wide range of services including tour bookings, flight and airline reservations, hotel accommodations, and car rentals. With our extensive network and experience in the travel industry, we can help you find the best deals and create a seamless travel experience. Based in the United States, we are dedicated to providing top-notch customer service and ensuring your travel needs are met with efficiency and professionalism. Trust Flydealhub to make your travel dreams a reality.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 border-l-4 border-blue-600 pl-3">
            Why Fly with Us?
          </h2>
          <p className="mb-6">
            FlyDealHub offers affordable, child-friendly flight options with top
            airlines. Our team ensures a smooth ticket booking process and travel
            convenience for your family.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 border-l-4 border-blue-600 pl-3">
            Child Discounts & Policies
          </h2>
          <p className="mb-6">
            Most airlines offer discounted fares for children, particularly those under 12 years old. Infants under two years old may be able to travel on a parent’s lap for a nominal fee or with a special infant fare. It's important to check each airline's policies on age limits and discounts for children.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 border-l-4 border-blue-600 pl-3">
            Seat Selection
          </h2>
          <p className="mb-6">
            Many airlines allow parents to pre-select seats to ensure the family can sit together. For added convenience, choose seats closer to restrooms or those that provide more legroom. Bulkhead seats may offer extra space, while seats near the wings often experience less turbulence.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 border-l-4 border-blue-600 pl-3">
            In-Flight Entertainment
          </h2>
          <p className="mb-6">
            Look for flights that offer in-flight entertainment suitable for children, such as movies, TV shows, and games. Consider bringing along headphones suitable for kids to enhance their enjoyment of in-flight entertainment.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 border-l-4 border-blue-600 pl-3">
            Food and Snacks
          </h2>
          <p className="mb-6">
            Check the airline's food options for children, as some may offer child-friendly meals. Pack snacks that your children enjoy to keep them satisfied and occupied during the flight. Be mindful of potential allergies and dietary restrictions when selecting meals and snacks.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 border-l-4 border-blue-600 pl-3">
            Pre-Flight Preparation
          </h2>
          <p className="mb-6">
            Arrive at the airport early to allow extra time for security checks and boarding. Prepare necessary documents, such as passports and boarding passes, ahead of time. Discuss the flight experience with your child beforehand to help ease any anxiety or concerns.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 border-l-4 border-blue-600 pl-3">
            Carry-On Essentials
          </h2>
          <p className="mb-6">
            Pack a bag with essentials such as toys, games, books, and activities to keep your child entertained during the flight. Bring extra clothes, diapers (if needed), and wipes for easy changes and clean-ups. Don't forget comfort items like blankets or stuffed animals to help your child feel at ease.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 border-l-4 border-blue-600 pl-3">
            Safety and Supervision
          </h2>
          <p className="mb-6">
            Keep an eye on your children at all times to ensure their safety. Use seat belts as required and follow all crew instructions regarding safety and in-flight procedures.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 border-l-4 border-blue-600 pl-3">
            Special Assistance
          </h2>
          <p className="mb-6">
            Inform the airline in advance if you need special assistance, such as priority boarding or help with strollers and car seats. Some airlines offer programs like "Unaccompanied Minor" services for children traveling alone, providing supervision and assistance.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Child;