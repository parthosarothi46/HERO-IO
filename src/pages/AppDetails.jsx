import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  BarChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  Bar
} from 'recharts';
import data from '../data/data';
import toast from 'react-hot-toast';
import download from '../assets/icon-downloads.png'
import ratings from '../assets/icon-ratings.png'
import review from '../assets/icon-review.png'

function formatNum(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
  if (n >= 1000) return (n / 1000).toFixed(0) + 'K';
  return n;
}

export default function AppDetails() {
  const { id } = useParams();
  const app = data.find((a) => a.id === parseInt(id));

  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    if (!app) return;
    const stored = JSON.parse(localStorage.getItem('installedApps') || '[]');
    setInstalled(stored.some((a) => a.id === app.id));
  }, [app]);

  const handleInstall = () => {
    if (installed) return;
    const stored = JSON.parse(localStorage.getItem('installedApps') || '[]');
    stored.push(app);
    localStorage.setItem('installedApps', JSON.stringify(stored));
    setInstalled(true);
    toast.success(`✅ ${app.title} installed successfully!`);
  };

  if (!app) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 text-center py-20">
        <div className="w-40 h-40 bg-amber-100 rounded-full flex items-center justify-center mb-6">
          <span className="text-6xl">🐱</span>
        </div>
        <h2 className="text-3xl font-extrabold text-dark mb-3 uppercase tracking-wide">Opps!! App Not Found</h2>
        <p className="text-gray-500 mb-6">The App you are requesting is not found on our system. Please try another app.</p>
        <Link to="/apps" className="px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all">
          Go Back!
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* App info */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 mb-6">
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Image */}
            <div className="flex-shrink-0">
              <div className="w-40 h-40 bg-gray-100 rounded-2xl overflow-hidden border border-gray-200">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
            </div>

            {/* Details */}
            <div className="flex-1">
              <h1 className="text-2xl font-extrabold text-dark">{app.title}</h1>
              <p className="text-sm text-gray-500 mt-1">
                Developed by{' '}
                <span className="text-primary font-semibold">{app.companyName}</span>
              </p>

              <hr className="my-4 border-gray-100" />

              <div className="flex gap-6 flex-wrap">
                <div>
                  <div className="flex items-center gap-1.5 text-accent mb-1">
                    <img src={download} className='w-5 h-5' alt="" />
                    <span className="text-xs text-gray-400">Downloads</span>
                  </div>
                  <p className="text-2xl font-extrabold text-dark">{formatNum(app.downloads)}</p>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-orange-400 mb-1">
                    <img src={ratings} className='w-5 h-5' alt="" />
                    <span className="text-xs text-gray-400">Average Ratings</span>
                  </div>
                  <p className="text-2xl font-extrabold text-dark">{app.ratingAvg}</p>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-purple-500 mb-1">
                    <img src={review} className='w-5 h-5' alt="" />
                    <span className="text-xs text-gray-400">Total Reviews</span>
                  </div>
                  <p className="text-2xl font-extrabold text-dark">{formatNum(app.reviews)}</p>
                </div>
              </div>

              <div className="mt-5">
                <button
                  onClick={handleInstall}
                  disabled={installed}
                  className={`px-6 py-3 rounded-xl font-bold text-white transition-all ${
                    installed
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-accent hover:bg-green-600 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {installed ? '✓ Installed' : `Install Now (${app.size} MB)`}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Ratings Chart */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 mb-6">
          <h2 className="text-xl font-extrabold text-dark mb-6">Ratings</h2>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart
              data={[...app.ratings].reverse()}
              layout="vertical"
              margin={{ top: 0, right: 20, left: 10, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f0f0f0" />
              <XAxis type="number" tick={{ fontSize: 12 }} />
              <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} width={45} />
              <Tooltip
                formatter={(val) => [val.toLocaleString(), 'Reviews']}
                contentStyle={{ borderRadius: 8, border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
              />
              <Bar dataKey="count" fill="#f97316" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Description */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
          <h2 className="text-xl font-extrabold text-dark mb-4">Description</h2>
          {app.description.split('\n').filter(Boolean).map((para, i) => (
            <p key={i} className="text-gray-600 leading-relaxed mb-4 text-sm">
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
