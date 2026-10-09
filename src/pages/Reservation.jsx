// import React, {useState} from "react";
// import SearchBar from "../components/SearchBar"; // ✅ Import SearchBar
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import { FiUsers, FiTruck, FiGrid } from "react-icons/fi";
// import { FaChevronDown, FaPhone, FaPlane, FaSyncAlt, FaUndoAlt, FaUserEdit } from "react-icons/fa";
// import dubai from "../assets/dubai.jpg";
// import sing from "../assets/sing.jpg";
// import paris from "../assets/paris.jpg";
// import london from "../assets/london.jpg";
// import monte from "../assets/monte.jpg";
// import flight from "../assets/flight.webp";

// // Swiper CSS
// import "swiper/css";
// import "swiper/css/autoplay";

// const deals = [
//   {
//     city: "Dubai",
//     checks: 320,
//     trip: "4 Nights Stay",
//     flight: "Roundtrip Flight",
//     visit: "City tour included",
//     image: dubai,
//   },
//   {
//     city: "Singapore",
//     checks: 210,
//     trip: "5 Nights Stay",
//     flight: "Flight Included",
//     visit: "Theme Parks Visit",
//     image: sing,
//   },
//   {
//     city: "Paris",
//     checks: 410,
//     trip: "3 Nights Stay",
//     flight: "Return Flight",
//     visit: "Eiffel Tower Visit",
//     image: paris,
//   },
//   {
//   city: "Monaco",
//   checks: 210,
//   trip: "3 Nights Stay",
//   flight: "Return Flight",
//   visit: "Monte Carlo Visit",
//   image: monte,
//   },
//   {
//     city: "london",
//     checks: 490,
//     trip: "5 Nights Stay",
//     flight: "Return Flight",
//     visit: "London Eye Visit",
//     image: london,
//   },
// ];

// const faqs = [
//   {
//     question: "How does Flydealhub offer the cheapest flights?",
//     answer:
//       "Flydealhub compares fares from hundreds of airlines and travel partners in real-time to find you the best deals. We also use intelligent pricing tools to highlight the cheapest travel dates."
//   },
//   {
//     question: "How does Flydealhub keep my transactions secure?",
//     answer:
//       "We use 256-bit SSL encryption and secure payment gateways to ensure your transactions and personal data remain fully protected."
//   },
//   {
//     question: "Can I find all the airlines and all the flights I'm looking for on Flydealhub?",
//     answer:
//       "Yes! Flydealhub searches flights from international and domestic airlines worldwide to provide a wide range of options."
//   },
//   {
//     question: "How can I book flights on Flydealhub?",
//     answer:
//       "Simply enter your travel details, compare flights, choose the best one, and book securely online in a few clicks."
//   }
// ];

// const Reservation = () => {
//    const [openIndex, setOpenIndex] = useState(null);

//     const toggleFAQ = (index) => {
//       setOpenIndex(openIndex === index ? null : index);
//     };
//   return (
//     <>
//       {/* ✅ HERO SECTION */}
//       <section
//         className="h-[300px] bg-cover bg-center flex items-center justify-center text-white relative"
//          style={{
//     backgroundImage: `url(${flight})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//   }}
//       >
//         <div className="absolute inset-0 bg-black/50"></div>
//         <div className="relative text-center z-10">
//           <h1 className="text-4xl md:text-5xl font-bold">Reservations</h1>
//           <p className="mt-2 text-lg opacity-90">Book flights with trusted airlines worldwide</p>
//         </div>
//       </section>

//       {/* ✅ SEARCHBAR SECTION */}
//       <div className="relative z-20 -mt-10 max-w-6xl mx-auto px-4">
//         <SearchBar />
//       </div>

//       {/* ✅ ABOUT AIRLINES INFO */}

//       {/* Main Content */}
//       <section className=" py-10">
//         <div className="max-w-6xl mx-auto px-6 leading-relaxed text-gray-700">
//           <section className="py-12">
//             <div className="max-w-6xl mx-auto px-6">
//               <h2 className="text-2xl font-bold text-blue-700 mb-4">
//                 Welcome to Reservation
//               </h2>
//               <p className="text-gray-700 leading-relaxed mb-6">
//                 The technologies that enable an airline to sell its inventory (seats) are known as airline reservation systems (ARS). Schedules, rates, and a database of reservations (or passenger name records) and tickets issued (if appropriate) are all included. ARSs are a component of passenger service systems (PSS), which are programs that facilitate face-to-face communication with travelers. Eventually, the computer reservations system (CRS) replaced ARS. Reservations for a specific airline are made through a computer reservation system that links with a global distribution system (GDS), which facilitates reservations for the majority of major airlines in a single system for travel agents and other distribution channels.
//               </p>
//             </div>
//           </section>

//           <h2 className="text-2xl font-semibold mt-6 mb-3 border-l-4 border-blue-600 pl-3">
//             Airline Reservation Phone Number
//           </h2>
//           <p className="mb-6">
//             You can take the following actions to book an airline reservation over the phone:
//           </p>

//           <p className="mb-6">
//             You can take the following actions to book an airline reservation over the phone:

// Visit the airline's official website to make your reservation. Search for their customer care section or contact details. Locate the Telephone Number: Look for a phone number associated with booking, reservations, or customer support once you are on the website. Typically, the "Contact Us" or "Support" pages contain the contact details. Give the airline a call: Wait for a customer support agent to help you by dialing the number you discovered. Have all of your trip information ready, including the destination, dates, number of passengers, and any special needs. Booking Procedure: The customer support agent will walk you through the procedure, offering flight choices and answering any questions you might have. Payment: In order to validate your reservation, you will need to submit payment details. You can try looking online or going to a local travel agency that can assist you with making the reservation over the phone if you can not find the airline's phone number on their website. It is a good idea to ask about any potential fees during the call because certain airlines might charge an extra price for reservations booked over the phone.

// 💡 Tip: Some airlines may charge a small fee for reservations made over the phone, so always confirm during your call.
//           </p>
//           <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6">
//             <p className="font-semibold text-yellow-800 mb-2">💡 Tip:</p>
//             <p className="text-yellow-700">Some airlines may charge a small fee for reservations made over the phone, so always confirm during your call.</p>
//           </div>

//           <h2 className="text-2xl font-semibold mt-6 mb-3 border-l-4 border-blue-600 pl-3">
//             Flight Booking, Changes, Cancellations & Name Corrections – 24/7 Assistance
//           </h2>
//           <p className="mb-6">
//             Get Instant Help From Certified Travel Agents
//           </p>

//           <h2 className="text-2xl font-semibold mt-6 mb-3 border-l-4 border-blue-600 pl-3">
//             Our Services
//           </h2>
//           <ul className="list-none space-y-2 mb-6">
//             <li className="flex items-center">
//               <span className="text-green-600 mr-2">✅</span> New Flight Bookings – Domestic & International Routes
//             </li>
//             <li className="flex items-center">
//               <span className="text-green-600 mr-2">✅</span> Flight Date & Time Changes
//             </li>
//             <li className="flex items-center">
//               <span className="text-green-600 mr-2">✅</span> Name Correction or Passenger Details Update
//             </li>
//             <li className="flex items-center">
//               <span className="text-green-600 mr-2">✅</span> Ticket Cancellations & Refund Support
//             </li>
//             <li className="flex items-center">
//               <span className="text-green-600 mr-2">✅</span> Seat Upgrade or Special Request Assistance
//             </li>
//           </ul>
//           <p className="mb-6">
//             We help you find the best available options through trusted airline systems to make your travel smooth and hassle-free.
//           </p>

//           <h2 className="text-2xl font-semibold mt-6 mb-3 border-l-4 border-blue-600 pl-3">
//             Why Choose Us
//           </h2>
//           <ul className="list-none space-y-2 mb-6">
//             <li className="flex items-center">
//               <span className="text-blue-600 mr-2">🌐</span> 24/7 Customer Support via Phone
//             </li>
//             <li className="flex items-center">
//               <span className="text-blue-600 mr-2">⚡</span> Fast and Reliable Booking Assistance
//             </li>
//             <li className="flex items-center">
//               <span className="text-blue-600 mr-2">🧾</span> Transparent Policies with No Hidden Fees
//             </li>
//             <li className="flex items-center">
//               <span className="text-blue-600 mr-2">👨‍💼</span> Experienced Travel Consultants
//             </li>
//             <li className="flex items-center">
//               <span className="text-blue-600 mr-2">🔒</span> Safe & Secure Payment Channels
//             </li>
//           </ul>

//           <h2 className="text-2xl font-semibold mt-6 mb-3 border-l-4 border-blue-600 pl-3">
//             How It Works
//           </h2>
//           <ol className="list-decimal ml-6 space-y-2 mb-6">
//             <li className="flex items-start">
//               <span className="mr-2 mt-1">📞</span> Call Our Support Line – Speak with a trained agent immediately.
//             </li>
//             <li className="flex items-start">
//               <span className="mr-2 mt-1">🧳</span> Share Your Travel Details – Date, destination, and airline preferences.
//             </li>
//             <li className="flex items-start">
//               <span className="mr-2 mt-1">✈️</span> Get Options & Confirm – Receive the best available flight solutions.
//             </li>
//             <li className="flex items-start">
//               <span className="mr-2 mt-1">💳</span> Secure Payment & Confirmation – Get instant confirmation via email or SMS.
//             </li>
//           </ol>

//           <p className="mb-6 text-sm text-gray-600 italic">
//             We are an independent travel service provider and are not directly affiliated with any airline. Our agents assist travelers in managing reservations, changes, and cancellations through authorized airline systems.
//           </p>
//         </div>
//       </section>

//       {/* ✅ CAROUSEL SECTION */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-3xl font-bold text-blue-700 text-center mb-10">
//              Popular Airline Deals
//           </h2>

//           <Swiper
//             modules={[Autoplay]}
//             spaceBetween={25}
//             slidesPerView={3}
//             autoplay={{ delay: 2000 }}
//             loop={true}
//             style={{ padding: "20px" }}
//             breakpoints={{
//               320: { slidesPerView: 1 },
//               768: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//             }}
//           >
//             {deals.map((d, index) => (
//               <SwiperSlide key={index}>
//                 <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
//                   <div
//                     className="h-44 bg-cover bg-center"
//                     style={{ backgroundImage: `url(${d.image})` }}
//                   ></div>
//                   <div className="p-5">
//                     <h3 className="text-xl font-bold">{d.city}</h3>
//                     <p className="flex items-center text-sm text-gray-500 gap-2">
//                       <FiUsers /> {d.checks} Bookings
//                     </p>
//                     <ul className="mt-3 text-gray-700 text-sm space-y-2">
//                       <li className="flex items-center gap-2">
//                         <FiTruck /> {d.trip}
//                       </li>
//                       <li className="flex items-center gap-2">
//                         <FaPlane /> {d.flight}
//                       </li>
//                       <li className="flex items-center gap-2">
//                         <FiGrid /> {d.visit}
//                       </li>
//                     </ul>
//                     <button className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
//                       View Deal
//                     </button>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </section>

//       {/* ✅ FAQ SECTION */}
//              <section className="max-w-7xl mx-auto my-12 px-6">
//             <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-700 mb-6">
//               Frequently Asked Questions
//             </h2>

//             <div className="space-y-4">
//               {faqs.map((faq, index) => (
//                 <div
//                   key={index}
//                   className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
//                 >
//                   <button
//                     onClick={() => toggleFAQ(index)}
//                     className="w-full flex justify-between items-center px-5 py-4 bg-white hover:bg-blue-50 transition"
//                   >
//                     <span className="text-base sm:text-lg font-medium text-gray-800">
//                       {faq.question}
//                     </span>
//                     <FaChevronDown
//                       className={`transition-transform ${
//                         openIndex === index ? "rotate-180 text-blue-600" : "text-gray-500"
//                       }`}
//                     />
//                   </button>

//                   {openIndex === index && (
//                     <div className="px-5 py-4 bg-blue-50 text-gray-700 text-sm sm:text-base">
//                       {faq.answer}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </section>
//     </>
//   );
// };

// export default Reservation;

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

  // Mobile reservation popup
  const [showReservationPopup, setShowReservationPopup] = useState(false);

  /*
   * Automatically open popup on mobile.
   * Desktop will NOT open the popup.
   */
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
          SEARCH BAR
      ========================================================= */}

      <div className="relative z-20 -mt-10 max-w-6xl mx-auto px-4">
        <SearchBar />
      </div>

      {/* =========================================================
          MOBILE RESERVATION BUTTON
          Hidden on desktop
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
          {/* Welcome */}

          <section className="py-12">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">Welcome to Reservation</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                The technologies that enable an airline to sell its inventory (seats) are known as
                airline reservation systems (ARS). Schedules, rates, and a database of reservations
                (or passenger name records) and tickets issued (if appropriate) are all included.
                ARSs are a component of passenger service systems (PSS), which are programs that
                facilitate face-to-face communication with travelers. Eventually, the computer
                reservations system (CRS) replaced ARS. Reservations for a specific airline are made
                through a computer reservation system that links with a global distribution system
                (GDS), which facilitates reservations for the majority of major airlines in a single
                system for travel agents and other distribution channels.
              </p>
            </div>
          </section>

          {/* =========================================================
              AIRLINE RESERVATION PHONE NUMBER
          ========================================================= */}

          <h2 className="text-2xl font-semibold mt-6 mb-3 border-l-4 border-blue-600 pl-3">
            Airline Reservation Phone Number
          </h2>

          <p className="mb-6">
            You can take the following actions to book an airline reservation over the phone:
          </p>

          <p className="mb-6">
            You can take the following actions to book an airline reservation over the phone:
          </p>

          <p className="mb-6">
            Visit the airline's official website to make your reservation. Search for their customer
            care section or contact details. Locate the Telephone Number: Look for a phone number
            associated with booking, reservations, or customer support once you are on the website.
            Typically, the "Contact Us" or "Support" pages contain the contact details. Give the
            airline a call: Wait for a customer support agent to help you by dialing the number you
            discovered. Have all of your trip information ready, including the destination, dates,
            number of passengers, and any special needs. Booking Procedure: The customer support
            agent will walk you through the procedure, offering flight choices and answering any
            questions you might have. Payment: In order to validate your reservation, you will need
            to submit payment details. You can try looking online or going to a local travel agency
            that can assist you with making the reservation over the phone if you can not find the
            airline's phone number on their website. It is a good idea to ask about any potential
            fees during the call because certain airlines might charge an extra price for
            reservations booked over the phone.
          </p>

          <p className="mb-6">
            💡 Tip: Some airlines may charge a small fee for reservations made over the phone, so
            always confirm during your call.
          </p>

          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6">
            <p className="font-semibold text-yellow-800 mb-2">💡 Tip:</p>

            <p className="text-yellow-700">
              Some airlines may charge a small fee for reservations made over the phone, so always
              confirm during your call.
            </p>
          </div>

          {/* =========================================================
              ASSISTANCE
          ========================================================= */}

          <h2 className="text-2xl font-semibold mt-6 mb-3 border-l-4 border-blue-600 pl-3">
            Flight Booking, Changes, Cancellations & Name Corrections – 24/7 Assistance
          </h2>

          <p className="mb-6">Get Instant Help From Certified Travel Agents</p>

          {/* =========================================================
              OUR SERVICES
          ========================================================= */}

          <h2 className="text-2xl font-semibold mt-6 mb-3 border-l-4 border-blue-600 pl-3">
            Our Services
          </h2>

          <ul className="list-none space-y-2 mb-6">
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✅</span>
              New Flight Bookings – Domestic & International Routes
            </li>

            <li className="flex items-center">
              <span className="text-green-600 mr-2">✅</span>
              Flight Date & Time Changes
            </li>

            <li className="flex items-center">
              <span className="text-green-600 mr-2">✅</span>
              Name Correction or Passenger Details Update
            </li>

            <li className="flex items-center">
              <span className="text-green-600 mr-2">✅</span>
              Ticket Cancellations & Refund Support
            </li>

            <li className="flex items-center">
              <span className="text-green-600 mr-2">✅</span>
              Seat Upgrade or Special Request Assistance
            </li>
          </ul>

          <p className="mb-6">
            We help you find the best available options through trusted airline systems to make your
            travel smooth and hassle-free.
          </p>

          {/* =========================================================
              WHY CHOOSE US
          ========================================================= */}

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
              Fast and Reliable Booking Assistance
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

          {/* =========================================================
              HOW IT WORKS
          ========================================================= */}

          <h2 className="text-2xl font-semibold mt-6 mb-3 border-l-4 border-blue-600 pl-3">
            How It Works
          </h2>

          <ol className="list-decimal ml-6 space-y-2 mb-6">
            <li className="flex items-start">
              <span className="mr-2 mt-1">📞</span>
              Call Our Support Line – Speak with a trained agent immediately.
            </li>

            <li className="flex items-start">
              <span className="mr-2 mt-1">🧳</span>
              Share Your Travel Details – Date, destination, and airline preferences.
            </li>

            <li className="flex items-start">
              <span className="mr-2 mt-1">✈️</span>
              Get Options & Confirm – Receive the best available flight solutions.
            </li>

            <li className="flex items-start">
              <span className="mr-2 mt-1">💳</span>
              Secure Payment & Confirmation – Get instant confirmation via email or SMS.
            </li>
          </ol>

          <p className="mb-6 text-sm text-gray-600 italic">
            We are an independent travel service provider and are not directly affiliated with any
            airline. Our agents assist travelers in managing reservations, changes, and
            cancellations through authorized airline systems.
          </p>
        </div>
      </section>

      {/* =========================================================
          POPULAR AIRLINE DEALS
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
          FAQ
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
    MOBILE RESERVATION POPUP
    Opens automatically after 1 second on mobile
========================================================= */}

      {showReservationPopup && (
        <div className="fixed inset-0 z-[99999] flex flex-col bg-slate-50 animate-in fade-in zoom-in-95 duration-300 md:hidden">
          {/* TOP ALERT */}
          <div className="bg-blue-700 text-white text-[10px] py-1.5 px-4 flex justify-center items-center gap-2 font-bold uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            High Call Volume: Priority Connection Active
          </div>

          {/* HEADER */}
          <header className="flex items-center justify-between px-3 py-3 bg-white border-b border-blue-100">
            <h1 className="text-sm font-black tracking-tight text-blue-600">
              Trip <span className="text-slate-900">Fly Hub</span>
            </h1>

            <div className="flex items-center gap-2">
              <a
                href="tel:+18558669425"
                className="text-xs font-bold px-3 py-2 border border-blue-200 rounded-full text-slate-800 whitespace-nowrap hover:bg-blue-50 transition"
              >
                +1 (855) 866-9425
              </a>

              <button
                type="button"
                onClick={() => setShowReservationPopup(false)}
                className="p-2 rounded-full text-slate-400 hover:bg-blue-50 hover:text-blue-600 active:scale-95 transition-all"
                aria-label="Close reservation popup"
              >
                <span className="text-xl leading-none">×</span>
              </button>
            </div>
          </header>

          {/* RESERVATIONS STRIP */}
          <div className="bg-blue-600 text-white py-3 text-center font-black text-lg shadow-inner relative overflow-hidden">
            <div className="relative z-10 flex items-center justify-center gap-3 tracking-wide">
              RESERVATIONS
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-300/40 to-transparent animate-[shimmer_3s_infinite]" />
          </div>

          {/* CONTENT */}
          <main className="flex-1 flex flex-col items-center justify-center px-4 py-4 overflow-hidden bg-slate-50">
            {/* CENTER ICON */}
            <div className="relative mb-4">
              <div className="absolute inset-0 bg-blue-400 rounded-full blur-2xl opacity-30 animate-pulse" />

              <div className="absolute inset-0 bg-blue-300 rounded-full scale-110 blur-xl opacity-20 animate-ping" />

              <div className="relative z-10 w-24 h-24 rounded-full border-4 border-white bg-blue-600 shadow-xl flex items-center justify-center">
                <FaPhone className="text-white text-4xl animate-pulse" />
              </div>
            </div>

            {/* TITLE */}
            <div className="text-center mb-4">
              <h2 className="text-2xl font-black text-slate-900 mb-0.5 tracking-tight">
                24/7 Reservations Support
              </h2>

              <p className="text-slate-500 font-semibold text-sm">
                Average wait time:{' '}
                <span className="text-green-600 animate-pulse underline">5 sec</span>
              </p>
            </div>

            {/* ACTION BUTTONS */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-sm mb-5">
              {['New Booking', 'Changes', 'Cancellations', 'Customer Service'].map((label) => (
                <a
                  key={label}
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
                    {label}
                  </span>
                </a>
              ))}
            </div>

            {/* SUBTITLE */}
            <div className="text-center border-b border-blue-100 pb-1 mb-3">
              <h2 className="text-sm font-bold text-slate-900 tracking-tight">
                Booking & Changes Over The Phone
              </h2>
            </div>

            {/* CALL CTA */}
            <div className="w-full max-w-xs space-y-3">
              <div className="relative group">
                {/* BLUE GLOW */}
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
                  {/* SHIMMER */}
                  <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite]" />

                  <FaPhone className="w-6 h-6 animate-bounce" />

                  <span className="text-lg leading-none">+1 (855) 866-9425</span>
                </a>
              </div>

              {/* STATUS */}
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

          {/* BOTTOM FOOTER */}
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
    POPUP ANIMATION
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
