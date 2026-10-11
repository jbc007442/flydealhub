import React, { useState } from 'react';

import SearchBar from '../components/SearchBar';

import {
  FiDollarSign,
  FiShield,
  FiThumbsUp,
  FiPhoneCall,
  FiUsers,
  FiTruck,
  FiGrid,
} from 'react-icons/fi';

import { FaChevronDown } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { FaPlane } from 'react-icons/fa';

import hero from '../assets/hero.webp';
import manilla from '../assets/manilla.jpg';
import dubai from '../assets/dubai.jpg';
import bangkok from '../assets/bankok.jpg';
import italy from '../assets/italy.jpg';
import mexico from '../assets/mexico.jpg';

/* =========================================================
   HOLIDAY DEALS
========================================================= */

const deals = [
  {
    city: 'Manila',
    checks: 234,
    trip: '5 Days Hotel Stay',
    flight: 'Flight Included',
    visit: 'Daily Guided Tours',
    image: manilla,
  },
  {
    city: 'Dubai',
    checks: 412,
    trip: '4 Days Hotel Stay',
    flight: 'Flight Included',
    visit: 'Desert Safari',
    image: dubai,
  },
  {
    city: 'Bangkok',
    checks: 388,
    trip: '6 Days Hotel Stay',
    flight: 'Flight Included',
    visit: 'City Tour',
    image: bangkok,
  },
  {
    city: 'Italy',
    checks: 318,
    trip: '7 Days Hotel Stay',
    flight: 'Flight Included',
    visit: 'City Tour',
    image: italy,
  },
  {
    city: 'Mexico',
    checks: 288,
    trip: '8 Days Hotel Stay',
    flight: 'Flight Included',
    visit: 'City Tour',
    image: mexico,
  },
];

/* =========================================================
   FAQ
========================================================= */

const faqs = [
  {
    question: 'How does Flydealhub offer competitive flight fares?',
    answer:
      'Flydealhub provides access to available flight options from airlines and travel partners so travelers can review different choices and select an itinerary that suits their travel requirements and budget.',
  },
  {
    question: 'How does Flydealhub keep my transactions secure?',
    answer:
      'Flydealhub is designed to provide a secure booking experience. Customers should review the applicable payment and booking information before completing a transaction and should use only the official Flydealhub website for their booking.',
  },
  {
    question: 'Can I find domestic and international flights on Flydealhub?',
    answer:
      'Yes. Flydealhub provides flight search options for both domestic and international travel. Availability can vary depending on the route, travel date, airline schedule, and other booking conditions.',
  },
  {
    question: 'How can I search for flights on Flydealhub?',
    answer:
      'Enter your departure location, destination, travel dates, passenger information, and preferred cabin class in the flight search form. You can then review the available options and continue with the booking process.',
  },
  {
    question: 'What information do I need to search for a flight?',
    answer:
      'You generally need to provide your departure city, destination, travel dates, number of passengers, and preferred travel class to begin your flight search.',
  },
  {
    question: 'Can I search for international flights?',
    answer:
      'Yes. You can use the flight search service to explore available international flight options based on your destination, travel dates, passengers, and preferred cabin class.',
  },
  {
    question: 'Can I get help with my flight booking?',
    answer:
      'Yes. Customers can contact Flydealhub for general booking-related questions and assistance with travel information, itinerary details, and other flight booking enquiries.',
  },
  {
    question: 'Can flight schedules and fares change?',
    answer:
      'Yes. Flight availability, schedules, and fares can change based on airline inventory, travel dates, demand, and other conditions. The final details should always be reviewed before completing a booking.',
  },
];

/* =========================================================
   HOME COMPONENT
========================================================= */

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* =========================================================
          HERO SECTION
      ========================================================= */}

      <section
        className="h-[550px] bg-cover bg-center flex items-center justify-center text-white relative"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
            Search & Book Affordable Flights
          </h1>

          <p className="mt-3 text-lg opacity-90 drop-shadow">
            Fast, simple, and convenient flight booking experience
          </p>
        </div>
      </section>

      {/* =========================================================
          SEARCH BAR SECTION
      ========================================================= */}

      <div className="relative z-20 -mt-12 max-w-6xl mx-auto px-4">
        <SearchBar />
      </div>

      {/* =========================================================
          FEATURES SECTION
      ========================================================= */}

      <section className="max-w-6xl mx-auto px-6 md:px-4 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {/* Best Fare Deals */}

        <div className="p-6 shadow-lg rounded-lg bg-white hover:shadow-xl border border-gray-100 transition">
          <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
            <FiDollarSign className="text-3xl" />
          </div>

          <h3 className="font-semibold text-lg">Best Fare Deals</h3>

          <p className="text-gray-600 text-sm mt-2">
            Explore available flight options and competitive fares for your preferred travel dates
            and destinations.
          </p>
        </div>

        {/* Secure Booking */}

        <div className="p-6 shadow-lg rounded-lg bg-white hover:shadow-xl border border-gray-100 transition">
          <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
            <FiShield className="text-3xl" />
          </div>

          <h3 className="font-semibold text-lg">Secure Booking</h3>

          <p className="text-gray-600 text-sm mt-2">
            Enjoy a straightforward booking experience with clear travel information and convenient
            access to flight options.
          </p>
        </div>

        {/* Travelers */}

        <div className="p-6 shadow-lg rounded-lg bg-white hover:shadow-xl border border-gray-100 transition">
          <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mb-4">
            <FiThumbsUp className="text-3xl" />
          </div>

          <h3 className="font-semibold text-lg">Travel Made Simple</h3>

          <p className="text-gray-600 text-sm mt-2">
            Search for flights using your destination, dates, passenger details, and preferred cabin
            class.
          </p>
        </div>

        {/* Support */}

        <div className="p-6 shadow-lg rounded-lg bg-white hover:shadow-xl border border-gray-100 transition">
          <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-red-100 text-red-600 mb-4">
            <FiPhoneCall className="text-3xl" />
          </div>

          <h3 className="font-semibold text-lg">Travel Support</h3>

          <p className="text-gray-600 text-sm mt-2">
            Our support service is available to help with general flight-booking and travel-related
            enquiries.
          </p>
        </div>
      </section>

      {/* =========================================================
          ABOUT FLYDEALHUB
      ========================================================= */}

      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
            About <span className="text-blue-600">Flydealhub</span>
          </h2>

          <p className="text-gray-600 leading-8 text-lg mb-5">
            Flydealhub is a flight booking platform designed to make it easier for travelers to
            search for domestic and international flight options. Whether you are planning a
            business trip, a family vacation, a visit to friends and relatives, or a personal
            holiday, our platform provides a simple way to begin your flight search and explore
            available travel options.
          </p>

          <p className="text-gray-600 leading-8 text-lg mb-5">
            Travelers can enter their departure city, destination, travel dates, number of
            passengers, and preferred cabin class to search for suitable flights. The booking
            experience is designed to keep important travel information in one place so that
            customers can review their options before continuing with their booking.
          </p>

          <p className="text-gray-600 leading-8 text-lg">
            Our goal is to provide a convenient online flight search experience with clear
            information and accessible customer support. We understand that every journey is
            different, so travelers can choose flight options based on their preferred schedule and
            travel requirements. Flydealhub helps customers start their travel planning process from
            a single, easy-to-use platform.
          </p>
        </div>
      </section>

      {/* =========================================================
          FLIGHT BOOKING SERVICES
      ========================================================= */}

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Flight Booking Services
            </h2>

            <p className="mt-4 text-gray-600 text-lg leading-8 max-w-3xl mx-auto">
              Explore flight options for your next journey with Flydealhub. Our platform makes it
              simple to search for flights, review available options, and plan your trip according
              to your travel requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Domestic Flights */}

            <div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Domestic Flight Booking</h3>

              <p className="text-gray-600 leading-8">
                Planning a domestic journey becomes easier when you can search for flight options
                based on your preferred route and travel dates. Flydealhub allows travelers to enter
                their departure city, destination, passenger details, and cabin preference to begin
                their search. This can be useful for business travel, family visits, weekend trips,
                and holidays within the country.
              </p>
            </div>

            {/* International Flights */}

            <div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                International Flight Booking
              </h3>

              <p className="text-gray-600 leading-8">
                For international journeys, travelers often need to consider different schedules,
                connections, travel dates, and cabin options. Flydealhub provides a convenient
                starting point for searching international flight options. Customers can enter their
                destination and travel requirements and review available choices before proceeding
                with their travel plans.
              </p>
            </div>

            {/* Flight Search */}

            <div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Simple Flight Search</h3>

              <p className="text-gray-600 leading-8">
                Searching for a flight starts with a few basic details. Enter your departure
                location, destination, travel dates, and passenger information to find available
                flight options. You can also select your preferred travel class when searching. Our
                interface is designed to make the initial flight search straightforward for both
                frequent travelers and customers booking a flight for the first time.
              </p>
            </div>

            {/* Travel Support */}

            <div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                Travel Booking Assistance
              </h3>

              <p className="text-gray-600 leading-8">
                Travel plans can sometimes change, and customers may have questions about their
                booking or itinerary. Flydealhub provides customer assistance for general flight
                booking enquiries. Our support team can help customers understand booking
                information and provide assistance with travel-related questions during the booking
                process.
              </p>
            </div>

            {/* Flight Options */}

            <div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                Compare Available Flight Options
              </h3>

              <p className="text-gray-600 leading-8">
                When planning a trip, travelers may have different preferences for departure times,
                journey duration, connections, and cabin class. Reviewing available flight options
                can help travelers choose an itinerary that fits their schedule. Flydealhub gives
                customers a convenient starting point for reviewing available choices before making
                their travel decision.
              </p>
            </div>

            {/* Flexible Travel Planning */}

            <div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                Plan Your Journey With Confidence
              </h3>

              <p className="text-gray-600 leading-8">
                Good travel planning starts with accurate trip information. Before booking,
                travelers should review the departure and arrival locations, dates, passenger
                information, baggage conditions, fare rules, and other applicable booking terms.
                Taking time to review these details can help customers make informed decisions about
                their journey.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}

          <div className="mt-14 bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-5 text-center">
              Why Choose Flydealhub?
            </h3>

            <p className="text-gray-600 leading-8 text-center max-w-5xl mx-auto">
              Flydealhub focuses on providing a simple and convenient way to begin your flight
              search. Instead of making travelers navigate complicated booking steps, our platform
              brings essential search options together in one place. Customers can search according
              to their destination, travel dates, passenger requirements, and preferred cabin class.
              Whether you are preparing for a holiday, arranging a business trip, visiting family,
              or planning an international journey, Flydealhub provides an easy starting point for
              exploring flight options and organizing your travel plans.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          BEST HOLIDAY DEALS
      ========================================================= */}

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-700 text-center mb-10">Best Holiday Deals</h2>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={25}
            slidesPerView={3}
            autoplay={{ delay: 2500 }}
            style={{ padding: '20px' }}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {deals.map((d, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white shadow-md hover:shadow-2xl transition-all cursor-pointer overflow-hidden">
                  <div
                    className="h-44 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${d.image})`,
                    }}
                  ></div>

                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-800">{d.city}</h3>

                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <FiUsers className="text-blue-500" />
                      {d.checks} Check Ins
                    </p>

                    <ul className="mt-3 text-sm text-gray-600 space-y-1">
                      <li className="flex gap-2 items-center">
                        <FiTruck /> {d.trip}
                      </li>

                      <li className="flex gap-2 items-center">
                        <FaPlane /> {d.flight}
                      </li>

                      <li className="flex gap-2 items-center">
                        <FiGrid /> {d.visit}
                      </li>
                    </ul>

                    <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                      View Deal
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* =========================================================
          FAQ SECTION
      ========================================================= */}

      <section className="max-w-7xl mx-auto my-12 px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-700 mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-5 py-4 bg-white hover:bg-blue-50 transition"
              >
                <span className="text-base sm:text-lg font-medium text-gray-800 text-left">
                  {faq.question}
                </span>

                <FaChevronDown
                  className={`transition-transform flex-shrink-0 ml-4 ${
                    openIndex === index ? 'rotate-180 text-blue-600' : 'text-gray-500'
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-5 py-4 bg-blue-50 text-gray-700 text-sm sm:text-base leading-7">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
