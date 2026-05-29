import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [lang, setLang] = useState('th');
  const [activeSection, setActiveSection] = useState('about');

  const translations = {
    en: {
      roleTitle: 'Software Developer (AI & Data)',
      major: 'Digital and Information Technology',
      faculty: 'Faculty of Engineering and Technology',
      institution: 'Panyapiwat Institute of Management [PIM]',
      phone: 'Phone',
      email: 'Email',
      linkedin: 'LinkedIn',
      linktree: 'Linktree',
      downloadResume: 'Download Resume (PDF)',
      navAbout: 'About',
      navExperience: 'Experience',
      navEducation: 'Education',
      navProjects: 'Projects',
      navSkills: 'Skills',
      navDownloads: 'Documents',
      experienceTitle: 'Work Experience',
      educationTitle: 'Education',
      projectsTitle: 'Featured Projects',
      skillsTitle: 'Skills & Competencies',
      downloadsTitle: 'Official Documents',
      downloadsDesc: 'Access and download verified copies of resumes, portfolios, and certifications.',
      gpaxLabel: 'GPAX',
      outstanding: 'Outstanding Academic Standing',
      downloadBtnText: 'Download',
      requestTrans: 'Request',
      sourceCode: 'Source Code',
      address: 'Bangkok, Thailand',
      aboutText: 'A dedicated Software Developer specializing in AI and Data engineering. Experienced in building computer vision systems, OCR pipelines, and web applications. Passionate about creating clean, highly performant code and automated systems.',
      aboutTextTh: 'นักพัฒนาซอฟต์แวร์ที่มีความมุ่งมั่นและเชี่ยวชาญด้านวิศวกรรม AI และข้อมูล มีประสบการณ์ในการพัฒนาระบบคอมพิวเตอร์วิทัศน์ (Computer Vision), ระบบประมวลผลอักขระ (OCR) และเว็บแอปพลิเคชัน มุ่งเน้นการเขียนโค้ดที่สะอาด มีประสิทธิภาพ และการสร้างระบบอัตโนมัติ'
    },
    th: {
      roleTitle: 'นักพัฒนาซอฟต์แวร์ (AI & Data)',
      major: 'สาขาวิชาเทคโนโลยีดิจิทัลและสารสนเทศ',
      faculty: 'คณะวิศวกรรมศาสตร์และเทคโนโลยี',
      institution: 'สถาบันการจัดการปัญญาภิวัฒน์ [PIM]',
      phone: 'เบอร์โทรศัพท์',
      email: 'อีเมล',
      linkedin: 'LinkedIn',
      linktree: 'Linktree',
      downloadResume: 'ดาวน์โหลด Resume (PDF)',
      navAbout: 'เกี่ยวกับ',
      navExperience: 'ประสบการณ์',
      navEducation: 'การศึกษา',
      navProjects: 'ผลงานโครงการ',
      navSkills: 'ทักษะความสามารถ',
      navDownloads: 'เอกสารดาวน์โหลด',
      experienceTitle: 'ประสบการณ์การทำงาน',
      educationTitle: 'ประวัติการศึกษา',
      projectsTitle: 'โครงการและผลงานเด่น',
      skillsTitle: 'ทักษะและความชำนาญ',
      downloadsTitle: 'เอกสารดาวน์โหลดอย่างเป็นทางการ',
      downloadsDesc: 'เข้าถึงและดาวน์โหลด Resume, Portfolio และใบรับรองต่างๆ อย่างเป็นทางการ',
      gpaxLabel: 'เกรดเฉลี่ยสะสม (GPAX)',
      outstanding: 'ผลการเรียนดีเยี่ยมโดดเด่น',
      downloadBtnText: 'ดาวน์โหลด',
      requestTrans: 'ขอเอกสาร',
      sourceCode: 'ดูโค้ดผลงาน',
      address: 'กรุงเทพมหานคร, ประเทศไทย',
      aboutText: 'A dedicated Software Developer specializing in AI and Data engineering. Experienced in building computer vision systems, OCR pipelines, and web applications. Passionate about creating clean, highly performant code and automated systems.',
      aboutTextTh: 'นักพัฒนาซอฟต์แวร์ที่มีความมุ่งมั่นและเชี่ยวชาญด้านวิศวกรรม AI และข้อมูล มีประสบการณ์ในการพัฒนาระบบคอมพิวเตอร์วิทัศน์ (Computer Vision), ระบบประมวลผลอักขระ (OCR) และเว็บแอปพลิเคชัน มุ่งเน้นการเขียนโค้ดที่สะอาด มีประสิทธิภาพ และการสร้างระบบอัตโนมัติ'
    }
  };

  const t = translations[lang];

  const contactInfo = {
    name: 'Nonrawit Yodthong',
    email: 'hamsmart47@gmail.com',
    phone: '(+66) 65-xxx-xxxx',
    linkedin: 'https://www.linkedin.com/in/nonrawit/',
    linktree: 'https://linktr.ee/Hammy_kun',
    profileImg: 'https://i.imgur.com/dQjdGnZ.jpg',
    address: t.address,
  };

  const experience = [
    {
      company: lang === 'en' ? 'Smarttelcoms Co., Ltd.' : 'บริษัท สมาร์ทเทลคอม จำกัด',
      role: lang === 'en' ? 'AI & DATA Intern' : 'นักศึกษาฝึกงานด้าน AI & DATA',
      duration: lang === 'en' ? 'JANUARY - MAY 2025' : 'มกราคม - พฤษภาคม 2568',
      tasks: [
        {
          desc: lang === 'en' 
            ? 'Tested and maintained an OCR system (Optical Character Recognition) to ensure high quality and functionality.'
            : 'ทดสอบและดูแลรักษาระบบ OCR (ระบบรู้จำอักขระด้วยแสง) เพื่อความถูกต้องและมีประสิทธิภาพสูงสุดในการใช้งาน',
        },
        {
          desc: lang === 'en'
            ? 'Prepared and labeled datasets for text similarity and object detection projects.'
            : 'จัดเตรียมและทำความสะอาดข้อมูล (Labeling Datasets) สำหรับโครงการตรวจสอบความคล้ายคลึงของข้อความและการตรวจจับวัตถุ',
        },
        {
          desc: lang === 'en'
            ? 'Utilized AWS services (including data management) to support project requirements.'
            : 'ใช้งานบริการ AWS (รวมถึงระบบการจัดการข้อมูล) เพื่อสนับสนุนโครงการและระบบงานต่างๆ',
        },
        {
          desc: lang === 'en'
            ? 'Collaborated to test and evaluate AI/ML models (ResNet50, Mobile NetV3).'
            : 'ร่วมทดสอบและประเมินผลประสิทธิภาพของโมเดล AI/ML (ResNet50, Mobile NetV3)',
        },
        {
          desc: lang === 'en'
            ? 'Trained and evaluated machine learning models for predictive analysis.'
            : 'ฝึกสอนและประเมินผลโมเดล Machine Learning สำหรับการวิเคราะห์เชิงพยากรณ์ข้อมูล',
        },
      ],
    },
    {
      company: lang === 'en' ? 'CP ALL Public Company Limited' : 'บริษัท ซีพี ออลล์ จำกัด (มหาชน)',
      role: lang === 'en' ? 'Customer Service & Sales Intern' : 'นักศึกษาฝึกงานด้านบริการลูกค้าและฝ่ายขาย',
      duration: lang === 'en' ? 'MARCH - MAY 2024' : 'มีนาคม - พฤษภาคม 2567',
      tasks: [
        {
          desc: lang === 'en'
            ? 'Provided front-line customer service, efficiently addressing inquiries to ensure a positive customer experience.'
            : 'ให้บริการลูกค้าหน้าร้าน ให้คำแนะนำและแก้ไขปัญหาต่างๆ เพื่อสร้างประสบการณ์ที่ดีให้กับลูกค้า',
        },
        {
          desc: lang === 'en'
            ? 'Managed daily store operations, including stock checks, product sorting, and counter service.'
            : 'บริหารจัดการงานภายในร้านประจำวัน รวมถึงการตรวจเช็คสต็อกสินค้า การจัดเรียงสินค้า และการบริการเคาน์เตอร์แคชเชียร์',
        },
        {
          desc: lang === 'en'
            ? 'Handled various operational tasks (cleaning, product delivery, cafe duties), demonstrating strong organizational and time management skills.'
            : 'ปฏิบัติงานต่างๆ ร่วมกัน (ทำความสะอาด จัดส่งสินค้า ทำงานในส่วนคาเฟ่) แสดงให้เห็นถึงทักษะการจัดระเบียบงานและการบริหารเวลาที่ดีเยี่ยม',
        },
      ],
    },
  ];

  const education = {
    institution: t.institution,
    degree: lang === 'en' 
      ? 'Bachelor of Science Program in Digital Information and Technology'
      : 'หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาเทคโนโลยีดิจิทัลและสารสนเทศ',
    faculty: t.faculty,
    gpax: '3.89',
    duration: lang === 'en' ? '2022 - Present' : '2565 - ปัจจุบัน',
  };

  const projects = [
    {
      title: 'Manga Web Translator',
      titleTh: 'โปรแกรมแปลภาษาบนหน้าเว็บเวลาอ่านมังงะ',
      desc: 'Developed a Manifest V3 Chrome Extension that translates manga speech bubbles directly on target web pages. Supports local Tesseract.js OCR and multimodal Gemini 1.5 Flash translations.',
      descTh: 'พัฒนาส่วนขยาย Chrome Extension (Manifest V3) สำหรับลากครอบตัดและแปลภาษาบนหน้าเว็บเวลาอ่านมังงะเป็นภาษาไทยโดยตรง รองรับทั้งระบบโลคัล OCR (Tesseract.js) และโมเดลปัญญาประดิษฐ์วิเคราะห์ภาพหลายรูปแบบ Gemini 1.5 Flash',
      tags: ['Chrome Extension', 'Manifest V3', 'Tesseract.js OCR', 'Gemini AI', 'JavaScript'],
      link: 'https://github.com/hamsmart1/Manga-Web-Translator',
    },
    {
      title: 'Grocery Store Management System',
      titleTh: 'ระบบบริหารจัดการร้านค้าของชำ',
      desc: 'Led a project to design and build a complete desktop application in Java. Personally coded 100% of the functionality, designed the database, mapped the flowcharts, and engineered the GUI.',
      descTh: 'ทำหน้าที่เป็นหัวหน้าโครงการและออกแบบพัฒนาระบบบริหารจัดการร้านค้าของชำด้วยภาษา Java คีย์ความสำเร็จคือการเขียนโค้ดเอง 100% วางแผนผังโครงสร้างฐานข้อมูล และออกแบบส่วนต่อประสานกราฟิก (GUI) ทั้งหมด',
      tags: ['Java', 'Java Swing', 'Database Design', 'Software Engineering'],
      link: 'https://github.com/hamsmart1/Grocery-Store-Project-with-JAVA-CLASS-Complete-',
    },
    {
      title: 'PosturePal Demo',
      titleTh: 'เดโม PosturePal ตรวจจับท่านั่งเพื่อสุขภาพ',
      desc: 'Developed a posture monitoring and alignment demo application, aiming to utilize technology to promote workspace ergonomics and healthy posture habits.',
      descTh: 'พัฒนาเดโมแอปพลิเคชันช่วยตรวจจับท่านั่งและการจัดสรีระทางร่างกายในการนั่งทำงาน เพื่อส่งเสริมการบริหารการยศาสตร์ (Ergonomics) และป้องกันโรคออฟฟิศซินโดรม',
      tags: ['Python', 'Computer Vision', 'Ergonomics', 'UI Design'],
      link: 'https://github.com/hamsmart1/posturepal-demo',
    },
    {
      title: 'PC SHOP Ecommerce Website',
      titleTh: 'เว็บไซต์อีคอมเมิร์ซ PC SHOP',
      desc: 'Developed a full online storefront for computer hardware sales. Includes catalog browsing and shopping cart flows.',
      descTh: 'พัฒนาระบบร้านค้าออนไลน์และจัดจำหน่ายอุปกรณ์คอมพิวเตอร์แบบอีคอมเมิร์ซ รวมถึงการจัดแสดงแค็ตตาล็อกสินค้าและการออกแบบระบบตะกร้าสั่งซื้อ',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'E-Commerce'],
      link: 'https://github.com/hamsmart1/PCSHOP',
    },
    {
      title: 'MyColoringBook Application',
      titleTh: 'แอปพลิเคชันสมุดระบายสีของฉัน',
      desc: 'Designed and implemented an interactive coloring book application for children, incorporating customizable brush colors and responsive canvas mechanics.',
      descTh: 'ออกแบบและพัฒนาระบบสมุดภาพระบายสีจำลองเพื่อการเรียนรู้ มีฟังก์ชันในการสลับถังสีและการปรับจานสีได้อย่างลื่นไหลบนบอร์ดแสดงผลที่เป็นระบบตอบสนองหน้าจอ',
      tags: ['Java', 'Graphic GUI', 'Canvas API', 'Software Development'],
      link: 'https://github.com/hamsmart1/MyColoringBook',
    }
  ];

  const skillCategories = [
    {
      title: 'Technical Skills',
      titleTh: 'ทักษะด้านเทคนิค',
      skills: [
        { name: 'Python', level: 'Proficient' },
        { name: 'Java', level: 'Proficient' },
        { name: 'HTML & CSS', level: 'Proficient' },
        { name: 'JavaScript (React)', level: 'Intermediate' },
        { name: 'MySQL', level: 'Intermediate' },
        { name: 'Agile Software Dev', level: 'Intermediate' },
        { name: 'System Troubleshooting', level: 'Advanced' },
        { name: 'System Maintenance', level: 'Advanced' },
        { name: 'Basic Networking', level: 'Intermediate' },
      ],
    },
    {
      title: 'Specialized AI & Data',
      titleTh: 'ความเชี่ยวชาญ AI & ข้อมูล',
      skills: [
        { name: 'Optical Character Recognition (OCR)', level: 'Advanced' },
        { name: 'Object Detection', level: 'Intermediate' },
        { name: 'Text Similarity & NLP', level: 'Intermediate' },
        { name: 'Model Evaluation', level: 'Intermediate' },
        { name: 'AWS Services', level: 'Intermediate' },
      ],
    },
    {
      title: 'Soft Skills & Languages',
      titleTh: 'ทักษะส่วนบุคคลและภาษา',
      skills: [
        { name: lang === 'en' ? 'Thai' : 'ภาษาไทย', level: 'Native' },
        { name: lang === 'en' ? 'English' : 'ภาษาอังกฤษ', level: 'CEFR C1' },
        { name: lang === 'en' ? 'Collaboration' : 'การทำงานร่วมกัน', level: 'Advanced' },
        { name: lang === 'en' ? 'Problem-Solving' : 'การแก้ปัญหา', level: 'Advanced' },
        { name: lang === 'en' ? 'Time Management' : 'การจัดสรรเวลา', level: 'Advanced' },
        { name: lang === 'en' ? 'Customer Service' : 'การบริการลูกค้า', level: 'Advanced' },
      ],
    },
  ];

  const downloadFiles = [
    {
      name: lang === 'en' ? 'Resume (PDF)' : 'เรซูเม่อย่างเป็นทางการ (PDF)',
      path: '/files/Resume_PRO.pdf',
      desc: lang === 'en' ? 'Official standard resume layout.' : 'รูปแบบเรซูเม่ทางการที่เป็นมาตรฐานสากล',
      type: 'download'
    },
    {
      name: lang === 'en' ? 'Infographic Resume (PDF)' : 'เรซูเม่รูปแบบอินโฟกราฟิก (PDF)',
      path: '/files/Resume_infoGraphic.pdf',
      desc: lang === 'en' ? 'Visual infographics resume layout.' : 'รูปแบบเรซูเม่ที่เน้นกราฟิกและสีสันสวยงาม',
      type: 'download'
    },
    {
      name: lang === 'en' ? 'Full Portfolio (PDF)' : 'แฟ้มสะสมผลงานฉบับเต็ม (PDF)',
      path: '/files/Portfolio.pdf',
      desc: lang === 'en' ? 'Project showcase and certificates collection.' : 'การรวบรวมผลงานโครงการและเกียรติบัตรต่างๆ',
      type: 'download'
    },
    {
      name: lang === 'en' ? 'CEFR C1 Certificate (PDF)' : 'ใบรับรองระดับภาษาอังกฤษ CEFR C1 (PDF)',
      path: '/files/CEFR_C1.pdf',
      desc: lang === 'en' ? 'Official English language proficiency certificate.' : 'ใบรับรองความสามารถทางภาษาอังกฤษระดับ C1 อย่างเป็นทางการ',
      type: 'download'
    },
    {
      name: lang === 'en' ? 'Academic Transcript' : 'ใบแสดงผลการเรียน (Transcript)',
      path: 'mailto:hamsmart47@gmail.com?subject=Request for Academic Transcript - Nonrawit Yodthong',
      desc: lang === 'en' ? 'Official transcripts are available upon request.' : 'ใบแสดงผลการเรียนอย่างเป็นทางการ (สามารถติดต่อขอได้ผ่านทางอีเมล)',
      type: 'email'
    },
  ];

  // Set active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'education', 'projects', 'skills', 'downloads'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      {/* Sticky Left Sidebar */}
      <aside className="sidebar">
        <div>
          {/* Language Switch */}
          <div className="lang-switcher">
            <button 
              className={`lang-btn ${lang === 'th' ? 'active' : ''}`}
              onClick={() => setLang('th')}
            >
              TH
            </button>
            <button 
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>

          {/* Profile Card */}
          <div className="profile-image-container">
            <img src={contactInfo.profileImg} alt={contactInfo.name} className="profile-image" />
          </div>
          <h1 className="name">{contactInfo.name}</h1>
          <h2 className="title">{t.roleTitle}</h2>

          {/* Sidebar Menu */}
          <nav className="nav-menu">
            <a 
              href="#about" 
              className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => setActiveSection('about')}
            >
              — {t.navAbout}
            </a>
            <a 
              href="#experience" 
              className={`nav-item ${activeSection === 'experience' ? 'active' : ''}`}
              onClick={() => setActiveSection('experience')}
            >
              — {t.navExperience}
            </a>
            <a 
              href="#education" 
              className={`nav-item ${activeSection === 'education' ? 'active' : ''}`}
              onClick={() => setActiveSection('education')}
            >
              — {t.navEducation}
            </a>
            <a 
              href="#projects" 
              className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={() => setActiveSection('projects')}
            >
              — {t.navProjects}
            </a>
            <a 
              href="#skills" 
              className={`nav-item ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={() => setActiveSection('skills')}
            >
              — {t.navSkills}
            </a>
            <a 
              href="#downloads" 
              className={`nav-item ${activeSection === 'downloads' ? 'active' : ''}`}
              onClick={() => setActiveSection('downloads')}
            >
              — {t.navDownloads}
            </a>
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="sidebar-footer">
          <div className="contact-info">
            <span>📍 {contactInfo.address}</span>
            <span>✉️ <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></span>
            <span>📞 <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a></span>
          </div>
          <div className="social-links">
            <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" className="social-link">LINKEDIN</a>
            <a href={contactInfo.linktree} target="_blank" rel="noreferrer" className="social-link">LINKTREE</a>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        {/* About Section */}
        <section id="about" className="section">
          <div className="section-header">
            <span className="section-num">01 /</span>
            <h3 className="section-title">{lang === 'en' ? 'About Me' : 'เกี่ยวกับฉัน'}</h3>
          </div>
          <p className="intro-text">
            {lang === 'en' ? t.aboutText : t.aboutTextTh}
          </p>
        </section>

        {/* Work Experience Section */}
        <section id="experience" className="section">
          <div className="section-header">
            <span className="section-num">02 /</span>
            <h3 className="section-title">{t.experienceTitle}</h3>
          </div>
          <div className="experience-list">
            {experience.map((exp, idx) => (
              <div className="experience-item" key={idx}>
                <div className="exp-time">{exp.duration}</div>
                <div className="exp-details">
                  <h4>{exp.role}</h4>
                  <div className="exp-company">{exp.company}</div>
                  <ul className="exp-tasks">
                    {exp.tasks.map((task, tIdx) => (
                      <li key={tIdx}>{task.desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="section">
          <div className="section-header">
            <span className="section-num">03 /</span>
            <h3 className="section-title">{t.educationTitle}</h3>
          </div>
          <div className="edu-block">
            <div className="edu-time">{education.duration}</div>
            <div className="edu-details">
              <h4>{education.institution}</h4>
              <h5>{education.degree} ({education.faculty})</h5>
              <div className="edu-gpax-box">
                <span className="gpax-val">{education.gpax}</span>
                <span className="gpax-lbl">{t.gpaxLabel}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <div className="section-header">
            <span className="section-num">04 /</span>
            <h3 className="section-title">{t.projectsTitle}</h3>
          </div>
          <div className="projects-grid">
            {projects.map((proj, idx) => (
              <div className="project-row" key={idx}>
                <div className="project-main">
                  <h4>{lang === 'en' ? proj.title : proj.titleTh}</h4>
                  <p className="project-desc">{lang === 'en' ? proj.desc : proj.descTh}</p>
                  <div className="project-tags">
                    {proj.tags.map((tag, tIdx) => (
                      <span className="project-tag" key={tIdx}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="project-action">
                  <a href={proj.link} target="_blank" rel="noreferrer" className="btn-project">
                    {t.sourceCode} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section">
          <div className="section-header">
            <span className="section-num">05 /</span>
            <h3 className="section-title">{t.skillsTitle}</h3>
          </div>
          <div className="skills-container">
            {skillCategories.map((cat, idx) => (
              <div className="skill-group" key={idx}>
                <h4>{lang === 'en' ? cat.title : cat.titleTh}</h4>
                <div className="skill-list">
                  {cat.skills.map((skill, sIdx) => (
                    <div className="skill-card" key={sIdx}>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Downloads Section */}
        <section id="downloads" className="section">
          <div className="section-header">
            <span className="section-num">06 /</span>
            <h3 className="section-title">{t.downloadsTitle}</h3>
          </div>
          <div className="downloads-list">
            {downloadFiles.map((file, idx) => (
              <div className="download-row" key={idx}>
                <div className="download-info">
                  <h4>{file.name}</h4>
                  <p>{file.desc}</p>
                </div>
                {file.type === 'email' ? (
                  <a href={file.path} className="btn-download btn-email">
                    {t.requestTrans}
                  </a>
                ) : (
                  <a href={file.path} download className="btn-download">
                    {t.downloadBtnText}
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
