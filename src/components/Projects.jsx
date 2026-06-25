import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowRight, ExternalLink, X } from 'lucide-react';
import { projects } from '../data/portfolioData.js';

const projectFilters = [
  { label: '전체', value: 'all' },
  { label: '개인', value: 'personal' },
  { label: '팀', value: 'team' },
  { label: '실무', value: 'work' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const sortedProjects = [...projects].sort((a, b) => b.no - a.no);
  const filteredProjects =
    activeFilter === 'all'
      ? sortedProjects
      : sortedProjects.filter((project) => project.category === activeFilter);
  const projectModal = selectedProject ? (
    <div className="v2-modal-backdrop" role="presentation" onMouseDown={() => setSelectedProject(null)}>
      <article
        className="v2-project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="v2-modal-close" type="button" aria-label="프로젝트 상세 닫기" onClick={() => setSelectedProject(null)}>
          <X size={18} />
        </button>
        <div className="v2-modal-head">
          <span>{selectedProject.detail.type}</span>
          <h3 id="project-modal-title">{selectedProject.title}</h3>
          {selectedProject.period ? <strong>{selectedProject.period}</strong> : null}
          <p>{selectedProject.detail.overview}</p>
        </div>
        <div className="v2-modal-grid">
          <div className="v2-modal-section v2-modal-stack-section">
            <h4>담당 역할</h4>
            <ul>
              {selectedProject.detail.roles.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="v2-modal-section">
            <h4>주요 기능</h4>
            <ul>
              {selectedProject.detail.features.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="v2-modal-section">
            <h4>기술 스택</h4>
            <div className="v2-modal-tags">
              {selectedProject.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
          <div className="v2-modal-section">
            <h4>배운 점</h4>
            <ul>
              {selectedProject.detail.learned.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          {selectedProject.detail.accounts ? (
            <div className="v2-modal-section v2-modal-account-section">
              <h4>테스트 계정</h4>
              <div className="v2-modal-accounts">
                {selectedProject.detail.accounts.map((account) => (
                  <div className="v2-modal-account-column" key={account.id}>
                    <strong>{account.role}</strong>
                    <span>
                      <b>ID</b>
                      <code>{account.id}</code>
                    </span>
                    <span>
                      <b>PW</b>
                      <code>{account.password}</code>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
        <div className="v2-modal-links">
          {selectedProject.demoUrl ? (
            <a className="v2-modal-link" href={selectedProject.demoUrl} target="_blank" rel="noreferrer">
              {selectedProject.demoAction ?? 'Live Demo'}
              <ExternalLink size={14} />
            </a>
          ) : null}
          <a className="v2-modal-link" href={selectedProject.url} target="_blank" rel="noreferrer">
            {selectedProject.action}
            <ExternalLink size={14} />
          </a>
        </div>
      </article>
    </div>
  ) : null;

  useEffect(() => {
    if (!selectedProject) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section className="v2-panel v2-projects-panel" id="v2-projects">
      <div className="v2-section-heading">
        <p className="v2-label">Projects</p>
        <h2>Project Portfolio</h2>
      </div>
      <div className="v2-project-filter" aria-label="프로젝트 분류">
        {projectFilters.map((filter) => (
          <button
            type="button"
            className={activeFilter === filter.value ? 'is-active' : ''}
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className="v2-project-grid">
        {filteredProjects.map((project) => (
          <article className="v2-project-card" key={project.title}>
            <img src={project.image} alt={`${project.title} 미리보기`} />
            <div className="v2-project-body">
              <div className="v2-project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <h3>{project.title}</h3>
              {project.period ? <span className="v2-project-period">{project.period}</span> : null}
              <p>{project.summary}</p>
              {project.role ? (
                <div className="v2-project-role">
                  <span>Role</span>
                  <strong>{project.role}</strong>
                </div>
              ) : null}
              <div className="v2-project-actions">
                {project.detail ? (
                  <button type="button" onClick={() => setSelectedProject(project)}>
                    Details
                    <ArrowRight size={14} />
                  </button>
                ) : null}
                {project.demoUrl ? (
                  <a href={project.demoUrl} target="_blank" rel="noreferrer">
                    {project.demoAction ?? 'Live Demo'}
                    <ExternalLink size={14} />
                  </a>
                ) : null}
                <a href={project.url ?? '#v2-top'} target={project.url ? '_blank' : undefined} rel={project.url ? 'noreferrer' : undefined}>
                  {project.action}
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      {projectModal ? createPortal(projectModal, document.body) : null}
    </section>
  );
}
