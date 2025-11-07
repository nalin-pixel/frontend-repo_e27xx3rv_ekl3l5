import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Aarav Sharma',
    result: 'NEET 2024 AIR 312',
    text: 'The mentors focus on core concepts and disciplined practice. Weekly doubt sessions kept me on track.'
  },
  {
    name: 'Ishita Patel',
    result: 'JEE Main 99.21 %ile',
    text: 'The test series and analysis were spot on. Their approach helped me stay calm during the real exam.'
  },
  {
    name: 'Rahul Verma',
    result: 'Class X – 97%',
    text: 'Clear explanations and regular feedback loops. Built a strong foundation that reflects in my school results.'
  }
];

function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Parents and students trust us</h2>
          <p className="mt-3 text-gray-600">Real stories of growth, confidence, and results.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl bg-white p-6 ring-1 ring-gray-100 shadow-sm">
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({length: 5}).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-4 text-gray-700">“{t.text}”</p>
              <div className="mt-6">
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
