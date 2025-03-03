import React, { useRef, useEffect, useState } from "react";
import styles from './ProjectsStyle.module.css';
import pj1 from "../../assets/Project1.jpg";
import pj2 from "../../assets/Project2.jpg";
import pj3 from "../../assets/Project3.jpg";
import pj4 from "../../assets/Project4.jpg";
import Card from 'react-animated-3d-card';

const projects = [
  {
    title: "UW scheduler",
    description: "Full-stack application that allows students to generate multiple schedules based on given restrictions. Still under development.",
    image: pj1,
    url: "https://github.com/Dannyso05/UWscheduler",
  },
  {
    title: "Job Scraper",
    description: "Python web scraper web application to aggregate job postings from several websites.",
    image: pj2,
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
    image: pj3,
    url: "https://github.com/Dannyso05/File-size-app",
  },
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
    const walk = (x - startX) * 2; // Adjust scroll speed
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
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
          {projects.map((project, index) => (
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
                <img src={project.image} alt={project.title} className={styles.image} />
              </Card>
              <div className={styles.descriptionContainer}>
                <h1 className={styles.title}>{project.title}</h1>
                <p className={styles.description}>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;