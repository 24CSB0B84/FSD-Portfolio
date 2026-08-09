import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectTags from './ProjectTags';
import './ProjectCard.css';

function ProjectCard({ id, title, description, techStack, date, link, gradient }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="project-card">
      <div className="project-thumbnail" style={{ background: gradient }}></div>
      <div className="project-body">
        <Link to={`/projects/${id}`} className="project-title-link">
          <h3 className="project-title">{title}</h3>
        </Link>
        <span className="project-date">{date}</span>
        
        {showDetails ? (
          <div className="project-details">
            <p className="project-description">{description}</p>
            <ProjectTags tags={techStack} />
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">View Source</a>
            <button className="btn-toggle" onClick={() => setShowDetails(false)}>Show Less</button>
          </div>
        ) : (
          <button className="btn-toggle" onClick={() => setShowDetails(true)}>View Details</button>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
