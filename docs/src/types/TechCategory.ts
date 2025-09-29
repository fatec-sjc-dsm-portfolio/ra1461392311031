import { IconType } from 'react-icons';

export interface TechItem {
  name: string;
  color: string;
  icon: IconType;
}

export interface TechCategory {
  name: string;
  tech: TechItem[];
}
