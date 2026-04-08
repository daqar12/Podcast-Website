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
    console.log('Form submitted:', formData)
    alert('Thank you for your message!')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-[#000000] text-white selection:bg-red-600">
      <Header />
      
      {/* Hero Section: Compact Medium Version */}
      <section className="relative py-12 md:py-16 bg-[#000000] overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent opacity-40" />
        
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase">
            Get In <span className="text-red-600">Touch</span>
          </h1>
          <p className="text-base text-gray-400 max-w-lg mx-auto font-light leading-relaxed">
            Ready to share a story or start a collaboration? 
            <span className="text-white block">We are just one message away.</span>
          </p>
        </div>
      </section>

      <section className="py-12 bg-[#000000]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            
            {/* Contact Information Side */}
            <div className="space-y-10">
              <div>
                <h2 className="text-xl font-bold text-white mb-6 flex items-center tracking-widest uppercase">
                  <span className="w-6 h-[2px] bg-red-600 mr-3"></span>
                  Contact Info
                </h2>
                
                <div className="space-y-6">
                  {[
                    { title: "General Support", detail: "hello@daqarpodcast.com" },
                    { title: "Business & Ads", detail: "partnerships@daqarpodcast.com" },
                    { title: "Working Hours", detail: "Sat — Thu: 9:00 AM - 6:00 PM" }
                  ].map((info, index) => (
                    <div key={index} className="group">
                      <h3 className="font-bold text-[10px] uppercase tracking-[0.2em] text-red-600 mb-1">
                        {info.title}
                      </h3>
                      <p className="text-base text-gray-300 group-hover:text-white transition-colors duration-300">
                        {info.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Connectivity */}
              <div className="pt-6 border-t border-white/5">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-4">
                  Follow the Pulse
                </h3>
                <div className="flex space-x-3">
                  {['T', 'I', 'S', 'Y'].map((platform) => (
                    <button
                      key={platform}
                      className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-300"
                    >
                      <span className="text-[10px] font-black">{platform}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Side - Scaled Down */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-red-600/5 rounded-2xl blur-xl group-hover:opacity-100 transition duration-1000"></div>
              
              <div className="relative bg-[#0a0a0a] p-6 rounded-2xl border border-white/10 shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-bold uppercase tracking-widest text-gray-500 ml-1">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Mohamed Abdi"
                        className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded-lg focus:outline-none focus:border-red-600 transition-all text-sm text-white placeholder:text-gray-800"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[9px] font-bold uppercase tracking-widest text-gray-500 ml-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@email.com"
                        className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded-lg focus:outline-none focus:border-red-600 transition-all text-sm text-white placeholder:text-gray-800"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[9px] font-bold uppercase tracking-widest text-gray-500 ml-1">Subject</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded-lg focus:outline-none focus:border-red-600 transition-all text-sm text-white appearance-none cursor-pointer"
                        required
                      >
                        <option value="" className="bg-[#0a0a0a]">Select category</option>
                        <option value="guest" className="bg-[#0a0a0a]">Guest</option>
                        <option value="ads" className="bg-[#0a0a0a]">Sponsorship</option>
                        <option value="other" className="bg-[#0a0a0a]">Other</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[9px] font-bold uppercase tracking-widest text-gray-500 ml-1">Message</label>
                      <textarea
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Hello..."
                        className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded-lg focus:outline-none focus:border-red-600 transition-all text-sm text-white placeholder:text-gray-800 resize-none"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest text-[10px] rounded-lg transition-all shadow-lg active:scale-95"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}