import React from 'react';

export default function Header({ entered }) {
  return (
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
  );
}
