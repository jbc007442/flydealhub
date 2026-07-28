import React from "react";

const Disclaimer = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-400 py-16 text-white text-center shadow-md">
        <h1 className="text-4xl font-bold">Disclaimer</h1>
        <div className="w-24 h-1 bg-white mx-auto mt-3"></div>
        <p className="mt-4 text-lg opacity-90">
          Important information regarding our services and responsibility
        </p>
      </section>

      <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="max-w-4xl w-full space-y-12">
        {/* Section: Disclaimer */}
        <section>
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">Disclaimer</h1>
          <article className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
            <p>
              Flydealhub is an independent travel agency operating under the umbrella of Air Fare Bookers Pvt. Ltd. We are resellers of travel products & services such as hotels, flight deals, vacation packages, and attractions. We collaborate with consolidators and third-party suppliers, but are not directly or indirectly affiliated with any airline.
            </p>
            <p>
              All prices we quote include applicable taxes and fees. Fly deal hub provides assistance with flight bookings, changes, cancellations, and other travel-related services for customers who need independent support.
            </p>
            <p>
              While our website offers valuable travel-related information, Flydealhub disclaims any liability for damages resulting from its use. Users are encouraged to independently verify all information and proceed with caution.
            </p>
            <p>
              External links included on the site provide additional resources. However, these are beyond the control of Flydealhub, and we do not take responsibility for their content or services.
            </p>
          </article>
        </section>

        {/* Section: Third-Party Links */}
        <section>
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">Third-Party Links</h2>
          <article className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
            <p>
              Our website may include links to third-party products, services, or websites for user convenience. These links do not imply endorsement or liability for their availability, accuracy, or content.
            </p>
            <p>
              We recommend reviewing the terms of service and privacy policies of any third-party sites you interact with. Flydealhub is not liable for any loss or damage incurred from using external websites.
            </p>
            <p>
              Transactions conducted with these third-party platforms are outside our scope of service and are your sole responsibility.
            </p>
          </article>
        </section>

        {/* Section: Risk */}
        <section>
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">Risk</h2>
          <article className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
            <p>
              By using our website, you accept that all content and services are accessed at your own risk. We make no guarantees regarding the accuracy or completeness of the information provided.
            </p>
            <p>
              If you do not agree with any part of our disclaimer or policies, we recommend discontinuing the use of our website and services.
            </p>
          </article>
        </section>
      </div>
    </div>
    </div>
  );
};

export default Disclaimer;
