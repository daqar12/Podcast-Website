import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function SubscribePage() {
  const plans = [
    {
      name: "Free Member",
      price: "$0",
      description: "Join the community and stay updated.",
      benefits: ['Weekly newsletter', 'Standard audio quality', 'Public episode access'],
      button: "Join Free",
      featured: false
    },
    {
      name: "Premium Listener",
      price: "$4.99",
      description: "Support the show and get the full experience.",
      benefits: ['Ad-free episodes', 'Exclusive bonus content', 'Early access', 'HD Audio quality'],
      button: "Go Premium",
      featured: true
    }
  ]

  return (
    <div className="min-h-screen bg-[#000000] text-white selection:bg-red-600">
      <Header />
      
      {/* Medium Hero Section */}
      <section className="relative py-12 md:py-16 bg-[#000000] overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/15 via-transparent to-transparent opacity-40" />
        
        <div className="relative max-w-5xl mx-auto px-4 text-center z-10">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md rounded-full px-3 py-1 mb-4 border border-white/10">
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-red-500">Membership</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-3 tracking-tighter uppercase">
            Support the <span className="text-red-600">Vision</span>
          </h1>
          <p className="text-sm md:text-base text-gray-400 max-w-lg mx-auto font-light leading-relaxed">
            Join a community of curious minds. Unlock <span className="text-white">exclusive episodes</span> and behind-the-scenes content.
          </p>
        </div>
      </section>

      {/* Pricing/Subscription Tiers */}
      <section className="py-12 bg-[#000000]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative p-6 rounded-2xl border transition-all duration-500 ${
                  plan.featured 
                  ? "bg-[#0a0a0a] border-red-600/50 shadow-[0_0_30px_rgba(220,38,38,0.1)]" 
                  : "bg-[#050505] border-white/5"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-6 bg-red-600 text-white text-[9px] font-black uppercase px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-black text-white">{plan.price}</span>
                  <span className="text-gray-500 text-xs font-bold uppercase">/ Month</span>
                </div>
                
                <p className="text-xs text-gray-400 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs text-gray-300">
                      <div className="w-4 h-4 rounded-full bg-red-600/10 flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {benefit}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all ${
                  plan.featured 
                  ? "bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/20" 
                  : "bg-white text-black hover:bg-gray-200"
                }`}>
                  {plan.button}
                </button>
              </div>
            ))}
          </div>

          {/* Secure Payment Note */}
          <div className="mt-12 text-center opacity-40">
            <p className="text-[10px] uppercase tracking-widest flex items-center justify-center gap-2">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm3 8H9V7c0-1.654 1.346-3 3-3s3 1.346 3 3v3z"/></svg>
              Secure payment via Stripe & PayPal
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}