import { ArrowLeft, ArrowRight, ArrowUpRight, Download, GitPullRequest, Link2, Mail, Terminal } from 'lucide-react'
import './App.css'
import './ContactPage.css'

const resume = '/Enmanuel_De_Los_Santos_Resume.pdf'

const contactOptions = [
  {
    number: '01',
    label: 'EMAIL',
    title: 'Send me an email',
    detail: 'del20047@byui.edu',
    href: 'mailto:del20047@byui.edu',
    icon: <Mail size={24} aria-hidden="true" />,
  },
  {
    number: '02',
    label: 'LINKEDIN',
    title: 'Message me on LinkedIn',
    detail: 'Connect and start a conversation',
    href: 'https://www.linkedin.com/in/enmsan/',
    icon: <Link2 size={24} aria-hidden="true" />,
    external: true,
  },
  {
    number: '03',
    label: 'GITHUB',
    title: 'Explore my GitHub',
    detail: 'See my projects and code',
    href: 'https://github.com/EnmaSantos',
    icon: <GitPullRequest size={24} aria-hidden="true" />,
    external: true,
  },
]

function ContactPage() {
  return (
    <div className="site-shell contact-page" id="top">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="topbar">
        <a className="brand" href="/" aria-label="Enmanuel De Los Santos, home"><Terminal size={17} /><span>ENMANUEL.DEV</span></a>
        <nav aria-label="Primary navigation"><a href="/">Home</a><a href="/#projects">Work</a><a href="/#experience">Experience</a></nav>
        <a className="resume-link" href={resume} download><Download size={16} /><span>Resume</span></a>
      </header>
      <main id="main" className="contact-main">
        <section className="contact-intro" aria-labelledby="contact-title">
          <span className="section-number">CONTACT / LET'S CONNECT</span>
          <h1 id="contact-title">Let’s build something <em>useful.</em></h1>
          <p>Have a project, opportunity, or question in mind? Choose the way you’d like to reach me.</p>
          <a className="contact-back" href="/"><ArrowLeft size={18} /> Back to portfolio</a>
        </section>
        <section className="contact-options" aria-label="Ways to connect">
          {contactOptions.map((option) => (
            <a
              className="contact-option"
              href={option.href}
              key={option.number}
              {...(option.external ? { target: '_blank', rel: 'noreferrer' } : {})}
            >
              <span className="contact-option-icon">{option.icon}</span>
              <span className="contact-option-copy">
                <span className="contact-option-label">{option.number} / {option.label}</span>
                <strong>{option.title}</strong>
                <span className="contact-option-detail">{option.detail}</span>
              </span>
              <ArrowUpRight className="contact-option-arrow" size={20} aria-hidden="true" />
            </a>
          ))}
        </section>
      </main>
      <footer><span>© 2026 Enmanuel De Los Santos</span><span>Designed and built with care.</span><a href="/">Portfolio <ArrowRight size={14} /></a></footer>
    </div>
  )
}

export default ContactPage
