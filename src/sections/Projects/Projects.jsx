import Carousel from "@itseasy21/react-elastic-carousel";
import styles from './ProjectsStyle.module.css';
import pj1 from "../../assets/Project1.jpg"
import pj3 from "../../assets/Project2.jpg"
import pj2 from "../../assets/Project3.jpg"
import pj4 from "../../assets/Project4.jpg"

const projects = [
  {
    title: "UW scheduler",
    description: "Full-stack application that allows students to generate multiple schedules based on given Restrictions. Still Under Development.",
    image: pj1,
    url: "https://github.com/Dannyso05/UWscheduler",
  },
  // {
  //   title: "Comment Generator",
  //   description: "For McHacks11, Full-stack application ",
  //   image: pj2, // Replace with your image path
  //   url: "https://github.com/alecomasleon/CommentGenerator", // URL for the button
  // },
  {
    title: "Job Scraper",
    description: "Python webscraper web application to aggregate job postings from Several websites.",
    image: pj2,
    url: "https://github.com/Dannyso05/Python-webscraper",
  },
  {
    title: "Education Manager",
    description: "Java application for gradebook/attendance-tracking system, provides seperate login interface for students and teachers along with MySQL database to persist data. Provides intutive graphics, built by java swing.",
    image: pj4,
    url: "https://github.com/PrabhjotChopra/General-Student-System",
  },
  {
    title: "Image Resize app",
    description: "Basic Javascript program to change image file size",
    image: pj3,
    url: "https://github.com/Dannyso05/File-size-app",
  },
];

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
function Projects() {
  return (
    <>
      <h1 style={{ textAlign: "center", paddingBottom: "50px", paddingTop: "20px"}}>Projects</h1>
      <div className={styles.carouselContainer}> {/* Use the class here */}
        <Carousel breakPoints={breakPoints}>
          {projects.map((project, index) => (
            <div key={index} className={styles.cardWrapper}> {/* New wrapper div */}
              <div className={styles.card}> {/* Existing card */}
                <img src={project.image} alt={project.title} className={styles.image} />
                <div className={styles.overlay}>
                  <h1 className={styles.title}>{project.title}</h1>
                  <p className={styles.description}>{project.description}</p>
                  <a href={project.url} className={styles.button}>Learn More</a>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default Projects;
