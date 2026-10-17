import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';

import {
  FiDollarSign,
  FiShield,
  FiThumbsUp,
  FiPhoneCall,
  FiUsers,
  FiGlobe,
  FiInfo,
  FiHeadphones,
} from 'react-icons/fi';

import { FaChevronDown, FaPlane } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

import hero from '../assets/hero.webp';
import manilla from '../assets/manilla.jpg';
import dubai from '../assets/dubai.jpg';
import bangkok from '../assets/bankok.jpg';
import italy from '../assets/italy.jpg';
import mexico from '../assets/mexico.jpg';

/* =========================================================
   TRAVEL DESTINATIONS
========================================================= */

const destinations = [
  {
    city: 'Manila',
    checks: 234,
    trip: 'Explore Flight Options',
    flight: 'International Travel',
    visit: 'Travel Information',
    image: manilla,
  },
  {
    city: 'Dubai',
    checks: 412,
    trip: 'Explore Flight Options',
    flight: 'International Travel',
    visit: 'Travel Information',
    image: dubai,
  },
  {
    city: 'Bangkok',
    checks: 388,
    trip: 'Explore Flight Options',
    flight: 'International Travel',
    visit: 'Travel Information',
    image: bangkok,
  },
  {
    city: 'Italy',
    checks: 318,
    trip: 'Explore Flight Options',
    flight: 'International Travel',
    visit: 'Travel Information',
    image: italy,
  },
  {
    city: 'Mexico',
    checks: 288,
    trip: 'Explore Flight Options',
    flight: 'International Travel',
    visit: 'Travel Information',
    image: mexico,
  },
];

/* =========================================================
   FAQ
========================================================= */

const faqs = [
  {
    question: 'What does Flydealhub provide?',
    answer:
      'Flydealhub provides travel information and assistance to help travelers understand available flight options, airline policies, fare conditions, applicable fees, and other travel-related information.',
  },
  {
    question: 'Can Flydealhub help me understand flight options?',
    answer:
      'Yes. Our travel specialists can provide general guidance about available flight options, travel dates, destinations, airline information, and other details that may help you make an informed travel decision.',
  },
  {
    question: 'Does Flydealhub provide information for domestic and international travel?',
    answer:
      'Yes. Flydealhub provides travel assistance for both domestic and international journeys. Available options may depend on your destination, travel dates, airline schedules, and other applicable conditions.',
  },
  {
    question: 'What information can I ask a travel specialist about?',
    answer:
      'You can ask about flight options, airline policies, fare conditions, applicable fees, itinerary information, and general travel-related questions.',
  },
  {
    question: 'Can I get help understanding airline policies?',
    answer:
      'Yes. Our specialists can help you understand general airline policies and travel conditions so you can review the information relevant to your journey.',
  },
  {
    question: 'Can flight fares and schedules change?',
    answer:
      'Yes. Flight availability, schedules, fares, and other travel information may change depending on airline inventory, travel dates, demand, and other conditions. Travelers should review the latest available information before making travel decisions.',
  },
  {
    question: 'How can I contact Flydealhub?',
    answer:
      'You can contact Flydealhub at +18887898629 to speak with a travel specialist and receive general travel guidance and assistance.',
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
        className="min-h-[560px] bg-cover bg-center flex items-center justify-center text-white relative"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-950/65"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-sm mb-6">
            <FiGlobe />
            Travel Assistance & Flight Information
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg">
            Travel guidance,
            <br />
            <span className="text-blue-300">without the hassle.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-8">
            Get clear information about flight options, airline policies, fare conditions,
            applicable fees, and travel-related questions with help from experienced specialists.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+18887898629"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-7 py-3.5 rounded-lg font-semibold transition shadow-lg"
            >
              <FiPhoneCall />
              Talk to a Specialist
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 px-7 py-3.5 rounded-lg font-semibold transition"
            >
              Explore Assistance
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm text-white/80">
            <span>✓ Real People</span>
            <span>✓ Expert Guidance</span>
            <span>✓ Secure & Private</span>
            <span>✓ Travel Support</span>
          </div>
        </div>
      </section>

      {/* =========================================================
          SEARCH / FLIGHT OPTIONS SECTION
      ========================================================= */}

      <div className="relative z-20 -mt-12 max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-2xl">
          <SearchBar />
        </div>
      </div>

      {/* =========================================================
          TRUST FEATURES
      ========================================================= */}

      <section className="max-w-6xl mx-auto px-6 md:px-4 pt-20 pb-16">
        <div className="text-center mb-10">
          <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
            Why Flydealhub
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Real people. Real travel guidance.
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-4 leading-7">
            We make travel information easier to understand so you can make confident decisions
            about your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="p-7 shadow-lg rounded-2xl bg-white hover:shadow-xl border border-gray-100 transition text-center">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-5">
              <FiDollarSign className="text-3xl" />
            </div>

            <h3 className="font-semibold text-lg text-gray-900">Travel Options</h3>

            <p className="text-gray-600 text-sm mt-3 leading-6">
              Explore available flight options and understand the information relevant to your
              travel plans.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-7 shadow-lg rounded-2xl bg-white hover:shadow-xl border border-gray-100 transition text-center">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-green-100 text-green-600 mb-5">
              <FiShield className="text-3xl" />
            </div>

            <h3 className="font-semibold text-lg text-gray-900">Secure & Private</h3>

            <p className="text-gray-600 text-sm mt-3 leading-6">
              Your information is handled with care while you explore travel information and
              available options.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-7 shadow-lg rounded-2xl bg-white hover:shadow-xl border border-gray-100 transition text-center">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mb-5">
              <FiThumbsUp className="text-3xl" />
            </div>

            <h3 className="font-semibold text-lg text-gray-900">Travel Made Simple</h3>

            <p className="text-gray-600 text-sm mt-3 leading-6">
              Get straightforward guidance about flights, travel conditions, and airline
              information.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-7 shadow-lg rounded-2xl bg-white hover:shadow-xl border border-gray-100 transition text-center">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-orange-100 text-orange-600 mb-5">
              <FiPhoneCall className="text-3xl" />
            </div>

            <h3 className="font-semibold text-lg text-gray-900">Travel Assistance</h3>

            <p className="text-gray-600 text-sm mt-3 leading-6">
              Speak with a travel specialist for general travel-related questions and guidance.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT FLYDEALHUB
      ========================================================= */}

      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-3">
                About Flydealhub
              </p>

              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                Travel information,
                <br />
                <span className="text-blue-600">made easier.</span>
              </h2>

              <p className="text-gray-600 leading-8 text-lg mt-6">
                Flydealhub is a travel assistance platform designed to help travelers understand
                their available flight options and important travel information.
              </p>

              <p className="text-gray-600 leading-8 text-lg mt-5">
                Whether you are planning a business journey, family trip, holiday, or international
                travel, our specialists can help you understand flight information, airline
                policies, fare conditions, applicable fees, and other travel-related details.
              </p>

              <p className="text-gray-600 leading-8 text-lg mt-5">
                Our goal is simple: provide clear, accessible travel guidance so you can make
                informed decisions about your journey with greater confidence.
              </p>

              <a
                href="tel:+18887898629"
                className="inline-flex items-center gap-2 mt-7 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                <FiPhoneCall />
                Talk to a Travel Specialist
              </a>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-blue-50">
                  <FiUsers className="text-3xl text-blue-600 mb-4" />
                  <h3 className="font-bold text-gray-900 text-lg">Real Specialists</h3>
                  <p className="text-gray-600 text-sm mt-2 leading-6">
                    Get guidance from real travel specialists.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-green-50">
                  <FiInfo className="text-3xl text-green-600 mb-4" />
                  <h3 className="font-bold text-gray-900 text-lg">Clear Information</h3>
                  <p className="text-gray-600 text-sm mt-2 leading-6">
                    Understand important travel information more easily.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-purple-50">
                  <FiHeadphones className="text-3xl text-purple-600 mb-4" />
                  <h3 className="font-bold text-gray-900 text-lg">Personal Guidance</h3>
                  <p className="text-gray-600 text-sm mt-2 leading-6">
                    Get assistance based on your travel questions.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-orange-50">
                  <FiGlobe className="text-3xl text-orange-600 mb-4" />
                  <h3 className="font-bold text-gray-900 text-lg">Global Travel</h3>
                  <p className="text-gray-600 text-sm mt-2 leading-6">
                    Guidance for domestic and international journeys.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}

      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
              Our Services
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">
              Guidance for every step
              <br />
              of your journey.
            </h2>

            <p className="text-gray-600 mt-5 leading-7">
              Whether you're planning a new trip or looking for information about your travel
              options, our specialists are ready to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {/* Service 1 */}
            <div className="group p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition bg-white">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-6">
                <FaPlane className="text-2xl" />
              </div>

              <h3 className="text-xl font-bold text-gray-900">Explore Your Travel Options</h3>

              <p className="text-gray-600 mt-3 leading-7">
                Understand available flight options based on your destination, travel dates,
                passengers, and preferred travel class.
              </p>
            </div>

            {/* Service 2 */}
            <div className="group p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition bg-white">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-green-100 text-green-600 mb-6">
                <FiShield className="text-2xl" />
              </div>

              <h3 className="text-xl font-bold text-gray-900">Understand Airline Policies</h3>

              <p className="text-gray-600 mt-3 leading-7">
                Get guidance about airline policies, fare conditions, applicable fees, and important
                travel information.
              </p>
            </div>

            {/* Service 3 */}
            <div className="group p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition bg-white">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-purple-100 text-purple-600 mb-6">
                <FiGlobe className="text-2xl" />
              </div>

              <h3 className="text-xl font-bold text-gray-900">Plan Your Journey</h3>

              <p className="text-gray-600 mt-3 leading-7">
                Get helpful travel guidance when planning journeys across multiple destinations.
              </p>
            </div>

            {/* Service 4 */}
            <div className="group p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition bg-white">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-orange-100 text-orange-600 mb-6">
                <FiInfo className="text-2xl" />
              </div>

              <h3 className="text-xl font-bold text-gray-900">Understand Your Itinerary</h3>

              <p className="text-gray-600 mt-3 leading-7">
                Review your available travel information and better understand the details of your
                journey.
              </p>
            </div>

            {/* Service 5 */}
            <div className="group p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition bg-white">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-pink-100 text-pink-600 mb-6">
                <FiDollarSign className="text-2xl" />
              </div>

              <h3 className="text-xl font-bold text-gray-900">Travel Information</h3>

              <p className="text-gray-600 mt-3 leading-7">
                Learn more about fare information, applicable fees, airline conditions, and other
                travel-related details.
              </p>
            </div>

            {/* Service 6 */}
            <div className="group p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition bg-white">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-cyan-100 text-cyan-600 mb-6">
                <FiPhoneCall className="text-2xl" />
              </div>

              <h3 className="text-xl font-bold text-gray-900">Speak With a Specialist</h3>

              <p className="text-gray-600 mt-3 leading-7">
                Have a travel question? Speak with a specialist for personalized guidance and
                assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW IT WORKS
      ========================================================= */}

      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
              How It Works
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">
              Get travel guidance
              <br />
              in 3 simple steps.
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto mt-5 leading-7">
              Connecting with a travel specialist is quick, easy, and completely hassle-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-6">
                01
              </div>

              <h3 className="text-2xl font-bold text-gray-900">Reach Out</h3>

              <p className="text-gray-600 mt-3 leading-7">
                Call +18887898629 or connect with one of our travel specialists.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-6">
                02
              </div>

              <h3 className="text-2xl font-bold text-gray-900">Get Expert Guidance</h3>

              <p className="text-gray-600 mt-3 leading-7">
                Share your travel questions and get clear information from a specialist.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-6">
                03
              </div>

              <h3 className="text-2xl font-bold text-gray-900">Travel With Confidence</h3>

              <p className="text-gray-600 mt-3 leading-7">
                Make informed decisions with a better understanding of your travel options and
                available information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TRAVEL ASSISTANCE CTA
      ========================================================= */}

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-7 py-14 md:px-14 md:py-16">
            {/* Decorative elements */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-600/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-3xl">
              <p className="text-blue-300 font-semibold uppercase tracking-wider text-sm">
                Travel Assistance
              </p>

              <h2 className="text-3xl md:text-5xl font-bold mt-3 leading-tight">
                Wherever you're going,
                <br />
                we're here to help.
              </h2>

              <p className="text-white/75 text-lg leading-8 mt-6">
                Get expert travel guidance for flight options, airline policies, fare conditions,
                applicable fees, and travel-related questions. Our specialists help you understand
                your options so you can make informed decisions about your journey.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="tel:+18887898629"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-7 py-3.5 rounded-lg font-semibold transition"
                >
                  <FiPhoneCall />
                  +18887898629
                </a>

                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-7 py-3.5 rounded-lg font-semibold transition"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DESTINATIONS
      ========================================================= */}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
              Explore Travel
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">
              Popular destinations
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto mt-4 leading-7">
              Explore travel information and flight options for destinations around the world.
            </p>
          </div>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={25}
            slidesPerView={3}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            style={{ padding: '20px 5px 30px' }}
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
            {destinations.map((destination, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all overflow-hidden border border-gray-100">
                  <div
                    className="h-52 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${destination.image})`,
                    }}
                  >
                    <div className="h-full bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5">
                      <h3 className="text-2xl font-bold text-white">{destination.city}</h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-sm text-gray-500 flex items-center gap-2">
                      <FiUsers className="text-blue-500" />
                      {destination.checks} Travelers Interested
                    </p>

                    <ul className="mt-4 text-sm text-gray-600 space-y-3">
                      <li className="flex gap-2 items-center">
                        <FaPlane className="text-blue-500" />
                        {destination.trip}
                      </li>

                      <li className="flex gap-2 items-center">
                        <FiGlobe className="text-blue-500" />
                        {destination.flight}
                      </li>

                      <li className="flex gap-2 items-center">
                        <FiInfo className="text-blue-500" />
                        {destination.visit}
                      </li>
                    </ul>

                    <a
                      href="#services"
                      className="mt-5 block w-full text-center bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition font-medium"
                    >
                      Explore Travel Options
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* =========================================================
          WHY FLYDEALHUB
      ========================================================= */}

      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
              Why Call Us
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">
              Why choose Flydealhub?
            </h2>

            <p className="text-gray-600 mt-5 leading-7">
              We make travel simpler by helping you understand the details, explore your options,
              and make confident travel decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Item 1 */}
            <div className="flex gap-5 bg-white p-7 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <FiUsers className="text-2xl" />
              </div>

              <div>
                <h3 className="font-bold text-xl text-gray-900">Talk to a Travel Expert</h3>

                <p className="text-gray-600 mt-2 leading-6">
                  Get guidance from a real travel specialist who can help answer your travel-related
                  questions.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-5 bg-white p-7 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
                <FiPhoneCall className="text-2xl" />
              </div>

              <div>
                <h3 className="font-bold text-xl text-gray-900">Help When You Need It</h3>

                <p className="text-gray-600 mt-2 leading-6">
                  Get assistance with general travel questions and information whenever you need
                  guidance.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex gap-5 bg-white p-7 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                <FiInfo className="text-2xl" />
              </div>

              <div>
                <h3 className="font-bold text-xl text-gray-900">Simple, Straightforward Help</h3>

                <p className="text-gray-600 mt-2 leading-6">
                  Clear guidance about flight information, airline policies, fare conditions, and
                  applicable fees.
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex gap-5 bg-white p-7 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                <FiGlobe className="text-2xl" />
              </div>

              <div>
                <h3 className="font-bold text-xl text-gray-900">Guidance for Your Trip</h3>

                <p className="text-gray-600 mt-2 leading-6">
                  Understand travel options that may be relevant to your destination and journey.
                </p>
              </div>
            </div>

            {/* Item 5 */}
            <div className="flex gap-5 bg-white p-7 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center">
                <FiDollarSign className="text-2xl" />
              </div>

              <div>
                <h3 className="font-bold text-xl text-gray-900">Travel Information That Matters</h3>

                <p className="text-gray-600 mt-2 leading-6">
                  Learn about fares, applicable fees, airline conditions, and other useful travel
                  information.
                </p>
              </div>
            </div>

            {/* Item 6 */}
            <div className="flex gap-5 bg-white p-7 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-100 text-cyan-600 flex items-center justify-center">
                <FiHeadphones className="text-2xl" />
              </div>

              <div>
                <h3 className="font-bold text-xl text-gray-900">Ongoing Travel Support</h3>

                <p className="text-gray-600 mt-2 leading-6">
                  We're here to assist with general travel-related questions and concerns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}

      <section className="max-w-5xl mx-auto py-20 px-6">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
            Need to Know
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-4 leading-7">
            Find answers to common questions about Flydealhub and our travel assistance services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-5 bg-white hover:bg-blue-50 transition"
              >
                <span className="text-base sm:text-lg font-semibold text-gray-800 text-left pr-4">
                  {faq.question}
                </span>

                <FaChevronDown
                  className={`transition-transform flex-shrink-0 ${
                    openIndex === index ? 'rotate-180 text-blue-600' : 'text-gray-500'
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-5 bg-blue-50 text-gray-700 text-sm sm:text-base leading-7 border-t border-blue-100">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="bg-blue-600 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center text-white">
          <div className="w-16 h-16 mx-auto rounded-full bg-white/15 flex items-center justify-center mb-6">
            <FiPhoneCall className="text-3xl" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold">Have a travel question?</h2>

          <p className="text-blue-100 text-lg max-w-2xl mx-auto mt-5 leading-8">
            Speak with a Flydealhub travel specialist and get clear guidance for your journey.
          </p>

          <a
            href="tel:+18887898629"
            className="inline-flex items-center gap-2 mt-8 bg-white text-blue-700 hover:bg-blue-50 px-8 py-3.5 rounded-lg font-bold transition shadow-lg"
          >
            <FiPhoneCall />
            Talk to a Specialist
          </a>

          <p className="mt-5 text-blue-100 text-sm">+18887898629</p>
        </div>
      </section>
    </>
  );
};

export default Home;
