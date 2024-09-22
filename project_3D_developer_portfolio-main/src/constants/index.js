import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer (Internship)",
    company_name: "Amnex Infotechnology",
    icon: creator,
    iconBg: "#383E56",
    date: "Oct 2023 - July 2024",
    points: [
      "Developed APIs htmlFor efficient communication between software components, enhancing system integration.",
      "Optimized data storage and retrieval by implementing PostgreSQL and improving query performance by 20%.",
      "Integrated 2D and 3D geospatial layers using OpenLayers and Cesium technologies htmlFor advanced visualization.",
      "Leveraged PostGIS and GeoServer htmlFor spatial data management, supporting complex geospatial queries.",
      "Collaborated with cross-functional teams, resulting in a 15% increase in project delivery speed."
    ],
  },
  {
    title: "Software Developer ",
    company_name: "CreArt Solution",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "July 2023 – August 2024",
    points: [
      "During this internship, obtained basic knowledge about PHP Laravel.",
      "We worked on video-calling web apps using web RTC, HTML, CSS, JAVASCRIPT.",
    ],
  },
  {
    title: "Assistant Tutor",
    company_name: "Arihant Sagar Academy",
    icon: creator,
    iconBg: "#383E56",
    date: "Jan 2020 - Jan 2021",
    points: [
      "Planning and implementing lessons following the school's curriculum, goals, and objectives.",
      "Activities includes designing questions ,conducting exams,checking answersheets",
      "During this tenure, I improved my skills in Organizing, Managenet, Leadership, and Team Work"
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Digital Twin",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution htmlFor transportation needs.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQl",
        color: "green-text-gradient",
      },
      {
        name: "kendo UI/bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Parking Assistant",
    description:
      "Web application that enables users to search htmlFor job openings, view estimated salary ranges htmlFor positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "TinDog",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations htmlFor popular destinations.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Jquery",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
