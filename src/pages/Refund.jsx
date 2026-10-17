import React from 'react';
import { FiArrowLeft, FiInfo, FiMail, FiShield } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const SectionTitle = ({ number, title }) => (
  <div className="flex items-start gap-4 mb-4">
    <span className="flex-shrink-0 text-sm font-semibold text-blue-600">{number}</span>

    <h2 className="text-xl md:text-2xl font-semibold text-slate-900">{title}</h2>
  </div>
);

const RefundPolicy = () => {
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
              Refund Policy
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Please review the information below to understand refund eligibility, applicable
              terms, and the procedures for submitting a refund-related request.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-6 py-14 md:py-20">
        <div className="max-w-3xl space-y-12">
          {/* 01 */}
          <section>
            <SectionTitle number="01" title="Important Information" />

            <p className="text-slate-600 leading-7">
              Refund eligibility depends on the specific product or service purchased, the terms
              disclosed at the time of purchase, the relevant provider's rules, and applicable law.
            </p>
          </section>

          {/* 02 */}
          <section>
            <SectionTitle number="02" title="Airline Tickets and Third-Party Travel Arrangements" />

            <div className="space-y-4 text-slate-600 leading-7">
              <p>
                If a travel arrangement is made directly with an airline or another travel provider,
                that provider's applicable terms and refund procedures generally apply.
              </p>

              <p>
                Contact the provider or the seller identified in your travel confirmation to
                determine who is responsible for processing your refund.
              </p>

              <p>
                Flydealhub cannot guarantee a refund for a transaction that it did not sell or
                process. Refund eligibility and approval depend on the responsible seller, provider,
                and applicable terms.
              </p>
            </div>
          </section>

          {/* 03 */}
          <section>
            <SectionTitle number="03" title="Services Purchased Directly from Flydealhub" />

            <div className="space-y-4 text-slate-600 leading-7">
              <p>
                For services purchased directly from Flydealhub, refund eligibility depends on the
                specific service, the terms disclosed before payment, and applicable law.
              </p>

              <p>
                Any applicable service fees, deductions, or refund conditions will be determined
                according to the terms applicable to the transaction.
              </p>
            </div>
          </section>

          {/* 04 */}
          <section>
            <SectionTitle number="04" title="How to Submit a Refund Request" />

            <div className="space-y-4 text-slate-600 leading-7">
              <p>
                To inquire about a refund, contact our support team using the details provided on
                the Contact Us page.
              </p>

              <p>
                Please include the transaction reference, the email address associated with the
                transaction, and a brief description of your request.
              </p>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex gap-3">
                  <FiInfo className="mt-1 flex-shrink-0 text-blue-600" />

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Security Reminder</h3>

                    <p className="text-sm leading-6 text-slate-600">
                      For your security, do not share complete payment-card details, passwords,
                      PINs, or one-time security codes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 05 */}
          <section>
            <SectionTitle number="05" title="Refund Review and Processing" />

            <p className="text-slate-600 leading-7">
              Refund requests are reviewed by the responsible seller or service provider according
              to the applicable terms and legal requirements.
            </p>

            <p className="mt-4 text-slate-600 leading-7">
              Where a refund is approved, the amount and processing time may depend on the payment
              provider, bank, original payment method, and applicable procedures.
            </p>
          </section>

          {/* 06 */}
          <section>
            <SectionTitle number="06" title="Duplicate or Incorrect Charges" />

            <div className="space-y-4 text-slate-600 leading-7">
              <p>
                If you believe you have been charged incorrectly or charged more than once, contact
                the seller or payment provider identified on your receipt.
              </p>

              <p>
                Provide the transaction reference and a description of the issue to help the
                responsible team investigate.
              </p>

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
                <div className="flex gap-3">
                  <FiShield className="mt-1 flex-shrink-0 text-amber-600" />

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Payment Security</h3>

                    <p className="text-sm leading-6 text-slate-600">
                      Never share your complete card number, PIN, password, or one-time security
                      code when reporting a payment issue.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 07 */}
          <section>
            <SectionTitle number="07" title="Legal Rights" />

            <p className="text-slate-600 leading-7">
              Nothing in this policy is intended to limit any mandatory consumer rights or remedies
              available under applicable law. Where this policy conflicts with a non-waivable legal
              right, the applicable legal requirement takes precedence.
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
                  <h2 className="text-xl font-semibold">Need Assistance?</h2>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    For refund-related questions or assistance, please contact the appropriate
                    support team using the contact details provided on the Contact Us page.
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

export default RefundPolicy;
