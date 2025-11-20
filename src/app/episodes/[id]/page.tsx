import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import EpisodeCard from '../../../components/EpisodeCard'

// This would typically come from a database or API
const episodeDetails = {
  id: 128,
  title: "The Art of Conversation",
  subtitle: "Mastering the skill that shapes human connection",
  description: "In this deep dive episode, we explore how conversations can fundamentally shape our views, perspectives, and the stories we tell about our lives. Learn how people speak, connect, and build meaningful relationships through the art of conversation.",
  fullDescription: `
    <p>Conversation is more than just words exchanged between people—it's the foundation of human connection, understanding, and growth. In this comprehensive episode, we explore:</p>
    
    <p><strong>Key Topics Covered:</strong></p>
    <ul>
      <li>The psychology behind effective communication</li>
      <li>How conversations shape our personal narratives</li>
      <li>Techniques for active listening and meaningful engagement</li>
      <li>Cultural differences in conversational styles</li>
      <li>Building empathy through dialogue</li>
      <li>Overcoming communication barriers</li>
    </ul>

    <p>We interview leading communication experts and share real-world examples of how mastering conversation can transform personal and professional relationships. Whether you're looking to improve your networking skills, deepen personal connections, or become a better storyteller, this episode provides practical insights you can apply immediately.</p>

    <p>Join us as we unravel the complexities of human interaction and discover how the art of conversation can open doors to new opportunities, understanding, and personal growth.</p>
  `,
  duration: "45 min",
  date: "Nov 22, 2024",
  imageUrl: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=800&h=600&fit=crop",
  audioUrl: "/audio/episode-128.mp3",
  host: {
    name: "Alex Chen",
    role: "Host & Storyteller",
    bio: "Seasoned journalist with over a decade of experience in storytelling and conversation arts.",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
  },
  metadata: {
    listens: "15.2K",
    likes: "2.4K",
    shares: "856",
    season: 2,
    episode: 8
  },
  chapters: [
    { time: "00:00", title: "Introduction" },
    { time: "02:30", title: "The Power of First Impressions" },
    { time: "12:45", title: "Active Listening Techniques" },
    { time: "25:20", title: "Cultural Perspectives" },
    { time: "35:10", title: "Practical Exercises" },
    { time: "42:30", title: "Conclusion & Takeaways" }
  ],
  
  relatedEpisodes: [
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
}

export default function EpisodeDetailPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Artwork */}
      <section className="bg-gradient-to-br from-[#1A1A1A] to-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Episode Artwork */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#FF4F4F] to-[#FFCE00] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={episodeDetails.imageUrl} 
                  alt={episodeDetails.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Play Button Overlay */}
              <button className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors duration-300">
                <div className="bg-white/90 hover:bg-white text-[#1A1A1A] rounded-full w-20 h-20 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </button>
            </div>

            {/* Episode Info */}
            <div className="space-y-6">
              <div>
                <span className="text-[#FFCE00] font-semibold text-lg">Episode {episodeDetails.id}</span>
                <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">{episodeDetails.title}</h1>
                <p className="text-xl text-gray-300">{episodeDetails.subtitle}</p>
              </div>

              {/* Host Info */}
              <div className="flex items-center space-x-4">
                <img 
                  src={episodeDetails.host.imageUrl} 
                  alt={episodeDetails.host.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{episodeDetails.host.name}</p>
                  <p className="text-gray-400 text-sm">{episodeDetails.host.role}</p>
                </div>
              </div>

              {/* Episode Metadata */}
              <div className="flex flex-wrap gap-6 text-sm">
                <div>
                  <p className="text-gray-400">Duration</p>
                  <p className="font-semibold">{episodeDetails.duration}</p>
                </div>
                <div>
                  <p className="text-gray-400">Released</p>
                  <p className="font-semibold">{episodeDetails.date}</p>
                </div>
                <div>
                  <p className="text-gray-400">Listens</p>
                  <p className="font-semibold">{episodeDetails.metadata.listens}</p>
                </div>
                <div>
                  <p className="text-gray-400">Season</p>
                  <p className="font-semibold">{episodeDetails.metadata.season}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#FF4F4F] hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                  Play Episode
                </button>
                <button className="border border-white text-white hover:bg-white hover:text-[#1A1A1A] font-semibold py-3 px-8 rounded-full transition-all duration-300">
                  Download
                </button>
                <button className="border border-white text-white hover:bg-white hover:text-[#1A1A1A] font-semibold py-3 px-6 rounded-full transition-all duration-300">
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audio Player Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold text-lg">Now Playing</h3>
                <p className="text-gray-600">{episodeDetails.title}</p>
              </div>
              <div className="flex space-x-3">
                <button className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="w-12 h-12 bg-[#FF4F4F] hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-[#FF4F4F] w-1/3"></div>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>15:30</span>
                <span>{episodeDetails.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Full Description */}
              <div>
                <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">Episode Description</h2>
                <div 
                  className="text-gray-600 leading-relaxed space-y-4"
                  dangerouslySetInnerHTML={{ __html: episodeDetails.fullDescription }}
                />
              </div>

              {/* Chapters */}
              <div>
                <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">Episode Chapters</h2>
                <div className="space-y-3">
                  {episodeDetails.chapters.map((chapter, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex items-center space-x-4">
                        <span className="text-[#FF4F4F] font-semibold">{chapter.time}</span>
                        <span className="text-gray-700">{chapter.title}</span>
                      </div>
                      <button className="text-[#FF4F4F] hover:text-red-600">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Transcript */}
              {/* <div>
                <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">Transcript</h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <pre className="text-gray-600 whitespace-pre-wrap text-sm leading-relaxed">
                    {episodeDetails}
                  </pre>
                </div>
              </div> */}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Host Info */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">About the Host</h3>
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src={episodeDetails.host.imageUrl} 
                    alt={episodeDetails.host.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-lg">{episodeDetails.host.name}</p>
                    <p className="text-gray-600 text-sm">{episodeDetails.host.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{episodeDetails.host.bio}</p>
              </div>

              {/* Episode Stats */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Episode Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#FF4F4F]">{episodeDetails.metadata.listens}</p>
                    <p className="text-gray-600 text-sm">Listens</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#FF4F4F]">{episodeDetails.metadata.likes}</p>
                    <p className="text-gray-600 text-sm">Likes</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#FF4F4F]">{episodeDetails.metadata.shares}</p>
                    <p className="text-gray-600 text-sm">Shares</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#FF4F4F]">S{episodeDetails.metadata.season}E{episodeDetails.metadata.episode}</p>
                    <p className="text-gray-600 text-sm">Episode</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Episodes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">Related Episodes</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Continue your journey with these related conversations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {episodeDetails.relatedEpisodes.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}