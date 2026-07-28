import React from 'react';

const TaxesFees = () => {
  const fees = [
    {
      name: 'Security & Insurance Surcharge Departure Israeli Carriers',
      desc: 'On all Israeli flights also when the arrival/departure is not from/to Israel.',
      applies: 'Each Way',
      code: 'AP',
      amount: '$4.00',
    },
    {
      name: 'Travel Facilities Tax (Alaska/Hawaii Ticket Tax)',
      desc: 'Charged for certain flights to/from Alaska and/or Hawaii.',
      applies: 'U.S. Domestic and International',
      code: 'US',
      amount: '$10.60 OW / $21.20 RT',
    },
    {
      name: 'U.S. Flight Segment Tax Domestic',
      desc: 'Charged for flights traversing the US depending on the per-segment fee.',
      applies: 'U.S. Domestic and International',
      code: 'ZP',
      amount: '$4.80',
    },
    {
      name: 'U.S. Excise Tax (or U.S. Domestic Transportation Tax / U.S. Ticket Tax)',
      desc: 'Charged for flights around the US or Canada/Mexico and its 225-mile buffer zones.',
      applies: 'U.S. Domestic',
      code: 'US',
      amount: '7.50%',
    },
    {
      name: 'Passenger Facility Charge (PFC)',
      desc: 'This is charged as a variable fee as facilities improvement tax by particular airports. A maximum of 4 charges on one itinerary can be charged.',
      applies: 'Per Arrival in USA',
      code: 'XF',
      amount: '$4.50',
    },
    {
      name: 'September 11th Security Fee (U.S. Passenger Civil Aviation Security Fee)',
      desc: 'For every one-way trip: Not over $11.20 per round trip. Charged to passengers on domestic and international flights for new civil aviation security measures enforced after 9/11.',
      applies: 'U.S. Domestic and International',
      code: 'AY',
      amount: '$5.60',
    },
    {
      name: 'U.S. International Transportation (Arrival/Departure) Tax',
      desc: 'Levied on all flights arriving/departing from the US, Puerto Rico, or the U.S. Virgin Islands.',
      applies: 'International',
      code: 'US',
      amount: '$21.10',
    },
    {
      name: 'U.S. Animal and Plant Health Inspection Service (APHIS) Fee',
      desc: 'Levied on all flights starting abroad, except Canada, and landing in the US, Puerto Rico, or the U.S. Virgin Islands.',
      applies: 'International',
      code: 'XA',
      amount: '$3.83',
    },
    {
      name: 'U.S. Immigration User Fee',
      desc: 'Applicable on all international arrivals to the U.S., Puerto Rico or the U.S. Virgin Islands.',
      applies: 'International',
      code: 'XY',
      amount: '$7.00',
    },
    {
      name: 'U.S. Customs User Fee',
      desc: 'Charged to passengers arriving in the US or in Puerto Rico and the District of Columbia, for flights which don’t begin in the US territories.',
      applies: 'International',
      code: 'YC',
      amount: '$6.52',
    },
    {
      name: 'International Taxes and Government or Airport-imposed Fees',
      desc: 'International Taxes and Government or Airport-imposed fees',
      applies: 'International',
      code: 'Varies',
      amount: 'up to several hundred dollars',
    },
    {
      name: 'Online Air Transaction Service Fees',
      desc: 'On all airfares, a service fee of up to $30 is levied on per pax for every passenger type*',
      applies: 'U.S. Domestic and International',
      code: 'Fees',
      amount: 'up to $30.00',
    },
    {
      name: 'Online Hotel Transaction Service Fees',
      desc: '(per night, per room)',
      applies: 'All Hotels',
      code: 'Fees',
      amount: 'up to $35',
    },
    {
      name: 'Online Car Rental Transaction Service Fees',
      desc: '(per rental)',
      applies: 'All Car Rentals',
      code: 'Fees',
      amount: '$14.00',
    },
  ];

  return (
    <div className=" max-w-7xl mx-auto py-16 bg-white text-black">
      <h1 className="text-2xl font-bold text-center mb-10">TAXES AND FEES</h1>

      <div className="overflow-auto">
        <table className="min-w-full border border-gray-300 text-sm text-left">
          <thead className="bg-black text-white uppercase">
            <tr>
              <th className="py-3 px-4 w-1/3">Name & Description</th>
              <th className="py-3 px-4">May Apply To</th>
              <th className="py-3 px-4">Code</th>
              <th className="py-3 px-4">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {fees.map((fee, index) => (
              <tr key={index}>
                <td className="py-3 px-4">
                  <strong>{fee.name}</strong>
                  <br />
                  <span className="text-gray-600 text-xs">{fee.desc}</span>
                </td>
                <td className="py-3 px-4">{fee.applies}</td>
                <td className="py-3 px-4">{fee.code}</td>
                <td className="py-3 px-4">{fee.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footnotes */}
      <div className="mt-8 text-xs text-gray-600 space-y-2">
        <p>*Approximate amount</p>
        <p>*Passenger type = Adult, infant, student, child, senior, military</p>
        <p>Taxes imposed by the government are subject to change without prior notice</p>
        <p>Service Fees on all transactions are non-refundable.</p>
        <p>
          <strong>Exceptions to Online Air Transaction Service Fees:</strong><br />
          Business & First Class fares - Service fees on a passenger type tickets may be up to $100 per passenger<br />
          Multi-trip types - Service fees on a passenger type tickets may be up to $100 per passenger<br />
          Multi airline trips or the cities with high fraud rates - Service fees on a passenger types may be up to $30 per passenger
        </p>
      </div>
    </div>
  );
};

export default TaxesFees;
