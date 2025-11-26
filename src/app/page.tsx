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
      <div className="border-t border-gray-200"></div>

      {/* ============================================== */}
      {/* FEATURED EPISODE - UPDATED TO SHOW 2 PEOPLE    */}
      {/* ============================================== */}
      
      <FeaturedEpisode />

      

      {/* Meet Your Host */}
      <Host />

      {/* Stay in the Loop */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-500 mb-6">
            Stay in the Loop
          </h2>
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <p className="text-gray-600 mb-6 leading-relaxed">
              Subscribe to our newsletter for thinking the world is content
              outside announcements and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Story your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4F4F] focus:border-transparent"
              />
              <button className="bg-[#FF4F4F] hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-[#FF4F4F] text-white rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">
              Episode 128: The Art of Conversation
            </h3>
            <p className="text-white/90">Now Playing</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}