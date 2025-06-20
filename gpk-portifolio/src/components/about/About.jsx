import React ,{useEffect} from 'react'
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (

     <section className="about" id="about">
      <div className="about-container" data-aos="fade-up">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img
              src="https://img.freepik.com/free-vector/developer-activity-concept-illustration_114360-3876.jpg"
              alt="About"
            />
          </div>
          <div className="about-text">
            <p>
              I'm <strong>Pavan</strong>, a passionate Frontend Developer who loves crafting beautiful, responsive, and interactive websites using <strong>React</strong>, <strong>JavaScript</strong>, and <strong>CSS</strong>.
            </p>
            <p>
              I enjoy turning ideas into reality and continuously improving my skills. I'm always curious, eager to learn new technologies, and ready to take on exciting challenges.
            </p>
            <p>
              Let's build something amazing together! 💡
            </p>

            <div className="about-highlights">
              <div className="highlight-box">🚀 5+ Projects</div>
              <div className="highlight-box">💻 1 Year Experience</div>
              <div className="highlight-box">📚 Continuous Learner</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default About
