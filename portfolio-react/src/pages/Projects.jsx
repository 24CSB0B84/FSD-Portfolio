import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-page">
      <div className="projects-container">
        <h1 className="section-title title-green">PROJECTS</h1>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              date={project.date}
              link={project.link}
              gradient={project.gradient}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
