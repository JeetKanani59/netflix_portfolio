// src/profilePage/ProfileBanner.tsx

import React from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';

const ProfileBanner: React.FC = () => {
  // 👉 Hard‑coded click handlers
  const handlePlayClick = () => {
    window.open('/Jeet_Resume.pdf', '_blank');
  };
  const handleLinkedinClick = () => {
    window.open('https://www.linkedin.com/in/your-linkedin-profile/', '_blank');
  };

  return (
    <div className="profile-banner">
      <div className="banner-content">
        {/* Hard‑coded headline */}
        <h1 className="banner-headline" id="headline">
          JEET KANANI – Software Engineer Actively Seeking a New Position
        </h1>
        
        {/* Hard‑coded profile summary */}
        <p className="banner-description">
          Results-driven Software Engineer with expertise in full-stack development,
          cloud computing, and scalable software design. Skilled in object‑oriented
          programming, secure application development, and optimizing software
          performance through automation, unit testing, and robust debugging practices.
          Proficient in Python, JavaScript, C++, and RESTful API development, with
          hands‑on experience in integrating solutions across the entire software
          lifecycle for end‑to‑end development and scalability.
        </p>

        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="LinkedIn" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;

/*import React, { useEffect, useState } from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';
import { getProfileBanner } from '../queries/getProfileBanner';
import { ProfileBanner as ProfileBannerType } from '../types';

const ProfileBanner: React.FC = () => {
  const [bannerData, setBannerData] = useState<ProfileBannerType | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getProfileBanner();
      setBannerData(data);
    }
    fetchData();
  }, []);

  if (!bannerData) return <div>Loading...</div>;

  // Hardcoded version for the resume link (previous dynamic code is commented out):
  // const handlePlayClick = () => {
  //   window.open(bannerData.resumeLink.url, '_blank');
  // };
  const handlePlayClick = () => {
    window.open('/Jeet_Resume.pdf', '_blank');
  };

  // Hardcoded LinkedIn link (previous dynamic code is commented out):
  // const handleLinkedinClick = () => { 
  //   window.open(bannerData.linkedinLink, '_blank');
  // };
  const handleLinkedinClick = () => {
    window.open('https://www.linkedin.com/in/your-linkedin-profile/', '_blank');
  };

  return (
    <div className="profile-banner">
      <div className="banner-content">
        {/* Hardcoded headline text instead of using bannerData.headline 
        <h1 className="banner-headline" id="headline">
          JEET KANANI – Software Engineer Actively Seeking a New Position
        </h1>
        
        /* Hardcoded profile summary text instead of using bannerData.profileSummary 
        <p className="banner-description">
        Results-driven Software Engineer with expertise in full-stack development, cloud computing, and scalable software design. Skilled in object-oriented programming, secure application development, and optimizing software performance through automation, unit testing, and robust debugging practices. Proficient in Python, JavaScript, C++, and RESTful API development, with hands-on experience in integrating solutions across the entire software lifecycle for end-to-end development and scalability.
        </p>

        <div className="banner-buttons">
          {/* Resume and LinkedIn buttons using the updated click handlers 
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="Linkedin" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner; */