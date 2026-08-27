import { useEffect, useRef } from 'react';

export default function AdBanner({ slot = "auto", format = "auto" }) {
  const adLoaded = useRef(false);

  useEffect(() => {
    // Only push once to avoid React strict mode errors
    if (adLoaded.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      adLoaded.current = true;
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className="w-full h-full relative">
      <ins 
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', height: '100%' }}
        data-ad-client="ca-pub-4689474005583095"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
      {/* Fallback label if ad blocker is active */}
      <div className="absolute inset-0 flex items-center justify-center -z-10 bg-gray-100 text-gray-400 text-xs uppercase tracking-widest pointer-events-none">
        Advertisement
      </div>
    </div>
  );
}
