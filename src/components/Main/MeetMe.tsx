"use client";
import React from "react";
import Link from "next/link";

const MeetMe = () => {
  return (
    <section
      id="meet-me"
      className="flex items-center justify-center h-full w-full overflow-auto"
    >
      <div className="w-full h-full mx-auto max-w-4xl p-2.5 md:p-0 flex items-center md:justify-center ">
        <div className="space-y-12 md:space-y-16">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-wider mb-3 md:mb-4">
              ABOUT ME
            </h2>
            <p className="text-sm lg:text-base xl:text-md leading-relaxed max-w-3xl mx-auto ">
              Hi! I&apos;m <span className="[font-weight:700]">Shaikh Akram</span>,
              a <span className="[font-weight:700]">Software Developer</span> and B.Tech CSE student passionate about building modern, responsive, and user-focused web applications. I enjoy turning ideas into real products while continuously improving my skills in full-stack development.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-wider mb-3 md:mb-4">
              HIRE ME
            </h2>
            <p className="text-sm lg:text-base xl:text-md leading-relaxed max-w-3xl mx-auto">
              I&apos;m available for freelance and internship opportunities. If
              you need a committed developer to build or improve your product,
              feel free to connect.
              <Link
                href="mailto:akram207.exe@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-3 font-bold underline [text-decoration-thickness:1px]"
              >
                akram207.exe@gmail.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetMe;
