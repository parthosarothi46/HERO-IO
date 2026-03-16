import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

function formatNum(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
  if (n >= 1000) return (n / 1000).toFixed(0) + 'K';
  return n;
}

export default function Installation() {
  const [installed, setInstalled] = useState([]);
  const [sort, setSort] = useState('');

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('installedApps') || '[]');
    setInstalled(stored);
  }, []);

  const handleUninstall = (id) => {
    const updated = installed.filter((a) => a.id !== id);
    setInstalled(updated);
    localStorage.setItem('installedApps', JSON.stringify(updated));
    toast('🗑️ App uninstalled successfully', {
      style: { background: '#EF4444', color: '#fff' }
    });
  };

  const sorted = [...installed].sort((a, b) => {
    if (sort === 'high-low') return b.size - a.size;
    if (sort === 'low-high') return a.size - b.size;
    return 0;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="text-center py-12 px-4">
        <h1 className="text-4xl font-extrabold text-dark">Your Installed Apps</h1>
        <p className="text-gray-500 mt-2">Explore All Trending Apps on the Market developed by us</p>
      </div>

      <div className="max-w-3xl mx-auto px-4 pb-14">
        {/* Count + sort */}
        <div className="flex items-center justify-between mb-5">
          <span className="font-bold text-dark text-lg">{installed.length} Apps Found</span>
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-2 pr-8 text-sm font-semibold text-gray-700 focus:outline-none focus:border-primary cursor-pointer shadow-sm"
            >
              <option value="">Sort By Size</option>
              <option value="high-low">Size: High → Low</option>
              <option value="low-high">Size: Low → High</option>
            </select>
            <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M7 10l5 5 5-5z"/></svg>
            </span>
          </div>
        </div>

        {/* Empty state */}
        {installed.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-4xl">📱</div>
            <h3 className="text-xl font-bold text-dark mb-2">No Apps Installed</h3>
            <p className="text-gray-500 mb-6">You haven't installed any apps yet. Explore our collection!</p>
            <Link to="/apps" className="px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all">
              Browse Apps
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {sorted.map((app) => (
              <div key={app.id} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex items-center gap-4">
                <div className="w-14 h-14 bg-gray-100 rounded-xl flex-shrink-0 overflow-hidden">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-dark text-sm truncate">{app.title}</h3>
                  <div className="flex items-center gap-3 mt-1 flex-wrap">
                    <span className="flex items-center gap-1 text-xs font-semibold text-accent">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 16l-6-6h4V4h4v6h4z"/><rect x="4" y="18" width="16" height="2" rx="1"/>
                      </svg>
                      {formatNum(app.downloads)}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-orange-500">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                      </svg>
                      {app.ratingAvg}
                    </span>
                    <span className="text-xs text-gray-400">{app.size} MB</span>
                  </div>
                </div>
                <button
                  onClick={() => handleUninstall(app.id)}
                  className="flex-shrink-0 px-4 py-2 bg-accent text-white font-bold text-sm rounded-xl hover:bg-green-600 transition-all"
                >
                  Uninstall
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
