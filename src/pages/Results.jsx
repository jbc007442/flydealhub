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

// -----------------------------
// Duffel API Configuration
// -----------------------------

const DUFFEL_SEARCH_URL = "https://airlinedealhub.com/search.php";

// -----------------------------
// Skeleton Card
// -----------------------------

const SkeletonCard = () => (
  <div className="bg-white border border-gray-200 rounded-xl p-5 animate-pulse">
    <div className="h-5 bg-gray-200 rounded w-1/4 mb-3"></div>
    <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
  </div>
);

// -----------------------------
// Duration Helper
// Supports:
// PT7H25M
// 7h 25m
// 7h
// 25m
// -----------------------------

const fmtDuration = (value) => {
  if (!value) return "—";

  if (typeof value !== "string") {
    return String(value);
  }

  const isoMatch = value.match(/PT(?:(\d+)H)?(?:(\d+)M)?/i);

  if (isoMatch) {
    const h = isoMatch[1] ? `${isoMatch[1]}h` : "";
    const m = isoMatch[2] ? ` ${isoMatch[2]}m` : "";

    return `${h}${m}`.trim() || "—";
  }

  return value;
};

// -----------------------------
// Date Helper
// -----------------------------

const normalizeDate = (dateValue) => {
  if (!dateValue) return "";

  const value = String(dateValue).trim();

  // Already YYYY-MM-DD
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return value;
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  // Use local date to avoid timezone shifting
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

// -----------------------------
// Cabin Class Helper
// -----------------------------

const normalizeCabinClass = (value) => {
  const cabin = String(value || "economy")
    .trim()
    .toLowerCase();

  if (
    cabin === "premium economy" ||
    cabin === "premium_economy"
  ) {
    return "premium_economy";
  }

  if (cabin === "business") {
    return "business";
  }

  if (
    cabin === "first class" ||
    cabin === "first_class" ||
    cabin === "first"
  ) {
    return "first";
  }

  return "economy";
};

// -----------------------------
// Safe Number Helper
// -----------------------------

const toNumber = (value) => {
  const number = Number(value);

  return Number.isFinite(number) ? number : 0;
};

// -----------------------------
// Normalize API Flight
//
// Your PHP Duffel API should ideally
// return normalized flight objects.
//
// This function also handles several
// possible field names safely.
// -----------------------------

const normalizeFlight = (flight, index = 0) => {
  if (!flight || typeof flight !== "object") {
    return null;
  }

  const airlineCode =
    flight.airlineCode ||
    flight.carrierCode ||
    flight.operatingCarrierCode ||
    flight.marketingCarrierCode ||
    flight.carrier?.iata_code ||
    "XX";

  const airlineName =
    flight.airlineName ||
    flight.carrierName ||
    flight.airline ||
    flight.carrier?.name ||
    airlineCode;

  const from =
    flight.from ||
    flight.origin ||
    flight.originLocationCode ||
    flight.departure?.iata_code ||
    flight.departure?.airport?.iata_code ||
    "";

  const to =
    flight.to ||
    flight.destination ||
    flight.destinationLocationCode ||
    flight.arrival?.iata_code ||
    flight.arrival?.airport?.iata_code ||
    "";

  const departTime =
    flight.departTime ||
    flight.departureTime ||
    flight.departure?.time ||
    flight.departure?.at ||
    flight.departure?.datetime ||
    "--:--";

  const arriveTime =
    flight.arriveTime ||
    flight.arrivalTime ||
    flight.arrival?.time ||
    flight.arrival?.at ||
    flight.arrival?.datetime ||
    "--:--";

  const duration =
    flight.duration ||
    flight.totalDuration ||
    flight.totalTrip ||
    flight.durationFormatted ||
    "—";

  const stopsValue =
    flight.stops ??
    flight.stopCount ??
    flight.numberOfStops ??
    0;

  const price =
    flight.price ??
    flight.totalPrice ??
    flight.amount ??
    flight.total ??
    0;

  const id =
    flight.id ||
    flight.offerId ||
    flight.offer_id ||
    `${airlineCode}-${from}-${to}-${index}`;

  const code =
    flight.code ||
    flight.flightNumber ||
    flight.flight_number ||
    flight.number ||
    flight.id ||
    "—";

  return {
    ...flight,

    id: String(id),

    airlineCode: String(airlineCode).toUpperCase(),

    airlineName: String(airlineName),

    code: String(code),

    from: String(from),

    to: String(to),

    departTime,

    arriveTime,

    duration: fmtDuration(duration),

    stops: Math.max(0, Number(stopsValue) || 0),

    price: toNumber(price).toFixed(2),
  };
};

// -----------------------------
// Extract Flights From API
// -----------------------------

const extractFlights = (result) => {
  if (!result) {
    return [];
  }

  // Expected:
  // {
  //   data: [...]
  // }

  if (Array.isArray(result.data)) {
    return result.data
      .map((flight, index) => normalizeFlight(flight, index))
      .filter(Boolean);
  }

  // Sometimes API may return:
  // {
  //   flights: [...]
  // }

  if (Array.isArray(result.flights)) {
    return result.flights
      .map((flight, index) => normalizeFlight(flight, index))
      .filter(Boolean);
  }

  // Direct array fallback
  if (Array.isArray(result)) {
    return result
      .map((flight, index) => normalizeFlight(flight, index))
      .filter(Boolean);
  }

  return [];
};

// -----------------------------
// Flight Card
// -----------------------------

const FlightCard = ({ f }) => {
  const [logoError, setLogoError] = useState(false);

  const navigate = useNavigate();

  const { state: form = {} } = useLocation();

  const logoUrl = `https://airlinecodes.io/img/airlines/${String(
    f.airlineCode || ""
  ).toUpperCase()}.png`;

  const handleSelect = () => {
    // -------------------------
    // Round Trip
    // -------------------------

    if (form.tripType === "round") {
      // Departure flight has not been selected yet.
      // Save it and load return flights.
      if (!form.departFlight) {
        navigate("/results.html", {
          state: {
            ...form,
            departFlight: f,
            timestamp: Date.now(),
          },
        });

        return;
      }

      // Departure already selected.
      // Now select return flight.
      navigate("/book", {
        state: {
          flight: form.departFlight,
          returnFlight: f,

          form: {
            ...form,
            tripType: "round",
            departFlight: undefined,
            timestamp: Date.now(),
          },
        },
      });

      return;
    }

    // -------------------------
    // One Way
    // -------------------------

    navigate("/book", {
      state: {
        flight: f,
        form,
      },
    });
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

          <div className="text-xs text-gray-500">
            {f.code}
          </div>
        </div>
      </div>

      {/* Times */}
      <div className="flex items-center justify-between md:justify-center gap-6 flex-1">
        <div className="text-left">
          <div className="text-lg font-semibold text-gray-900">
            {f.departTime || "--:--"}
          </div>

          <div className="text-xs text-gray-500">
            {f.from || "—"}
          </div>
        </div>

        <div className="flex items-center gap-2 text-gray-500">
          <span className="text-sm">
            {f.duration || "—"}
          </span>

          <FiChevronRight className="text-blue-500" />

          <span className="text-sm">
            {f.stops === 0
              ? "Nonstop"
              : `${f.stops} stop${f.stops > 1 ? "s" : ""}`}
          </span>
        </div>

        <div className="text-right">
          <div className="text-lg font-semibold text-gray-900">
            {f.arriveTime || "--:--"}
          </div>

          <div className="text-xs text-gray-500">
            {f.to || "—"}
          </div>
        </div>
      </div>

      {/* Price + CTA */}
      <div className="flex md:flex-col items-center md:items-end gap-3 min-w-[180px]">
        <div className="text-2xl font-bold text-gray-900">
          ${toNumber(f.price).toFixed(2)}
        </div>

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

// -----------------------------
// Results Page
// -----------------------------

const Results = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const form = location.state || {};

  // -----------------------------
  // Loading
  // -----------------------------

  const [loading, setLoading] = useState(true);

  // -----------------------------
  // Flights
  // -----------------------------

  const [flights, setFlights] = useState([]);

  const [error, setError] = useState("");

  // -----------------------------
  // Filters
  // -----------------------------

  const [stops, setStops] = useState({
    nonstop: true,
    onestop: true,
  });

  const [airlines, setAirlines] = useState([]);

  const [priceCap, setPriceCap] = useState(0);

  // -----------------------------
  // Fetch Flights From Duffel PHP API
  // -----------------------------

  useEffect(() => {
    let cancelled = false;

    const fetchFlights = async () => {
      try {
        setLoading(true);

        setError("");

        setFlights([]);

        // ---------------------------------
        // Validate search parameters
        // ---------------------------------

        if (!form.from_iata || !form.to_iata) {
          throw new Error(
            "Origin and destination airports are required."
          );
        }

        const isReturnSearch =
          form.tripType === "round" &&
          Boolean(form.departFlight);

        const from = isReturnSearch
          ? form.to_iata
          : form.from_iata;

        const to = isReturnSearch
          ? form.from_iata
          : form.to_iata;

        const departDate = isReturnSearch
          ? normalizeDate(form.ret)
          : normalizeDate(form.depart);

        if (!from || !to) {
          throw new Error(
            "Invalid origin or destination airport."
          );
        }

        if (!departDate) {
          throw new Error(
            "Invalid departure date."
          );
        }

        // ---------------------------------
        // Build Duffel PHP API payload
        // ---------------------------------

        const payload = {
          from,
          to,

          departDate,

          returnDate:
            !isReturnSearch && form.ret
              ? normalizeDate(form.ret)
              : null,

          passengers:
            Math.max(
              1,
              Number(form.passengers) || 1
            ),

          cabinClass: normalizeCabinClass(
            form.travelClass
          ),

          tripType: isReturnSearch
            ? "oneway"
            : form.tripType || "oneway",
        };

        console.log(
          "Duffel Flight Search Payload:",
          payload
        );

        // ---------------------------------
        // Call your PHP backend
        // ---------------------------------

        const response = await fetch(
          DUFFEL_SEARCH_URL,
          {
            method: "POST",

            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },

            body: JSON.stringify(payload),
          }
        );

        // ---------------------------------
        // Read response safely
        // ---------------------------------

        const responseText =
          await response.text();

        let result = {};

        try {
          result = responseText
            ? JSON.parse(responseText)
            : {};
        } catch (parseError) {
          console.error(
            "Duffel API returned invalid JSON:",
            responseText
          );

          throw new Error(
            "Flight API returned an invalid response."
          );
        }

        // ---------------------------------
        // HTTP error
        // ---------------------------------

        if (!response.ok) {
          throw new Error(
            result?.error ||
              result?.message ||
              `Flight API error: ${response.status}`
          );
        }

        // ---------------------------------
        // API error
        // ---------------------------------

        if (result?.error) {
          throw new Error(
            typeof result.error === "string"
              ? result.error
              : result.error?.message ||
                  "Duffel flight search failed."
          );
        }

        // ---------------------------------
        // Normalize flights
        // ---------------------------------

        const mappedFlights =
          extractFlights(result);

        if (cancelled) {
          return;
        }

        console.log(
          "Duffel Flight Results:",
          mappedFlights
        );

        // ---------------------------------
        // Save flights
        // ---------------------------------

        setFlights(mappedFlights);

        // ---------------------------------
        // Initialize airline filter
        // ---------------------------------

        const allAirlineNames = Array.from(
          new Set(
            mappedFlights
              .map(
                (flight) =>
                  flight.airlineName ||
                  flight.airlineCode
              )
              .filter(Boolean)
          )
        );

        setAirlines(allAirlineNames);

        // ---------------------------------
        // Initialize price filter
        // ---------------------------------

        const prices = mappedFlights
          .map((flight) =>
            toNumber(flight.price)
          )
          .filter(
            (price) =>
              Number.isFinite(price)
          );

        const maxPrice =
          prices.length > 0
            ? Math.max(...prices)
            : 0;

        setPriceCap(maxPrice);

        // ---------------------------------
        // Empty result
        // ---------------------------------

        if (!mappedFlights.length) {
          setError(
            isReturnSearch
              ? "No return flights found."
              : "No flights found."
          );
        }
      } catch (err) {
        if (cancelled) {
          return;
        }

        console.error(
          "Duffel Flight Search Error:",
          err
        );

        setFlights([]);

        setAirlines([]);

        setPriceCap(0);

        setError(
          err?.message ||
            "Failed to load flights. Please try again."
        );
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchFlights();

    return () => {
      cancelled = true;
    };

    // The search needs to run again when:
    // - user starts a new search
    // - departure flight is selected
    // - return date changes
  }, [
    location.key,
    form.from_iata,
    form.to_iata,
    form.depart,
    form.ret,
    form.passengers,
    form.travelClass,
    form.tripType,
    form.departFlight?.id,
  ]);

  // -----------------------------
  // Airline Options
  // -----------------------------

  const allAirlines = useMemo(
    () =>
      Array.from(
        new Set(
          flights.map(
            (flight) =>
              flight.airlineName ||
              flight.airlineCode
          )
        )
      ),
    [flights]
  );

  // -----------------------------
  // Price Bounds
  // -----------------------------

  const [minPrice, maxPrice] = useMemo(() => {
    if (!flights.length) {
      return [0, 0];
    }

    const nums = flights
      .map((flight) =>
        toNumber(flight.price)
      )
      .filter((price) => price >= 0);

    if (!nums.length) {
      return [0, 0];
    }

    return [
      Math.min(...nums),
      Math.max(...nums),
    ];
  }, [flights]);

  // -----------------------------
  // Keep Price Cap Valid
  // -----------------------------

  useEffect(() => {
    if (flights.length) {
      const newMax = Math.max(
        ...flights.map((flight) =>
          toNumber(flight.price)
        )
      );

      setPriceCap((previous) => {
        if (previous === 0) {
          return newMax;
        }

        return Math.min(
          previous,
          newMax
        );
      });
    } else {
      setPriceCap(0);
    }
  }, [flights]);

  // -----------------------------
  // Airline Filter
  // -----------------------------

  const toggleAirline = (name) => {
    setAirlines((previous) =>
      previous.includes(name)
        ? previous.filter(
            (airline) =>
              airline !== name
          )
        : [...previous, name]
    );
  };

  // -----------------------------
  // Filter Flights
  // -----------------------------

  const filteredFlights = useMemo(() => {
    return flights.filter((flight) => {
      const passStops =
        (flight.stops === 0 &&
          stops.nonstop) ||
        (flight.stops === 1 &&
          stops.onestop) ||
        flight.stops > 1;

      const passAirline =
        airlines.length === 0 ||
        airlines.includes(
          flight.airlineName ||
            flight.airlineCode
        );

      const passPrice =
        toNumber(flight.price) <=
        (priceCap || Infinity);

      return (
        passStops &&
        passAirline &&
        passPrice
      );
    });
  }, [
    flights,
    stops,
    airlines,
    priceCap,
  ]);

  // -----------------------------
  // Is Return Search?
  // -----------------------------

  const isReturnSearch =
    form.tripType === "round" &&
    Boolean(form.departFlight);

  // -----------------------------
  // Remove Selected Departure
  // From Return Search Results
  // -----------------------------

  const visibleFlights = useMemo(() => {
    if (!isReturnSearch) {
      return filteredFlights;
    }

    return filteredFlights.filter(
      (flight) =>
        flight.id !==
        form.departFlight?.id
    );
  }, [
    filteredFlights,
    isReturnSearch,
    form.departFlight?.id,
  ]);

  // -----------------------------
  // Render
  // -----------------------------

  return (
    <div className="bg-gray-50 text-gray-200 min-h-screen">
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
                {/* Left */}
                <div className="flex flex-wrap items-center gap-3">
                  {/* Route */}
                  <div className="flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg border border-gray-200">
                    <FiMapPin className="text-blue-600" />

                    <span className="text-sm">
                      {form.from || "From"}

                      <span className="mx-1">
                        →
                      </span>

                      {form.to || "To"}
                    </span>
                  </div>

                  {/* Passengers */}
                  <div className="flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg border border-gray-200">
                    <FiUsers className="text-blue-600" />

                    <span className="text-sm">
                      {form.passengers || 1}{" "}
                      {Number(form.passengers) >
                      1
                        ? "Passengers"
                        : "Passenger"}
                    </span>
                  </div>

                  {/* Cabin */}
                  <div className="flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg border border-gray-200">
                    <FiBriefcase className="text-blue-600" />

                    <span className="text-sm">
                      {form.travelClass ||
                        "Economy"}
                    </span>
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg border border-gray-200">
                    <FiCalendar className="text-blue-600" />

                    <span className="text-sm">
                      {form.depart ||
                        "Depart"}

                      {form.ret
                        ? ` · Return ${form.ret}`
                        : ""}
                    </span>
                  </div>
                </div>

                {/* Right */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      navigate(-1)
                    }
                    className="px-4 py-2 rounded-lg border border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition text-gray-700"
                  >
                    Modify Search
                  </button>
                </div>
              </div>
            </div>

            {/* Return Flight Message */}
            {isReturnSearch && (
              <div className="mt-4 bg-blue-50 border border-blue-200 text-blue-800 px-4 py-3 rounded-lg">
                <div className="font-semibold">
                  Departure flight selected
                </div>

                <div className="text-sm mt-1">
                  {form.departFlight?.from ||
                    form.from_iata}{" "}
                  →{" "}
                  {form.departFlight?.to ||
                    form.to_iata}
                </div>

                <div className="text-sm mt-1">
                  Now select your return
                  flight.
                </div>
              </div>
            )}

            {/* Content grid */}
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Filters Sidebar */}
              <aside className="lg:col-span-3">
                <div className="bg-white border border-gray-200 rounded-2xl p-5 sticky top-20 shadow-sm">
                  <div className="flex items-center gap-2 text-gray-800 mb-4">
                    <FiSliders className="text-blue-600" />

                    <h3 className="font-semibold">
                      Filters
                    </h3>
                  </div>

                  {/* Stops */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                      Stops
                    </h4>

                    <div className="space-y-2 text-sm text-gray-700">
                      {/* Nonstop */}
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="accent-blue-600"
                          checked={
                            stops.nonstop
                          }
                          onChange={(e) =>
                            setStops(
                              (previous) => ({
                                ...previous,
                                nonstop:
                                  e.target
                                    .checked,
                              })
                            )
                          }
                        />

                        Nonstop
                      </label>

                      {/* One Stop */}
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="accent-blue-600"
                          checked={
                            stops.onestop
                          }
                          onChange={(e) =>
                            setStops(
                              (previous) => ({
                                ...previous,
                                onestop:
                                  e.target
                                    .checked,
                              })
                            )
                          }
                        />

                        1 Stop
                      </label>
                    </div>
                  </div>

                  {/* Airlines */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                      Airlines
                    </h4>

                    <div className="space-y-2 text-sm text-gray-700 max-h-64 overflow-auto pr-1">
                      {allAirlines.map(
                        (airline) => (
                          <label
                            key={airline}
                            className="flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              className="accent-blue-600"
                              checked={airlines.includes(
                                airline
                              )}
                              onChange={() =>
                                toggleAirline(
                                  airline
                                )
                              }
                            />

                            {airline}
                          </label>
                        )
                      )}
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
                      max={maxPrice || 1}
                      value={
                        priceCap ||
                        maxPrice ||
                        0
                      }
                      onChange={(e) =>
                        setPriceCap(
                          Number(
                            e.target.value
                          )
                        )
                      }
                      className="w-full accent-blue-600"
                      disabled={
                        !flights.length
                      }
                    />

                    <div className="flex items-center justify-between text-xs text-gray-600 mt-1">
                      <span>
                        $
                        {minPrice.toFixed(
                          0
                        )}
                      </span>

                      <span className="font-semibold text-blue-700">
                        $
                        {toNumber(
                          priceCap
                        ).toFixed(0)}
                      </span>

                      <span>
                        $
                        {maxPrice.toFixed(
                          0
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Results List */}
              <main className="lg:col-span-9">
                {/* Sort row */}
                <div className="flex items-center justify-between mb-3 text-gray-700">
                  <div className="text-sm">
                    Showing{" "}
                    {visibleFlights.length}{" "}
                    of {flights.length}{" "}
                    flights
                  </div>

                  <div className="text-sm">
                    Sorted by:{" "}
                    <span className="font-medium text-blue-700">
                      Recommended
                    </span>
                  </div>
                </div>

                {/* Flights */}
                <div className="space-y-4">
                  {error ? (
                    <div className="bg-white border border-gray-200 rounded-xl p-8 text-center text-gray-600">
                      <div className="text-red-600 font-semibold mb-2">
                        Flight Search Error
                      </div>

                      <div>
                        {error}
                      </div>

                      <button
                        onClick={() =>
                          window.location.reload()
                        }
                        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
                      >
                        Try Again
                      </button>
                    </div>
                  ) : visibleFlights.length ? (
                    visibleFlights.map(
                      (flight) => (
                        <FlightCard
                          key={flight.id}
                          f={flight}
                        />
                      )
                    )
                  ) : (
                    <div className="bg-white border border-gray-200 rounded-xl p-8 text-center text-gray-600">
                      No flights match your
                      filters. Try adjusting
                      them.
                    </div>
                  )}
                </div>
              </main>
            </div>

            {/* Booking Summary */}
            {form.from && (
              <div className="mt-8 bg-white border border-gray-200 rounded-2xl shadow-sm">
                <div className="border-b px-6 py-4">
                  <h4 className="text-lg font-semibold text-gray-800">
                    Search Summary
                  </h4>

                  <p className="text-sm text-gray-500">
                    Your recent flight
                    search details
                  </p>
                </div>

                <div className="p-6">
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm">
                    {/* From */}
                    <div>
                      <dt className="font-medium text-gray-600">
                        From
                      </dt>

                      <dd className="text-gray-900">
                        {form.from}
                      </dd>
                    </div>

                    {/* To */}
                    <div>
                      <dt className="font-medium text-gray-600">
                        To
                      </dt>

                      <dd className="text-gray-900">
                        {form.to}
                      </dd>
                    </div>

                    {/* Departure */}
                    <div>
                      <dt className="font-medium text-gray-600">
                        Departure Date
                      </dt>

                      <dd className="text-gray-900">
                        {form.depart ||
                          "-"}
                      </dd>
                    </div>

                    {/* Return */}
                    <div>
                      <dt className="font-medium text-gray-600">
                        Return Date
                      </dt>

                      <dd className="text-gray-900">
                        {form.ret || "-"}
                      </dd>
                    </div>

                    {/* Passengers */}
                    <div>
                      <dt className="font-medium text-gray-600">
                        Passengers
                      </dt>

                      <dd className="text-gray-900">
                        {form.passengers ||
                          1}
                      </dd>
                    </div>

                    {/* Email */}
                    {form.email && (
                      <div>
                        <dt className="font-medium text-gray-600">
                          Email
                        </dt>

                        <dd className="text-gray-900">
                          {form.email}
                        </dd>
                      </div>
                    )}

                    {/* Phone */}
                    {form.phone && (
                      <div>
                        <dt className="font-medium text-gray-600">
                          Phone
                        </dt>

                        <dd className="text-gray-900">
                          {form.phone}
                        </dd>
                      </div>
                    )}

                    {/* Selected Departure */}
                    {form.departFlight && (
                      <div>
                        <dt className="font-medium text-gray-600">
                          Selected
                          Departure
                        </dt>

                        <dd className="text-gray-900">
                          {
                            form
                              .departFlight
                              .from
                          }{" "}
                          →{" "}
                          {
                            form
                              .departFlight
                              .to
                          }
                        </dd>
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

