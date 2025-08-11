import type { ImageMetadata } from "astro:assets";
import careernovaImg from "../assets/projects/careernova1.png";
import circlepopImg from "../assets/projects/circlepop1.png";

export interface ProjectSummary {
  slug: string;
  title: string;
  img: ImageMetadata;
  resumeTitle: string;
  description: string;
}

export const projectSummaries: ProjectSummary[] = [
  {
    slug: "circlepop",
    title: "Circlepop",
    img: circlepopImg,
    resumeTitle: "Circlepop - Transit and Population Within A Circle",
    description:
      "Full-stack project using React along with Neon to host PostGRES and Vercel to host the frontend. Reveals population and transit stop data within a given circle.",
  },
  {
    slug: "careernova",
    title: "Careernova",
    img: careernovaImg,
    resumeTitle: "Careernova.pro - Automated Cover Letter Generator",
    description:
      "Full-stack project; uses SST framework (as a means to manage AWS infrastructure), React and Typescript. AI and prompt engineering are used to generate cover letters and resume advice for users.",
  },
];

export default projectSummaries;
