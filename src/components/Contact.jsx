import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('Thank you! Our counsellor will reach out shortly.');
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-t from-white via-white to-indigo-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-gray-900">Get in touch</h2>
            <p className="mt-3 text-gray-600">Call, email, or visit us. We’re happy to guide you on the right path.</p>

            <div className="mt-8 space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-indigo-600 mt-1" />
                <div>
                  <p className="font-medium">+91 98765 43210</p>
                  <p className="text-sm text-gray-500">Mon–Sat, 9am–7pm</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-indigo-600 mt-1" />
                <div>
                  <p className="font-medium">admissions@udgamscience.academy</p>
                  <p className="text-sm text-gray-500">We reply within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-indigo-600 mt-1" />
                <div>
                  <p className="font-medium">UdgamScience Academy, City Center</p>
                  <p className="text-sm text-gray-500">Near Metro Station, Your City</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 ring-1 ring-gray-100 shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-700">Full name</label>
                <input required className="mt-1 w-full rounded-md border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm text-gray-700">Phone</label>
                <input required type="tel" className="mt-1 w-full rounded-md border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Mobile number" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-gray-700">Email</label>
                <input type="email" className="mt-1 w-full rounded-md border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="you@example.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-gray-700">Course interest</label>
                <select className="mt-1 w-full rounded-md border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                  <option>NEET</option>
                  <option>JEE</option>
                  <option>IX–X Foundation</option>
                  <option>Crash Course</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-gray-700">Message</label>
                <textarea rows="4" className="mt-1 w-full rounded-md border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Tell us about your goals"></textarea>
              </div>
              <div className="sm:col-span-2 flex items-center justify-between">
                <p className="text-sm text-gray-600">By submitting, you agree to be contacted by our team.</p>
                <button type="submit" className="inline-flex items-center rounded-md bg-indigo-600 px-6 py-3 text-white font-semibold shadow hover:bg-indigo-700">Submit</button>
              </div>
              {status && (
                <div className="sm:col-span-2 rounded-md bg-green-50 text-green-700 px-4 py-2">{status}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
