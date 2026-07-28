import { useState, useEffect, useRef } from "react";
import Autosuggest from "react-autosuggest";
import Flatpickr from "react-flatpickr";
import airports from "../data/airports.js";
import { useNavigate } from "react-router-dom";
import {
  FaExchangeAlt,
  FaMapMarkerAlt,
  FaPlaneDeparture,
  FaCalendarAlt,
  FaUserFriends,
  FaPlus,
  FaMinus,
  FaChevronDown,
} from "react-icons/fa";
import "flatpickr/dist/themes/dark.css"; // Base dark theme
import "flatpickr/dist/plugins/rangePlugin"; // For date range

// ✅ Extra Flatpickr dark blue styling injected inline
const flatpickrBlueTheme = `
.flatpickr-months { background: #003366; color: white; }
.flatpickr-weekdays { background: #0055aa; }
.flatpickr-day.selected, .flatpickr-day.startRange, .flatpickr-day.endRange {
  background: #0073e6 !important;
  color: white !important;
}
.flatpickr-day:hover { background: rgba(0,115,230,0.2); color: black; }
`;

// ✅ Airport Autocomplete Component
const AirportInput = ({ placeholder, name, value, onChange, onSelect }) => {
  const [suggestions, setSuggestions] = useState([]);

  const getSuggestions = (input) => {
    const q = (input || "").trim().toLowerCase();
    if (!q) return [];
    return airports
      .filter((a) =>
        [a.city, a.name, a.iata].some((field) =>
          field?.toLowerCase().includes(q)
        )
      )
      .slice(0, 20);
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={({ value }) =>
        setSuggestions(getSuggestions(value))
      }
      onSuggestionsClearRequested={() => setSuggestions([])}
      getSuggestionValue={(s) => `${s.city} (${s.iata})`}
      renderSuggestion={(s) => (
        <div className="px-3 py-2">
          <strong>{s.iata}</strong> - {s.name} ({s.city})
        </div>
      )}
      onSuggestionSelected={(_, { suggestion }) =>
        onSelect(name, suggestion)
      }
      inputProps={{
        placeholder,
        value,
        onChange: (_, { newValue }) =>
          onChange({ target: { name, value: newValue } }),
        className:
          "w-full bg-white text-sm px-3 py-3 focus:outline-none border rounded",
      }}
    />
  );
};

// ✅ Main Component
const SearchBar = () => {
  const navigate = useNavigate();
  const styleRef = useRef(null);

  // 🛠 Insert Flatpickr blue styles
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = flatpickrBlueTheme;
    document.head.appendChild(style);
    styleRef.current = style;
    return () => document.head.removeChild(styleRef.current);
  }, []);

  const [form, setForm] = useState({
    tripType: "round",
    from: "",
    from_iata: "",
    to: "",
    to_iata: "",
    dateRange: [],
    passengers: 1,
    adults: 1,
    children: 0,
    infants: 0,
    travelClass: "Economy",
  });

  const [errors, setErrors] = useState({});
  const [showPassengers, setShowPassengers] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleAirport = (field, s) =>
    setForm((st) => ({ ...st, [field]: `${s.city} (${s.iata})`, [`${field}_iata`]: s.iata }));

  const swapAirports = () =>
    setForm((s) => ({
      ...s,
      from: s.to,
      to: s.from,
      from_iata: s.to_iata,
      to_iata: s.from_iata,
    }));

  const updatePassengers = (type, change) => {
  setForm((prev) => {
    const newValue = prev[type] + change;

    // ❌ Block below 0 or above 9 per category
    if (newValue < 0 || newValue > 9) return prev;

    // ✅ Calculate new total
    const newTotal =
      (type === "adults" ? newValue : prev.adults) +
      (type === "children" ? newValue : prev.children) +
      (type === "infants" ? newValue : prev.infants);

    // ❌ Block total over 27
    if (newTotal > 27) return prev;

    return {
      ...prev,
      [type]: newValue,
      passengers: newTotal,
    };
  });
};


  const validate = () => {
    const e = {};
    if (!form.from) e.from = "Enter departure";
    if (!form.to) e.to = "Enter destination";
    if (form.from_iata === form.to_iata) e.same = "Airports cannot be same!";
    if (!form.dateRange.length) e.date = "Select trip dates";
    return setErrors(e), !Object.keys(e).length;
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  if (!validate()) return;
  setLoading(true);

  // ✅ Convert Flatpickr dateRange to API-friendly string
  const depart = form.dateRange[0]
    ? new Date(form.dateRange[0]).toISOString().split("T")[0]
    : null;

  const ret =
    form.tripType === "round" && form.dateRange[1]
      ? new Date(form.dateRange[1]).toISOString().split("T")[0]
      : null;

  const formDataToSend = {
    ...form,
    depart, // ✅ YYYY-MM-DD
    ret,    // ✅ YYYY-MM-DD
  };

  setTimeout(() => navigate("/results.html", { state: formDataToSend }), 500);
};


  return (
    <div className="flex justify-center">
      <div className="w-full max-w-6xl shadow-lg rounded-2xl bg-white">
        {/* Header */}
       <div className="bg-blue-900 text-white p-5 flex justify-between items-center rounded-t-2xl">
  <h2 className="text-xl font-bold">Search Flights</h2>

  {/* Trip Type Dropdown */}
  <select
    value={form.tripType}
    onChange={(e) =>
      setForm({
        ...form,
        tripType: e.target.value,
        dateRange: e.target.value === "round" ? [] : [form.dateRange[0]],
      })
    }
    className="bg-gray-800 text-white px-3 py-2 rounded focus:outline-none"
  >
    <option value="round">Round Trip</option>
    <option value="oneway">One Way</option>
  </select>
       </div>


        {/* Form */}
        <form onSubmit={handleSubmit} className="p-5 flex flex-wrap gap-4">
          {/* FROM Field */}
          <div className="flex-1 min-w-[150px]">
            <label className="flex items-center gap-2 text-sm font-medium mb-1">
              <FaPlaneDeparture /> From
            </label>
            <AirportInput name="from" value={form.from} onChange={handleChange} onSelect={handleAirport} />
            {errors.from && <p className="text-red-500 text-xs">{errors.from}</p>}
          </div>

          {/* Swap Button */}
          <button type="button" onClick={swapAirports} className="self-center bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700">
            <FaExchangeAlt />
          </button>

          {/* TO Field */}
          <div className="flex-1 min-w-[150px]">
            <label className="flex items-center gap-2 text-sm font-medium mb-1">
              <FaMapMarkerAlt /> To
            </label>
            <AirportInput name="to" value={form.to} onChange={handleChange} onSelect={handleAirport} />
            {errors.to && <p className="text-red-500 text-xs">{errors.to}</p>}
          </div>

          {/* Date Picker */}
          <div className="flex-1 min-w-[150px]">
            <label className="flex items-center gap-2 text-sm font-medium mb-1">
              <FaCalendarAlt /> Travel Date
            </label>
            <Flatpickr
              options={{
                mode: form.tripType === "round" ? "range" : "single",
                minDate: "today",
                dateFormat: "d/m/Y",
              }}
              value={form.dateRange}
              onChange={(dates) => setForm({ ...form, dateRange: dates })}
              className="w-full bg-white border rounded p-3"
            />
          </div>

          {/* Passengers */}
          <div className="relative min-w-[150px]">
            <label className="flex items-center gap-2 text-sm font-medium mb-1">
              <FaUserFriends /> Passengers
            </label>
            <button type="button" className="w-full border rounded p-3 flex justify-between items-center" onClick={() => setShowPassengers(!showPassengers)}>
              {form.passengers} Travelers, {form.travelClass} <FaChevronDown />
            </button>

            {showPassengers && (
              <div className="absolute bg-white shadow-lg p-4 w-72 mt-2 z-50">
                {["adults", "children", "infants"].map((type) => (
                  <div key={type} className="flex justify-between py-2">
                    <span className="capitalize">{type}</span>
                    <div className="flex items-center gap-2">
                      <button type="button" onClick={() => updatePassengers(type, -1)} className="p-2 border rounded"><FaMinus /></button>
                      <span>{form[type]}</span>
                      <button type="button" onClick={() => updatePassengers(type, 1)} className="p-2 border rounded"><FaPlus /></button>
                    </div>
                  </div>
                ))}
                <select name="travelClass" value={form.travelClass} onChange={handleChange} className="w-full border rounded p-2 mt-2">
                  <option>Economy</option>
                  <option>Premium Economy</option>
                  <option>Business</option>
                  <option>First Class</option>
                </select>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="self-end">
            <button type="submit" disabled={loading} className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded">
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
