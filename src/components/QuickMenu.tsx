"use client";
import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { TbMenu3 } from "react-icons/tb";

export default function QuickMenu({ fromSection }: { fromSection?: string }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // suppress unused var warning
  void fromSection;

  useEffect(() => {
    setMounted(true);

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!mounted) return null;

  const buttonBaseClass = `rounded-full border transition-all duration-300 ease-in-out flex items-center justify-center relative overflow-hidden group`;
  const themeClass =
    theme === "dark"
      ? "bg-white/10 hover:bg-white/90 hover:text-black border-white/20 backdrop-blur-xl"
      : "bg-black/5 hover:bg-black/90 hover:text-white border-black/20 backdrop-blur-xl";

  const triggerClass = `${buttonBaseClass} ${themeClass} p-1.5 md:p-2`;

  return (
    <div className="relative" ref={menuRef}>
      <button
        className={`${triggerClass}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Quick Menu"
      >
        <TbMenu3 className="w-4 h-4 md:w-5 md:h-5" />
      </button>
    </div>
  );
}
