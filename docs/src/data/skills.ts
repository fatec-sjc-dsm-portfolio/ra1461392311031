import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiPython,
  SiNodedotjs,
  SiSpring,
  SiFlask,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiGooglecloud,
  SiDotnet
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import {
  Database,
  FileCode,
  Palette,
  SquareCode,
  Boxes,
  Cloud,
  FlaskConical,
  Users
} from 'lucide-react';

import type { TechCategory } from '@/types/TechCategory';
import type { SkillCategory } from '@/types/SkillCategory';

export const techCategories: TechCategory[] = [
  {
    name: "Frontend",
    tech: [
      { name: "HTML", color: "#E34F26", icon: SiHtml5 },
      { name: "CSS", color: "#1572B6", icon: SiCss3 },
      { name: "JavaScript", color: "#F7DF1E", icon: SiJavascript },
      { name: "TypeScript", color: "#3178C6", icon: SiTypescript },
      { name: "React", color: "#61DAFB", icon: SiReact },
    ]
  },
  {
    name: "Backend",
    tech: [
      { name: "Java", color: "#007396", icon: FaJava },
      { name: "C#", color: "#68217A", icon: SiDotnet },
      { name: "Python", color: "#3776AB", icon: SiPython },
      { name: "Node.js", color: "#339933", icon: SiNodedotjs },
      { name: "Spring", color: "#6DB33F", icon: SiSpring },
      { name: "Flask", color: "#000000", icon: SiFlask },
    ]
  },
  {
    name: "Database & DevOps",
    tech: [
      { name: "MySQL", color: "#4479A1", icon: SiMysql },
      { name: "MongoDB", color: "#47A248", icon: SiMongodb },
      { name: "Redis", color: "#DC382D", icon: SiRedis },
      { name: "Docker", color: "#2496ED", icon: SiDocker },
      { name: "Google Cloud", color: "#4285F4", icon: SiGooglecloud },
    ]
  }
];

export const hardSkillsCategories: SkillCategory[] = [
  {
    name: "Software Architecture",
    skills: [
      { name: "Microservices", icon: Boxes, color: "#007BFF" },
      { name: "RESTful APIs", icon: FileCode, color: "#6C757D" },
      { name: "Design Patterns", icon: Palette, color: "#17A2B8" },
      { name: "SOLID", icon: SquareCode, color: "#28A745" },
    ]
  },
  {
    name: "Database",
    skills: [
      { name: "Data Modeling", icon: Database, color: "#FFC107" },
      { name: "SQL", icon: Database, color: "#DC3545" },
      { name: "NoSQL", icon: Database, color: "#FD7E14" },
    ]
  },
  {
    name: "Methodologies and Practices",
    skills: [
      { name: "SCRUM", icon: Users, color: "#6610F2" },
      { name: "CI/CD", icon: Cloud, color: "#6F42C1" },
    ]
  }
];
