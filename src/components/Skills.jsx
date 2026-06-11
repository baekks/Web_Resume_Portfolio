import React from 'react';
import { skillGroups } from '../data/portfolioData.js';

export default function Skills() {
  return (
    <section className="v2-panel v2-skills-panel" id="v2-skills">
      <div className="v2-section-heading">
        <p className="v2-label">Skills</p>
        <h2>기술 스택</h2>
      </div>
      <div className="v2-node-grid v2-skills-grid">
        {skillGroups.map(({ icon: Icon, title, groups }) => (
          <article className="v2-node v2-skill-node" key={title}>
            <Icon size={22} />
            <strong>{title}</strong>
            <div className="v2-skill-clusters">
              {groups.map((group) => (
                <div className="v2-skill-cluster" key={`${title}-${group.label}`}>
                  <span>{group.label}</span>
                  <div>
                    {group.values.map((value) => (
                      <em key={value}>{value}</em>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
