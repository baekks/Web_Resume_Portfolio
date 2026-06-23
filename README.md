# Web Resume Portfolio

> React 기반 웹 이력서 포트폴리오입니다. 동일한 포트폴리오 내용을 React 원본, HTML 정적 버전, Vue 버전으로 확인할 수 있도록 구성했습니다.

![Web Resume Portfolio preview](public/assets/web-resume-version3.png)

## 데모와 링크

- GitHub: [baekks/Web_Resume_Portfolio](https://github.com/baekks/Web_Resume_Portfolio)
- Blog: [velog.io/@siyeoniiii](https://velog.io/@siyeoniiii/posts)
- Learning Docs: [DX Academy Notion](https://app.notion.com/p/DX-Academy-3813bc0ba13280ab87d1fa05c410333b?source=copy_link)
- Resume: [Baek_Kyung_Seo_Resume.docx](public/assets/Baek_Kyung_Seo_Resume.docx)
- Local: `http://127.0.0.1:5173/`

## 버전 구성

| 버전 | 경로 | 설명 |
| ---- | ---- | ---- |
| React Original | `/` | React와 Vite로 구현한 원본 포트폴리오입니다. 메인 네트워크 화면에서 스크롤 또는 버튼 클릭 후 본문으로 진입합니다. |
| Version 1 | `/versions/html/index.html` | JavaScript 프레임워크 없이 HTML로 구성한 정적 버전입니다. 디자인, 그리드, 콘텐츠는 React 버전과 동일한 레이아웃을 기준으로 맞췄습니다. |
| Version 2 | `/versions/vue/index.html` | Vue 문법으로 옮긴 버전입니다. 화면 구성, 반응형 레이아웃, 프로젝트 데이터는 React 버전과 동일하게 유지했습니다. |

## 프로젝트 소개

이 프로젝트는 백경서의 개발 경험, 기술 스택, 경력, 프로젝트, 학습 기록을 한 화면 흐름으로 정리한 웹 포트폴리오입니다.

React 원본은 첫 화면에서 `Full-stack`, `Backend`, `Frontend`, `Operations`, `Workflow`, `Growth` 키워드를 네트워크 연결망 형태로 보여줍니다. 본문에서는 기술 스택, 핵심 강점, 작업 흐름, 경력, 프로젝트, 학습 기록, 연락처를 순서대로 확인할 수 있습니다.

## 주요 기능

- 네트워크 그래프 기반 메인 인터랙션
- 노드 hover, focus, click 시 관련 연결선 강조
- About, Tech Stack, Strengths, Workflow, Career, Projects, Learning, Contact 섹션 구성
- 기술 스택 우선순위 및 보조 기술 흐림 처리
- Career 섹션의 학력사항, 교육사항, 경력사항 분리
- 경력사항 총 경력 표시
- 개인, 팀, 실무 프로젝트 필터링
- 프로젝트 11개 카드 구성
- 대표 프로젝트 5개 상세 모달 제공
- 학습 기록 Notion 연결
- GitHub, Blog, Email, Resume 다운로드 연결
- React / HTML / Vue 버전 분리 제공

## 화면 구성

| 섹션 | 설명 |
| ---- | ---- |
| Main | React 원본에서 핵심 역량과 기술 흐름을 네트워크 연결망으로 표시 |
| About | 개발자 소개와 프로필 이미지 |
| Tech Stack | 언어, 프론트엔드, 백엔드, 데이터베이스, 인프라, 협업 도구 정리 |
| Strengths | 백엔드, 프론트엔드, 운영, 협업 역량 요약 |
| Workflow | 화면, 서버, 데이터, 운영 관점과 작업 흐름 정리 |
| Career | 학력사항, 교육사항, 경력사항 분리 |
| Projects | 개인, 팀, 실무 프로젝트 카드와 대표 프로젝트 상세 모달 |
| Learning | DX Academy Notion 학습 기록 연결 |
| Contact | GitHub, Blog, Email, Resume 버튼 제공 |

## 기술 스택

| 기술 | 사용 목적 |
| ---- | -------- |
| React | 원본 포트폴리오의 컴포넌트 구성, 상태 관리, 프로젝트 필터, 상세 모달 구현 |
| Vite | 개발 서버와 프로덕션 빌드 환경 구성 |
| JavaScript | 포트폴리오 데이터, 필터, 네트워크 그래프 상태 처리 |
| Vue | React 원본 화면을 Vue 문법으로 재구성한 Version 2 구현 |
| HTML5 | 프레임워크 없는 정적 Version 1 구성 |
| CSS3 | 전체 레이아웃, 반응형, 네트워크 그래프, 카드 UI 스타일링 |
| lucide-react | React 원본 섹션 및 버튼 아이콘 구성 |

## 핵심 구현

### React Original

React 원본은 메인 네트워크 화면과 포트폴리오 본문으로 나뉩니다. 메인 화면에서는 노드와 연결선을 통해 기술과 경험의 관계를 보여주고, 본문에서는 채용 담당자가 확인하기 쉬운 순서로 정보를 정리했습니다.

### HTML Version 1

HTML 버전은 정적 페이지입니다. 별도 프레임워크 없이 작성했지만, React 버전과 같은 CSS 기준을 사용해 헤더, 섹션 폭, 그리드, 카드 배치, 아이콘 크기, 학습 기록 카드 크기를 맞췄습니다.

### Vue Version 2

Vue 버전은 React 원본을 Vue 문법으로 옮긴 버전입니다. 화면 결과가 React와 동일하게 보이도록 같은 CSS와 클래스 구조를 사용하고, 프로젝트 데이터와 경력 데이터도 동일한 기준으로 구성했습니다.

### 프로젝트 데이터

프로젝트는 최신 항목이 먼저 보이도록 번호 기준 내림차순으로 정렬합니다.

대표 상세 모달이 적용된 프로젝트는 아래 5개입니다.

```text
ProjectA (Team)
Jeju Culture & Tourism
ReadMe
LogMile
Web Resume Portfolio
```

전체 프로젝트는 아래 11개입니다.

```text
Web Resume Portfolio
LogMile
ReadMe
LUXE SHOP
Jeju Culture & Tourism
Gyeongju Culture Tour
Assembly Maintenance
ProjectA (Team)
Messenger Solution
Web_Homepage
Shop_Portfolio
```

## Career 구성

Career 섹션은 아래 기준으로 분리했습니다.

```text
학력사항
교육사항
경력사항
```

경력사항에는 실제 근무 이력과 총 경력을 함께 표시합니다.

## Contact 구성

Contact 버튼은 아래 순서로 배치했습니다.

```text
GitHub / Blog
Email  / Resume
```

Resume 버튼은 `public/assets/Baek_Kyung_Seo_Resume.docx` 파일을 다운로드합니다.

## 프로젝트 구조

```text
Web_Resume_Portfolio/
├─ README.md
├─ index.html
├─ package.json
├─ public/
│  ├─ assets/
│  │  ├─ Baek_Kyung_Seo_Resume.docx
│  │  ├─ profile-photo.jpeg
│  │  └─ *.png
│  └─ versions/
│     ├─ html/
│     │  └─ index.html
│     └─ vue/
│        ├─ index.html
│        └─ version2.css
└─ src/
   ├─ App.jsx
   ├─ Version3.jsx
   ├─ components/
   │  ├─ About.jsx
   │  ├─ ArchitectureWorkflow.jsx
   │  ├─ Career.jsx
   │  ├─ Contact.jsx
   │  ├─ CoreStrengths.jsx
   │  ├─ Footer.jsx
   │  ├─ Header.jsx
   │  ├─ LearningDocs.jsx
   │  ├─ Main.jsx
   │  ├─ Projects.jsx
   │  └─ Skills.jsx
   ├─ data/
   │  └─ portfolioData.js
   ├─ main.jsx
   ├─ styles.css
   └─ version2.css
```

## 실행 방법

### 1. 저장소 클론

```bash
git clone https://github.com/baekks/Web_Resume_Portfolio.git
cd Web_Resume_Portfolio
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 아래 주소로 접속합니다.

```text
http://127.0.0.1:5173/
```

### 4. 버전별 확인

```text
React Original: http://127.0.0.1:5173/
HTML Version:   http://127.0.0.1:5173/versions/html/index.html
Vue Version:    http://127.0.0.1:5173/versions/vue/index.html
```

### 5. 프로덕션 빌드

```bash
npm run build
```

빌드 결과물은 `dist/` 폴더에 생성됩니다.

## 검증

- `npm run build`로 프로덕션 빌드 확인
- React / HTML / Vue 버전 로컬 렌더링 확인
- 세 버전의 헤더 폭, 섹션 폭, 그리드 컬럼, 프로젝트 카드 개수 확인
- HTML / Vue 버전의 학습 기록 폰트 크기와 아이콘 크기 조정
- Contact 링크, Blog 링크, Resume 다운로드 경로 확인

## 개선 계획

- 배포 URL 추가
- 프로젝트 상세 내용을 별도 상세 페이지로 확장 검토
- Resume PDF 버전 추가 검토
- Lighthouse 기준 성능, 접근성, SEO 점검
- 네트워크 그래프 모바일 가독성 추가 개선

## 연락처

- GitHub: [baekks](https://github.com/baekks)
- Blog: [velog.io/@siyeoniiii](https://velog.io/@siyeoniiii/posts)
- Email: [baekks93@gmail.com](mailto:baekks93@gmail.com)
