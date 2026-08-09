export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  category: "XR" | "3D" | "Languages" | "Frameworks" | "Tools" | "Other";
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url?: string;
}
