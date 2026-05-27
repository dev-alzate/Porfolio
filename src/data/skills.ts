

export type Skill = {
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
  icon: string;
};


export const skills: Skill[] = [
  { name: "React", level: 4, icon: "react" },
  { name: "Next.js", level: 4, icon: "nextjs" },
  { name: "TypeScript", level: 4, icon: "typescript" },
  { name: "JavaScript", level: 4, icon: "javascript" },
  { name: "HTML5", level: 4, icon: "html5" },
  { name: "CSS3", level: 4, icon: "css3" },
  { name: "Tailwind CSS", level: 4, icon: "tailwindcss" },
  { name: "Node.js", level: 3, icon: "nodejs" },
  { name: "Nest.js", level: 3, icon: "nestjs" },
  { name: "Python", level: 4, icon: "python" },
  { name: "MongoDB", level: 3, icon: "mongodb" },
  { name: "Pytest", level: 3, icon: "pytest" },
];

export const tools: Skill[] = [
  { name: "Git", level: 4, icon: "git" },
  { name: "GitHub", level: 4, icon: "github" },
  { name: "Postman", level: 4, icon: "postman" },
  { name: "Jira", level: 4, icon: "jira" },
  { name: "Figma", level: 3, icon: "figma" },
  { name: "Azure DevOps", level: 3, icon: "azuredevops" },
  { name: "Docker", level: 3, icon: "docker" },
];