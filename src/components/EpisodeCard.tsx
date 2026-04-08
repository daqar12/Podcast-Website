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
      {/* Card Wrapper: Dark luxury theme with red glow on hover */}
      <div className="group bg-[#0a0a0a] rounded-2xl p-3 border border-white/5 transition-all duration-500 hover:border-red-600/30 hover:-translate-y-2 cursor-pointer shadow-2xl">
        
        {/* Image Section */}
        <div className="relative w-full h-48 mb-4 overflow-hidden rounded-xl"> 
          <img 
            src={episode.imageUrl} 
            alt={episode.title}
            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
          />
          
          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
          
          {/* Premium Red Badge */}
          <div className="absolute top-3 left-3">
             <span className="bg-red-600 text-white px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-[0.15em] shadow-xl">
                Trending 
             </span>
          </div>

          {/* Play Icon - Glassmorphism style */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white p-4 rounded-full shadow-2xl">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Text Content */}
        <div className="px-1 pb-2">
          {/* Metadata Row */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[9px] font-bold text-red-600 uppercase tracking-widest">{episode.date}</span>
            <span className="w-1 h-1 bg-white/20 rounded-full"></span>
            <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">{episode.duration}</span>
          </div>

          {/* Title - Bold & Modern */}
          <h3 className="text-base font-black text-white mb-2 line-clamp-1 uppercase tracking-tighter group-hover:text-red-500 transition-colors duration-300">
            {episode.title}
          </h3>
          
          {/* Description - Refined Font */}
          <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 font-light mb-4">
            {episode.description}
          </p>

          {/* Action Footer */}
          <div className="flex items-center justify-between pt-3 border-t border-white/5">
             <span className="text-[10px] font-black text-white uppercase tracking-widest group-hover:translate-x-1 transition-transform">
               Listen Now —
             </span>
             <svg className="w-4 h-4 text-red-600 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
             </svg>
          </div>
        </div>
      </div>
    </Link>
  )
}