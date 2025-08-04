import Navbar from '../components/Navbar';
import TransitionWrapper from '../components/TransitionWrapper';
import { FaCode, FaRocket, FaGraduationCap } from 'react-icons/fa';

export default function About() {
  return (
    <>
      <Navbar />
      <TransitionWrapper>
        <main className="min-h-screen bg-gray-900 text-gray-300 pt-24 px-4 sm:px-8 md:pl-48">
          <section className="max-w-4xl mx-auto space-y-10">

            {/* Page Title */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-400 tracking-tight text-center sm:text-left">
                About Me
              </h1>
              <p className="text-base sm:text-lg leading-relaxed text-center sm:text-left">
                I’m <span className="font-semibold">Femi Onasanya</span>, a final-year Computing student who’s deeply passionate about full-stack development.
                I build digital products that are <span className="font-medium">fast</span>, <span className="font-medium">responsive</span>, and <span className="font-medium">user-focused</span>.
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-2 text-blue-300 mb-2">
                <FaGraduationCap className="text-xl" /> Education
              </h2>
              <p className="text-base sm:text-lg leading-relaxed">
                BSc (Hons) in Computing – <span className="font-medium">Technological University Dublin</span><br />
                <span className="text-sm italic text-gray-500">2022 – 2026</span>
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-2 text-blue-300 mb-2">
                <FaCode className="text-xl" /> Tech Stack
              </h2>
              <ul className="list-disc list-inside space-y-1 pl-2 text-base sm:text-lg">
                <li><span className="font-semibold">Frontend:</span> React, Next.js, Tailwind CSS</li>
                <li><span className="font-semibold">Backend:</span> Node.js, Express.js</li>
                <li><span className="font-semibold">Tools:</span> Git, GitHub, Vercel, Figma</li>
                <li><span className="font-semibold">Database:</span> MongoDB</li>
                <li><span className="font-semibold">Deployment:</span> Vercel</li>
              </ul>
            </div>

            {/* Passion */}
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-2 text-blue-300 mb-2">
                <FaRocket className="text-xl" /> What Drives Me
              </h2>
              <p className="text-base sm:text-lg leading-relaxed">
                I love creating apps that solve real problems. Whether it's an EV rental system, a secure video-sharing platform, or a productivity dashboard — I focus on clean architecture, intuitive UX, and long-term maintainability.
              </p>
            </div>

            {/* Final CTA */}
            <div className="bg-blue-600/10 border border-blue-800 rounded-lg p-6 text-center shadow-md">
              <p className="font-medium text-base sm:text-lg">
                💡 Let’s build something impactful together.
              </p>
            </div>

          </section>
        </main>
      </TransitionWrapper>
    </>
  );
}
                      