import Header from "../components/Header";
import Footer from "../components/Footer";
import EpisodeCard from "../components/EpisodeCard";
import { FaMicrophone } from "react-icons/fa";
import Link from "next/link";
import Hero from "../components/Hero";
import episodesData from "../lib/episodesData";
import FeaturedEpisode from "../components/FeaturedEpisode";
import Host from "../components/Host";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      {/*  */}
      <Hero />

      {/* Divider */}

      {/* ============================================== */}
      {/* FEATURED EPISODE - UPDATED TO SHOW 2 PEOPLE    */}
      {/* ============================================== */}

      <FeaturedEpisode />

      {/* Meet Your Host */}
      <Host />

      {/* Stay in the Loop - Medium Scale */}
      <section className="py-12 bg-[#000000]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-[10px] font-bold text-gray-500 mb-6 tracking-[0.3em] uppercase flex items-center gap-3">
            <span className="w-8 h-[1px] bg-red-600"></span>
            Stay in the Loop
          </h2>

          <div className="bg-[#0a0a0a] rounded-2xl p-6 md:p-8 border border-white/5 shadow-2xl relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 blur-[60px]"></div>

            <p className="relative z-10 text-sm md:text-base text-gray-400 mb-6 leading-relaxed font-light max-w-lg">
              Subscribe to our newsletter for{" "}
              <span className="text-white">exclusive content</span>,
              behind-the-scenes updates, and global announcements.
            </p>

            <div className="relative z-10 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-red-600 transition-all placeholder:text-gray-700"
              />
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-10 rounded-xl transition-all text-[11px] uppercase tracking-widest shadow-lg shadow-red-600/10 active:scale-95 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section - Mini Player Style */}
      <section className="py-8 bg-[#000000]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="group relative bg-[#0a0a0a] rounded-2xl p-5 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 transition-all hover:border-red-600/30">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center shadow-lg shadow-red-600/20">
                <span className="text-white text-xs animate-pulse">▶</span>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-red-600 mb-0.5">
                  Now Playing
                </p>
                <h3 className="text-sm font-bold text-white uppercase tracking-tight">
                  Episode 128: The Art of Conversation
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] text-gray-500 font-mono tracking-tighter">
                04:22 / 38:00
              </span>
              <div className="w-24 h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-red-600"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
