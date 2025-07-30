import Navbar from '../components/Navbar';
import TransitionWrapper from '../components/TransitionWrapper';

const projects = [
  {
    title: 'Eco-Wheels Dublin',
    desc: `A full-stack electric vehicle rental platform designed for urban mobility in Dublin. 
It features real-time charging station data using MapTiler and Overpass API, secure user authentication, 
role-based access (admin, regular, student-share users), and a MongoDB backend for managing rentals, returns, 
and user history. The frontend is built with Next.js and Tailwind CSS, offering a responsive and user-friendly interface.`,
    tech: ['Next.js', 'MongoDB', 'Tailwind CSS', 'MapTiler', 'Overpass API'],
    liveLink: 'https://major-group-project-mu.vercel.app/majorgroupproject',
  },
  {
    title: 'Video Gallery App',
    desc: `A personal video storage and sharing app that allows users to upload, watch, and manage their videos in a clean gallery view. 
Features include user authentication, secure video uploads, real-time previews, and a private dashboard. 
Videos are stored in the cloud and accessible only after login.`,
    tech: ['Next.js', 'Firebase Storage', 'Tailwind CSS', 'NextAuth.js'],
    liveLink: 'https://your-video-gallery.vercel.app', // Replace with your actual deployment link
  },
];

export default function Projects() {
  return (
    <>
      <Navbar />
      <TransitionWrapper>
        <main className="min-h-screen bg-gray-900 text-white pl-48 pt-20 px-8">
          <h1 className="text-4xl font-bold mb-8 text-indigo-400">Projects</h1>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-2">
            {projects.map((project) => (
              <div key={project.title} className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
                <h3 className="text-2xl font-semibold text-indigo-300 mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 whitespace-pre-line">{project.desc}</p>

                {/* Tech stack */}
                <div className="mb-4">
                  <h4 className="text-sm uppercase text-gray-400 mb-1">Tech Stack:</h4>
                  <ul className="flex flex-wrap gap-2">
                    {project.tech.map((techItem) => (
                      <li key={techItem} className="bg-gray-700 px-3 py-1 rounded text-sm text-white">
                        {techItem}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Live Link Button */}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded transition"
                  >
                    View Live Project
                  </a>
                )}
              </div>
            ))}
          </div>
        </main>
      </TransitionWrapper>
    </>
  );
}
