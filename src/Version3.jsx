import React, { useEffect, useRef, useState } from 'react';
import About from './components/About.jsx';
import Career from './components/Career.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import './version2.css';

export default function Version3() {
  const [entered, setEntered] = useState(false);
  const [launching, setLaunching] = useState(false);
  const wheelLock = useRef(false);

  useEffect(() => {
    if (entered) {
      return undefined;
    }

    const previousBodyOverflow = document.body.style.overflowY;
    const previousHtmlOverflow = document.documentElement.style.overflowY;
    document.body.style.overflowY = 'hidden';
    document.documentElement.style.overflowY = 'hidden';

    return () => {
      document.body.style.overflowY = previousBodyOverflow;
      document.documentElement.style.overflowY = previousHtmlOverflow;
    };
  }, [entered]);

  const enterPortfolio = () => {
    if (launching || wheelLock.current) {
      return;
    }
    wheelLock.current = true;
    setLaunching(true);
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    window.setTimeout(() => {
      setEntered(true);
      setLaunching(false);
      wheelLock.current = false;
      window.setTimeout(() => {
        document.querySelector('#v2-top')?.scrollIntoView({ behavior: 'auto', block: 'start' });
      }, 0);
    }, 860);
  };

  return (
    <main className={`v2-shell v3-shell ${entered ? 'is-rendered' : 'is-gate'} ${launching ? 'is-launching' : ''}`}>
      <Header entered={entered} />

      {!entered ? (
        <Main onEnter={enterPortfolio} />
      ) : (
        <div className="v2-content">
          <About />
          <Skills />
          <Career />
          <Projects />
          <Contact />
        </div>
      )}

      {entered ? <Footer /> : null}
    </main>
  );
}
