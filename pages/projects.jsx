import Navbar from '../components/Navbar';
import TransitionWrapper from '../components/TransitionWrapper';

const projects = [
  {
    title: 'Eco-Wheels Dublin - Group Project',
    desc: `A full-stack electric vehicle rental platform designed for urban mobility in Dublin. It features real-time charging station data using MapTiler and Overpass API, secure user authentication, role-based access (admin, regular, student-share users), and a MongoDB backend for managing rentals, returns, and user history. The frontend is built with Next.js and Tailwind CSS, offering a responsive and user-friendly interface.`,
    tech: ['Next.js', 'MongoDB', 'Tailwind CSS', 'MapTiler', 'Overpass API'],
    liveLink: 'https://major-group-project-mu.vercel.app/majorgroupproject',
  },
  {
    title: 'Financial Planner',
    desc: 'A personal finance tracker that lets users manage their income and expenses with login support and user-specific transaction history.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'bcrypt'],
    liveLink: 'https://finance-tracker-one-olive.vercel.app/',
  }
];

export default function Projects() {
  return (
    <>
      <Navbar />
      <TransitionWrapper>
       <main className="min-h-screen overflow-auto bg-gray-900 text-gray-300 pt-24 px-4 sm:px-8 md:pl-48">

          <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-blue-400 text-center sm:text-left">
            Projects
          </h1>

          <div className="grid gap-6 sm:gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700"
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 whitespace-pre-line text-sm sm:text-base">
                  {project.desc}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm uppercase text-gray-400 mb-1">Tech Stack:</h4>
                  <ul className="flex flex-wrap gap-2">
                    {project.tech.map((techItem) => (
                      <li
                        key={techItem}
                        className="bg-gray-700 px-3 py-1 rounded text-sm text-white"
                      >
                        {techItem}
                      </li>
                    ))}
                  </ul>
                </div>

                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded transition text-sm"
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
