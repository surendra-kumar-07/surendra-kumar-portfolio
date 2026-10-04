
const skills = {
  "CI/CD & Source Control": [
    "Jenkins",
    "Git",
    "GitHub",
    "Maven",
    "SonarQube",
    "Nexus",
  ],
  Containers: [
    "Docker",
    "Docker Hub",
    "Container Networking",
  ],
  "AWS Cloud": [
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
  ],
  "Monitoring & Alerting": [
    "Amazon CloudWatch",
    "Amazon SNS",
  ],
  "Linux & Networking": [
    "Linux Administration",
    "TCP/IP",
    "DNS",
    "HTTP/HTTPS",
    "Load Balancing",
    "Subnetting",
    "CIDR",
    "NAT",
  ],
  "Scripting & Databases": [
    "Bash",
    "Shell Scripting",
    "SQL",
    "Amazon RDS",
    "Apache Tomcat",
  ],
};

const projects = [
  {
    title: "S3 Event-Driven Alarm & Notification System",
    technologies: ["Amazon S3", "CloudWatch", "SNS"],
    description:
      "Built an automated monitoring and notification solution using Amazon S3, CloudWatch and SNS to detect issues and deliver real-time alerts.",
    points: [
      "Configured CloudWatch alarms across S3 activity and error thresholds.",
      "Integrated Amazon SNS for real-time alarm notifications.",
      "Replaced manual monitoring with automated incident detection.",
    ],
  },
  {
    title: "CI/CD Deployment Automation for Java Web Application",
    technologies: ["Git", "GitHub", "Jenkins", "Maven", "Docker"],
    description:
      "Designed an end-to-end Jenkins CI/CD pipeline to automate the journey from source-code commit to application deployment.",
    points: [
      "Configured GitHub webhooks to automatically trigger Jenkins builds.",
      "Automated Maven build, test and packaging stages.",
      "Integrated Docker into the deployment workflow.",
      "Reduced manual intervention during application releases.",
    ],
  },
  {
    title: "Dockerized Web Application Deployment",
    technologies: ["Docker", "Docker Hub", "Linux", "AWS EC2"],
    description:
      "Containerized a web application, published versioned Docker images and deployed the application on AWS EC2.",
    points: [
      "Built and versioned custom Docker images.",
      "Published Docker images to Docker Hub.",
      "Configured Docker container networking.",
      "Deployed and operated the application on AWS EC2.",
      "Used Linux commands for configuration and troubleshooting.",
    ],
  },
];

const experience = [
  "Engineered Jenkins CI/CD pipelines covering build, test and deployment stages using Maven, SonarQube and Nexus.",
  "Containerized applications with Docker and standardized deployment workflows.",
  "Provisioned and administered AWS services including EC2, VPC, IAM, S3 and Lambda.",
  "Implemented CloudWatch and SNS monitoring and alerting for infrastructure and application issues.",
  "Automated recurring operational and deployment tasks using Bash/Shell scripting.",
  "Applied Linux administration and networking fundamentals including DNS, HTTP/HTTPS and load balancing.",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <a
            href="#"
            className="text-xl font-bold tracking-wide"
          >
            SURENDRA<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="hover:text-cyan-400">
              About
            </a>

            <a href="#skills" className="hover:text-cyan-400">
              Skills
            </a>

            <a href="#experience" className="hover:text-cyan-400">
              Experience
            </a>

            <a href="#projects" className="hover:text-cyan-400">
              Projects
            </a>

            <a href="#education" className="hover:text-cyan-400">
              Education
            </a>

            <a href="#contact" className="hover:text-cyan-400">
              Contact
            </a>
          </div>

        </div>
      </nav>

      {/* HERO */}
      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">

          <div className="max-w-4xl">

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              DevOps Engineer Intern
            </p>

            <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">
              Somisetty
              <br />
              <span className="text-cyan-400">
                Venkata Surendra Kumar
              </span>
            </h1>

            <p className="mt-6 text-xl font-medium text-slate-300">
              CI/CD • Jenkins • Docker • AWS • Linux
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Computer Science graduate specializing in Cybersecurity,
              IoT & Blockchain Technology, with hands-on DevOps experience
              in CI/CD automation, Docker containerization, AWS infrastructure,
              monitoring and Linux administration.
            </p>

            {/* BUTTONS */}

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="rounded-lg bg-cyan-400 px-6 py-3 font-bold text-slate-950 hover:bg-cyan-300"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                download="Somisetty-Venkata-Surendra-Kumar-Resume.pdf"
                className="rounded-lg border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 hover:text-cyan-400"
              >
                Download Resume
              </a>

              <a
                href="https://github.com/surendra-kumar-07"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 hover:text-cyan-400"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/somisetty-venkata-surendra-kumar-48b086320/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 hover:text-cyan-400"
              >
                LinkedIn
              </a>

            </div>

          </div>
        </div>
      </section>

      {/* QUICK STATS */}

      <section className="border-b border-slate-800 bg-slate-900/40">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 sm:grid-cols-2 md:grid-cols-4">

          <div>
            <p className="text-3xl font-bold text-cyan-400">
              AWS
            </p>
            <p className="mt-1 text-sm text-slate-400">
              Cloud Infrastructure
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold text-cyan-400">
              CI/CD
            </p>
            <p className="mt-1 text-sm text-slate-400">
              Jenkins Automation
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold text-cyan-400">
              Docker
            </p>
            <p className="mt-1 text-sm text-slate-400">
              Containerization
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold text-cyan-400">
              8.2
            </p>
            <p className="mt-1 text-sm text-slate-400">
              CGPA
            </p>
          </div>

        </div>
      </section>

      {/* ABOUT */}

      <section id="about">
        <div className="mx-auto max-w-7xl px-6 py-20">

          <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
            About Me
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Cloud & DevOps focused engineer
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-400">
            Computer Science graduate with hands-on DevOps internship
            experience building and supporting CI/CD pipelines using Git,
            GitHub, Jenkins, Maven, SonarQube and Nexus.
          </p>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-400">
            Experienced in containerizing applications with Docker and
            managing AWS infrastructure including EC2, VPC, IAM, S3 and
            Lambda. I also work with CloudWatch and SNS for monitoring,
            Bash/Shell scripting for automation, and Linux administration.
          </p>

        </div>
      </section>

      {/* SKILLS */}

      <section
        id="skills"
        className="border-y border-slate-800 bg-slate-900/40"
      >
        <div className="mx-auto max-w-7xl px-6 py-20">

          <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
            Technical Skills
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Technologies I Work With
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {Object.entries(skills).map(([category, items]) => (

              <div
                key={category}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-6"
              >

                <h3 className="text-lg font-bold">
                  {category}
                </h3>

                <div className="mt-5 flex flex-wrap gap-2">

                  {items.map((item) => (

                    <span
                      key={item}
                      className="rounded-md bg-slate-800 px-3 py-2 text-sm text-slate-300"
                    >
                      {item}
                    </span>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* EXPERIENCE */}

      <section id="experience">

        <div className="mx-auto max-w-7xl px-6 py-20">

          <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
            Experience
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            DevOps Engineer Intern
          </h2>

          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/50 p-7">

            <div className="flex flex-col justify-between gap-2 md:flex-row">

              <h3 className="text-xl font-bold">
                Q Spiders
              </h3>

              <span className="text-slate-400">
                Feb 2026 – Present
              </span>

            </div>

            <p className="mt-4 text-slate-400">
              Git • GitHub • Jenkins • Maven • SonarQube • Nexus • Docker •
              AWS • CloudWatch • SNS • Linux • Bash
            </p>

            <ul className="mt-6 space-y-4 text-slate-300">

              {experience.map((item) => (
                <li key={item}>
                  <span className="text-cyan-400">•</span>{" "}
                  {item}
                </li>
              ))}

            </ul>

          </div>

        </div>

      </section>

      {/* PROJECTS */}

      <section
        id="projects"
        className="border-y border-slate-800 bg-slate-900/40"
      >

        <div className="mx-auto max-w-7xl px-6 py-20">

          <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
            Projects
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Featured DevOps Projects
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">

            {projects.map((project) => (

              <article
                key={project.title}
                className="flex flex-col rounded-2xl border border-slate-800 bg-slate-950 p-7 transition hover:-translate-y-1 hover:border-cyan-400"
              >

                <h3 className="text-xl font-bold">
                  {project.title}
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">

                  {project.technologies.map((technology) => (

                    <span
                      key={technology}
                      className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300"
                    >
                      {technology}
                    </span>

                  ))}

                </div>

                <p className="mt-5 leading-7 text-slate-400">
                  {project.description}
                </p>

                <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">

                  {project.points.map((point) => (

                    <li key={point}>
                      ✓ {point}
                    </li>

                  ))}

                </ul>

                <div className="mt-auto pt-7">

                  <a
                    href="https://github.com/surendra-kumar-07"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-cyan-400 hover:text-cyan-300"
                  >
                    View GitHub →
                  </a>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* EDUCATION */}

      <section id="education">

        <div className="mx-auto max-w-7xl px-6 py-20">

          <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
            Education
          </p>

          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/50 p-7">

            <div className="flex flex-col justify-between gap-2 md:flex-row">

              <h3 className="text-xl font-bold">
                Bachelor of Technology in Computer Science and Engineering
              </h3>

              <span className="text-slate-400">
                2026
              </span>

            </div>

            <p className="mt-3 text-slate-300">
              Siddharth Institute of Engineering and Technology
            </p>

            <p className="mt-2 text-slate-400">
              Specialization: Cybersecurity, IoT & Blockchain Technology
            </p>

            <p className="mt-2 font-semibold text-cyan-400">
              CGPA: 8.2
            </p>

          </div>

        </div>

      </section>

      {/* CERTIFICATIONS + ACHIEVEMENT */}

      <section className="border-y border-slate-800 bg-slate-900/40">

        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-20 md:grid-cols-2">

          {/* CERTIFICATIONS */}

          <div>

            <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
              Certifications
            </p>

            <div className="mt-6 space-y-4">

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
                <p className="font-semibold">
                  AWS Certified Cloud Practitioner
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  In progress
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
                <p className="font-semibold">
                  SQL (Basic)
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  HackerRank
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
                <p className="font-semibold">
                  Operating System Fundamentals
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  NPTEL
                </p>
              </div>

            </div>

          </div>

          {/* ACHIEVEMENT */}

          <div>

            <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
              Achievement
            </p>

            <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950 p-6">

              <p className="text-xl font-bold">
                🏆 Best Paper Award — ICICC-2026
              </p>

              <p className="mt-4 leading-7 text-slate-400">
                Awarded for the research paper:
              </p>

              <p className="mt-3 leading-7 text-slate-300">
                “HealthGuard: A Collaborative Machine Learning Approach
                to Secure Medical Information Across IoT-Driven
                Healthcare Systems.”
              </p>

              <p className="mt-5 text-sm text-slate-500">
                Published research paper through Springer.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section id="contact">

        <div className="mx-auto max-w-7xl px-6 py-20 text-center">

          <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
            Contact
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Let&apos;s connect
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
            Open to DevOps, Cloud and Platform engineering opportunities.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
              href="mailto:surendrasomisetty18@gmail.com"
              className="rounded-lg bg-cyan-400 px-6 py-3 font-bold text-slate-950 hover:bg-cyan-300"
            >
              Email Me
            </a>

            <a
              href="/resume.pdf"
              download="Somisetty-Venkata-Surendra-Kumar-Resume.pdf"
              className="rounded-lg border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 hover:text-cyan-400"
            >
              Download Resume
            </a>

            <a
              href="https://github.com/surendra-kumar-07"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 hover:text-cyan-400"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/somisetty-venkata-surendra-kumar-48b086320/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 hover:text-cyan-400"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">

        © 2026 Somisetty Venkata Surendra Kumar
        {" "}•{" "}
        Cloud & DevOps Portfolio

      </footer>

    </main>
  );
}
