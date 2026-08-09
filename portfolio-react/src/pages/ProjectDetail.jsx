import { useParams, Link } from 'react-router-dom';
import projects from '../data/projects';
import ProjectTags from '../components/ProjectTags';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === Number(projectId));

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Project not found</h2>
        <p>The project you&apos;re looking for doesn&apos;t exist.</p>
        <Link to="/projects" className="back-btn">← Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      <div 
        className="project-detail-header"
        style={{ background: project.gradient || 'linear-gradient(to right, #4CAF50, #81C784)' }}
      >
        <div className="header-content">
          <h1>{project.title}</h1>
          <p className="project-date">{project.date}</p>
        </div>
      </div>
      
      <div className="project-detail-content">
        <div className="project-info">
          <h3>Description</h3>
          <p className="project-description">{project.description}</p>
          
          <h3>Technologies</h3>
          <ProjectTags tags={project.techStack} />
          
          <div className="project-links">
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="github-btn">
                View on GitHub
              </a>
            )}
          </div>
          
          <Link to="/projects" className="back-btn">← Back to Projects</Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
