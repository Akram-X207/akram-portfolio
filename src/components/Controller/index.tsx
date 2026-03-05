"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";

type Props = {
  activeSection?: "meet-me" | "skills" | "my-work" | "projects" | "socials";
  onSectionChange?: (
    section: "meet-me" | "skills" | "my-work" | "projects" | "socials"
  ) => void;
};

const Controller = ({ activeSection = "meet-me", onSectionChange }: Props) => {
  const { theme } = useTheme();
  const [screenWidth, setScreenWidth] = useState(0);
  const [effectiveActiveSection, setEffectiveActiveSection] = useState(activeSection);

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    updateScreenWidth();

    window.addEventListener("resize", updateScreenWidth);

    return () => window.removeEventListener("resize", updateScreenWidth);
  }, []);

  // Watch URL for project hashes and override active section
  useEffect(() => {
    const checkForProject = () => {
      const hash = window.location.hash;
      if (hash.includes("project")) {
        setEffectiveActiveSection("my-work");
      } else {
        setEffectiveActiveSection(activeSection);
      }
    };

    // Initial check
    checkForProject();

    // Listen for hash changes
    window.addEventListener("hashchange", checkForProject);
    return () => window.removeEventListener("hashchange", checkForProject);
  }, [activeSection]);

  const borderClass = theme === "dark" ? "border-white/80" : "border-black";

  const getActiveButtonClass = (
    section: "meet-me" | "skills" | "my-work" | "projects" | "socials"
  ) => {
    const isActive = effectiveActiveSection === section;
    if (theme === "dark") {
      return isActive
        ? "border-white/80 text-white/90 hover:bg-white/90 hover:text-black font-semibold"
        : "border-white/80 text-white/50 hover:bg-white/90 hover:text-black";
    } else {
      return isActive
        ? "border-black text-black/90 hover:bg-black/90 hover:text-white font-semibold"
        : "border-black text-black/50 hover:bg-black/90 hover:text-white";
    }
  };

  const buttons: Array<{ label: string; section: "meet-me" | "skills" | "my-work" | "projects" | "socials" }> = [
    { label: "ABOUT ME", section: "meet-me" },
    { label: "SKILLS", section: "skills" },
    { label: "MY WORK", section: "my-work" },
    { label: "PROJECTS", section: "projects" },
    { label: "SOCIALS", section: "socials" },
  ];

  return (
    <div className="flex flex-col items-center md:items-start justify-center w-full h-full p-3 md:p-4 gap-2 md:gap-0 3xl:gap-4">
      <div className="flex items-center md:flex-col md:items-start w-full">
        {(screenWidth < 823 || screenWidth > 825) && (
          <Image
            width={40}
            height={40}
            src="/profilePic.jpg"
            alt="Shaikh Akram"
            className={`w-16 h-16 2xl:w-20 2xl:h-20 rounded-2xl object-cover md:mb-3 border-[0.095rem] ${borderClass}`}
          />
        )}
        <div className="flex flex-col items-start ml-4 md:ml-0">
          <h2 className="text-lg md:text-xl 2xl:text-2xl font-semibold tracking-widest">
            Shaikh Akram
          </h2>
          <p className="text-sm xl:text-xs 2xl:text-base font-semibold text-gray-400">
            Software Developer
          </p>
        </div>
      </div>
      <div className="w-full md:h-full flex flex-col items-center justify-start gap-2 gap-y-3 mt-3">
        {/* Mobile: two rows of buttons */}
        <div className="w-full flex md:hidden gap-2">
          {buttons.slice(0, 3).map(({ label, section }) => (
            <button
              key={section}
              onClick={() => onSectionChange?.(section)}
              className={`w-full py-1 text-sm font-semibold border rounded-full transition-all duration-300 ease-in-out cursor-pointer ${getActiveButtonClass(section)}`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="w-full flex md:hidden gap-3">
          {buttons.slice(3).map(({ label, section }) => (
            <button
              key={section}
              onClick={() => onSectionChange?.(section)}
              className={`w-full py-1 text-sm font-semibold border rounded-full transition-all duration-300 ease-in-out cursor-pointer ${getActiveButtonClass(section)}`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Desktop: full list */}
        {buttons.map(({ label, section }) => (
          <button
            key={section}
            onClick={() => onSectionChange?.(section)}
            className={`w-full py-2 text-xs 2xl:text-md font-semibold border xl:border-[0.093rem] rounded-full transition-all duration-300 ease-in-out hidden md:block cursor-pointer ${getActiveButtonClass(section)}`}
          >
            {label}
          </button>
        ))}

      </div>
    </div>
  );
};

export default Controller;
