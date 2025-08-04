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
        <main className="min-h-screen bg-gray-900 text-white pt-24 px-4 sm:px-8 md:pl-48 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center w-full"
          >
            <div className="w-40 sm:w-56 md:w-64 mb-6">
              <Image
                src="/femi.png"
                alt="Femi Onasanya"
                width={450}
                height={450}
                className="rounded-full shadow-lg border-4 border-blue-500 w-full h-auto"
              />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-blue-400">
              Femi Onasanya
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-4 max-w-xl px-2">
              Final Year Computing Student | React & Node.js Developer
            </p>
            <p className="text-sm sm:text-md text-gray-400 max-w-xl mb-6 px-2">
              I build fast, accessible, and responsive web apps with modern tech like React, Next.js, Tailwind CSS, and MongoDB.
            </p>

            <Link href="/projects">
              <button className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-6 rounded shadow transition duration-300 mb-4 text-sm sm:text-base">
                View My Projects
              </button>
            </Link>

            <div className="flex gap-6 mt-4 text-xl sm:text-2xl text-gray-400">
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
