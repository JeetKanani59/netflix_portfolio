// src/pages/WorkPermit.tsx
import React from 'react';
import './WorkPermit.css';

const WorkPermit: React.FC = () => {
  // 👉 Hard‑coded content:
  const headline       = '🎓 Work Permit';
  const description    = `I will graduate this May 2025 and have already applied for my Employment Authorization Document (EAD)🛂, which allows me to work in the US! 🇺🇸 My visa is valid until 05/29/2028 📅, giving me the opportunity to build valuable experience and grow my tech career here. 🌟`;
  const additionalInfo = `For any additional queries, please reach out on +1 (945) 274‑8488.`;

  return (
    <div className="work-permit-container">
      <div className="work-permit-card">
        <h2 className="work-permit-headline">{headline}</h2>
        <p className="work-permit-summary">
          {description}
        </p>
        <p className="additional-info">
          {additionalInfo}
        </p>
      </div>
    </div>
  );
};

export default WorkPermit;


{/*import React, { useEffect, useState } from 'react';
import './WorkPermit.css';
import { getWorkPermit } from '../queries/getWorkPermit';
import { WorkPermit as IWorkPermit } from '../types';
const WorkPermit: React.FC = () => {

  const [workPermitData, setWorkPermitData] = useState<IWorkPermit | null>(null);
  useEffect(() => {
    async function fetchWorkPermitData() {
      const data = await getWorkPermit();
      setWorkPermitData(data);
    }
    fetchWorkPermitData();
  }, []);

  if (!workPermitData) return <div>Loading...</div>;

  return (
    <div className="work-permit-container">
      <div className="work-permit-card">
        <h2 className="work-permit-headline">🎓 Work Permit</h2>
        <p className="work-permit-summary">
          I'm currently on a <strong>{workPermitData.visaStatus}</strong> 🛂, which allows me to work in the UK! 🇬🇧 My visa is valid until <strong>{new Date(workPermitData.expiryDate).toLocaleDateString()}</strong> 📅, giving me the opportunity to build valuable experience and grow my career here. 🌟
        </p>
        <p className="additional-info">{workPermitData.additionalInfo}</p>
      </div>
    </div>
  );
};

export default WorkPermit;
*/}