import { ExperienceKey } from './experience-key.interface';

export interface Experience {
  startDate: Date;
  endDate?: Date;
  location: string;
  company: string;
  title: string;
  keys: ExperienceKey[];
}
