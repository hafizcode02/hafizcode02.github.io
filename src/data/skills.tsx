// Sample skills with icons
import {
  Database,
  LayoutGrid,
  Palette,
  Globe,
  Cloud,
  GitBranch,
  Terminal,
  CodeXml,
  Library,
} from "lucide-react";

const backendSkills = [
  { name: "PHP", icon: CodeXml },
  { name: "Python", icon: CodeXml },
  { name: "Node.js", icon: CodeXml },
  { name: "Typescript", icon: CodeXml },
  { name: "Express", icon: Library },
  { name: "Laravel", icon: Library },
  { name: "Flask", icon: Library },
  { name: "Nest.js", icon: Library },
  { name: "MySQL", icon: Database },
  { name: "PostgreSQL", icon: Database },
];

const frontendSkills = [
  { name: "React", icon: LayoutGrid },
  { name: "TypeScript", icon: CodeXml },
  { name: "Tailwind CSS", icon: Palette },
  { name: "Next.js", icon: Globe },
  { name: "Bootstrap CSS", icon: Palette },
  { name: "jQuery", icon: CodeXml },
];

const devopsSkills = [
  { name: "Google Cloud", icon: Cloud },
  { name: "Docker", icon: Terminal },
  { name: "CI/CD", icon: GitBranch },
  { name: "Linux", icon: Terminal },
  { name: "HashiCorp Vault", icon: Terminal },
  { name: "Kubernetes", icon: Terminal }
];

export { backendSkills, frontendSkills, devopsSkills };
