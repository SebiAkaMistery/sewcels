import { useState, useEffect } from 'react';

export default function ScrollIndicator() {
  const [showDownArrow, setShowDownArrow] = useState(true);
  const [showUpArrow, setShowUpArrow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      setShowDownArrow(scrollTop < 100);
      setShowUpArrow(scrollTop + windowHeight >= docHeight - 100);
    };

    window.addEventListener('scroll', onScroll);
    onScroll(); // call once on mount

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {showDownArrow && (
        <div className="fixed bottom-4 left-1/2 z-50 transform -translate-x-1/2 animate-bounce text-gray-700 cursor-pointer select-none">
          {/* săgeată jos SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
        </div>
      )}
      {showUpArrow && (
        <div
          className="fixed bottom-[160px] right-[110px] z-50 rounded-full border border-gray-400 bg-white p-2 shadow-lg cursor-pointer select-none animate-bounce text-gray-700"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
          role="button"
          tabIndex={0}
          onKeyPress={(e) => { if (e.key === 'Enter' || e.key === ' ') window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          {/* săgeată sus SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="5 12 12 5 19 12" />
          </svg>
        </div>
      )}
    </>
  );
}