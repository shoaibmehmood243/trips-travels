"use client";

import React, { useEffect, useState } from "react";

export const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 animate-fade-in">
      <div className="glass-card p-6 border-t-[3px] border-t-gold flex flex-col space-y-4 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gold/5 blur-xl pointer-events-none" />
        <div className="relative z-10">
          <h4 className="font-bold text-white text-base mb-1 font-display">
            Cookie Preferences
          </h4>
          <p className="text-muted text-sm leading-relaxed">
            We use cookies to improve your browsing experience and analyze site traffic.
            By clicking &ldquo;Accept&rdquo;, you consent to our use of analytics.
          </p>
        </div>
        <div className="flex items-center space-x-3 relative z-10">
          <button
            onClick={handleAccept}
            className="flex-1 min-h-[44px] bg-gold hover:bg-[#dca83d] text-navy font-semibold text-sm rounded-lg transition-all duration-150 active:scale-[0.98] cursor-pointer"
          >
            Accept
          </button>
          <button
            onClick={handleDecline}
            className="flex-1 min-h-[44px] bg-white/5 hover:bg-white/10 text-white border border-white/10 font-semibold text-sm rounded-lg transition-all duration-150 active:scale-[0.98] cursor-pointer"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};
export default CookieConsent;
