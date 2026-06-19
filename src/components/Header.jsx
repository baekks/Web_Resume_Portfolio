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
        <a href="/" className="v2-current-link">
          Current Version
        </a>
      )}
    </header>
  );
}
