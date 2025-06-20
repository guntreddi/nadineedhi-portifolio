import React,{ useEffect } from 'react'
import './Hero.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
    useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
  
          <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-left" data-aos="fade-right">
          <img
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSBnDOhJoKGTLWetfGZajHJ5AbQKAprUQ4WsEpQtEs53NYC0OJD"
            alt="Pavan"
            className="hero-img"
          />
        </div>

        <div className="hero-right" data-aos="fade-left">
          <h1 className="hero-heading">
            Hello, I'm <span className="highlight">Pavan</span>
          </h1>
          <h2 className="hero-subheading">Frontend Developer | React Enthusiast</h2>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">🚀 View Projects</a>
            <a href="#contact" className="btn btn-outline">📩 Hire Me</a>
          </div>
        </div>
      </div>

      <div className="scroll-down">
        <span></span>
      </div>
    </section>
  );
};
   

export default Hero
