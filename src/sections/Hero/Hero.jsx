import styles from "./HeroStyles.module.css";
import githubLight from "../../assets/github-light.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import CVLight from "../../assets/Resume-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CVDark from "../../assets/Resume-dark.svg";
import { useTheme } from "../common/ThemeContext";


function Hero() {
  const { theme } = useTheme();
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const CVicon = theme === 'light' ? CVLight : CVDark;

  return (
    <div className={styles.container}>
      <section className={styles.Hero}>
        <div className={styles.colorModeContainer}>
          <div className={styles.blob}></div>
        </div>
        <div className={styles.bottomContent}>
          <div className={styles.info}>
          <h1 className={styles.hello}>Hello, I'm <strong>Daniel Song</strong>!</h1>
          <h1 className={styles.desc}> Mathematics Student at University of Waterloo </h1>
            <span>
              <a href="https://www.linkedin.com/in/daniel-song0718/">
                <img src={linkedinIcon} alt="LinkedinIcon" />
              </a>
              <a href="https://github.com/Dannyso05">
                <img src={githubIcon} alt="GithubIcon" />
              </a>
              <a href="https://drive.google.com/file/d/1lHHTKNt1_dDs_akQFzFbMMrdQMeIVzib/view?usp=sharing">
                <img src={CVicon} alt="ResumeIcon" />
              </a>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
