import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  fullWidth = false,
  className = "",
  ...props
}) => {
  const baseStyle =
    "inline-flex items-center justify-center font-sans font-medium rounded-full transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const variants = {
    primary: "bg-gold text-navy hover:bg-[#dca83d] hover:scale-[1.03] active:scale-[0.97] shadow-lg shadow-gold/10",
    secondary: "bg-sky text-white hover:bg-[#257fe8] hover:scale-[1.03] active:scale-[0.97] shadow-lg shadow-sky/10",
    outline: "border border-gold text-gold hover:bg-gold hover:text-navy hover:scale-[1.03] active:scale-[0.97]",
    ghost: "text-white hover:bg-white/10 hover:scale-[1.03] active:scale-[0.97]",
  };

  const widthStyle = fullWidth ? "w-full" : "";
  const sizeStyle = "px-6 py-3 text-sm md:text-base min-h-[44px]";

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${widthStyle} ${sizeStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
