import {
  Cpu,
  Code2,
  Coffee,
  Braces,
  FileCode2,
  Palette,
  Terminal,
  Network,
  Wind,
  Database,
  PenTool,
  GitBranch,
  Github,
} from "lucide-react";

/**
 * MODEL — Compétences techniques
 * `color` référence une clé du thème ("primary" | "secondary" | "tertiary").
 */
export const SKILLS = [
  { name: "C", tag: "Foundation Roots", icon: Cpu, color: "primary" },
  { name: "C++", tag: "Solid Trunk", icon: Code2, color: "secondary" },
  { name: "Java", tag: "The Strong Root", icon: Coffee, color: "tertiary" },
  { name: "JavaScript", tag: "Quick Bloom", icon: Braces, color: "primary" },
  { name: "HTML", tag: "Garden Frame", icon: FileCode2, color: "secondary" },
  { name: "CSS", tag: "Petal Styling", icon: Palette, color: "tertiary" },
  { name: "Python", tag: "Green Thumb", icon: Terminal, color: "primary" },
  { name: "Node.js", tag: "Fast Sprout", icon: Network, color: "secondary" },
  { name: "Tailwind CSS", tag: "Effortless Growth", icon: Wind, color: "tertiary" },
  { name: "SQL", tag: "Deep Roots", icon: Database, color: "primary" },
  { name: "Figma", tag: "Design Sketchbook", icon: PenTool, color: "secondary" },
  { name: "Git", tag: "Version Control", icon: GitBranch, color: "tertiary" },
  { name: "GitHub", tag: "Branch & Bloom", icon: Github, color: "primary" },
];
