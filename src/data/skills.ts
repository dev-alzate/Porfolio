export type Skill = {
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
};

export const skills: Skill[] = [
  { name: "React", level: 4 },
  { name: "Next.js", level: 4 },
  { name: "TypeScript", level: 4 },
  { name: "JavaScript", level: 4 },
  { name: "HTML5", level: 4 },
  { name: "CSS3", level: 4 },
  { name: "Tailwind CSS", level: 4 },
  { name: "Node.js", level: 3 },
  { name: "Nest.js", level: 3 },
  { name: "Python", level: 4 },
  { name: "MongoDB", level: 3 },
  { name: "Pytest", level: 3 },
];

export const tools: Skill[] = [
  { name: "Git", level: 4 },
  { name: "GitHub", level: 4 },
  { name: "Postman", level: 4 },
  { name: "Jira", level: 4 },
  { name: "Figma", level: 3 },
  { name: "Azure DevOps", level: 3 },
  { name: "Docker", level: 3 },
];
