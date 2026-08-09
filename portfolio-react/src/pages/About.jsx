import SkillCard from '../components/SkillCard';
import ToolCard from '../components/ToolCard';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-section">
        <h1 className="section-title title-crimson">ABOUT ME</h1>
        <div className="about-text">
          <p>
            Hi, I&apos;m Harshitha and I&apos;m a B.Tech CSE student at
            NIT Warangal. I love building things that makes everything easier
            for the users.
          </p>
          <p>
            I&apos;m always exploring the intersection of design and
            engineering. When I&apos;m not coding, I&apos;m
            picking apart what makes a good user experience tick.
          </p>
        </div>
      </section>

      <section className="skills-section">
        <h2 className="section-title title-teal">SKILLS</h2>
        <div className="skills-grid">
          <SkillCard title="Languages" items="C++, Java, Python, JavaScript, SQL" />
          <SkillCard title="Frontend" items="React.js, HTML, CSS, Vite" />
          <SkillCard title="Backend" items="Node.js, Express.js, REST APIs" />
          <SkillCard title="Databases" items="MySQL, Supabase, PostgreSQL, Prisma" />
          <SkillCard title="Design" items="Figma, Wireframing, Prototyping, User Research" />
          <SkillCard title="Soft Skills" items="Problem Solving, Teamwork, Time Management" />
        </div>
      </section>

      <section className="tools-section">
        <h2 className="section-title title-blue">TOOLS</h2>
        <div className="tools-grid">
          <ToolCard name="VS Code" />
          <ToolCard name="Git & GitHub" />
          <ToolCard name="Figma" />
          <ToolCard name="Vite" />
          <ToolCard name="npm" />
        </div>
      </section>
    </div>
  );
};

export default About;
