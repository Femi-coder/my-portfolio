import Navbar from '../components/Navbar';
import TransitionWrapper from '../components/TransitionWrapper';
import { FaCode, FaRocket, FaGraduationCap } from 'react-icons/fa';

export default function About() {
  return (
    <>
      <Navbar />
      <TransitionWrapper>
       <main className="min-h-screen bg-gray-900 text-white pl-48 pt-20 px-8">
          <section className="max-w-4xl mx-auto space-y-10">

            {/* Page Title */}
            <div>
              <h1 className="text-3xl font-bold mb-4 text-blue-400 tracking-tight">
                About Me
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                I’m <span className="text-white font-semibold">Femi Onasanya</span>, a final-year Computing student who’s deeply passionate about full-stack development.
                I build digital products that are <span className="text-white font-medium">fast</span>, <span className="text-white font-medium">responsive</span>, and <span className="text-white font-medium">user-focused</span>.
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-2 text-blue-300 mb-2">
                <FaGraduationCap className="text-xl" /> Education
              </h2>
              <p className="text-gray-400">
                BSc (Hons) in Computing – <span className="text-white">Technological University Dublin</span><br />
                <span className="text-sm italic text-gray-500">2022 – 2026</span>
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-2 text-blue-300 mb-2">
                <FaCode className="text-xl" /> Tech Stack
              </h2>
              <ul className="list-disc list-inside text-gray-300 space-y-1 pl-2">
                <li><strong className="text-white">Frontend:</strong> React, Next.js, Tailwind CSS</li>
                <li><strong className="text-white">Backend:</strong> Node.js, Express.js </li>
                <li><strong className="text-white">Tools:</strong> Git, GitHub, Vercel, Figma</li>
                <li><strong className="text-white">Database:</strong> MongoDB </li>
              </ul>
            </div>

            {/* Passion */}
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-2 text-blue-300 mb-2">
                <FaRocket className="text-xl" /> What Drives Me
              </h2>
              <p className="text-gray-300 leading-relaxed">
                I love creating apps that solve real problems. Whether it's an EV rental system, a secure video-sharing platform, or a productivity dashboard — I focus on clean architecture, intuitive UX, and long-term maintainability.
              </p>
            </div>

            {/* Final Call to Action */}
            <div className="bg-blue-600/10 border border-blue-800 rounded-lg p-6 text-gray-200 shadow-md">
              <p className="text-center font-medium">
                💡 Let’s build something impactful together.
              </p>
            </div>
            
          </section>
        </main>
      </TransitionWrapper>
    </>
  );
}
