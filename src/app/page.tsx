import Header from '../components/Header'
import Footer from '../components/Footer'
import EpisodeCard from '../components/EpisodeCard'

const episodesData = [
  {
    id: 127,
    title: "Building Your Voice",
    description: "Discover how to develop and strengthen your unique voice in storytelling.",
    duration: "38 min",
    date: "Nov 15, 2024",
    imageUrl: "https://videocdn.cdnpk.net/videos/b3a8f007-e80a-5d2f-9929-c0b28e8d8260/horizontal/thumbnails/large.jpg?semt=ais_hybrid&item_id=4388987&w=740&q=80"
  },
  {
    id: 129,
    title: "The Power of Listening",
    description: "Explore the skill of active listening in meaningful conversations.",
    duration: "42 min",
    date: "Nov 8, 2024",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },
  {
    id: 130,
    title: "Crafting a Narrative",
    description: "Learn the art of structuring compelling narratives that captivate audiences.",
    duration: "51 min",
    date: "Nov 1, 2024",
    imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop"
  },
  {
    id: 131,
    title: "Overcoming Creative Blocks",
    description: "Strategies to break through creative barriers and find inspiration.",
    duration: "36 min",
    date: "Oct 25, 2024",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
  },
  {
    id: 132,
    title: "The Interviewer's Craft",
    description: "Master the art of conducting engaging and insightful interviews.",
    duration: "39 min",
    date: "Oct 18, 2024",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
  },
  {
    id: 133,
    title: "Building a Community",
    description: "Create and nurture a community around your content and interests.",
    duration: "47 min",
    date: "Oct 11, 2024",
    imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop"
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-[#111] text-white overflow-hidden py-24 lg:py-32">
  
  {/* Background Decor (Glowing Blur) */}
  <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-indigo-600 rounded-full blur-3xl opacity-20"></div>
  <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-red-600 rounded-full blur-3xl opacity-10"></div>

  <div className="max-w-6xl mx-auto px-4 relative z-10">
    <div className="flex flex-col md:flex-row items-center gap-12">
      
      {/* LEFT: Text Content */}
      <div className="flex-1 text-center md:text-left">
        
        {/* Badge */}
        <span className="inline-block py-1 px-3 rounded-full bg-gray-800 border border-gray-700 text-xs font-semibold tracking-wider text-gray-300 mb-6">
          🎙️ SEASON 4 PREMIERE
        </span>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6">
          Stories That <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            Resonate
          </span>
        </h1>
        
        <p className="text-lg text-gray-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
          Conversations that dive deep into the heart of storytelling, creativity, and the unspoken human connection.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
          <button className="w-full sm:w-auto bg-[#FF4F4F] hover:bg-red-600 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-red-900/20">
            ▶ Play Latest Episode
          </button>
          {/* <button className="w-full sm:w-auto bg-transparent border border-gray-700 hover:border-gray-500 text-white font-medium py-4 px-8 rounded-full transition-colors">
            View All Episodes
          </button> */}
        </div>
      </div>

      {/* RIGHT: Visual Element */}
      <div className="flex-1 relative w-full max-w-md">
        {/* Decorative border ring */}
        <div className="absolute inset-0 border-2 border-gray-800 rounded-2xl transform rotate-3 scale-105"></div>
        
        {/* Main Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
          <img 
            src="https://www.keithconradmedia.com/wp-content/uploads/2021/07/at2020_03-1024x1024.png" 
            alt="Podcast Microphone" 
            className="w-full h-full object-cover"
          />
          {/* Text on Image */}
          <div className="absolute bottom-6 left-6 z-20">
            <p className="text-xs font-bold uppercase text-red-500 mb-1">Now Playing</p>
            <p className="text-white font-bold text-lg">The Art of Silence</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* Divider */}
      <div className="border-t border-gray-200"></div>

      {/* Featured Episode */}
      <section className="py-12">
  <div className="max-w-4xl mx-auto px-4">
    <h2 className="text-2xl font-bold text-gray-500 mb-6">Featured Episode</h2>

    <div className="
      bg-white rounded-lg p-6 border border-gray-200 
      flex flex-col md:flex-row items-center md:items-start 
      gap-6
    ">

      {/* Left Content */}
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-3xl font-bold text-[#1A1A1A] mb-4">
          Episode 128: The Art of Conversation
        </h3>

        <p className="text-gray-600 mb-6 leading-relaxed">
          A book for a real-world account of conversations can shape<br />
          and view and live stories we talk. Knowing people speak, be confronted.
        </p>

        <button className="
          bg-[#FF4F4F] hover:bg-red-600 text-white font-semibold 
          py-2 px-10 md:px-24 rounded-full transition-colors
        ">
          Play Episode
        </button>
      </div>

      {/* Right Circular Image */}
      <img
        src="https://i.pravatar.cc/301"
        alt="Episode Cover"
        className="w-40 h-40 md:w-32 md:h-32 rounded-full object-cover"
      />
    </div>
  </div>
</section>


      {/* Latest Episodes */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">Latest Episodes</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our most recent conversations about storytelling and human connection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {episodesData.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <button className="bg-[#FF4F4F] hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              View All Episodes
            </button>
          </div>
        </div>
      </section>

      {/* Meet Your Host */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm flex flex-col md:flex-row items-center gap-6">

            {/* IMAGE LEFT — Waan weyneeyay (w-60 h-60) */}
            <div className="w-full md:w-auto flex justify-center flex-shrink-0">
              <div className="w-60 h-60 rounded-xl overflow-hidden border border-gray-300 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Podcast Host"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* TEXT RIGHT */}
            <div className="flex-1 text-center md:text-left">
              {/* Waxaan yareeyay margin-ka (mb-4 -> mb-1) */}
              <h2 className="text-2xl font-bold text-blue-500 uppercase tracking-wide mb-1">
                Meet Your Host
              </h2>

              {/* Waxaan yareeyay margin-ka (mb-3 -> mb-2) */}
              <h3 className="text-3xl font-bold text-[#1A1A1A] mb-2">
                Alex Chen
              </h3>

              <p className="text-gray-600 leading-relaxed text-[16px]">
                Alex is a seasoned journalist and an incredible storyteller. With more than
                a decade of experience interviewing everyday people, he created this podcast
                to spark meaningful conversations that inspire, challenge, and connect us.
                His mission: to prove that everyone has a story worth telling.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Stay in the Loop */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-500 mb-6">Stay in the Loop</h2>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <p className="text-gray-600 mb-6 leading-relaxed">
              Subscribe to our newsletter for thinking the world is content outside announcements and more.
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
            <h3 className="text-xl font-bold mb-2">Episode 128: The Art of Conversation</h3>
            <p className="text-white/90">Now Playing</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}