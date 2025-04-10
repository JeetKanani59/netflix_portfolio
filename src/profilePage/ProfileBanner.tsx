import React, { useEffect, useState } from 'react';
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

  //const handlePlayClick = () => {
  //  window.open(bannerData.resumeLink.url, '_blank');
  //};
  // Hardcoded version using your local PDF from the public folder:
  const handlePlayClick = () => {
    window.open('/Jeet_Resume.pdf', '_blank');
  };

  //const handleLinkedinClick = () => { 
  //  window.open(bannerData.linkedinLink, '_blank');
  //}
  // Hardcoded LinkedIn link: Replace the URL with your actual LinkedIn profile URL.
  const handleLinkedinClick = () => {
    window.open('https://www.linkedin.com/in/jeet-kanani-2a6048240/', '_blank');
  };

  return (
    <div className="profile-banner">
      <div className="banner-content">
        <h1 className="banner-headline" id='headline'>{bannerData.headline}</h1>
        <p className="banner-description">
          {bannerData.profileSummary}
        </p>

        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="Linkedin" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
