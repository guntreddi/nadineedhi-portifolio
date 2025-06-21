import React,{useEffect} from 'react'
import './Contact.css'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
     useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="contact" id="contact">
      <div className="contact-container" data-aos="fade-up">
        <h2 className="contact-title">Let's Connect</h2>
        <p className="contact-subtitle">
          Have a project, question, or just want to say hi? Drop a message 👇
        </p>

        <form
          className="contact-form"
          action="https://formspree.io/f/your-form-id" // Replace with actual Formspree ID
          method="POST"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="btn-primary">Send Message</button>
        </form>

        <div className="contact-socials">
          <a href="mailto:your.email@example.com" className="tooltip" data-tooltip="Send Email">
            <FaEnvelope /> your.email@example.com
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" className="tooltip" data-tooltip="Visit LinkedIn">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/yourusername" target="_blank" className="tooltip" data-tooltip="View GitHub">
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
};


export default Contact
