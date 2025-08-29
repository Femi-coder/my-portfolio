import Navbar from '../components/Navbar';
import TransitionWrapper from '../components/TransitionWrapper';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ReactTyped } from "react-typed";
import { useState } from "react";

export default function Home() {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  return (
    <>
      <Navbar />
      <TransitionWrapper>
        <main className="min-h-screen text-white px-4 sm:px-8 md:pl-48 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center w-full max-w-4xl"
          >
            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-40 sm:w-56 md:w-72 lg:w-80 mb-6 max-w-full"
            >
              <Image
                src="/femi.png"
                alt="Femi Onasanya"
                width={600}
                height={600}
                priority
                className="rounded-full shadow-2xl border-4 border-blue-500 w-full h-auto object-cover"
              />
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 text-blue-400"
            >
              <ReactTyped
                strings={["Femi Onasanya"]}
                typeSpeed={100}
                showCursor={false}
                onComplete={() => setShowSubtitle(true)} //trigger subtitle
              />
            </motion.div>

            {/* Subtitle */}
            {showSubtitle && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-3 px-2"
              >
                <ReactTyped
                  strings={[
                    "Final Year Computing Student | React & Node.js Developer",
                  ]}
                  typeSpeed={40}
                  showCursor={false}
                  contentType="null"
                  onComplete={() => setShowDescription(true)} // trigger description
                />
              </motion.div>
            )}

            {/* Description */}
            {showDescription && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-sm sm:text-base md:text-lg text-gray-400 max-w-xl mb-6 px-3"
              >
                <ReactTyped
                  strings={[
                    "I build fast, accessible, and responsive web apps with modern tech like React, Next.js, Tailwind CSS, and MongoDB.",
                  ]}
                  typeSpeed={30}
                  showCursor={false}
                />
              </motion.div>
            )}

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mt-4"
            >
              <Link href="projects">
                <button className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-5 sm:py-3 sm:px-8 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 text-sm sm:text-base md:text-lg">
                  View My Projects
                </button>
              </Link>

              <a
                href="/femi-cv.pdf"
                download
                className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-5 sm:py-3 sm:px-8 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 text-sm sm:text-base md:text-lg"
              >
                Download CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex gap-6 mt-6 text-xl sm:text-2xl md:text-3xl text-gray-400"
            >
              <a
                href="https://github.com/Femi-coder"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-transform transform hover:scale-110"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/femi-onasanya-7717352b3"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-transform transform hover:scale-110"
              >
                <FaLinkedin />
              </a>
            </motion.div>
          </motion.div>
        </main>
      </TransitionWrapper>
    </>
  );
}
