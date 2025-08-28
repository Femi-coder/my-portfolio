// pages/_app.jsx
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// Configure NProgress
NProgress.configure({
  showSpinner: false,
  speed: 500,
  trickleSpeed: 200,
  minimum: 0.08,
});

// Start/stop NProgress on route changes
Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => {
  setTimeout(() => NProgress.done(), 300);
});
Router.events.on('routeChangeError', () => {
  setTimeout(() => NProgress.done(), 300);
});

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen flex bg-gray-900 text-white">
      {/* Sidebar/Navbar */}
      <Navbar />

      {/* 👇 Only scrollable container for the whole app */}
      <main className="app-scroll flex-1 px-6 md:ml-52">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
