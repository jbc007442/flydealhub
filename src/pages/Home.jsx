import React, {useState} from "react";
import SearchBar from "../components/SearchBar"; // ✅ Import SearchBar
import {
  FiDollarSign,
  FiShield,
  FiThumbsUp,
  FiPhoneCall,
  FiUsers, 
  FiTruck, 
  FiGrid 
} from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import {} from "react-icons/fi";
import { FaPlane } from "react-icons/fa";
import hero from "../assets/hero.webp";
import manilla from "../assets/manilla.jpg";
import dubai from "../assets/dubai.jpg";
import bangkok from "../assets/bankok.jpg";
import italy from "../assets/italy.jpg";
import mexico from "../assets/mexico.jpg";


const deals = [
  {
    city: "Manila",
    checks: 234,
    trip: "5 Days Hotel Stay",
    flight: "Flight Included",
    visit: "Daily Guided Tours",
    image: manilla,
  },
  {
    city: "Dubai",
    checks: 412,
    trip: "4 Days Hotel Stay",
    flight: "Flight Included",
    visit: "Desert Safari",
    image: dubai,
  },
  {
    city: "Bangkok",
    checks: 388,
    trip: "6 Days Hotel Stay",
    flight: "Flight Included",
    visit: "City Tour",
    image: bangkok,
  },
  {
    city: "italy",
    checks: 318,
    trip: "7 Days Hotel Stay",
    flight: "Flight Included",
    visit: "City Tour",
    image: italy,
  },
  {
    city: "mexico",
    checks: 288,
    trip: "8 Days Hotel Stay",
    flight: "Flight Included",
    visit: "City Tour",
    image: mexico,
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




const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      {/* ✅ HERO SECTION */}
      <section
        className="h-[550px] bg-cover bg-center flex items-center justify-center text-white relative"
       style={{
    backgroundImage: `url(${hero})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}

      >
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
            Search & Book Affordable Flights
          </h1>
          <p className="mt-3 text-lg opacity-90 drop-shadow">
            Fast, simple, and secure flight booking experience
          </p>
        </div>
      </section>

      {/* ✅ SEARCHBAR SECTION */}
      <div className="relative z-20 -mt-12 max-w-6xl mx-auto px-4">
        <SearchBar />
      </div>

      {/* ✅ FEATURES SECTION */}
      <section className="max-w-6xl mx-auto px-6 md:px-4 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
  <div className="p-6 shadow-lg rounded-lg bg-white hover:shadow-xl border border-gray-100 transition">
    <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
      <FiDollarSign className="text-3xl" />
    </div>
    <h3 className="font-semibold text-lg">Best Fare Deals</h3>
    <p className="text-gray-600 text-sm mt-2">
      We compare 500+ airlines to get you the best flight deals.
    </p>
  </div>

  <div className="p-6 shadow-lg rounded-lg bg-white hover:shadow-xl border border-gray-100 transition">
    <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
      <FiShield className="text-3xl" />
    </div>
    <h3 className="font-semibold text-lg">Secure Booking</h3>
    <p className="text-gray-600 text-sm mt-2">
      Fully safe payment gateway protected by Cloudflare.
    </p>
  </div>

  <div className="p-6 shadow-lg rounded-lg bg-white hover:shadow-xl border border-gray-100 transition">
    <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mb-4">
      <FiThumbsUp className="text-3xl" />
    </div>
    <h3 className="font-semibold text-lg">Happy Travelers</h3>
    <p className="text-gray-600 text-sm mt-2">
      Trusted by thousands of travelers worldwide.
    </p>
  </div>

  <div className="p-6 shadow-lg rounded-lg bg-white hover:shadow-xl border border-gray-100 transition">
    <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-red-100 text-red-600 mb-4">
      <FiPhoneCall className="text-3xl" />
    </div>
    <h3 className="font-semibold text-lg">24x7 Support</h3>
    <p className="text-gray-600 text-sm mt-2">
      We're here for you 24/7 – always ready to help.
    </p>
  </div>
      </section>

     <section className="bg-gray-50 py-16">
  <div className="max-w-5xl mx-auto px-6 text-justify">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
      About <span className="text-blue-600">Flydealhub</span>
    </h2>
    <p className="text-gray-600 leading-relaxed text-lg">
      Welcome to Flydealhub, where our passion for travel meets our commitment to providing 
      unforgettable experiences for wanderers like you. As part of a robust umbrella of 
      Air Fare Bookers Pvt Ltd dedicated to enhancing your journey, we thrive on the belief 
      that travel is not merely a destination but a transformative experience that fosters 
      connection, understanding, and adventure. We are a travel corporation that places our 
      clients’ desires and necessities as our top-maximum precedence. We can fulfill all your 
      travel goals and wishes with no problem. We’re a travel planning and booking platform that 
      offers you elegance-apart travel services at the maximum less expensive expenses.
    </p>
  </div>
</section>


      
      {/* ✅ Flight Deals Carousel Section */}
      <section className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-blue-700 text-center mb-10">
                   Best Holiday Deals
                </h2>
      
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={25}
                  slidesPerView={3}
                  autoplay={{ delay: 2500 }}
                  style={{ padding: "20px" }} 
                  loop={true}
                  breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                >
                  {deals.map((d, index) => (
                    <SwiperSlide key={index}>
                      <div className="bg-white shadow-md hover:shadow-2xl transition-all cursor-pointer overflow-hidden">
                        <div
                          className="h-44 bg-cover bg-center"
                          style={{ backgroundImage: `url(${d.image})` }}
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

export default Home;
