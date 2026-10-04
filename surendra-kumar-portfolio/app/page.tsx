"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const skills = [
    "Jenkins",
    "Git",
    "GitHub",
    "Maven",
    "SonarQube",
    "Nexus",
    "Docker",
    "AWS",
    "Linux",
    "Bash",
    "SQL",
    "Networking",
  ];

  const awsServices = [
    "EC2",
    "VPC",
    "S3",
    "EBS",
    "RDS",
    "IAM",
    "Elastic Load Balancing",
    "Auto Scaling",
    "Route 53",
    "CloudFront",
    "Lambda",
    "CloudWatch",
    "SNS",
  ];

  const projects = [
    {
      number: "01",
      title: "S3 Event-Driven Alarm & Notification System",
      description:
        "Replaced manual log monitoring with automated incident detection by configuring CloudWatch alarms across S3 activity and error thresholds. Integrated Amazon SNS to deliver real-time alerts on alarm state changes.",
      technologies: ["Amazon S3", "CloudWatch", "SNS"],
    },
    {
      number: "02",
      title: "CI/CD Deployment Automation for Java Web Application",
      description:
        "Designed an end-to-end Jenkins CI/CD pipeline for a Java web application. Configured GitHub webhooks to trigger builds automatically and integrated Maven for consistent build, test and packaging workflows.",
      technologies: ["Git", "GitHub", "Jenkins", "Maven", "Docker"],
    },
    {
      number: "03",
      title: "Dockerized Web Application Deployment",
      description:
        "Containerized a web application, created and versioned Docker images, published them to Docker Hub, configured container networking and deployed the application on an AWS EC2 instance.",
      technologies: ["Docker", "Docker Hub", "Linux", "AWS EC2"],
    },
  ];

  return (
    <main>
      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div className="nav-container">

          <a href="#home" className="logo">
            S<span>K</span>.
          </a>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <div className={`nav-links ${menuOpen ? "active" : ""}`}>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>

            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>

            <a href="#skills" onClick={() => setMenuOpen(false)}>
              Skills
            </a>

            <a href="#experience" onClick={() => setMenuOpen(false)}>
              Experience
            </a>

            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>

            <a href="#education" onClick={() => setMenuOpen(false)}>
              Education
            </a>

            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}

      <section id="home" className="hero">

        <div className="hero-container">

          <div className="hero-content">

            <div className="hero-label">
              DEVOPS ENGINEER INTERN
            </div>

            <h1>
              Surendra
              <br />
              <span>Somisetty</span>
            </h1>

            <h2>
              CI/CD • AWS • Docker • Jenkins • Linux
            </h2>

            <p className="hero-description">
              Computer Science graduate specializing in Cybersecurity,
              IoT & Blockchain Technology, with hands-on experience
              building CI/CD pipelines, containerizing applications,
              managing AWS infrastructure and implementing monitoring
              and automation workflows.
            </p>

            <div className="hero-buttons">

              <a
                href="/Surendra_Resume_DevOps.pdf"
                download
                className="primary-button"
              >
                Download Resume
              </a>

              <a
                href="https://www.linkedin.com/in/somisetty-venkata-surendra-kumar/"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button"
              >
                LinkedIn ↗
              </a>

            </div>

            <div className="hero-social">

              <a
                href="https://github.com/surendra-kumar-07"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

              <span>/</span>

              <a
                href="https://www.linkedin.com/in/somisetty-venkata-surendra-kumar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>

              <span>/</span>

              <a href="mailto:surendrasomisetty18@gmail.com">
                Email
              </a>

            </div>

          </div>

          {/* TERMINAL */}

          <div className="terminal-wrapper">

            <div className="terminal">

              <div className="terminal-header">

                <div className="terminal-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="terminal-title">
                  surendra@devops:~
                </div>

              </div>

              <div className="terminal-content">

                <div>
                  <span className="prompt">$</span> whoami
                </div>

                <div className="terminal-output">
                  surendra-somisetty
                </div>

                <div>
                  <span className="prompt">$</span> role
                </div>

                <div className="terminal-output">
                  DevOps Engineer Intern
                </div>

                <div>
                  <span className="prompt">$</span> cloud
                </div>

                <div className="terminal-output">
                  AWS
                </div>

                <div>
                  <span className="prompt">$</span> tools
                </div>

                <div className="terminal-output">
                  Jenkins Docker Git Linux
                </div>

                <div>
                  <span className="prompt">$</span> status
                </div>

                <div className="terminal-success">
                  ● Open to DevOps opportunities
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section id="about" className="section">

        <div className="container">

          <div className="section-heading">
            <span>01 — ABOUT</span>
            <h2>Building reliable<br />deployment workflows.</h2>
          </div>

          <div className="about-grid">

            <div className="about-text">

              <p className="about-large">
                I am a Computer Science graduate with hands-on
                DevOps experience focused on CI/CD automation,
                containerization and AWS infrastructure.
              </p>

              <p>
                During my DevOps internship, I worked with Git,
                GitHub, Jenkins, Maven, SonarQube, Nexus, Docker,
                AWS, Linux and Bash scripting to build and support
                automated deployment workflows.
              </p>

              <p>
                I enjoy solving infrastructure problems, automating
                repetitive tasks and improving the reliability of
                application deployment and monitoring.
              </p>

            </div>

            <div className="about-stats">

              <div className="stat">
                <strong>CI/CD</strong>
                <span>Automation</span>
              </div>

              <div className="stat">
                <strong>AWS</strong>
                <span>Cloud Infrastructure</span>
              </div>

              <div className="stat">
                <strong>Docker</strong>
                <span>Containerization</span>
              </div>

              <div className="stat">
                <strong>Linux</strong>
                <span>Administration</span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= SKILLS ================= */}

      <section id="skills" className="section dark-section">

        <div className="container">

          <div className="section-heading">
            <span>02 — SKILLS</span>
            <h2>Tools & technologies.</h2>
          </div>

          <div className="skills-grid">

            {skills.map((skill) => (
              <div className="skill-card" key={skill}>

                <span className="skill-arrow">
                  →
                </span>

                <span>
                  {skill}
                </span>

              </div>
            ))}

          </div>

          <div className="aws-section">

            <h3>AWS SERVICES</h3>

            <div className="aws-list">

              {awsServices.map((service) => (
                <span key={service}>
                  {service}
                </span>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* ================= EXPERIENCE ================= */}

      <section id="experience" className="section">

        <div className="container">

          <div className="section-heading">
            <span>03 — EXPERIENCE</span>
            <h2>Where I've worked.</h2>
          </div>

          <div className="experience-card">

            <div className="experience-left">

              <span className="experience-date">
                FEB 2026 — PRESENT
              </span>

              <h3>
                DevOps Engineer Intern
              </h3>

              <h4>
                Q Spiders
              </h4>

            </div>

            <div className="experience-right">

              <p>
                Engineered end-to-end Jenkins CI/CD pipelines
                covering build, test and deployment stages,
                integrating Maven, SonarQube quality gates and
                Nexus artifact storage.
              </p>

              <p>
                Containerized applications using Docker and
                standardized deployment workflows to reduce
                manual release steps and improve rollout speed.
              </p>

              <p>
                Provisioned and administered AWS services including
                EC2, VPC, IAM, S3 and Lambda for repeatable
                infrastructure deployments.
              </p>

              <p>
                Implemented CloudWatch and SNS monitoring and
                automated operational tasks using Bash/Shell
                scripting.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= PROJECTS ================= */}

      <section id="projects" className="section dark-section">

        <div className="container">

          <div className="section-heading">
            <span>04 — PROJECTS</span>
            <h2>Things I've built.</h2>
          </div>

          <div className="projects">

            {projects.map((project) => (

              <article
                className="project-card"
                key={project.number}
              >

                <div className="project-number">
                  {project.number}
                </div>

                <div className="project-content">

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                  <div className="project-tech">

                    {project.technologies.map(
                      (technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      )
                    )}

                  </div>

                </div>

                <div className="project-arrow">
                  ↗
                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* ================= EDUCATION ================= */}

      <section id="education" className="section">

        <div className="container">

          <div className="section-heading">
            <span>05 — EDUCATION</span>
            <h2>Academic background.</h2>
          </div>

          <div className="education-card">

            <div className="education-year">
              2026
            </div>

            <div>

              <h3>
                Bachelor of Technology
              </h3>

              <h4>
                Computer Science & Engineering
              </h4>

              <p>
                Siddharth Institute of Engineering and Technology
              </p>

              <p>
                Specialization: Cybersecurity, IoT &
                Blockchain Technology
              </p>

              <div className="cgpa">
                CGPA <strong>8.2</strong>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CERTIFICATIONS ================= */}

      <section className="section certification-section">

        <div className="container">

          <div className="section-heading">
            <span>06 — CERTIFICATIONS</span>
            <h2>Continuous learning.</h2>
          </div>

          <div className="certification-grid">

            <div className="cert-card">
              <span>01</span>
              <h3>
                AWS Certified Cloud Practitioner
              </h3>
              <p>
                In progress
              </p>
            </div>

            <div className="cert-card">
              <span>02</span>
              <h3>
                SQL (Basic)
              </h3>
              <p>
                HackerRank
              </p>
            </div>

            <div className="cert-card">
              <span>03</span>
              <h3>
                Operating System Fundamentals
              </h3>
              <p>
                NPTEL
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= ACHIEVEMENT ================= */}

      <section className="section achievement-section">

        <div className="container">

          <div className="achievement">

            <div className="achievement-icon">
              ★
            </div>

            <div>

              <span>
                ACHIEVEMENT
              </span>

              <h2>
                Best Paper Award — ICICC 2026
              </h2>

              <p>
                HealthGuard: A Collaborative Machine Learning
                Approach to Secure Medical Information Across
                IoT-Driven Healthcare Systems.
              </p>

              <a
                href="https://link.springer.com/chapter/10.1007/978-3-032-30008-9_35"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Published Research ↗
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section id="contact" className="contact">

        <div className="container contact-container">

          <span className="contact-label">
            07 — CONTACT
          </span>

          <h2>
            Let's build something
            <span> reliable.</span>
          </h2>

          <p>
            I am looking for opportunities to grow as a
            DevOps / Platform Engineer and contribute to
            real-world cloud and automation projects.
          </p>

          <div className="contact-links">

            <a href="mailto:surendrasomisetty18@gmail.com">
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/somisetty-venkata-surendra-kumar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/surendra-kumar-07"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer>

        <div>
          © 2026 Surendra Somisetty
        </div>

        <div>
          DevOps • AWS • CI/CD
        </div>

      </footer>

    </main>
  );
}
