import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-primary-black">
      <Header />
      
      <section className="py-20 bg-gradient-to-br from-primary-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About the Podcast</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Learn more about our mission, our host, and the stories behind Stories That Resonate.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Host Photo and Info */}
            <div className="text-center lg:text-left">
              <div className="w-64 h-64 bg-gradient-to-br from-primary-red to-primary-yellow rounded-full mx-auto lg:mx-0 mb-8 overflow-hidden">
                {/* Host photo placeholder */}
                <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Host Photo"
                    // i need object fit cover in face top
                    className="object-cover object-top w-full h-full"
                  />
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-primary-black dark:text-white mb-4">
                Alex Chen
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Seasoned journalist and incredible storyteller with over a decade of experience.
              </p>
              
              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-4">
                {['Twitter', 'Instagram', 'LinkedIn', 'Spotify'].map((platform) => (
                  <button
                    key={platform}
                    className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary-red hover:text-white transition-colors"
                  >
                    {platform[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Podcast Story */}
            <div>
              <h3 className="text-2xl font-bold text-primary-black dark:text-white mb-6">
                Our Story
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  With over a decade of experience in media and storytelling, Alex started Stories That Resonate 
                  to create a platform for conversations that spark creativity and foster genuine human connections.
                </p>
                <p>
                  Our podcast dives deep into the art of storytelling, exploring how narratives shape our 
                  understanding of the world and bring people together. Each episode features meaningful 
                  conversations with creators, thinkers, and storytellers from various fields.
                </p>
                <p>
                  We believe that everyone has a story worth telling, and through these conversations, 
                  we aim to inspire our listeners to discover and share their own unique narratives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}