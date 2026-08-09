import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col">
          <h3>Vinjamuri Harshitha</h3>
          <p>B.Tech CSE &bull; NIT Warangal</p>
        </div>
        
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:vinjamuri516@email.com">vinjamuri516@email.com</a></li>
            <li><a href="mailto:vh24csb0b84@student.nitw.ac.in">vh24csb0b84@student.nitw.ac.in</a></li>
            <li><a href="tel:+919014438414">+91-9014438414</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>Links</h4>
          <ul>
            <li><a href="https://github.com/harshithaVinjamuri" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://linkedin.com/in/vinjamuri-harshitha/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://coursera.org/verify/professional-cert/7Q0BFCCISKPH" target="_blank" rel="noopener noreferrer">Google UX Certificate</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Vinjamuri Harshitha. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
