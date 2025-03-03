import './App.css'
import Hero from './sections/Hero/Hero';
import Nav from './sections/Nav/Nav';
import AboutMe from './sections/AboutMe/AboutMe';
import Experience from './sections/Experience/Experience';
import Projects from './sections/Projects/Projects';
import Contacts  from './sections/Contacts/Contacts';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = "Daniel Song";
  }, []);
  console.log("yippie");
  return (
    <>

      <div className="background">
        <div className="bubble bubble1"></div>
        <div className="bubble bubble2"></div>
      </div>
      <section id="Home" className='element'>
        <Hero/>
      </section>
      {/* <div className="section-divider"></div> */}

      <section id="AboutMe" className='element'>
        <AboutMe/>
      </section>
      <div className="section-divider"></div>
      <section id="Projects" className='element'>
        <Projects/>
      </section>
      <div className="section-divider"> </div>
      <section id="Experience" className='element'>
        <Experience/>
      </section>
    
      <div className="section-divider"></div>
      <section id="Contacts" className='element'>
        <Contacts/>
      </section>
      <div className="section-divider"></div>

      <div className='footer'>@ 2025 Daniel Hyeongseok Song</div>
      <Nav/>
    </>
  );
}

export default App;