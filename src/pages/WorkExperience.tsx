// src/pages/WorkExperience.tsx
import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon } from 'react-icons/fa';
import './WorkExperience.css';

interface StaticTimelineItem {
  timelineType: 'work' | 'education';
  dateRange: string;
  title: string;       // for work: role; for education: degree
  name: string;        // for work: company; for education: institution
  techStack?: string;  // only for work
  summaryPoints: string[];
}

const timelineData: StaticTimelineItem[] = [
  {
    timelineType: 'work',
    dateRange: 'Jan 2025 – Present',
    title: 'Technical Support Student Assistant',
    name: 'University of Texas at Dallas',
    techStack: 'C/C++ Programming in UNIX Environment',
    summaryPoints: [
      'Evaluated and graded assignments for the C/C++ Programming in a UNIX Environment course, ensuring consistency, fairness, and adherence to software lifecycle standards.',
      'Provided constructive feedback to students, helping them improve their coding practices and problem‑solving skills.'
    ]
  },
  {
    timelineType: 'work',
    dateRange: 'Aug 2024 – Dec 2024',
    title: 'Instructional Student Assistant',
    name: 'University of Texas at Dallas',
    techStack: 'Qualtrics API, Python, RESTful pipelines',
    summaryPoints: [
      'Developed secure online forms using the Qualtrics API, automating TA assignments and reducing manual data entry by 80%.',
      'Designed a RESTful API pipeline and Python‑based data parsers for seamless CSV/JSON processing and Excel compatibility.'
    ]
  },
  {
    timelineType: 'work',
    dateRange: 'May 2022 – Jul 2022',
    title: 'Machine Learning & General Management Intern',
    name: 'TalentServe',
    techStack: 'Python, Scikit‑learn, CI/CD',
    summaryPoints: [
      'Built machine learning recommendation systems to analyze stock market trends, reducing analysis time by 30%.',
      'Collaborated with engineering and product teams to embed data analytics features for smarter decision making.',
      'Integrated CI/CD workflows for ML model deployment, reducing manual intervention in the pipeline.'
    ]
  },
  {
    timelineType: 'work',
    dateRange: 'May 2021 – Jul 2021',
    title: 'Front‑End Developer',
    name: 'Vision InfoTech',
    techStack: 'HTML, CSS, JavaScript, jQuery',
    summaryPoints: [
      'Researched and structured the web application, reducing design turnaround time by 40%.',
      'Designed the website’s static interface, improving load speed by 25% while maintaining a clean, user‑friendly layout.',
      'Contributed reusable UI components and resolved cross‑browser issues, emphasizing end‑to‑end debugging and automation.'
    ]
  },
  {
    timelineType: 'education',
    dateRange: 'Aug 2023 – May 2025',
    title: 'M.S. in Computer Science',
    name: 'University of Texas at Dallas',
    summaryPoints: [
      'Concentration: Intelligent Systems, GPA: 3.5/4.0',
      'Key coursework: Machine Learning, Natural Language Processing, Advanced Web Engineering.'
    ]
  },
  {
    timelineType: 'education',
    dateRange: 'Aug 2019 – May 2023',
    title: 'B.Tech in Computer Engineering',
    name: 'Pandit Deendayal Energy University',
    summaryPoints: [
      'CGPA: 9.23/10.0',
      'Key coursework: Data Structures, Algorithms, Database Management, Machine Learning.'
    ]
  }
];

const WorkExperience: React.FC = () => (
  <>
    <div className="timeline-container">
      <h2 className="timeline-title">📅 Work Experience & Education Timeline</h2>
    </div>
    <VerticalTimeline>
      {timelineData.map((item, idx) => (
        <VerticalTimelineElement
          key={idx}
          className={`vertical-timeline-element--${item.timelineType}`}
          date={item.dateRange}
          iconStyle={{
            background:
              item.timelineType === 'work' ? 'rgb(33,150,243)' : 'rgb(255,160,200)',
            color: '#fff'
          }}
          icon={
            item.timelineType === 'work' ? <WorkIcon /> : <SchoolIcon />
          }
          contentStyle={{
            background:
              item.timelineType === 'work'
                ? idx === 0
                  ? 'rgb(33,150,243)'
                  : 'rgb(240,240,240)'
                : 'rgb(255,224,230)',
            color: '#000'
          }}
          contentArrowStyle={{
            borderRight: `7px solid ${
              item.timelineType === 'work'
                ? idx === 0
                  ? 'rgb(33,150,243)'
                  : 'rgb(240,240,240)'
                : 'rgb(255,224,230)'
            }`
          }}
        >
          <h3 className="vertical-timeline-element-title">{item.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">{item.name}</h4>
          {item.techStack && (
            <p className="vertical-timeline-element-tech">🔧 {item.techStack}</p>
          )}
          {item.summaryPoints.map((pt, i) => (
            <p key={i}>• {pt}</p>
          ))}
        </VerticalTimelineElement>
      ))}

      {/* final star */}
      <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16,204,82)', color: '#fff' }}
        icon={<StarIcon />}
      />
    </VerticalTimeline>
  </>
);

export default WorkExperience;

/*import React, { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon } from 'react-icons/fa';
import './WorkExperience.css';
import { TimelineItem } from '../types';
import { getTimeline } from '../queries/getTimeline';


const WorkExperience: React.FC = () => {

  const [timeLineData, setTimeLineData] = useState<TimelineItem[] | null>(null);

  useEffect(() => {
    async function fetchTimelineItem() {
      const data = await getTimeline();
      setTimeLineData(data);
    }
    fetchTimelineItem();
  }, []);


  if (!timeLineData) return <div>Loading...</div>;
  console.log("🚀 ~ timeLineData:", timeLineData)

  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">📅 Work Experience & Education Timeline</h2>
      </div>
      <VerticalTimeline>
        {timeLineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${item.timelineType}`}
            contentStyle={
              item.timelineType === "work"
                ? index === 0
                  ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                  : { background: 'rgb(240, 240, 240)', color: '#fff' }
                : { background: 'rgb(255, 224, 230)', color: '#fff' } // Lighter red for education
            }
            contentArrowStyle={
              item.timelineType === "work"
                ? { borderRight: index === 0 ? '7px solid rgb(33, 150, 243)' : '7px solid rgb(240, 240, 240)' }
                : { borderRight: '7px solid rgb(255, 224, 230)' }
            }
            date={item.dateRange}
            iconStyle={
              item.timelineType === "work"
                ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                : { background: 'rgb(255, 160, 200)', color: '#fff' } // Softer red for education icon
            }
            icon={item.timelineType === "work" ? <WorkIcon /> : <SchoolIcon />}
          >
            {item.timelineType === "work" ? (
              <div style={{ color: 'black' }}>
                <h3 className="vertical-timeline-element-title">{item.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{item.name}</h4>
                <p className="vertical-timeline-element-tech">🔧 {item.techStack}</p>
                <p>{item.summaryPoints}</p>
              </div>
            ) : (
              <div style={{ color: 'black' }}>
                <h3 className="vertical-timeline-element-title">{item.name}</h3>
                <h4 className="vertical-timeline-element-subtitle">{item.title}</h4>
                <p>{item.summaryPoints}</p>
              </div>
            )}
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience; */
