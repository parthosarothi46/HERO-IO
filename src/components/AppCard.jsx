import { Link } from 'react-router-dom';

function formatDownloads(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(0) + 'M';
  if (n >= 1000) return (n / 1000).toFixed(0) + 'K';
  return n;
}

export default function AppCard({ app }) {
  return (
    <Link to={`/apps/${app.id}`} className="block">
      <div className="app-card bg-white rounded-2xl overflow-hidden border border-gray-100 cursor-pointer">
        <div className="w-full aspect-[4/3] bg-gray-100 overflow-hidden">
          <img
            src={app.image}
            alt={app.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
        <div className="p-3">
          <h3 className="text-sm font-bold text-dark line-clamp-1 mb-2">{app.title}</h3>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1 text-xs font-semibold text-accent">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 16l-6-6h4V4h4v6h4z"/>
                <rect x="4" y="18" width="16" height="2" rx="1"/>
              </svg>
              {formatDownloads(app.downloads)}
            </span>
            <span className="flex items-center gap-1 text-xs font-semibold text-orange-500">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
              </svg>
              {app.ratingAvg}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
