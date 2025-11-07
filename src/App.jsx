import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Programs />
      <Testimonials />
      <Contact />
      <footer className="border-t border-gray-100 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} UdgamScience Academy. All rights reserved.</p>
          <div className="text-sm text-gray-500">Made with dedication for future achievers.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
