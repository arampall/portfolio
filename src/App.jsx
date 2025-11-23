
import {
  Mail,
  MapPin,
  Download,
  ExternalLink
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import {
  personalInfo,
  skills,
  experience,
  education,
  projects,
  certifications
} from './data';

function App() {
  return (
    <div className="layout-grid animate-fade-in" style={{ marginTop: '4rem', marginBottom: '4rem' }}>

      {/* Left Sidebar (Sticky) */}
      <aside className="sidebar">
        <header style={{ marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: '800', lineHeight: '1', marginBottom: '1rem', letterSpacing: '-0.05em' }}>
            {personalInfo.name}
          </h1>
          <h2 className="text-secondary" style={{ fontSize: '1.25rem', fontWeight: '500', marginBottom: '1.5rem' }}>
            {personalInfo.title}
          </h2>

          <p style={{ fontSize: '1rem', lineHeight: '1.7', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
            {personalInfo.bio}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)' }}>
              <MapPin size={18} />
              <span>{personalInfo.location}</span>
            </div>
            <a href={`mailto:${personalInfo.email}`} className="text-secondary hover:text-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Mail size={18} />
              <span>{personalInfo.email}</span>
            </a>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem' }}>
            {/* <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline" aria-label="GitHub">
              <FaGithub size={20} />
            </a> */}
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <Download size={20} />
            </a>
          </div>
        </header>

        {/* Skills in Sidebar */}
        <section className="section" style={{ marginBottom: '3rem' }}>
          <h3 className="section-title" style={{ fontSize: '1rem', borderBottom: 'none', paddingBottom: 0, marginBottom: '1rem' }}>
            Skills
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {skills.map((skill) => (
              <span key={skill} className="tag">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </aside>

      {/* Right Main Content */}
      <main>
        {/* Work Experience */}
        <section className="section">
          <h3 className="section-title">
            Experience
          </h3>
          <div className="grid grid-cols-1">
            {experience.map((job) => (
              <div key={job.id} style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '600' }}>{job.role}</h4>
                  <span style={{ fontSize: '0.9rem', fontFamily: 'var(--font-mono)', color: '#333' }}>{job.period}</span>
                </div>
                <div className="text-secondary" style={{ marginBottom: '0.75rem', fontWeight: '500', color: 'var(--accent)' }}>
                  {job.company}
                </div>
                <ul className="text-secondary" style={{ lineHeight: '1.7', paddingLeft: '1.2rem', listStyleType: 'disc' }}>
                  {job.description.map((item, index) => (
                    <li key={index} style={{ marginBottom: '0.5rem' }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="section">
          <h3 className="section-title">
            Projects
          </h3>
          <div className="grid grid-cols-1">
            {projects.map((project) => (
              <div key={project.id} className="card" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: '600' }}>{project.title}</h4>
                  <a href={project.link} className="text-secondary hover:text-primary">
                    <ExternalLink size={20} />
                  </a>
                </div>
                <p className="text-secondary" style={{ marginBottom: '1.5rem', lineHeight: '1.7' }}>
                  {project.description}
                </p>
                <div>
                  {project.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 grid-cols-2" style={{ gap: '3rem' }}>
          <section className="section">
            <h3 className="section-title">
              Education
            </h3>
            {education.map((edu) => (
              <div key={edu.id} style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>{edu.school}</h4>
                <div className="text-secondary">{edu.degree}</div>
                <div style={{ fontSize: '0.85rem', marginTop: '0.25rem', fontFamily: 'var(--font-mono)', color: '#333' }}>{edu.period}</div>
              </div>
            ))}
          </section>

          <section className="section">
            <h3 className="section-title">
              Certifications
            </h3>
            {certifications.map((cert) => (
              <div key={cert.id} style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>
                  {cert.link ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none', color: 'inherit', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                    >
                      {cert.name}
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    cert.name
                  )}
                </h4>
                <div className="text-secondary">{cert.issuer}</div>
                <div style={{ fontSize: '0.85rem', marginTop: '0.25rem', fontFamily: 'var(--font-mono)', color: '#333' }}>{cert.date}</div>
              </div>
            ))}
          </section>
        </div>

        <footer className="text-secondary" style={{ fontSize: '0.9rem', marginTop: '4rem', borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
          <p>© {new Date().getFullYear()} {personalInfo.name}.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
