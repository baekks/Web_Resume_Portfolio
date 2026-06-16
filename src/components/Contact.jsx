import React from 'react';
import { CircuitBoard, Download, Github, Mail, NotebookPen } from 'lucide-react';

const blogUrl = 'https://velog.io/@siyeoniiii/posts';
const resumeUrl = '/assets/baek-kyung-seo-resume.hwp';

export default function Contact() {
  const hasBlogUrl = Boolean(blogUrl);
  const hasResumeUrl = Boolean(resumeUrl);

  return (
    <section className="v2-contact" id="v2-contact">
      <CircuitBoard size={42} />
      <div className="v2-contact-copy">
        <p className="v2-label">Contact</p>
        <h2>함께 일할 기회를 기다립니다.</h2>
        <p>프로젝트와 협업 제안, 학습 기록과 이력서는 아래 링크에서 확인할 수 있습니다.</p>
      </div>
      <div className="v2-contact-links">
        <a href="https://github.com/baekks" target="_blank" rel="noreferrer">
          <Github size={18} />
          GitHub
        </a>
        <a
          className={!hasBlogUrl ? 'is-disabled' : undefined}
          href={hasBlogUrl ? blogUrl : '#v2-contact'}
          target={hasBlogUrl ? '_blank' : undefined}
          rel={hasBlogUrl ? 'noreferrer' : undefined}
          aria-disabled={!hasBlogUrl ? true : undefined}
          onClick={!hasBlogUrl ? (event) => event.preventDefault() : undefined}
        >
          <NotebookPen size={18} />
          Blog
        </a>
        <a href="mailto:baekks93@gmail.com">
          <Mail size={18} />
          Email
        </a>
        <a
          className={!hasResumeUrl ? 'is-disabled' : undefined}
          href={hasResumeUrl ? resumeUrl : '#v2-contact'}
          download={hasResumeUrl ? true : undefined}
          aria-disabled={!hasResumeUrl ? true : undefined}
          onClick={!hasResumeUrl ? (event) => event.preventDefault() : undefined}
        >
          <Download size={18} />
          Resume
        </a>
      </div>
    </section>
  );
}
