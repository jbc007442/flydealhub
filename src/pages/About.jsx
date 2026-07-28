import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FiUsers, FiTruck, FiGrid } from "react-icons/fi";
import { FaPlane } from "react-icons/fa";
import manilla from "../assets/manilla.jpg";
import dubai from "../assets/dubai.jpg";
import bangkok from "../assets/bankok.jpg";
import italy from "../assets/italy.jpg";
import mexico from "../assets/mexico.jpg";
import about from "../assets/about.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

// Dummy deals data
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

const About = () => {
  return (
    <>
      {/* ✅ HERO SECTION */}
      <section
        className="h-[300px] bg-cover bg-center flex items-center justify-center text-white relative"
        style={{
    backgroundImage: `url(${about})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold">About Flydealhub</h1>
          <p className="mt-2 text-lg text-gray-200">
            Your trusted partner in travel services
          </p>
        </div>
      </section>

      {/* ✅ ABOUT SECTION */}
      <section className="py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-700 text-center mb-6">
      About Us
    </h2>

    <div className="bg-white p-8 space-y-6">
      <p className="text-gray-700 leading-relaxed">
         Welcome to <strong>Flydealhub</strong>, where our passion for travel meets our commitment to providing unforgettable experiences for wanderers like you. As part of a robust umbrella of <strong>Air Fare Bookers Pvt Ltd</strong> dedicated to enhancing your journey, we thrive on the belief that travel is not merely a destination but a transformative experience that fosters connection, understanding, and adventure. We are a travel corporation that places our clients’ desires and necessities as our top-maximum precedence. We can fulfill all your travel goals and wishes with no problem. We’re a travel planning and booking platform that offers you elegance-apart travel services at the maximum less expensive expenses.
      </p>

      <h3 className="text-2xl font-semibold text-blue-700">About Our Mission</h3>
      <p className="text-gray-700 leading-relaxed">
        Our goal at Traveldealpro is straightforward: to inspire and enable exceptional travel experiences for all travelers, irrespective of their preferences, budget, or mode of travel. We design customized trips that suit your interests, whether you’re looking for calm retreats, exhilarating experiences, cultural exchanges, or family-friendly vacations. Keeping you happy is our first goal, and we’re committed to making travel planning easy and fun.
      </p>

      <h3 className="text-2xl font-semibold text-blue-700">Our Expertise</h3>
      <p className="text-gray-700 leading-relaxed">
       Our knowledgeable staff members have extensive international knowledge and years of experience in the industry. Being avid tourists themselves, our travel advisors are knowledgeable about the newest trends, best-kept secrets, and must-see sights in locations across the globe. We make use of our solid connections with regional suppliers to guarantee a genuine, secure, and enriching trip.
      </p>

      <h3 className="text-2xl font-semibold text-blue-700">Why Choose Us?</h3>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li><strong>Personalized Service:</strong> We acknowledge that every traveler is unique. Your needs, preferences, and dreams are carefully considered by our highly qualified travel advisors. In order to ensure that every detail is taken care of, we create customized itineraries that mirror your vision.</li>
        <li><strong>Extensive Package Options:</strong>  A variety of interests and price ranges are covered by our extensive portfolio of travel packages. We provide experiences to fit every taste and preference, from opulent getaways to low-cost outings.</li>
        <li><strong>Local Knowledge:</strong>  Our affiliate partners and local tour guides offer priceless insights into every location, highlighting the local way of life and undiscovered gems that more conventional travel routes might overlook. You will travel like a local, not just a tourist, when you work with us.</li>
        <li><strong>Sustainable Travel Initiatives:</strong> We support ethical travel methods that preserve the local cultures and environments. By providing environmentally friendly options and aiding local communities, we encourage sustainability. You help bring about a positive change when you travel with us.</li>
        <li><strong>Superb Assistance:</strong> Our dedication to you doesn’t stop when you make your travel arrangements. From pre-departure to the trip home, our committed support staff is on hand 24/7 to make sure you have help at every turn.</li>
      </ul>

      <h3 className="text-2xl font-semibold text-blue-700">Our Values</h3>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li><strong>Integrity:</strong> We pledge to be open and honest in all of our interactions and decisions, providing you with comfort at every turn.</li>
        <li><strong>Connection:</strong> We strive to establish genuine connections that promote respect and understanding between tourists and people from different cultural backgrounds.</li>
        <li><strong>Innovation:</strong> We work hard to stay ahead of the curve and continuously offer novel and thrilling experiences because the travel industry is always changing.</li>
        <li><strong>Community:</strong> We actively work to support local businesses, charitable causes, and conservation initiatives in the communities we serve.</li>
      </ul>

      <h3 className="text-2xl font-semibold text-blue-700">Embark on Our Adventure</h3>
      <p className="text-gray-700 leading-relaxed">
        Flydealhub can help you realize your travel goals, whether you’re organizing a romantic retreat, a family vacation, or a solo trip. Come explore the world from a different perspective and join our community of travelers who value genuine experiences.
      </p>

      <p className="text-gray-700 leading-relaxed">
        Join us as we explore, dream, and discover. We are eager to assist you in determining the path of your upcoming journey!
      </p>

      <p className="text-gray-700 leading-relaxed">
        At Flydealhub, we make lifelong memories rather than just organizing vacations. Join us as we explore the world!
      </p>
    </div>
  </div>
      </section>


      {/* ✅ ADD HOLIDAY DEALS CAROUSEL HERE */}
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
                <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all cursor-pointer overflow-hidden">
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
    </>
  );
};

export default About;
