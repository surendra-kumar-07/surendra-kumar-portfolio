
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Surendra Kumar | DevOps Engineer</title>
<meta name="description" content="Portfolio of Somisetty Venkata Surendra Kumar, DevOps Engineer Intern.">
<meta name="theme-color" content="#6c63ff">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
:root{--bg:#fff;--text:#2e2e2e;--sub:#6b6b6b;--card:#fff;--accent:#6c63ff;--accent2:#5a52e0;--shadow:rgba(0,0,0,.2) 0 10px 30px -15px;--line:#e8e8f0;--chip:#f3f2ff}
[data-theme=dark]{--bg:#171717;--text:#f2f2f2;--sub:#a8a8b3;--card:#222226;--shadow:rgba(0,0,0,.7) 0 10px 30px -15px;--line:#33333a;--chip:#2b2a45}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--text);font-family:Poppins,"Segoe UI",Arial,sans-serif;line-height:1.55;transition:background .3s,color .3s}
a{color:inherit}
:focus-visible{outline:3px solid var(--accent);outline-offset:3px}
.wrap{max-width:1100px;margin:0 auto;padding:0 24px}

/* header */
header{position:sticky;top:0;z-index:10;background:var(--bg);box-shadow:0 1px 0 var(--line)}
header .wrap{display:flex;align-items:center;justify-content:space-between;height:68px;gap:16px}
.logo{font-weight:700;font-size:1.15rem;text-decoration:none}
.logo span{color:var(--accent)}
nav{display:flex;align-items:center;gap:22px;font-size:.95rem}
nav a{text-decoration:none;padding:4px 2px;border-bottom:2px solid transparent}
nav a:hover{border-color:var(--accent)}
#theme{border:1px solid var(--line);background:var(--card);color:var(--text);border-radius:999px;width:42px;height:42px;font-size:1.1rem;cursor:pointer}
@media(max-width:820px){nav a{display:none}}

/* hero */
.hero{display:grid;grid-template-columns:1.2fr .8fr;gap:32px;align-items:center;min-height:calc(100vh - 68px);padding:40px 0}
.hero h1{font-size:clamp(2.2rem,6vw,4.2rem);line-height:1.12;font-weight:700}
.hero h1 em{font-style:normal;color:var(--accent)}
.hero p{margin-top:20px;color:var(--sub);font-size:1.15rem;max-width:34em}
.social{display:flex;gap:12px;margin-top:26px}
.social a{width:44px;height:44px;border-radius:50%;display:grid;place-items:center;background:var(--accent);color:#fff;transition:transform .2s}
.social a:hover{transform:translateY(-3px)}
.social svg{width:22px;height:22px;fill:currentColor}
.btns{display:flex;gap:14px;flex-wrap:wrap;margin-top:30px}
.btn{display:inline-block;padding:13px 28px;border-radius:6px;background:var(--accent);color:#fff;text-decoration:none;font-weight:600;border:2px solid var(--accent);transition:background .2s}
.btn:hover{background:var(--accent2)}
.btn.alt{background:transparent;color:var(--accent)}
.btn.alt:hover{background:var(--accent);color:#fff}
.art{justify-self:center;width:min(100%,380px)}
@media(max-width:820px){.hero{grid-template-columns:1fr;min-height:0}.art{order:-1;width:240px}}

/* sections */
section{padding:72px 0 8px}
.title{font-size:2.2rem;font-weight:700;text-align:center;margin-bottom:12px}
.sub{text-align:center;color:var(--sub);max-width:36em;margin:0 auto 40px}
.cards3{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px}
.card{background:var(--card);border-radius:12px;box-shadow:var(--shadow);overflow:hidden}
.do{padding:28px}
.do .ic{width:52px;height:52px;border-radius:12px;background:var(--chip);color:var(--accent);display:grid;place-items:center;font-size:1.5rem;margin-bottom:14px}
.do h3{font-size:1.15rem;margin-bottom:8px}
.do p{color:var(--sub);font-size:.95rem}
.chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px}
.chips span{background:var(--chip);color:var(--accent);padding:4px 12px;border-radius:999px;font-size:.82rem;font-weight:500}
[data-theme=dark] .chips span{color:#b9b5ff}

/* tech stack */
.stack{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:20px}
.stack .card{padding:22px}
.stack h3{font-size:1rem;margin-bottom:4px}

/* experience / education */
.item{display:grid;grid-template-columns:140px 1fr;min-height:150px}
.item .badge{background:linear-gradient(135deg,var(--accent),#9b95ff);color:#fff;display:grid;place-items:center;font-size:2rem;font-weight:700}
.item .body{padding:24px 28px}
.item h3{font-size:1.2rem}
.item .co{color:var(--accent);font-weight:600;margin-top:2px}
.item .date{color:var(--sub);font-size:.88rem;margin:2px 0 12px}
.item ul{padding-left:18px;color:var(--sub);font-size:.95rem}
.item li{margin-bottom:6px}
.list{display:grid;gap:24px}
@media(max-width:620px){.item{grid-template-columns:1fr}.item .badge{height:80px}}

/* projects & achievements */
.proj{padding:24px;display:flex;flex-direction:column;gap:10px}
.proj h3{font-size:1.1rem;display:flex;align-items:center;gap:8px}
.proj h3::before{content:"";width:10px;height:10px;border-radius:50%;background:var(--accent)}
.proj p{color:var(--sub);font-size:.93rem;flex:1}
.ach{padding:26px;display:flex;flex-direction:column;gap:10px}
.ach .tag{font-size:.78rem;font-weight:600;color:var(--accent)}
.ach h3{font-size:1.1rem}
.ach p{color:var(--sub);font-size:.93rem;flex:1}
.ach a{align-self:flex-start;font-size:.9rem;font-weight:600;color:var(--accent);text-decoration:none;border:2px solid var(--accent);padding:6px 16px;border-radius:6px}
.ach a:hover{background:var(--accent);color:#fff}

/* contact */
.contact{display:grid;grid-template-columns:1fr 1fr;gap:32px;align-items:center}
.contact h2{font-size:2.4rem;line-height:1.15}
.contact p{color:var(--sub);margin:14px 0 24px}
.lines{display:grid;gap:12px}
.lines a{display:block;padding:16px 20px;border-radius:10px;background:var(--card);box-shadow:var(--shadow);text-decoration:none;font-weight:500;word-break:break-all}
.lines small{display:block;color:var(--sub);font-weight:400}
@media(max-width:760px){.contact{grid-template-columns:1fr}}
footer{text-align:center;color:var(--sub);font-size:.9rem;padding:56px 0 36px}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*{transition:none!important}}
</style>
</head>
<body>
<header><div class="wrap">
  <a class="logo" href="#top">&lt;<span>Surendra</span>/&gt;</a>
  <nav>
    <a href="#skills">Skills</a><a href="#experience">Experience</a><a href="#education">Education</a>
    <a href="#projects">Projects</a><a href="#achievements">Achievements</a><a href="#contact">Contact</a>
    <button id="theme" type="button" aria-label="Toggle dark mode">&#9790;</button>
  </nav>
</div></header>

<main class="wrap" id="top">
<div class="hero">
  <div>
    <h1>Hi, I'm <em>Surendra</em> &#128075;</h1>
    <p>A DevOps Engineer Intern who builds CI/CD pipelines with Jenkins, containerizes apps with Docker and runs them on AWS. Based in Bengaluru, India.</p>
    <div class="social">
      <a href="https://github.com/surendra-kumar-07" target="_blank" rel="noopener" aria-label="GitHub"><svg viewBox="0 0 24 24"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z"/></svg></a>
      <a href="https://linkedin.com/in/somisetty-venkata-surendra-kumar" target="_blank" rel="noopener" aria-label="LinkedIn"><svg viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3V9.75zm6.5 0h3.83v1.54h.05c.53-1 1.84-2.06 3.78-2.06 4.04 0 4.79 2.66 4.79 6.12V21h-4v-4.9c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.58V21h-4V9.75z"/></svg></a>
      <a href="mailto:surendrasomisetty18@gmail.com" aria-label="Email"><svg viewBox="0 0 24 24"><path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 7.2L4.6 7 4 8.2l8 5.4 8-5.4L19.4 7 12 12.2z"/></svg></a>
    </div>
    <div class="btns">
      <a class="btn" href="#contact">Contact me</a>
      <a class="btn alt" href="Surendra_Kumar_DevOps_Resume.pdf" target="_blank" rel="noopener">See my resume</a>
    </div>
  </div>
  <svg class="art" viewBox="0 0 380 320" role="img" aria-label="Illustration of a pipeline connecting code, container and cloud">
    <rect x="30" y="40" width="320" height="200" rx="16" fill="var(--chip)"/>
    <rect x="52" y="64" width="276" height="26" rx="6" fill="var(--card)"/>
    <circle cx="68" cy="77" r="5" fill="#ff6b6b"/><circle cx="86" cy="77" r="5" fill="#ffc94d"/><circle cx="104" cy="77" r="5" fill="#4cd08a"/>
    <g font-family="Consolas,monospace" font-size="13" fill="var(--text)">
      <text x="56" y="120">$ git push origin main</text>
      <text x="56" y="144" fill="#6c63ff">&gt; build passed</text>
      <text x="56" y="168" fill="#6c63ff">&gt; quality gate passed</text>
      <text x="56" y="192" fill="#6c63ff">&gt; image pushed</text>
      <text x="56" y="216" fill="#17a360">&gt; deployed to EC2</text>
    </g>
    <path d="M110 240v28h160v-28" fill="none" stroke="#6c63ff" stroke-width="3" stroke-dasharray="6 6"/>
    <rect x="80" y="262" width="60" height="40" rx="8" fill="#6c63ff"/><text x="110" y="287" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">Docker</text>
    <rect x="240" y="262" width="60" height="40" rx="8" fill="#6c63ff"/><text x="270" y="287" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">AWS</text>
  </svg>
</div>

<section id="skills">
  <h2 class="title">What I do</h2>
  <p class="sub">Automating the path from commit to production, and watching it once it's there.</p>
  <div class="cards3">
    <div class="card do"><div class="ic">&#9881;</div><h3>CI/CD automation</h3><p>Jenkins pipelines with Maven, SonarQube quality gates and Nexus artifact storage, triggered by GitHub webhooks.</p></div>
    <div class="card do"><div class="ic">&#128230;</div><h3>Containerization</h3><p>Docker image builds, container networking and versioned releases through Docker Hub.</p></div>
    <div class="card do"><div class="ic">&#9729;</div><h3>AWS and monitoring</h3><p>EC2, VPC, IAM, S3 and Lambda, with CloudWatch alarms and SNS alerts.</p></div>
  </div>
  <h2 class="title" style="margin-top:64px;font-size:1.8rem">Tech stack</h2>
  <div class="stack" style="margin-top:28px">
    <div class="card"><h3>CI/CD and source control</h3><div class="chips"><span>Jenkins</span><span>Git</span><span>GitHub</span><span>Maven</span><span>SonarQube</span><span>Nexus</span></div></div>
    <div class="card"><h3>Containers and IaC</h3><div class="chips"><span>Docker</span><span>Kubernetes</span><span>Terraform</span><span>Ansible</span></div></div>
    <div class="card"><h3>AWS</h3><div class="chips"><span>EC2</span><span>VPC</span><span>S3</span><span>EBS</span><span>RDS</span><span>IAM</span><span>ELB</span><span>Auto Scaling</span><span>Route 53</span><span>CloudFront</span><span>Lambda</span></div></div>
    <div class="card"><h3>Monitoring</h3><div class="chips"><span>CloudWatch</span><span>SNS</span></div></div>
    <div class="card"><h3>Linux and scripting</h3><div class="chips"><span>Linux</span><span>Bash</span><span>Shell</span><span>Tomcat</span><span>SQL</span></div></div>
    <div class="card"><h3>Networking</h3><div class="chips"><span>TCP/IP</span><span>DNS</span><span>HTTP/HTTPS</span><span>Load balancing</span><span>CIDR</span><span>NAT</span></div></div>
  </div>
</section>

<section id="experience">
  <h2 class="title">Experience</h2>
  <p class="sub">Where I've worked on real pipelines and infrastructure.</p>
  <div class="list">
    <div class="card item"><div class="badge">QS</div><div class="body">
      <h3>DevOps Engineer Intern</h3><div class="co">Q Spiders</div><div class="date">Feb 2026 to present</div>
      <ul>
        <li>Built end-to-end Jenkins pipelines with Maven, SonarQube quality gates and Nexus artifact storage.</li>
        <li>Containerized applications with Docker and standardized deployment workflows.</li>
        <li>Provisioned and administered EC2, VPC, IAM, S3 and Lambda.</li>
        <li>Set up CloudWatch and SNS alerting and automated recurring tasks with Bash.</li>
      </ul>
    </div></div>
  </div>
</section>

<section id="education">
  <h2 class="title">Education</h2>
  <div class="list">
    <div class="card item"><div class="badge">BT</div><div class="body">
      <h3>B.Tech in Computer Science and Engineering</h3><div class="co">Siddharth Institute of Engineering and Technology</div><div class="date">Graduated 2026 &middot; CGPA 8.2</div>
      <ul><li>Specialization: Cybersecurity, IoT and Blockchain Technology.</li></ul>
    </div></div>
  </div>
</section>

<section id="projects">
  <h2 class="title">Projects</h2>
  <p class="sub">Hands-on builds across CI/CD, containers and monitoring.</p>
  <div class="cards3">
    <div class="card proj"><h3>CI/CD for a Java web app</h3><p>Jenkins pipeline from commit to live deployment with zero manual release steps. GitHub webhooks trigger every build; Maven handles build, test and packaging; Docker handles deployment.</p><div class="chips"><span>Jenkins</span><span>Maven</span><span>Docker</span><span>GitHub</span></div></div>
    <div class="card proj"><h3>S3 event-driven alarms</h3><p>CloudWatch alarms on S3 activity and error thresholds replace manual log monitoring, with SNS sending real-time alerts on each state change.</p><div class="chips"><span>S3</span><span>CloudWatch</span><span>SNS</span></div></div>
    <div class="card proj"><h3>Dockerized web app deployment</h3><p>Custom Docker images versioned and published to Docker Hub, with container networking, then deployed on EC2 by pulling versioned images.</p><div class="chips"><span>Docker Hub</span><span>Linux</span><span>EC2</span></div></div>
  </div>
</section>

<section id="achievements">
  <h2 class="title">Achievements</h2>
  <p class="sub">Research recognition and certifications.</p>
  <div class="cards3">
    <div class="card ach"><span class="tag">Best Paper Award</span><h3>ICICC-2026</h3><p>"HealthGuard: A Collaborative Machine Learning Approach to Secure Medical Information Across IoT-Driven Healthcare Systems."</p><a href="https://link.springer.com/chapter/10.1007/978-3-032-30008-9_35" target="_blank" rel="noopener">Read the paper</a></div>
    <div class="card ach"><span class="tag">In progress</span><h3>AWS Certified Cloud Practitioner</h3><p>Preparing for the exam to back up my day-to-day AWS work.</p></div>
    <div class="card ach"><span class="tag">Certificates</span><h3>SQL (Basic) and OS Fundamentals</h3><p>SQL (Basic) from HackerRank and Operating System Fundamentals from NPTEL.</p></div>
  </div>
</section>

<section id="contact">
  <div class="contact">
    <div>
      <h2>Contact me</h2>
      <p>I'm looking for DevOps and Cloud Engineer roles. Email is the quickest way to reach me.</p>
      <a class="btn" href="mailto:surendrasomisetty18@gmail.com">Send an email</a>
    </div>
    <div class="lines">
      <a href="mailto:surendrasomisetty18@gmail.com"><small>Email</small>surendrasomisetty18@gmail.com</a>
      <a href="tel:+917095690017"><small>Phone</small>+91 70956 90017</a>
      <a href="https://github.com/surendra-kumar-07" target="_blank" rel="noopener"><small>GitHub</small>github.com/surendra-kumar-07</a>
      <a href="https://linkedin.com/in/somisetty-venkata-surendra-kumar" target="_blank" rel="noopener"><small>LinkedIn</small>somisetty-venkata-surendra-kumar</a>
    </div>
  </div>
</section>
</main>
<footer>&copy; 2026 Somisetty Venkata Surendra Kumar</footer>

<script>
(function(){
  var root=document.documentElement,btn=document.getElementById('theme'),saved=null;
  try{saved=localStorage.getItem('theme')}catch(e){}
  var dark=saved?saved==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;
  function apply(){root.setAttribute('data-theme',dark?'dark':'light');btn.innerHTML=dark?'&#9728;':'&#9790;';}
  btn.addEventListener('click',function(){dark=!dark;apply();try{localStorage.setItem('theme',dark?'dark':'light')}catch(e){}});
  apply();
})();
</script>
</body>
</html>
