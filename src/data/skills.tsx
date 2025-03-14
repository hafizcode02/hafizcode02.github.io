// Sample skills with icons
import {
  Server,
  Database,
  FileJson,
  LayoutGrid,
  Palette,
  Globe,
  Cloud,
  GitBranch,
  Terminal,
} from "lucide-react";

const backendSkills = [
  { name: "PHP", icon: FileJson },
  { name: "Python", icon: FileJson },
  { name: "Node.js", icon: FileJson },
  { name: "Typescript", icon: FileJson },
  { name: "Express", icon: Server },
  { name: "Laravel", icon: Server },
  { name: "Flask", icon: Server },
  { name: "Nest.js", icon: Server },
  { name: "MySQL", icon: Database },
  { name: "PostgreSQL", icon: Database },
];

const frontendSkills = [
  { name: "React", icon: LayoutGrid },
  { name: "TypeScript", icon: FileJson },
  { name: "Tailwind CSS", icon: Palette },
  { name: "Next.js", icon: Globe },
  { name: "Bootstrap CSS", icon: Palette },
  { name: "jQuery", icon: FileJson },
];

const devopsSkills = [
  { name: "Google Cloud", icon: Cloud },
  { name: "Docker", icon: Terminal },
  { name: "CI/CD", icon: GitBranch },
  { name: "Linux", icon: Terminal },
];

export { backendSkills, frontendSkills, devopsSkills };
