import Header from '../../components/Header'
import Footer from '../../components/Footer'
import EpisodeCard from '../../components/EpisodeCard'
import episodesData from '@/src/lib/episodesData'



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
              <button className="bg-primary-red text-white px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-red-600">
                All Episodes
              </button>
              <button className="bg-primary-yellow text-black px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-yellow-600">
                Popular
              </button>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-gray-300">
                Season 1
              </button>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-gray-300">
                Season 2
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
              Showing <span className="font-semibold text-[#1A1A1A]">{episodesData.length}</span> episodes
            </p>
          </div>

          {/* Episodes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {episodesData.map((episode) => (
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