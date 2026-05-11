"use client";

// ON THE GO MOVING — Blog Index
// Design: Clean Pacific Utility — forest green hero, off-white card grid
// AEO Strategy: Category filtering, rich post cards, internal links to service/location pages
// Data: 230 posts imported from /lib/blogPosts.ts (auto-generated from WordPress scrape)
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Calendar, Tag, Search } from "lucide-react";
import { BRAND_IMAGES } from "@/lib/brandImages";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/blogPosts";
import { useSEO, MOVING_COMPANY_SCHEMA } from "@/hooks/useSEO";

export { BLOG_POSTS } from "@/lib/blogPosts";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useSEO({
    title: "Moving Tips & Guides Blog | On The Go Moving & Storage",
    description: "Expert moving tips, packing guides, and local Seattle area advice from On The Go Moving & Storage. 50,000+ moves completed since 2009.",
    canonical: "https://onthegomoving.com/blog/",
    ogType: "website",
    schema: [MOVING_COMPANY_SCHEMA],
  });

  const filtered = BLOG_POSTS.filter(post => {
    const matchCat = activeCategory === "All" || post.category === activeCategory;
    const matchSearch = searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = BLOG_POSTS[0];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[72px]">
        {/* HERO */}
        <section
          className="relative py-16 flex items-center"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(15,40,10,0.93) 55%, rgba(15,40,10,0.70) 100%), url(${BRAND_IMAGES.teamFleet})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container relative z-10">
            <nav className="flex items-center gap-2 text-green-300/70 text-xs mb-5">
              <a href="/" className="hover:text-white">Home</a>
              <span>/</span>
              <span className="text-white">Blog</span>
            </nav>
            <p className="section-label text-[#75aa11] mb-2">Moving Tips &amp; Guides</p>
            <h1
              className="text-5xl lg:text-6xl font-extrabold text-white mb-4"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              The On The Go Moving Blog
            </h1>
            <p className="text-white/70 max-w-xl text-lg">
              Expert moving tips, local guides, pricing breakdowns, and everything you need to know about moving in the Seattle &amp; Eastside area.
            </p>
            <p className="text-white/50 text-sm mt-2">{BLOG_POSTS.length} articles</p>
          </div>
        </section>

        {/* FEATURED POST */}
        <section className="bg-white py-12 border-b border-gray-100">
          <div className="container">
            <p className="section-label text-[#75aa11] mb-4">Featured Article</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="rounded-2xl overflow-hidden shadow-md h-64">
                <img src={featured.image} alt={featured.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded-full inline-flex items-center gap-1 mb-3" style={{ backgroundColor: "#f0f7e6", color: "#75aa11" }}>
                  <Tag size={10} />{featured.category}
                </span>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {featured.title}
                </h2>
                <p className="text-gray-500 mb-4 leading-relaxed">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-5">
                  <span className="flex items-center gap-1"><Calendar size={13} />{featured.date}</span>
                  <span>{featured.readTime}</span>
                </div>
                <a href={`/${featured.slug}/`} className="btn-primary inline-flex items-center gap-2">
                  Read Article <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FILTER BAR */}
        <section className="bg-white py-4 border-b border-gray-100 sticky top-[72px] z-20">
          <div className="container flex flex-wrap items-center gap-3 justify-between">
            <div className="flex flex-wrap gap-2">
              {BLOG_CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all"
                  style={{
                    backgroundColor: activeCategory === cat ? "#75aa11" : "#f5f5f3",
                    color: activeCategory === cat ? "#fff" : "#555",
                    border: activeCategory === cat ? "1px solid #75aa11" : "1px solid #ddd",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="pl-8 pr-4 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-[#75aa11] w-48"
              />
            </div>
          </div>
        </section>

        {/* POST GRID */}
        <section className="py-14 bg-[#f5f5f3]">
          <div className="container">
            {filtered.length === 0 ? (
              <div className="text-center py-16 text-gray-400">
                <p className="text-lg">No articles found for "{searchQuery}"</p>
                <button onClick={() => { setSearchQuery(""); setActiveCategory("All"); }} className="mt-4 text-sm underline" style={{ color: "#75aa11" }}>
                  Clear filters
                </button>
              </div>
            ) : (
              <>
                <p className="text-sm text-gray-400 mb-6">{filtered.length} article{filtered.length !== 1 ? "s" : ""}{activeCategory !== "All" ? ` in ${activeCategory}` : ""}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filtered.map((post) => (
                    <a key={post.slug} href={`/${post.slug}/`}>
                      <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow group cursor-pointer h-full flex flex-col">
                        <div className="h-44 overflow-hidden">
                          <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="p-5 flex flex-col flex-1">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded-full flex items-center gap-1" style={{ backgroundColor: "#f0f7e6", color: "#75aa11" }}>
                              <Tag size={10} />{post.category}
                            </span>
                            <span className="text-xs text-gray-400">{post.readTime}</span>
                          </div>
                          <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#75aa11] transition-colors leading-snug flex-1" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                            {post.title}
                          </h2>
                          <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                          <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                            <span className="text-xs text-gray-400 flex items-center gap-1"><Calendar size={11} /> {post.date}</span>
                            <span className="flex items-center gap-1 font-bold text-sm" style={{ color: "#75aa11" }}>Read More <ArrowRight size={13} /></span>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* RELATED SERVICES CTA */}
        <section className="py-12 bg-white border-t border-gray-100">
          <div className="container">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6 text-center" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Ready to Move? Get a Free Quote
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
              {[
                { label: "Residential Moving", href: "/residential-moving/" },
                { label: "Apartment Moving", href: "/apartment-moving/" },
                { label: "Commercial Moving", href: "/commercial-moving/" },
                { label: "Packing Services", href: "/packing-services/" },
                { label: "Storage Services", href: "/storage-services/" },
                { label: "Staging Professionals", href: "/staging-professionals/" },
              ].map(s => (
                <a key={s.href} href={s.href} className="bg-[#f5f5f3] rounded-lg px-3 py-3 text-xs font-semibold text-gray-700 hover:shadow-md border border-gray-200 transition-all text-center block">
                  {s.label}
                </a>
              ))}
            </div>
            <div className="text-center">
              <a href="/contact-us/" className="btn-gold inline-flex items-center gap-2">
                Get My Free Quote <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
