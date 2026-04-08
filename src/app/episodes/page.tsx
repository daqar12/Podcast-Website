import Header from '../../components/Header'
import Footer from '../../components/Footer'
import EpisodeCard from '../../components/EpisodeCard'
import episodesData from '@/src/lib/episodesData'

export default function EpisodesPage() {
  return (
    <div className="min-min-h-screen bg-[#000000] text-white selection:bg-red-600">
      <Header />
      
      {/* Medium Hero Section */}
      <section className="relative py-12 md:py-16 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent opacity-50" />
        
        <div className="relative max-w-5xl mx-auto px-4 text-center z-10">
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase">
            All <span className="text-red-600">Episodes</span>
          </h1>
          <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto font-light leading-relaxed">
            Browse through our complete library of conversations about storytelling, 
            technology, and the <span className="text-white">human connection.</span>
          </p>
        </div>
      </section>

      {/* Episodes Section */}
      <section className="py-12 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filters and Search - Medium Scale */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10">
            <div className="flex flex-wrap gap-2">
              {['All Episodes', 'Popular', 'Season 1', 'Season 2'].map((filter, index) => (
                <button 
                  key={index}
                  className={`px-5 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all border ${
                    index === 0 
                    ? "bg-red-600 border-red-600 text-white shadow-lg shadow-red-600/20" 
                    : "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/20"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            
            <div className="relative w-full lg:w-72">
              <input
                type="text"
                placeholder="SEARCH ARCHIVE..."
                className="w-full px-5 py-3 pl-11 bg-white/[0.03] border border-white/10 rounded-xl focus:outline-none focus:border-red-600 transition-all text-xs text-white placeholder:text-gray-700 uppercase tracking-widest"
              />
              <svg className="w-4 h-4 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Episodes Count & Metadata */}
          <div className="mb-8 flex items-center gap-4">
            <div className="h-[1px] flex-1 bg-white/5"></div>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em]">
              Showing <span className="text-white">{episodesData.length}</span> recorded sessions
            </p>
            <div className="h-[1px] flex-1 bg-white/5"></div>
          </div>

          {/* Episodes Grid - 4 Columns for Medium Feel */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {episodesData.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-16">
            <button className="group relative bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold py-4 px-12 rounded-xl transition-all text-[11px] uppercase tracking-[0.3em]">
              <span className="relative z-10">Load More</span>
              <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-5 transition-opacity rounded-xl"></div>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}