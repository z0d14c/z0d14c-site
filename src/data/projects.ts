import careernovaImg from "@assets/projects/careernova1.png";
import circlepopImg from "@assets/projects/circlepop1.png";
import type { ImageMetadata } from "astro:assets";

export interface Project {
  title: string;
  slug: string;
  description: string;
  img: ImageMetadata;
}

export const projects: Project[] = [
  {
    title: "Circlepop",
    slug: "circlepop",
    description:
      "Proof of concept for a transit and population density map within a given radius",
    img: circlepopImg,
  },
  {
    title: "Careernova",
    slug: "careernova",
    description:
      "A platform for job seekers to tailor their resume to a given job description",
    img: careernovaImg,
  },
];
