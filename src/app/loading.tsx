export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 border-2 border-[#E4E4E7] border-t-[#09090B] rounded-full animate-spin"></div>
        <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-[#71717A]">
          Loading...
        </p>
      </div>
    </div>
  );
}
