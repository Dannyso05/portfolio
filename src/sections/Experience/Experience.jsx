// import React from "react";
// import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
// import styles from './ExperienceStyle.module.css'; // Import the CSS module


// import Remitbee from "../../assets/remitbee_logo.jpeg"
// import Countable from "../../assets/countable_io_logo.jpeg"
// import Canada from "../../assets/environment-canada-logo-partners.jpg"

// const experiences = [
//   {
//     date: 'January 2025 - April 2025',
//     title: 'Data Scientist',
//     company_name: 'Enviornment and Climate Change Canada',
//     content: [
//       'Incoming Winter 2025 Intern at Air Quality Team'
//     ],
//     icon: Canada,
//     iconBg: '#fff',
//   },
//   {
//     date: 'September 2024 - December 2024',
//     title: 'AI Software Engineer (Contract)',
//     company_name: 'RemitBee',
//     content: [
//       'Lead the deployment of scalable AI/ML model training pipelines, enhancing efficiency and optimizing end-to-end workflows.'
//     ],
//     icon: Remitbee,
//     iconBg: '#fff',
//   },
//   {
//     date: 'June 2024 - September 2024',
//     title: 'AI Software Engineer',
//     company_name: 'RemitBee',
//     content: [
//       'Developed AI/ML solutions, including an AI-powered customer service chatbot, a fraudulent transaction detection system, and a predictive model for customer churn mitigation.'
//     ],
//     icon: Remitbee,
//     iconBg: '#fff',
//   },
//   {
//     date: 'Jan 2024 - June 2024',
//     title: 'Data Engineer',
//     company_name: 'Countable',
//     content: [
//       'Implemented robust data pipelines to aggregate and process Alberta government bill data, ensuring high accessibility for analytical purposes.'
//     ],
//     icon: Countable,
//     iconBg: '#fff',
//   },
// ];

// const ExperienceCard = ({ experience }) => {
//   return (
//     <VerticalTimelineElement
//       contentStyle={{'background-color': 'var(--background-color)',
//                      'box-shadow': '0 4px 8px var(--background-color)'

//       }}
    
//       contentArrowStyle={{ 
//         'border-right': '7px solid var(--background-color)',
//       }}
      
//       date={experience.date}
//       iconStyle={{
//         background: experience.iconBg,
//       }}
//       icon={
//         <div className={styles.iconWrapper}>
//           <img
//             src={experience.icon}
//             alt={experience.company_name}
//             className={styles.icon}
//           />
//         </div>
//       }
//     >
//       <div>
//         <h3 className={styles.title}>{experience.title}</h3>
//         <h3 className={styles.companyName}>
//           {experience.company_name}
//         </h3>
//       </div>
//       <h3 className={styles.description_job}>{experience.content}</h3>

//       {/* <ul className={styles.pointsList}>
//         {experience.points.map((point, index) => (
//           <li
//             key={`experience-point-${index}`}
//             className={styles.point}
//           >
//             {point}
//           </li>
//         ))}
//       </ul> */}
//     </VerticalTimelineElement>
//   );
// };

// const Experience = () => {
//   return (
//     <section id="Experience" className={styles.experienceContainer}>
//       <div className={styles.title}>
//       <div className={styles.titlecontainer}>
//       <h1 className={styles.largertitle}>Experience</h1>
//       <h3 className={styles.smallertitle}>Experience</h3>
//       </div>      </div>

//       <div className={styles.verticalTimelineWrapper}>
//         <VerticalTimeline>
//           {experiences.map((experience, index) => (
//             <ExperienceCard
//               key={`experience-${index}`}
//               experience={experience}
//             />
//           ))}
//         </VerticalTimeline>
//       </div>
//     </section>
//   );
// };

// export default Experience;


import React from "react";
import styles from './ExperienceStyle.module.css'; // Import the CSS module

import Remitbee from "../../assets/remitbee_logo.jpeg"
import Countable from "../../assets/countable_io_logo.jpeg"
import Canada from "../../assets/environment-canada-logo-partners.jpg"

const experiences = [
  {
    date: 'January 2025 - April 2025',
    title: 'Data Scientist',
    company_name: 'Enviornment and Climate Change Canada',
    content: [
      'Incoming Winter 2025 Intern at Air Quality Team'
    ],
    icon: Canada,
    iconBg: '#fff',
  },
  {
    date: 'September 2024 - December 2024',
    title: 'AI Software Engineer (Contract)',
    company_name: 'RemitBee',
    content: [
      'Lead the deployment of scalable AI/ML model training pipelines, enhancing efficiency and optimizing end-to-end workflows.'
    ],
    icon: Remitbee,
    iconBg: '#fff',
  },
  {
    date: 'June 2024 - September 2024',
    title: 'AI Software Engineer',
    company_name: 'RemitBee',
    content: [
      'Developed AI/ML solutions, including an AI-powered customer service chatbot, a fraudulent transaction detection system, and a predictive model for customer churn mitigation.'
    ],
    icon: Remitbee,
    iconBg: '#fff',
  },
  {
    date: 'Jan 2024 - June 2024',
    title: 'Data Engineer',
    company_name: 'Countable',
    content: [
      'Implemented robust data pipelines to aggregate and process Alberta government bill data, ensuring high accessibility for analytical purposes.'
    ],
    icon: Countable,
    iconBg: '#fff',
  },
];

const Experience = () => {
  return (
    <section id="Experience" className={styles.experienceContainer}>
      <div className={styles.title}>
        <div className={styles.titlecontainer}>
          <h1 className={styles.largertitle}>Experience</h1>
          <h3 className={styles.smallertitle}>Experience</h3>
        </div>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.experienceTable}>
          <thead>
            <tr>
           
            </tr>
          </thead>
          <tbody>
            {experiences.map((experience, index) => (
              <tr key={`experience-${index}`}>
                <td>{experience.title} <br /> {experience.date}</td>
                <td>{experience.content}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Experience;