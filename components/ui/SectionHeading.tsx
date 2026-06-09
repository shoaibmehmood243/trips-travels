import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  theme?: "light" | "dark";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = false,
  theme = "dark",
  className = "",
}) => {
  return (
    <div
      className={`mb-10 md:mb-12 ${
        centered ? "text-center max-w-2xl mx-auto" : "max-w-3xl"
      } ${className}`}
    >
      <h2
        className={`text-3xl md:text-4xl font-semibold font-sans tracking-tight mb-4 ${
          theme === "dark" ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg leading-relaxed ${
            theme === "dark" ? "text-muted" : "text-navy/70"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
export default SectionHeading;
