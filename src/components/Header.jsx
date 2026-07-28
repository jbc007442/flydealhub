import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `relative px-3 py-2 text-[15px] font-medium transition duration-300
    ${isActive ? "text-blue-500" : "text-gray-300 hover:text-white"}
    after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px]
    after:w-0 after:bg-blue-500 after:transition-all after:duration-300
    hover:after:w-full`;

  return (
    <header className="bg-[#0b0f19] border-b border-gray-800 fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="flex items-center justify-between px-6 md:px-16 lg:px-40 py-4">
        {/* Logo */}
        <h2 className="text-2xl font-bold text-white">
          Fly <span className="text-blue-500">Deal</span> Hub
        </h2>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/about.html" className={navLinkClass}>About</NavLink>
          <NavLink to="/contact.html" className={navLinkClass}>Contact</NavLink>
          {/* <NavLink to="/airlines-reservation.html" className={navLinkClass}>Airlines</NavLink> */}

          {/* Call Button */}
          <a
            href="tel:(888) 789-8629"
            className="ml-4 bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-lg text-white font-semibold flex items-center gap-2 shadow-md"
          >
            <FiPhoneCall className="text-lg" /> (888) 789-8629
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-3xl text-white" onClick={() => setOpen(true)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-[#0f1525] border-l border-gray-800 shadow-2xl transition-transform duration-300 md:hidden z-50 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="text-2xl p-4 float-right text-gray-400 hover:text-white transition"
          onClick={() => setOpen(false)}
        >
          ✖
        </button>

        <nav className="mt-16 flex flex-col gap-6 px-6 text-lg">
          <NavLink to="/" className={navLinkClass} onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/about.html" className={navLinkClass} onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="/contact.html" className={navLinkClass} onClick={() => setOpen(false)}>Contact</NavLink>
          {/* <NavLink to="/airlines-reservation.html" className={navLinkClass} onClick={() => setOpen(false)}>Airlines</NavLink> */}

          {/* Mobile Call Button */}
          <a
            href="tel:(888) 789-8629"
            className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-lg text-white font-semibold flex items-center gap-2 shadow-lg"
          >
            <FiPhoneCall className="text-lg" /> (888) 789-8629
          </a>
        </nav>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 md:hidden z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
