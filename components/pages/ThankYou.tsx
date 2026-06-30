"use client";

// ON THE GO MOVING — Thank You / Quote Confirmation Page
// Design: Clean Pacific Utility — trust-building post-conversion experience
// Conversion: GTM dataLayer push + GA4 event on mount
// ==========================================================================

import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Phone, Clock, Star, ArrowRight } from "lucide-react";
import { BRAND_IMAGES } from "@/lib/brandImages";

declare global {
  interface Window {
    dataLayer?: object[];
    gtag?: (...args: unknown[]) => void;
  }
}

export default function ThankYou() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "quote_form_submission",
        event_category: "Lead",
        event_label: "Quote Request Submitted",
        value: 1,
      });
      if (typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", {
          event_category: "Lead",
          event_label: "Quote Request",
          value: 1,
          currency: "USD",
        });
      }
    }
    document.title = "Thank You, Quote Request Received | On The Go Moving";
    // noindex — conversion confirmation page should not be indexed
    let robotsMeta = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
    if (!robotsMeta) { robotsMeta = document.createElement("meta"); robotsMeta.setAttribute("name", "robots"); document.head.appendChild(robotsMeta); }
    robotsMeta.setAttribute("content", "noindex, nofollow");
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[72px]">

        {/* CONFIRMATION HERO */}
        <section
          className="py-20 text-center relative"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(15,40,10,0.92) 0%, rgba(15,40,10,0.80) 100%), url(${BRAND_IMAGES.teamFleet})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container relative z-10 max-w-2xl">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: "#75aa11" }}>
                <CheckCircle size={40} className="text-white" />
              </div>
            </div>
            <h1
              className="text-5xl lg:text-6xl font-extrabold text-white mb-4"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Your Quote Request Is In!
            </h1>
            <p className="text-white/80 text-xl mb-2">
              We've received your request and will be in touch shortly.
            </p>
            <p className="text-white/60 text-base">
              A member of our team will contact you within <strong className="text-white">1 business hour</strong> to confirm details and provide your free estimate.
            </p>
          </div>
        </section>

        {/* WHAT HAPPENS NEXT */}
        <section className="py-14 bg-white">
          <div className="container max-w-3xl">
            <h2
              className="text-3xl font-extrabold text-gray-900 mb-8 text-center"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              What Happens Next
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: "1",
                  title: "We Review Your Request",
                  body: "Our team reviews your move details and assigns an experienced crew to your job.",
                  icon: <Clock size={24} style={{ color: "#75aa11" }} />,
                },
                {
                  step: "2",
                  title: "We Contact You",
                  body: "A team member calls or emails you within 1 business hour to confirm details and answer questions.",
                  icon: <Phone size={24} style={{ color: "#75aa11" }} />,
                },
                {
                  step: "3",
                  title: "You're Confirmed",
                  body: "Once confirmed, you'll receive a written estimate and booking confirmation via email.",
                  icon: <CheckCircle size={24} style={{ color: "#75aa11" }} />,
                },
              ].map(item => (
                <div key={item.step} className="bg-[#f5f5f3] rounded-xl p-6 text-center">
                  <div className="flex justify-center mb-3">{item.icon}</div>
                  <div className="w-7 h-7 rounded-full text-white text-sm font-bold flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: "#1e3a0f" }}>
                    {item.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 rounded-xl border text-center" style={{ backgroundColor: "#f0f7e6", borderColor: "#75aa11" }}>
              <p className="text-gray-700 font-medium mb-1">Need to speak with someone right now?</p>
              <a href="tel:+14257618500" className="inline-flex items-center gap-2 font-bold text-lg" style={{ color: "#75aa11" }}>
                <Phone size={18} /> (425) 761-8500
              </a>
              <p className="text-gray-400 text-xs mt-1">Mon–Sat 8am–6pm · Redmond, WA</p>
            </div>
          </div>
        </section>

        {/* TRUST SIGNALS */}
        <section className="py-12 bg-[#f5f5f3] border-t border-gray-100">
          <div className="container max-w-3xl">
            <h2
              className="text-2xl font-extrabold text-gray-900 mb-6 text-center"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Why Thousands of Seattle-Area Families Trust On The Go Moving
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: "5-Star Reviews", value: "500+" },
                { label: "Years in Business", value: "17+" },
                { label: "Moves Completed", value: "25,000+" },
                { label: "Cities Served", value: "26" },
              ].map(stat => (
                <div key={stat.label} className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <p className="text-2xl font-extrabold" style={{ color: "#75aa11", fontFamily: "'Barlow Condensed', sans-serif" }}>
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4 items-center">
              <img src={BRAND_IMAGES.googleLogo} alt="Google Reviews" className="h-8 object-contain" />
              <img src={BRAND_IMAGES.yelpLogo} alt="Yelp Reviews" className="h-8 object-contain" />
              <img src={BRAND_IMAGES.angiLogo} alt="Angi Reviews" className="h-8 object-contain" />
            </div>
          </div>
        </section>

        {/* REVIEW REQUEST */}
        <section className="py-12 bg-white border-t border-gray-100">
          <div className="container max-w-2xl text-center">
            <div className="flex justify-center gap-1 mb-4">
              {[1,2,3,4,5].map(i => <Star key={i} size={24} fill="#fbc319" stroke="#fbc319" />)}
            </div>
            <h2
              className="text-2xl font-extrabold text-gray-900 mb-3"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Already Moved With Us? Leave a Review
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Your review helps other families in the Seattle area find a trustworthy moving company. It takes less than 2 minutes and means the world to our team.
            </p>
            <a
              href="https://www.google.com/maps?cid=7269224613204294736&action=write_review"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2"
            >
              Leave a Google Review <ArrowRight size={15} />
            </a>
          </div>
        </section>

        {/* EXPLORE MORE */}
        <section className="py-12 bg-[#f5f5f3] border-t border-gray-100">
          <div className="container max-w-3xl">
            <h2
              className="text-2xl font-extrabold text-gray-900 mb-6 text-center"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              While You Wait, Explore Our Moving Guides
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "How Much Do Movers Cost?", href: "/how-much-do-movers-cost/", desc: "Transparent pricing breakdown for local moves in the Seattle area." },
                { title: "Moving Tips & Guides", href: "/blog/", desc: "Expert advice on packing, planning, and everything in between." },
                { title: "FAQ", href: "/faq/", desc: "Answers to the most common questions about hiring movers." },
              ].map(item => (
                <a key={item.href} href={item.href}>
                  <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow group cursor-pointer h-full">
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#75aa11] transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </a>
              ))}
            </div>
            <div className="text-center mt-8">
              <a href="/" className="btn-primary inline-flex items-center gap-2">
                Back to Home <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
