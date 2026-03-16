import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

const Logo = () => (
  <Link to="/" className="flex items-center gap-2">
    <div className="w-8 h-8 rounded-xl flex items-center justify-center">
      <img src={logo} alt="" />
    </div>
    <span className="text-lg font-extrabold tracking-tight text-white">
      HERO<span className="text-purple-300"> IO</span>
    </span>
  </Link>
);

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-6 border-b border-white/10">
          <div>
            <Logo />
            <p className="text-gray-400 text-sm mt-3 max-w-xs leading-relaxed">
              We craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-300 mb-3">Social Links</p>
            <div className="flex gap-3">
              {/* X/Twitter */}
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="pt-4 text-center text-gray-500 text-sm">
          Copyright © 2026 – All right reserved
        </div>
      </div>
    </footer>
  );
}
