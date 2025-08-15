import type { ImageMetadata } from "astro:assets";
import careernovaImg from "../assets/projects/careernova1.png";
import circlepopImg from "../assets/projects/circlepop1.png";
import expressionEditorImg from "../assets/projects/expressioneditor1.png";
import micasenseImg from "../assets/projects/micasense1.jpeg";

export interface ProjectSummary {
  slug: string;
  title: string;
  img: ImageMetadata;
  resumeTitle: string;
  description: string;
  critical: boolean; // whether this should be displayed on the resume
}

export const projectSummaries: ProjectSummary[] = [
  {
    slug: "circlepop",
    title: "Circlepop",
    img: circlepopImg,
    resumeTitle: "Circlepop - Transit and Population Within A Circle",
    description:
      "Full-stack project using React along with Neon to host PostGRES and Vercel to host the frontend. Reveals population and transit stop data within a given circle.",
    critical: true,
  },
  {
    slug: "careernova",
    title: "Careernova",
    img: careernovaImg,
    resumeTitle: "Careernova.pro - Automated Cover Letter Generator",
    description:
      "Full-stack project; uses SST framework (as a means to manage AWS infrastructure), React and Typescript. AI and prompt engineering are used to generate cover letters and resume advice for users.",
    critical: true,
    },
  {
    slug: "expressioneditor",
    title: "Expression Editor (AWS Honeycode)",
    img: expressionEditorImg,
    resumeTitle: "Expression Editor - Conditional Logic Editor (AWS Honeycode)",
    description:
      "Complex reusable UI component for defining conditional logic in a visual manner",
    critical: false,
  },
  {
    slug: "micasense",
    title: "MicaSense (React port)",
    img: micasenseImg,
    resumeTitle: "MicaSense - Port to React",
    description:
      "Ported the existing Backbonejs-based app to React, using React + Leaflet to display multispectral data",
    critical: false,
  },
];

export default projectSummaries;
