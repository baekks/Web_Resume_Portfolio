import React from 'react';
import { Braces, DatabaseZap, FileCheck2, GitPullRequest, Layers3, MonitorCog, ServerCog } from 'lucide-react';

const architectureItems = [
  {
    icon: Layers3,
    title: 'Client UI',
    body: 'React, Vue 기반 컴포넌트 화면과 사용자 흐름을 먼저 정리합니다.',
  },
  {
    icon: ServerCog,
    title: 'Server Logic',
    body: 'Spring Boot API, 검증 로직, 비즈니스 흐름을 기준으로 기능을 구현합니다.',
  },
  {
    icon: DatabaseZap,
    title: 'Data Flow',
    body: 'JPA, MyBatis, Oracle DB, PostgreSQL을 활용해 데이터 흐름을 연결합니다.',
  },
  {
    icon: MonitorCog,
    title: 'Operation',
    body: 'Linux 서버 운영 경험을 바탕으로 배포, 확인, 유지보수 관점을 함께 봅니다.',
  },
];

const workflowItems = [
  {
    step: '01',
    icon: Braces,
    title: '기능 구조화',
    body: '요구사항을 화면, API, 데이터 단위로 나눠 구현 범위를 정리합니다.',
  },
  {
    step: '02',
    icon: GitPullRequest,
    title: '구현과 협업',
    body: 'GitHub, Notion, Postman을 활용해 작업 내용과 API 흐름을 공유합니다.',
  },
  {
    step: '03',
    icon: FileCheck2,
    title: '검증과 정리',
    body: '빌드, 화면 확인, 문서화를 통해 결과물을 다시 확인합니다.',
  },
];

export default function ArchitectureWorkflow() {
  return (
    <section className="v2-panel v2-architecture-panel" id="v2-architecture">
      <div className="v2-section-heading">
        <p className="v2-label">Architecture / Workflow</p>
        <h2>구조를 보고 흐름을 정리합니다.</h2>
      </div>
      <div className="v2-architecture-grid">
        {architectureItems.map(({ icon: Icon, title, body }) => (
          <article className="v2-architecture-card" key={title}>
            <span className="v2-architecture-icon">
              <Icon size={22} />
            </span>
            <div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="v2-workflow-list">
        {workflowItems.map(({ step, icon: Icon, title, body }) => (
          <article className="v2-workflow-item" key={title}>
            <span>{step}</span>
            <Icon size={20} />
            <div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
