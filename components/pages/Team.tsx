"use client";

// ON THE GO MOVING — Team Page
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRAND_IMAGES } from "@/lib/brandImages";
import { COMPANY } from "@/lib/siteData";
import { CheckCircle, Phone, Shield, Star, Users, Award } from "lucide-react";

const VALUES = [
  { icon: <Shield className="w-6 h-6 text-brand-gold" />, title: "Background Checked", desc: "Every team member passes a thorough background check before their first day." },
  { icon: <Award className="w-6 h-6 text-brand-gold" />, title: "Professionally Trained", desc: "Our crews complete a structured training program covering safe lifting, furniture protection, and customer communication." },
  { icon: <Star className="w-6 h-6 text-brand-gold" />, title: "Customer-First Culture", desc: "We hire for attitude and train for skill. Every person on our team is selected for their commitment to service." },
  { icon: <Users className="w-6 h-6 text-brand-gold" />, title: "Long-Term Employees", desc: "Low turnover means you get experienced movers, not day laborers. Many of our crew members have been with us for 5+ years." },
];

export default function Team() {
  useEffect(() => {
    document.title = "Meet Our Seattle Moving Crew | On The Go Moving";
    const meta = document.querySelector("meta[name=\"description\"]");
    if (meta) meta.setAttribute("content", "Meet the On The Go Moving & Storage team. Background-checked, professionally trained movers who have been serving the Greater Seattle area since 2009.");
  }, []);

  return (
    <div className="min-h-screen bg-white font-body">
      <Header />

      {/* Hero */}
      <section
        className="relative py-20 bg-brand-forest text-white overflow-hidden"
        style={{ backgroundImage: `linear-gradient(rgba(20,50,20,0.80), rgba(20,50,20,0.88)), url(${BRAND_IMAGES.crewAction})`, backgroundSize: "cover", backgroundPosition: "center top" }}
      >
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/40 text-brand-gold text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <Users className="w-3.5 h-3.5" /> Our Team
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-black mb-4 leading-tight">
              The People Behind<br />
              <span className="text-brand-gold">Every Great Move</span>
            </h1>
            <p className="text-green-100 text-lg mb-8 max-w-xl">
              Our philosophy is simple: only hire individuals who understand that customer service is everything. When you trust us with your belongings, you deserve a team that treats them like their own.
            </p>
            <a href={COMPANY.phoneHref} className="inline-flex items-center justify-center gap-3 bg-brand-gold hover:bg-brand-gold-dark text-brand-forest font-bold text-lg px-8 py-4 rounded-lg transition-all hover:scale-105 shadow-lg">
              <Phone className="w-5 h-5" /> Meet Us: {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="bg-brand-green text-white py-4">
        <div className="container flex flex-wrap justify-center gap-8 text-center">
          {[
            { stat: "15+", label: "Years in Business" },
            { stat: "4.8★", label: "Google Rating" },
            { stat: "1,500+", label: "5-Star Reviews" },
            { stat: "100%", label: "Background Checked" },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-2xl font-black text-brand-gold">{s.stat}</div>
              <div className="text-xs text-green-200 font-semibold uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Philosophy */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl lg:text-4xl font-black text-brand-forest mb-4">
                We Hire for Character,<br />Train for Skill
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Since 2009, On The Go Moving & Storage has built its reputation on one principle: the quality of your move is only as good as the people doing it. That's why we are selective about who joins our team.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Every mover on our crew is a full-time, W-2 employee, not a day laborer or subcontractor. This means consistent quality, accountability, and a team that takes pride in their work because this is their career.
              </p>
              <p className="text-gray-600 leading-relaxed">
                You'll see the difference the moment our crew arrives: uniformed, professional, and ready to treat your home and belongings with the care they deserve.
              </p>
            </div>
            <div className="relative">
              <img src={BRAND_IMAGES.teamFleet} alt="On The Go Moving team" className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]" />
              <div className="absolute -bottom-4 -left-4 bg-brand-gold text-brand-forest font-bold text-sm px-4 py-2 rounded-lg shadow-lg">
                Serving Greater Seattle Since 2009
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="font-display text-2xl lg:text-3xl font-black text-brand-forest mb-10 text-center">What Sets Our Team Apart</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center mb-4">{v.icon}</div>
                <h3 className="font-bold text-brand-forest mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Crew photo */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl text-center">
          <h2 className="font-display text-2xl lg:text-3xl font-black text-brand-forest mb-4">A Team You Can Trust</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-8">
            From our office staff to our moving crews, everyone at On The Go Moving & Storage is committed to making your move as smooth and stress-free as possible. We're not just movers, we're your neighbors.
          </p>
          <img src={BRAND_IMAGES.heroMovingCrew} alt="On The Go Moving crew in action" className="rounded-2xl shadow-xl w-full object-cover max-h-80 mx-auto" />
        </div>
      </section>

      {/* Credentials */}
      <section className="py-12 bg-brand-forest/5 border-y border-brand-forest/10">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            {[
              { label: "WA State License", value: "HG-064180" },
              { label: "USDOT Number", value: "2120054" },
              { label: "MC Number", value: "740430" },
              { label: "Fully Insured", value: "Cargo & Liability" },
              { label: "BBB Accredited", value: "A+ Rating" },
            ].map((c, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-green" />
                <span className="text-sm text-gray-600"><span className="font-bold text-brand-forest">{c.label}:</span> {c.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-forest text-white">
        <div className="container text-center">
          <h2 className="font-display text-3xl font-black mb-4">Ready to Meet the Team?</h2>
          <p className="text-green-200 mb-8 max-w-xl mx-auto">Get a free quote and experience the On The Go Moving difference for yourself.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={COMPANY.phoneHref} className="inline-flex items-center justify-center gap-3 bg-brand-gold hover:bg-brand-gold-dark text-brand-forest font-bold text-lg px-8 py-4 rounded-lg transition-all hover:scale-105 shadow-lg">
              <Phone className="w-5 h-5" /> {COMPANY.phone}
            </a>
            <a href="/about-us/">
              <span className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all cursor-pointer">
                About Our Company
              </span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
