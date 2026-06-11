import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import {
  ArrowRight,
  CircuitBoard,
  Code2,
  Database,
  Github,
  Layers3,
  Mail,
  MonitorCheck,
  ServerCog,
  Sparkles,
  Terminal,
  Wrench,
} from 'lucide-react';
import './version2.css';

const projectImages = [
  '/assets/projects-reference.png',
  '/assets/main-reference.png',
  '/assets/skills-reference.png',
  '/assets/career-reference.png',
  '/assets/about-reference.png',
];

const projects = [
  {
    title: 'Shop_Portfolio',
    tags: ['React.js', 'API Integration', 'CSS3'],
    summary:
      '컴포넌트 기반 UI, useState/useEffect를 활용한 상태 관리 및 REST API 비동기 데이터 핸들링을 적용한 종합 쇼핑몰 포트폴리오입니다.',
    action: 'Github Repo',
  },
  {
    title: 'Web_Homepage',
    tags: ['HTML5', 'CSS3', 'JS'],
    summary: '시맨틱 태그와 반응형 레이아웃을 구현한 개인 웹사이트 프로젝트입니다.',
    action: 'Github Repo',
  },
  {
    title: 'ProjectA (Team)',
    tags: ['Java', 'Spring Boot', 'JPA'],
    summary:
      '한국의 주요 관광지와 지역 정보를 제공하는 풀스택 문화관광 플랫폼입니다. 일정 관리와 DB 연동 업무를 수행했습니다.',
    action: 'Team Repo',
  },
  {
    title: 'Assembly Maintenance',
    tags: ['Linux', 'CentOS', 'Shell Script'],
    summary:
      '의회 홈페이지의 서버 유지보수와 장애 처리를 담당하며 웹 서버 배포 및 운영 모니터링을 수행한 실무 경험입니다.',
    action: 'Internal Project',
  },
  {
    title: 'Messenger Solution',
    tags: ['Java', 'Spring', 'Oracle DB'],
    summary:
      '전자회의 솔루션 및 기업용 메신저의 웹 버전 서버 개발에 참여하며 백엔드 API와 데이터베이스 연동을 담당했습니다.',
    action: 'Enterprise Solution',
  },
];

const skillGroups = [
  {
    icon: Code2,
    title: 'Languages',
    description: '웹 애플리케이션 구현과 서버 로직 작성에 사용하는 언어입니다.',
    groups: [
      { label: '주요 사용', values: ['Java', 'JavaScript', 'HTML5', 'CSS3'] },
      { label: '사용 경험', values: ['Python', 'C', 'R', 'SQL', 'Shell Script'] },
    ],
  },
  {
    icon: MonitorCheck,
    title: 'Frontend',
    description: '반응형 화면과 상태 기반 UI를 구현할 때 사용하는 기술입니다.',
    groups: [
      { label: '라이브러리·프레임워크', values: ['React.js', 'Vue.js', 'Redux', 'Pinia'] },
      { label: '빌드·통신', values: ['Vite', 'Axios', 'Fetch API'] },
      { label: '스타일링', values: ['CSS Modules', 'Responsive Layout', 'UI/UX Design'] },
    ],
  },
  {
    icon: ServerCog,
    title: 'Backend',
    description: 'API 서버, 계층형 구조, 데이터 연동 로직을 구현할 때 사용하는 기술입니다.',
    groups: [
      { label: '프레임워크', values: ['Spring Boot', 'Spring MVC', 'Thymeleaf', 'JSP', 'Web Servlet'] },
      { label: '데이터 접근', values: ['JPA', 'MyBatis', 'JDBC'] },
      { label: '보안·검증', values: ['Spring Security', 'Validation', 'REST API'] },
    ],
  },
  {
    icon: Database,
    title: 'Database & Infra',
    description: '데이터베이스 연동과 서버 운영, 배포 환경을 다룰 때 사용한 기술입니다.',
    groups: [
      { label: 'Database', values: ['PostgreSQL', 'Oracle DB', 'MySQL'] },
      { label: 'Server', values: ['Linux', 'CentOS', 'Apache', 'Tomcat'] },
      { label: 'Infra', values: ['Docker', 'AWS', 'Raspberry Pi', 'MQTT'] },
    ],
  },
  {
    icon: Wrench,
    title: 'Tools & Workflow',
    description: '개발, 협업, 테스트, 문서화 과정에서 사용하는 도구입니다.',
    groups: [
      { label: '개발 도구', values: ['VS Code', 'IntelliJ IDEA', 'Eclipse'] },
      { label: '협업·버전관리', values: ['Git', 'GitHub', 'SVN', 'Notion'] },
      { label: '테스트·API', values: ['Postman', 'Maven', 'Gradle'] },
    ],
  },
  {
    icon: Sparkles,
    title: 'Learning & Expanding',
    description: '현재 학습하며 프로젝트 적용 범위를 넓히고 있는 기술입니다.',
    groups: [
      { label: 'AI·데이터', values: ['FastAPI', 'PyTorch', 'OpenCV', 'YOLO', 'OCR'] },
      { label: '관심 영역', values: ['CI/CD Pipeline', 'Unit Test', 'Cloud Native'] },
    ],
  },
];

const careerItems = [
  {
    type: 'Education',
    title: '스마트 모빌리티 DX Academy',
    org: 'MBC 아카데미 컴퓨터 교육센터',
    period: '2025.12 - Present',
    body: '웹설계 기초, AI 프로그래밍, React, Vue, UI/UX 설계 및 저작 학습 중.',
  },
  {
    type: 'Academic',
    title: '컴퓨터공학과',
    org: '방송통신대학교',
    period: '2024.03 - Present',
    body: '컴퓨터공학 전공 지식 습득 및 실무 학습 중.',
  },
  {
    type: 'Tech Support',
    title: '기술지원 사원',
    org: '(주)제윤',
    period: '2023.10 - 2024.10',
    body: 'Linux/CentOS 환경 웹 서버 배포 및 모니터링, 장애 원인 분석과 복구 대응.',
  },
  {
    type: 'Training',
    title: 'Java 웹 앱 개발 통합 과정',
    org: '코리아 IT 아카데미',
    period: '2022.06 - 2023.02',
    body: 'Java, Spring Boot, JPA, React.js 등 풀스택 개발 역량 강화.',
  },
  {
    type: 'Internship',
    title: '웹개발 인턴',
    org: '주식회사 위미츠',
    period: '2022.01 - 2022.04',
    body: 'Java/Spring 기반 백엔드 API 개발 및 데이터베이스 연동 실무 경험.',
  },
  {
    type: 'Training',
    title: '자바 빅데이터 풀스택 과정',
    org: '인천직업능력교육원',
    period: '2021.06 - 2021.11',
    body: 'Java 기반 웹 개발, 빅데이터 처리, 데이터베이스 연동 및 풀스택 개발 기초 학습.',
  },
  {
    type: 'Administration',
    title: '관리팀 사원',
    org: '(주)화성',
    period: '2020.12 - 2021.06',
    body: 'MES 제조실행시스템 운영 및 데이터 관리 담당.',
  },
  {
    type: 'Academic',
    title: '컴퓨터정보전자과 디지털전자전공',
    org: '구미대학교',
    period: '2012.03 - 2014.02',
    body: '컴퓨터정보전자 및 디지털전자 전공 과정 이수.',
  },
];

const paletteCards = [
  { name: 'Stable Navy', hex: '#0B1C30', body: '안정적인 서비스 구조를 먼저 생각하는 기준색' },
  { name: 'Midnight Ops', hex: '#031427', body: '서버 운영과 장애 대응 경험을 담은 깊은 네이비' },
  { name: 'Deep Server', hex: '#102034', body: '백엔드 흐름과 데이터 연동을 차분하게 쌓는 색' },
  { name: 'Interface Blue', hex: '#1B2B3F', body: '화면과 API 사이의 균형을 잡는 인터페이스 톤' },
  { name: 'Code Slate', hex: '#26364A', body: '코드를 읽고 정리하는 습관을 표현하는 슬레이트' },
  { name: 'Service Gold', hex: '#F2CA50', body: '사용자에게 닿는 안정적인 결과물을 향한 포인트' },
  { name: 'Brass Focus', hex: '#D4AF37', body: '문제를 끝까지 좁혀가는 집중력' },
  { name: 'Soft Gold', hex: '#FFE088', body: '딱딱한 기술을 읽기 쉽게 풀어내는 온도' },
  { name: 'Signal Cyan', hex: '#5EEAD4', body: '이상 신호를 빠르게 발견하고 연결하는 감각' },
  { name: 'API Teal', hex: '#2DD4BF', body: '프론트와 백엔드가 자연스럽게 만나는 접점' },
  { name: 'Debug Mint', hex: '#34D399', body: '작게 재현하고 차근차근 해결하는 디버깅 태도' },
  { name: 'Success Green', hex: '#22C55E', body: '배포와 기능 완성의 체크 포인트' },
  { name: 'Terminal Lime', hex: '#A3E635', body: '명령어와 로그를 따라가며 원인을 찾는 리듬' },
  { name: 'React Sky', hex: '#38BDF8', body: '상태 기반 UI를 구성하는 프론트엔드 감각' },
  { name: 'Data Blue', hex: '#60A5FA', body: '데이터 흐름을 화면과 서비스로 연결하는 색' },
  { name: 'Database Blue', hex: '#2563EB', body: '쿼리, 테이블, 연동 구조를 이해하는 기반' },
  { name: 'Kernel Indigo', hex: '#818CF8', body: '운영체제와 서버 환경을 이해하려는 깊이' },
  { name: 'Logic Violet', hex: '#A78BFA', body: '조건과 흐름을 구조화하는 로직 감각' },
  { name: 'Learning Purple', hex: '#C084FC', body: '새로운 기술을 흡수하고 적용하는 성장색' },
  { name: 'Alert Rose', hex: '#FB7185', body: '문제를 그냥 넘기지 않는 예민한 확인 습관' },
  { name: 'Warm Coral', hex: '#F97316', body: '협업과 커뮤니케이션에 남기는 따뜻한 온도' },
  { name: 'Review Amber', hex: '#F59E0B', body: '검토하고 개선점을 찾는 리뷰 포인트' },
  { name: 'Document Cream', hex: '#D0C5AF', body: '기록하고 정리해 다음 작업을 쉽게 만드는 색' },
  { name: 'Silver Text', hex: '#D3E4FE', body: '가독성과 명확함을 우선하는 문서의 색' },
  { name: 'Grid Gray', hex: '#94A3B8', body: '레이아웃과 정보 구조를 정돈하는 기준선' },
  { name: 'Line Gray', hex: '#64748B', body: '불필요한 장식을 덜어내는 절제된 선' },
  { name: 'Quiet Steel', hex: '#475569', body: '반복되는 유지보수 속에서도 흔들리지 않는 태도' },
  { name: 'Shell Black', hex: '#020D1A', body: '터미널에서 시작되는 문제 해결의 첫 화면' },
  { name: 'Console Black', hex: '#000F21', body: '로그를 읽고 서비스 상태를 파악하는 배경' },
  { name: 'Java Orange', hex: '#E76F00', body: 'Java와 Spring 기반 웹 개발 경험' },
  { name: 'Spring Green', hex: '#6DB33F', body: 'Spring Boot, MVC, Thymeleaf, JSP를 다룬 경험' },
  { name: 'Git Red', hex: '#F05032', body: '변경 이력을 남기고 흐름을 관리하는 버전 관리색' },
  { name: 'Linux Gray', hex: '#CBD5E1', body: 'Linux/CentOS 서버 운영 경험을 받쳐주는 색' },
  { name: 'Focus White', hex: '#F8FAFC', body: '복잡한 내용을 명확한 화면으로 정리하는 마무리' },
];

const mindMapNodes = [
  { label: 'Full-stack', x: 50, y: 12, size: 'large' },
  { label: 'Backend', x: 23, y: 32, size: 'large' },
  { label: 'Frontend', x: 77, y: 32, size: 'large' },
  { label: 'Operations', x: 23, y: 66, size: 'large' },
  { label: 'Workflow', x: 77, y: 66, size: 'large' },
  { label: 'Growth', x: 50, y: 83, size: 'medium' },
  { label: 'Java', x: 12, y: 19, size: 'small', parent: 'Backend' },
  { label: 'Spring Boot', x: 13, y: 38, size: 'small', parent: 'Backend' },
  { label: 'REST API', x: 12, y: 51, size: 'small', parent: 'Backend' },
  { label: 'JPA / MyBatis', x: 36, y: 20, size: 'small', parent: 'Backend' },
  { label: 'Validation', x: 24, y: 46, size: 'small', parent: 'Backend' },
  { label: 'React', x: 65, y: 20, size: 'small', parent: 'Frontend' },
  { label: 'State UI', x: 80, y: 17, size: 'small', parent: 'Frontend' },
  { label: 'Vue', x: 88, y: 29, size: 'small', parent: 'Frontend' },
  { label: 'Responsive UI', x: 87, y: 45, size: 'small', parent: 'Frontend' },
  { label: 'UX Flow', x: 72, y: 51, size: 'small', parent: 'Frontend' },
  { label: 'Linux', x: 12, y: 60, size: 'small', parent: 'Operations' },
  { label: 'CentOS', x: 13, y: 79, size: 'small', parent: 'Operations' },
  { label: 'Monitoring', x: 37, y: 62, size: 'small', parent: 'Operations' },
  { label: 'PostgreSQL', x: 40, y: 76, size: 'small', parent: 'Operations' },
  { label: 'Maintenance', x: 28, y: 90, size: 'small', parent: 'Operations' },
  { label: 'GitHub', x: 88, y: 59, size: 'small', parent: 'Workflow' },
  { label: 'Postman', x: 88, y: 78, size: 'small', parent: 'Workflow' },
  { label: 'Notion', x: 64, y: 72, size: 'small', parent: 'Workflow' },
  { label: 'Docs', x: 68, y: 89, size: 'small', parent: 'Workflow' },
  { label: 'CI/CD', x: 50, y: 69, size: 'small', parent: 'Growth' },
  { label: 'FastAPI', x: 41, y: 96, size: 'small', parent: 'Growth' },
  { label: 'OpenCV', x: 59, y: 96, size: 'small', parent: 'Growth' },
];

function DataScene({ assembled }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const pointer = { x: 0, y: 0 };
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 1.2, 8.2);

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const group = new THREE.Group();
    scene.add(group);

    const ambient = new THREE.AmbientLight(0x8fa8ff, 0.72);
    scene.add(ambient);

    const key = new THREE.DirectionalLight(0x8fa8ff, 1.25);
    key.position.set(4, 6, 6);
    scene.add(key);

    const fill = new THREE.PointLight(0x8fa8ff, 1.4, 12);
    fill.position.set(-3.8, 0.2, 4);
    scene.add(fill);

    const materials = {
      navy: new THREE.MeshStandardMaterial({ color: 0x212842, metalness: 0.45, roughness: 0.32 }),
      dark: new THREE.MeshStandardMaterial({ color: 0x212842, metalness: 0.5, roughness: 0.28 }),
      screen: new THREE.MeshStandardMaterial({
        color: 0x212842,
        emissive: 0x8fa8ff,
        emissiveIntensity: 0.9,
        metalness: 0.25,
        roughness: 0.24,
      }),
      gold: new THREE.MeshStandardMaterial({ color: 0x8fa8ff, emissive: 0x212842, metalness: 0.72, roughness: 0.2 }),
      cyan: new THREE.MeshStandardMaterial({ color: 0x8fa8ff, emissive: 0x212842, metalness: 0.35, roughness: 0.25 }),
      light: new THREE.MeshStandardMaterial({ color: 0x8fa8ff, metalness: 0.34, roughness: 0.26 }),
    };

    const geometries = {
      base: new THREE.BoxGeometry(4.8, 0.18, 2.4),
      screen: new THREE.BoxGeometry(3.2, 1.78, 0.12),
      stand: new THREE.BoxGeometry(0.18, 0.8, 0.16),
      foot: new THREE.BoxGeometry(1.2, 0.12, 0.58),
      keyboard: new THREE.BoxGeometry(2.9, 0.08, 0.62),
      key: new THREE.BoxGeometry(0.16, 0.045, 0.12),
      line: new THREE.BoxGeometry(1, 0.035, 0.035),
      panel: new THREE.BoxGeometry(0.9, 1.18, 0.08),
      hex: new THREE.CylinderGeometry(0.34, 0.34, 0.06, 6),
    };

    const createMesh = (geometry, material, position, rotation = [0, 0, 0], scale = [1, 1, 1]) => {
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(...position);
      mesh.rotation.set(...rotation);
      mesh.scale.set(...scale);
      group.add(mesh);
      return mesh;
    };

    const base = createMesh(geometries.base, materials.navy, [0, -1.36, 0], [0, 0, 0]);
    base.rotation.y = -0.08;

    const monitor = new THREE.Group();
    monitor.position.set(0, 0.1, 0);
    group.add(monitor);
    const screenFrame = new THREE.Mesh(geometries.screen, materials.dark);
    const screenFace = new THREE.Mesh(new THREE.BoxGeometry(2.92, 1.5, 0.04), materials.screen);
    screenFace.position.z = 0.085;
    monitor.add(screenFrame, screenFace);
    monitor.add(createMesh(geometries.stand, materials.navy, [0, -1.2, -0.03]));
    monitor.add(createMesh(geometries.foot, materials.navy, [0, -1.62, 0.1]));

    const codeLines = [];
    const lineWidths = [1.6, 2.2, 1.2, 1.9, 1.45, 2.05];
    lineWidths.forEach((width, index) => {
      const line = new THREE.Mesh(geometries.line, index % 2 ? materials.cyan : materials.gold);
      line.scale.x = width;
      line.position.set(-0.55 + width * 0.18, 0.52 - index * 0.22, 0.13);
      monitor.add(line);
      codeLines.push(line);
    });

    const keyboard = createMesh(geometries.keyboard, materials.dark, [0, -1.18, 1.14], [-0.16, 0, 0]);
    const keys = [];
    for (let row = 0; row < 3; row += 1) {
      for (let col = 0; col < 10; col += 1) {
        const keyMesh = createMesh(
          geometries.key,
          row === 1 && col % 3 === 0 ? materials.gold : materials.light,
          [-1.18 + col * 0.26, -1.09, 0.94 + row * 0.17],
          [-0.16, 0, 0],
        );
        keys.push(keyMesh);
      }
    }

    const floatingPanels = [
      createMesh(geometries.panel, materials.navy, [-2.25, 0.45, 0.25], [0.1, 0.42, -0.08]),
      createMesh(geometries.panel, materials.navy, [2.25, 0.35, 0.15], [0.08, -0.42, 0.08]),
      createMesh(geometries.panel, materials.dark, [1.75, -0.72, 0.56], [-0.16, -0.32, 0.12]),
    ];

    const floatingHexes = [];
    const hexTargets = [
      [-2.55, 1.35, 0.25],
      [-1.72, 1.78, -0.08],
      [2.58, 1.28, 0.22],
      [2.08, 1.82, -0.08],
      [0.08, 2.0, -0.18],
    ];
    hexTargets.forEach((target, index) => {
      const hex = createMesh(geometries.hex, index % 2 ? materials.cyan : materials.gold, target, [Math.PI / 2, 0, 0]);
      hex.userData.seed = index * 0.9;
      floatingHexes.push(hex);
    });

    const resize = () => {
      const { clientWidth, clientHeight } = canvas.parentElement;
      renderer.setSize(clientWidth, clientHeight, false);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    };

    const handlePointerMove = (event) => {
      const rect = canvas.parentElement.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * -2;
    };

    let frameId = 0;
    const startTime = performance.now();
    const animate = () => {
      const elapsed = (performance.now() - startTime) / 1000;
      const pulse = (Math.sin(elapsed * 2.2) + 1) / 2;
      const launch = assembled ? 1 : 0;
      screenFace.material.emissiveIntensity = assembled ? 0.75 + pulse * 0.18 : 0.95 + pulse * 0.28;
      monitor.rotation.y = Math.sin(elapsed * 0.35) * 0.08 + pointer.x * 0.11;
      monitor.rotation.x = pointer.y * 0.05;
      keyboard.rotation.z = Math.sin(elapsed * 0.5) * 0.015;

      codeLines.forEach((line, index) => {
        line.scale.x = lineWidths[index] * (0.9 + Math.sin(elapsed * 1.4 + index) * 0.06);
      });

      keys.forEach((keyMesh, index) => {
        keyMesh.position.y = -1.09 + Math.sin(elapsed * 3 + index * 0.4) * 0.006;
      });

      floatingPanels.forEach((panel, index) => {
        panel.position.y += Math.sin(elapsed * 0.8 + index) * 0.0008;
        panel.position.x += pointer.x * 0.0008 * (index + 1);
        panel.rotation.y += Math.sin(elapsed * 0.5 + index) * 0.0006;
      });

      floatingHexes.forEach((hex, index) => {
        hex.position.y = hexTargets[index][1] + Math.sin(elapsed * 1.1 + hex.userData.seed) * 0.08;
        hex.rotation.z += 0.01;
      });

      group.rotation.y = Math.sin(elapsed * 0.24) * 0.12 + pointer.x * 0.18;
      group.rotation.x = -0.08 + Math.sin(elapsed * 0.18) * 0.04 - pointer.y * 0.08;
      group.scale.lerp(new THREE.Vector3(assembled ? 1.18 : 1, assembled ? 1.18 : 1, assembled ? 1.18 : 1), 0.055);
      group.position.lerp(new THREE.Vector3(0, assembled ? 0.18 : 0, assembled ? 0.35 : 0), 0.045);
      camera.position.z += ((assembled ? 7.15 : 8.2) - camera.position.z) * 0.04;
      fill.intensity = 1.4 + pulse * 0.4 + launch * 0.8;
      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener('resize', resize);
    canvas.parentElement.addEventListener('pointermove', handlePointerMove);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
      canvas.parentElement?.removeEventListener('pointermove', handlePointerMove);
      Object.values(geometries).forEach((geometry) => geometry.dispose());
      Object.values(materials).forEach((material) => material.dispose());
      renderer.dispose();
    };
  }, [assembled]);

  return <canvas ref={canvasRef} className="v2-canvas" aria-label="데이터 조각이 모이는 3D 포트폴리오 씬" />;
}

export default function Version2() {
  const [entered, setEntered] = useState(false);
  const [launching, setLaunching] = useState(false);
  const [activeColor, setActiveColor] = useState(0);
  const wheelLock = useRef(false);

  const movePalette = (direction) => {
    setActiveColor((current) => (current + direction + paletteCards.length) % paletteCards.length);
  };

  const handlePaletteWheel = (event) => {
    event.preventDefault();
    if (launching || wheelLock.current) {
      return;
    }
    wheelLock.current = true;
    movePalette(event.deltaY > 0 ? 1 : -1);
    window.setTimeout(() => {
      wheelLock.current = false;
    }, 130);
  };

  const enterPortfolio = () => {
    if (launching) {
      return;
    }
    setLaunching(true);
    window.setTimeout(() => {
      setEntered(true);
      setLaunching(false);
      window.setTimeout(() => {
        document.querySelector('#v2-top')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
    }, 860);
  };

  return (
    <main className={`v2-shell v3-shell ${entered ? 'is-rendered' : 'is-gate'} ${launching ? 'is-launching' : ''}`}>
      <header className="v2-header">
        <a href="/" className="v2-brand">
          BKS.dev
        </a>
        {entered ? (
          <nav aria-label="Version3 sections">
            <a href="#v2-top">About</a>
            <a href="#v2-skills">Skills</a>
            <a href="#v2-career">Career</a>
            <a href="#v2-projects">Projects</a>
            <a href="#v2-contact">Contact</a>
          </nav>
        ) : (
          <a href="/" className="v2-current-link">
            Current Version
          </a>
        )}
      </header>

      {!entered ? (
        <section
          className="v2-gate v3-mindmap-main"
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              enterPortfolio();
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
              <button type="button" className="primary" onClick={enterPortfolio}>
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
            <button type="button" className="v3-mindmap-core" onClick={enterPortfolio}>
              Baek Kyung-seo
            </button>
            {mindMapNodes.map((node) => (
              <button
                type="button"
                className={`v3-mindmap-node is-${node.size}`}
                key={node.label}
                style={{ '--x': `${node.x}%`, '--y': `${node.y}%` }}
                onClick={enterPortfolio}
              >
                {node.label}
              </button>
            ))}
          </div>
        </section>
      ) : (
        <div className="v2-content">
          <section className="v2-hero" id="v2-top">
            <div>
              <div className="v2-kicker">
                <Sparkles size={16} />
                Portfolio
              </div>
              <p className="v2-hero-name">Baek Kyung-seo / Full-stack Developer</p>
              <h1>
                흩어진 경험을
                <span> 하나의 시스템으로</span>
                조립하는 개발자.
              </h1>
              <p>
                서버 운영과 유지보수 경험을 바탕으로 사용자 불편을 코드와 화면 구조로
                개선하는 개발자입니다.
              </p>
            </div>
            <aside className="v2-hero-portrait" aria-label="Baek Kyung-seo profile image">
              <img src="/assets/portrait-about.png" alt="백경서 프로필 일러스트" />
            </aside>
          </section>

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

          <section className="v2-panel" id="v2-career">
            <div className="v2-section-heading">
              <p className="v2-label">Career</p>
              <h2>경력 및 교육</h2>
            </div>
            <div className="v2-timeline">
              {careerItems.map(({ type, title, org, period, body }) => (
                <article key={`${title}-${period}`}>
                  <time>{period}</time>
                  <div>
                    <span>{type}</span>
                    <h3>{title}</h3>
                    <strong>{org}</strong>
                    <p>{body}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="v2-panel v2-projects-panel" id="v2-projects">
            <div className="v2-section-heading">
              <p className="v2-label">Projects</p>
              <h2>Project Portfolio</h2>
            </div>
            <div className="v2-project-grid">
              {projects.map((project, index) => (
                <article className="v2-project-card" key={project.title}>
                  <img src={projectImages[index]} alt={`${project.title} 미리보기`} />
                  <div className="v2-project-body">
                    <div className="v2-project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                    <a href="#v2-top">
                      {project.action}
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="v2-contact" id="v2-contact">
            <CircuitBoard size={42} />
            <div className="v2-contact-copy">
              <p className="v2-label">Contact</p>
              <h2>함께 일할 기회를 기다립니다.</h2>
              <p>프로젝트와 협업 제안은 GitHub 또는 이메일로 편하게 남겨주세요.</p>
            </div>
            <div className="v2-contact-links">
              <a href="https://github.com/baekks" target="_blank" rel="noreferrer">
                <Github size={18} />
                GitHub
              </a>
              <a href="mailto:baekks93@gmail.com">
                <Mail size={18} />
                Email
              </a>
            </div>
          </section>
        </div>
      )}

      <footer className="v2-footer">
        <Terminal size={16} />
        <span>Baek Kyung Seo</span>
        <Layers3 size={16} />
      </footer>
    </main>
  );
}
