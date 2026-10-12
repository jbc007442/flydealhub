import React, { useEffect, useState } from 'react';

import SearchBar from '../components/SearchBar';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import { FiUsers, FiTruck, FiGrid } from 'react-icons/fi';

import { FaChevronDown, FaPhone, FaPlane, FaSyncAlt, FaUndoAlt, FaUserEdit } from 'react-icons/fa';

import dubai from '../assets/dubai.jpg';
import sing from '../assets/sing.jpg';
import paris from '../assets/paris.jpg';
import london from '../assets/london.jpg';
import monte from '../assets/monte.jpg';
import flight from '../assets/flight.webp';

import 'swiper/css';
import 'swiper/css/autoplay';

const deals = [
  {
    city: 'Dubai',
    checks: 320,
    trip: '4 Nights Stay',
    flight: 'Roundtrip Flight',
    visit: 'City tour included',
    image: dubai,
  },
  {
    city: 'Singapore',
    checks: 210,
    trip: '5 Nights Stay',
    flight: 'Flight Included',
    visit: 'Theme Parks Visit',
    image: sing,
  },
  {
    city: 'Paris',
    checks: 410,
    trip: '3 Nights Stay',
    flight: 'Return Flight',
    visit: 'Eiffel Tower Visit',
    image: paris,
  },
  {
    city: 'Monaco',
    checks: 210,
    trip: '3 Nights Stay',
    flight: 'Return Flight',
    visit: 'Monte Carlo Visit',
    image: monte,
  },
  {
    city: 'london',
    checks: 490,
    trip: '5 Nights Stay',
    flight: 'Return Flight',
    visit: 'London Eye Visit',
    image: london,
  },
];

const faqs = [
  {
    question: 'How does Flydealhub offer the cheapest flights?',
    answer:
      'Flydealhub compares fares from hundreds of airlines and travel partners in real-time to find you the best deals. We also use intelligent pricing tools to highlight the cheapest travel dates.',
  },
  {
    question: 'How does Flydealhub keep my transactions secure?',
    answer:
      'We use 256-bit SSL encryption and secure payment gateways to ensure your transactions and personal data remain fully protected.',
  },
  {
    question: "Can I find all the airlines and all the flights I'm looking for on Flydealhub?",
    answer:
      'Yes! Flydealhub searches flights from international and domestic airlines worldwide to provide a wide range of options.',
  },
  {
    question: 'How can I book flights on Flydealhub?',
    answer:
      'Simply enter your travel details, compare flights, choose the best one, and book securely online in a few clicks.',
  },
];

const Reservation = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // =========================================================
  // MOBILE POPUP STATE
  // =========================================================

  const [showTravelSupportPopup, setShowTravelSupportPopup] = useState(false);

  // =========================================================
  // AUTOMATICALLY OPEN POPUP ON MOBILE
  // =========================================================

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 767px)').matches;

    if (!isMobile) {
      return;
    }

    const timer = window.setTimeout(() => {
      setShowReservationPopup(true);
    }, 1000);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* =========================================================
          HERO SECTION
      ========================================================= */}

      <section
        className="h-[300px] bg-cover bg-center flex items-center justify-center text-white relative"
        style={{
          backgroundImage: `url(${flight})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative text-center z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Reservations</h1>

          <p className="mt-2 text-lg opacity-90">Book flights with trusted airlines worldwide</p>
        </div>
      </section>

      {/* =========================================================
          SEARCH BAR SECTION
      ========================================================= */}

      <div className="relative z-20 -mt-10 max-w-6xl mx-auto px-4">
        <SearchBar />
      </div>

      {/* =========================================================
          MOBILE RESERVATION BUTTON
          Desktop: Hidden
          Mobile: Visible
      ========================================================= */}

      <div className="mt-4 flex justify-center px-4 md:hidden">
        <button
          type="button"
          onClick={() => setShowReservationPopup(true)}
          className="
            flex
            w-full
            max-w-sm
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-blue-600
            px-5
            py-3.5
            font-semibold
            text-white
            shadow-md
            transition
            hover:bg-blue-700
            active:scale-[0.98]
          "
        >
          <FaPhone />
          Reservations
        </button>
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <section className="py-10">
        <div className="max-w-6xl mx-auto px-6 leading-relaxed text-gray-700">
          {/* =====================================================
        WELCOME
    ===================================================== */}

          <section className="py-12">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">
                Welcome to Airline Travel Support
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Airline reservation systems are technologies used by airlines and travel
                distribution platforms to manage flight inventory, schedules, fares, passenger
                information, and ticketing services. These systems connect airlines with global
                distribution systems (GDS) and other travel platforms, allowing travelers and travel
                professionals to search and compare available flight options efficiently.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Flydealhub provides independent travel assistance to help customers explore
                available airline options, understand fares, and access useful travel information
                through trusted airline and distribution systems.
              </p>
            </div>
          </section>

          {/* =====================================================
        AIRLINE SUPPORT PHONE NUMBER
    ===================================================== */}

          <h2 className="text-2xl font-semibold mt-6 mb-3 border-l-4 border-blue-600 pl-3">
            Airline Support Phone Number
          </h2>

          <p className="mb-6">
            Travelers can contact an airline's official support team by using the telephone number
            listed on the airline's official website.
          </p>

          <p className="mb-6">
            Visit the airline's official website and locate its customer support or contact section.
            Make sure you use the official contact information provided by the airline. When
            contacting an airline, keep your travel details available, including your destination,
            travel dates, passenger information, and any special requirements.
          </p>

          <p className="mb-6">
            Airline representatives can provide information about available flights, fares,
            schedules, passenger requirements, and applicable airline policies. Any applicable fees
            should be confirmed directly with the airline before proceeding.
          </p>

          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6">
            <p className="font-semibold text-yellow-800 mb-2">💡 Tip:</p>

            <p className="text-yellow-700">
              Always verify airline contact information through the airline's official website and
              confirm applicable fees or policies directly with the airline.
            </p>
          </div>

          {/* =====================================================
        TRAVEL ASSISTANCE
    ===================================================== */}

          <h2 className="text-2xl font-semibold mt-6 mb-3 border-l-4 border-blue-600 pl-3">
            Flight Travel Assistance – 24/7 Customer Support
          </h2>

          <p className="mb-6">
            Get helpful travel information and assistance from experienced travel professionals.
          </p>

          {/* =====================================================
        SERVICES
    ===================================================== */}

          <h2 className="text-2xl font-semibold mt-6 mb-3 border-l-4 border-blue-600 pl-3">
            Our Services
          </h2>

          <ul className="list-none space-y-2 mb-6">
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✅</span>
              Domestic & International Flight Options
            </li>

            <li className="flex items-center">
              <span className="text-green-600 mr-2">✅</span>
              Flight Schedule & Fare Information
            </li>

            <li className="flex items-center">
              <span className="text-green-600 mr-2">✅</span>
              Passenger Information Assistance
            </li>

            <li className="flex items-center">
              <span className="text-green-600 mr-2">✅</span>
              Airline Policy & Refund Information
            </li>

            <li className="flex items-center">
              <span className="text-green-600 mr-2">✅</span>
              Seat & Special Travel Requirement Assistance
            </li>
          </ul>

          <p className="mb-6">
            We help travelers explore available flight options through trusted airline systems and
            provide useful information to make their travel planning simple and convenient.
          </p>

          {/* =====================================================
        WHY CHOOSE US
    ===================================================== */}

          <h2 className="text-2xl font-semibold mt-6 mb-3 border-l-4 border-blue-600 pl-3">
            Why Choose Us
          </h2>

          <ul className="list-none space-y-2 mb-6">
            <li className="flex items-center">
              <span className="text-blue-600 mr-2">🌐</span>
              24/7 Customer Support via Phone
            </li>

            <li className="flex items-center">
              <span className="text-blue-600 mr-2">⚡</span>
              Fast and Reliable Travel Assistance
            </li>

            <li className="flex items-center">
              <span className="text-blue-600 mr-2">🧾</span>
              Transparent Policies with No Hidden Fees
            </li>

            <li className="flex items-center">
              <span className="text-blue-600 mr-2">👨‍💼</span>
              Experienced Travel Consultants
            </li>

            <li className="flex items-center">
              <span className="text-blue-600 mr-2">🔒</span>
              Safe & Secure Payment Channels
            </li>
          </ul>

          {/* =====================================================
        HOW IT WORKS
    ===================================================== */}

          <h2 className="text-2xl font-semibold mt-6 mb-3 border-l-4 border-blue-600 pl-3">
            How It Works
          </h2>

          <ol className="list-decimal ml-6 space-y-2 mb-6">
            <li className="flex items-start">
              <span className="mr-2 mt-1">📞</span>
              Contact Our Support Team – Speak with a trained travel professional.
            </li>

            <li className="flex items-start">
              <span className="mr-2 mt-1">🧳</span>
              Share Your Travel Details – Destination, dates, passengers, and airline preferences.
            </li>

            <li className="flex items-start">
              <span className="mr-2 mt-1">✈️</span>
              Explore Available Options – Review suitable flight options and fare information.
            </li>

            <li className="flex items-start">
              <span className="mr-2 mt-1">💳</span>
              Secure Payment – Use secure payment channels when applicable.
            </li>
          </ol>

          {/* =====================================================
        DISCLAIMER
    ===================================================== */}

          <p className="mb-6 text-sm text-gray-600 italic">
            Flydealhub is an independent travel service provider and is not directly affiliated with
            any airline. We provide general travel information, flight options, fare details, and
            customer assistance through authorized airline and travel distribution systems. Airline
            policies, prices, availability, and applicable terms are determined by the respective
            airlines and may vary.
          </p>
        </div>
      </section>

      {/* =========================================================
          CAROUSEL SECTION
      ========================================================= */}

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-700 text-center mb-10">
            Popular Airline Deals
          </h2>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={25}
            slidesPerView={3}
            autoplay={{
              delay: 2000,
            }}
            loop={true}
            style={{
              padding: '20px',
            }}
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
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div
                    className="h-44 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${d.image})`,
                    }}
                  ></div>

                  <div className="p-5">
                    <h3 className="text-xl font-bold">{d.city}</h3>

                    <p className="flex items-center text-sm text-gray-500 gap-2">
                      <FiUsers />
                      {d.checks} Bookings
                    </p>

                    <ul className="mt-3 text-gray-700 text-sm space-y-2">
                      <li className="flex items-center gap-2">
                        <FiTruck />
                        {d.trip}
                      </li>

                      <li className="flex items-center gap-2">
                        <FaPlane />
                        {d.flight}
                      </li>

                      <li className="flex items-center gap-2">
                        <FiGrid />
                        {d.visit}
                      </li>
                    </ul>

                    <button className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
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
                  className={`transition-transform ${
                    openIndex === index ? 'rotate-180 text-blue-600' : 'text-gray-500'
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-5 py-4 bg-blue-50 text-gray-700 text-sm sm:text-base">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
    MOBILE TRAVEL SUPPORT POPUP
    Opens automatically on mobile
========================================================= */}

      {showTravelSupportPopup && (
        <div className="fixed inset-0 z-[99999] flex flex-col bg-slate-50 animate-in fade-in zoom-in-95 duration-300 md:hidden">
          {/* =====================================================
        1. TOP ALERT BAR
    ===================================================== */}

          <div className="bg-blue-700 text-white text-[10px] py-1.5 px-4 flex justify-center items-center gap-2 font-bold uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            High Call Volume: Priority Connection Active
          </div>

          {/* =====================================================
        2. HEADER
    ===================================================== */}

          <header className="flex items-center justify-between px-3 py-3 bg-white border-b border-blue-100">
            {/* Brand */}
            <div className="flex items-center">
              <h1 className="text-sm font-black tracking-tight text-blue-600">
                Trip <span className="text-slate-900">Fly Hub</span>
              </h1>
            </div>

            {/* Phone + Close */}
            <div className="flex items-center gap-2">
              <a
                href="tel:+18558669425"
                className="
            text-xs
            font-bold
            px-3
            py-2
            border
            border-blue-200
            rounded-full
            text-slate-800
            whitespace-nowrap
            hover:bg-blue-50
            transition
          "
              >
                +1 (855) 866-9425
              </a>

              <button
                type="button"
                onClick={() => setShowTravelSupportPopup(false)}
                className="
            p-2
            rounded-full
            text-slate-400
            hover:bg-blue-50
            hover:text-blue-600
            active:scale-95
            transition-all
          "
                aria-label="Close travel support popup"
              >
                <span className="text-xl leading-none">×</span>
              </button>
            </div>
          </header>

          {/* =====================================================
        3. TRAVEL SUPPORT STRIP
    ===================================================== */}

          <div className="bg-blue-600 text-white py-3 text-center font-black text-lg shadow-inner relative overflow-hidden">
            <div className="relative z-10 flex items-center justify-center gap-3 tracking-wide">
              TRAVEL SUPPORT
            </div>

            {/* Shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-300/40 to-transparent animate-[shimmer_3s_infinite]" />
          </div>

          {/* =====================================================
        4. MAIN CONTENT
    ===================================================== */}

          <main className="flex-1 flex flex-col items-center justify-center px-4 py-4 overflow-hidden bg-slate-50">
            {/* =================================================
          VISUAL CENTERPIECE
      ================================================= */}

            <div className="relative mb-4">
              {/* Outer glow */}
              <div className="absolute inset-0 bg-blue-400 rounded-full blur-2xl opacity-30 animate-pulse" />

              {/* Pulse ring */}
              <div className="absolute inset-0 bg-blue-300 rounded-full scale-110 blur-xl opacity-20 animate-ping" />

              {/* Center icon */}
              <div className="relative z-10 w-24 h-24 rounded-full border-4 border-white bg-blue-600 shadow-xl flex items-center justify-center">
                <FaPhone className="text-white text-4xl animate-pulse" />
              </div>
            </div>

            {/* =================================================
          TITLE
      ================================================= */}

            <div className="text-center mb-4">
              <h2 className="text-2xl font-black text-slate-900 mb-0.5 tracking-tight">
                24/7 Travel Support
              </h2>

              <p className="text-slate-500 font-semibold text-sm">
                Average wait time:{' '}
                <span className="text-green-600 animate-pulse underline">5 sec</span>
              </p>
            </div>

            {/* =================================================
          ACTION BUTTONS
      ================================================= */}

            <div className="grid grid-cols-2 gap-3 w-full max-w-sm mb-5">
              {[
                { label: 'Flight Options' },
                { label: 'Travel Assistance' },
                { label: 'Refund Information' },
                { label: 'Customer Service' },
              ].map((item) => (
                <a
                  key={item.label}
                  href="tel:+18558669425"
                  className="
              flex
              items-center
              justify-center
              py-4
              px-3
              bg-blue-600
              rounded-xl
              shadow-sm
              hover:shadow-md
              hover:bg-blue-700
              transition-all
              active:scale-95
            "
                >
                  <span className="text-sm font-bold uppercase text-white tracking-tight text-center leading-tight">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>

            {/* =================================================
          SUB TITLE
      ================================================= */}

            <div className="text-center border-b border-blue-100 pb-1 mb-3">
              <h2 className="text-sm font-bold text-slate-900 tracking-tight">
                Flight Options & Travel Assistance Over The Phone
              </h2>
            </div>

            {/* =================================================
          PRIMARY CTA
      ================================================= */}

            <div className="w-full max-w-xs space-y-3">
              <div className="relative group">
                {/* Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-700 rounded-xl blur opacity-40 group-hover:opacity-100 animate-pulse transition duration-1000" />

                <a
                  href="tel:+18558669425"
                  className="
              relative
              flex
              items-center
              justify-center
              gap-2
              w-full
              bg-blue-600
              text-white
              py-3.5
              rounded-xl
              font-black
              text-xl
              shadow-lg
              hover:bg-blue-700
              transition-all
              overflow-hidden
            "
                >
                  {/* Shimmer */}
                  <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite]" />

                  <FaPhone className="w-6 h-6 animate-bounce" />

                  <span className="text-lg leading-none">+1 (855) 866-9425</span>
                </a>
              </div>

              {/* =================================================
            STATUS BADGE
        ================================================= */}

              <div className="bg-green-50 py-1.5 px-3 rounded-full border border-green-100 flex items-center justify-center gap-2 mx-auto w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>

                <p className="text-green-700 text-[9px] font-black uppercase tracking-tighter">
                  Agent Assigned & Waiting to Connect
                </p>
              </div>
            </div>
          </main>

          {/* =====================================================
        5. BOTTOM FOOTER
    ===================================================== */}

          <a
            href="tel:+18558669425"
            className="
        bg-slate-900
        text-white
        py-4
        px-6
        flex
        items-center
        justify-between
        hover:bg-slate-800
        transition-colors
        border-t-4
        border-blue-600
      "
          >
            <div className="flex flex-col">
              <span className="text-[10px] text-blue-400 uppercase font-black">
                Tap to Connect Instantly
              </span>

              <span className="font-mono font-bold text-lg text-white">+1 (855) 866-9425</span>
            </div>

            <div className="bg-blue-600 text-white px-6 py-2 rounded-xl font-black text-sm animate-pulse shadow-lg">
              CALL NOW
            </div>
          </a>
        </div>
      )}

      {/* =========================================================
    POPUP ANIMATIONS
========================================================= */}

      <style>
        {`
    @keyframes shimmer {
      0% {
        transform: translateX(-100%);
      }

      100% {
        transform: translateX(300%);
      }
    }
  `}
      </style>
    </>
  );
};

export default Reservation;
