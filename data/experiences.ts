import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiCss3,
  SiGit,
  SiHtml5,
  SiJest,
  SiVisualstudiocode,
  SiNextdotjs,
  SiSass,
} from "react-icons/si";
import { Experience } from "../src/types/experience";

export const dailyTasks = [
  "Setting up codebase",
  "Code refactor",
  "Code review",
  "Setting up front-end architecture",
  "Coming up with suggestions",
  "Write e2e & unit tests",
  "Write documentation",
];

export const experiences: Experience[] = [
  {
    title: "Frontend Developer",
    customer: "Freelance",
    description:
      "Engineered high-performance applications using Next.js 14, optimizing user experience through SSR and CSR techniques, resulting in a 20% increase in user satisfaction scores. Customized and utilized the ShadCN component library, achieving a consistent and reusable UI across multiple projects, reducing development time by 15%. Implemented advanced rendering strategies, enhancing scalability and efficiency of web applications, leading to a 25% improvement in load times. Conducted thorough testing and debugging, maintaining high-quality standards and minimizing production issues, decreasing bug-related incidents by 40%. Collaborated with design and development teams, ensuring seamless UI component integration and reducing integration issues by 30%.",
    image: "freelance.svg",
    period: "June, 2024 – Present",
    colors: ["#000", "blue"],
    technologies: [
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "React", Icon: SiReact },
      { name: "HTML5", Icon: SiHtml5 },
      { name: "CSS3", Icon: SiCss3 },
      { name: "SCSS", Icon: SiSass },
      { name: "Git", Icon: SiGit },
      { name: "VSCode", Icon: SiVisualstudiocode },
    ],
  },
  {
    title: "Frontend Developer",
    customer: "MyData-co",
    description:
      "Refactored and analyzed code, improving readability and maintainability by 30%, leading to easier future updates and modifications. Developed and maintained a custom UI kit using SCSS, which increased the reusability of components and reduced customization time by 30%. Built a project with Next.js 13, focusing on modern web development practices and performance optimization, resulting in a 25% decrease in page load times. Contributed to products that are currently used by over 100,000 users, significantly impacting user engagement and satisfaction. Optimized application performance, resulting in a 15% faster load time and a 10% increase in user engagement.",
    image: "mydata_co_logo.jpeg",
    period: "November, 2022 – June, 2024",
    colors: ["#000", "blue"],
    technologies: [
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "React", Icon: SiReact },
      { name: "HTML5", Icon: SiHtml5 },
      { name: "CSS3", Icon: SiCss3 },
      { name: "SCSS", Icon: SiSass },
      { name: "Git", Icon: SiGit },
      { name: "VSCode", Icon: SiVisualstudiocode },
    ],
  },
  {
    title: "Teaching Assistant",
    customer: "Maktab Sharif",
    description:
      "Taught HTML and CSS for building and styling web pages, and JavaScript (ES6, ES7) fundamentals and advanced features to over 50 students. Instructed students on TypeScript fundamentals, enabling robust, type-safe code development, resulting in a 30% improvement in student project stability. Guided students through React.js, including hooks, routing, custom hooks, HOC, and state management, helping students reduce development time by 20%. Educated on version control with Git and GitHub, including branching, merging, and pull requests, increasing student collaboration efficiency by 30%. Tutored students in testing and debugging web applications using Jest and React Testing Library, improving test coverage by 40%.",
    image: "maktabsharif_logo.jpeg",
    period: "August, 2022 – Present",
    colors: ["#000", "blue"],
    technologies: [
      { name: "JavaScript", Icon: SiJavascript },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "React", Icon: SiReact },
      { name: "HTML5", Icon: SiHtml5 },
      { name: "CSS3", Icon: SiCss3 },
      { name: "Git", Icon: SiGit },
      { name: "Jest", Icon: SiJest },
      { name: "VSCode", Icon: SiVisualstudiocode },
    ],
  },
];
