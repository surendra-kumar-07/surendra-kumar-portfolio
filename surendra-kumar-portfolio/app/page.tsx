
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Surendra Kumar | DevOps Engineer</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }

        body {
            background: #0f172a;
            color: #ffffff;
            line-height: 1.6;
        }

        header {
            background: #020617;
            padding: 20px 8%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        header h2 {
            color: #38bdf8;
        }

        nav a {
            color: white;
            text-decoration: none;
            margin-left: 25px;
            transition: 0.3s;
        }

        nav a:hover {
            color: #38bdf8;
        }

        section {
            padding: 80px 8%;
        }

        .hero {
            min-height: 90vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        .hero h1 {
            font-size: 50px;
            margin-bottom: 15px;
        }

        .hero h1 span {
            color: #38bdf8;
        }

        .hero p {
            font-size: 20px;
            color: #cbd5e1;
            max-width: 700px;
        }

        .buttons {
            margin-top: 30px;
        }

        .btn {
            display: inline-block;
            padding: 13px 25px;
            margin: 8px;
            border-radius: 8px;
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

        .btn:hover {
            transform: translateY(-3px);
            opacity: 0.9;
        }

        h2.section-title {
            text-align: center;
            font-size: 35px;
            margin-bottom: 40px;
            color: #38bdf8;
        }

        .about {
            max-width: 900px;
            margin: auto;
            text-align: center;
            color: #cbd5e1;
            font-size: 18px;
        }

        .skills {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 15px;
            max-width: 1000px;
            margin: auto;
        }

        .skill {
            background: #1e293b;
            padding: 20px;
            text-align: center;
            border-radius: 10px;
            border: 1px solid #334155;
            transition: 0.3s;
        }

        .skill:hover {
            transform: translateY(-5px);
            border-color: #38bdf8;
        }

        .projects {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 25px;
        }

        .project {
            background: #1e293b;
            padding: 25px;
            border-radius: 12px;
            border: 1px solid #334155;
        }

        .project h3 {
            color: #38bdf8;
            margin-bottom: 10px;
        }

        .project p {
            color: #cbd5e1;
        }

        .education {
            max-width: 800px;
            margin: auto;
            background: #1e293b;
            padding: 30px;
            border-radius: 12px;
            text-align: center;
        }

        .education h3 {
            color: #38bdf8;
        }

        .contact {
            text-align: center;
        }

        .contact p {
            margin: 10px 0;
            color: #cbd5e1;
        }

        .contact a {
            color: #38bdf8;
            text-decoration: none;
        }

        footer {
            background: #020617;
            text-align: center;
            padding: 25px;
            color: #94a3b8;
        }

        @media (max-width: 700px) {
            header {
                flex-direction: column;
                gap: 15px;
            }

            nav a {
                margin: 5px;
            }

            .hero h1 {
                font-size: 38px;
            }
        }
    </style>
</head>

<body>

    <!-- Navigation -->
    <header>
        <h2>Surendra Kumar</h2>

        <nav>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>


    <!-- Hero Section -->
    <section class="hero">

        <h1>Hi, I'm <span>Surendra Kumar</span></h1>

        <p>
            B.Tech Computer Science and Engineering (Cyber Security) graduate
            aspiring to build a career as a Cloud & DevOps Engineer.
        </p>

        <div class="buttons">

            <!-- Resume Download -->
            <a
                href="Surendra_Resume_DevOps_Improved-1(4).pdf"
                download="Surendra_DevOps_Resume.pdf"
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

        </div>

    </section>


    <!-- About -->
    <section id="about">

        <h2 class="section-title">About Me</h2>

        <div class="about">
            <p>
                I am a Computer Science and Engineering graduate specializing
                in Cyber Security and currently developing my skills in
                Cloud Computing and DevOps.
            </p>

            <p>
                I have hands-on experience with AWS, Linux, Git, GitHub,
                Jenkins, Docker, Terraform, Maven, Shell Scripting,
                SQL and Python.
            </p>

            <p>
                I am looking for an entry-level Cloud / DevOps opportunity
                where I can apply my technical skills and continue learning
                real-world cloud and automation technologies.
            </p>
        </div>

    </section>


    <!-- Skills -->
    <section id="skills">

        <h2 class="section-title">Technical Skills</h2>

        <div class="skills">

            <div class="skill">AWS</div>
            <div class="skill">Linux</div>
            <div class="skill">Git</div>
            <div class="skill">GitHub</div>
            <div class="skill">Shell Scripting</div>
            <div class="skill">Jenkins</div>
            <div class="skill">Docker</div>
            <div class="skill">Terraform</div>
            <div class="skill">Maven</div>
            <div class="skill">SQL</div>
            <div class="skill">Python</div>
            <div class="skill">Networking</div>

        </div>

    </section>


    <!-- Projects -->
    <section id="projects">

        <h2 class="section-title">Projects</h2>

        <div class="projects">

            <div class="project">
                <h3>S3 Static Website Hosting</h3>

                <p>
                    Hosted a static website using Amazon S3 with bucket
                    policies and IAM least-privilege access.
                </p>
            </div>


            <div class="project">
                <h3>Serverless Image Compression Pipeline</h3>

                <p>
                    Built an AWS Lambda-based image compression pipeline
                    using Python, Pillow and Amazon S3 event triggers.
                </p>
            </div>


            <div class="project">
                <h3>S3 Event-Driven Alarm System</h3>

                <p>
                    Created an event-driven monitoring system using S3,
                    CloudWatch and SNS for automated notifications.
                </p>
            </div>


            <div class="project">
                <h3>Docker Web Application</h3>

                <p>
                    Containerized a web application using Docker and
                    created Dockerfiles for building and running the
                    application in a containerized environment.
                </p>
            </div>

        </div>

    </section>


    <!-- Education -->
    <section id="education">

        <h2 class="section-title">Education</h2>

        <div class="education">

            <h3>B.Tech in Computer Science and Engineering</h3>

            <p>
                Specialization: Cyber Security
            </p>

            <p>
                Siddharth Institute of Engineering and Technology
            </p>

            <p>
                2026 | GPA: 8.2
            </p>

        </div>

    </section>


    <!-- Contact -->
    <section id="contact">

        <h2 class="section-title">Contact Me</h2>

        <div class="contact">

            <p>
                📧 Email:
                <a href="mailto:your-email@example.com">
                    your-email@example.com
                </a>
            </p>

            <p>
                💼 LinkedIn:
                <a
                    href="https://www.linkedin.com/in/somisetty-venkata-surendra-kumar-48b086320/"
                    target="_blank">
                    View LinkedIn Profile
                </a>
            </p>

            <p>
                💻 GitHub:
                <a
                    href="https://github.com/surendra-kumar-07"
                    target="_blank">
                    github.com/surendra-kumar-07
                </a>
            </p>

        </div>

    </section>


    <!-- Footer -->
    <footer>
        <p>
            © 2026 Surendra Kumar | Cloud & DevOps Engineer
        </p>
    </footer>

</body>
</html>

