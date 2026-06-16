import React, { useMemo, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { mindMapNodes } from '../data/portfolioData.js';

const coreNodeLabel = 'Baek Kyung Seo';

const mindMapDetails = {
  [coreNodeLabel]: {
    title: coreNodeLabel,
    body: '운영 경험, 화면 구현, 데이터 흐름을 하나의 기준으로 연결하는 풀스택 개발자 포트폴리오입니다.',
  },
  'Full-stack': {
    title: 'Full-stack',
    body: '프론트엔드 화면, 백엔드 API, 데이터베이스 흐름을 함께 이해하고 연결합니다.',
  },
  Backend: {
    title: 'Backend',
    body: 'Java, Spring Boot, REST API, JPA/MyBatis 기반으로 서버 로직과 데이터 흐름을 구성합니다.',
  },
  Frontend: {
    title: 'Frontend',
    body: 'React와 Vue 기반의 상태 UI, 반응형 레이아웃, 사용 흐름 중심 화면을 구현합니다.',
  },
  Operations: {
    title: 'Operations',
    body: 'Linux/CentOS 서버 운영, 모니터링, 장애 대응 경험을 개발 과정에 녹입니다.',
  },
  Workflow: {
    title: 'Workflow',
    body: 'GitHub, Postman, Notion, 문서화를 활용해 협업과 개발 흐름을 정리합니다.',
  },
  Growth: {
    title: 'Growth',
    body: 'FastAPI, OpenCV, CI/CD 등 다음 단계의 기술을 학습하며 확장하고 있습니다.',
  },
};

const networkBridges = [
  ['Java', 'Spring Boot'],
  ['Spring Boot', 'REST API'],
  ['REST API', 'Validation'],
  ['JPA / MyBatis', 'PostgreSQL'],
  ['React', 'State UI'],
  ['React', 'Responsive UI'],
  ['Vue', 'UX Flow'],
  ['Linux', 'CentOS'],
  ['Linux', 'Monitoring'],
  ['Monitoring', 'Maintenance'],
  ['GitHub', 'Docs'],
  ['GitHub', 'CI/CD'],
  ['Postman', 'REST API'],
  ['FastAPI', 'OpenCV'],
  ['CI/CD', 'Maintenance'],
  ['Frontend', 'Workflow'],
  ['Backend', 'Operations'],
  ['Full-stack', 'Growth'],
];

export default function Main({ onEnter }) {
  const touchStartY = useRef(null);
  const stageRef = useRef(null);
  const [activeNode, setActiveNode] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 16, y: 16, visible: false });

  const childMap = useMemo(
    () =>
      mindMapNodes.reduce((acc, node) => {
        if (!node.parent) {
          return acc;
        }

        acc[node.parent] = [...(acc[node.parent] ?? []), node.label];
        return acc;
      }, {}),
    [],
  );

  const nodeByLabel = useMemo(
    () => new Map([[coreNodeLabel, { label: coreNodeLabel, x: 50, y: 50, size: 'core' }], ...mindMapNodes.map((node) => [node.label, node])]),
    [],
  );

  const networkLinks = useMemo(() => {
    const hierarchyLinks = mindMapNodes.map((node) => ({
      from: node.parent ?? coreNodeLabel,
      to: node.label,
      type: node.parent ? 'branch' : 'hub',
    }));

    const bridgeLinks = networkBridges.map(([from, to]) => ({ from, to, type: 'bridge' }));
    return [...hierarchyLinks, ...bridgeLinks].filter((link) => nodeByLabel.has(link.from) && nodeByLabel.has(link.to));
  }, [nodeByLabel]);

  const activeDetails =
    mindMapDetails[activeNode] ??
    mindMapDetails[mindMapNodes.find((node) => node.label === activeNode)?.parent] ?? {
      title: activeNode ?? coreNodeLabel,
      body: '선택한 키워드는 연결된 상위 역량 안에서 함께 사용되는 기술입니다.',
    };

  const isRelated = (node) => {
    if (!activeNode) {
      return false;
    }

    if (activeNode === coreNodeLabel) {
      return true;
    }

    if (node.label === activeNode || node.parent === activeNode) {
      return true;
    }

    const activeParent = mindMapNodes.find((item) => item.label === activeNode)?.parent;
    return Boolean(activeParent && (node.label === activeParent || node.parent === activeParent));
  };

  const isLinkActive = (link) => {
    if (!activeNode) {
      return false;
    }

    if (activeNode === coreNodeLabel) {
      return true;
    }

    const activeParent = mindMapNodes.find((item) => item.label === activeNode)?.parent;
    return [link.from, link.to].includes(activeNode) || Boolean(activeParent && [link.from, link.to].includes(activeParent));
  };

  const handleWheel = (event) => {
    if (event.deltaY > 12) {
      onEnter();
    }
  };

  const updateTooltipPosition = (clientX, clientY) => {
    const stage = stageRef.current;
    if (!stage) {
      return;
    }

    const rect = stage.getBoundingClientRect();
    const tooltipWidth = 300;
    const tooltipHeight = 136;
    const maxX = Math.max(12, rect.width - tooltipWidth - 12);
    const maxY = Math.max(12, rect.height - tooltipHeight - 12);
    const x = Math.min(Math.max(clientX - rect.left + 18, 12), maxX);
    const y = Math.min(Math.max(clientY - rect.top + 18, 12), maxY);
    setTooltipPosition({ x, y, visible: true });
  };

  const showTooltipNearNode = (node) => {
    const stage = stageRef.current;
    if (!stage) {
      return;
    }

    const rect = stage.getBoundingClientRect();
    updateTooltipPosition(rect.left + (rect.width * node.x) / 100, rect.top + (rect.height * node.y) / 100);
  };

  const activateNode = (label, event) => {
    setActiveNode(label);
    if (typeof event?.clientX === 'number' && typeof event?.clientY === 'number') {
      updateTooltipPosition(event.clientX, event.clientY);
      return;
    }

    const node = nodeByLabel.get(label);
    if (node) {
      showTooltipNearNode(node);
    }
  };

  const resetActiveNode = () => {
    setActiveNode(null);
    setTooltipPosition((current) => ({ ...current, visible: false }));
  };

  const handleTouchStart = (event) => {
    touchStartY.current = event.touches[0]?.clientY ?? null;
  };

  const handleTouchEnd = (event) => {
    if (touchStartY.current === null) {
      return;
    }

    const touchEndY = event.changedTouches[0]?.clientY ?? touchStartY.current;
    if (touchStartY.current - touchEndY > 36) {
      onEnter();
    }

    touchStartY.current = null;
  };

  return (
    <section
      className="v2-gate v3-mindmap-main"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onKeyDown={(event) => {
        if (event.target !== event.currentTarget) {
          return;
        }

        if (event.key === 'Enter' || event.key === 'PageDown' || event.key === 'ArrowDown' || event.key === ' ') {
          event.preventDefault();
          onEnter();
        }
      }}
      tabIndex={0}
      aria-label="백경서를 표현하는 네트워크 포트폴리오 메인"
    >
      <div className="v3-mindmap-copy">
        <p className="v2-label">Baek Kyung-seo</p>
        <h1>
          Network
          <span>portfolio</span>
        </h1>
        <p>운영 경험, 화면 구현, 데이터 흐름을 하나의 연결망으로 보여줍니다.</p>
        <div className="v3-mindmap-actions">
          <button type="button" className="primary" onClick={onEnter}>
            View Resume
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div
        className="v3-mindmap-stage"
        aria-label="백경서 네트워크 연결망"
        ref={stageRef}
        onPointerMove={(event) => {
          if (tooltipPosition.visible) {
            updateTooltipPosition(event.clientX, event.clientY);
          }
        }}
        onPointerLeave={() => {
          resetActiveNode();
        }}
        onMouseLeave={resetActiveNode}
      >
        <div className="v3-mindmap-graph">
          <svg className="v3-mindmap-lines" viewBox="0 0 100 100" aria-hidden="true">
            {networkLinks.map((link) => {
              const from = nodeByLabel.get(link.from);
              const to = nodeByLabel.get(link.to);
              const lineState = activeNode ? (isLinkActive(link) ? 'is-active' : 'is-muted') : '';
              if (!from || !to) {
                return null;
              }

              return (
                <line
                  className={`is-${link.type}-line ${lineState}`}
                  key={`${link.from}-${link.to}`}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                />
              );
            })}
          </svg>
          <button
            type="button"
            className={`v3-mindmap-core ${activeNode === coreNodeLabel ? 'is-active' : ''}`}
            onClick={(event) => activateNode(coreNodeLabel, event)}
            onFocus={() => activateNode(coreNodeLabel)}
            onMouseEnter={(event) => activateNode(coreNodeLabel, event)}
            onPointerEnter={(event) => activateNode(coreNodeLabel, event)}
            onPointerMove={(event) => activateNode(coreNodeLabel, event)}
          >
            <span>{coreNodeLabel}</span>
          </button>
          {mindMapNodes.map((node) => (
            <button
              type="button"
              className={`v3-mindmap-node is-${node.size} ${activeNode === node.label ? 'is-active' : ''} ${activeNode ? (isRelated(node) ? 'is-related' : 'is-muted') : ''}`}
              key={node.label}
              style={{ '--x': `${node.x}%`, '--y': `${node.y}%` }}
              onClick={(event) => activateNode(node.label, event)}
              onFocus={() => activateNode(node.label)}
              onMouseEnter={(event) => activateNode(node.label, event)}
              onPointerEnter={(event) => activateNode(node.label, event)}
              onPointerMove={(event) => activateNode(node.label, event)}
              aria-pressed={activeNode === node.label}
            >
              <span>{node.label}</span>
            </button>
          ))}
        </div>
        <aside
          className={`v3-mindmap-inspector ${tooltipPosition.visible ? 'is-visible' : ''}`}
          aria-live="polite"
          style={{
            '--tooltip-x': `${tooltipPosition.x}px`,
            '--tooltip-y': `${tooltipPosition.y}px`,
          }}
        >
          <p>{activeDetails.title}</p>
          <strong>{childMap[activeNode]?.length ? `연결 노드 ${childMap[activeNode].length}개` : '연결 기술'}</strong>
          <span>{activeDetails.body}</span>
        </aside>
      </div>
    </section>
  );
}
