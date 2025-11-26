

export default function Host() {
  return (
<section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-auto flex justify-center flex-shrink-0">
              <div className="w-60 h-60 rounded-xl overflow-hidden border border-gray-300 shadow-md">
                <img
                  src="https://www.daqar.online/daqar5.jpeg"
                  alt="Podcast Host"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-blue-500 uppercase tracking-wide mb-1">
                Meet Your Host
              </h2>
              <h3 className="text-3xl font-bold text-[#1A1A1A] mb-2">
                Mohamed Daqar
              </h3>
              <p className="text-gray-600 leading-relaxed text-[16px]">
                Daqar is a seasoned journalist and an incredible storyteller.
                With more than a decade of experience interviewing everyday
                people, he created this podcast to spark meaningful
                conversations that inspire, challenge, and connect us.
              </p>
            </div>
          </div>
        </div>
      </section>

    );
}