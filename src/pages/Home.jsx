import { Link } from 'react-router-dom';
import data from '../data/data';
import AppCard from '../components/AppCard';
import play from '../assets/play.png'
import appstore from '../assets/appstore.png'
import hero from '../assets/hero.png'

function StatCard({ label, value, sub }) {
  return (
    <div className="text-center">
      <p className="text-sm text-purple-200 mb-1">{label}</p>
      <p className="text-4xl font-extrabold text-white mb-1">{value}</p>
      <p className="text-xs text-purple-200">{sub}</p>
    </div>
  );
}

export default function Home() {
  const topApps = data.slice(0, 8);

  const totalDownloads = data.reduce((s, a) => s + a.downloads, 0);
  const totalReviews = data.reduce((s, a) => s + a.reviews, 0);

  const fmtM = (n) => (n / 1000000).toFixed(1) + 'M';
  const fmtK = (n) => (n / 1000).toFixed(0) + 'K';

  return (
    <div>
      {/* Banner */}
      <section className="bg-gray-50 pt-16 px-4 text-center relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-100 rounded-full opacity-50 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-100 rounded-full opacity-50 blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark leading-tight mb-4">
            We Build{' '}
            <span className="text-primary">Productive</span> Apps
          </h1>
          <p className="text-gray-500 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            At HERO IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 rounded-xl font-semibold text-dark hover:border-primary hover:text-primary transition-all bg-white shadow-sm"
            >
              <img src={play} alt="Google Play" className="h-5" />
              Google Play
            </a>
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 rounded-xl font-semibold text-dark hover:border-primary hover:text-primary transition-all bg-white shadow-sm"
            >
              <img src={appstore} alt="App Store" className="h-5" />
              App Store
            </a>
          </div>
        </div>

        {/* Phone mockup */}
        <div className="mt-10 flex justify-center">
          <div className="relative">
              <img src={hero} alt="hero" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-12 px-4">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Trusted By Millions, Built For You</h2>
        </div>
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          <StatCard label="Total Downloads" value={fmtM(totalDownloads)} sub="21% More Than Last Month" />
          <StatCard label="Total Reviews" value={fmtK(totalReviews)} sub="46% More Than Last Month" />
          <StatCard label="Active Apps" value={`${data.length}+`} sub="31 More Will Launch" />
        </div>
      </section>

      {/* Trending Apps */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-dark">Trending Apps</h2>
            <p className="text-gray-500 mt-2">Explore All Trending Apps on the Market developed by us</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {topApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Link
              to="/apps"
              className="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl"
            >
              Show All
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
