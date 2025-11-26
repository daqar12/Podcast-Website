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

// Tusaale Shadow Color (Haddii loo baahdo Dynamic Color Shadow)
const dynamicShadowColor = 'rgba(100, 100, 100, 0.4)'; 

export default function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <Link href={`/episodes/${episode.id}`}>
      {/* Card Wrapper: White background, strong shadow, and hover effect */}
      <div 
        className="group bg-white rounded-xl p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:transform hover:-translate-y-1 cursor-pointer"
        style={{
          boxShadow: `0 10px 20px -5px ${dynamicShadowColor}, 0 0px 0px 0px rgba(0, 0, 0, 0.05)`,
        }}
      >
        
        {/* Qaybta Sawirka (Image Section) - Dhererka waa h-60, ballaca wuxuu qaadanayaa w-full */}
        <div className="relative w-full h-60 mb-4 overflow-hidden rounded-lg"> 
          <img 
            src={episode.imageUrl} 
            alt={episode.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 rounded-lg" 
          />
          
          {/* 🌑 GRADIENT KHAFIID AH OO HOOS KASOO BILAABMA (Subtle Black Gradient) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/50"></div>
          {/* 👆 Wuxuu ka bilaabmayaa hoos (from-black/30) wuxuuna ku dhamaanayaa kor (to-transparent) */}
          
          
          {/* Popular Badge Tusaale ah (Yellow) */}
          <div className="absolute top-3 left-3">
             <span className="bg-[#FFCE00] text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
               Popular 
             </span>
          </div>

          {/* Play Icon */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/80 text-[#FF4F4F] p-3 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Qaybta Content-ka Cad */}
        <div>
          {/* Title */}
          <h3 className="text-lg font-extrabold text-[#1A1A1A] mb-1 line-clamp-1 group-hover:text-[#FF4F4F] transition-colors duration-300">
            {episode.title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {episode.description}
          </p>

          {/* Bottom Row: Date and Duration */}
          <div className="flex justify-between items-center text-xs font-medium text-gray-500 pt-2 border-t border-gray-100">
             <span>{episode.date}</span>
             <span className="flex items-center space-x-1">
                <svg className="w-3 h-3 text-[#FF4F4F]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>{episode.duration}</span>
             </span>
          </div>
          
        </div>
        
      </div>
    </Link>
  )
}