import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import { FiUsers, FiTruck, FiGrid, FiShield, FiArrowRight } from 'react-icons/fi';

import { FaPlane } from 'react-icons/fa';

import manilla from '../assets/manilla.jpg';
import dubai from '../assets/dubai.jpg';
import bangkok from '../assets/bankok.jpg';
import italy from '../assets/italy.jpg';
import mexico from '../assets/mexico.jpg';
import about from '../assets/about.jpeg';

import 'swiper/css';
import 'swiper/css/autoplay';

// =========================================================
// HOLIDAY DEALS DATA
// =========================================================

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

const About = () => {
  return (
    <>
      {/* =========================================================
          HERO SECTION
      ========================================================= */}

      <section
        className="h-[300px] bg-cover bg-center flex items-center justify-center text-white relative"
        style={{
          backgroundImage: `url(${about})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative text-center z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold">About Flydealhub</h1>

          <p className="mt-2 text-lg text-gray-200">Your trusted partner in travel services</p>
        </div>
      </section>

      {/* =========================================================
          ABOUT CONTENT
      ========================================================= */}

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_280px] gap-7">
            {/* =====================================================
                MAIN CONTENT CARD
            ===================================================== */}

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-10">
              {/* INFORMATION NOTICE */}
              <div className="flex items-start gap-4 bg-blue-50 border border-blue-100 rounded-xl p-5 mb-9">
                <div className="flex-shrink-0 mt-0.5">
                  <FiShield className="text-xl text-blue-600" />
                </div>

                <p className="text-sm md:text-base text-gray-700 leading-6">
                  Please review this information carefully to understand Flydealhub, our services,
                  and the company operating this website.
                </p>
              </div>

              {/* =====================================================
                  WHO WE ARE
              ===================================================== */}

              <section className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Who we are</h2>

                <p className="text-gray-700 leading-7">
                  Welcome to <strong>Flydealhub</strong>, a travel-focused website designed to help
                  visitors explore travel-related information, destinations, and available travel
                  options.
                </p>

                <p className="mt-4 text-gray-700 leading-7">
                  Our goal is to make travel information easier to find and understand while helping
                  visitors make informed decisions when planning their journeys.
                </p>

                <p className="mt-4 text-gray-700 leading-7">
                  Flydealhub operates under <strong>Air Fare Bookers Pvt Ltd</strong>, a company
                  focused on providing travel-related services and solutions.
                </p>
              </section>

              {/* =====================================================
                  WHAT WE DO
              ===================================================== */}

              <section className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">What we do</h2>

                <p className="text-gray-700 leading-7">
                  Flydealhub provides travel-related information and resources that may assist
                  visitors with planning their journeys.
                </p>

                <p className="mt-4 text-gray-700 leading-7">
                  Depending on the services currently available on the website, visitors may find
                  information relating to flights, hotels, destinations, travel packages, and other
                  travel-related services.
                </p>

                <p className="mt-4 text-gray-700 leading-7">
                  Availability, pricing, schedules, fees, and provider policies may vary. Visitors
                  should review the applicable information before making a travel decision.
                </p>
              </section>

              {/* =====================================================
                  OUR MISSION
              ===================================================== */}

              <section className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our mission</h2>

                <p className="text-gray-700 leading-7">
                  Our mission is to make travel planning simpler, more accessible, and more
                  convenient by presenting useful travel information in a clear and
                  easy-to-understand way.
                </p>

                <p className="mt-4 text-gray-700 leading-7">
                  We aim to help travelers discover destinations, explore available options, and
                  better understand the information relevant to their travel plans.
                </p>
              </section>

              {/* =====================================================
                  INDEPENDENT WEBSITE
              ===================================================== */}

              <section className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Independent website
                </h2>

                <p className="text-gray-700 leading-7">
                  Flydealhub is presented as an independent travel website. Airline names, hotel
                  names, logos, trademarks, and other third-party references belong to their
                  respective owners.
                </p>

                <p className="mt-4 text-gray-700 leading-7">
                  References to third-party companies or brands are provided for identification or
                  informational purposes and do not, by themselves, imply a partnership,
                  sponsorship, authorization, or endorsement.
                </p>
              </section>

              {/* =====================================================
                  ACCURATE INFORMATION
              ===================================================== */}

              <section className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Accurate information matters
                </h2>

                <p className="text-gray-700 leading-7">
                  We aim to keep the information published on Flydealhub clear and useful. However,
                  travel information can change frequently.
                </p>

                <p className="mt-4 text-gray-700 leading-7">
                  Flight schedules, prices, availability, fees, travel requirements, hotel
                  information, and provider policies may change without notice.
                </p>

                <p className="mt-4 text-gray-700 leading-7">
                  Visitors should verify important information with the relevant airline, hotel,
                  travel provider, or official authority before making a final decision.
                </p>
              </section>

              {/* =====================================================
                  WHY CHOOSE US
              ===================================================== */}

              <section className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Why choose Flydealhub?
                </h2>

                <div className="space-y-5">
                  <div>
                    <h3 className="font-bold text-gray-900">Clear information</h3>

                    <p className="mt-1 text-gray-700 leading-7">
                      We aim to present travel-related information in a simple and understandable
                      way.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900">Convenient travel planning</h3>

                    <p className="mt-1 text-gray-700 leading-7">
                      Our website is designed to make discovering travel options and planning
                      journeys more convenient.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900">Transparent communication</h3>

                    <p className="mt-1 text-gray-700 leading-7">
                      We believe visitors should have access to clear information about our website
                      and the business operating it.
                    </p>
                  </div>
                </div>
              </section>

              {/* =====================================================
                  CONTACT US
              ===================================================== */}

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Contact us</h2>

                <p className="text-gray-700 leading-7">
                  For questions about Flydealhub, our website, or the services and information
                  available through the website, please use the contact details provided on our
                  Contact Us page.
                </p>

                <a
                  href="/contact.html"
                  className="inline-flex items-center gap-2 mt-5 text-blue-600 font-semibold hover:text-blue-700 transition"
                >
                  Contact Flydealhub
                  <FiArrowRight />
                </a>
              </section>
            </div>

            {/* =====================================================
                RIGHT SIDEBAR
            ===================================================== */}

            <aside className="space-y-5">
              {/* Website Information */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900">Website information</h2>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Find information about Flydealhub, website policies, refunds, terms, privacy, and
                  ways to contact our team.
                </p>

                <div className="mt-5 space-y-1">
                  <a
                    href="/about-us"
                    className="flex items-center justify-between px-3 py-3 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    <span>About Us</span>
                    <FiArrowRight className="text-gray-400" />
                  </a>

                  <a
                    href="/privacy-policy"
                    className="flex items-center justify-between px-3 py-3 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    <span>Privacy Policy</span>
                    <FiArrowRight className="text-gray-400" />
                  </a>

                  <a
                    href="/terms-and-conditions"
                    className="flex items-center justify-between px-3 py-3 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    <span>Terms & Conditions</span>
                    <FiArrowRight className="text-gray-400" />
                  </a>

                  <a
                    href="/refund-policy"
                    className="flex items-center justify-between px-3 py-3 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    <span>Refund Policy</span>
                    <FiArrowRight className="text-gray-400" />
                  </a>

                  <a
                    href="/contact-us"
                    className="flex items-center justify-between px-3 py-3 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    <span>Contact Us</span>
                    <FiArrowRight className="text-gray-400" />
                  </a>
                </div>
              </div>

              {/* Need Help */}
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-gray-900">Need help?</h2>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Have a question about Flydealhub or the information available on our website?
                  Contact our team for assistance.
                </p>

                <a
                  href="/contact-us"
                  className="inline-flex items-center gap-2 mt-5 text-sm font-bold text-blue-600 hover:text-blue-700"
                >
                  Contact Flydealhub
                  <FiArrowRight />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOLIDAY DEALS CAROUSEL
      ========================================================= */}

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-700 text-center mb-10">Best Holiday Deals</h2>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={25}
            slidesPerView={3}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
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
                <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all cursor-pointer overflow-hidden border border-gray-100">
                  {/* Image */}
                  <div
                    className="h-44 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${d.image})`,
                    }}
                  ></div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-800">{d.city}</h3>

                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <FiUsers className="text-blue-500" />
                      {d.checks} Check Ins
                    </p>

                    <ul className="mt-3 text-sm text-gray-600 space-y-2">
                      <li className="flex gap-2 items-center">
                        <FiTruck />
                        {d.trip}
                      </li>

                      <li className="flex gap-2 items-center">
                        <FaPlane />
                        {d.flight}
                      </li>

                      <li className="flex gap-2 items-center">
                        <FiGrid />
                        {d.visit}
                      </li>
                    </ul>

                    <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                      View Deal
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default About;