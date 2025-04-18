// src/pages/Projects.tsx
import React from 'react';
import './Projects.css';
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDatabase,
  FaDocker,
  FaAngular,
  FaGithub,
  FaGitlab,
  FaGoogle,
  FaJava,
  FaJenkins,
  FaMicrosoft,
  FaPython,
  FaVuejs
} from 'react-icons/fa';
import {
  SiRubyonrails,
  SiPostgresql,
  SiMongodb,
  SiMaterialdesign,
  SiHtml5,
  SiCss3,
  SiJquery,
  SiAwsamplify,
  SiFirebase,
  SiTerraform,
  SiArgo
} from 'react-icons/si';
import { GrDeploy, GrKubernetes } from "react-icons/gr";

// map tech names to icons
const techIcons: { [key: string]: JSX.Element } = {
  "HTML5": <SiHtml5 />,
  "CSS3": <SiCss3 />,
  "jQuery": <SiJquery />,
  "ReactJS": <FaReact />,
  "NodeJS": <FaNodeJs />,
  "AWS": <FaAws />,
  "PostgreSQL": <SiPostgresql />,
  "MongoDB": <SiMongodb />,
  "Ruby On Rails": <SiRubyonrails />,
  "Material UI": <SiMaterialdesign />,
  "AWS-ECS": <SiAwsamplify />,
  "Lambda": <FaAws />,
  "ECS": <FaAws />,
  "Jenkins": <FaJenkins />,
  "Docker": <FaDocker />,
  "GraphQL": <FaDatabase />,
  "CI/CD": <FaGitlab />,
  "GitLab": <FaGitlab />,
  "GitHub": <FaGithub />,
  "Heroku": <GrDeploy />,
  "Netlify": <GrDeploy />,
  "Firebase": <SiFirebase />,
  "GCP": <FaGoogle />,
  "Azure": <FaMicrosoft />,
  "Kubernetes": <GrKubernetes />,
  "Terraform": <SiTerraform />,
  "ArgoCD": <SiArgo />,
  "Java": <FaJava />,
  "Spring Boot": <FaJava />,
  "Python": <FaPython />,
  "Angular": <FaAngular />,
  "Vue.js": <FaVuejs />,
  // …add more as needed
};

interface HardcodedProject {
  title: string;
  description: string;
  imageUrl: string;
  techUsed: string[]; // split badges
}

const projects: HardcodedProject[] = [
  {
    title: 'All Meno',
    description:
      'This is my personal project where I have built a website for all restaurants in and around my undergrad college. This website is built using pure HTML and JavaScript.',
    imageUrl: '/images/allmeno.png',
    techUsed: ['HTML5', 'CSS3'],
  },
  {
    title: 'Angular to React Migration',
    description:
      'Led the team in the migration from Angular to React, focusing on complex components and Formik for validations.',
    imageUrl: '/images/projects/angular-to-react.png',
    techUsed: ['ReactJS', 'Ruby On Rails'],
  },
  {
    title: 'Avataar Ventures Website',
    description:
      'Built the frontend of Avataar Ventures’ website from scratch, contributing to the brand’s online presence and showcasing their services.',
    imageUrl: '/images/projects/avataar-ventures.png',
    techUsed: ['HTML5', 'CSS3', 'jQuery', 'AWS-ECS'],
  },
  {
    title: 'Corporate Dashboard for EkinCare',
    description:
      'Revamped the UI of EkinCare’s corporate dashboard, enhancing user experience for end customers. Managed both frontend and backend, creating RESTful APIs.',
    imageUrl: '/images/projects/ekin-care-dashboard.png',
    techUsed: ['Ruby On Rails', 'ReactJS', 'PostgreSQL', 'AWS'],
  },
  {
    title: 'Customer Relationship Management Tool',
    description:
      'Developed a CRM tool for managing investor details, handling both frontend and backend, building it from scratch.',
    imageUrl: '/images/projects/crm-tool.png',
    techUsed: ['NodeJS', 'ReactJS', 'MongoDB', 'AWS', 'Material UI'],
  },
  {
    title: 'E‑Commerce Website for Natural Products',
    description:
      'Built an e‑commerce website for self‑manufactured natural products, handling the full MERN stack and DevOps as a freelancer.',
    imageUrl: '/images/projects/natural-products-shop.png',
    techUsed: ['ReactJS', 'Ruby On Rails'],
  },
  {
    title: 'ESOP & Cap Table Management',
    description:
      'As a frontend developer, created structured code for ESOP and cap table management. Worked with a team of 3 developers.',
    imageUrl: '/images/projects/esop-cap-table.png',
    techUsed: ['NodeJS', 'ReactJS', 'MongoDB', 'AWS-ECS', 'Lambda'],
  },
  {
    title: 'Secondary Investment Platform',
    description:
      'Developed a platform for investment analysts to generate comprehensive startup reports with visualizations like pie charts and bar charts for investors.',
    imageUrl: '/images/projects/investment-platform.png',
    techUsed: ['NodeJS', 'ReactJS', 'MongoDB', 'Cognito', 'Lambda'],
  },
  {
    title: 'Travel Deals Web Application',
    description:
      'Developed a full‑stack travel booking web application with user authentication, session management, and real‑time flight search. Incorporated a RESTful API and database-driven hotel booking system.',
    imageUrl: '/images/projects/travel-deals.png',
    techUsed: ['Python', 'Go', 'AWS', 'PostgreSQL', 'Docker'],
  },
];

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="project-image"
            />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-used">
                {project.techUsed.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {techIcons[tech] || '🔧'} {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

/*import React, { useEffect, useState } from 'react';
import './Projects.css';
import { FaReact, FaNodeJs, FaAws, FaDatabase, FaDocker, FaAngular, FaGithub, FaGitlab, FaGoogle, FaJava, FaJenkins, FaMicrosoft, FaPython, FaVuejs } from 'react-icons/fa';
import { SiRubyonrails, SiPostgresql, SiMongodb, SiMaterialdesign, SiHtml5, SiCss3, SiJquery, SiAwsamplify, SiFirebase, SiTerraform, SiArgo } from 'react-icons/si';
import { Project } from '../types';
import { getProjects } from '../queries/getProjects';
import { GrDeploy, GrKubernetes } from "react-icons/gr";

const techIcons: { [key: string]: JSX.Element } = {
  "ReactJS": <FaReact />,
  "NodeJS": <FaNodeJs />,
  "AWS": <FaAws />,
  "PostgreSQL": <SiPostgresql />,
  "MongoDB": <SiMongodb />,
  "Ruby On Rails": <SiRubyonrails />,
  "Material UI": <SiMaterialdesign />,
  "HTML5": <SiHtml5 />,
  "CSS3": <SiCss3 />,
  "jQuery": <SiJquery />,
  "AWS-ECS": <SiAwsamplify />,
  'Cognito': <FaAws />,
  'Lambda': <FaAws />,
  'ECS': <FaAws />,
  'Jenkins': <FaJenkins />,
  'Docker': <FaDocker />,
  'GraphQL': <FaDatabase />,
  'CI/CD': <FaGitlab />,
  'GitLab': <FaGitlab />,
  'GitHub': <FaGithub />,
  'Heroku': <GrDeploy />,
  'Netlify': <GrDeploy />,
  'Firebase': <SiFirebase />,
  'GCP': <FaGoogle />,
  'Azure': <FaMicrosoft />,
  'Kubernetes': <GrKubernetes />,
  'Terraform': <SiTerraform />,
  'ArgoCD': <SiArgo />,
  'Java': <FaJava />,
  'Spring Boot': <FaJava />,
  'Python': <FaPython />,
  'Node.js': <FaNodeJs />,
  'Express.js': <FaNodeJs />,
  'Hibernate': <FaJava />,
  'Maven': <FaJava />,
  'Gradle': <FaJava />,
  'JUnit': <FaJava />,
  'Mockito': <FaJava />,
  'Jest': <FaReact />,
  'React': <FaReact />,
  'Angular': <FaAngular />,
  'Vue.js': <FaVuejs />,
  'Next.js': <FaReact />,
  'Gatsby': <FaReact />,
  'Nuxt.js': <FaVuejs />,
  'Redux': <FaReact />,
  'Vuex': <FaVuejs />,
  'Tailwind CSS': <SiCss3 />,
  'Bootstrap': <SiCss3 />,
  'JQuery': <SiJquery />,
};


const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([])
  
  useEffect(() => { 
    async function fetchProjects() {
      const data = await getProjects();
      setProjects(data);
    }
    
    fetchProjects()
  }, [])
  
  if (projects.length === 0) return <div>Loading...</div>;

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
          >
            <img src={project.image.url} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-used">
                {project.techUsed.split(', ').map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {techIcons[tech] || "🔧"} {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; */
