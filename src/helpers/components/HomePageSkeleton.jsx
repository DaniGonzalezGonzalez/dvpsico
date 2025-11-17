export function HomePageSkeleton() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm">
      <img
        src="/favicon.png"
        alt="Logo DvPsico"
        className="max-w-[70%] max-h-[70%] xl:max-w-[30%] xl:max-h-[30%] object-contain animate-fade-in"
      />
    </div>
  )
}
