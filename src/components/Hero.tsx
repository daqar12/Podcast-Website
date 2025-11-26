import { FaMicrophone } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative bg-[#111] text-white overflow-hidden py-24 lg:py-32">
      {/* Background Blurs */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-indigo-600 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-red-600 rounded-full blur-3xl opacity-10"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* LEFT: Text Content */}
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block py-1 px-3 rounded-full bg-gray-800 border border-gray-700 text-xs font-semibold tracking-wider text-gray-300 mb-6">
              🎙️ SEASON 4 PREMIERE
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6">
              Voices That <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Inspire Your Journey
              </span>
            </h1>

            <p className="text-lg text-gray-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Conversations that dive deep into the heart of storytelling,
              creativity, and the unspoken human connection.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <button className="w-full sm:w-auto bg-[#FF4F4F] hover:bg-red-600 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-red-900/20">
                ▶ Play Latest Episode
              </button>
            </div>
          </div>

          {/* RIGHT: Visual Element */}
          <div className="flex-1 relative w-full max-w-md">
            <div className="absolute inset-0 border-2 border-gray-800 rounded-2xl transform rotate-3 scale-105"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
              <img
                src="https://www.keithconradmedia.com/wp-content/uploads/2021/07/at2020_03-1024x1024.png"
                alt="Podcast Microphone"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <p className="text-xs font-bold uppercase text-red-500 mb-1">
                  Now Playing
                </p>
                <p className="text-white font-bold text-lg">The Art of Silence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
