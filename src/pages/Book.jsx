import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


/**
 * Book.jsx
 * ---------------------------------------------
 * - Left: Payment & Billing Form
 * - Right: Price Summary (uses selected flight + form details from router state)
 * - Submit action: logs payload and shows a success toast/alert (no navigation)
 *
 * EXPECTED ROUTER STATE:
 * navigate("/book", { state: { flight, form } })
 *   flight: { airlineName, airlineCode, from, to, departTime, arriveTime, duration, stops, price }
 *   form:   { from, to, depart, ret?, passengers, travelClass?, email?, phone? }
 *
 * TailwindCSS is required (you already confirmed it's installed).
 */

const currency = (n) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    Number(n || 0)
  );

const Book = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { flight, form, returnFlight } = state || {};


  // Guard: If user lands here without selecting a flight
  if (!flight) {
    return (
      <div className="max-w-4xl mx-auto p-6 mt-10 text-center bg-white border border-gray-200 rounded-xl shadow">
        <p className="text-gray-700">No flight selected.</p>
        <p className="text-sm text-gray-500 mt-1">
          Go back and select a flight to continue.
        </p>
      </div>
    );
  }

  // ---------------------------------------------
  // Derived amounts for the price summary (simple, readable split)
  // ---------------------------------------------
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const totals = useMemo(() => {
  // ✅ Price already includes all passengers from result page
  const outbound = Number(flight.price || 0);
  const inbound =
    form?.tripType === "round" && returnFlight
      ? Number(returnFlight.price || 0)
      : 0;

  const total = outbound + inbound; // ✅ Just add both prices

  // ✅ Split for UI
  const base = Math.round(total * 0.82 * 100) / 100;
  const taxes = Math.max(0, total - base);

  return { base, taxes, total };
}, [flight.price, returnFlight?.price, form?.tripType]);


  // const totals = useMemo(() => {
  //   const total = Number(flight.price || 0);
  //   const base = Math.round(total * 0.82 * 100) / 100;
  //   const taxes = Math.max(0, Math.round((total - base) * 100) / 100);
  //   return { base, taxes, total };
  // }, [flight.price]);
  

  // ---------------------------------------------
  // Payment & Billing form state
  // (kept simple and controlled for clean UX)
  // ---------------------------------------------
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [cardName, setCardName] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [cardNumber, setCardNumber] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [expiryMonth, setExpiryMonth] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [expiryYear, setExpiryYear] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [cvv, setCvv] = useState("");

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [billName, setBillName] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [address1, setAddress1] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [address2, setAddress2] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [city, setCity] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [stateRegion, setStateRegion] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [zip, setZip] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [country, setCountry] = useState("");
  // Traveller Details
// eslint-disable-next-line react-hooks/rules-of-hooks
const [firstName, setFirstName] = useState("");
// eslint-disable-next-line react-hooks/rules-of-hooks
const [lastName, setLastName] = useState("");
// eslint-disable-next-line react-hooks/rules-of-hooks
const [dob, setDob] = useState("");
// eslint-disable-next-line react-hooks/rules-of-hooks
const [gender, setGender] = useState("");

// Contact Info
// eslint-disable-next-line react-hooks/rules-of-hooks
const [email, setEmail] = useState("");
// eslint-disable-next-line react-hooks/rules-of-hooks
const [phone, setPhone] = useState("");

// Travel protection checkbox
// eslint-disable-next-line react-hooks/rules-of-hooks
const [travelProtection, setTravelProtection] = useState(false);


  // Simple front-end validation (minimal, matches screenshot-style flow)
  const validate = () => {
    if (!cardName || !cardNumber || !expiryMonth || !expiryYear || !cvv) {
      alert("Please fill all card details.");
      return false;
    }
    if (!billName || !address1 || !city || !stateRegion || !zip || !country) {
      alert("Please fill all billing address fields.");
      return false;
    }
    if (cardNumber.replace(/\s+/g, "").length < 12) {
      alert("Please enter a valid card number.");
      return false;
    }
    if (cvv.length < 3) {
      alert("Please enter a valid CVV.");
      return false;
    }
    return true;
  };

  // Format card number as 1234 5678 9012 3456
  const handleCardNumberChange = (v) => {
    const digits = v.replace(/\D/g, "").slice(0, 19);
    const spaced = digits.replace(/(.{4})/g, "$1 ").trim();
    setCardNumber(spaced);
  };



// const handleSubmit = async (e) => {
//   e.preventDefault();
//   if (!validate()) return;

//   // ✅ Build final payload
//   const payload = {
//     flight,
//     returnFlight,
//     searchForm: form,
//     traveler: {
//       firstName,
//       lastName,
//       dob,
//       gender,
//     },
//     contact: {
//       email,
//       phone,
//     },
//     billing: {
//       billName,
//       address1,
//       address2,
//       city,
//       stateRegion,
//       zip,
//       country,
//     },
//     payment: {
//       cardName,
//       cardNumber,
//       expiryMonth,
//       expiryYear,
//       cvv,
//     },
//     addOns: {
//       travelProtection: travelProtection || false,
//     },
//     totalAmount: totals.total,
//     bookingDate: new Date().toISOString(),
//   };

//   console.log("✅ FINAL BOOKING PAYLOAD →", payload);

//   try {
//     const response = await fetch("https://flydealhub.com/book_mail.php", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload),
//     });

//     const result = await response.json();

//     if (result.success) {
//       toast.success("✅ Booking email sent successfully!", {
//         position: "top-center",
//         autoClose: 2000,
//         onClose: () => {
//           // 👇 Redirect after toast closes
//           navigate("/status.html", { state: { data: payload } });
//         },
//       });
//     } else {
//       toast.error("❌ Email sending failed: " + result.message, {
//         position: "top-center",
//         autoClose: 5000,
//       });
//     }
//   } catch (error) {
//     console.error("Error submitting booking:", error);
//     toast.error("⚠️ Something went wrong! Please try again.", {
//       position: "top-center",
//       autoClose: 4000,
//     });
//   }
// };




const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validate()) return;

  // ✅ Generate Random Booking ID (Prefix + Random Number)
  const bookingId = "FDH" + Math.floor(100000 + Math.random() * 900000);

  // ✅ Build final payload
  const payload = {
    bookingId, // 👈 add here
    flight,
    returnFlight,
    searchForm: form,
    traveler: {
      firstName,
      lastName,
      dob,
      gender,
    },
    contact: {
      email,
      phone,
    },
    billing: {
      billName,
      address1,
      address2,
      city,
      stateRegion,
      zip,
      country,
    },
    payment: {
      cardName,
      cardNumber,
      expiryMonth,
      expiryYear,
      cvv,
    },
    addOns: {
      travelProtection: travelProtection || false,
    },
    totalAmount: totals.total,
    bookingDate: new Date().toISOString(),
  };

  console.log("✅ FINAL BOOKING PAYLOAD →", payload);

  try {
    const response = await fetch("https://flydealhub.com/book_mail.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (result.success) {
      toast.success("✅ Booking email sent successfully!", {
        position: "top-center",
        autoClose: 2000,
        onClose: () => {
          // 👇 Redirect after toast closes
          navigate("/status.html", { state: { data: payload } });
        },
      });
    } else {
      toast.error("❌ Email sending failed: " + result.message, {
        position: "top-center",
        autoClose: 5000,
      });
    }
  } catch (error) {
    console.error("Error submitting booking:", error);
    toast.error("⚠️ Something went wrong! Please try again.", {
      position: "top-center",
      autoClose: 4000,
    });
  }
};





  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <ToastContainer />

      {/* ===================== BOOKING HEADER ===================== */}
<div className="bg-white border border-gray-200 shadow-sm overflow-hidden mb-6">
  <div className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center">
    <h2 className="text-lg font-semibold">Trip Summarys</h2>
    <span className="text-sm">
      {form?.passengers || 1} Traveler(s) • {form?.travelClass || "Economy"}
    </span>
  </div>

  <div className="divide-y">
    {/* Departure Segment */}
    <div className="flex flex-col md:flex-row justify-between items-start p-6 gap-4">
      <div className="flex items-start gap-3">
        <img
          src={`https://airlinecodes.io/img/airlines/${flight.airlineCode}.png`}
          alt={flight.airlineName}
          className="w-10 h-10 object-contain border rounded-full bg-white"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
        <div>
          <h3 className="font-semibold text-gray-900">
            {flight.from} → {flight.to}
          </h3>
          <p className="text-xs text-gray-500 mb-1">
            ✈️ {flight.airlineName} • Flight {flight.code}
          </p>
          <p className="text-sm text-gray-600">
            {form.depart || "---"} • {flight.stops === 0 ? "Nonstop" : `${flight.stops} Stop`} • {flight.duration}
          </p>
        </div>
      </div>
      <div className="text-right text-gray-800">
        <p className="text-sm font-semibold">{flight.departTime} - {flight.arriveTime}</p>
        <p className="text-xs text-gray-500">Baggage 7KG • {form.travelClass}</p>
      </div>
    </div>

    {/* ✅ Return Segment */}
    {/* {form.tripType === "round" && returnFlight && ( */}
    {form.tripType === "round" && returnFlight && returnFlight.code !== flight.code && (
      <div className="flex flex-col md:flex-row justify-between items-start p-6 gap-4 bg-gray-50">
        <div className="flex items-start gap-3">
          <img
            src={`https://airlinecodes.io/img/airlines/${returnFlight.airlineCode}.png`}
            alt={returnFlight.airlineName}
            className="w-10 h-10 object-contain border rounded-full bg-white"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
          <div>
            <h3 className="font-semibold text-gray-900">
              {returnFlight.from} → {returnFlight.to}
            </h3>
            <p className="text-xs text-gray-500 mb-1">
              ✈️ {returnFlight.airlineName} • Flight {returnFlight.code}
            </p>
            <p className="text-sm text-gray-600">
              {form.ret || "---"} • {returnFlight.stops === 0 ? "Nonstop" : `${returnFlight.stops} Stop`} • {returnFlight.duration}
            </p>
          </div>
        </div>
        <div className="text-right text-gray-800">
          <p className="text-sm font-semibold">
            {returnFlight.departTime} - {returnFlight.arriveTime}
          </p>
          <p className="text-xs text-gray-500">Baggage 7KG • {form.travelClass}</p>
        </div>
      </div>
    )}
  </div>
</div>




      

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* LEFT: Payment + Billing Form */}
        <div className="lg:col-span-8">
         <div className="bg-white border border-gray-200 shadow-md p-6 mb-6">
  <div className="bg-white p-5">
  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">

    {/* Left Content */}
    <div className="flex-1">
      <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2 mb-2">
        <span className="text-blue-600 text-3xl">✈️</span>
        Travel Protection
      </h3>
      <p className="text-gray-600 text-sm mb-4">
        Protect your trip from unexpected situations
      </p>

      {/* Bullet Benefits */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-2 text-sm text-gray-800">
        <li className="flex items-center gap-2">✅ Trip cancellation</li>
        <li className="flex items-center gap-2">✅ Baggage delay</li>
        <li className="flex items-center gap-2">✅ Bad weather</li>
        <li className="flex items-center gap-2">✅ Mechanical issues</li>
        <li className="flex items-center gap-2">✅ Travel delay</li>
        <li className="flex items-center gap-2">✅ Trip interruption</li>
        <li className="flex items-center gap-2">✅ Airline bankruptcy</li>
      </ul>

      {/* Disclaimer */}
      <p className="text-[11px] mt-4 text-gray-500 leading-relaxed">
        * Includes coverage for delays, cancellations, emergencies, and more. Terms & conditions apply.
      </p>
    </div>

    {/* Right side price + CTA */}
    <div className="md:min-w-[240px] md:border-l md:pl-6 text-left md:text-right">
      <p className="text-xl font-bold text-gray-900 leading-tight">USD 15.95</p>
      <p className="text-xs text-gray-500 mb-4">per person</p>

      <label className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg cursor-pointer font-medium transition w-full md:w-auto">
        <input type="checkbox" className="accent-white scale-125" checked={travelProtection} onChange={(e) => setTravelProtection(e.target.checked)}/>
        Add Travel Protection
      </label>
    </div>

  </div>
</div>

         </div>


          <form
            onSubmit={handleSubmit}
            className="bg-white border border-gray-200  shadow-sm p-6"
          >
            {/* ✅ Traveller Section */}
  <div>
    <h2 className="text-lg font-semibold text-blue-900 mb-1">Traveler – Adult (12+)</h2>
    <p className="text-sm text-gray-500 mb-4">Enter traveler information as shown on passport</p>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">First Name</label>
        <input type="text" className="w-full mt-1 rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-500"
          placeholder="John" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Last Name</label>
        <input type="text" className="w-full mt-1 rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-500"
          placeholder="Doe" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
        <input type="date" className="w-full mt-1 rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-500"
          value={dob} onChange={(e) => setDob(e.target.value)} />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Gender</label>
        <select className="w-full mt-1 rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-500"
          value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </div>
    </div>
  </div>

   <hr className="my-6" />

  {/* ✅ Contact Section */}
  <div>
    <h2 className="text-lg font-semibold text-blue-900 mb-1">Contact Details</h2>
    <p className="text-sm text-gray-500 mb-4">Your e-ticket & flight alerts will be sent here</p>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Email Address</label>
        <input type="email" className="w-full mt-1 rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-500"
          placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
        <input type="tel" className="w-full mt-1 rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-500"
          placeholder="+1 555 123 4567" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
    </div>
  </div>

  <hr className="my-6" />
  {/* Billing Address Section */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Billing Address</h2>
              <p className="text-sm text-gray-500 mb-4">
                Must match the address on your card
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tarun Kumar"
                    value={billName}
                    onChange={(e) => setBillName(e.target.value)}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address Line 1
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="House / Flat / Street"
                    value={address1}
                    onChange={(e) => setAddress1(e.target.value)}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address Line 2 (Optional)
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Area / Landmark"
                    value={address2}
                    onChange={(e) => setAddress2(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    State / Region
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="State / Region"
                    value={stateRegion}
                    onChange={(e) => setStateRegion(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ZIP / Postal Code
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="ZIP / Postal"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Country
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
              </div>
            </div>

           

            <hr className="my-6" />

             {/* Payment Section */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Card Details</h2>
              <p className="text-sm text-gray-500 mb-4">
                We accept major debit/credit cards
              </p>

              {/* Card Name */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="col-span-1 sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name on Card
                  </label>
                  <input
                    type="text"
                    inputMode="text"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Tarun Kumar"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                  />
                </div>

                {/* Card Number */}
                <div className="col-span-1 sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Card Number
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    autoComplete="cc-number"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 tracking-wider focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={(e) => handleCardNumberChange(e.target.value)}
                  />
                </div>

                {/* Expiry + CVV */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expiry Month
                  </label>
                  <select
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={expiryMonth}
                    onChange={(e) => setExpiryMonth(e.target.value)}
                  >
                    <option value="">Select month</option>
                    {Array.from({ length: 12 }, (_, i) => {
                      const v = String(i + 1).padStart(2, "0");
                      return (
                        <option key={v} value={v}>
                          {v}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expiry Year
                  </label>
                  <select
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={expiryYear}
                    onChange={(e) => setExpiryYear(e.target.value)}
                  >
                    <option value="">Select year</option>
                    {Array.from({ length: 12 }, (_, i) => {
                      const yr = new Date().getFullYear() + i;
                      return (
                        <option key={yr} value={yr}>
                          {yr}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CVV
                  </label>
                  <input
                    type="password"
                    inputMode="numeric"
                    maxLength={4}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="***"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 4))}
                  />
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="mt-8 flex items-center justify-end">
              <button
                type="submit"
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow"
                title="Submit Booking"
              >
                Confirm & Booking
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT: Price Summary */}
        <aside className="lg:col-span-4">
  <div className="bg-white border border-blue-200  shadow-md overflow-hidden sticky top-16">

    {/* Header */}
    <div className="bg-blue-800 text-white px-6 py-3 text-lg font-semibold">
      Trip Summary
    </div>

    {/* Passenger Count */}
    <div className="px-6 py-2 text-sm text-gray-700">
      {form?.adults || 1} Adult(s), {form?.children || 0} Child(ren), {form?.infants || 0} Infant(s)
    </div>

    {/* Flight Segment */}
    <div className="border-t px-6 py-4 flex gap-3 items-start">
      <div className="h-10 w-10 rounded-full bg-white border border-blue-600 flex items-center justify-center font-bold text-blue-700">
        {(flight.airlineName || flight.airlineCode || "FL").slice(0, 2)}
      </div>
      <div className="flex-1">
        <div className="font-semibold text-gray-900 text-sm">
          {flight.from} → {flight.to}
        </div>
        <div className="text-xs text-gray-600 mt-1">
          {form?.depart} {form?.ret ? `- ${form.ret}` : ""}
        </div>
        <div className="text-xs text-gray-600 mt-1">
          {flight.departTime} - {flight.arriveTime} ({flight.duration})
        </div>
      </div>
    </div>

    {/* Class & Cabin */}
    <div className="px-6 py-3 flex justify-between text-sm text-gray-700 border-t">
      <span>Cabin Baggage:</span>
      <span className="font-medium">7 KG</span>
    </div>
    <div className="px-6 py-3 flex justify-between text-sm text-gray-700 border-t">
      <span>Class:</span>
      <span className="font-medium">{form?.travelClass || "Economy"}</span>
    </div>

    {/* Price Section */}
    <div className="px-6 py-3 border-t text-center text-blue-700 font-medium text-base cursor-pointer hover:underline">
      Price Details
    </div>

    {/* Fare Table */}
    <div className="px-6 py-2 text-sm border-t">
      <div className="flex justify-between py-1">
        <span className="text-gray-700">Base Fare</span>
        <span className="text-gray-900">{currency(totals.base)}</span>
      </div>
      <div className="flex justify-between py-1">
        <span className="text-gray-700">Taxes & Fees</span>
        <span className="text-gray-900">{currency(totals.taxes)}</span>
      </div>
      <hr className="my-6" />
      <div className="flex justify-between text-lg font-bold text-gray-900">
        <span>Total</span>
        <span>{currency(totals.total)}</span>
      </div>
    </div>

    {/* Footer Note */}
    <div className="px-6 py-3 text-[11px] text-gray-600 border-t">
      All prices include taxes & fees. Prices are in USD.
    </div>
  </div>
        </aside>

      </div>
    </div>
  );
};

export default Book;
