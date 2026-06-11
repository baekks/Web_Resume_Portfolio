import React from 'react';
import { ArrowRight } from 'lucide-react';
import { mindMapNodes } from '../data/portfolioData.js';

export default function Main({ onEnter }) {
  return (
    <section
      className="v2-gate v3-mindmap-main"
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          onEnter();
        }
      }}
      tabIndex={0}
      aria-label="백경서를 표현하는 마인드맵 포트폴리오 메인"
    >
      <div className="v3-mindmap-copy">
        <p className="v2-label">Baek Kyung-seo</p>
        <h1>
          Mind map
          <span>portfolio</span>
        </h1>
        <p>운영 경험, 화면 구현, 데이터 흐름을 하나의 기준으로 연결합니다.</p>
        <div className="v3-mindmap-actions">
          <button type="button" className="primary" onClick={onEnter}>
            View Resume
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div className="v3-mindmap-stage" aria-label="백경서 마인드맵">
        <svg className="v3-mindmap-lines" viewBox="0 0 100 100" aria-hidden="true">
          {mindMapNodes.map((node) => {
            const parent = node.parent ? mindMapNodes.find((item) => item.label === node.parent) : null;
            return (
              <line
                className={node.parent ? 'is-child-line' : 'is-main-line'}
                key={`${node.label}-line`}
                x1={parent?.x ?? 50}
                y1={parent?.y ?? 50}
                x2={node.x}
                y2={node.y}
              />
            );
          })}
        </svg>
        <button type="button" className="v3-mindmap-core" onClick={onEnter}>
          Baek Kyung-seo
        </button>
        {mindMapNodes.map((node) => (
          <button
            type="button"
            className={`v3-mindmap-node is-${node.size}`}
            key={node.label}
            style={{ '--x': `${node.x}%`, '--y': `${node.y}%` }}
            onClick={onEnter}
          >
            {node.label}
          </button>
        ))}
      </div>
    </section>
  );
}
