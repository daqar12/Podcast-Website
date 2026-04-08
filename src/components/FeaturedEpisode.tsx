import { FaMicrophone } from "react-icons/fa";
import EpisodeCard from "./EpisodeCard";
import Link from "next/link";

const episodesPod =[
  {
    id: 127,
    title: "Building Your Voice",
    description: "Discover how to develop and strengthen your unique voice in storytelling.",
    duration: "38 min",
    date: "Nov 15, 2024",
    imageUrl: "https://videocdn.cdnpk.net/videos/b3a8f007-e80a-5d2f-9929-c0b28e8d8260/horizontal/thumbnails/large.jpg?semt=ais_hybrid&item_id=4388987&w=740&q=80",
  },
  // ... rest of your episodes
];

export default function FeaturedEpisode() {
  return (
    <>
      <section className="py-12 bg-[#000000]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-[10px] font-bold text-gray-500 mb-6 flex items-center gap-3 tracking-[0.3em] uppercase">
            <span className="w-8 h-[1px] bg-red-600"></span>
            Featured Conversation
          </h2>

          <div className="bg-[#0a0a0a] rounded-3xl p-6 md:p-10 border border-white/5 shadow-2xl flex flex-col md:flex-row items-center gap-10 relative overflow-hidden">
             {/* Subtle Red Background Glow */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 blur-[100px] -z-10"></div>

            {/* LEFT: Text Content */}
            <div className="flex-1 text-center md:text-left order-2 md:order-1">
              <div className="inline-flex items-center gap-2 mb-4 justify-center md:justify-start bg-white/5 px-3 py-1 rounded-full border border-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
                <span className="text-[9px] font-bold text-red-500 uppercase tracking-widest">
                  Trending Now
                </span>
              </div>

              <h3 className="text-2xl md:text-4xl font-black text-white mb-4 leading-tight tracking-tighter uppercase">
                The Art of <br /> <span className="text-red-600">Conversation</span>
              </h3>

              <p className="text-gray-400 mb-8 leading-relaxed text-sm md:text-base font-light max-w-md">
                Join Host Mohamed as he sits down with global visionaries to discuss 
                the unspoken rules of human connection and deep storytelling.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl transition-all text-[11px] uppercase tracking-widest shadow-lg shadow-red-600/20 active:scale-95">
                  Play Episode
                </button>
              </div>
            </div>

            {/* RIGHT: Visualizing the Conversation */}
            <div className="relative order-1 md:order-2 flex-shrink-0">
              <div className="relative h-56 w-64 md:w-72 mx-auto">
                {/* Guest Image */}
                <div className="absolute left-0 top-0 z-10 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
                    alt="Guest Speaker"
                    className="w-32 h-32 md:w-36 md:h-36 rounded-2xl object-cover border-2 border-white/10 shadow-2xl"
                  />
                  <div className="absolute -bottom-2 right-2 bg-black/80 backdrop-blur-md px-2 py-1 rounded-md shadow-md text-[8px] font-black text-white border border-white/10 uppercase tracking-tighter">
                    Guest
                  </div>
                </div>

                {/* Mic Icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-red-600 p-2.5 rounded-full shadow-lg text-white text-sm border-2 border-black">
                  <FaMicrophone />
                </div>

                {/* Host Image */}
                <div className="absolute right-0 bottom-0 z-10 transform rotate-6 hover:rotate-0 transition-transform duration-500">
                  <img
                    src="https://www.daqar.online/daqar5.jpeg"
                    alt="Host Mohamed"
                    className="w-32 h-32 md:w-36 md:h-36 rounded-2xl object-cover border-2 border-white/10 shadow-2xl"
                  />
                  <div className="absolute -bottom-2 left-2 bg-red-600 px-2 py-1 rounded-md shadow-md text-[8px] font-black text-white uppercase tracking-tighter">
                    Host
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Episodes Section */}
      <section className="py-16 bg-[#000000] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3 uppercase tracking-tighter">
              Latest <span className="text-red-600">Episodes</span>
            </h2>
            <p className="text-sm text-gray-500 max-w-xl mx-auto font-light">
              Explore our most recent conversations about storytelling and human connection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {episodesPod.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/episodes" passHref>
              <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold py-3 px-10 rounded-xl transition-all text-[10px] uppercase tracking-[0.2em] hover:border-red-600/50">
                View All Episodes
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}