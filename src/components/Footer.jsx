import { Link } from "react-router-dom";
import {
  FiPhoneCall,
  FiMail,
  FiMapPin,
  FiArrowUp
} from "react-icons/fi";
import { useEffect, useState } from "react";
import c from "../assets/card-icon.png";
import i from "../assets/i.png";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-black text-gray-300 pt-14 relative border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand Info */}
        <div>
  <h2 className="text-2xl font-extrabold text-white tracking-wide">
    Fly <span className="text-blue-500">Deal</span> Hub
  </h2>
  <p className="mt-4 text-sm leading-relaxed text-gray-400">
    Welcome to Flydealhub, your premier destination for all your travel needs. With a focus on exceptional customer service and a wide range of options, we are dedicated to making your travel experience seamless and enjoyable.
  </p>

  <p className="mt-4 text-sm text-gray-400">
    <span className="font-semibold text-white">Address: 523/5 Khalsa College Rd, Yamunanagar, Haryana</span> 
  </p>
</div>


        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-blue-500 transition">Home</Link></li>
            <li><Link to="/about.html" className="hover:text-blue-500 transition">About Us</Link></li>
            <li><Link to="/contact.html" className="hover:text-blue-500 transition">Contact Us</Link></li>
            <li><Link to="/taxes.html" className="hover:text-blue-500 transition">Tax & Fees</Link></li>
            <li><Link to="/services.html" className="hover:text-blue-500 transition">Our Services</Link></li>
            <li><Link to="/business-class-flight.html" className="hover:text-blue-500 transition">Business Class Flight</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">
            Legal
          </h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/privacy-policy.html" className="hover:text-blue-500 transition">Privacy Policy</Link></li>
            <li><Link to="/terms-conditions.html" className="hover:text-blue-500 transition">Terms & Conditions</Link></li>
            <li><Link to="/refund-policy.html" className="hover:text-blue-500 transition">Refund Policy</Link></li>
            <li><Link to="/disclaimer.html" className="hover:text-blue-500 transition">Disclaimer</Link></li>
            <li><Link to="/child-flight-bookking.html" className="hover:text-blue-500 transition">Child Flight Booking</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">
            Newsletter
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe for exclusive offers & luxury travel deals.
          </p>
          <div className="flex bg-white/10 backdrop-blur-md rounded-lg overflow-hidden border border-gray-700">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full bg-transparent text-white outline-none text-sm"
            />
            <button className="bg-blue-600 px-5 hover:bg-blue-500 transition font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Contact Info */}
     <div className="mt-12 border-t border-gray-800 pt-6">
  <div className=" max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

    {/* Left - Logo */}
    <div className="flex items-center gap-3">
      <img src={c} alt="Fly Deal Hub" className="w-28 h-20 object-contain" />
      <img src={i} alt="Fly Deal Hub" className="w-28 h-8 object-contain" />
    </div>

    {/* Center - Contact Info */}
    <div className="flex flex-col md:flex-row gap-8 justify-center text-sm">
      <p className="flex items-center justify-center gap-2"><FiPhoneCall /> (888) 789-8629</p>
      <p className="flex items-center justify-center gap-2"><FiMail /> support@flydealhub.com</p>
    </div>

    {/* Right - Copyright */}
    <div className="text-sm text-gray-400 text-center md:text-right">
      © {new Date().getFullYear()} <span className="text-blue-500">Fly Deal Hub</span>. All Rights Reserved.
    </div>
  </div>
  {/* Disclaimer */}
  <p className="max-w-7xl mx-auto text-xs  py-6 leading-relaxed text-center md:text-left">
    <strong className="text-white">Disclaimer:</strong>  Flydealhub is an independent travel agency operating under the umbrella of Air Fare Bookers Pvt. Ltd. We are the resellers of travel Products & services i.e. hotels, flight deals, vacation packages & attractions. We are a travels company associated with travels consolidators and 3rd party travels suppliers. We are neither directly or indirectly associated with any airlines. All prices quoted through us include all taxes and fees. Flydealhub provides assistance with flight bookings, changes, cancellations, and other travel-related services for customers who need independent support. we are not associated with any company available on it.<Link to="/disclaimer.html" className="underline text-blue-500 hover:text-blue-700 ml-1">Read more</Link>
  </p>
</div>

      {/* Back To Top */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-500 transition"
        >
          <FiArrowUp className="text-white" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
