'use client'

import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-white dark:bg-primary-black">
      <Header />
      
      <section className="py-20 bg-gradient-to-br from-primary-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions, suggestions, or want to collaborate? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-primary-black dark:text-white mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg text-primary-black dark:text-white mb-2">
                    General Inquiries
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    hello@storiesthatresonate.com
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg text-primary-black dark:text-white mb-2">
                    Business & Collaboration
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    partnerships@storiesthatresonate.com
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg text-primary-black dark:text-white mb-2">
                    Press & Media
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    press@storiesthatresonate.com
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="font-semibold text-lg text-primary-black dark:text-white mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {['Twitter', 'Instagram', 'Spotify', 'YouTube'].map((platform) => (
                    <button
                      key={platform}
                      className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary-red hover:text-white transition-colors"
                    >
                      {platform[0]}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="press">Press</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-3"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}