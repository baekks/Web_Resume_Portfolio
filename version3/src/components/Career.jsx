import React from 'react';
import { careerItems } from '../data/portfolioData.js';

export default function Career() {
  return (
    <section className="v2-panel" id="v2-career">
      <div className="v2-section-heading">
        <p className="v2-label">Career</p>
        <h2>경력 및 교육</h2>
      </div>
      <div className="v2-timeline">
        {careerItems.map(({ type, title, org, url, period, body }) => (
          <article key={`${title}-${period}`}>
            <time>{period}</time>
            <div>
              <span>{type}</span>
              <h3>{title}</h3>
              {url ? (
                <a className="v2-career-link" href={url} target="_blank" rel="noreferrer">
                  {org}
                </a>
              ) : (
                <strong>{org}</strong>
              )}
              <p>{body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
