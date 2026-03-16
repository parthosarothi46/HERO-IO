import { useNavigate } from 'react-router-dom';
import error from '../assets/error.png'

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 text-center py-20">
      {/* 404 Illustration */}
      <div className="w-64 h-64 relative mb-6">
        <img src={error} alt="error" />
      </div>

      <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-3">OOPS!! APP NOT FOUND</h2>
      <p className="text-gray-500 mb-8 max-w-sm">The page you are looking for is not available.</p>
      <button
        onClick={() => navigate(-1)}
        className="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all shadow-lg"
      >
        Go Back!
      </button>
    </div>
  );
}
