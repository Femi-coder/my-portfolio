// pages/_app.js

import '../styles/globals.css';
import Navbar from '../components/Navbar';

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen flex bg-gray-900 text-white">
      <Navbar />
      <main className="flex-1 px-6 md:ml-52">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
