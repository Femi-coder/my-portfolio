import Navbar from '../components/Navbar';
import TransitionWrapper from '../components/TransitionWrapper';

export default function About() {
  return (
    <>
      <Navbar />
      <TransitionWrapper>
        <main className="min-h-screen bg-gray-900 text-white pl-56 pt-20 px-8">
          <section className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-blue-400">About Me</h1>

            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              Hey, I’m <span className="font-semibold text-white">Femi Onasanya</span>, a final year Computing student passionate about full-stack development.
              I love creating digital experiences that are fast, intuitive, and beautifully responsive.
            </p>

            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              I work with <span className="text-white font-medium">React, Next.js, Tailwind CSS, Node.js, and MongoDB</span>. 
              From building seamless frontends to designing RESTful APIs and data-driven backend logic, I enjoy the entire development lifecycle.
            </p>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I’m driven by solving real-world problems through code. Whether that’s a smart EV rental platform, 
              a video-sharing app, or a productivity tool, I take pride in writing scalable, maintainable solutions with a focus on user experience.
            </p>

            <div className="text-sm italic text-gray-400">
              Let’s build something that makes a difference.
            </div>
          </section>
        </main>
      </TransitionWrapper>
    </>
  );
}
