export default function Host() {
  return (
    <section className="py-12 bg-[#000000]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="group relative bg-[#0a0a0a] rounded-2xl p-6 border border-white/5 shadow-2xl flex flex-col md:flex-row items-center gap-8 transition-all duration-500 hover:border-red-600/20">
          
          {/* Host Image - Medium Scale */}
          <div className="w-full md:w-auto flex justify-center flex-shrink-0">
            <div className="relative w-52 h-52 rounded-xl overflow-hidden border border-white/10 shadow-xl group-hover:border-red-600/30 transition-all duration-500">
              <img
                src="https://www.daqar.online/daqar5.jpeg"
                alt="Mohamed Daqar"
                className="w-full h-full object-cover object-top grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 to-transparent"></div>
            </div>
          </div>

          {/* Host Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-1 h-1 bg-red-600 rounded-full animate-pulse"></div>
              <h2 className="text-[10px] font-bold text-red-600 uppercase tracking-[0.2em]">
                Meet Your Host
              </h2>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-tighter uppercase">
              Mohamed <span className="text-red-600">Daqar</span>
            </h3>
            
            <p className="text-gray-400 leading-relaxed text-sm md:text-base font-light">
              Daqar is a seasoned journalist and an incredible storyteller.
              With more than a decade of experience interviewing everyday
              people, he created this podcast to spark meaningful
              conversations that <span className="text-white">inspire, challenge, and connect us.</span>
            </p>

            {/* Subtle Social link or badge */}
            <div className="mt-5 flex justify-center md:justify-start">
              <span className="text-[9px] text-white/30 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full">
                Stories That Resonate
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}