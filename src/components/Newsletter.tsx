'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Subscribed with:', email)
    setEmail('')
    alert('Thank you for subscribing!')
  }

  return (
    <section className="bg-gradient-to-r from-primary-red to-primary-yellow rounded-3xl p-8 text-center text-white">
      <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
      <p className="text-lg mb-6 opacity-90">
        Subscribe to our newsletter for the latest episodes, announcements, and exclusive content.
      </p>
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-full text-primary-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
          required
        />
        <button
          type="submit"
          className="bg-primary-black hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-full transition-colors whitespace-nowrap"
        >
          Subscribe
        </button>
      </form>
      
      <p className="text-sm mt-4 opacity-75">
        No spam, unsubscribe at any time.
      </p>
    </section>
  )
}