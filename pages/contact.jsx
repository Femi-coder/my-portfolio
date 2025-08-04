import Navbar from '../components/Navbar';
import TransitionWrapper from '../components/TransitionWrapper';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <TransitionWrapper>
        <main className="min-h-screen bg-gray-900 text-white pt-24 px-4 sm:px-8 md:pl-48">
          <div className="max-w-xl mx-auto">
            <h1 className="text-3xl sm:text-5xl font-extrabold mb-10 text-blue-400 tracking-tight text-center sm:text-left">
              Contact Me
            </h1>

            <form
              action="https://formspree.io/f/mgvzzowd"
              method="POST"
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block mb-1 text-gray-300 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-1 text-gray-300 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white text-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-1 text-gray-300 text-sm">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 px-6 rounded transition"
              >
                Send
              </button>
            </form>
          </div>
        </main>
      </TransitionWrapper>
    </>
  );
}
