import React from 'react';
import { Sparkles } from 'lucide-react';

export default function About() {
  return (
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
  );
}
