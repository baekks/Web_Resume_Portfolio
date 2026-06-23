import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#v2-top' },
  { label: 'Tech Stack', href: '#v2-skills' },
  { label: 'Strengths', href: '#v2-strengths' },
  { label: 'Workflow', href: '#v2-architecture' },
  { label: 'Career', href: '#v2-career' },
  { label: 'Projects', href: '#v2-projects' },
  { label: 'Learning', href: '#v2-docs' },
  { label: 'Contact', href: '#v2-contact' },
];

const versionItems = [
  {
    label: 'Current Version 1',
    meta: 'HTML',
    href: '/versions/html/index.html',
  },
  {
    label: 'Current Version 2',
    meta: 'Vue.js',
    href: '/versions/vue/index.html',
  },
];

export default function Header({ entered }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`v2-header ${isMenuOpen ? 'is-menu-open' : ''}`}>
      <a href="/" className="v2-brand" onClick={handleNavClick}>
        <span className="v2-brand-desktop">Beak's Dev</span>
        <span className="v2-brand-mobile">Main</span>
      </a>
      {entered ? (
        <>
          <button
            className="v2-menu-toggle"
            type="button"
            aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={isMenuOpen}
            aria-controls="v2-section-nav"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <nav id="v2-section-nav" aria-label="Version3 sections">
            {navItems.map((item) => (
              <a href={item.href} key={item.href} onClick={handleNavClick}>
                {item.label}
              </a>
            ))}
          </nav>
        </>
      ) : (
        <div className="v2-version-links" aria-label="포트폴리오 버전 링크">
          {versionItems.map((item) =>
            item.href ? (
              <a className="v2-version-link" href={item.href} key={item.label}>
                <span>{item.label}</span>
                <em>{item.meta}</em>
              </a>
            ) : (
              <span className="v2-version-link is-disabled" key={item.label} aria-disabled="true">
                <span>{item.label}</span>
                <em>{item.meta}</em>
              </span>
            ),
          )}
        </div>
      )}
    </header>
  );
}
