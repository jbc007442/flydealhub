import React from 'react';
import { FiArrowLeft, FiInfo, FiMail, FiShield } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const SectionTitle = ({ number, title }) => (
  <div className="flex items-start gap-4 mb-4">
    <span className="flex-shrink-0 text-sm font-semibold text-blue-600">{number}</span>

    <h2 className="text-xl md:text-2xl font-semibold text-slate-900">{title}</h2>
  </div>
);

const Privacy = () => {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors mb-8"
          >
            <FiArrowLeft />
            Back to Home
          </Link>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <FiShield size={20} />
              </div>

              <span className="text-sm font-medium text-blue-600">Flydealhub Policies</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-950">
              Privacy Policy
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              This Privacy Policy explains how Flydealhub collects, uses, stores, and protects your
              personal information when you visit or use our website and services.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="max-w-5xl mx-auto px-6 py-14 md:py-20">
        <div className="max-w-3xl space-y-12">
          {/* 01 */}
          <section>
            <SectionTitle number="01" title="About This Policy" />

            <p className="text-slate-600 leading-7">
              This Privacy Policy explains how Flydealhub collects, uses, stores, and protects your
              personal information when you visit or use our website and services.
            </p>
          </section>

          {/* 02 */}
          <section>
            <SectionTitle number="02" title="Information You Provide" />

            <div className="space-y-4 text-slate-600 leading-7">
              <p>
                If you contact us, we may receive the information you choose to provide, such as
                your name, email address, phone number, message, and details relevant to your
                inquiry.
              </p>

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
                <div className="flex gap-3">
                  <FiInfo className="mt-1 flex-shrink-0 text-amber-600" />

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Important</h3>

                    <p className="text-sm leading-6 text-slate-600">
                      Please do not submit passwords, payment-card information, government
                      identification numbers, or other sensitive information through a general
                      inquiry form.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 03 */}
          <section>
            <SectionTitle number="03" title="Information Collected Automatically" />

            <p className="text-slate-600 leading-7">
              Like many websites, Flydealhub may process technical information such as browser type,
              device information, pages visited, approximate usage timestamps, referring pages, and
              basic diagnostic logs.
            </p>

            <p className="mt-4 text-slate-600 leading-7">
              Whether this information is collected depends on the hosting, security, analytics, and
              other tools enabled on the website.
            </p>
          </section>

          {/* 04 */}
          <section>
            <SectionTitle number="04" title="How Information May Be Used" />

            <p className="text-slate-600 leading-7 mb-5">
              Information may be used, where applicable, to:
            </p>

            <ul className="space-y-3">
              {[
                'Respond to inquiries and provide requested information.',
                'Operate, maintain, troubleshoot, and secure the website.',
                'Understand website usage and improve content and usability.',
                'Detect abuse, spam, fraud, or technical problems.',
                'Meet applicable legal obligations and protect legitimate rights.',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-600 leading-7">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-slate-600 leading-7">
              We retain and use information only for purposes relevant to the actual operation of
              the website and permitted by applicable law.
            </p>
          </section>

          {/* 05 */}
          <section>
            <SectionTitle number="05" title="Cookies and Similar Technologies" />

            <p className="text-slate-600 leading-7">
              The website or its service providers may use cookies or similar technologies for
              essential functions, preferences, analytics, or advertising if those features are
              enabled.
            </p>

            <p className="mt-4 text-slate-600 leading-7">
              You can manage cookies through your browser settings, although disabling some cookies
              may affect website functionality.
            </p>
          </section>

          {/* 06 */}
          <section>
            <SectionTitle number="06" title="Sharing Information" />

            <div className="space-y-4 text-slate-600 leading-7">
              <p>
                Information may be shared with service providers that help operate the website, such
                as hosting, security, email, analytics, or customer-support providers, when those
                providers are used and access is necessary for their work.
              </p>

              <p>
                Information may also be disclosed where required by law or when reasonably necessary
                to protect rights, safety, or the integrity of the website.
              </p>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm leading-6 text-slate-600">
                  Our privacy disclosures should reflect the actual third-party analytics,
                  advertising, payment, or communications providers used on the website.
                </p>
              </div>
            </div>
          </section>

          {/* 07 */}
          <section>
            <SectionTitle number="07" title="Data Retention and Security" />

            <p className="text-slate-600 leading-7">
              Information is retained only for as long as reasonably necessary for the purpose for
              which it was collected, unless a longer period is required or permitted by law.
            </p>

            <p className="mt-4 text-slate-600 leading-7">
              Appropriate technical and organizational safeguards are used, but no internet
              transmission or storage system can be guaranteed to be completely secure.
            </p>
          </section>

          {/* 08 */}
          <section>
            <SectionTitle number="08" title="Your Choices and Rights" />

            <p className="text-slate-600 leading-7">
              Depending on your location and applicable law, you may have rights to request access
              to, correction of, deletion of, or restrictions on certain personal information.
            </p>

            <p className="mt-4 text-slate-600 leading-7">
              You may also be able to object to certain processing or withdraw consent where
              processing is based on consent.
            </p>

            <p className="mt-4 text-slate-600 leading-7">
              Contact us to make a request. We may need to verify it and may be unable to fulfil
              requests where a legal exception applies.
            </p>
          </section>

          {/* 09 */}
          <section>
            <SectionTitle number="09" title="Children's Privacy" />

            <p className="text-slate-600 leading-7">
              This website is not intended to knowingly collect personal information from children
              in violation of applicable law.
            </p>

            <p className="mt-4 text-slate-600 leading-7">
              If you believe a child has provided personal information inappropriately, contact us
              so the matter can be reviewed.
            </p>
          </section>

          {/* 10 */}
          <section>
            <SectionTitle number="10" title="Third-Party Websites" />

            <p className="text-slate-600 leading-7">
              Links to third-party websites are provided for convenience or information. Their
              privacy practices are governed by their own policies, which we encourage you to review
              before submitting information to them.
            </p>
          </section>

          {/* 11 */}
          <section>
            <SectionTitle number="11" title="Changes to This Policy" />

            <p className="text-slate-600 leading-7">
              We may update this Privacy Policy when our website, practices, or legal obligations
              change.
            </p>

            <p className="mt-4 text-slate-600 leading-7">
              The updated version will be posted on this page with a revised date. Changes apply
              from the date stated in the updated policy, subject to applicable law.
            </p>
          </section>

          {/* Contact */}
          <section className="border-t border-slate-200 pt-10">
            <div className="rounded-2xl bg-slate-900 p-7 md:p-8 text-white">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <FiMail size={20} />
                </div>

                <div>
                  <h2 className="text-xl font-semibold">Privacy Questions?</h2>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    If you have questions about this Privacy Policy or would like to make a
                    privacy-related request, please contact us through our Contact Us page.
                  </p>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-white hover:text-blue-300 transition-colors"
                  >
                    Contact Us
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default Privacy;
