import React from 'react';
import { CircuitBoard, Github, Mail } from 'lucide-react';

export default function Contact() {
  return (
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
  );
}
