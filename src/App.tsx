import { Fragment, useEffect, useState } from 'react'
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, BriefcaseBusiness, CheckCircle2,
  ChevronLeft, ChevronRight, Code2, Download, GitPullRequest, Heart, Layers3,
  Link2, Mail, Sparkles, Terminal, TestTube2, X,
} from 'lucide-react'
import './App.css'

const resume = '/Enmanuel_De_Los_Santos_Resume.pdf'

type Project = {
  number: string
  name: string
  type: string
  summary: string
  image?: string
  imageAlt?: string
  imageNote: string
  problem: string
  contribution: string
  engineering: string
  quality: string
  status: string
  tech: string[]
  repo: string
  live?: string
  liveLabel?: string
  caseStudy?: string
}

const projects: Project[] = [
  {
    number: '01', name: 'VitalityVista', type: 'Full-stack health application',
    summary: 'A single place to plan workouts, log nutrition and water, and see daily progress.',
    image: '/project-media/vitality-dashboard.png',
    imageAlt: 'VitalityVista demo dashboard with daily calories, hydration, goals, and a planner',
    imageNote: 'Product screenshot with representative demo data',
    problem: 'Health routines span disconnected logs. The app brings a daily check-in, workout planning, food lookup, and progress views together.',
    contribution: 'Built the responsive React interface and connected authenticated application flows to Deno/Oak APIs and PostgreSQL persistence.',
    engineering: 'Added import review for Apple Health and RENPHO data, including duplicate and conflict previews; corrected local-date handling across logs and summaries.',
    quality: 'Vitest files cover barcode camera startup, timeouts, cleanup, and health-import validation.',
    status: 'Public deployment available. Personal-use project; the screenshot uses demo data, not adoption figures.',
    tech: ['React', 'TypeScript', 'Deno/Oak', 'PostgreSQL', 'Vitest'],
    repo: 'https://github.com/EnmaSantos/vitality_vista',
    live: 'https://vitalityvista.enmasantos.dev/', liveLabel: 'Open live app',
  },
  {
    number: '02', name: 'VibeMatch', type: 'Interactive movie discovery',
    summary: 'A movie-picking flow for two people: set preferences, swipe privately, and find a shared yes.',
    imageNote: 'Interface illustration based on the public app source',
    problem: 'Choosing a movie together can turn into endless scrolling. VibeMatch makes preferences and shared choices visible through a short session.',
    contribution: 'Built animated swipe cards with pointer controls, keyboard access to details, preference filters, authentication, saved sessions, and match views.',
    engineering: 'Connected movie details and availability to TMDB and OMDb; used Supabase for session and selection state.',
    quality: 'The public source shows the interaction and server actions. Live multi-user behavior has not been independently verified for this portfolio.',
    status: 'Public landing page. Some session flows require an account.',
    tech: ['Figma', 'Next.js', 'React', 'TypeScript', 'Supabase', 'TMDB'],
    repo: 'https://github.com/EnmaSantos/vibematch',
    live: 'https://vibematch.enmasantos.dev/', liveLabel: 'Open live site',
    caseStudy: '#vibematch-case-study',
  },
  {
    number: '03', name: 'Kairo', type: 'Voice-first journal prototype',
    summary: 'Record a reflection, review its transcript, and retrieve related entries later.',
    image: '/project-media/kairo-recording.png',
    imageAlt: 'Kairo journal entry screen with a live recording button, text field, and journal search',
    imageNote: 'Recording screen from the public repository',
    problem: 'A journal is easier to keep when capture is quick and past thoughts can be found again.',
    contribution: 'Built browser recording and journal views, authenticated entry management, a calendar and timeline, and FastAPI endpoints.',
    engineering: 'Combined Whisper transcription and emotion analysis with embeddings and FAISS retrieval over prior entries.',
    quality: 'The repository documents a local demo; the model and database configuration depend on the local setup.',
    status: 'Local prototype. No public live demo is available.',
    tech: ['React', 'FastAPI', 'Whisper', 'FAISS', 'SQLAlchemy'],
    repo: 'https://github.com/EnmaSantos/kairo',
  },
]

const strengths = [
  { icon: <Layers3 size={22} />, title: 'Interfaces people can use', text: 'Responsive dashboards, forms, movie cards, and browser interactions in VitalityVista and VibeMatch.', href: '#projects' },
  { icon: <Code2 size={22} />, title: 'Connected applications', text: 'Authentication, API routes, persistence, and session state across personal and production tools.', href: '#projects' },
  { icon: <BriefcaseBusiness size={22} />, title: 'Operational systems', text: 'Course provisioning and Canvas-integrated coaching workflows used in academic operations.', href: '#experience' },
  { icon: <TestTube2 size={22} />, title: 'Quality and delivery', text: 'Targeted tests, code review, debugging, and GitHub Actions deployments where the work calls for them.', href: '#approach' },
]

const skills = [
  { title: 'Interfaces', items: 'Figma, React, Next.js, TypeScript, JavaScript, HTML, CSS, Material UI, Tailwind CSS' },
  { title: 'Applications and APIs', items: 'Node.js, Express.js, Deno/Oak, FastAPI, C#, REST APIs' },
  { title: 'Data and persistence', items: 'PostgreSQL, SQLite, SQL, Python, Google Apps Script' },
  { title: 'Testing and delivery', items: 'Vitest, Git, GitHub Actions, Nginx, code review' },
  { title: 'Applied AI', items: 'Whisper, embeddings, FAISS, scikit-learn' },
]

function VibePreview() {
  return (
    <div className="vibe-preview" role="img" aria-label="Illustration of VibeMatch's movie-picking flow">
      <div className="vibe-window">
        <div className="vibe-topline"><span>VibeMatch</span><span>movie night / session</span></div>
        <div className="vibe-content">
          <div className="vibe-intro"><Sparkles size={17} /> FIND YOUR SHARED YES</div>
          <div className="vibe-card">
            <span className="vibe-card-kicker">Tonight's pick</span>
            <strong>Set the vibe.<br />Swipe together.</strong>
            <div className="vibe-poster-decoration" aria-hidden="true" />
          </div>
          <div className="vibe-controls"><span>✕ Skip</span><span><Heart size={14} fill="currentColor" /> Like</span></div>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={project.number === '02' ? 'project-card project-card-reversed' : 'project-card'}>
      <div className="project-visual">
        {project.image ? <a className="project-image-link" href={project.image} target="_blank" rel="noreferrer" aria-label={'View full-size ' + project.name + ' screenshot'}><img src={project.image} alt={project.imageAlt} loading="lazy" /></a> : <VibePreview />}
        <span className="media-note">{project.imageNote}</span>
      </div>
      <div className="project-content">
        <div className="project-index"><span>{project.number} / SELECTED WORK</span><span>{project.type}</span></div>
        <h3>{project.name}</h3>
        <p className="project-summary">{project.summary}</p>
        <dl className="project-facts">
          <div><dt>Problem</dt><dd>{project.problem}</dd></div>
          <div><dt>My work</dt><dd>{project.contribution}</dd></div>
          <div><dt>Engineering</dt><dd>{project.engineering}</dd></div>
          <div><dt>Quality</dt><dd>{project.quality}</dd></div>
        </dl>
        <p className="project-status"><CheckCircle2 size={16} /><span>{project.status}</span></p>
        <ul className="tag-list" aria-label={project.name + ' technologies'}>{project.tech.map((item) => <li key={item}>{item}</li>)}</ul>
        <div className="project-actions">
          {project.caseStudy && <a href={project.caseStudy}>View UX case study<ArrowUpRight size={16} /></a>}
          {project.live && <a href={project.live} target="_blank" rel="noreferrer">{project.liveLabel}<ArrowUpRight size={16} /></a>}
          <a href={project.repo} target="_blank" rel="noreferrer">View source<ArrowUpRight size={16} /></a>
        </div>
      </div>
    </article>
  )
}

const vibeDesignFrames = [
  { image: '/case-studies/vibematch/vibe-check.png', label: '01 / Preference check', alt: 'Early mobile concept with mood choices and a visible filter summary' },
  { image: '/case-studies/vibematch/swipe.png', label: '02 / Swipe decision', alt: 'Early mobile concept with a movie card and explicit Skip and Like buttons' },
  { image: '/case-studies/vibematch/movie-details.png', label: '03 / Movie details', alt: 'Early mobile concept showing more information about a movie' },
  { image: '/case-studies/vibematch/match-results.png', label: '04 / Shared results', alt: 'Early mobile concept separating perfect and almost matches' },
]

function VibeMatchCaseStudy() {
  const [activeFrameIndex, setActiveFrameIndex] = useState<number | null>(null)
  const activeFrame = activeFrameIndex === null ? null : vibeDesignFrames[activeFrameIndex]

  useEffect(() => {
    if (activeFrameIndex === null) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveFrameIndex(null)
      if (event.key === 'ArrowLeft') {
        setActiveFrameIndex((current) => current === null ? null : (current - 1 + vibeDesignFrames.length) % vibeDesignFrames.length)
      }
      if (event.key === 'ArrowRight') {
        setActiveFrameIndex((current) => current === null ? null : (current + 1) % vibeDesignFrames.length)
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeFrameIndex])

  return (
    <>
      <article className="project-case-study" id="vibematch-case-study" aria-labelledby="vibematch-case-title">
        <div className="project-case-heading">
          <div>
            <span className="section-number">02 / VIBEMATCH DESIGN DETAIL</span>
            <h3 id="vibematch-case-title">Designing a clearer movie choice.</h3>
          </div>
          <p>
            I shaped the visual direction through ongoing discussions and a mobile-first Figma pass,
            then built the responsive interaction. These frames show the first design direction;
            the implemented interface evolved during development.
          </p>
        </div>

        <div className="design-frame-rail" aria-label="VibeMatch first Figma design pass">
          {vibeDesignFrames.map((frame, index) => (
            <figure className="design-frame" key={frame.image}>
              <button
                className="design-frame-trigger"
                type="button"
                onClick={() => setActiveFrameIndex(index)}
                aria-label={`Open ${frame.label} concept in image carousel`}
              >
                <img src={frame.image} alt={frame.alt} loading="lazy" />
              </button>
              <figcaption>{frame.label}<span>Early Figma concept</span></figcaption>
            </figure>
          ))}
        </div>

        <div className="design-decisions">
          <div><span>01 / Frame</span><h4>Show the preferences.</h4><p>The first design pass made the vibe check skippable and kept the active filters visible. The app now supports mood, genre, runtime, release-age, and animation preferences.</p></div>
          <div><span>02 / Decide</span><h4>Make each action clear.</h4><p>Poster-first cards pair explicit Like and Skip buttons with movie details. The implemented deck also supports pointer dragging and keyboard access to details.</p></div>
          <div><span>03 / Resolve</span><h4>Surface the shared yes.</h4><p>The result concept places shared likes ahead of near matches, so the pair can compare the strongest options first.</p></div>
        </div>

        <div className="design-case-footer">
          <p><strong>Next step:</strong> Observe people using the flow and revise it from their feedback. Formal user interviews and usability testing have not been conducted yet.</p>
          <div className="design-case-links">
            <a href="https://www.figma.com/design/kJktYujehpxaF0fxFif8ia" target="_blank" rel="noreferrer">Figma design <ArrowUpRight size={16} /></a>
            <a href="https://vibematch.enmasantos.dev/" target="_blank" rel="noreferrer">Live app <ArrowUpRight size={16} /></a>
            <a href="https://github.com/EnmaSantos/vibematch" target="_blank" rel="noreferrer">Source code <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </article>

      {activeFrame && activeFrameIndex !== null && (
        <div
          className="image-lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby="image-lightbox-title"
          onClick={(event) => {
            if (event.target === event.currentTarget) setActiveFrameIndex(null)
          }}
        >
          <div className="image-lightbox-content">
            <button className="image-lightbox-close" type="button" onClick={() => setActiveFrameIndex(null)} aria-label="Close image carousel">
              <X size={20} />
            </button>
            <button
              className="image-lightbox-nav"
              type="button"
              onClick={() => setActiveFrameIndex((activeFrameIndex - 1 + vibeDesignFrames.length) % vibeDesignFrames.length)}
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>
            <figure className="image-lightbox-figure">
              <img src={activeFrame.image} alt={activeFrame.alt} />
              <figcaption id="image-lightbox-title">
                <span>{activeFrame.label}</span>
                <span>{activeFrameIndex + 1} / {vibeDesignFrames.length}</span>
              </figcaption>
            </figure>
            <button
              className="image-lightbox-nav"
              type="button"
              onClick={() => setActiveFrameIndex((activeFrameIndex + 1) % vibeDesignFrames.length)}
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

function App() {
  return (
    <div className="site-shell" id="top">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Enmanuel De Los Santos, back to top"><Terminal size={17} /><span>ENMANUEL.DEV</span></a>
        <nav aria-label="Primary navigation"><a href="#projects">Work</a><a href="#vibematch-case-study">UX case study</a><a href="#experience">Experience</a><a href="#approach">Approach</a><a href="#skills">Skills</a><a href="#contact">Contact</a></nav>
        <a className="resume-link" href={resume} download><Download size={16} /><span>Resume</span></a>
      </header>
      <main id="main">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> SOFTWARE ENGINEERING / WEB APPLICATIONS</p>
            <h1 id="hero-title">I build web apps that make <em>complex work</em> easier.</h1>
            <p className="hero-text">I work across interfaces, application logic, APIs, and databases to turn everyday workflows into useful software. Recent work spans health tracking, collaborative movie discovery, and academic operations.</p>
            <div className="hero-actions"><a className="button-primary" href="#projects">Explore selected work<ArrowDownRight size={18} /></a><a className="button-secondary" href="/contact/">Get in touch<ArrowUpRight size={17} /></a></div>
          </div>
          <aside className="profile-panel" aria-label="About Enmanuel">
            <div className="profile-head"><span>PROFILE / 2026</span><span className="online-indicator"><span /> OPEN TO OPPORTUNITIES</span></div>
            <div className="profile-main"><span className="profile-monogram">ED</span><h2>Enmanuel<br />De Los Santos</h2><p>Software Engineering student and Development Specialist</p></div>
            <dl className="profile-details"><div><dt>Education</dt><dd>B.S. Software Engineering<br />Minor in Data Science</dd></div><div><dt>School</dt><dd>Brigham Young University–Idaho</dd></div><div><dt>Graduation</dt><dd>Expected December 2026</dd></div><div><dt>Location</dt><dd>Rexburg, Idaho</dd></div></dl>
            <div className="profile-foot"><span>BUILD / TEST / DELIVER</span><ArrowUpRight size={16} /></div>
          </aside>
        </section>
        <section className="strengths-section" aria-labelledby="strengths-title"><div className="section-intro"><span className="section-number">01 / CAPABILITIES</span><h2 id="strengths-title">What I bring to a build</h2></div><div className="strength-grid">{strengths.map((item) => <a className="strength" href={item.href} key={item.title}><span className="strength-icon">{item.icon}</span><h3>{item.title}</h3><p>{item.text}</p><ArrowUpRight className="strength-arrow" size={17} /></a>)}</div></section>
        <section className="content-section projects-section" id="projects" aria-labelledby="projects-title"><div className="section-intro section-intro-wide"><div><span className="section-number">02 / SELECTED WORK</span><h2 id="projects-title">Software with a purpose.</h2></div><p>Three projects that show interface design, complete application flows, and technical decisions. Each example separates what is implemented from what is still a prototype or needs further verification.</p></div><div className="projects-list">{projects.map((project) => <Fragment key={project.name}><ProjectCard project={project} />{project.name === 'VibeMatch' && <VibeMatchCaseStudy />}</Fragment>)}</div><div className="more-work"><span>MORE WORK TO EXPLORE</span><a href="https://github.com/EnmaSantos/CoachLens" target="_blank" rel="noreferrer">CoachLens <small>Sanitized coaching platform source</small><ArrowUpRight size={16} /></a><a href="https://github.com/EnmaSantos/data-referee" target="_blank" rel="noreferrer">Data Referee <small>Event data quality pipeline</small><ArrowUpRight size={16} /></a></div></section>
        <section className="content-section experience-section" id="experience" aria-labelledby="experience-title"><div className="section-intro section-intro-wide"><div><span className="section-number">03 / EXPERIENCE</span><h2 id="experience-title">Built for real workflows.</h2></div><p>Work in academic operations and a volunteer team, with scope and ownership stated separately.</p></div><div className="experience-grid"><article className="experience-primary"><div className="role-line"><div><span className="role-type">CURRENT ROLE</span><h3>Development Specialist</h3><p>Brigham Young University–Idaho</p></div><span>JAN 2026 – PRESENT</span></div><div className="work-streams"><div><span>01</span><div><h4>Course provisioning</h4><p>Automated setup and review workflows for approximately 375 online courses per semester, generating Trello work for 25 staff members.</p></div></div><div><span>02</span><div><h4>Academic coaching</h4><p>Designed and deployed Canvas-integrated dashboards and audits. The production Coaching Audits platform supports 70+ coaches and 1,500+ students; its <a href="https://github.com/EnmaSantos/CoachLens" target="_blank" rel="noreferrer">public CoachLens mirror</a> uses sanitized data.</p></div></div><div><span>03</span><div><h4>Application delivery</h4><p>Developed React and C# features for an internal inventory and balance-management app, collaborating with a senior developer on architecture, review, and GitHub Actions/Nginx deployment.</p></div></div></div></article><article className="experience-secondary"><span className="role-type">VOLUNTEER / TEAM PROJECT</span><h3>Volunteer Software Analyst</h3><p className="organization">Madison Fire Department <span>APR – JUL 2024</span></p><p>Contributed to an equipment inventory system for 200+ assets. Helped design SQLite records, status tracking, and replacement alerts for 10+ personnel, and reviewed SQL scripts and pull requests with the team.</p></article></div></section>
        <section className="content-section approach-section" id="approach" aria-labelledby="approach-title"><div className="section-intro"><span className="section-number">04 / ENGINEERING APPROACH</span><h2 id="approach-title">Make it work. Understand why.</h2></div><div className="approach-grid"><div className="approach-lead"><p>My recent work connects user-facing flows to APIs and persistence. I check behavior at the boundaries where dates, imports, and browser devices can fail.</p><a href="https://github.com/EnmaSantos/vitality_vista/commit/cd2d78a8ff43dc2c3d8588f0147269a0a4d6680a" target="_blank" rel="noreferrer">See a date-handling correction <ArrowUpRight size={16} /></a></div><div className="approach-details"><div><span>01 / DEBUG</span><p>A VitalityVista change corrected local-date handling across food logging, daily calorie requests, and SQL date comparisons. The linked commit shows the change across those layers.</p></div><div><span>02 / VERIFY</span><p>Its test files exercise barcode camera startup, timeout and cleanup, plus health-import validation. I also review generated code and collaborate through code review in professional work.</p></div></div></div></section>
        <section className="content-section skills-section" id="skills" aria-labelledby="skills-title"><div className="section-intro section-intro-wide"><div><span className="section-number">05 / SKILLS</span><h2 id="skills-title">Tools I use to build.</h2></div><p>A focused inventory drawn from the projects and work above.</p></div><div className="skills-grid">{skills.map((group) => <div className="skill-group" key={group.title}><h3>{group.title}</h3><p>{group.items}</p></div>)}</div></section>
        <section className="contact-section" id="contact" aria-labelledby="contact-title"><div><span className="section-number">06 / CONTACT</span><h2 id="contact-title">Let’s build something useful.</h2><p>I’m interested in software engineering, full-stack, front-end, and product development internships or junior roles.</p></div><div className="contact-links"><a href="mailto:del20047@byui.edu"><Mail size={18} /> Email me <ArrowUpRight size={17} /></a><a href="https://github.com/EnmaSantos" target="_blank" rel="noreferrer"><GitPullRequest size={18} /> GitHub <ArrowUpRight size={17} /></a><a href="https://www.linkedin.com/in/enmsan/" target="_blank" rel="noreferrer"><Link2 size={18} /> LinkedIn <ArrowUpRight size={17} /></a><a href={resume} download><Download size={18} /> Download resume <ArrowUpRight size={17} /></a></div></section>
      </main>
      <footer><span>© 2026 Enmanuel De Los Santos</span><span>Designed and built with care.</span><a href="#top">Back to top <ArrowRight size={14} /></a></footer>
    </div>
  )
}

export default App
