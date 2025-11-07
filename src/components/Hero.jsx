import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* 3D background */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/6H2b5O8nrx1yPJd0/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient wash to improve text contrast (kept below content) */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-white/70 via-white/60 to-white/80" />

      {/* Content */}
      <div className="relative z-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-32">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-indigo-200">NEET • JEE • Foundation</span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
              Ignite your potential with UdgamScience Academy
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              Expert-led coaching for NEET, JEE and school foundations. Structured curriculum, small batches, and constant mentorship to help you excel.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex justify-center items-center rounded-md bg-indigo-600 px-6 py-3 text-white font-semibold shadow hover:bg-indigo-700">Book a Free Counselling</a>
              <a href="#programs" className="inline-flex justify-center items-center rounded-md bg-white px-6 py-3 text-gray-900 font-semibold ring-1 ring-gray-200 hover:bg-gray-50">Explore Programs</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
