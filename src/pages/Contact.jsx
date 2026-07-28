import React from "react";
import c from "../assets/c.jpg"

const Contact = () => {
  return (
    <>
      {/* ✅ HERO SECTION */}
      <section
        className="h-[300px] bg-cover bg-center flex items-center justify-center text-white relative"
        style={{
    backgroundImage: `url(${c})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="mt-2 text-lg opacity-90">We’re here to help 24/7</p>
        </div>
      </section>

      {/* ✅ ENHANCED CONTACT FORM SECTION */}
       <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
  <div className="max-w-6xl mx-auto px-6">
    <div className="grid md:grid-cols-2 gap-10 items-start">
      {/* Left - Form */}
      <div className="bg-white shadow-xl p-8 transform transition-all duration-300">
        <div className="flex items-center mb-4">
          <div className="p-2 bg-blue-100 rounded-full mr-3">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-blue-800">Get In Touch</h2>
        </div>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Have questions or need assistance? Fill out the form below and our dedicated team will reach out to you within 24 hours.
        </p>

        <form className="space-y-6" noValidate>
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                required
              />
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                required
              />
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                required
              />
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 pt-3 flex items-start pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <textarea
                rows="5"
                placeholder="Tell us more about your inquiry..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                required
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-xl w-full transform transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Send Message
            </span>
          </button>
        </form>
      </div>

      {/* Right - Contact Info */}
      <div className="bg-white shadow-xl  p-8 transform transition-all duration-300 ">
        <div className="flex items-center mb-4">
          <div className="p-2 bg-green-100 rounded-full mr-3">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-blue-800">Contact Information</h2>
        </div>
        <p className="text-gray-600 mb-8 leading-relaxed">
          We're here to help. Reach out using the details below for immediate assistance.
        </p>

        <ul className="space-y-6 mb-8">
          <li className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-200">
            <div className="p-2 bg-blue-200 rounded-lg">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <strong className="text-gray-900">Phone</strong>
              <p className="text-blue-600 hover:text-blue-800 transition-colors duration-200">(888) 789-8629</p>
            </div>
          </li>
          <li className="flex items-center space-x-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors duration-200">
            <div className="p-2 bg-green-200 rounded-lg">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <strong className="text-gray-900">Email</strong>
              <p className="text-blue-600 hover:text-blue-800 transition-colors duration-200">support@flydealhub.com</p>
            </div>
          </li>
          <li className="flex items-center space-x-4 p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors duration-200">
            <div className="p-2 bg-red-200 rounded-lg">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <strong className="text-gray-900">Location</strong>
              <p className="text-blue-600">523/5 Khalsa College Rd, Yamunanagar, Haryana</p>
            </div>
          </li>
        </ul>

        <div className="relative overflow-hidden rounded-2xl shadow-inner">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.690745664961!2d-122.4194156846817!3d37.774929779759756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064df3e0fcd%3A0xddc77ec2a3f8b80!2sUnited%20States!5e0!3m2!1sen!2sin!4v1677654547885!5m2!1sen!2sin"
            width="100%"
            height="250"
            allowFullScreen=""
            loading="lazy"
            className="w-full transition-transform duration-300 hover:scale-105"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </div>
    </div>
  </div>
       </section>
    </>
  );
};

export default Contact;
