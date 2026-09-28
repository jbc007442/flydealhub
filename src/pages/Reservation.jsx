import React, {useState} from "react";
import SearchBar from "../components/SearchBar"; // ✅ Import SearchBar
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FiUsers, FiTruck, FiGrid } from "react-icons/fi";
import { FaChevronDown, FaPhone, FaPlane, FaSyncAlt, FaUndoAlt, FaUserEdit } from "react-icons/fa";
import dubai from "../assets/dubai.jpg";
import sing from "../assets/sing.jpg";
import paris from "../assets/paris.jpg";
import london from "../assets/london.jpg";
import monte from "../assets/monte.jpg";
import flight from "../assets/flight.webp";

// Swiper CSS
import "swiper/css";
import "swiper/css/autoplay";

const deals = [
  {
    city: "Dubai",
    checks: 320,
    trip: "4 Nights Stay",
    flight: "Roundtrip Flight",
    visit: "City tour included",
    image: dubai,
  },
  {
    city: "Singapore",
    checks: 210,
    trip: "5 Nights Stay",
    flight: "Flight Included",
    visit: "Theme Parks Visit",
    image: sing,
  },
  {
    city: "Paris",
    checks: 410,
    trip: "3 Nights Stay",
    flight: "Return Flight",
    visit: "Eiffel Tower Visit",
    image: paris,
  },
  {
  city: "Monaco",
  checks: 210,
  trip: "3 Nights Stay",
  flight: "Return Flight",
  visit: "Monte Carlo Visit",
  image: monte,
  },
  {
    city: "london",
    checks: 490,
    trip: "5 Nights Stay",
    flight: "Return Flight",
    visit: "London Eye Visit",
    image: london,
  },
];

const faqs = [
  {
    question: "How does Flydealhub offer the cheapest flights?",
    answer:
      "Flydealhub compares fares from hundreds of airlines and travel partners in real-time to find you the best deals. We also use intelligent pricing tools to highlight the cheapest travel dates."
  },
  {
    question: "How does Flydealhub keep my transactions secure?",
    answer:
      "We use 256-bit SSL encryption and secure payment gateways to ensure your transactions and personal data remain fully protected."
  },
  {
    question: "Can I find all the airlines and all the flights I'm looking for on Flydealhub?",
    answer:
      "Yes! Flydealhub searches flights from international and domestic airlines worldwide to provide a wide range of options."
  },
  {
    question: "How can I book flights on Flydealhub?",
    answer:
      "Simply enter your travel details, compare flights, choose the best one, and book securely online in a few clicks."
  }
];

const Reservation = () => {
   const [openIndex, setOpenIndex] = useState(null);
  
    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  return (
    <>
      {/* ✅ HERO SECTION */}
      <section
        className="h-[300px] bg-cover bg-center flex items-center justify-center text-white relative"
         style={{
    backgroundImage: `url(${flight})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold">Reservations</h1>
          <p className="mt-2 text-lg opacity-90">Book flights with trusted airlines worldwide</p>
        </div>
      </section>

      {/* ✅ SEARCHBAR SECTION */}
      <div className="relative z-20 -mt-10 max-w-6xl mx-auto px-4">
        <SearchBar />
      </div>

      {/* ✅ ABOUT AIRLINES INFO */}

      {/* Main Content */}
      <section className=" py-10">
        <div className="max-w-6xl mx-auto px-6 leading-relaxed text-gray-700">
          <section className="py-12">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">
                Welcome to Reservation
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The technologies that enable an airline to sell its inventory (seats) are known as airline reservation systems (ARS). Schedules, rates, and a database of reservations (or passenger name records) and tickets issued (if appropriate) are all included. ARSs are a component of passenger service systems (PSS), which are programs that facilitate face-to-face communication with travelers. Eventually, the computer reservations system (CRS) replaced ARS. Reservations for a specific airline are made through a computer reservation system that links with a global distribution system (GDS), which facilitates reservations for the majority of major airlines in a single system for travel agents and other distribution channels.
              </p>
            </div>
          </section>

          <h2 className="text-2xl font-semibold mt-6 mb-3 border-l-4 border-blue-600 pl-3">
            Airline Reservation Phone Number
          </h2>
          <p className="mb-6">
            You can take the following actions to book an airline reservation over the phone:
          </p>
         
          <p className="mb-6">
            You can take the following actions to book an airline reservation over the phone:

Visit the airline's official website to make your reservation. Search for their customer care section or contact details. Locate the Telephone Number: Look for a phone number associated with booking, reservations, or customer support once you are on the website. Typically, the "Contact Us" or "Support" pages contain the contact details. Give the airline a call: Wait for a customer support agent to help you by dialing the number you discovered. Have all of your trip information ready, including the destination, dates, number of passengers, and any special needs. Booking Procedure: The customer support agent will walk you through the procedure, offering flight choices and answering any questions you might have. Payment: In order to validate your reservation, you will need to submit payment details. You can try looking online or going to a local travel agency that can assist you with making the reservation over the phone if you can not find the airline's phone number on their website. It is a good idea to ask about any potential fees during the call because certain airlines might charge an extra price for reservations booked over the phone.

💡 Tip: Some airlines may charge a small fee for reservations made over the phone, so always confirm during your call.
          </p>
          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6">
            <p className="font-semibold text-yellow-800 mb-2">💡 Tip:</p>
            <p className="text-yellow-700">Some airlines may charge a small fee for reservations made over the phone, so always confirm during your call.</p>
          </div>

          <h2 className="text-2xl font-semibold mt-6 mb-3 border-l-4 border-blue-600 pl-3">
            Flight Booking, Changes, Cancellations & Name Corrections – 24/7 Assistance
          </h2>
          <p className="mb-6">
            Get Instant Help From Certified Travel Agents
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 border-l-4 border-blue-600 pl-3">
            Our Services
          </h2>
          <ul className="list-none space-y-2 mb-6">
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✅</span> New Flight Bookings – Domestic & International Routes
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✅</span> Flight Date & Time Changes
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✅</span> Name Correction or Passenger Details Update
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✅</span> Ticket Cancellations & Refund Support
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✅</span> Seat Upgrade or Special Request Assistance
            </li>
          </ul>
          <p className="mb-6">
            We help you find the best available options through trusted airline systems to make your travel smooth and hassle-free.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 border-l-4 border-blue-600 pl-3">
            Why Choose Us
          </h2>
          <ul className="list-none space-y-2 mb-6">
            <li className="flex items-center">
              <span className="text-blue-600 mr-2">🌐</span> 24/7 Customer Support via Phone
            </li>
            <li className="flex items-center">
              <span className="text-blue-600 mr-2">⚡</span> Fast and Reliable Booking Assistance
            </li>
            <li className="flex items-center">
              <span className="text-blue-600 mr-2">🧾</span> Transparent Policies with No Hidden Fees
            </li>
            <li className="flex items-center">
              <span className="text-blue-600 mr-2">👨‍💼</span> Experienced Travel Consultants
            </li>
            <li className="flex items-center">
              <span className="text-blue-600 mr-2">🔒</span> Safe & Secure Payment Channels
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-3 border-l-4 border-blue-600 pl-3">
            How It Works
          </h2>
          <ol className="list-decimal ml-6 space-y-2 mb-6">
            <li className="flex items-start">
              <span className="mr-2 mt-1">📞</span> Call Our Support Line – Speak with a trained agent immediately.
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1">🧳</span> Share Your Travel Details – Date, destination, and airline preferences.
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1">✈️</span> Get Options & Confirm – Receive the best available flight solutions.
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1">💳</span> Secure Payment & Confirmation – Get instant confirmation via email or SMS.
            </li>
          </ol>

          <p className="mb-6 text-sm text-gray-600 italic">
            We are an independent travel service provider and are not directly affiliated with any airline. Our agents assist travelers in managing reservations, changes, and cancellations through authorized airline systems.
          </p>
        </div>
      </section>

      {/* ✅ CAROUSEL SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-700 text-center mb-10">
             Popular Airline Deals
          </h2>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={25}
            slidesPerView={3}
            autoplay={{ delay: 2000 }}
            loop={true}
            style={{ padding: "20px" }} 
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {deals.map((d, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div
                    className="h-44 bg-cover bg-center"
                    style={{ backgroundImage: `url(${d.image})` }}
                  ></div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold">{d.city}</h3>
                    <p className="flex items-center text-sm text-gray-500 gap-2">
                      <FiUsers /> {d.checks} Bookings
                    </p>
                    <ul className="mt-3 text-gray-700 text-sm space-y-2">
                      <li className="flex items-center gap-2">
                        <FiTruck /> {d.trip}
                      </li>
                      <li className="flex items-center gap-2">
                        <FaPlane /> {d.flight}
                      </li>
                      <li className="flex items-center gap-2">
                        <FiGrid /> {d.visit}
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

      {/* ✅ FAQ SECTION */}
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
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center px-5 py-4 bg-white hover:bg-blue-50 transition"
                  >
                    <span className="text-base sm:text-lg font-medium text-gray-800">
                      {faq.question}
                    </span>
                    <FaChevronDown
                      className={`transition-transform ${
                        openIndex === index ? "rotate-180 text-blue-600" : "text-gray-500"
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
    </>
  );
};

export default Reservation;
