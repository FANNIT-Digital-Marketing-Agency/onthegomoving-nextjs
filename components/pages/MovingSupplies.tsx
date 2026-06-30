"use client";

// ON THE GO MOVING — Moving Supplies Page
// Design: Clean Pacific Utility — Forest green hero, gold CTAs, white content
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import { BRAND_IMAGES } from "@/lib/brandImages";
import { COMPANY } from "@/lib/siteData";
import { CheckCircle, Package, Phone, ShoppingCart, Truck, Star, AlertCircle } from "lucide-react";

// What OTGM brings on every move
const OTGM_PROVIDES = [
  { name: "Moving Blankets / Furniture Pads", desc: "Heavy-duty 80 lb blankets to protect furniture surfaces during loading, transport, and unloading." },
  { name: "Stretch Wrap / Shrink Wrap", desc: "Plastic film to bundle drawers, protect upholstery, and keep furniture pieces together." },
  { name: "Wardrobe Boxes", desc: "Tall hanging boxes so your clothes stay on hangers, no folding, no wrinkles." },
  { name: "Tape & Tape Gun", desc: "Heavy-duty packing tape and dispensers for sealing boxes quickly and securely." },
  { name: "Dollies & Hand Trucks", desc: "Furniture dollies and appliance hand trucks to move heavy items safely without damage." },
  { name: "Floor & Door Frame Protection", desc: "Protective coverings for hardwood floors and door frames to prevent scuffs and scratches." },
];

// What customers should have ready before move day
const CUSTOMER_SHOULD_BUY = [
  {
    name: "Moving Boxes (various sizes)",
    desc: "Small, medium, large, and extra-large boxes for your belongings. We recommend having these packed and ready before move day.",
    tip: "A typical 2-bedroom apartment needs 40–60 boxes. Call us for a free estimate.",
  },
  {
    name: "Packing Paper",
    desc: "Unprinted newsprint for wrapping dishes, glasses, and fragile items. Ink-free so it won't transfer to your belongings.",
    tip: "25 lbs of packing paper is enough for most kitchens.",
  },
  {
    name: "Bubble Wrap",
    desc: "Extra cushioning for fragile items like artwork, mirrors, and electronics. Great for items that need more protection than paper alone.",
    tip: "Use double-wall boxes for extra-fragile items.",
  },
  {
    name: "Mattress Bags",
    desc: "Plastic bags that keep mattresses clean during transport. Available in twin, full, queen, and king sizes.",
    tip: "Purchase these before move day, they slip on in seconds.",
  },
  {
    name: "Dish Pack Boxes",
    desc: "Reinforced double-wall boxes designed specifically for fragile kitchenware. Much stronger than standard boxes.",
    tip: "One dish pack box per 8–12 place settings is a good rule of thumb.",
  },
  {
    name: "Markers & Labels",
    desc: "Color-coded room labels and permanent markers to mark every box with its destination room and contents.",
    tip: "Label the top AND sides of every box, it saves time on unload day.",
  },
];

const FAQS = [
  {
    q: "Does On The Go Moving bring supplies to the job?",
    a: "Yes, our crew arrives with moving blankets, stretch wrap, tape, wardrobe boxes, dollies, and floor/door frame protection on every move. These are included in your move at no extra charge.",
  },
  {
    q: "What should I have ready before the movers arrive?",
    a: "We recommend having all your boxes packed and ready before move day. This keeps your move on schedule and ensures the crew can focus on loading rather than waiting. Items like mattress bags, dish packs, and labeled boxes make a big difference.",
  },
  {
    q: "Can I purchase boxes and packing materials from On The Go Moving?",
    a: "Yes, we carry boxes, packing paper, bubble wrap, mattress bags, and specialty boxes available for pickup at our Redmond, WA warehouse. Call us to check availability and pricing.",
  },
  {
    q: "How many boxes do I need for a 2-bedroom apartment?",
    a: "A typical 2-bedroom apartment requires 40–60 boxes: roughly 15 small, 20 medium, 10 large, and 5 specialty boxes (wardrobe, dish pack). We're happy to do a free estimate over the phone.",
  },
  {
    q: "Do you buy back unused boxes?",
    a: "Yes, we buy back clean, undamaged boxes after your move. Bring them to our Redmond warehouse within 30 days.",
  },
];

export default function MovingSupplies() {
  useEffect(() => {
    document.title = "Moving Boxes & Packing Supplies | On The Go Moving";
    const meta = document.querySelector("meta[name=\"description\"]");
    if (meta) meta.setAttribute("content", "Moving boxes, tape, bubble wrap & packing materials from On The Go Moving & Storage. Quality supplies for your Seattle-area move. Pickup in Redmond or delivered.");

    // Schema
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Store",
      "name": "On The Go Moving & Storage, Moving Supplies",
      "url": "https://onthegomoving.com/moving-supplies/",
      "telephone": COMPANY.phone,
      "address": { "@type": "PostalAddress", "addressLocality": "Redmond", "addressRegion": "WA", "postalCode": "98052" },
      "description": "Quality moving boxes, packing materials, bubble wrap, tape, and specialty protection supplies for your move.",
    });
    document.head.appendChild(schema);
    return () => { document.head.removeChild(schema); };
  }, []);

  return (
    <div className="min-h-screen bg-white font-body">
      <Header />

      {/* Hero */}
      <section
        className="relative py-20 bg-brand-forest text-white overflow-hidden"
        style={{ backgroundImage: `linear-gradient(rgba(30,60,30,0.85), rgba(30,60,30,0.92)), url(${BRAND_IMAGES.onTheGoTeam})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/40 text-brand-gold text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <Package className="w-3.5 h-3.5" /> Moving Supplies
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-black mb-4 leading-tight">
              What to Have Ready<br />
              <span className="text-brand-gold">Before Move Day</span>
            </h1>
            <p className="text-green-100 text-lg mb-8 max-w-xl">
              Our crew brings the blankets, wrap, tape, and equipment. Here's what we recommend you have packed and ready, so your move stays on schedule and nothing gets left behind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={COMPANY.phoneHref} className="inline-flex items-center justify-center gap-3 bg-brand-gold hover:bg-brand-gold-dark text-brand-forest font-bold text-lg px-8 py-4 rounded-lg transition-all hover:scale-105 shadow-lg">
                <Phone className="w-5 h-5" /> Call Us: {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-brand-green text-white py-3">
        <div className="container flex flex-wrap justify-center gap-6 text-sm font-semibold">
          {["Blankets & wrap included on every move", "Wardrobe boxes provided", "Floor & door frame protection", "Licensed & Insured HG-064180"].map((t, i) => (
            <span key={i} className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-brand-gold" />{t}</span>
          ))}
        </div>
      </div>

      {/* What OTGM brings */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-50 border border-brand-green/20 text-brand-green text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
              <CheckCircle className="w-3.5 h-3.5" /> Included With Your Move
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-black text-brand-forest mb-3">What Our Crew Brings</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Every On The Go Moving job includes professional-grade equipment and protection materials, no extra charge.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {OTGM_PROVIDES.map((item, i) => (
              <div key={i} className="bg-green-50/60 border border-brand-green/20 rounded-xl p-5 hover:border-brand-green/40 transition-all">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-bold text-brand-forest mb-1">{item.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What customer should have ready */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-300/40 text-amber-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
              <AlertCircle className="w-3.5 h-3.5" /> Before Move Day
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-black text-brand-forest mb-3">What We Recommend You Have Ready</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Having these items purchased and your boxes packed before the crew arrives keeps your move on schedule and prevents surprises. We can supply many of these items, call ahead to arrange pickup at our Redmond warehouse.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CUSTOMER_SHOULD_BUY.map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-brand-green/30 hover:shadow-sm transition-all">
                <div className="flex items-start gap-3">
                  <ShoppingCart className="w-5 h-5 text-brand-gold mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-bold text-brand-forest mb-1">{item.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-2">{item.desc}</p>
                    <p className="text-brand-green text-xs font-semibold italic">{item.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-brand-forest/5 border border-brand-forest/10 rounded-2xl p-6 text-center">
            <p className="text-gray-600 mb-2 font-medium">Need help estimating how many boxes or supplies you need?</p>
            <p className="text-gray-500 text-sm mb-4">Call us and we'll walk through your home size and give you a free supply estimate, no obligation.</p>
            <a href={COMPANY.phoneHref} className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-forest text-white font-bold px-8 py-3 rounded-lg transition-colors">
              <Phone className="w-4 h-4" /> {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Why buy from us */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="font-display text-2xl lg:text-3xl font-black text-brand-forest mb-8 text-center">Need to Purchase Supplies?</h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-10">We carry professional-grade boxes, packing paper, bubble wrap, mattress bags, and specialty protection materials at our Redmond warehouse. Call ahead to check availability.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Star className="w-6 h-6 text-brand-gold" />, title: "Professional Grade", desc: "The same boxes and materials our crews use on every move." },
              { icon: <Truck className="w-6 h-6 text-brand-gold" />, title: "Delivered With Your Move", desc: "Order supplies and have them delivered when our crew arrives, no extra trip." },
              { icon: <ShoppingCart className="w-6 h-6 text-brand-gold" />, title: "Buy-Back Program", desc: "Return clean, unused boxes within 30 days." },
              { icon: <CheckCircle className="w-6 h-6 text-brand-gold" />, title: "Expert Advice", desc: "Not sure what you need? Our team will estimate your supply list for free." },
            ].map((f, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center mx-auto mb-4">{f.icon}</div>
                <h3 className="font-bold text-brand-forest mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-3xl">
          <h2 className="font-display text-2xl lg:text-3xl font-black text-brand-forest mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-brand-forest mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-forest text-white">
        <div className="container text-center">
          <h2 className="font-display text-3xl font-black mb-4">Questions About Your Move?</h2>
          <p className="text-green-200 mb-8 max-w-xl mx-auto">Call us to discuss supplies, get a free estimate, or book your move. We're happy to help you prepare.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={COMPANY.phoneHref} className="inline-flex items-center justify-center gap-3 bg-brand-gold hover:bg-brand-gold-dark text-brand-forest font-bold text-lg px-8 py-4 rounded-lg transition-all hover:scale-105 shadow-lg">
              <Phone className="w-5 h-5" /> {COMPANY.phone}
            </a>
            <a href="/packing-services/">
              <span className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all cursor-pointer">
                View Packing Services
              </span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
