# Web Resume Portfolio

이력, 기술 스택, 프로젝트, 학습 기록을 한 페이지에서 볼 수 있도록 만든 웹 포트폴리오입니다.

React로 만든 원본 버전을 기준으로 HTML 정적 버전과 Vue 버전도 따로 구성했습니다. 세 버전 모두 같은 내용을 보여주되, 버전별로 구현 방식과 포인트 컬러만 조금 다르게 가져갔습니다.

![Web Resume Portfolio preview](public/assets/web-resume-version3.png)

## Links

- GitHub: [baekks/Web_Resume_Portfolio](https://github.com/baekks/Web_Resume_Portfolio)
- Blog: [velog.io/@siyeoniiii](https://velog.io/@siyeoniiii/posts)
- Learning Docs: [DX Academy Notion](https://app.notion.com/p/DX-Academy-3813bc0ba13280ab87d1fa05c410333b?source=copy_link)
- Resume: [Baek_Kyung_Seo_Resume.docx](public/assets/Baek_Kyung_Seo_Resume.docx)

## Versions

| Version | Path | Stack |
| --- | --- | --- |
| React Original | `/` | React, Vite |
| Version 1 | `/versions/html/index.html` | HTML, CSS, JavaScript |
| Version 2 | `/versions/vue/index.html` | Vue CDN, CSS, JavaScript |

React 버전은 현재 메인 버전입니다. HTML 버전은 프레임워크 없이 정적으로 구성했고, Vue 버전은 React 화면을 Vue 문법으로 옮겨서 만들었습니다.

## What I Built

- 첫 화면에 네트워크 맵 형태의 인터랙션 구성
- 기술 스택, 핵심 강점, 작업 흐름, 경력, 프로젝트, 학습 기록, Contact 섹션 구성
- 경력 섹션을 학력사항 / 교육사항 / 경력사항으로 분리
- 프로젝트를 개인 / 팀 / 실무 기준으로 필터링
- 프로젝트 카드에 작업 기간, 담당 역할, GitHub, Live Demo 링크 표시
- 대표 프로젝트는 상세 모달로 역할, 기능, 기술 스택, 배운 점 정리
- ProjectA는 테스트 계정 정보까지 추가해서 바로 확인 가능하도록 구성
- 반응형에서 헤더, 카드, 모달, 버전 링크가 깨지지 않도록 조정
- React / HTML / Vue 세 버전에 같은 프로젝트 데이터를 반영

## Sections

| Section | Content |
| --- | --- |
| Main | 네트워크 맵 형태의 랜딩 화면 |
| About | 소개 문구와 프로필 이미지 |
| Tech Stack | 언어, 프론트엔드, 백엔드, DB/Infra, 도구 정리 |
| Strengths | 백엔드, 프론트엔드, 운영, 협업 강점 |
| Workflow | 화면, 서버, 데이터, 운영 관점의 작업 흐름 |
| Career | 학력사항, 교육사항, 경력사항 |
| Projects | 프로젝트 카드, 필터, 상세 모달 |
| Learning | Notion 학습 기록 연결 |
| Contact | GitHub, Blog, Email, Resume |

## Projects

| Project | Period | Type | Links |
| --- | --- | --- | --- |
| Web Resume Portfolio | 2026.06.09 - 2026.06.26 · 3주 | Personal | [GitHub](https://github.com/baekks/Web_Resume_Portfolio) |
| LogMile | 2026.04.27 - 2026.06.01 · 5주 | Team | [Live Demo](http://54.180.150.210/) / [GitHub](https://github.com/baekks/logmile) |
| ReadMe | 2026.03.13 - 2026.04.12 · 5주 | Team | [GitHub](https://github.com/baekks/ReadMe) |
| LUXE SHOP | 2026.02.15 - 2026.03.03 · 3주 | Personal | [GitHub](https://github.com/baekks/baekks.github.io) |
| Jeju Culture & Tourism | 2026.02.02 - 2026.02.25 · 4주 | Team | [Live Demo](https://jeju.onrender.com) / [GitHub](https://github.com/baekks/hwandroid921.github.io) |
| Gyeongju Culture Tour | 2026.01.15 - 2026.02.15 · 1개월 | Personal | [GitHub](https://github.com/baekks/baekks.github.io) |
| Assembly Maintenance | 2023.10 - 2024.10 · 1년 | Work | [Company Site](https://www.jeyun.com/) |
| ProjectA (Team) | 2022.11.12 - 2023.03.07 · 약 4개월 | Team | [Live Demo](https://tourgo-yhjs.onrender.com/main_view) / [GitHub](https://github.com/baekks/Team-ProjectA) |
| Messenger Solution | 2022.01 - 2022.04 · 4개월 | Work | [Company Site](https://www.wemeets.co.kr/) |
| Web_Homepage | 2022.03.16 · 1일 | Personal | [GitHub](https://github.com/baekks/Web_Homepage) |
| Shop_Portfolio | 2021.12.01 - 2022.01.07 · 2개월 | Personal | [GitHub](https://github.com/baekks/Shop_Portfolio) |

## Detail Modal

상세 모달을 넣은 프로젝트입니다.

- Web Resume Portfolio
- LogMile
- ReadMe
- Jeju Culture & Tourism
- ProjectA (Team)

ProjectA는 배포된 화면을 바로 확인할 수 있도록 테스트 계정도 같이 넣었습니다.

```text
관리자: demo_admin / Pass1234!
사용자: demo_user01 / Pass1234!
```

## Tech Stack

| Area | Stack |
| --- | --- |
| Frontend | React, Vue, Vite, JavaScript |
| Markup & Style | HTML5, CSS3, Responsive Layout |
| UI | CSS Grid, Flexbox, Modal, Hover Interaction |
| Data | JavaScript object data, project filtering |
| Icons | lucide-react |
| Version Control | Git, GitHub |

## Folder Structure

```text
Web_Resume_Portfolio/
├─ public/
│  ├─ assets/
│  │  ├─ Baek_Kyung_Seo_Resume.docx
│  │  ├─ profile-photo.jpeg
│  │  └─ project images
│  └─ versions/
│     ├─ html/
│     │  └─ index.html
│     └─ vue/
│        ├─ index.html
│        └─ version2.css
└─ src/
   ├─ components/
   ├─ data/
   │  └─ portfolioData.js
   ├─ Version3.jsx
   ├─ main.jsx
   ├─ styles.css
   └─ version2.css
```

## Run

```bash
npm install
npm run dev
```

```text
React Original: http://127.0.0.1:5173/
HTML Version:   http://127.0.0.1:5173/versions/html/index.html
Vue Version:    http://127.0.0.1:5173/versions/vue/index.html
```

## Build

```bash
npm run build
```

빌드 결과물은 `dist/` 폴더에 생성됩니다.

## Checked

- React / HTML / Vue 버전 화면 구성 확인
- 프로젝트 기간, GitHub 링크, Live Demo 링크 반영
- ProjectA 테스트 계정 표시
- 모바일에서 버전 버튼, 프로젝트 카드, 상세 모달 확인
- `npm run build` 통과

## Contact

- GitHub: [baekks](https://github.com/baekks)
- Blog: [velog.io/@siyeoniiii](https://velog.io/@siyeoniiii/posts)
- Email: [baekks93@gmail.com](mailto:baekks93@gmail.com)
