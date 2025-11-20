import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Newsletter from '../../components/Newsletter'

export default function SubscribePage() {
  const benefits = [
    'Exclusive bonus content',
    'Early access to new episodes',
    'Behind-the-scenes insights',
    'Monthly curated reading lists',
    'Invitations to live events'
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-primary-black">
      <Header />
      
      <section className="py-20 bg-gradient-to-br from-primary-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Subscribe & Stay Connected</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join our community and get exclusive content delivered to your inbox.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-primary-black dark:text-white mb-6">
                Why Subscribe?
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Form */}
            <div className="card p-8">
              <Newsletter />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}