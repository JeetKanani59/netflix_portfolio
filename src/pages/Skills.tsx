// src/pages/Skills.tsx
import React from 'react';
import './Skills.css';

// remove this line (no more dynamic fetching)
// import { getSkills } from '../queries/getSkills';

// Icon imports
import { FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaJava, FaChartLine } from 'react-icons/fa';
import { SiRubyonrails, SiTypescript, SiPostgresql, SiMysql, SiKeras, SiGooglecloud, SiSpringboot, SiPhp, SiNetlify, SiHeroku, SiHtml5, SiPytorch, SiScikitlearn, SiTensorflow, SiPandas, SiNumpy, SiApachespark } from 'react-icons/si';


// your Skill type — you can leave this in /types and import, or define inline:
interface Skill {
  name: string;
  description: string;
  icon: JSX.Element;
  category: string;
}

// Hard‑coded data:
const HARD_CODED_SKILLS: Skill[] = [
  // Databases
  {
    name: 'MySQL',
    description: 'Relational Database',
    icon: <SiMysql />,
    category: 'Databases',
  },
  {
    name: 'PostgreSQL',
    description: 'Relational Database',
    icon: <SiPostgresql />,
    category: 'Databases',
  },

  // Frontend
  {
    name: 'HTML & CSS',
    description: 'Web Markup and Styling',
    icon: <SiHtml5 />,    // you can swap for a dedicated HTML icon if you like
    category: 'Frontend',
  },
  {
    name: 'JavaScript',
    description: 'Scripting Language',
    icon: <FaNodeJs />,   // again you can pick FaJsSquare from react-icons/fa
    category: 'Frontend',
  },
  {
    name: 'TypeScript',
    description: 'Type‑safe JavaScript',
    icon: <SiTypescript />,
    category: 'Frontend',
  },
  {
    name: 'React',
    description: 'Frontend Framework',
    icon: <FaReact />,
    category: 'Frontend',
  },

  // Backend
  {
    name: 'Java',
    description: 'Object‑Oriented Programming Language',
    icon: <FaJava />,
    category: 'Backend',
  },
  {
    name: 'SpringBoot',
    description: 'Java Framework',
    icon: <SiSpringboot />,
    category: 'Backend',
  },
  {
    name: 'PHP',
    description: 'Backend Language',
    icon: <SiPhp />,
    category: 'Backend',
  },
  {
    name: 'Node.js',
    description: 'Backend Runtime',
    icon: <FaNodeJs />,
    category: 'Backend',
  },
  {
    name: 'RubyonRails',
    description: 'Backend Framework',
    icon: <SiRubyonrails/>,
    category: 'Backend',
  },

  // Cloud & DevOps
  {
    name: 'AWS',
    description: 'Cloud Platform',
    icon: <FaAws />,
    category: 'Cloud & DevOps',
  },
  {
    name: 'Docker',
    description: 'Containerization',
    icon: <FaDocker />,
    category: 'Cloud & DevOps',
  },
  {
    name: 'GCP',
    description: 'Google Cloud Platform',
    icon: <SiGooglecloud />,
    category: 'Cloud & DevOps',
  },
  {
    name: 'Netlify',
    description: 'Frontend Deployment Platform',
    icon: <SiNetlify />,
    category: 'Cloud & DevOps',
  },
  {
    name: 'Heroku',
    description: 'Cloud Platform for Apps',
    icon: <SiHeroku />,
    category: 'Cloud & DevOps',
  },
  {
    name: 'CI/CD',
    description: 'Continuous Integration & Delivery',
    icon: <FaReact />,
    category: 'Cloud & DevOps',
  },
  // ─── ML / AI
  {
    name: 'TensorFlow',
    description: 'Deep Learning Framework',
    icon: <SiTensorflow />,
    category: 'ML / AI',
  },
  {
    name: 'PyTorch',
    description: 'Deep Learning Library',
    icon: <SiPytorch />,
    category: 'ML / AI',
  },
  {
    name: 'Scikit‑learn',
    description: 'Classic Machine Learning',
    icon: <SiScikitlearn />,
    category: 'ML / AI',
  },
  {
    name: 'Keras',
    description: 'High‑level Neural APIs',
    icon: <SiKeras />,
    category: 'ML / AI',
  },
  // ─── Data Tools
  {
    name: 'Pandas',
    description: 'Data Analysis Library',
    icon: <SiPandas/>,
    category: 'Data Tools',
  },
  {
    name: 'Matplotlib',
    description: 'Plotting Library',
    icon: <FaChartLine/>,
    category: 'Data Tools',
  },
  {
    name: 'NumPy',
    description: 'Numerical Computing',
    icon: <SiNumpy/>,
    category: 'Data Tools',
  },
  {
    name: 'Spark',
    description: 'Big Data Engine',
    icon: <SiApachespark/>,
    category: 'Data Tools',
  },

];

const Skills: React.FC = () => {
  // group by category
  const skillsByCategory = HARD_CODED_SKILLS.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <div className="skills-container">
      {Object.entries(skillsByCategory).map(([category, skills], idx) => (
        <div key={idx} className="skill-category">
          <h2 className="category-title">{category}</h2>
          <div className="skills-grid">
            {skills.map((skill, i) => (
              <div key={i} className="skill-card" style={{ '--delay': `${i * 0.05}s` } as React.CSSProperties}>
                <div className="icon">{skill.icon}</div>
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;

{/* import React, { useEffect, useState } from 'react';
import './Skills.css';
import { getSkills } from '../queries/getSkills';

import { FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaJava } from 'react-icons/fa';
import { SiRubyonrails, SiTypescript, SiPostgresql, SiMysql, SiKubernetes, SiGooglecloud, SiSpringboot, SiPhp, SiNetlify, SiHeroku, SiHtml5, SiCss3, SiRabbitmq, SiImessage } from 'react-icons/si';
import { Skill } from '../types';

const iconMap: { [key: string]: JSX.Element } = {
  SiRubyonrails: <SiRubyonrails />,
  FaNodeJs: <FaNodeJs />,
  SiSpringboot: <SiSpringboot />,
  FaJava: <FaJava />,
  SiPhp: <SiPhp />,
  FaReact: <FaReact />,
  SiTypescript: <SiTypescript />,
  FaAws: <FaAws />,
  FaDocker: <FaDocker />,
  SiPostgresql: <SiPostgresql />,
  SiMysql: <SiMysql />,
  SiKubernetes: <SiKubernetes />,
  SiGooglecloud: <SiGooglecloud />,
  SiHeroku: <SiHeroku />,
  SiNetlify: <SiNetlify />,
  SiRabbitmq: <SiRabbitmq />,
  SiImessage: <SiImessage />,
};


const Skills: React.FC = () => {

  const [skillsData, setSkillsData] = useState<Skill[]>([]);

  useEffect(() => {
    async function fetchSkills() {
      const data = await getSkills();
      setSkillsData(data);
    }

    fetchSkills()
  }, []);

  if (skillsData.length === 0) return <div>Loading...</div>;

  const skillsByCategory = skillsData.reduce((acc: any, skill: any) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});


  return (
    <div className="skills-container">
      {Object.keys(skillsByCategory).map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skillsByCategory[category].map((skill: any, idx: number) => (
              <div key={idx} className="skill-card">
                <div className="icon">{iconMap[skill.icon] || <FaReact />}</div>
                <h3 className="skill-name">
                  {skill.name.split('').map((letter: any, i: number) => (
                    <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                      {letter}
                    </span>
                  ))}
                </h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;*/}
