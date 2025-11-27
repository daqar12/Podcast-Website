"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import { useState } from "react";

export default function GuestsPage() {
  // Sample guests data
  const guests = [
    {
      id: 1,
      name: "Gillian flyn",
      title: "Author & Education Specialist",
      profession: "Author & Educator",
      image:
        "https://www.shutterstock.com/editorial/image-editorial/OeTck218M8T3c82bMTcxOA==/gillian-flynn-1500w-9877383al.jpg",
      episode: "The Power of Storytelling in Education",
      episodeLink: "/episodes/1",
      duration: "45m",
      category: "Education",
    },
    {
      id: 2,
      name: "Tim Cook",
      title: "CEO of Apple",
      profession: "Tech EntrepreneurBusiness Executive, Tech Entrepreneur",
      image:
        "https://images.axios.com/nwCyJlS9MLUQa7Rt7zXJu_1pztI=/0x53:7648x4355/1920x1080/2023/01/13/1673574464209.jpg?w=1920",
      episode: "Biography and Leadership at Apple",
      episodeLink: "/episodes/2",
      duration: "52m",
      category: "Technology",
    },
    {
      id: 3,
      name: "Fatima Ali",
      title: "Climate Action Advocate",
      profession: "Environmental Activist",
      image:
        "https://media.licdn.com/dms/image/v2/C5622AQFkFW1WLXLNAg/feedshare-shrink_800/feedshare-shrink_800/0/1630546765016?e=2147483647&v=beta&t=2jUtQ7og746d_hOl3Exyu8Qm5j1jqfERyMLOMKec89w",
      episode: "Climate Change: Stories from the Frontline",
      episodeLink: "/episodes/3",
      duration: "38m",
      category: "Environment",
    },
    {
      id: 4,
      name: "Ahmed Yusuf",
      title: "Award-winning Director",
      profession: "Film Director",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=600&h=800",
      episode: "Visual Storytelling in Modern Cinema",
      episodeLink: "/episodes/4",
      duration: "61m",
      category: "Arts",
    },
    {
      id: 5,
      name: "Sarah Johnson",
      title: "Mental Health Expert",
      profession: "Psychologist",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=600&h=800",
      episode: "Mental Health in the Digital Age",
      episodeLink: "/episodes/5",
      duration: "49m",
      category: "Health",
    },
    {
      id: 6,
      name: "Barack Obama",
      title: "Social Impact Leader",
      profession: "Former President of the United States",
      image:
        "https://www.shutterstock.com/image-photo/former-us-president-barack-obama-600nw-2651705707.jpg",
      episode: "Building a Better Future for All",
      episodeLink: "/episodes/6",
      duration: "55m",
      category: "Social Impact",
    },
    {
      id: 7,
      name: "Leyla Abdi",
      title: "Financial Literacy Coach",
      profession: "Financial Advisor",
      image:
        "https://care.headway.co/cdn-cgi/image/width=500,quality=100,format=auto,fit=contain/https%3A%2F%2Fassets.headway.co%2Fprovider_photos%2F61200%2F668270e8-7db4-11ee-9a2b-0a58a9feac02-61200-1699392426173.jpeg",
      episode: "Mastering Your Money: Basics of Budgeting",
      episodeLink: "/episodes/7",
      duration: "33m",
      category: "Education",
    },
    // Martida Cusub 2
    {
      id: 8,
      name: "Jeff Bezos",
      title: "Founder & Executive Chairman",
      profession: "American Entrepreneur",
      image:
        "https://media.gq.com.mx/photos/5f23041351bcbdbc95b13466/16:9/w_1920,c_limit/JEFF.jpg",
      episode: "Building the Future of Retail and Cloud: The Amazon Story",
      episodeLink: "/episodes/12",
      duration: "75m",
      category: "Technology",
    },
  ];

  // Categories for filters
  const categories = [
    "All",
    "Education",
    "Technology",
    "Environment",
    "Arts",
    "Health",
    "Social Impact",
  ];

  // State for active filter
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter guests based on active filter
  const filteredGuests =
    activeFilter === "All"
      ? guests
      : guests.filter((guest) => guest.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-white to-primary-gray/30 dark:from-primary-black dark:to-gray-900">
      <Header />

      {/* Animated Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary-black via-primary-black to-gray-900 text-primary-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary-red rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-yellow rounded-full blur-3xl opacity-20 animate-float"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-red/50 rounded-full blur-3xl opacity-10"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 bg-primary-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-primary-white/20">
            <div className="w-2 h-2 bg-primary-red rounded-full animate-ping"></div>
            <span className="text-sm font-medium text-primary-white">
              Featured Guests
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-white to-primary-yellow bg-clip-text text-transparent">
            Our Guests
          </h1>
          <p className="text-xl md:text-2xl text-primary-gray max-w-3xl mx-auto leading-relaxed">
            Meet the incredible{" "}
            <span className="text-primary-yellow font-semibold">
              thought leaders
            </span>
            , innovators, and storytellers who have shared their wisdom on Daqar
            Talks.
          </p>
        </div>
      </section>

      {/* Interactive Filters Section */}
      <section className="py-8 sticky top-0 z-20 bg-gray-50 dark:bg-gray-900 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-md ${
                  activeFilter === category
                    ? "bg-primary-red text-white ring-2 ring-primary-yellow ring-offset-2 ring-offset-gray-50 dark:ring-offset-gray-900"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Guests Grid Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Count */}
          <div className="mb-8 text-center">
            <p className="text-primary-gray dark:text-primary-gray">
              Showing {filteredGuests.length} guest
              {filteredGuests.length !== 1 ? "s" : ""}
              {activeFilter !== "All" && ` in ${activeFilter}`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGuests.map((guest, index) => (
              <div
                key={guest.id}
                className="group relative bg-gradient-to-br from-primary-white to-primary-gray/10 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:transform hover:-translate-y-2 overflow-hidden border border-primary-gray/20 dark:border-gray-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-red to-primary-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10"></div>

                {/* Guest Photo with Modern Design - USING REGULAR IMG TAG */}
                <div className="relative h-[230px] overflow-hidden">
                  {/* ACTUAL GUEST IMAGE - Using regular img tag */}
                  <img
                    src={guest.image}
                    alt={guest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Dark Overlay on Hover */}
                  <div className="absolute inset-0 bg-primary-black/0 group-hover:bg-primary-black/30 transition-all duration-300"></div>

                  {/* Floating Badges */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary-white/95 text-primary-black px-3 py-1 rounded-xl text-xs font-bold shadow-lg backdrop-blur-sm">
                      {guest.category}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="bg-primary-red text-primary-white px-3 py-1 rounded-xl text-xs font-bold shadow-lg">
                      {guest.duration}
                    </span>
                  </div>

                  {/* Hover Play Button */}
                  <div className="absolute inset-0 bg-primary-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-primary-white text-primary-red rounded-full w-12 h-12 flex items-center justify-center shadow-2xl transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Guest Info */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-primary-black dark:text-primary-white mb-2 group-hover:text-primary-red transition-colors duration-300 line-clamp-1">
                    {guest.name}
                  </h3>
                  <p className="text-primary-red dark:text-primary-yellow font-semibold text-xs mb-2 line-clamp-1">
                    {guest.title}
                  </p>
                  <p className="text-primary-gray dark:text-primary-gray text-xs mb-3 line-clamp-2 leading-relaxed">
                    Featured in:{" "}
                    <span className="font-semibold text-primary-black dark:text-primary-white">
                      {guest.episode}
                    </span>
                  </p>

                  {/* Enhanced Action Buttons */}
                  <div className="flex space-x-2">
                    <Link href={guest.episodeLink} className="flex-1">
                      <button className="w-full bg-gradient-to-r from-primary-red to-red-600 hover:from-red-600 hover:to-primary-red text-primary-white font-bold py-2 px-3 rounded-xl transition-all duration-300 group-hover:transform group-hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-1 text-xs">
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Watch
                      </button>
                    </Link>
                    <Link href={`/guests/${guest.id}`}>
                      <button className="bg-primary-gray/10 dark:bg-gray-700 hover:bg-primary-gray/20 dark:hover:bg-gray-600 text-primary-black dark:text-primary-gray font-bold py-2 px-3 rounded-xl transition-all duration-300 border-2 border-transparent hover:border-primary-gray/30 dark:hover:border-gray-500 text-xs">
                        Profile
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredGuests.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-primary-gray/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-12 h-12 text-primary-gray"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary-black dark:text-primary-white mb-2">
                No guests found
              </h3>
              <p className="text-primary-gray dark:text-primary-gray">
                No guests found in the {activeFilter} category.
              </p>
              <button
                onClick={() => setActiveFilter("All")}
                className="mt-4 bg-primary-red hover:bg-red-600 text-primary-white font-semibold py-2 px-6 rounded-full transition-all duration-300"
              >
                Show All Guests
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
