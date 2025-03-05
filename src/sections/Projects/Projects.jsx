import React, { useRef, useEffect, useState } from "react";
import styles from './ProjectsStyle.module.css';
import pj1 from "../../assets/Project1.jpg";
import pj2 from "../../assets/Project2.jpg";
import pj3 from "../../assets/Project3.jpg";
import pj4 from "../../assets/Project4.jpg";
import Card from 'react-animated-3d-card';

const projects = [
  {
    title: "",
    description: "",
    image: "", // You can use a placeholder image if needed
    url: "#", // No URL for dummy projects
  },
  {
    title: "UW scheduler",
    description: "Full-stack application that allows students to generate multiple schedules based on given restrictions. Still under development.",
    image: pj1,
    url: "https://github.com/Dannyso05/UWscheduler",
  },
  {
    title: "Job Scraper",
    description: "Python web scraper web application to aggregate job postings from several websites.",
    image: pj3,
    url: "https://github.com/Dannyso05/Python-webscraper",
  },
  {
    title: "Education Manager",
    description: "Java application for gradebook/attendance-tracking system, provides login interfaces for students and teachers along with MySQL database.",
    image: pj4,
    url: "https://github.com/PrabhjotChopra/General-Student-System",
  },
  {
    title: "Image Resize App",
    description: "Basic JavaScript program to change image file size.",
    image: pj2,
    url: "https://github.com/Dannyso05/File-size-app",
  },
  // Dummy projects
 
];

function Projects() {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const firstCardIndex = 0;
    const cardWidth = 300; // Width of each card
    const offset = (firstCardIndex * (cardWidth + 30)) - (carouselRef.current.clientWidth / 2) + (cardWidth / 2);
    carouselRef.current.scrollLeft = offset;

    return () => {};
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Increase the multiplier for faster scrolling
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="Projects" className={styles.projectContainer}>
      <div className={styles.titlecontainer}>
        <h1 className={styles.largertitle}>Projects</h1>
        <h3 className={styles.smallertitle}>Projects.</h3>
      </div>
      <div
        className={styles.carouselContainer}
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className={styles.carousel}>
          {projects.map((project, index) => {
            if (project.url === "#") {
              return (
                <div className={styles.cardHolder} key={index} style={{ visibility: 'hidden', height: '400px', width: '300px' }}>
                  {/* Invisible card for unselectable project */}
                </div>
              );
            }
            return (
              <div className={styles.cardHolder} key={index}>
                <Card
                  style={{
                    backgroundColor: 'transparent',
                    width: '300px',
                    height: '400px',
                    cursor: 'pointer',
                    position: 'relative',
                  }}
                  onClick={() => window.open(project.url, '_blank')}
                >
                  {project.image ? (
                    <img src={project.image} alt={project.title} className={styles.image} />
                  ) : (
                    <div className={styles.image} style={{ backgroundColor: '#e0e0e0' }}></div> // Placeholder for empty boxes
                  )}
                </Card>
                <div className={styles.descriptionContainer}>
                  <h1 className={styles.title}>{project.title || "Empty Project"}</h1>
                  <p className={styles.description}>{project.description || "No description available."}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;