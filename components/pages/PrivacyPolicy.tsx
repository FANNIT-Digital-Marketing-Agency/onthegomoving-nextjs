"use client";

// =============================================================================
// PrivacyPolicy.tsx
// Design: Clean, readable legal page with brand header and footer.
// =============================================================================
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COMPANY } from "@/lib/siteData";

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy | On The Go Moving & Storage";
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!el) { el = document.createElement("meta"); el.setAttribute("name", name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Privacy Policy for On The Go Moving & Storage. Learn how we collect, use, and protect your personal information.");
    setMeta("robots", "noindex, follow");
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-28 pb-8 bg-brand-forest text-white">
        <div className="container">
          <h1 className="font-display text-4xl font-black mb-2">Privacy Policy</h1>
          <p className="text-green-200">Last updated: January 1, 2024</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">

            <div>
              <h2 className="font-display text-2xl font-bold text-brand-forest mb-3">Introduction</h2>
              <p>
                On The Go Moving & Storage ("Company," "we," "us," or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at <strong>onthegomoving.com</strong> or contact us for moving services.
              </p>
              <p>
                Please read this policy carefully. If you disagree with its terms, please discontinue use of our website.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-brand-forest mb-3">Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <h3 className="font-semibold text-brand-forest text-lg mt-4 mb-2">Personal Information You Provide</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Name, email address, phone number, and mailing address</li>
                <li>Move details including origin and destination addresses, move date, and home size</li>
                <li>Payment information (processed securely through our payment processor, we do not store credit card numbers)</li>
                <li>Communications you send us via email, phone, or our contact form</li>
              </ul>
              <h3 className="font-semibold text-brand-forest text-lg mt-4 mb-2">Automatically Collected Information</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>IP address and browser type</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website addresses</li>
                <li>Device type and operating system</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-brand-forest mb-3">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide, operate, and improve our moving services</li>
                <li>Process and fulfill your moving quote requests and bookings</li>
                <li>Communicate with you about your move, including confirmations and updates</li>
                <li>Send you marketing communications (you may opt out at any time)</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Analyze website usage to improve user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-brand-forest mb-3">Sharing Your Information</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Service providers</strong> who assist us in operating our website and conducting our business (e.g., payment processors, email service providers)</li>
                <li><strong>Analytics providers</strong> such as Google Analytics to help us understand website usage</li>
                <li><strong>Law enforcement or government agencies</strong> when required by law or to protect our rights</li>
                <li><strong>Business successors</strong> in the event of a merger, acquisition, or sale of assets</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-brand-forest mb-3">Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, some portions of our website may not function properly.
              </p>
              <p>
                We use Google Analytics to analyze website traffic. Google Analytics uses cookies to collect information about how visitors use our site. For more information about how Google uses this data, visit <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">Google's Privacy Policy</a>.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-brand-forest mb-3">Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-brand-forest mb-3">Your Rights</h2>
              <p>Depending on your location, you may have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>The right to access the personal information we hold about you</li>
                <li>The right to correct inaccurate personal information</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to opt out of marketing communications</li>
                <li>The right to data portability</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, please contact us at <a href={`mailto:${COMPANY.email}`} className="text-brand-green hover:underline">{COMPANY.email}</a> or call <a href={COMPANY.phoneHref} className="text-brand-green hover:underline">{COMPANY.phone}</a>.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-brand-forest mb-3">Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-brand-forest mb-3">Children's Privacy</h2>
              <p>
                Our website is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected information from a child under 13, please contact us immediately.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-brand-forest mb-3">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated "Last updated" date. We encourage you to review this policy periodically.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-brand-forest mb-3">Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us:</p>
              <div className="bg-gray-50 rounded-xl p-6 mt-4">
                <p className="font-bold text-brand-forest">{COMPANY.name}</p>
                <p>{COMPANY.address}</p>
                <p>Phone: <a href={COMPANY.phoneHref} className="text-brand-green hover:underline">{COMPANY.phone}</a></p>
                <p>Email: <a href={`mailto:${COMPANY.email}`} className="text-brand-green hover:underline">{COMPANY.email}</a></p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
