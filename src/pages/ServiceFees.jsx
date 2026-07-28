import React from 'react';

const ServiceFees = () => {
  return (
    <section className="px-4 py-10 bg-white text-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Our Service Fees</h2>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-sm md:text-base">
            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="px-4 py-2 text-left">Service Fees</th>
                <th className="px-4 py-2 text-left">Applies To</th>
                <th className="px-4 py-2 text-left">Code</th>
                <th className="px-4 py-2 text-left">Amount</th>
              </tr>
            </thead>
            <tbody className="bg-white text-black">
              <tr className="border-t border-gray-300">
                <td className="px-4 py-3 font-semibold">
                  Air Transaction Fees <br />
                  <span className="text-xs text-gray-600">(*per passenger, per ticket basis)</span>
                </td>
                <td className="px-4 py-3">US Domestic and International</td>
                <td className="px-4 py-3">Fees ◊</td>
                <td className="px-4 py-3">Up to $50</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-4 py-3 font-semibold">
                  Hotel Transaction Service Fees <br />
                  <span className="text-xs text-gray-600">(per night, per room)</span>
                </td>
                <td className="px-4 py-3">All Hotels</td>
                <td className="px-4 py-3">Fees ◊</td>
                <td className="px-4 py-3">Up to $35</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-4 py-3 font-semibold">
                  Car Rental Transaction Fees <br />
                  <span className="text-xs text-gray-600">(per rental)</span>
                </td>
                <td className="px-4 py-3">All Car Rentals</td>
                <td className="px-4 py-3">Fees ◊</td>
                <td className="px-4 py-3">Up to $40</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-4 py-3 font-semibold">
                  Cruise Booking Transaction Fees <br />
                  <span className="text-xs text-gray-600">(per passenger)</span>
                </td>
                <td className="px-4 py-3">All Cruises</td>
                <td className="px-4 py-3">Fees ◊</td>
                <td className="px-4 py-3">Up to $200</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Notes */}
        <div className="mt-8 space-y-4 text-sm md:text-base text-gray-800">
          <p>
            Service fees will be converted to your local currency on the payment page.
          </p>
          <p>
            <strong>*Passenger types:</strong> adult, infant, student, child, senior, and military. Transaction fees are usually non-refundable and subject to change without notice. Within 24 hours of making the reservation, cancellations are subject to refundable transaction service fees. The transaction service charge is not refundable if the cancellation is made more than 24 hours after the reservation was made.
          </p>
          <p className="font-bold text-black">
            Only the final total amount indicated will be charged to your account.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Holiday package booking service fees may go up to $50 per passenger</li>
            <li>Up to $200 in service fees per passenger when purchasing first and business class tickets</li>
            <li>Up to $100 per passenger in service fees for open-jaw and multi-city reservations</li>
            <li>Up to $40 in service fees per passenger in cities with high fraud rates</li>
            <li>Up to $55 in service fees per passenger for different dates and nearby airports</li>
            <li>Service fees for unaccompanied minor tickets may go up to $100 per passenger</li>
            <li>Service fees of up to $200 per passenger when booking a cruise</li>
          </ul>
          <p>
            Service fees for bookings made at contact centers: Reservations made at contact centers may have greater service fees than reservations made online. This covers intricate international and multi-stop itineraries. A service fee of $15 to $250 (or up to $125 for senior citizens) may be levied on each passenger.
          </p>

          <p className="text-sm md:text-base text-red-700 font-bold border-t pt-4">
            IMPORTANT INFORMATION: ALL LISTED SERVICE FEES ARE SUBJECT TO CHANGE AT ANY TIME AND WITHOUT NOTICE. YOU WILL PAY THE END TOTAL PRICE AS QUOTED, REGARDLESS OF ANY CHANGES OR VARIATIONS IN THE SERVICE FEES. BEFORE MAKING A RESERVATION, PLEASE READ THE FINAL PRICE CAREFULLY.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceFees;
