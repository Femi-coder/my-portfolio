import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// Configure NProgress
NProgress.configure({
  showSpinner: false,
  speed: 500,         // animation speed of the bar
  trickleSpeed: 200,  // how frequently the bar increases
  minimum: 0.08       // minimum bar size
});

// Start NProgress on route change start
Router.events.on('routeChangeStart', () => {
  NProgress.start();
});

// Delay the done() to make it feel smoother
Router.events.on('routeChangeComplete', () => {
  setTimeout(() => NProgress.done(), 300);
});
Router.events.on('routeChangeError', () => {
  setTimeout(() => NProgress.done(), 300);
});

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
