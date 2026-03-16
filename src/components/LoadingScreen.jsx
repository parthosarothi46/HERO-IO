
export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="spinner"></div>
        <p className="text-sm font-semibold text-gray-500">Loading...</p>
      </div>
    </div>
  );
}
