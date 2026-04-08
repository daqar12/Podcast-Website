'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Subscribed with:', email)
    setEmail('')
    alert('Thank you for joining the community!')
  }

  return (
    <section className="relative bg-[#0a0a0a] rounded-[24px] p-8 md:p-10 text-center border border-white/5 overflow-hidden shadow-2xl">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-40 h-40 bg-red-600/10 blur-[80px] rounded-full"></div>
      
      <div className="relative z-10">
        <h2 className="text-2xl md:text-3xl font-black mb-3 tracking-tighter uppercase text-white">
          Stay in the <span className="text-red-600">Loop</span>
        </h2>
        <p className="text-sm text-gray-400 mb-8 max-w-sm mx-auto font-light leading-relaxed">
          Get the latest episodes, announcements, and <span className="text-white">exclusive content</span> delivered directly to you.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all"
            required
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-bold text-[11px] uppercase tracking-widest px-8 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-red-600/10 active:scale-95 whitespace-nowrap"
          >
            Join Now
          </button>
        </form>
        
        <p className="text-[10px] mt-5 text-gray-600 uppercase tracking-widest font-medium">
          No spam. Unsubscribe at any time.
        </p>
      </div>
    </section>
  )
}