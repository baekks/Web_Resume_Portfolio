import React from 'react';
import { Code2, GitBranch, MonitorCheck, ServerCog } from 'lucide-react';

const strengths = [
  {
    icon: ServerCog,
    title: 'Backend Foundation',
    stack: 'Java · Spring Boot · JPA · REST API',
    body: '서버 로직, 데이터 흐름, API 구조를 중심으로 기능을 구현합니다.',
  },
  {
    icon: MonitorCheck,
    title: 'Frontend Implementation',
    stack: 'React · Vue · Responsive UI',
    body: '컴포넌트 기반 화면과 사용자 흐름을 고려한 UI를 구성합니다.',
  },
  {
    icon: Code2,
    title: 'Operations Experience',
    stack: 'Linux · CentOS · Monitoring · Maintenance',
    body: '웹 서버 운영, 장애 확인, 유지보수 경험을 바탕으로 안정성을 고려합니다.',
  },
  {
    icon: GitBranch,
    title: 'Collaboration',
    stack: 'GitHub · Notion · Postman · Documentation',
    body: '작업 내용과 API 흐름을 문서화하고 협업 도구를 활용합니다.',
  },
];

export default function CoreStrengths() {
  return (
    <section className="v2-panel v2-strengths-panel" id="v2-strengths">
      <div className="v2-section-heading">
        <p className="v2-label">강점</p>
        <h2>핵심 강점</h2>
      </div>
      <div className="v2-strength-grid">
        {strengths.map(({ icon: Icon, title, stack, body }) => (
          <article className="v2-strength-card" key={title}>
            <span className="v2-strength-icon">
              <Icon size={22} />
            </span>
            <div>
              <h3>{title}</h3>
              <strong>{stack}</strong>
              <p>{body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
