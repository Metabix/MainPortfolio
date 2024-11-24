'use client'
export const runtime = 'edge';
export function ScrollToTopButton() {
  return (
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 text-4xl text-[#565264] dark:text-[#a6808c] hover:opacity-70 transition-all duration-300"
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}