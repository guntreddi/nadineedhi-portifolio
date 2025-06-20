import React,{useEffect} from 'react'
import './Skills.css';
import AOS from 'aos';
import 'aos/dist/aos.css';  
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaPython, FaBrain } from 'react-icons/fa';
import { SiBugcrowd } from 'react-icons/si';
import { MdDevices } from 'react-icons/md';

const skills = [
    { name: 'HTML5', icon: <FaHtml5 />, level: 90, category: 'Frontend' },
  { name: 'CSS3', icon: <FaCss3Alt />, level: 85, category: 'Frontend' },
  { name: 'JavaScript', icon: <FaJs />, level: 80, category: 'Frontend' },
  { name: 'React', icon: <FaReact />, level: 85, category: 'Frontend' },
  { name: 'Git & GitHub', icon: <FaGitAlt />, level: 80, category: 'Tools' },
  { name: 'Python', icon: <FaPython />, level: 75, category: 'Programming' },
  { name: 'Responsive Design', icon: <MdDevices />, level: 88, category: 'Frontend' },
  { name: 'Problem Solving', icon: <FaBrain />, level: 82, category: 'Logic' },
  { name: 'Debugging', icon: <SiBugcrowd />, level: 78, category: 'Tools' },
];

const Skills = () => {
    useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    
         <section className="skills" id="skills">
      <div className="skills-container">
        <h2 className="skills-title">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index} data-aos="fade-up">
              <div className="skill-header">
                <span className="skill-icon" title={skill.name}>{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${skill.level}%` }}>
                  <span className="progress-label">{skill.level}%</span>
                </div>
              </div>
              <div className="skill-category">{skill.category}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
      
    
  )
}

export default Skills
