import { useState, useMemo, useEffect } from 'react';
import AppCard from '../components/AppCard';
import data from '../data/data';

export default function Apps() {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  const [searching, setSearching] = useState(false);
  const [debouncedSearch, setDebouncedSearch] = useState('');

  // Debounce search with loading animation
  useEffect(() => {
    setSearching(true);
    const t = setTimeout(() => {
      setDebouncedSearch(search);
      setSearching(false);
    }, 400);
    return () => clearTimeout(t);
  }, [search]);

  const filtered = useMemo(() => {
    let result = data.filter((a) =>
      a.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
    if (sort === 'high-low') result = [...result].sort((a, b) => b.downloads - a.downloads);
    if (sort === 'low-high') result = [...result].sort((a, b) => a.downloads - b.downloads);
    return result;
  }, [debouncedSearch, sort]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Title */}
      <div className="text-center py-12 px-4">
        <h1 className="text-4xl font-extrabold text-dark">Our All Applications</h1>
        <p className="text-gray-500 mt-2">Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>

      {/* Search & count */}
      <div className="max-w-6xl mx-auto px-4 mb-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-bold text-dark text-lg">({filtered.length}) Apps Found</span>
            {/* Sort dropdown */}
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none bg-white border border-gray-200 rounded-xl px-3 py-2 pr-8 text-sm font-semibold text-gray-700 focus:outline-none focus:border-primary cursor-pointer shadow-sm"
              >
                <option value="">Sort By Downloads</option>
                <option value="high-low">High → Low</option>
                <option value="low-high">Low → High</option>
              </select>
              <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M7 10l5 5 5-5z"/></svg>
              </span>
            </div>
          </div>

          <div className="relative w-full sm:w-72">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              type="text"
              placeholder="search Apps"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary bg-white shadow-sm"
            />
            {searching && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <div className="w-4 h-4 border-2 border-gray-200 border-t-primary rounded-full animate-spin" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Apps grid */}
      <div className="max-w-6xl mx-auto px-4 pb-14">
        {searching ? (
          <div className="flex justify-center py-20">
            <div className="spinner" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-dark mb-2">No App Found</h3>
            <p className="text-gray-500">Try searching with a different keyword</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
