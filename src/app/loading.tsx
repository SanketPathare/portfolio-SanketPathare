export default function Loading() {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-neutral-600 border-t-gray-400 rounded-full animate-spin"></div>
          <p className="mt-4 text-neutral-400">Loading...</p>
        </div>
      </div>
    )
  }