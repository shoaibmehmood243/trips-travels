import React from "react";

export const OrbBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Blue Orb - Top Left */}
      <div
        className="orb orb-blue -top-[10%] -left-[10%]"
        style={{
          animation: "floatBlue 12s ease-in-out infinite alternate",
        }}
      />

      {/* Gold Orb - Bottom Right */}
      <div
        className="orb orb-gold top-[40%] -right-[10%]"
        style={{
          animation: "floatGold 10s ease-in-out infinite alternate",
        }}
      />

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes floatBlue {
          0% { transform: translate(0px, 0px) scale(1); }
          100% { transform: translate(40px, -35px) scale(1.1); }
        }
        @keyframes floatGold {
          0% { transform: translate(0px, 0px) scale(1); }
          100% { transform: translate(-35px, 40px) scale(1.05); }
        }
      `,
        }}
      />
    </div>
  );
};
export default OrbBackground;
