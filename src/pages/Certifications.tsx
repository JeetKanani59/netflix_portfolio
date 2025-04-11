import React, { useEffect, useState } from 'react';
import './Certifications.css';
import { FaExternalLinkAlt, FaUniversity } from 'react-icons/fa';
import { SiUdemy, SiCoursera, SiIeee, SiFortran } from 'react-icons/si';
import { Certification } from '../types';
// import { getCertifications } from '../queries/getCertifications';  // Commented out for now

// Extended icon set in case you want a unique icon for NPTEL, etc.
const iconData: { [key: string]: JSX.Element } = {
  'udemy': <SiUdemy />,
  'forage': <SiFortran />,
  'ieee': <SiIeee />,
  'university': <FaUniversity />,
  // If you want a distinct icon for NPTEL, uncomment the next line and use iconName="nptel" below
  'nptel': <FaUniversity />
};

const Certifications: React.FC = () => {

  // We'll still use the same Certification interface for consistency
  const [certifications, setCertifications] = useState<Certification[]>([]);

  useEffect(() => {
    async function fetchCertifications() {
      // --- DYNAMIC CODE COMMENTED OUT ---
      // const data = await getCertifications();
      // setCertifications(data);

      // --- HARDCODED CERTIFICATIONS ---
      // You can update 'issuer', 'link', and 'issuedDate' as you see fit
      const hardcodedCertifications: Certification[] = [
        {
          title: 'Fintech Engineering Virtual Experience by Goldman Sachs',
          issuer: 'Forage',
          link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Goldman Sachs/NPdeQ43o8P9HJmJzg_Goldman Sachs_v9m5Nn3QmHJoL2XTR_1669293395585_completion_certificate.pdf', // Replace with real link if you have one
          iconName: 'forage',
          issuedDate: 'Apr 2023'
        },
        {
          title: 'Solutions Architecture Virtual Experience Program by Amazon Web Service',
          issuer: 'Forage',
          link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/AWS/kkE9HyeNcw6rwCRGw_AWS APAC_v9m5Nn3QmHJoL2XTR_1669294154847_completion_certificate.pdf',   // Replace with real link
          iconName: 'forage',
          issuedDate: 'May 2023'
        },
        {
          title: 'The Complete Full Stack Web Development Bootcamp',
          issuer: 'Udemy',
          link: 'https://www.udemy.com/certificate/UC-c9dc38f4-e446-411d-bf4e-287c340c2199/',   // Replace with real link
          iconName: 'udemy',
          issuedDate: 'Jun 2023'
        },
        {
          title: 'Software Engineering Virtual Program by JP Morgan',
          issuer: 'Forage',
          link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P. Morgan/R5iK7HMxJGBgaSbvk_J.P. Morgan_v9m5Nn3QmHJoL2XTR_1669223780686_completion_certificate.pdf', // Replace with real link
          iconName: 'forage',
          issuedDate: 'Jul 2023'
        },
        {
          title: 'The Joy of Computing Using Python',
          issuer: 'NPTEL',
          link: 'https://archive.nptel.ac.in/content/noc/NOC22/SEM1/Ecertificates/106/noc22-cs31/Course/NPTEL22CS31S1304029202098596.jpg',   // Replace with real link
          iconName: 'nptel',
          issuedDate: 'Aug 2023'
        },
      ];

      setCertifications(hardcodedCertifications);
    }

    fetchCertifications();
  }, []);

  if (certifications.length === 0) return <div>Loading...</div>;

  return (
    <div className="certifications-container">
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <a
            href={cert.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="certification-card"
            style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}
          >
            <div className="certification-content">
              {/* If iconName isn't found, default to FaUniversity */}
              <div className="certification-icon">
                {iconData[cert.iconName] || <FaUniversity />}
              </div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              {cert.issuedDate && (
                <span className="issued-date">Issued {cert.issuedDate}</span>
              )}
            </div>
            <div className="certification-link animated-icon">
              <FaExternalLinkAlt />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
