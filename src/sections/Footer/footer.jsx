import React from "react";
import styles from './footerStyle.module.css'; // Import the CSS module

const Footer = () => {
  return (
    <section id="footer" className={styles.experienceContainer}>
      <div className={styles.footer}>
        @ 2025 Daniel Hyeongseok Song
      </div>
    </section>
  );
};

export default Footer;
