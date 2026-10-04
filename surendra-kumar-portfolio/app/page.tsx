<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Somisetty Venkata Surendra Kumar | DevOps Engineer</title>

    <style>

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            scroll-behavior: smooth;
        }

        body {
            font-family: Arial, Helvetica, sans-serif;
            background: #0b1120;
            color: #ffffff;
            line-height: 1.7;
        }

        /* ================= NAVBAR ================= */

        nav {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background: rgba(2, 6, 23, 0.96);
            padding: 18px 7%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 1000;
            border-bottom: 1px solid #1e293b;
        }

        nav .logo {
            font-size: 21px;
            font-weight: bold;
            color: #38bdf8;
        }

        nav ul {
            display: flex;
            list-style: none;
            gap: 25px;
        }

        nav ul li a {
            text-decoration: none;
            color: #e2e8f0;
            font-size: 15px;
        }

        nav ul li a:hover {
            color: #38bdf8;
        }

        /* ================= COMMON ================= */

        section {
            padding: 100px 8%;
        }

        .section-title {
            text-align: center;
            font-size: 36px;
            margin-bottom: 45px;
            color: #38bdf8;
        }

        .container {
            max-width: 1100px;
            margin: auto;
        }

        /* ================= HERO ================= */

        #home {
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding-top: 120px;
        }

        .hero {
            max-width: 950px;
        }

        .hero h1 {
            font-size: 50px;
            line-height: 1.2;
            margin-bottom: 15px;
        }

        .hero h1 span {
            color: #38bdf8;
        }

        .hero h2 {
            font-size: 25px;
            color: #cbd5e1;
            margin-bottom: 20px;
        }

        .hero p {
            max-width: 850px;
            margin: auto;
            color: #94a3b8;
            font-size: 18px;
        }

        .contact-info {
            margin-top: 20px;
            color: #cbd5e1;
        }

        .contact-info span {
            margin: 0 7px;
        }

        .buttons {
            margin-top: 30px;
        }

        .btn {
            display: inline-block;
            padding: 12px 22px;
            margin: 7px;
            border-radius: 7px;
            text-decoration: none;
            font-weight: bold;
            transition: 0.3s;
        }

        .resume-btn {
            background: #38bdf8;
            color: #020617;
        }

        .linkedin-btn {
            background: #2563eb;
            color: white;
        }

        .github-btn {
            background: #334155;
            color: white;
        }

        .btn:hover {
            transform: translateY(-3px);
        }

        /* ================= SUMMARY ================= */

        .summary {
            max-width: 950px;
            margin: auto;
            background: #111827;
            border: 1px solid #1e293b;
            border-radius: 12px;
            padding: 35px;
        }

        .summary p {
            color: #cbd5e1;
            font-size: 17px;
        }

        /* ================= SKILLS ================= */

        .skill-group {
            background: #111827;
            padding: 25px;
            border-radius: 12px;
            margin-bottom: 20px;
            border: 1px solid #1e293b;
        }

        .skill-group h3 {
            color: #38bdf8;
            margin-bottom: 15px;
        }

        .skill-list {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .skill {
            padding: 9px 14px;
            background: #1e293b;
            border-radius: 6px;
            color: #e2e8f0;
        }

        /* ================= EXPERIENCE ================= */

        .experience-card {
            background: #111827;
            border-left: 4px solid #38bdf8;
            padding: 30px;
            border-radius: 10px;
        }

        .experience-card h3 {
            color: #38bdf8;
            font-size: 24px;
        }

        .experience-card .date {
            color: #94a3b8;
            margin: 5px 0 20px;
        }

        .experience-card .technologies {
            color: #7dd3fc;
            margin-bottom: 20px;
        }

        .experience-card ul {
            padding-left: 20px;
        }

        .experience-card li {
            color: #cbd5e1;
            margin-bottom: 12px;
        }

        /* ================= PROJECTS ================= */

        .projects {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
            gap: 25px;
        }

        .project {
            background: #111827;
            padding: 28px;
            border-radius: 12px;
            border: 1px solid #1e293b;
            transition: 0.3s;
        }

        .project:hover {
            transform: translateY(-5px);
            border-color: #38bdf8;
        }

        .project h3 {
            color: #38bdf8;
            margin-bottom: 10px;
        }

        .project .tech {
            color: #7dd3fc;
            font-size: 14px;
            margin-bottom: 18px;
        }

        .project ul {
            padding-left: 18px;
        }

        .project li {
            color: #cbd5e1;
            margin-bottom: 10px;
        }

        /* ================= EDUCATION ================= */

        .education-card {
            max-width: 900px;
            margin: auto;
            background: #111827;
            padding: 30px;
            border-radius: 12px;
            border: 1px solid #1e293b;
        }

        .education-card h3 {
            color: #38bdf8;
        }

        .education-card p {
            color: #cbd5e1;
            margin-top: 8px;
        }

        /* ================= CERTIFICATIONS ================= */

        .certifications {
            max-width: 800px;
            margin: auto;
        }

        .cert {
            background: #111827;
            border: 1px solid #1e293b;
            padding: 20px;
            border-radius: 9px;
            margin-bottom: 15px;
            color: #cbd5e1;
        }

        .cert strong {
            color: #38bdf8;
        }

        /* ================= ACHIEVEMENT ================= */

        .achievement {
            max-width: 950px;
            margin: auto;
            background: #111827;
            padding: 35px;
            border-radius: 12px;
            text-align: center;
            border: 1px solid #1e293b;
        }

        .achievement h3 {
            color: #38bdf8;
            margin-bottom: 15px;
        }

        .achievement p {
            color: #cbd5e1;
        }

        /* ================= CONTACT ================= */

        .contact {
            text-align: center;
        }

        .contact p {
            color: #cbd5e1;
            margin: 10px;
        }

        .contact a {
            color: #38bdf8;
            text-decoration: none;
        }

        /* ================= FOOTER ================= */

        footer {
            text-align: center;
            padding: 25px;
            background: #020617;
            color: #64748b;
            border-top: 1px solid #1e293b;
        }

        /* ================= MOBILE ================= */

        @media(max-width: 800px) {

            nav {
                flex-direction: column;
                gap: 15px;
            }

            nav ul {
                flex-wrap: wrap;
                justify-content: center;
                gap: 12px;
            }

            .hero h1 {
                font-size: 36px;
            }

            .hero h2 {
                font-size: 20px;
            }

            section {
                padding: 80px 5%;
            }

        }

    </style>

</head>


<body>


<!-- ================= NAVIGATION ================= -->

<nav>

    <div class="logo">
        Surendra Kumar
    </div>

    <ul>

        <li>
            <a href="#home">Home</a>
        </li>

        <li>
            <a href="#summary">Summary</a>
        </li>

        <li>
            <a href="#skills">Skills</a>
        </li>

        <li>
            <a href="#experience">Experience</a>
        </li>

        <li>
            <a href="#projects">Projects</a>
        </li>

        <li>
            <a href="#education">Education</a>
        </li>

        <li>
            <a href="#certifications">Certifications</a>
        </li>

        <li>
            <a href="#achievements">Achievements</a>
        </li>

        <li>
            <a href="#contact">Contact</a>
        </li>

    </ul>

</nav>



<!-- ================= HOME ================= -->

<section id="home">

    <div class="hero">

        <h1>
            SOMISETTY VENKATA
            <span>SURENDRA KUMAR</span>
        </h1>

        <h2>
            DevOps Engineer Intern
            <br>
            CI/CD • Jenkins • Docker • AWS • Linux
        </h2>

        <p>
            Bengaluru, India
        </p>

        <div class="contact-info">

            <span>+91-7095690017</span>

            <span>|</span>

            <span>
                surendrasomisetty18@gmail.com
            </span>

        </div>


        <div class="buttons">

            <!-- Resume -->

            <a
                href="Surendra_Resume_DevOps_Improved-1(5).pdf"
                download="Surendra_Kumar_DevOps_Resume.pdf"
                class="btn resume-btn">

                📄 Download Resume

            </a>


            <!-- LinkedIn -->

            <a
                href="https://www.linkedin.com/in/somisetty-venkata-surendra-kumar-48b086320/"
                target="_blank"
                class="btn linkedin-btn">

                LinkedIn

            </a>


            <!-- GitHub -->

            <a
                href="https://github.com/surendra-kumar-07"
                target="_blank"
                class="btn github-btn">

                GitHub

            </a>

        </div>

    </div>

</section>



<!-- ================= PROFESSIONAL SUMMARY ================= -->

<section id="summary">

    <h2 class="section-title">
        Professional Summary
    </h2>

    <div class="summary">

        <p>
            Computer Science graduate (Cybersecurity, IoT & Blockchain)
            with hands-on DevOps internship experience building and
            supporting CI/CD pipelines using Git, GitHub, Jenkins, Maven,
            SonarQube and Nexus.
        </p>

        <br>

        <p>
            Experienced in containerizing applications with Docker and
            managing AWS infrastructure including EC2, VPC, IAM, S3
            and Lambda.
        </p>

        <br>

        <p>
            Implemented CloudWatch/SNS monitoring and automated deployment
            workflows with Bash to reduce manual release effort.
        </p>

        <br>

        <p>
            Strong foundation in Linux administration and core networking
            including HTTP, DNS and load balancing.
        </p>

        <br>

        <p>
            AWS Certified Cloud Practitioner (in progress).
            Seeking to grow into a Platform/DevOps role focused on
            CI/CD automation and observability.
        </p>

    </div>

</section>



<!-- ================= TECHNICAL SKILLS ================= -->

<section id="skills">

    <h2 class="section-title">
        Technical Skills
    </h2>


    <div class="container">


        <div class="skill-group">

            <h3>
                CI/CD & Source Control
            </h3>

            <div class="skill-list">

                <span class="skill">Jenkins</span>

                <span class="skill">Git</span>

                <span class="skill">GitHub</span>

                <span class="skill">Maven</span>

                <span class="skill">SonarQube</span>

                <span class="skill">Nexus</span>

            </div>

        </div>



        <div class="skill-group">

            <h3>
                Containers
            </h3>

            <div class="skill-list">

                <span class="skill">Docker</span>

                <span class="skill">Image Builds</span>

                <span class="skill">Container Networking</span>

                <span class="skill">Docker Hub</span>

            </div>

        </div>



        <div class="skill-group">

            <h3>
                Cloud — AWS
            </h3>

            <div class="skill-list">

                <span class="skill">EC2</span>

                <span class="skill">VPC</span>

                <span class="skill">S3</span>

                <span class="skill">EBS</span>

                <span class="skill">RDS</span>

                <span class="skill">IAM</span>

                <span class="skill">Elastic Load Balancing</span>

                <span class="skill">Auto Scaling</span>

                <span class="skill">Route 53</span>

                <span class="skill">CloudFront</span>

                <span class="skill">Lambda</span>

            </div>

        </div>



        <div class="skill-group">

            <h3>
                Monitoring & Alerting
            </h3>

            <div class="skill-list">

                <span class="skill">Amazon CloudWatch</span>

                <span class="skill">Amazon SNS</span>

            </div>

        </div>



        <div class="skill-group">

            <h3>
                Scripting & Automation
            </h3>

            <div class="skill-list">

                <span class="skill">Bash</span>

                <span class="skill">Shell Scripting</span>

            </div>

        </div>



        <div class="skill-group">

            <h3>
                Linux & Networking
            </h3>

            <div class="skill-list">

                <span class="skill">Linux Administration</span>

                <span class="skill">Permissions</span>

                <span class="skill">Processes</span>

                <span class="skill">File Systems</span>

                <span class="skill">TCP/IP</span>

                <span class="skill">DNS</span>

                <span class="skill">HTTP/HTTPS</span>

                <span class="skill">Load Balancing</span>

                <span class="skill">Subnetting</span>

                <span class="skill">CIDR</span>

                <span class="skill">NAT</span>

            </div>

        </div>



        <div class="skill-group">

            <h3>
                Hosting & Databases
            </h3>

            <div class="skill-list">

                <span class="skill">Apache Tomcat</span>

                <span class="skill">SQL</span>

                <span class="skill">Amazon RDS</span>

            </div>

        </div>


    </div>

</section>



<!-- ================= EXPERIENCE ================= -->

<section id="experience">

    <h2 class="section-title">
        Internship Experience
    </h2>


    <div class="container">

        <div class="experience-card">

            <h3>
                DevOps Engineer Intern | Q Spiders
            </h3>

            <div class="date">
                Feb 2026 – Present
            </div>


            <div class="technologies">

                Technologies:
                Git, GitHub, Jenkins, Maven, SonarQube,
                Nexus, Docker, AWS, CloudWatch, SNS,
                Linux, Bash

            </div>


            <ul>

                <li>
                    Engineered end-to-end Jenkins CI/CD pipelines
                    covering build, test, and deployment stages,
                    embedding Maven builds with SonarQube quality
                    gates and Nexus artifact storage to enforce
                    code quality before every release.
                </li>


                <li>
                    Containerized applications with Docker and
                    standardized deployment workflows, eliminating
                    manual, error-prone release steps and speeding
                    up rollouts.
                </li>


                <li>
                    Provisioned and administered five core AWS
                    services: EC2, VPC, IAM, S3 and Lambda to support
                    automated, repeatable infrastructure deployments.
                </li>


                <li>
                    Implemented proactive monitoring and alerting
                    with Amazon CloudWatch and SNS, replacing manual
                    log checks with real-time detection of
                    infrastructure and application issues.
                </li>


                <li>
                    Automated recurring operational and deployment
                    tasks with Bash/Shell scripts and applied Linux
                    administration and core networking fundamentals
                    including DNS, HTTP/HTTPS and load balancing.
                </li>

            </ul>

        </div>

    </div>

</section>



<!-- ================= PROJECTS ================= -->

<section id="projects">

    <h2 class="section-title">
        Projects
    </h2>


    <div class="container projects">


        <!-- PROJECT 1 -->

        <div class="project">

            <h3>
                S3 Event-Driven Alarm & Notification System
            </h3>

            <div class="tech">

                Amazon S3 • Amazon CloudWatch • Amazon SNS

            </div>


            <ul>

                <li>
                    Replaced manual log monitoring with automated
                    incident detection by configuring CloudWatch
                    alarms across S3 activity and error thresholds.
                </li>

                <li>
                    Integrated Amazon SNS to deliver real-time alerts
                    on every alarm state change, closing the gap
                    between issue occurrence and detection.
                </li>

            </ul>

        </div>



        <!-- PROJECT 2 -->

        <div class="project">

            <h3>
                CI/CD Deployment Automation for Java Web Application
            </h3>

            <div class="tech">

                Git • GitHub • Jenkins • Maven • Docker

            </div>


            <ul>

                <li>
                    Designed and automated an end-to-end Jenkins
                    CI/CD pipeline, taking a Java web application
                    from commit to live deployment with zero manual
                    release steps.
                </li>

                <li>
                    Configured GitHub webhooks to auto-trigger builds
                    on every push, converting a manual commit-to-
                    artifact process into a fully automated one.
                </li>

                <li>
                    Automated build, test and packaging stages with
                    Maven for consistent, repeatable releases.
                </li>

                <li>
                    Containerized the application with Docker and
                    scripted automated deployment.
                </li>

            </ul>

        </div>



        <!-- PROJECT 3 -->

        <div class="project">

            <h3>
                Dockerized Web Application Deployment
            </h3>

            <div class="tech">

                Docker • Docker Hub • Linux • AWS EC2

            </div>


            <ul>

                <li>
                    Containerized a web application with Docker,
                    building and versioning custom images and
                    publishing them to Docker Hub for reuse
                    across environments.
                </li>

                <li>
                    Configured container networking to enable
                    reliable communication between application
                    services running in separate containers.
                </li>

                <li>
                    Deployed and operated the containerized
                    application on an AWS EC2 instance using
                    Linux commands for setup, configuration
                    and troubleshooting.
                </li>

                <li>
                    Streamlined deployment by pulling versioned
                    images directly from Docker Hub onto the
                    EC2 host.
                </li>

            </ul>

        </div>


    </div>

</section>



<!-- ================= EDUCATION ================= -->

<section id="education">

    <h2 class="section-title">
        Education
    </h2>


    <div class="education-card">

        <h3>
            Bachelor of Technology in Computer Science and Engineering
        </h3>

        <p>
            Siddharth Institute of Engineering and Technology
        </p>

        <p>
            Specialization:
            Cybersecurity, IoT & Blockchain Technology
        </p>

        <p>
            Graduated: 2026
        </p>

        <p>
            CGPA: 8.2
        </p>

    </div>

</section>



<!-- ================= CERTIFICATIONS ================= -->

<section id="certifications">

    <h2 class="section-title">
        Certifications
    </h2>


    <div class="certifications">


        <div class="cert">

            <strong>
                AWS Certified Cloud Practitioner
            </strong>

            — In Progress

        </div>


        <div class="cert">

            <strong>
                SQL (Basic)
            </strong>

            — HackerRank

        </div>


        <div class="cert">

            <strong>
                Operating System Fundamentals
            </strong>

            — NPTEL

        </div>


    </div>

</section>



<!-- ================= ACHIEVEMENTS ================= -->

<section id="achievements">

    <h2 class="section-title">
        Achievements
    </h2>


    <div class="achievement">

        <h3>
            🏆 Best Paper Award — ICICC-2026
        </h3>


        <p>

            Best Paper Award at the International Conference
            on Innovative Computing and Communication (ICICC-2026)

        </
