export const socials = [
  {
    name: "X (Twitter)",
    url: "https://x.com/Akram_X207",
    handle: "@Akram_X207",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/akram-x207",
    handle: "/in/akram-x207",
  },
  {
    name: "GitHub",
    url: "https://github.com/Akram-X207",
    handle: "/Akram-X207",
  },
  {
    name: "Email",
    url: "mailto:akram207.exe@gmail.com",
    handle: "Contact me",
  },
];

export const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "HTML",
  "CSS",
  "TailwindCSS",
  "Git",
  "REST APIs",
  "Supabase",
  "Vercel",
];

export const projects = [
  {
    name: "My Tasks",
    tech: "Node.js • Express • Supabase",
    desc: "A modern, responsive Todo app securely managing tasks with JWT and PostgreSQL Row Level Security.",
    link: "https://github.com/Akram-X207/My_Tasks",
    liveLink: "https://my-tasks-akram-x207s-projects.vercel.app/",
  },
];

export type PR = { title: string; url: string };
export type Repo = { name: string; prs: PR[] };

export const repos: Repo[] = [];
