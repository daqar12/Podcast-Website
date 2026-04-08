import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    // Main container: Pure Black background with optimized text contrast
    <div className="min-h-screen bg-[#000000] text-white selection:bg-red-600 selection:text-white">
      <Header />

      {/* Hero Section: Features a deep red subtle glow */}
      <section className="relative py-14 md:py-16 bg-[#000000] overflow-hidden border-b border-white/5">
        {/* Subtle Background Glow - Reduced Opacity for a cleaner look */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/15 via-transparent to-transparent opacity-40" />

        <div className="relative max-w-5xl mx-auto px-4 text-center z-10">
          {/* Scaled Down Heading */}
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase leading-tight">
            About  the <span className="text-red-600"> Podcast</span>
          </h1>

          {/* Refined Body Text */}
          <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed font-light">
            Discover our mission, meet our host, and explore the inspiration
            behind the stories that{" "}
            <span className="text-white">resonate globally.</span>
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* 1. Profile / Host Information */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="relative w-80 h-80 mx-auto lg:mx-0 mb-10">
                {/* Red Frame: Glowing border effect */}
                <div className="absolute inset-0 rounded-full p-[3px] bg-red-600 shadow-[0_0_40px_rgba(220,38,38,0.3)] animate-pulse-slow">
                  {/* Internal Black Spacer */}
                  <div className="w-full h-full rounded-full bg-[#000000] p-[5px]">
                    {/* Main Host Image */}
                    <div className="w-full h-full rounded-full overflow-hidden ring-1 ring-white/10">
                      <img
                        src="https://www.daqar.online/daqar5.jpeg"
                        alt="Mohamed Daqar"
                        className="object-cover object-top w-full h-full transition-all duration-700 ease-in-out scale-105 hover:scale-100"
                      />
                    </div>
                  </div>
                </div>

                {/* Floating Podcast Logo Badge: Red Ringed */}
                <div className="absolute -bottom-4 -right-4">
                  <div className="w-20 h-20 rounded-full bg-[#000000] shadow-2xl flex items-center justify-center ring-8 ring-[#000000]">
                    <Image
                      src="/daq.png"
                      alt="Podcast Logo"
                      width={140}
                      height={140}
                      className="rounded-full"
                    />
                  </div>
                </div>
              </div>

              <h2 className="text-5xl font-bold text-white mb-2 tracking-tight">
                Mohamed <span className="text-red-600">Daqar</span>
              </h2>
              <p className="text-white/60 font-semibold mb-6 uppercase tracking-[0.3em] text-xs">
                Host & Executive Producer
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-lg font-light">
                A seasoned journalist and visionary storyteller with over a
                decade of experience. Dedicated to uncovering the
                <span className="text-white"> human element</span> in every
                narrative.
              </p>

              {/* Social Media Links: Modern Red Hover Effect */}
              <div className="flex justify-center lg:justify-start space-x-4">
                {[
                  {
                    name: "Twitter",
                    path: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
                  },
                  {
                    name: "Instagram",
                    path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01",
                  },
                  {
                    name: "Facebook",
                    path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
                  },
                  {
                    name: "LinkedIn",
                    path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z",
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="group relative w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-full transition-all duration-500 hover:bg-red-600 hover:border-red-600"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                    >
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* 2. Brand Story / Narrative Card */}
            <div className="order-1 lg:order-2">
              <div className="relative group">
                {/* Decorative Red Blur behind card */}
                <div className="absolute -inset-1 bg-red-600/20 rounded-[40px] blur-2xl group-hover:bg-red-600/30 transition duration-1000"></div>

                <div className="relative bg-[#0a0a0a] p-10 lg:p-14 rounded-[40px] border border-white/5 shadow-2xl">
                  <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                    <span className="w-8 h-[2px] bg-red-600 mr-4"></span>
                    Our Journey
                  </h3>
                  <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
                    <p>
                      With deep roots in media, Daqar established
                      <span className="text-white font-semibold">
                        {" "}
                        Stories That Resonate
                      </span>{" "}
                      to build a bridge between diverse perspectives and
                      creative minds.
                    </p>
                    <p>
                      We explore the profound impact of storytelling—how it
                      defines our past and inspires a{" "}
                      <span className="text-red-600">connected future.</span>
                    </p>
                    <div className="pt-8 mt-8 border-t border-white/5">
                      <p className="italic text-white text-2xl font-serif leading-snug">
                        "Every voice has a{" "}
                        <span className="text-red-600">frequency</span>. Every
                        story has a home."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
