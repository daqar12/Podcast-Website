import Header from '../../components/Header'
import Footer from '../../components/Footer'
import EpisodeCard from '../../components/EpisodeCard'

const allEpisodes = [
  {
    id: 127,
    title: "Building Your Voice",
    description: "Discover how to develop and strengthen your unique voice in storytelling.",
    duration: "38 min",
    date: "Nov 15, 2024",
    imageUrl: "https://videocdn.cdnpk.net/videos/b3a8f007-e80a-5d2f-9929-c0b28e8d8260/horizontal/thumbnails/large.jpg?semt=ais_hybrid&item_id=4388987&w=740&q=80"
  },
  {
    id: 128,
    title: "The Art of Conversation",
    description: "Deep dive into how conversations can shape our views and stories.",
    duration: "45 min",
    date: "Nov 22, 2024",
    imageUrl: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=400&h=300&fit=crop"
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
  },
  {
    id: 134,
    title: "Storytelling in Business",
    description: "Using narrative techniques to enhance business communication.",
    duration: "44 min",
    date: "Oct 4, 2024",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
  },
  {
    id: 135,
    title: "The Psychology of Stories",
    description: "How stories affect our brains and shape our perceptions.",
    duration: "52 min",
    date: "Sep 27, 2024",
    imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
  },
  {
    id: 136,
    title: "Digital Storytelling",
    description: "Leveraging digital platforms for modern storytelling.",
    duration: "41 min",
    date: "Sep 20, 2024",
    imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop"
  },
  {
    id: 137,
    title: "Cultural Narratives",
    description: "Exploring how culture shapes the stories we tell.",
    duration: "48 min",
    date: "Sep 13, 2024",
    imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop"
  },
  {
    id: 138,
    title: "The Future of Podcasting",
    description: "Trends and innovations shaping the future of audio content.",
    duration: "50 min",
    date: "Sep 6, 2024",
    imageUrl: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=300&fit=crop"
  }
]

export default function EpisodesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1A1A1A] to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">All Episodes</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Browse through our complete library of conversations about storytelling and human connection.
          </p>
        </div>
      </section>

      {/* Episodes Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters and Search */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
            <div className="flex flex-wrap gap-2">
              <button className="bg-[#FF4F4F] text-white px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-red-600">
                All Episodes
              </button>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-gray-300">
                Season 1
              </button>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-gray-300">
                Season 2
              </button>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-gray-300">
                Season 3
              </button>
            </div>
            
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Search episodes..."
                className="w-full px-4 py-3 pl-10 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#FF4F4F] focus:border-transparent"
              />
              <svg className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Episodes Count */}
          <div className="mb-8">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-[#1A1A1A]">{allEpisodes.length}</span> episodes
            </p>
          </div>

          {/* Episodes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allEpisodes.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-[#FFCE00] hover:bg-yellow-500 text-[#1A1A1A] font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Load More Episodes
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}