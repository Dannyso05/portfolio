import styles from './AboutMeStyle.module.css';
import abt from '../../assets/AboutMe.jpg'

function AboutMe() {
  return (
    <section id="AboutMe" className={styles.aboutMeSection}>
      <div className={styles.titlecontainer}>
      <h1 className={styles.largertitle}>About me</h1>
      <h3 className={styles.smallertitle}>About me.</h3>
      </div>
      <div className={styles.contentContainer}>
           <div className={styles.profilePictureContainer}>
            <img src={abt} alt="Profile" className={styles.profilePicture} />
          </div>        
        <div className={styles.textContent}>
          <p className={styles.aboutText}>
            Hello, I am Daniel Song. I am a second year student at University of Waterloo, I have high interest in latest Machine Learning and AI technologies. I'm looking to connect with professionals for insights and potential opportunities in this field.
          </p>
          {/* <a className={styles.educationButton} href="https://uwaterloo.ca/">
            <img 
            src="https://upload.wikimedia.org/wikipedia/en/6/6e/University_of_Waterloo_seal.svg" alt="UWaterloo" className={styles.schoolLogo} />
            <div className={styles.buttonText}>
              <p>University of Waterloo</p>
              <p>Bachelor of Statistics & Computational Mathematics</p>
              <p>2023 - 2028</p>
            </div>
          </a> */}
        </div>
      </div>
    </section>
  );
}

export default AboutMe;