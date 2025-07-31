'use client';

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import TransitionWrapper from '../components/TransitionWrapper';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const images = ['/femi.png', '/femi1.png'];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  //Auto-switch every 3seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
              src={images[currentImage]}
              alt={`Femi Image ${currentImage + 1}`}
              width={450}
              height={180}
              className="rounded-full shadow-lg mb-6 border-4 border-blue-500"
            />

            {/* manual controls */}
            <div className="flex gap-4 mb-6">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`w-3 h-3 rounded-full ${idx === currentImage ? 'bg-blue-400' : 'bg-gray-600'} transition`}
                />
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-400">
              Femi Onasanya
            </h1>
            <p className="text-xl text-gray-300 mb-6 max-w-xl">
              Final Year Computing Student | React & Node.js Developer
            </p>
            <p className="text-md text-gray-400 max-w-xl mb-6">
              I build fast, accessible, and responsive web apps with modern tech like React, Next.js, Tailwind CSS, and MongoDB.
            </p>

            <Link href="/projects">
              <button className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-6 rounded shadow transition duration-300 mb-4">
                View My Projects
              </button>
            </Link>

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
