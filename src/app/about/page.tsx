import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-primary-black">
      <Header />

      <section className="py-20 bg-gradient-to-br from-primary-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About the Podcast</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Learn more about our mission, our host, and the stories behind
            Stories That Resonate.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Halkan waxaan ku ilaalinay booskii hore (Default), laakiin waxaan hagaajinay hagaajinta qoraalka (Alignment) */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* 1. Host Photo and Info (Hadda wuxuu ku yaal Bidixda) */}
            {/* Waxaan ka saarnay order-ka iyo text-right waxaana u beddelnay text-left */}
            <div className="text-center lg:text-left lg:order-1">
              {/* Avatar wrapper aligned to the left on large screens */}
              <div className="relative w-64 h-64 mx-auto lg:mx-0 mb-8">
                {" "}
                {/* lg:mx-0 wuxuu u ogolaanayaa inuu bidixda u hagaago */}
                {/* Outer gradient ring */}
                <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-br from-primary-red to-primary-yellow">
                  {/* Inner white/dark ring */}
                  <div className="w-full h-full rounded-full bg-white dark:bg-primary-black p-[3px]">
                    {/* Image circle */}
                    <div className="w-full h-full rounded-full overflow-hidden shadow-xl shadow-primary-red/20">
                      <img
                        src="https://www.daqar.online/daqar5.jpeg"
                        alt="Host Photo"
                        className="object-cover object-top w-full h-full"
                      />
                    </div>
                  </div>
                </div>
                {/* Logo badge on the top-right of the circle */}
                {/* Waxaan dib u celinay booskii hore (bottom-right) si loo ilaaliyo design-ka goobaabta */}
                <div className="absolute -bottom-2 -right-2">
                  <div className="w-14 h-14 rounded-full bg-white dark:bg-primary-black shadow-lg flex items-center justify-center ring-2 ring-white dark:ring-primary-black">
                    <Image
                      src="/podlogo.png"
                      alt="Daqar Talks & Inspire Logo"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Halkan waxaan ku hagaajinay text-ka inuu bidixda u hagaago */}
              <h2 className="text-3xl font-bold text-primary-black dark:text-white mb-4">
                Mohamed Daqar
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Seasoned journalist and incredible storyteller with over a
                decade of experience.
              </p>

              {/* Social Links - Hadda waxay u hagaajisanyihiin bidixda */}
              <div className="flex justify-center lg:justify-start space-x-4">
                {/* Twitter */}
                <a
                  href="https://x.com/daqar19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary-red hover:text-white transition-colors"
                >
                  T
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/daqar19/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary-red hover:text-white transition-colors"
                >
                  I
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/daqar19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary-red hover:text-white transition-colors"
                >
                  F
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/daqar19/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary-red hover:text-white transition-colors"
                >
                  L
                </a>
              </div>
            </div>

            {/* 2. Podcast Story (Wuxuu hadda ku yaal Midigta) */}
            <div className="lg:order-2">
              {" "}
              {/* lg:order-2 wuxuu u guurayaa midigta si uu uga soo horjeedo sawirka */}
              <h3 className="text-2xl font-bold text-primary-black dark:text-white mb-6">
                Our Story
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  With over a decade of experience in media and storytelling,
                  Daqar started Stories That Resonate to create a platform for
                  conversations that spark creativity and foster genuine human
                  connections.
                </p>
                <p>
                  Our podcast dives deep into the art of storytelling, exploring
                  how narratives shape our understanding of the world and bring
                  people together. Each episode features meaningful
                  conversations with creators, thinkers, and storytellers from
                  various fields.
                </p>
                <p>
                  We believe that everyone has a story worth telling, and
                  through these conversations, we aim to inspire our listeners
                  to discover and share their own unique narratives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
