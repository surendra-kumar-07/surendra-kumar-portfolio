<!DOCTYPE html><html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">  <title>Surendra Kumar | DevOps & Cloud Engineer</title><meta
name="description"
content="Portfolio of Somisetty Venkata Surendra Kumar, a DevOps and Cloud Engineer skilled in AWS, Jenkins, Docker, Linux, Git, Terraform and CI/CD."

«»

  <meta name="theme-color" content="#6c63ff">  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
    rel="stylesheet"
  >  <style>
    :root {
      --bg: #ffffff;
      --text: #2e2e2e;
      --sub: #6b6b6b;
      --card: #ffffff;
      --accent: #6c63ff;
      --accent2: #5a52e0;
      --shadow: rgba(0, 0, 0, 0.2) 0 10px 30px -15px;
      --line: #e8e8f0;
      --chip: #f3f2ff;
    }

    [data-theme="dark"] {
      --bg: #171717;
      --text: #f2f2f2;
      --sub: #a8a8b3;
      --card: #222226;
      --accent: #8b84ff;
      --accent2: #6c63ff;
      --shadow: rgba(0, 0, 0, 0.7) 0 10px 30px -15px;
      --line: #33333a;
      --chip: #2b2a45;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      background: var(--bg);
      color: var(--text);
      font-family: Poppins, "Segoe UI", Arial, sans-serif;
      line-height: 1.55;
      transition: background 0.3s, color 0.3s;
    }

    a {
      color: inherit;
    }

    :focus-visible {
      outline: 3px solid var(--accent);
      outline-offset: 3px;
    }

    .wrap {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 24px;
    }

    /* HEADER */

    header {
      position: sticky;
      top: 0;
      z-index: 100;
      background: var(--bg);
      box-shadow: 0 1px 0 var(--line);
      backdrop-filter: blur(10px);
    }

    header .wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 68px;
      gap: 16px;
    }

    .logo {
      font-weight: 700;
      font-size: 1.15rem;
      text-decoration: none;
    }

    .logo span {
      color: var(--accent);
    }

    nav {
      display: flex;
      align-items: center;
      gap: 22px;
      font-size: 0.95rem;
    }

    nav a {
      text-decoration: none;
      padding: 4px 2px;
      border-bottom: 2px solid transparent;
    }

    nav a:hover {
      border-color: var(--accent);
    }

    #theme {
      border: 1px solid var(--line);
      background: var(--card);
      color: var(--text);
      border-radius: 999px;
      width: 42px;
      height: 42px;
      font-size: 1.1rem;
      cursor: pointer;
    }

    /* HERO */

    .hero {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 32px;
      align-items: center;
      min-height: calc(100vh - 68px);
      padding: 40px 0;
    }

    .hero h1 {
      font-size: clamp(2.2rem, 6vw, 4.2rem);
      line-height: 1.12;
      font-weight: 700;
    }

    .hero h1 em {
      font-style: normal;
      color: var(--accent);
    }

    .hero p {
      margin-top: 20px;
      color: var(--sub);
      font-size: 1.15rem;
      max-width: 34em;
    }

    .social {
      display: flex;
      gap: 12px;
      margin-top: 26px;
    }

    .social a {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      background: var(--accent);
      color: #fff;
      transition: transform 0.2s;
    }

    .social a:hover {
      transform: translateY(-3px);
    }

    .social svg {
      width: 22px;
      height: 22px;
      fill: currentColor;
    }

    .btns {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
      margin-top: 30px;
    }

    .btn {
      display: inline-block;
      padding: 13px 28px;
      border-radius: 6px;
      background: var(--accent);
      color: #fff;
      text-decoration: none;
      font-weight: 600;
      border: 2px solid var(--accent);
      transition: 0.2s;
    }

    .btn:hover {
      background: var(--accent2);
      border-color: var(--accent2);
    }

    .btn.alt {
      background: transparent;
      color: var(--accent);
    }

    .btn.alt:hover {
      background: var(--accent);
      color: #fff;
    }

    .art {
      justify-self: center;
      width: min(100%, 380px);
    }

    /* SECTIONS */

    section {
      padding: 72px 0 8px;
    }

    .title {
      font-size: 2.2rem;
      font-weight: 700;
      text-align: center;
      margin-bottom: 12px;
    }

    .sub {
      text-align: center;
      color: var(--sub);
      max-width: 36em;
      margin: 0 auto 40px;
    }

    .cards3 {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 24px;
    }

    .card {
      background: var(--card);
      border-radius: 12px;
      box-shadow: var(--shadow);
      overflow: hidden;
    }

    /* SERVICES */

    .do {
      padding: 28px;
    }

    .do .ic {
      width: 52px;
      height: 52px;
      border-radius: 12px;
      background: var(--chip);
      color: var(--accent);
      display: grid;
      place-items: center;
      font-size: 1.5rem;
      margin-bottom: 14px;
    }

    .do h3 {
      font-size: 1.15rem;
      margin-bottom: 8px;
    }

    .do p {
      color: var(--sub);
      font-size: 0.95rem;
    }

    /* CHIPS */

    .chips {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 14px;
    }

    .chips span {
      background: var(--chip);
      color: var(--accent);
      padding: 4px 12px;
      border-radius: 999px;
      font-size: 0.82rem;
      font-weight: 500;
    }

    /* TECH STACK */

    .stack {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 20px;
    }

    .stack .card {
      padding: 22px;
    }

    .stack h3 {
      font-size: 1rem;
      margin-bottom: 4px;
    }

    /* EXPERIENCE & EDUCATION */

    .item {
      display: grid;
      grid-template-columns: 140px 1fr;
      min-height: 150px;
    }

    .item .badge {
      background: linear-gradient(
        135deg,
        var(--accent),
        #9b95ff
      );
      color: #fff;
      display: grid;
      place-items: center;
      font-size: 2rem;
      font-weight: 700;
    }

    .item .body {
      padding: 24px 28px;
    }

    .item h3 {
      font-size: 1.2rem;
    }

    .item .co {
      color: var(--accent);
      font-weight: 600;
      margin-top: 2px;
    }

    .item .date {
      color: var(--sub);
      font-size: 0.88rem;
      margin: 2px 0 12px;
    }

    .item ul {
      padding-left: 18px;
      color: var(--sub);
      font-size: 0.95rem;
    }

    .item li {
      margin-bottom: 6px;
    }

    .list {
      display: grid;
      gap: 24px;
    }

    /* PROJECTS */

    .proj {
      padding: 24px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .proj h3 {
      font-size: 1.1rem;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .proj h3::before {
      content: "";
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--accent);
      flex-shrink: 0;
    }

    .proj p {
      color: var(--sub);
      font-size: 0.93rem;
      flex: 1;
    }

    /* ACHIEVEMENTS */

    .ach {
      padding: 26px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .ach .tag {
      font-size: 0.78rem;
      font-weight: 600;
      color: var(--accent);
    }

    .ach h3 {
      font-size: 1.1rem;
    }

    .ach p {
      color: var(--sub);
      font-size: 0.93rem;
      flex: 1;
    }

    .ach a {
      align-self: flex-start;
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--accent);
      text-decoration: none;
      border: 2px solid var(--accent);
      padding: 6px 16px;
      border-radius: 6px;
    }

    .ach a:hover {
      background: var(--accent);
      color: #fff;
    }

    /* CONTACT */

    .contact {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
      align-items: center;
    }

    .contact h2 {
      font-size: 2.4rem;
      line-height: 1.15;
    }

    .contact p {
      color: var(--sub);
      margin: 14px 0 24px;
    }

    .lines {
      display: grid;
      gap: 12px;
    }

    .lines a {
      display: block;
      padding: 16px 20px;
      border-radius: 10px;
      background: var(--card);
      box-shadow: var(--shadow);
      text-decoration: none;
      font-weight: 500;
      word-break: break-word;
    }

    .lines small {
      display: block;
      color: var(--sub);
      font-weight: 400;
    }

    /* FOOTER */

    footer {
      text-align: center;
      color: var(--sub);
      font-size: 0.9rem;
      padding: 56px 0 36px;
    }

    /* RESPONSIVE */

    @media (max-width: 820px) {
      nav a {
        display: none;
      }

      .hero {
        grid-template-columns: 1fr;
        min-height: 0;
      }

      .art {
        order: -1;
        width: 240px;
      }
    }

    @media (max-width: 760px) {
      .contact {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 620px) {
      .item {
        grid-template-columns: 1fr;
      }

      .item .badge {
        height: 80px;
      }

      .hero {
        padding-top: 30px;
      }

      .title {
        font-size: 1.9rem;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      html {
        scroll-behavior: auto;
      }

      * {
        transition: none !important;
      }
    }
  </style></head><body><header>
  <div class="wrap"><a class="logo" href="#top">
  &lt;<span>Surendra</span>/&gt;
</a>

<nav>
  <a href="#skills">Skills</a>
  <a href="#experience">Experience</a>
  <a href="#education">Education</a>
  <a href="#projects">Projects</a>
  <a href="#achievements">Achievements</a>
  <a href="#contact">Contact</a>

  <button
    id="theme"
    type="button"
    aria-label="Toggle dark mode"
  >
    ☾
  </button>
</nav>

  </div>
</header><main class="wrap" id="top">  <!-- HERO -->  <section class="hero"><div>

  <h1>
    Hi, I'm <em>Surendra</em> 👋
  </h1>

  <p>
    A DevOps and Cloud Engineer focused on AWS, CI/CD automation,
    Docker, Jenkins, Linux and cloud infrastructure.
    Based in Bengaluru, India.
  </p>

  <div class="social">

    <!-- GitHub -->

    <a
      href="https://github.com/surendra-kumar-07"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
    >
      <svg viewBox="0 0 24 24">
        <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z"/>
      </svg>
    </a>

    <!-- LinkedIn -->

    <a
      href="https://www.linkedin.com/in/somisetty-venkata-surendra-kumar-48b086320/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      <svg viewBox="0 0 24 24">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3V9.75zm6.5 0h3.83v1.54h.05c.53-1 1.84-2.06 3.78-2.06 4.04 0 4.79 2.66 4.79 6.12V21h-4v-4.9c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.58V21h-4V9.75z"/>
      </svg>
    </a>

    <!-- Email -->

    <a
      href="mailto:surendrasomisetty18@gmail.com"
      aria-label="Email"
    >
      <svg viewBox="0 0 24 24">
        <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 7.2L4.6 7 4 8.2l8 5.4 8-5.4L19.4 7 12 12.2z"/>
      </svg>
    </a>

  </div>

  <div class="btns">

    <a class="btn" href="#contact">
      Contact Me
    </a>

    <a
      class="btn alt"
      href="Surendra_Kumar_DevOps_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      View Resume
    </a>

  </div>

</div>

<!-- DEVOPS ILLUSTRATION -->

<svg
  class="art"
  viewBox="0 0 380 320"
  role="img"
  aria-label="DevOps CI/CD pipeline illustration"
>

  <rect
    x="30"
    y="40"
    width="320"
    height="200"
    rx="16"
    fill="var(--chip)"
  />

  <rect
    x="52"
    y="64"
    width="276"
    height="26"
    rx="6"
    fill="var(--card)"
  />

  <circle cx="68" cy="77" r="5" fill="#ff6b6b"/>
  <circle cx="86" cy="77" r="5" fill="#ffc94d"/>
  <circle cx="104" cy="77" r="5" fill="#4cd08a"/>

  <g
    font-family="Consolas, monospace"
    font-size="13"
    fill="var(--text)"
  >

    <text x="56" y="120">
      $ git push origin main
    </text>

    <text x="56" y="144" fill="#6c63ff">
      &gt; build passed
    </text>

    <text x="56" y="168" fill="#6c63ff">
      &gt; quality gate passed
    </text>

    <text x="56" y="192" fill="#6c63ff">
      &gt; image pushed
    </text>

    <text x="56" y="216" fill="#17a360">
      &gt; deployed to EC2
    </text>

  </g>

  <path
    d="M110 240v28h160v-28"
    fill="none"
    stroke="#6c63ff"
    stroke-width="3"
    stroke-dasharray="6 6"
  />

  <rect
    x="80"
    y="262"
    width="60"
    height="40"
    rx="8"
    fill="#6c63ff"
  />

  <text
    x="110"
    y="287"
    text-anchor="middle"
    font-size="12"
    font-weight="700"
    fill="#fff"
  >
    Docker
  </text>

  <rect
    x="240"
    y="262"
    width="60"
    height="40"
    rx="8"
    fill="#6c63ff"
  />

  <text
    x="270"
    y="287"
    text-anchor="middle"
    font-size="12"
    font-weight="700"
    fill="#fff"
  >
    AWS
  </text>

</svg>

  </section>  <!-- SKILLS -->  <section id="skills"><h2 class="title">
  What I Do
</h2>

<p class="sub">
  Building, automating and deploying applications using modern
  DevOps and cloud technologies.
</p>

<div class="cards3">

  <div class="card do">
    <div class="ic">⚙</div>

    <h3>
      CI/CD Automation
    </h3>

    <p>
      Jenkins pipelines with Maven, GitHub and automated
      build and deployment workflows.
    </p>
  </div>

  <div class="card do">
    <div class="ic">📦</div>

    <h3>
      Containerization
    </h3>

    <p>
      Building Docker images, managing containers,
      networking and application deployments.
    </p>
  </div>

  <div class="card do">
    <div class="ic">☁</div>

    <h3>
      AWS Cloud
    </h3>

    <p>
      Working with EC2, S3, VPC, IAM, Lambda,
      CloudWatch, SNS and other AWS services.
    </p>
  </div>

</div>

<h2
  class="title"
  style="margin-top:64px;font-size:1.8rem"
>
  Technical Skills
</h2>

<div
  class="stack"
  style="margin-top:28px"
>

  <div class="card">
    <h3>
      DevOps & CI/CD
    </h3>

    <div class="chips">
      <span>Jenkins</span>
      <span>Git</span>
      <span>GitHub</span>
      <span>Maven</span>
      <span>Docker</span>
    </div>
  </div>

  <div class="card">
    <h3>
      AWS
    </h3>

    <div class="chips">
      <span>EC2</span>
      <span>S3</span>
      <span>VPC</span>
      <span>IAM</span>
      <span>Lambda</span>
      <span>CloudWatch</span>
      <span>SNS</span>
      <span>RDS</span>
      <span>ELB</span>
      <span>Auto Scaling</span>
      <span>CloudFront</span>
      <span>Route 53</span>
    </div>
  </div>

  <div class="card">
    <h3>
      Infrastructure
    </h3>

    <div class="chips">
      <span>Terraform</span>
      <span>Linux</span>
      <span>Bash</span>
      <span>Shell Scripting</span>
    </div>
  </div>

  <div class="card">
    <h3>
      Programming & Database
    </h3>

    <div class="chips">
      <span>Python</span>
      <span>SQL</span>
    </div>
  </div>

  <div class="card">
    <h3>
      Networking
    </h3>

    <div class="chips">
      <span>TCP/IP</span>
      <span>DNS</span>
      <span>HTTP/HTTPS</span>
      <span>CIDR</span>
      <span>NAT</span>
      <span>Load Balancing</span>
    </div>
  </div>

  <div class="card">
    <h3>
      Monitoring
    </h3>

    <div class="chips">
      <span>CloudWatch</span>
      <span>SNS</span>
    </div>
  </div>

</div>

  </section>  <!-- EXPERIENCE -->  <section id="experience"><h2 class="title">
  Experience
</h2>

<p class="sub">
  Hands-on experience with DevOps tools, AWS infrastructure
  and deployment automation.
</p>

<div class="list">

  <div class="card item">

    <div class="badge">
      QS
    </div>

    <div class="body">

      <h3>
        DevOps Engineer Intern
      </h3>

      <div class="co">
        Q Spiders
      </div>

      <div class="date">
        Feb 2026 – Present
      </div>

      <ul>

        <li>
          Built Jenkins CI/CD pipelines using GitHub and Maven.
        </li>

        <li>
          Containerized applications using Docker.
        </li>

        <li>
          Worked with AWS EC2, VPC, IAM, S3 and Lambda.
        </li>

        <li>
          Configured CloudWatch monitoring and SNS alerts.
        </li>

        <li>
          Used Linux and Bash scripting for deployment and automation tasks.
        </li>

      </ul>

    </div>

  </div>

</div>

  </section>  <!-- EDUCATION -->  <section id="education"><h2 class="title">
  Education
</h2>

<div class="list">

  <div class="card item">

    <div class="badge">
      BT
    </div>

    <div class="body">

      <h3>
        B.Tech in Computer Science and Engineering
      </h3>

      <div class="co">
        Siddharth Institute of Engineering and Technology
      </div>

      <div class="date">
        Graduated 2026 · CGPA 8.2
      </div>

      <ul>
        <li>
          Specialization: Cyber Security
        </li>
      </ul>

    </div>

  </div>

</div>

  </section>  <!-- PROJECTS -->  <section id="projects"><h2 class="title">
  Projects
</h2>

<p class="sub">
  Hands-on projects focused on AWS, Docker, CI/CD and cloud automation.
</p>

<div class="cards3">

  <div class="card proj">

    <h3>
      Dockerized Web Application
    </h3>

    <p>
      Containerized a web application using Docker,
      created custom images and deployed the application
      using container-based workflows.
    </p>

    <div class="chips">
      <span>Docker</span>
      <span>Linux</span>
      <span>GitHub</span>
    </div>

  </div>

  <div class="card proj">

    <h3>
      S3 Static Website Hosting
    </h3>

    <p>
      Hosted a static website using Amazon S3 and configured
      bucket access policies with IAM-based permissions.
    </p>

    <div class="chips">
      <span>AWS S3</span>
      <span>IAM</span>
      <span>Cloud</span>
    </div>

  </div>

  <div class="card proj">

    <h3>
      S3 Event-Driven Alarm System
    </h3>

    <p>
      Built an event-driven monitoring workflow using S3,
      CloudWatch and SNS for automated alerts and notifications.
    </p>

    <div class="chips">
      <span>S3</span>
      <span>CloudWatch</span>
      <span>SNS</span>
    </div>

  </div>

  <div class="card proj">

    <h3>
      Serverless Image Compression
    </h3>

    <p>
      Created a serverless image compression workflow using
      Amazon S3 events and AWS Lambda with Python and Pillow.
    </p>

    <div class="chips">
      <span>AWS Lambda</span>
      <span>Python</span>
      <span>S3</span>
    </div>

  </div>

</div>

  </section>  <!-- ACHIEVEMENTS -->  <section id="achievements"><h2 class="title">
  Achievements
</h2>

<p class="sub">
  Academic recognition and professional learning.
</p>

<div class="cards3">

  <div class="card ach">

    <span class="tag">
      Best Paper Award
    </span>

    <h3>
      ICICC-2026
    </h3>

    <p>
      HealthGuard: A Collaborative Machine Learning Approach
      to Secure Medical Information Across IoT-Driven
      Healthcare Systems.
    </p>

    <a
      href="https://link.springer.com/chapter/10.1007/978-3-032-30
