import Link from 'next/link'

interface EpisodeCardProps {
  episode: {
    id: number
    title: string
    description: string
    duration: string
    date: string
    imageUrl: string
  }
}

export default function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <Link href={`/episodes/${episode.id}`}>
      <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:-translate-y-2 border border-gray-100 overflow-hidden cursor-pointer">
        {/* Episode Image */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={episode.imageUrl} 
            alt={episode.title}
            className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
          
          {/* Episode Number Badge */}
          <div className="absolute bottom-4 left-4">
            <span className="bg-white/90 text-[#1A1A1A] px-3 py-1 rounded-full text-sm font-semibold">
              Episode {episode.id}
            </span>
          </div>
          
          {/* Play Button */}
          <div className="absolute top-4 right-4">
            <button className="bg-white/90 hover:bg-white text-[#1A1A1A] rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Episode Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#FF4F4F] transition-colors duration-300 line-clamp-1">
            {episode.title}
          </h3>
          
          <p className="text-gray-600 mb-6 leading-relaxed line-clamp-2">
            {episode.description}
          </p>
          
          {/* Bottom Section - Duration, Date, and Listen Now */}
          <div className="flex items-center justify-between">
            {/* Left Side - Duration and Date */}
            <div className="flex flex-col">
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-2xl font-bold text-[#FFCE00]">
                  {episode.duration.split(' ')[0]}
                </span>
                <span className="text-sm text-gray-500 font-medium">
                  min
                </span>
              </div>
              <span className="text-sm text-gray-500 font-medium">
                {episode.date}
              </span>
            </div>
            
            {/* Right Side - Listen Now Button */}
            <button className="text-[#FF4F4F] hover:text-red-600 font-semibold text-sm flex items-center group-hover:translate-x-1 transition-transform duration-300">
              Listen Now
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}