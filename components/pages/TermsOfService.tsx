"use client";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { COMPANY } from "@/lib/siteData";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="py-16 bg-brand-forest text-white">
        <div className="container max-w-4xl mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-gray-300 text-lg">Last updated: May 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-4 space-y-10 text-gray-700 leading-relaxed">

          <div>
            <h2 className="font-display text-2xl font-bold text-brand-forest mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the website at <strong>onthegomoving.com</strong> (the "Site") or requesting moving, storage, or related services from <strong>On The Go Moving &amp; Storage</strong> ("Company," "we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Site or our services.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-brand-forest mb-3">2. Services</h2>
            <p>
              On The Go Moving &amp; Storage provides residential moving, commercial moving, packing, storage, and related relocation services in the greater Seattle, Washington area. All services are subject to a separate written service agreement or estimate provided at the time of booking.
            </p>
            <p className="mt-3">
              Quotes and estimates provided on this Site or by phone are non-binding until confirmed in writing. Final pricing may vary based on actual move conditions, access, weight, distance, and additional services requested.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-brand-forest mb-3">3. Use of the Site</h2>
            <p>You agree to use the Site only for lawful purposes and in a manner that does not infringe the rights of others. You agree not to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-3">
              <li>Use the Site to transmit spam, malware, or harmful content</li>
              <li>Attempt to gain unauthorized access to any portion of the Site or its related systems</li>
              <li>Scrape, copy, or reproduce Site content without our prior written consent</li>
              <li>Use the Site in any way that could damage, disable, or impair its functionality</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-brand-forest mb-3">4. Booking and Cancellation</h2>
            <p>
              When you request a quote or schedule a move through the Site, you authorize us to contact you by phone, email, or text message regarding your inquiry. Bookings are confirmed only upon receipt of a signed service agreement and any required deposit.
            </p>
            <p className="mt-3">
              Cancellation policies are outlined in your individual service agreement. In general, cancellations made less than 48 hours before a scheduled move may be subject to a cancellation fee. Please contact us directly to discuss your specific situation.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-brand-forest mb-3">5. Liability and Released Items</h2>
            <p>
              On The Go Moving &amp; Storage carries standard moving liability coverage as required by Washington State law. Our liability for loss or damage to your belongings is governed by the terms of your service agreement and applicable federal and state regulations.
            </p>
            <p className="mt-3">
              Certain items are non-allowable and cannot be transported or stored, including but not limited to: hazardous materials, perishable goods, live plants, pets, firearms, and items of extraordinary value without prior written disclosure. We are not liable for damage to items we were not informed of or that were packed by the customer.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-brand-forest mb-3">6. Storage Services</h2>
            <p>
              Storage services are provided at our Redmond, WA facility in standard vaults measuring 7 feet tall × 5 feet wide × 7 feet deep. Storage terms, including access, insurance requirements, and payment schedules, are governed by a separate storage agreement. We are not responsible for items stored without a signed storage agreement.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-brand-forest mb-3">7. Intellectual Property</h2>
            <p>
              All content on this Site, including text, images, logos, graphics, and video, is the property of On The Go Moving &amp; Storage or its content suppliers and is protected by applicable copyright and trademark laws. You may not reproduce, distribute, or create derivative works from Site content without our express written permission.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-brand-forest mb-3">8. Disclaimer of Warranties</h2>
            <p>
              The Site and its content are provided "as is" without warranties of any kind, either express or implied. We do not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components. We make no warranties regarding the accuracy, completeness, or timeliness of any information on the Site.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-brand-forest mb-3">9. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, On The Go Moving &amp; Storage shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Site or our services, even if we have been advised of the possibility of such damages. Our total liability for any claim arising from your use of the Site shall not exceed $100.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-brand-forest mb-3">10. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the State of Washington, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved exclusively in the state or federal courts located in King County, Washington.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-brand-forest mb-3">11. Changes to These Terms</h2>
            <p>
              We reserve the right to update these Terms at any time. Changes will be posted on this page with an updated "Last updated" date. Your continued use of the Site after any changes constitutes your acceptance of the revised Terms.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-brand-forest mb-3">12. Contact Us</h2>
            <p>If you have questions about these Terms of Service, please contact us:</p>
            <div className="bg-gray-50 rounded-xl p-6 mt-4">
              <p className="font-bold text-brand-forest">{COMPANY.name}</p>
              <p>{COMPANY.address}</p>
              <p>Phone: <a href={COMPANY.phoneHref} className="text-brand-green hover:underline">{COMPANY.phone}</a></p>
              <p>Email: <a href={`mailto:${COMPANY.email}`} className="text-brand-green hover:underline">{COMPANY.email}</a></p>
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
}
