import { useMemo, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FiChevronRight,
  FiMapPin,
  FiUsers,
  FiBriefcase,
  FiCalendar,
  FiSliders,
} from "react-icons/fi";
import { getAmadeusToken } from "../utils/amadeusToken";

// -----------------------------
// Skeleton Card (unchanged)
// -----------------------------
const SkeletonCard = () => (
  <div className="bg-white border border-gray-200 rounded-xl p-5 animate-pulse">
    <div className="h-5 bg-gray-200 rounded w-1/4 mb-3"></div>
    <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
  </div>
);

// Small helper to format ISO8601 durations like "PT7H25M" → "7h 25m"
const fmtDuration = (iso) => {
  if (!iso) return "—";
  const m = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?/i);
  if (!m) return iso;
  const h = m[1] ? `${m[1]}h` : "";
  const mm = m[2] ? ` ${m[2]}m` : "";
  return `${h}${mm}`.trim() || "—";
};

// -----------------------------
// Flight Card w/ dynamic logos
// -----------------------------
const FlightCard = ({ f }) => {
  const [logoError, setLogoError] = useState(false);
  const navigate = useNavigate();
  const { state: form } = useLocation();

  // ✅ New airline logo URL (stable CDN)
  const logoUrl = `https://airlinecodes.io/img/airlines/${f.airlineCode}.png`;

  const handleSelect = () => {
  // ✅ Round-trip logic
  if (form.tripType === "round") {
    // If departure not selected yet → save departure
    if (!form.departFlight) {
      navigate("/results.html", {
        state: { ...form, departFlight: f }
      });
    } 
    // If departure already selected → now choose return flight
    else {
      navigate("/book", {
  state: {
    flight: form.departFlight,
    returnFlight: f,
    form: {
      ...form,
      tripType: "round",
      // remove departFlight to avoid confusion
      departFlight: undefined  
    }
  }
});

    }
  } 
  // ✅ One way
  else {
    navigate("/book", {
      state: { flight: f, form }
    });
  }
};



  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:shadow-lg hover:border-blue-300 transition">
      {/* Airline + code */}
      <div className="flex items-center gap-4 min-w-[220px]">
        {!logoError ? (
          <img
            src={logoUrl}
            alt={f.airlineName || f.airlineCode}
            className="h-10 w-10 rounded-full object-contain bg-white border"
            onError={() => setLogoError(true)}
          />
        ) : (
          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold uppercase">
            {(f.airlineName || f.airlineCode || "FL").slice(0, 2)}
          </div>
        )}
        <div>
          <div className="text-gray-900 font-semibold">
            {f.airlineName || f.airlineCode}
          </div>
          {/* <div className="text-xs text-gray-500">{f.code}</div> */}
        </div>
      </div>

      {/* Times */}
      <div className="flex items-center justify-between md:justify-center gap-6 flex-1">
        <div className="text-left">
          <div className="text-lg font-semibold text-gray-900">{f.departTime}</div>
          <div className="text-xs text-gray-500">{f.from}</div>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <span className="text-sm">{f.duration}</span>
          <FiChevronRight className="text-blue-500" />
          <span className="text-sm">
            {f.stops === 0 ? "Nonstop" : `${f.stops} stop${f.stops > 1 ? "s" : ""}`}
          </span>
        </div>
        <div className="text-right">
          <div className="text-lg font-semibold text-gray-900">{f.arriveTime}</div>
          <div className="text-xs text-gray-500">{f.to}</div>
        </div>
      </div>

      {/* Price + CTA */}
      <div className="flex md:flex-col items-center md:items-end gap-3 min-w-[180px]">
        <div className="text-2xl font-bold text-gray-900">${f.price}</div>
        <button
          onClick={handleSelect}
          className="bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-2 rounded-lg font-semibold shadow-sm"
        >
          Select
        </button>
      </div>
    </div>
  );
};


const Results = () => {
  const { state: form = {} } = useLocation();
  const navigate = useNavigate();

  // Skeleton gate
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000); // 5 sec gate
    return () => clearTimeout(timer);
  }, []);

  // Live flights
  const [flights, setFlights] = useState([]);
  const [error, setError] = useState("");

  // Filters state (same behavior as your layout)
  const [stops, setStops] = useState({ nonstop: true, onestop: true });
  const [airlines, setAirlines] = useState([]); // selected airlines (names)
  const [priceCap, setPriceCap] = useState(0);

  // Fetch live flights from Amadeus
  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const token = await getAmadeusToken();
        if (!token) {
          setError("Could not get Amadeus access token.");
          return;
        }

        const baseUrl = import.meta.env.VITE_AMADEUS_BASE_URL || "https://test.api.amadeus.com";
        // ✅ FIX ROUTE FOR RETURN FLIGHT SEARCH
let from, to, date;

// If round trip AND departure flight already selected → now load return flights
if (form.tripType === "round" && form.departFlight) {
  from = form.to_iata;          // reverse route
  to = form.from_iata;
  date = form.ret;              // return date
} 
// Otherwise normal (departure) search
else {
  from = form.from_iata;
  to = form.to_iata;
  date = form.depart;
}

// ✅ Protect against past date error
date = new Date(date) >= new Date()
  ? new Date(date).toISOString().split("T")[0]
  : new Date().toISOString().split("T")[0];

        // const from = form.from_iata || "DEL";
        // const to = form.to_iata || "DXB";
        // const date = new Date(form.depart) >= new Date() ? new Date(form.depart).toISOString().split("T")[0] : new Date().toISOString().split("T")[0];
        const adults = form.passengers || 1;

        const url = `${baseUrl}/v2/shopping/flight-offers?originLocationCode=${from}&destinationLocationCode=${to}&departureDate=${date}&adults=${adults}&currencyCode=USD&max=30`;

        const res = await fetch(url, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) {
          const t = await res.text().catch(() => "");
          throw new Error(`Amadeus error ${res.status}: ${t || res.statusText}`);
        }

        const data = await res.json();

        const carriersDict = data?.dictionaries?.carriers || {};

        const mapped = (data?.data || []).map((offer, idx) => {
          const itn = offer.itineraries?.[0];
          const seg0 = itn?.segments?.[0];
          const segLast = itn?.segments?.[itn?.segments?.length - 1];

          const airlineCode = seg0?.carrierCode || "XX";
          const airlineName = carriersDict[airlineCode] || airlineCode;

          const departAt = seg0?.departure?.at || "";
          const arriveAt = segLast?.arrival?.at || "";

          return {
            id: `${offer.id}-${idx}`,
            airlineCode,
            airlineName,
            code: offer.id,
            from: seg0?.departure?.iataCode || "",
            to: segLast?.arrival?.iataCode || "",
            departTime: departAt ? departAt.split("T")[1]?.slice(0, 5) : "--:--",
            arriveTime: arriveAt ? arriveAt.split("T")[1]?.slice(0, 5) : "--:--",
            duration: fmtDuration(itn?.duration),
            stops: (itn?.segments?.length || 1) - 1,
            price: offer?.price?.total || "0",
          };
        });

        setFlights(mapped);

        // Initialize filters from fetched data
        const allAirlineNames = Array.from(new Set(mapped.map(f => f.airlineName || f.airlineCode)));
        setAirlines(allAirlineNames);
        const maxP = Math.max(0, ...mapped.map(f => Number(f.price) || 0));
        setPriceCap(maxP);

        if (mapped.length === 0) setError("No flights found.");
      } catch (err) {
        console.error(err);
        setError("Failed to load flights.");
      }
    };

    fetchFlights();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.from_iata, form.to_iata, form.depart, form.passengers]);

  // Build options and price bounds from live flights
  const allAirlines = useMemo(
    () => Array.from(new Set(flights.map((f) => f.airlineName || f.airlineCode))),
    [flights]
  );

  const [minPrice, maxPrice] = useMemo(() => {
    if (!flights.length) return [0, 0];
    const nums = flights.map(f => Number(f.price) || 0);
    return [Math.min(...nums), Math.max(...nums)];
  }, [flights]);

  // Ensure priceCap respects current max when flights change
  useEffect(() => {
    if (flights.length) {
      const newMax = Math.max(...flights.map(f => Number(f.price) || 0));
      setPriceCap((prev) => (prev === 0 ? newMax : Math.min(prev, newMax)));
    } else {
      setPriceCap(0);
    }
  }, [flights]);

  const toggleAirline = (name) => {
    setAirlines((prev) =>
      prev.includes(name) ? prev.filter((a) => a !== name) : [...prev, name]
    );
  };

  // Apply filters (stops, airlines, price)
  const filteredFlights = useMemo(() => {
    return flights.filter((f) => {
      const passStops =
        (f.stops === 0 && stops.nonstop) || (f.stops === 1 && stops.onestop);
      const passAirline =
        airlines.length === 0 || airlines.includes(f.airlineName || f.airlineCode);
      const passPrice = Number(f.price) <= (priceCap || Infinity);
      return passStops && passAirline && passPrice;
    });
  }, [flights, stops, airlines, priceCap]);

  return (
    <div className=" bg-gray-50 text-gray-200">
      {/* Top container */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        {loading ? (
          <>
            {/* Skeleton summary */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-md animate-pulse mb-6">
              <div className="h-5 bg-gray-200 rounded w-1/3 mb-3"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>

            {/* Content Grid Skeleton */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Sidebar skeleton */}
              <aside className="lg:col-span-3">
                <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm animate-pulse space-y-4">
                  <div className="h-5 bg-gray-200 rounded w-24"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                  </div>
                </div>
              </aside>

              {/* Flight results skeleton */}
              <main className="lg:col-span-9">
                <div className="space-y-4">
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                </div>
              </main>
            </div>
          </>
        ) : (
          <>
            {/* Search Summary Bar */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-md">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                {/* Left: route pills */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg border border-gray-200">
                    <FiMapPin className="text-blue-600" />
                    <span className="text-sm">
                      {form.from || "From"} <span className="mx-1">→</span>{" "}
                      {form.to || "To"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg border border-gray-200">
                    <FiUsers className="text-blue-600" />
                    <span className="text-sm">
                      {form.passengers || 1}{" "}
                      {Number(form.passengers) > 1 ? "Passengers" : "Passenger"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg border border-gray-200">
                    <FiBriefcase className="text-blue-600" />
                    <span className="text-sm">{form.travelClass || "Economy"}</span>
                  </div>

                  <div className="flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg border border-gray-200">
                    <FiCalendar className="text-blue-600" />
                    <span className="text-sm">
                      {form.depart || "Depart"} {form.ret ? `· Return ${form.ret}` : ""}
                    </span>
                  </div>
                </div>

                {/* Right: actions */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => navigate(-1)}
                    className="px-4 py-2 rounded-lg border border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition text-gray-700"
                  >
                    Modify Search
                  </button>
                </div>
              </div>
            </div>

            {/* Content grid */}
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Filters Sidebar */}
              <aside className="lg:col-span-3">
                <div className="bg-white border border-gray-200 rounded-2xl p-5 sticky top-20 shadow-sm">
                  <div className="flex items-center gap-2 text-gray-800 mb-4">
                    <FiSliders className="text-blue-600" />
                    <h3 className="font-semibold">Filters</h3>
                  </div>

                  {/* Stops */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Stops</h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="accent-blue-600"
                          checked={stops.nonstop}
                          onChange={(e) =>
                            setStops((s) => ({ ...s, nonstop: e.target.checked }))
                          }
                        />
                        Nonstop
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="accent-blue-600"
                          checked={stops.onestop}
                          onChange={(e) =>
                            setStops((s) => ({ ...s, onestop: e.target.checked }))
                          }
                        />
                        1 Stop
                      </label>
                    </div>
                  </div>

                  {/* Airlines */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Airlines</h4>
                    <div className="space-y-2 text-sm text-gray-700 max-h-64 overflow-auto pr-1">
                      {allAirlines.map((a) => (
                        <label key={a} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            className="accent-blue-600"
                            checked={airlines.includes(a)}
                            onChange={() => toggleAirline(a)}
                          />
                          {a}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-2">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                      Price up to
                    </h4>
                    <input
                      type="range"
                      min={minPrice}
                      max={maxPrice}
                      value={priceCap}
                      onChange={(e) => setPriceCap(Number(e.target.value))}
                      className="w-full accent-blue-600"
                      disabled={!flights.length}
                    />
                    <div className="flex items-center justify-between text-xs text-gray-600 mt-1">
                      <span>${minPrice || 0}</span>
                      <span className="font-semibold text-blue-700">
                        ${priceCap || 0}
                      </span>
                      <span>${maxPrice || 0}</span>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Results List */}
              <main className="lg:col-span-9">
                {/* sort row */}
                <div className="flex items-center justify-between mb-3 text-gray-700">
                  <div className="text-sm">
                    Showing {filteredFlights.length} of {flights.length} flights
                  </div>
                  <div className="text-sm">
                    Sorted by: <span className="font-medium text-blue-700">Recommended</span>
                  </div>
                </div>

                {form.tripType === "round" && form.departFlight && (
  <div className="bg-blue-50 border border-blue-200 text-blue-800 px-4 py-2 rounded mb-4">
    ✅ Departure flight selected: {form.departFlight.from} → {form.departFlight.to}.  
    Now select your **return flight**.
  </div>
)}


                <div className="space-y-4">
                  {error ? (
                    <div className="bg-white border border-gray-200 rounded-xl p-8 text-center text-gray-600">
                      {error}
                    </div>
                  ) : filteredFlights.length ? (
                    // filteredFlights.map((f) => <FlightCard key={f.id} f={f} />)
                    filteredFlights.filter(f => !(form.tripType === "round" && form.departFlight && f.id === form.departFlight.id)).map((f) => <FlightCard key={f.id} f={f} />)
                  ) : (
                    <div className="bg-white border border-gray-200 rounded-xl p-8 text-center text-gray-600">
                      No flights match your filters. Try adjusting them.
                    </div>
                  )}
                </div>
              </main>
            </div>

            {/* Booking Summary (original details) */}
            {form.from && (
              <div className="mt-8 bg-white border border-gray-200 rounded-2xl shadow-sm">
  <div className="border-b px-6 py-4">
    <h4 className="text-lg font-semibold text-gray-800">Search Summary</h4>
    <p className="text-sm text-gray-500">Your recent flight search details</p>
  </div>
  <div className="p-6">
    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm">
      <div>
        <dt className="font-medium text-gray-600">From</dt>
        <dd className="text-gray-900">{form.from}</dd>
      </div>
      <div>
        <dt className="font-medium text-gray-600">To</dt>
        <dd className="text-gray-900">{form.to}</dd>
      </div>
      <div>
        <dt className="font-medium text-gray-600">Departure Date</dt>
        <dd className="text-gray-900">{form.depart || "-"}</dd>
      </div>
      <div>
        <dt className="font-medium text-gray-600">Return Date</dt>
        <dd className="text-gray-900">{form.ret || "-"}</dd>
      </div>
      <div>
        <dt className="font-medium text-gray-600">Passengers</dt>
        <dd className="text-gray-900">{form.passengers || 1}</dd>
      </div>

      {form.email && (
        <div>
          <dt className="font-medium text-gray-600">Email</dt>
          <dd className="text-gray-900">{form.email}</dd>
        </div>
      )}

      {form.phone && (
        <div>
          <dt className="font-medium text-gray-600">Phone</dt>
          <dd className="text-gray-900">{form.phone}</dd>
        </div>
      )}
    </dl>
  </div>
</div>

            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Results;
