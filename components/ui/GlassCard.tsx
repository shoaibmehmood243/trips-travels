import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  borderTopGold?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  hoverEffect = false,
  borderTopGold = false,
  className = "",
  ...props
}) => {
  return (
    <div
      className={`glass-card p-6 md:p-8 transition-all duration-300 ${
        hoverEffect
          ? "hover:-translate-y-1.5 hover:shadow-xl hover:shadow-gold/5 hover:border-white/20"
          : ""
      } ${
        borderTopGold ? "border-t-[3px] border-t-gold" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
export default GlassCard;
