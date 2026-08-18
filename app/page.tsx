'use client';

import React, { useState, useEffect } from 'react';
import SideRays from '@/components/SideRays';
import PillNav from '@/components/PillNav';
import CardSwap, { Card } from '@/components/CardSwap';
import WarpText from '@/components/WarpText';
import projectsData from '@/data/projects.json';
import experiencesData from '@/data/experiences.json';

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image?: string;
  imagePreviewLabel: string;
  imagePreviewIcon?: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  isOngoing?: boolean;
}

interface ExperienceItem {
  id: string;
  role: string;
  period: string;
  company: string;
  description: string;
  isCurrent?: boolean;
}

export default function Home() {
  const [activeSection, setActiveSection] = useState('#about');

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['about', 'projects', 'contact'];
      let currentActive = '#about';

      for (let i = 0; i < sectionIds.length; i++) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.5) {
            currentActive = `#${sectionIds[i]}`;
          }
        }
      }

      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderIcon = (type?: string) => {
    switch (type) {
      case 'ecommerce':
        return (
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
        );
      case 'ai':
        return (
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        );
      default:
        return (
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
        );
    }
  };

  return (
    <main style={{ position: 'relative', width: '100%', minHeight: '100vh', overflowX: 'hidden', backgroundColor: '#07080c' }}>
      {/* SideRays Fixed Ambient Light Layer (Covers Entire Viewport Seamlessly Without Seams or Lines) */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 1, pointerEvents: 'none' }}>
        <SideRays
          speed={2.5}
          rayColor1="#EAB308"
          rayColor2="#96c8ff"
          intensity={2}
          spread={2}
          origin="top-right"
          tilt={0}
          saturation={1.5}
          blend={0.75}
          falloff={1.6}
          opacity={1}
        />
      </div>

      {/* Navigation Layer */}
      <PillNav
        logo="/pas_foto.png"
        logoAlt="Fauzil Azhim Profile"
        items={navItems}
        activeHref={activeSection}
        ease="power2.easeOut"
        baseColor="#ffffff"
        pillColor="#07080c"
        hoveredPillTextColor="#000000"
        pillTextColor="#ffffff"
        initialLoadAnimation={true}
      />

      {/* ======================= FOLD 1: HERO / ABOUT VIEW ======================= */}
      <section
        id="about"
        className="section-hero"
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: '85px 5vw 30px 5vw'
        }}
      >
        {/* Left Side: WarpText + Bio Terminal Frame (Single Line Equal Width Box Alignment) */}
        <div className="hero-left" style={{ width: '56%', maxWidth: '880px', display: 'flex', flexDirection: 'column', alignItems: 'stretch', marginTop: '0px' }}>
          {/* Interactive WebGL WarpText (Single Line Large Header) */}
          <div style={{ width: '100%', marginTop: '0rem' }}>
            <WarpText
              text="WELCOME TO MY GALLERY"
              color="#f8f5ff"
              warpStrength={0.11}
              warpScale={1.7}
              speed={0.8}
              pointerInfluence={0.42}
              pointerStrength={0.38}
              refraction={0.018}
              ripple={true}
              fontSize={180}
              fontWeight={800}
              textAlign="left"
              style={{ width: '100%', height: '145px' }}
              fontFamily="inherit"
              letterSpacing={-0.07}
              lineHeight={0.9}
            />
          </div>

          {/* Linux Terminal Command Window Description Frame (Matches Exact 880px Width of Header) */}
          <div
            style={{
              width: '100%',
              marginTop: '0.5rem',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              background: 'rgba(12, 13, 20, 0.94)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.7), 0 0 2px rgba(255, 255, 255, 0.25)',
              overflow: 'hidden'
            }}
          >
            {/* Terminal Header Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 20px',
                background: 'rgba(255, 255, 255, 0.05)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              {/* Traffic Light Dots */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                <span style={{ width: '13px', height: '13px', borderRadius: '50%', background: '#FF5F56', display: 'inline-block' }} />
                <span style={{ width: '13px', height: '13px', borderRadius: '50%', background: '#FFBD2E', display: 'inline-block' }} />
                <span style={{ width: '13px', height: '13px', borderRadius: '50%', background: '#27C93F', display: 'inline-block' }} />
              </div>

              {/* Terminal Window Title */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '0.86rem', color: 'rgba(255, 255, 255, 0.65)', fontFamily: 'monospace' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.75 }}>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                </svg>
                <span>fauzil — -zsh — 80x24</span>
              </div>

              <div style={{ width: '45px' }} />
            </div>

            {/* Terminal Content */}
            <div
              style={{
                padding: '24px 28px',
                fontFamily: "'Fira Code', Consolas, Monaco, monospace",
                fontSize: '1.08rem',
                lineHeight: 1.75,
                color: 'rgba(255, 255, 255, 0.9)'
              }}
            >
              {/* Command Prompt Line */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px', flexWrap: 'wrap', fontSize: '1.05rem' }}>
                <span style={{ color: '#EAB308', fontWeight: 600 }}>fauzil@dev-machine</span>
                <span style={{ color: 'rgba(255, 255, 255, 0.45)' }}>~ %</span>
                <span style={{ color: '#ffffff', fontWeight: 600 }}>cat porto.txt</span>
              </div>

              {/* Bio Output Text */}
              <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.08rem', lineHeight: 1.72, textAlign: 'justify' }}>
                Hi, I&apos;m Fauzil Azhim — a full-stack web developer who focuses on building fast, efficient digital applications, engaging WebGL experiences, and scalable design systems.
                I combine strong engineering with easy-to-use design to create complete solutions that are fast, dependable, and help users stay involved.
                Besides building websites, I also explore AI and Blockchain technologies. I like to learn a lot about how smart automation and decentralized systems can improve web apps.
                I am always eager to learn more, so I keep exploring new ideas in technology to turn tough technical problems into simple, modern digital solutions that work well for the future.
                <span
                  className="terminal-cursor"
                  style={{
                    display: 'inline-block',
                    width: '10px',
                    height: '18px',
                    background: '#EAB308',
                    marginLeft: '8px',
                    verticalAlign: 'middle'
                  }}
                />
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Glassmorphic Portrait Photo Frame */}
        <div className="hero-right" style={{ width: '41%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', paddingTop: '20px' }}>
          <div
            style={{
              position: 'relative',
              width: '480px',
              height: '600px',
              borderRadius: '30px',
              border: '1px solid rgba(255, 255, 255, 0.22)',
              background: 'rgba(13, 14, 22, 0.88)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.8), 0 0 2px rgba(255, 255, 255, 0.3)',
              overflow: 'hidden',
              padding: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '20px',
                overflow: 'hidden',
                position: 'relative',
                backgroundColor: '#07080c',
                boxShadow: 'inset 0 0 30px rgba(0, 0, 0, 0.5)'
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/pas_foto.png"
                alt="Fauzil Azhim Profile"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ======================= FOLD 2: PROJECTS SECTION (CARD SWAP) ======================= */}
      <section
        id="projects"
        className="section-projects"
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: '50px 6vw 80px 6vw'
        }}
      >
        {/* Left Side: Work Experience Title + Linux Command Terminal Frame */}
        <div className="projects-left" style={{ width: '48%', maxWidth: '580px', display: 'flex', flexDirection: 'column', alignItems: 'stretch', marginTop: '15px' }}>
          {/* Section Title with WarpText */}
          <div style={{ width: '100%', marginBottom: '0.8rem' }}>
            <WarpText
              text="WORK EXPERIENCE"
              color="#ffffff"
              warpStrength={0.11}
              warpScale={1.7}
              speed={0.8}
              pointerInfluence={0.42}
              pointerStrength={0.38}
              refraction={0.018}
              ripple={true}
              fontSize={60}
              fontWeight={800}
              textAlign="left"
              style={{ width: '100%', height: '65px' }}
              fontFamily="inherit"
              letterSpacing={-0.03}
              lineHeight={0.9}
            />
          </div>

          {/* Linux Terminal Command Window Frame */}
          <div
            style={{
              width: '100%',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              background: 'rgba(12, 13, 20, 0.94)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.7), 0 0 2px rgba(255, 255, 255, 0.25)',
              overflow: 'hidden'
            }}
          >
            {/* Terminal Header Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 20px',
                background: 'rgba(255, 255, 255, 0.05)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              {/* Traffic Light Dots */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                <span style={{ width: '13px', height: '13px', borderRadius: '50%', background: '#FF5F56', display: 'inline-block' }} />
                <span style={{ width: '13px', height: '13px', borderRadius: '50%', background: '#FFBD2E', display: 'inline-block' }} />
                <span style={{ width: '13px', height: '13px', borderRadius: '50%', background: '#27C93F', display: 'inline-block' }} />
              </div>

              {/* Terminal Window Title */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '0.86rem', color: 'rgba(255, 255, 255, 0.65)', fontFamily: 'monospace' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.75 }}>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                </svg>
                <span>fauzil — experience.sh — 80x24</span>
              </div>

              <div style={{ width: '45px' }} />
            </div>

            {/* Terminal Content with Internal Scroll */}
            <div
              className="custom-terminal-scroll"
              style={{
                maxHeight: '430px',
                overflowY: 'auto',
                padding: '22px 26px',
                fontFamily: "'Fira Code', Consolas, Monaco, monospace",
                fontSize: '0.96rem',
                lineHeight: 1.65,
                color: 'rgba(255, 255, 255, 0.9)'
              }}
            >
              {/* Command Prompt Line */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', flexWrap: 'wrap', fontSize: '1rem' }}>
                <span style={{ color: '#EAB308', fontWeight: 600 }}>fauzil@dev-machine</span>
                <span style={{ color: 'rgba(255, 255, 255, 0.45)' }}>~ %</span>
                <span style={{ color: '#ffffff', fontWeight: 600 }}>./get_experience.sh</span>
              </div>

              {/* Dynamic Experience Entries Mapped from JSON */}
              {(experiencesData as ExperienceItem[]).map((exp, index) => (
                <div
                  key={exp.id}
                  style={{
                    marginBottom: index === experiencesData.length - 1 ? '14px' : '18px',
                    borderLeft: `3px solid ${exp.isCurrent ? '#EAB308' : 'rgba(255, 255, 255, 0.25)'}`,
                    paddingLeft: '14px'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '6px' }}>
                    <span style={{ color: '#67e8f9', fontWeight: 700, fontSize: '1.02rem' }}>{exp.role}</span>
                    <span style={{ color: exp.isCurrent ? '#EAB308' : 'rgba(255, 255, 255, 0.5)', fontSize: '0.82rem', fontWeight: 600 }}>
                      {exp.period}
                    </span>
                  </div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '0.86rem', margin: '3px 0 6px 0' }}>{exp.company}</div>
                  <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.9rem', lineHeight: 1.6, textAlign: 'justify' }}>
                    {exp.description}
                    {index === experiencesData.length - 1 && (
                      <span
                        className="terminal-cursor"
                        style={{
                          display: 'inline-block',
                          width: '9px',
                          height: '17px',
                          background: '#EAB308',
                          marginLeft: '6px',
                          verticalAlign: 'middle'
                        }}
                      />
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: CardSwap 3D Stack */}
        <div className="projects-right" style={{ position: 'relative', width: '710px', height: '610px' }}>
          <CardSwap
            width={660}
            height={550}
            cardDistance={75}
            verticalDistance={75}
            delay={4500}
            pauseOnHover={false}
            skewAmount={4}
            easing="elastic"
          >
            {(projectsData as ProjectItem[]).map(project => (
              <Card key={project.id}>
                <div className="card-header">
                  <div className="card-window-dots">
                    <span className="dot red" />
                    <span className="dot yellow" />
                    <span className="dot green" />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {project.isOngoing && (
                      <span className="card-ongoing-badge">
                        <span className="ongoing-pulse-dot" />
                        ONGOING
                      </span>
                    )}
                    <span className="card-category-badge">{project.category}</span>
                  </div>
                </div>
                <div className="card-body">
                  <div>
                    <h3 className="card-title">{project.title}</h3>
                    <p className="card-description">{project.description}</p>
                  </div>

                  {/* Project Image Frame */}
                  <div className="card-image-frame">
                    {project.image ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img src={project.image} alt={project.title} />
                    ) : (
                      <div className="card-image-preview">
                        {renderIcon(project.imagePreviewIcon)}
                        <span>{project.imagePreviewLabel}</span>
                      </div>
                    )}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="card-tech-stack">
                    {project.techStack.map(tech => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>

                  {/* Action Links & GitHub */}
                  <div className="card-actions">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="card-link btn-github">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        <span>Repository</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="card-link btn-live">
                        <span>Live Demo</span>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
      </section>

      {/* ======================= FOLD 3: CONTACT SECTION WITH SCROLL REVEAL ======================= */}
      <section
        id="contact"
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          minHeight: '70vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '90px 6vw 60px 6vw',
          textAlign: 'center'
        }}
      >
        {/* Contact Headline Line 1 */}
        <h2 className="contact-headline-serif" style={{ marginBottom: '10px' }}>
          Let&apos;s build something
        </h2>

        {/* Contact Headline Line 2 (Italic Cyan) */}
        <h2 className="contact-headline-remarkable" style={{ marginBottom: '45px' }}>
          remarkable.
        </h2>

        {/* Start a Conversation CTA Button */}
        <a
          href="mailto:fauzilazhim85@gmail.com"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '14px 32px',
            borderRadius: '9999px',
            backgroundColor: '#ffffff',
            color: '#07080c',
            fontSize: '0.92rem',
            fontWeight: 700,
            textDecoration: 'none',
            boxShadow: '0 8px 30px rgba(255, 255, 255, 0.15)',
            transition: 'all 0.3s ease',
            marginBottom: '50px'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)';
            e.currentTarget.style.boxShadow = '0 12px 35px rgba(255, 255, 255, 0.25)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 30px rgba(255, 255, 255, 0.15)';
          }}
        >
          Start a Conversation
        </a>

        {/* Social Media Circular Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '60px' }}>
          {/* LinkedIn Icon Button */}
          <a
            href="https://www.linkedin.com/in/fauzil-azhim/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'rgba(255, 255, 255, 0.75)',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.49 1.49 0 1 0 0 2.98 1.49 1.49 0 0 0 0-2.98z" />
            </svg>
          </a>

          {/* Instagram Icon Button */}
          <a
            href="https://instagram.com/fauzil.azhimm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'rgba(255, 255, 255, 0.75)',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>

          {/* GitHub Icon Button */}
          <a
            href="https://github.com/fauzilxx"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'rgba(255, 255, 255, 0.75)',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        </div>

        {/* Footer Copyright Text */}
        <p style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.4)', margin: 0, fontFamily: 'monospace' }}>
          &copy; {new Date().getFullYear()} Fauzil Azhim. All rights reserved.
        </p>
      </section>
    </main>
  );
}
