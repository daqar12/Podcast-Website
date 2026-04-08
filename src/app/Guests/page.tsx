"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import { useState } from "react";

export default function GuestsPage() {
  const guests = [
    {
      id: 1,
      name: "Gillian flyn",
      title: "Author & Education Specialist",
      image:
        "https://www.shutterstock.com/editorial/image-editorial/OeTck218M8T3c82bMTcxOA==/gillian-flynn-1500w-9877383al.jpg",
      episode: "The Power of Storytelling in Education",
      episodeLink: "/episodes/1",
      duration: "45m",
      category: "Education",
    },
    {
      id: 2,
      name: "Tim Cook",
      title: "CEO of Apple",
      image:
        "https://images.axios.com/nwCyJlS9MLUQa7Rt7zXJu_1pztI=/0x53:7648x4355/1920x1080/2023/01/13/1673574464209.jpg?w=1920",
      episode: "Biography and Leadership at Apple",
      episodeLink: "/episodes/2",
      duration: "52m",
      category: "Technology",
    },
    {
      id: 3,
      name: "Fatima Ali",
      title: "Climate Action Advocate",
      image:
        "https://media.licdn.com/dms/image/v2/C5622AQFkFW1WLXLNAg/feedshare-shrink_800/feedshare-shrink_800/0/1630546765016?e=2147483647&v=beta&t=2jUtQ7og746d_hOl3Exyu8Qm5j1jqfERyMLOMKec89w",
      episode: "Climate Change: Stories from the Frontline",
      episodeLink: "/episodes/3",
      duration: "38m",
      category: "Environment",
    },
    {
      id: 8,
      name: "Jeff Bezos",
      title: "Founder & Executive Chairman",
      image:
        "https://media.gq.com.mx/photos/5f23041351bcbdbc95b13466/16:9/w_1920,c_limit/JEFF.jpg",
      episode: "Building the Future of Retail and Cloud",
      episodeLink: "/episodes/12",
      duration: "75m",
      category: "Technology",
    },
  ];

  const categories = [
    "All",
    "Education",
    "Technology",
    "Environment",
    "Arts",
    "Health",
    "Social Impact",
  ];
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredGuests =
    activeFilter === "All"
      ? guests
      : guests.filter((guest) => guest.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#000000] text-white selection:bg-red-600">
      <Header />

      {/* Hero Section - Compact Medium Version */}
      <section className="relative py-10 md:py-12 bg-[#000000] overflow-hidden border-b border-white/5">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/15 via-transparent to-transparent opacity-40"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 text-center z-10">
          {/* Minimal Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md rounded-full px-3 py-1 mb-4 border border-white/10">
            <div className="w-1 h-1 bg-red-600 rounded-full animate-pulse"></div>
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-red-500">
              Global Icons
            </span>
          </div>

          {/* Scaled Down Heading */}
          <h1 className="text-3xl md:text-5xl font-black mb-3 tracking-tighter uppercase leading-none">
            The <span className="text-red-600">Guests</span>
          </h1>

          {/* Refined Subtext */}
          <p className="text-sm md:text-base text-gray-400 max-w-lg mx-auto font-light leading-relaxed">
            Conversations with <span className="text-white">visionaries</span>{" "}
            and <span className="text-white">innovators</span> shaping our
            world.
          </p>
        </div>
      </section>

      {/* Modern Filter Bar - Slimmer padding */}
      <section className="py-4 sticky top-0 z-20 bg-[#000000]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-red-600 text-white shadow-lg"
                    : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Guests Grid - Reduced Gap and Card Size */}
      <section className="py-12 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGuests.map((guest) => (
              <div
                key={guest.id}
                className="group relative bg-[#0a0a0a] rounded-3xl overflow-hidden border border-white/5 hover:border-red-600/30 transition-all duration-500"
              >
                {/* Image Container - Height reduced from 380px to 280px */}
                <div className="relative h-[280px] overflow-hidden">
                  <img
                    src={guest.image}
                    alt={guest.name}
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>

                  {/* Category Badge - Smaller font */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">
                      {guest.category}
                    </span>
                  </div>
                </div>

                {/* Content - Adjusted padding and font sizes */}
                <div className="p-5 relative -mt-16">
                  <div className="bg-[#0a0a0a]/95 backdrop-blur-md p-5 rounded-2xl border border-white/5 shadow-xl">
                    <h3 className="text-xl font-bold text-white mb-0.5 group-hover:text-red-500 transition-colors line-clamp-1">
                      {guest.name}
                    </h3>
                    <p className="text-red-600 text-[10px] font-bold uppercase tracking-widest mb-3 line-clamp-1">
                      {guest.title}
                    </p>
                    <div className="h-[1px] w-full bg-white/5 mb-3"></div>
                    <p className="text-gray-400 text-xs italic mb-5 line-clamp-2">
                      "{guest.episode}"
                    </p>

                    <div className="flex gap-2">
                      <Link href={guest.episodeLink} className="flex-1">
                        <button className="w-full bg-white text-black hover:bg-red-600 hover:text-white font-bold py-2.5 rounded-lg transition-all duration-300 text-[10px] uppercase tracking-widest">
                          Watch
                        </button>
                      </Link>
                      <Link href={`/guests/${guest.id}`}>
                        <button className="px-4 bg-white/5 hover:bg-white/10 text-white border border-white/5 rounded-lg transition-all font-bold text-[10px] uppercase">
                          Bio
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredGuests.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-lg font-bold text-gray-500 uppercase tracking-widest">
                No Legends Found
              </h3>
              <button
                onClick={() => setActiveFilter("All")}
                className="mt-4 text-red-600 hover:text-white text-xs font-bold tracking-widest uppercase"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
