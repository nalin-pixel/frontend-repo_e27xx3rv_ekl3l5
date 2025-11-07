import { BookOpen, Phone } from 'lucide-react';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-gray-900">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-indigo-500 to-sky-500 grid place-items-center text-white">
            <BookOpen className="h-5 w-5" />
          </div>
          <span>UdgamScience Academy</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#programs" className="text-gray-600 hover:text-gray-900">Programs</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 font-medium text-white shadow hover:bg-indigo-700">
            <Phone className="h-4 w-4" />
            Enroll Now
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
