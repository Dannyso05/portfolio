import styles from "./NavStyle.module.css";
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import { useTheme } from '../common/ThemeContext';
import { useState } from 'react';
import { Link } from "react-scroll";

function Nav() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section id="Nav" className={styles.navContainer}>
      <div className={styles.colorModeContainer}>
        <button className={styles.menuIcon} onClick={toggleMenu}>
          ☰
        </button>
        {/* <div className={`${styles.navLinks} ${menuOpen ? styles.show : ''}`}>
          <a href="#AboutMe" className={styles.navLink}>About Me</a>
          <a href="#Experience" className={styles.navLink}>Experience</a>
          <a href="#Projects" className={styles.navLink}>Projects</a>
          <a href="#Contacts" className={styles.navLink}>Contacts</a>
        </div> */}

      <nav className={`${styles.navLinks} ${menuOpen ? styles.show : ''}`}>
        <Link to="AboutMe" smooth={true} duration={500} className="cursor-pointer">About Me</Link>
        <Link to="Projects" smooth={true} duration={500} className="cursor-pointer">Projects</Link>
        <Link to="Experience" smooth={true} duration={500} className="cursor-pointer">Experience</Link>
        <Link to="Contacts" smooth={true} duration={500} className="cursor-pointer">Contacts</Link>
      </nav>  

    

        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Toggle Theme"
          onClick={toggleTheme}
        />
      </div>
    </section>
  );
}

export default Nav;
