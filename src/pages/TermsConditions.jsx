import React from 'react';
import { FiArrowLeft, FiAlertCircle, FiInfo, FiShield } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const SectionTitle = ({ number, title }) => (
  <div className="flex items-start gap-4 mb-4">
    <span className="flex-shrink-0 text-sm font-semibold text-blue-600">{number}</span>

    <h2 className="text-xl md:text-2xl font-semibold text-slate-900">{title}</h2>
  </div>
);

const TermsConditions = () => {
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
              Terms &amp; Conditions
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Please review these terms carefully before accessing or using the Flydealhub website
              and its services.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-6 py-14 md:py-20">
        <div className="max-w-3xl space-y-12">
          {/* 01 */}
          <section>
            <SectionTitle number="01" title="Acceptance of These Terms" />

            <p className="text-slate-600 leading-7">
              By accessing or using Flydealhub, you agree to these Terms & Conditions and any
              applicable laws. If you do not agree, please stop using the website.
            </p>

            <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex gap-3">
                <FiInfo className="mt-1 flex-shrink-0 text-blue-600" />

                <p className="text-sm leading-6 text-slate-600">
                  These terms should be reviewed by the business and adapted to its actual services
                  and applicable jurisdiction before publication.
                </p>
              </div>
            </div>
          </section>

          {/* 03 */}
          <section>
            <SectionTitle number="03" title="Services and Availability" />

            <div className="space-y-4 text-slate-600 leading-7">
              <p>
                Features and services may change, be unavailable, or be limited by location or other
                conditions.
              </p>

              <p>
                A description on the website is not a confirmation that a refund or other
                transaction has been completed.
              </p>

              <p>
                Any service that Flydealhub actually provides should be explained clearly, including
                applicable charges, conditions, and confirmation procedures.
              </p>
            </div>
          </section>

          {/* 04 */}
          <section>
            <SectionTitle number="04" title="Third-Party Providers" />

            <div className="space-y-4 text-slate-600 leading-7">
              <p>
                The website may refer or link to airlines, hotels, travel suppliers, or other third
                parties.
              </p>

              <p>
                Those providers operate under their own terms, conditions, availability, and privacy
                policies.
              </p>

              <p>
                Unless expressly stated in a separate, accurate agreement, Flydealhub does not
                represent that it owns, operates, or controls those third-party services.
              </p>

              <p>
                A link or reference does not imply a commercial relationship, sponsorship,
                authorization, or endorsement.
              </p>
            </div>
          </section>

          {/* 05 */}
          <section>
            <SectionTitle number="05" title="Prices, Schedules, and Provider Rules" />

            <div className="space-y-4 text-slate-600 leading-7">
              <p>
                Travel prices, availability, schedules, baggage rules, entry requirements, and
                provider policies can change without notice.
              </p>

              <p>
                Any third-party price or policy shown on the website should be treated according to
                its stated source and time of retrieval.
              </p>

              <p>The relevant provider's confirmed terms govern its service.</p>
            </div>
          </section>

          {/* 06 */}
          <section>
            <SectionTitle number="06" title="User Conduct" />

            <p className="text-slate-600 leading-7 mb-5">You agree not to:</p>

            <ul className="space-y-3">
              {[
                'Use the website for unlawful, deceptive, or fraudulent purposes.',
                'Attempt unauthorized access to the website, its systems, or accounts.',
                'Introduce malicious code or interfere with website operation.',
                'Submit information that you know is false or that you are not entitled to share.',
                'Copy or misuse website content in violation of applicable law or third-party rights.',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-600 leading-7">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 07 */}
          <section>
            <SectionTitle number="07" title="Intellectual Property" />

            <div className="space-y-4 text-slate-600 leading-7">
              <p>
                Unless otherwise indicated, the website's original text, design, and materials are
                owned by or used with permission by the relevant rights holder.
              </p>

              <p>You may access and use the website for lawful personal purposes.</p>

              <p>
                Do not reproduce or commercially exploit protected material without appropriate
                permission.
              </p>

              <p>Third-party trademarks remain the property of their respective owners.</p>
            </div>
          </section>

          {/* 08 */}
          <section>
            <SectionTitle number="08" title="Disclaimers" />

            <div className="space-y-4 text-slate-600 leading-7">
              <p>
                To the extent permitted by law, the website is provided on an
                <strong className="font-semibold text-slate-800">
                  {' '}
                  “as is” and “as available”
                </strong>{' '}
                basis.
              </p>

              <p>
                Nothing in these terms excludes a consumer right, guarantee, or liability that
                cannot lawfully be excluded.
              </p>

              <p>See the Disclaimer page for additional information.</p>
            </div>

            <Link
              to="/disclaimer"
              className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              View Disclaimer
              <span>→</span>
            </Link>
          </section>

          {/* 09 */}
          <section>
            <SectionTitle number="09" title="Limitation of Liability" />

            <div className="space-y-4 text-slate-600 leading-7">
              <p>
                To the extent permitted by applicable law, Flydealhub is not responsible for losses
                arising from reliance on general website information, third-party websites or
                services, provider decisions, interruptions, or events outside its reasonable
                control.
              </p>

              <p>
                This provision does not exclude liability where exclusion is prohibited by law, nor
                does it replace any specific obligations Flydealhub expressly accepts for a service.
              </p>
            </div>
          </section>

          {/* 10 */}
          <section>
            <SectionTitle number="10" title="Governing Law" />

            <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
              <div className="flex gap-3">
                <FiAlertCircle className="mt-1 flex-shrink-0 text-amber-600" />

                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Legal Information Required</h3>

                  <p className="text-sm leading-6 text-slate-600">
                    Insert the correct governing law, jurisdiction, and dispute-resolution terms
                    after confirming the legal entity operating the website and obtaining
                    appropriate legal advice.
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Do not publish a jurisdiction that does not accurately apply to the business.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Important Notice */}
          <section className="border-t border-slate-200 pt-10">
            <div className="rounded-2xl bg-slate-900 p-7 md:p-8 text-white">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <FiShield size={20} />
                </div>

                <div>
                  <h2 className="text-xl font-semibold">Important Notice</h2>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    These Terms &amp; Conditions should accurately reflect the services, business
                    structure, and jurisdiction applicable to Flydealhub. Review the final version
                    with appropriate legal counsel before publication.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default TermsConditions;
