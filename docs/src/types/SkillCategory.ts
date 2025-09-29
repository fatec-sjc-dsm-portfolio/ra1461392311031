import { IconType } from 'react-icons';

export interface SkillItem {
  name: string;
  color: string;
  icon: IconType;
}

export interface SkillCategory {
  name: string;
  skills: SkillItem[];
}
