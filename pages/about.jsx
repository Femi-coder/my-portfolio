import Navbar from '../components/Navbar';
import TransitionWrapper from '../components/TransitionWrapper';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaGraduationCap, FaProjectDiagram, FaToolbox } from 'react-icons/fa';

export default function About() {
  return (
    <>
      <Navbar />
      <TransitionWrapper>
        <main className="min-h-screen overflow-auto text-gray-300 pt-24 px-4 sm:px-8 md:pl-48">
          <section className="max-w-6xl mx-auto space-y-16">

            {/* Intro with Image */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-blue-400 text-center sm:text-left">
                  About Me
                </h1>
                <p className="text-base sm:text-lg leading-relaxed">
                  I’m <span className="font-semibold">Femi Onasanya</span>, a final-year Computing student passionate about
                  <span className="font-medium"> full-stack development</span>.
                  I love building digital products that are <span className="font-medium">fast</span>,
                  <span className="font-medium"> responsive</span>, and
                  <span className="font-medium"> user-focused</span>.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center"
              >
                <Image
                  src="/photo.png"
                  alt="Laptop with code"
                  width={500}
                  height={500}
                  className="rounded-2xl shadow-lg border border-gray-700 object-cover"
                />
              </motion.div>
            </div>

            {/* Quick facts strip */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {[
                { k: 'Years Coding', v: '3+', icon: <FaCode /> },
                { k: 'Projects', v: '2', icon: <FaProjectDiagram /> },
                { k: 'Focus', v: 'Full-stack', icon: <FaRocket /> },
                { k: 'Degree', v: 'BSc Computing', icon: <FaGraduationCap /> },
              ].map((it) => (
                <div
                  key={it.k}
                  className="flex flex-col items-center rounded-xl border border-gray-700 bg-gray-800/40 p-5 hover:border-blue-500 transition"
                >
                  <div className="text-2xl text-blue-300 mb-2">{it.icon}</div>
                  <div className="text-xl font-semibold text-blue-300">{it.v}</div>
                  <div className="text-sm text-gray-400">{it.k}</div>
                </div>
              ))}
            </motion.div>

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
              <ul className="list-disc list-inside space-y-2 text-base sm:text-lg">
                <li><span className="font-semibold">Frontend:</span> React, Next.js, Tailwind CSS</li>
                <li><span className="font-semibold">Backend:</span> Node.js, Express.js, REST APIs</li>
                <li><span className="font-semibold">Database:</span> MongoDB</li>
                <li><span className="font-semibold">Tools:</span> Git, GitHub, Vercel</li>
                <li><span className="font-semibold">Deployment:</span> Vercel</li>
              </ul>
            </div>

            {/* What drives me */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl font-bold flex items-center gap-2 text-blue-300 mb-2">
                  <FaRocket className="text-xl" /> What Drives Me
                </h2>
                <p className="text-base sm:text-lg leading-relaxed">
                  I love creating apps that solve real problems. Whether it's an EV rental system,
                  a secure video-sharing platform, or a productivity dashboard. I focus on clean architecture, intuitive UX, and long-term maintainability.
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center sm:text-left">
              <h2 className="text-2xl font-bold flex items-center gap-2 text-blue-300 mb-2">
                <FaToolbox className="text-xl" />
                Let’s Build Something Great Together
              </h2>
              <p className="text-base sm:text-lg leading-relaxed">
                Interested in working with me? I’m open to internships, part-time roles, and freelance projects.
              </p>

              <div className="mt-5">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-2 text-sm sm:text-base font-medium text-white transition hover:bg-blue-500"
                >
                  Get In Touch
                </a>
              </div>
            </div>
            <footer className="mt-10 pb-10 text-center text-xs text-gray-500">
            </footer>
          </section>
        </main>
      </TransitionWrapper>
    </>
  );
}
