import React from 'react';
import { ArrowRight, BookOpenCheck } from 'lucide-react';

const notionUrl = 'https://app.notion.com/p/DX-Academy-3813bc0ba13280ab87d1fa05c410333b?source=copy_link';

export default function LearningDocs() {
  return (
    <section className="v2-panel v2-docs-panel" id="v2-docs">
      <div className="v2-section-heading">
        <p className="v2-label">Learning & Docs</p>
        <h2>학습 기록</h2>
      </div>
      <div className="v2-docs-card">
        <span className="v2-docs-icon">
          <BookOpenCheck size={28} />
        </span>
        <div>
          <h3>Java / Spring / Vue 학습 정리</h3>
          <p>개념 정리, 실습 기록, 프로젝트 학습 내용을 Notion에 정리하고 있습니다.</p>
        </div>
        <a href={notionUrl} target="_blank" rel="noreferrer">
          Open Notion
          <ArrowRight size={15} />
        </a>
      </div>
    </section>
  );
}
