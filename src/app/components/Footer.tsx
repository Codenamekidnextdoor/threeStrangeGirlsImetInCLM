export function Footer() {
  return (
    <footer className="bg-[#FFFBF5] border-t-2 border-[#E1BEE7]/30 py-12 text-center backdrop-blur">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="baloo font-black text-2xl grad-text">
            Princess Alice Adoption Home
          </span>
        </div>
        <p className="text-[#4A4A4A] text-sm mb-1">
          Community Profile & Needs Analysis
        </p>
        <p className="text-[#4A4A4A] text-xs">Academic Service Learning Project</p>
        <div className="h-1.5 w-20 grad-primary mx-auto rounded-full my-5"></div>
        <p className="text-[#D35400] text-base italic font-semibold">
          "Little hands, big hearts"
        </p>
      </div>
    </footer>
  );
}