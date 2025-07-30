import Navbar from '../components/Navbar';
import TransitionWrapper from '../components/TransitionWrapper';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <Navbar />
      <TransitionWrapper>
        <main className="min-h-screen bg-gray-900 text-white pl-48 pt-20 px-8 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <Image
              src="/femi.png"
              alt="Femi Onasanya"
              width={400}
              height={180}
              className="rounded-full shadow-lg mb-6 border-4 border-indigo-500"
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-400">
              Femi Onasanya
            </h1>
            <p className="text-xl text-gray-300 mb-6 max-w-xl">
              Final Year Computing Student | React & Node.js Developer
            </p>
            <p className="text-md text-gray-400 max-w-xl mb-6">
              I build fast, accessible, and responsive web apps with modern tech like React, Next.js, Tailwind CSS, and MongoDB.
            </p>

            {/* Call-to-Action */}
            <Link href="/projects">
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-6 rounded shadow transition duration-300 mb-4">
                View My Projects
              </button>
            </Link>

            {/* Social Links */}
            <div className="flex gap-6 mt-4 text-2xl text-gray-400">
              <a
                href="https://github.com/Femi-coder"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/femi-onasanya-7717352b3"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>
        </main>
      </TransitionWrapper>
    </>
  );
}
