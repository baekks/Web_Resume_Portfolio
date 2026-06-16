import React from 'react';
import { careerItems } from '../data/portfolioData.js';

const careerGroups = [
  {
    key: 'academic',
    label: 'Academic',
    title: '학력사항',
  },
  {
    key: 'education',
    label: 'Education',
    title: '교육사항',
  },
  {
    key: 'career',
    label: 'Career',
    title: '경력사항',
    summary: '총 1년 9개월',
  },
];

export default function Career() {
  return (
    <section className="v2-panel" id="v2-career">
      <div className="v2-section-heading">
        <p className="v2-label">Career</p>
        <h2>학력 · 교육 · 경력</h2>
      </div>
      <div className="v2-timeline">
        {careerGroups.map((group) => {
          const items = careerItems.filter((item) => item.section === group.key);

          return (
            <section className="v2-career-group" key={group.key} aria-labelledby={`career-${group.key}`}>
              <div className="v2-career-group-head">
                <span>{group.label}</span>
                <h3 id={`career-${group.key}`}>{group.title}</h3>
                {group.summary ? <p className="v2-career-total">{group.summary}</p> : null}
              </div>
              <div className="v2-career-list">
                {items.map(({ type, title, org, url, period, body }) => (
                  <article key={`${title}-${period}`}>
                    <time>{period}</time>
                    <div>
                      <span>{type}</span>
                      <h4>{title}</h4>
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
        })}
      </div>
    </section>
  );
}
