import { CheckCircle } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

const Status = () => {
  const { state } = useLocation();
  const data = state?.data;

  if (!data) {
    return (
      <div className="max-w-3xl mx-auto p-10 text-center">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">
          No Booking Found
        </h2>
        <Link to="/" className="text-blue-600 underline">
          Go back to Home
        </Link>
      </div>
    );
  }

  const traveler = data.traveler;
  const flight = data.flight;
  const returnFlight = data.returnFlight;

  return (
    <div className="max-w-7xl mx-auto bg-white rounded-md  my-10 text-gray-800">
      {/* HEADER */}
     <div className="bg-blue-700 text-white px-6 py-3 flex items-center justify-between">
  <h2 className="text-lg font-bold flex items-center gap-2">
    <CheckCircle className="w-6 h-6 text-white" />
    Online booking received
  </h2>
</div>


      {/* CONTENT */}
      <div className="p-8">
        {/* Greeting */}
        <p className="mb-6 text-gray-700 leading-relaxed">
          Dear, <b> {traveler.firstName} {traveler.lastName}</b>
          <br />
          We have received your online booking and it has been sent to the
          airlines for confirmation purposes.
        </p>

        {/* BOOKING SUMMARY */}
        <div className="grid md:grid-cols-3 gap-8 border-b border-gray-200 pb-6 mb-6 text-sm text-gray-800">
  {/* Booking Details */}
  <div>
    <h3 className="font-semibold mb-3 text-blue-800">Booking Details</h3>
    <p>
      {/* <b>Booking ID:</b> #FDH{Math.floor(Math.random() * 1000000)} */}
      <b>Booking ID:</b> #{data.bookingId}
    </p>
    <p>
      <b>Booking Date:</b>{" "}
      {new Date().toLocaleDateString("en-GB").replace(/\//g, "-")}
    </p>
    <p>
      <b>Status:</b>{" "}
      <span className="text-green-700 font-semibold">Confirmed ✅</span>
    </p>
  </div>

  {/* Flight Information (side-by-side Outbound + Return) */}
  <div>
    <h3 className="font-semibold mb-3 text-blue-800">Flight Information</h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Outbound Flight */}
      <div className="border border-blue-200 rounded-md p-3">
        <p className="font-medium text-gray-900 mb-1">
          ✈️ {flight.from} → {flight.to}
        </p>
        <p className="text-sm text-gray-700">
          <b>Airline:</b> {flight.airlineName}
        </p>
        <p className="text-sm text-gray-700">
          <b>Depart:</b> {data.searchForm.depart} ({flight.departTime})
        </p>
        <p className="text-sm text-gray-700">
          <b>Arrive:</b> {flight.arriveTime}
        </p>
        <p className="text-sm text-gray-700">
          <b>Duration:</b> {flight.duration}
        </p>
      </div>

      {/* Return Flight (if exists) */}
      {returnFlight && (
        <div className="border border-blue-200 rounded-md p-3">
          <p className="font-medium text-gray-900 mb-1">
            🔁 {returnFlight.from} → {returnFlight.to}
          </p>
          <p className="text-sm text-gray-700">
            <b>Airline:</b> {returnFlight.airlineName}
          </p>
          <p className="text-sm text-gray-700">
            <b>Return:</b> {data.searchForm.ret} ({returnFlight.departTime})
          </p>
          <p className="text-sm text-gray-700">
            <b>Arrive:</b> {returnFlight.arriveTime}
          </p>
          <p className="text-sm text-gray-700">
            <b>Duration:</b> {returnFlight.duration}
          </p>
        </div>
      )}
    </div>
  </div>

  {/* Price Summary */}
  <div>
    <h3 className="font-semibold mb-3 text-blue-800">Price Summary</h3>
    <p>👤 1 × Adult</p>
    <p>
      <b>Total:</b>{" "}
      <span className="text-blue-700 font-bold">
        ${Number(data.totalAmount).toFixed(2)}
      </span>
    </p>
  </div>
</div>


        {/* PASSENGER DETAILS */}
        <div className="border-b border-gray-200 pb-6 mb-6 text-sm">
          <h3 className="font-semibold mb-3 text-blue-800">Passenger Information</h3>
          <div className="grid grid-cols-3 gap-3">
            <p>
              <b>Passenger Name</b>
              <br />
              {traveler.firstName}
            </p>
            <p>
              <b>Gender</b>
              <br />
              {traveler.gender}
            </p>
            <p>
              <b>DOB</b>
              <br />
              {traveler.dob}
            </p>
          </div>
        </div>

        {/* FLIGHT ITINERARY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Outbound */}
          <div className="border border-blue-400 rounded-md">
            <div className="bg-blue-600 text-white px-4 py-2 flex justify-between items-center text-sm font-semibold rounded-t-md">
              <span>
                {flight.from} → {flight.to} | Economy
              </span>
              <span>Duration: {flight.duration}</span>
            </div>
            <div className="p-4 text-sm">
              <div className="flex flex-wrap justify-between items-start">
                <div>
                  <p className="font-semibold">{flight.airlineName}</p>
                  <p>
                    <b>{flight.from}</b> - <b>{flight.to}</b>
                  </p>
                  <p>{data.searchForm.depart}</p>
                  <p>
                    {flight.departTime} - {flight.arriveTime}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-blue-700">Flight Duration</p>
                  <p>{flight.duration}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Return Flight */}
          {returnFlight && (
            <div className="border border-blue-400 rounded-md">
              <div className="bg-blue-600 text-white px-4 py-2 flex justify-between items-center text-sm font-semibold rounded-t-md">
                <span>
                  {returnFlight.from} → {returnFlight.to} | Economy
                </span>
                <span>Duration: {returnFlight.duration}</span>
              </div>
              <div className="p-4 text-sm">
                <div className="flex flex-wrap justify-between items-start">
                  <div>
                    <p className="font-semibold">{returnFlight.airlineName}</p>
                    <p>
                      <b>{returnFlight.from}</b> - <b>{returnFlight.to}</b>
                    </p>
                    <p>{data.searchForm.ret}</p>
                    <p>
                      {returnFlight.departTime} - {returnFlight.arriveTime}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-blue-700">Flight Duration</p>
                    <p>{returnFlight.duration}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* FOOTER */}
        <div className="mt-10 text-sm border-t border-gray-200 pt-5 text-gray-700 leading-relaxed">
          <p>
            One of our Sales representatives will contact you with an update
            shortly. Alternatively, you can call us at{" "}
            <b className="text-blue-800">+1-888-789-8629</b> or email us at{" "}
            <a
              href="mailto:support@flydealhub.com"
              className="text-blue-700 font-medium"
            >
              support@flydealhub.com
            </a>
            .
          </p>
          <p className="mt-3 text-xs text-gray-500">
            Please find the details of your online booking below. <br />
            <b>Note:</b> These are not your e-tickets.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Status;
