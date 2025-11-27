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
  {
    id: 129,
    title: "The Power of Listening",
    description: "Explore the skill of active listening in meaningful conversations.",
    duration: "42 min",
    date: "Nov 8, 2024",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
  },
  {
    id: 130,
    title: "Crafting a Narrative",
    description: "Learn the art of structuring compelling narratives that captivate audiences.",
    duration: "51 min",
    date: "Nov 1, 2024",
    imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop",
  },
  {
    id: 131,
    title: "Overcoming Creative Blocks",
    description: "Strategies to break through creative barriers and find inspiration.",
    duration: "36 min",
    date: "Oct 25, 2024",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
  },
  {
    id: 132,
    title: "The Interviewer's Craft",
    description: "Master the art of conducting engaging and insightful interviews.",
    duration: "39 min",
    date: "Oct 18, 2024",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
  },
  {
    id: 133,
    title: "Building a Community",
    description: "Create and nurture a community around your content and interests.",
    duration: "47 min",
    date: "Oct 11, 2024",
    imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop",
  },
];

export default function FeaturedEpisode() {
  return (
    <>
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-500 mb-8 pl-2 border-l-4 border-[#FF4F4F]">
            Featured Conversation
          </h2>

          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl flex flex-col md:flex-row items-center gap-10">
            {/* LEFT: Text Content */}
            <div className="flex-1 text-center md:text-left order-2 md:order-1">
              <div className="inline-flex items-center gap-2 mb-3 justify-center md:justify-start">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span className="text-sm font-semibold text-red-500 uppercase tracking-widest">
                  Trending Episode
                </span>
              </div>

              <h3 className="text-3xl lg:text-4xl font-extrabold text-[#1A1A1A] mb-4 leading-tight">
                Episode 128: <br /> The Art of Conversation
              </h3>

              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Join us as we explore how deep listening shapes our reality. In
                this episode, Host Mohamed sits down with author Sarah Jenkins
                to discuss the unspoken rules of human connection.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="bg-[#1A1A1A] hover:bg-black text-white font-semibold py-3 px-8 rounded-full transition-colors flex items-center justify-center gap-2 shadow-lg">
                  <span>▶</span> Play Episode
                </button>
                {/* <button className="text-gray-600 font-semibold hover:text-[#FF4F4F] transition-colors">
                   + Add to Playlist
                </button> */}
              </div>
            </div>

            {/* RIGHT: Visualizing the Conversation (Two People) */}
            <div className="relative order-1 md:order-2 flex-shrink-0">
              {/* Background Decor */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-100 rounded-full blur-2xl opacity-50"></div>

              <div className="relative h-64 w-72 md:w-80 mx-auto">
                {/* Guest Image (Left/Top) */}
                <div className="absolute left-0 top-0 z-10 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
                    alt="Guest Speaker"
                    className="w-36 h-36 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-xl"
                  />
                  <div className="absolute -bottom-3 right-4 bg-white px-3 py-1 rounded-full shadow-md text-xs font-bold text-gray-800 border border-gray-100">
                    Guest
                  </div>
                </div>

                {/* Connecting Line / Icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow-lg text-red-500 text-xl">
                  <FaMicrophone />
                </div>

                {/* Host Image (Right/Bottom) */}
                <div className="absolute right-0 bottom-0 z-10 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <img
                    src="https://www.daqar.online/daqar5.jpeg"
                    alt="Host Mohamed"
                    className="w-36 h-36 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-xl"
                  />
                  <div className="absolute -bottom-3 left-4 bg-[#FF4F4F] px-3 py-1 rounded-full shadow-md text-xs font-bold text-white">
                    Host
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">
              Latest Episodes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our most recent conversations about storytelling and human
              connection
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {episodesPod.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />))}
          </div>
          <div className="text-center mt-12">
            <Link href="/episodes" passHref>
              <button className="bg-[#FF4F4F] hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                View All Episodes
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
