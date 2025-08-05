import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';


NProgress.configure({ showSpinner: false, speed: 400 });

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());


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
