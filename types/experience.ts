export interface Experience {
  id: string;
  role: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string | "Present";
  description: string[];
  technologies?: string[];
}
