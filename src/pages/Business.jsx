import React from 'react';
import { FaTags, FaSyncAlt, FaSmileBeam, FaHeadset, FaPlane, FaCheckCircle } from 'react-icons/fa';
import b from '../assets/business.webp';

const Business = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className="relative min-h-[430px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${b})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/40"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <div className="flex justify-center mb-5">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
              <FaPlane className="text-4xl text-blue-400" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Business Class Flight Booking
          </h1>

          <p className="text-xl md:text-2xl mt-4 text-gray-200 font-light">
            Travel in Comfort. Arrive Refreshed. Travel Better.
          </p>

          <p className="max-w-2xl mx-auto mt-5 text-gray-300 leading-relaxed">
            Discover premium business class flights with comfortable seating, priority services,
            lounge access, enhanced dining, and personalized travel assistance for a smoother
            journey.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/reservation.html"
              className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-lg font-semibold transition"
            >
              Search Business Class Flights
            </a>

            <a
              href="/contact.html"
              className="border border-white/70 hover:bg-white hover:text-gray-900 text-white px-7 py-3 rounded-lg font-semibold transition"
            >
              Talk to a Travel Expert
            </a>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
            Premium Travel Services
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            A Better Way to Travel
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 mt-4">
            From finding suitable fares to assisting with your journey, we help make business class
            travel simple and convenient.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-7 shadow-md hover:shadow-xl transition rounded-2xl text-center border border-gray-100 hover:-translate-y-1">
            <FaTags className="text-blue-600 text-4xl mx-auto mb-5" />

            <h3 className="text-xl font-semibold text-gray-900">Competitive Fares</h3>

            <p className="text-gray-600 mt-3 leading-relaxed">
              Explore business class options across multiple airlines and compare available fares
              for your journey.
            </p>
          </div>

          <div className="bg-white p-7 shadow-md hover:shadow-xl transition rounded-2xl text-center border border-gray-100 hover:-translate-y-1">
            <FaSyncAlt className="text-blue-600 text-4xl mx-auto mb-5" />

            <h3 className="text-xl font-semibold text-gray-900">Flexible Options</h3>

            <p className="text-gray-600 mt-3 leading-relaxed">
              Find fare options with flexible change and cancellation conditions, subject to airline
              rules.
            </p>
          </div>

          <div className="bg-white p-7 shadow-md hover:shadow-xl transition rounded-2xl text-center border border-gray-100 hover:-translate-y-1">
            <FaSmileBeam className="text-blue-600 text-4xl mx-auto mb-5" />

            <h3 className="text-xl font-semibold text-gray-900">Premium Experience</h3>

            <p className="text-gray-600 mt-3 leading-relaxed">
              Enjoy enhanced comfort, priority services, premium dining, and other business class
              benefits.
            </p>
          </div>

          <div className="bg-white p-7 shadow-md hover:shadow-xl transition rounded-2xl text-center border border-gray-100 hover:-translate-y-1">
            <FaHeadset className="text-blue-600 text-4xl mx-auto mb-5" />

            <h3 className="text-xl font-semibold text-gray-900">Travel Assistance</h3>

            <p className="text-gray-600 mt-3 leading-relaxed">
              Get assistance with flight options, booking details, changes, and other travel-related
              requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
              Business Class Travel
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Make Every Journey More Comfortable
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Business class travel is designed for passengers who value comfort, convenience,
              privacy, and a smoother airport experience. Whether you are travelling for an
              important business meeting, a long-haul international journey, or a well-deserved
              holiday, the right business class flight can make your entire journey more relaxing
              and productive.
            </p>
          </div>

          {/* Benefits */}
          <div className="mt-14 grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Comfort & Personal Space
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Business class cabins generally offer wider seats, additional personal space,
                increased recline, and on many long-haul aircraft, lie-flat seating. These features
                can make a significant difference during longer journeys.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Priority Airport Services
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Depending on the airline and airport, business class passengers may receive priority
                check-in, security or boarding services, baggage handling, and priority
                disembarkation.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Airport Lounge Access</h3>

              <p className="text-gray-600 leading-relaxed">
                Eligible business class passengers may have access to dedicated airport lounges
                where they can relax, enjoy refreshments, work, or prepare for their journey away
                from the busy terminal environment.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Premium Dining & Entertainment
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Business class often includes enhanced meal services, premium beverage selections,
                larger entertainment screens, headphones, and additional onboard amenities,
                depending on the airline and aircraft.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Stay Connected & Productive
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Many modern business class cabins provide convenient access to power outlets, USB
                charging, Wi-Fi, and larger workspace areas, allowing passengers to work or stay
                connected while travelling.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Extra Baggage Allowance</h3>

              <p className="text-gray-600 leading-relaxed">
                Business class fares often include a higher baggage allowance than economy fares.
                Exact allowances vary by airline, route, and fare type, so always check the
                conditions before booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Guide */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
              Smart Booking
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Tips for Booking Business Class Flights
            </h2>

            <p className="text-gray-600 mt-4 leading-relaxed">
              A little planning can help you find the right combination of price, schedule, comfort,
              and flexibility.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            <div className="flex gap-5 items-start">
              <FaCheckCircle className="text-blue-600 text-2xl mt-1 shrink-0" />

              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Compare Multiple Flight Options
                </h3>

                <p className="text-gray-600 mt-2 leading-relaxed">
                  Compare airlines, departure times, stopovers, aircraft, baggage allowances, and
                  fare conditions instead of looking only at the ticket price.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <FaCheckCircle className="text-blue-600 text-2xl mt-1 shrink-0" />

              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Book According to Your Travel Needs
                </h3>

                <p className="text-gray-600 mt-2 leading-relaxed">
                  If you are travelling for business, consider schedules, airport location, lounge
                  availability, onboard Wi-Fi, and arrival time when selecting your flight.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <FaCheckCircle className="text-blue-600 text-2xl mt-1 shrink-0" />

              <div>
                <h3 className="text-xl font-semibold text-gray-900">Check Fare Rules Carefully</h3>

                <p className="text-gray-600 mt-2 leading-relaxed">
                  Business class does not always mean fully flexible travel. Review the fare
                  conditions for changes, cancellations, refunds, baggage, and seat selection before
                  completing your booking.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <FaCheckCircle className="text-blue-600 text-2xl mt-1 shrink-0" />

              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Consider Points & Airline Loyalty Programs
                </h3>

                <p className="text-gray-600 mt-2 leading-relaxed">
                  Frequent travellers may be able to use airline miles, loyalty points, or eligible
                  credit-card rewards toward business class travel, depending on the applicable
                  program rules.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <FaCheckCircle className="text-blue-600 text-2xl mt-1 shrink-0" />

              <div>
                <h3 className="text-xl font-semibold text-gray-900">Consider Different Routes</h3>

                <p className="text-gray-600 mt-2 leading-relaxed">
                  Depending on your destination, an alternative departure airport, connection, or
                  travel date may provide additional flight choices and different fare options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Upgrade Your Journey?</h2>

          <p className="mt-4 text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Search business class flights and find an option that matches your schedule,
            destination, comfort preferences, and budget.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/reservation.html"
              className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition"
            >
              Book Business Class
            </a>

            <a
              href="/contact.html"
              className="border border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded-lg font-semibold transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Business;
