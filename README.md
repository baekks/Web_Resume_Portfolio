# Web Resume Portfolio

> React와 Vite로 제작한 개인 웹 이력서 포트폴리오입니다. 마인드맵 메인 화면에서 시작해 소개, 기술 스택, 경력, 프로젝트, 연락처를 한 흐름으로 확인할 수 있습니다.

![Web Resume Portfolio preview](version3/public/assets/web-resume-version3.png)

## 데모

- GitHub: [baekks/Web_Resume_Portfolio](https://github.com/baekks/Web_Resume_Portfolio)
- 로컬 실행 주소: `http://127.0.0.1:5173/`
- 주요 버전: `version3`

## 프로젝트 목표

이 프로젝트는 채용 담당자와 동료 개발자가 이력, 기술 스택, 프로젝트 경험을 빠르게 파악할 수 있도록 만든 웹 기반 이력서입니다.

단순한 이력 나열보다 개발 경험의 연결성을 보여주는 데 집중했습니다. 메인 화면에는 Full-stack, Backend, Frontend, Operations, Workflow, Growth 키워드를 마인드맵 형태로 배치했고, 상세 화면에서는 경력과 프로젝트를 섹션별로 확인할 수 있도록 구성했습니다.

## 주요 기능

- 마인드맵 형태의 진입 화면과 `View Resume` 인터랙션
- About, Skills, Career, Projects, Contact 섹션 구성
- 개인, 팀, 실무 프로젝트를 분류해서 볼 수 있는 프로젝트 필터
- 프로젝트별 이미지, 기술 태그, 요약, 외부 링크 제공
- 반응형 레이아웃 기반의 포트폴리오 UI
- GitHub와 이메일 연락 링크 제공

## 기술 스택과 선택 이유

| 기술 | 사용 이유 |
| ---- | -------- |
| React | 섹션별 UI를 컴포넌트로 분리하고 상태 기반 인터랙션을 구현하기 위해 사용했습니다. |
| Vite | 빠른 개발 서버와 간단한 빌드 환경을 구성하기 위해 사용했습니다. |
| JavaScript | 포트폴리오 데이터와 UI 상태를 가볍게 다루기 위해 사용했습니다. |
| CSS3 | 커스텀 레이아웃, 마인드맵 스타일, 반응형 화면을 직접 제어하기 위해 사용했습니다. |
| lucide-react | 버튼과 링크에 일관된 아이콘을 적용하기 위해 사용했습니다. |

## 프로젝트 구조

```text
Web_Resume_Portfolio/
├─ README.md
└─ version3/
   ├─ index.html
   ├─ package.json
   ├─ public/
   │  └─ assets/
   └─ src/
      ├─ App.jsx
      ├─ Version3.jsx
      ├─ components/
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
cd Web_Resume_Portfolio/version3
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 개발 서버 실행

```bash
npm run dev
```

실행 후 브라우저에서 `http://127.0.0.1:5173/` 주소로 접속합니다.

### 4. 프로덕션 빌드

```bash
npm run build
```

빌드 결과물은 `version3/dist/` 폴더에 생성됩니다.

## 구현 과정과 핵심 의사결정

- 포트폴리오의 첫 인상을 강화하기 위해 일반적인 히어로 섹션 대신 마인드맵 진입 화면을 사용했습니다.
- 프로젝트, 기술 스택, 경력 데이터는 `portfolioData.js`에 모아 관리하여 콘텐츠 수정이 쉽도록 구성했습니다.
- 프로젝트 목록은 `personal`, `team`, `work` 카테고리로 분류해 경험의 성격을 빠르게 구분할 수 있게 했습니다.
- React 컴포넌트를 섹션 단위로 분리해 화면 구성과 유지보수를 단순하게 만들었습니다.

## 트러블슈팅과 배운 점

- 이미지 에셋은 Vite의 `public/assets` 경로를 사용해 배포 환경에서도 동일한 URL로 접근할 수 있게 구성했습니다.
- 여러 프로젝트를 한 화면에 담으면서 정보량이 많아지는 문제를 필터와 카드형 요약으로 정리했습니다.
- 포트폴리오 README는 기능 나열보다 문제 정의, 기술 선택 이유, 실행 방법을 함께 보여주는 문서가 더 효과적이라는 점을 반영했습니다.

## 개선 계획

- 실제 배포 URL 추가
- 프로젝트별 상세 페이지 또는 모달 추가
- 접근성 테스트와 키보드 탐색 개선
- Lighthouse 기준 성능, 접근성, SEO 점검
- 모바일 화면에서 마인드맵 인터랙션 세부 조정

## 연락처

- GitHub: [baekks](https://github.com/baekks)
- Email: [baekks93@gmail.com](mailto:baekks93@gmail.com)
