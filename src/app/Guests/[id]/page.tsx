'use client';

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

// Guest type definition
interface Guest {
  id: number;
  name: string;
  title: string;
  profession: string;
  image: string;
  episode: string;
  episodeLink: string;
  duration: string;
  category: string;
  bio?: string;
  socialMedia?: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
  achievements?: string[];
}

export default function GuestDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [guest, setGuest] = useState<Guest | null>(null);
  const [loading, setLoading] = useState(true);

  // Sample guests data
  const guests: Guest[] = [
    {
      id: 1,
      name: "Dr. Aisha Mohamed",
      title: "Author & Education Specialist",
      profession: "Author & Educator",
      image: "/guest1.jpg",
      episode: "The Power of Storytelling in Education",
      episodeLink: "/episodes/1",
      duration: "45m",
      category: "Education",
      bio: "Dr. Aisha Mohamed is a renowned author and education specialist with over 15 years of experience in curriculum development and educational storytelling. Her work focuses on transforming traditional education through narrative techniques.",
      socialMedia: {
        twitter: "https://twitter.com/aishamohamed",
        linkedin: "https://linkedin.com/in/aishamohamed",
        website: "https://aishamohamed.com"
      },
      achievements: [
        "Published 5 bestselling books on education",
        "Keynote speaker at International Education Conference 2023",
        "Founder of Storytelling in Education Initiative"
      ]
    },
    {
      id: 2,
      name: "Omar Hassan",
      title: "CEO of TechInnovate",
      profession: "Tech Entrepreneur",
      image: "/guest2.jpg",
      episode: "Innovation and Startups in Africa",
      episodeLink: "/episodes/2",
      duration: "52m",
      category: "Technology",
      bio: "Omar Hassan is a visionary tech entrepreneur who founded TechInnovate, a company dedicated to fostering innovation and supporting startups across Africa. With a background in software engineering and business management, Omar has helped launch over 50 successful tech startups.",
      socialMedia: {
        twitter: "https://twitter.com/omarhassan",
        linkedin: "https://linkedin.com/in/omarhassan",
        website: "https://techinnovate.com"
      },
      achievements: [
        "Forbes 30 Under 30 - Technology 2023",
        "Raised $10M in Series A funding",
        "Mentored 100+ African entrepreneurs"
      ]
    },
    // Add other guests here...
  ];

  useEffect(() => {
    // Find guest by ID from URL parameters
    const guestId = parseInt(params.id as string);
    const foundGuest = guests.find(g => g.id === guestId);
    
    if (foundGuest) {
      setGuest(foundGuest);
    } else {
      // Redirect to guests page if guest not found
      router.push('/guests');
    }
    
    setLoading(false);
  }, [params.id, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-white to-primary-gray/30 dark:from-primary-black dark:to-gray-900">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-red"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!guest) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-white to-primary-gray/30 dark:from-primary-black dark:to-gray-900">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-primary-black dark:text-primary-white mb-4">
              Guest Not Found
            </h2>
            <Link href="/Guests" className="bg-primary-red text-primary-white px-6 py-3 rounded-full hover:bg-red-600 transition-colors">
              Back to Guests
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-white to-primary-gray/30 dark:from-primary-black dark:to-gray-900">
      <Header />

      {/* Guest Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-black via-primary-black to-gray-900 text-primary-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary-red rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary-yellow rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Guest Image */}
            <div className="lg:w-1/3">
              <div className="w-64 h-64 mx-auto lg:mx-0 bg-gradient-to-br from-primary-red to-primary-yellow rounded-full flex items-center justify-center relative overflow-hidden border-4 border-primary-white/20">
                <div className="w-60 h-60 bg-primary-black/20 rounded-full flex items-center justify-center">
                  <svg className="w-32 h-32 text-primary-white/70" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Guest Info */}
            <div className="lg:w-2/3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-primary-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-primary-white/20">
                <span className="text-sm font-medium">{guest.category}</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary-white to-primary-yellow bg-clip-text text-transparent">
                {guest.name}
              </h1>
              
              <p className="text-2xl text-primary-yellow font-semibold mb-6">
                {guest.title}
              </p>

              <p className="text-xl text-primary-gray mb-8 max-w-2xl">
                {guest.profession}
              </p>

              {/* Episode Info */}
              <div className="bg-primary-white/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-white/20">
                <h3 className="text-lg font-semibold mb-3">Featured Episode</h3>
                <p className="text-primary-white mb-2">{guest.episode}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary-yellow">{guest.duration}</span>
                  <Link href={guest.episodeLink}>
                    <button className="bg-primary-red hover:bg-red-600 text-primary-white px-6 py-2 rounded-full transition-colors flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                      Listen to Episode
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Details Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Biography */}
              <div className="bg-primary-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8 border border-primary-gray/20">
                <h2 className="text-3xl font-bold text-primary-black dark:text-primary-white mb-6">Biography</h2>
                <p className="text-primary-gray dark:text-primary-gray text-lg leading-relaxed">
                  {guest.bio}
                </p>
              </div>

              {/* Achievements */}
              {guest.achievements && guest.achievements.length > 0 && (
                <div className="bg-primary-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-primary-gray/20">
                  <h2 className="text-3xl font-bold text-primary-black dark:text-primary-white mb-6">Notable Achievements</h2>
                  <ul className="space-y-4">
                    {guest.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary-red rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-primary-gray dark:text-primary-gray text-lg">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Social Media */}
              {guest.socialMedia && (
                <div className="bg-primary-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-primary-gray/20">
                  <h3 className="text-xl font-bold text-primary-black dark:text-primary-white mb-4">Connect</h3>
                  <div className="space-y-3">
                    {guest.socialMedia.twitter && (
                      <a href={guest.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary-gray dark:text-primary-gray hover:text-primary-red transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                        Twitter
                      </a>
                    )}
                    {guest.socialMedia.linkedin && (
                      <a href={guest.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary-gray dark:text-primary-gray hover:text-primary-red transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        LinkedIn
                      </a>
                    )}
                    {guest.socialMedia.website && (
                      <a href={guest.socialMedia.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary-gray dark:text-primary-gray hover:text-primary-red transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9"/>
                        </svg>
                        Website
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* Back to Guests */}
              <div className="bg-primary-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-primary-gray/20">
                <Link href="/Guests" className="flex items-center gap-3 text-primary-gray dark:text-primary-gray hover:text-primary-red transition-colors group">
                  <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                  </svg>
                  Back to All Guests
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}