import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/portfolioData.js';

const projectFilters = [
  { label: '전체', value: 'all' },
  { label: '개인', value: 'personal' },
  { label: '팀', value: 'team' },
  { label: '실무', value: 'work' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const sortedProjects = [...projects].sort((a, b) => a.no - b.no);
  const filteredProjects =
    activeFilter === 'all'
      ? sortedProjects
      : sortedProjects.filter((project) => project.category === activeFilter);

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
              <p>{project.summary}</p>
              <a href={project.url ?? '#v2-top'} target={project.url ? '_blank' : undefined} rel={project.url ? 'noreferrer' : undefined}>
                {project.action}
                <ArrowRight size={14} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
