import { Atom, FlaskConical, Pi, Trophy } from 'lucide-react';

const programs = [
  {
    icon: Atom,
    title: 'NEET (UG)',
    desc: 'Concept-first learning with NCERT focus, daily practice sheets, and regular tests to build exam temperament.'
  },
  {
    icon: Pi,
    title: 'JEE (Main + Adv.)',
    desc: 'Problem-solving centric approach with advanced modules, doubt clinics, and weekly analytics.'
  },
  {
    icon: FlaskConical,
    title: 'IX–X Foundation',
    desc: 'Strong fundamentals in Science & Math with Olympiad prep and early exposure to competitive thinking.'
  },
  {
    icon: Trophy,
    title: 'Crash & Rank Booster',
    desc: 'High-intensity revision programs with handpicked questions and exam simulation.'
  }
];

function Programs() {
  return (
    <section id="programs" className="py-24 bg-gradient-to-b from-white to-indigo-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Programs that shape achievers</h2>
          <p className="mt-3 text-gray-600">Structured courses crafted by experienced mentors with a results-driven methodology.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map(({icon: Icon, title, desc}) => (
            <div key={title} className="rounded-2xl bg-white p-6 ring-1 ring-gray-100 shadow-sm hover:shadow-md transition">
              <div className="h-11 w-11 rounded-lg bg-indigo-600/10 text-indigo-700 grid place-items-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Programs;
