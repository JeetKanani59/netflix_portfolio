// Research.tsx
import React, { useEffect, useState } from 'react';
import './Research.css'; // Now using Research.css for styles
import { FaExternalLinkAlt, FaFileAlt } from 'react-icons/fa';
import { SiIeee } from 'react-icons/si';

interface ResearchItem {
  title: string;
  publication: string;
  link: string;
  iconName?: string;
  date?: string;
}

const iconData: { [key: string]: JSX.Element } = {
  'ieee': <SiIeee />,
  // Add more icons if desired
};

const Research: React.FC = () => {
  const [researchList, setResearchList] = useState<ResearchItem[]>([]);

  useEffect(() => {
    const hardcodedResearch: ResearchItem[] = [
      {
        title: 'Cardiovascular Risk Detection Using Machine Learning Algorithms',
        publication: 'Conference Paper',
        link: 'https://ieeexplore.ieee.org/abstract/document/10051216',
        iconName: 'ieee',
        date: 'Aug 2021 - Jan 2022'
      },
      {
        title: 'Big Data Predictive Analytics for Cardiovascular Risk Detection',
        publication: 'Conference Paper',
        link: 'https://ieeexplore.ieee.org/abstract/document/10051293',
        iconName: 'ieee',
        date: 'Jul 2021 - Oct 2021'
      },
      {
        title: 'Deep Learning-based Realtime Analytics for Neuroimaging',
        publication: 'Conference Paper',
        link: 'https://ieeexplore.ieee.org/document/10051424',
        iconName: 'ieee',
        date: 'Nov 2022 - Apr 2023'
      }
    ];

    setResearchList(hardcodedResearch);
  }, []);

  if (researchList.length === 0) return <div>Loading...</div>;

  return (
    <div className="research-container">
      <h2 className="research-title">Research Publications</h2>
      <div className="research-grid">
        {researchList.map((item, index) => (
          <a
            href={item.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="research-card"
            style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}
          >
            <div className="research-content">
              <div className="research-icon">
                {iconData[item.iconName || ''] || <FaFileAlt />}
              </div>
              <h3>{item.title}</h3>
              <p>{item.publication}</p>
              {item.date && <span className="issued-date">Issued {item.date}</span>}
            </div>
            <div className="research-link animated-icon">
              <FaExternalLinkAlt />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Research;
