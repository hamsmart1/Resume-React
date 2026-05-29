import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [lang, setLang] = useState('th'); // Default to Thai language
  const [activeTab, setActiveTab] = useState('experience');
  const [showContact, setShowContact] = useState(false);

  const translations = {
    en: {
      availableForHire: 'Ready to Collaborate',
      roleTitle: 'Software Developer (AI & Data)',
      major: 'Digital and Information Technology',
      faculty: 'Faculty of Engineering and Technology',
      institution: 'Panyapiwat Institute of Management [PIM]',
      phone: 'Phone',
      email: 'Email',
      linkedin: 'LinkedIn Profile',
      linktree: 'Linktree Portals',
      downloadResume: 'Download Resume (PDF)',
      tabExperience: '💼 Experience',
      tabEducation: '🎓 Education',
      tabProjects: '🚀 Projects',
      tabSkills: '⚡ Skills',
      tabDownloads: '📥 Documents',
      experienceTitle: 'Work Experience',
      educationTitle: 'Education History',
      projectsTitle: 'Featured Projects',
      skillsTitle: 'Skills & Competencies',
      downloadsTitle: 'Official Documents & Downloads',
      downloadsDesc: 'Access and download verified copies of resumes, portfolios, and certifications. Sensitive records are request-only.',
      gpaxLabel: 'GPAX',
      outstanding: 'Outstanding Academic Standing',
      downloadBtnText: 'Download',
      internshipSmart: 'Internship at Smarttelcoms Co., Ltd.',
      internshipCP: 'Internship at CP ALL Public Company Limited',
      levelProficient: 'Proficient',
      levelIntermediate: 'Intermediate',
      levelAdvanced: 'Advanced',
      levelNative: 'Native Language',
      levelGood: 'Good Command (CEFR C1)',
      address: 'Bangkok, Thailand',
      sourceCode: 'View Source',
      requestTrans: 'Request',
      requestDoc: 'Request Academic Transcript',
      showContact: 'Show Contact & Socials',
      hideContact: 'Hide Contact Details',
    },
    th: {
      availableForHire: 'พร้อมร่วมสร้างสรรค์ผลงาน',
      roleTitle: 'นักพัฒนาซอฟต์แวร์ (AI & Data)',
      major: 'สาขาวิชาเทคโนโลยีดิจิทัลและสารสนเทศ',
      faculty: 'คณะวิศวกรรมศาสตร์และเทคโนโลยี',
      institution: 'สถาบันการจัดการปัญญาภิวัฒน์ [PIM]',
      phone: 'เบอร์โทรศัพท์',
      email: 'อีเมล',
      linkedin: 'โปรไฟล์ LinkedIn',
      linktree: 'ลิงก์รวมผลงาน Linktree',
      downloadResume: 'ดาวน์โหลด Resume (PDF)',
      tabExperience: '💼 ประสบการณ์',
      tabEducation: '🎓 การศึกษา',
      tabProjects: '🚀 ผลงานโครงการ',
      tabSkills: '⚡ ทักษะ',
      tabDownloads: '📥 เอกสารดาวน์โหลด',
      experienceTitle: 'ประสบการณ์การทำงาน',
      educationTitle: 'ประวัติการศึกษา',
      projectsTitle: 'โครงการและผลงานเด่น',
      skillsTitle: 'ทักษะและความสามารถ',
      downloadsTitle: 'เอกสารอย่างเป็นทางการและดาวน์โหลด',
      downloadsDesc: 'เข้าถึงและดาวน์โหลดเอกสารยืนยันอย่างเป็นทางการ ทั้ง Resume, แฟ้มสะสมผลงาน (Portfolio) และใบรับรองภาษาอังกฤษ เอกสารสำคัญสามารถติดต่อขอได้ผ่านทางอีเมล',
      gpaxLabel: 'เกรดเฉลี่ยสะสม (GPAX)',
      outstanding: 'ผลการเรียนดีเยี่ยมโดดเด่น',
      downloadBtnText: 'ดาวน์โหลด',
      internshipSmart: 'ฝึกงานที่ บริษัท สมาร์ทเทลคอม จำกัด',
      internshipCP: 'ฝึกงานที่ บริษัท ซีพี ออลล์ จำกัด (มหาชน)',
      levelProficient: 'เชี่ยวชาญ',
      levelIntermediate: 'ระดับกลาง',
      levelAdvanced: 'ระดับสูง',
      levelNative: 'ภาษาแม่',
      levelGood: 'สื่อสารได้ดี (CEFR C1)',
      address: 'กรุงเทพมหานคร, ประเทศไทย',
      sourceCode: 'ดูโค้ดผลงาน',
      requestTrans: 'ขอเอกสาร',
      requestDoc: 'ติดต่อขอใบแสดงผลการเรียน',
      showContact: 'แสดงช่องทางการติดต่อและโซเชียล',
      hideContact: 'ซ่อนข้อมูลการติดต่อ',
    }
  };

  const t = translations[lang];

  const contactInfo = {
    name: 'Nonrawit Yodthong',
    email: 'hamsmart47@gmail.com',
    phone: '(+66) 65-xxx-xxxx', // Enhanced phone number masking for privacy
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
      logo: '🏢',
      tasks: [
        {
          title: lang === 'en' ? 'System Testing & Maintenance' : 'การทดสอบและบำรุงรักษาระบบ',
          desc: lang === 'en' 
            ? 'Tested and maintained an OCR system (Optical Character Recognition) to ensure high quality and functionality.'
            : 'ทดสอบและดูแลรักษาระบบ OCR (ระบบรู้จำอักขระด้วยแสง) เพื่อความถูกต้องและมีประสิทธิภาพสูงสุดในการใช้งาน',
        },
        {
          title: lang === 'en' ? 'Data Management' : 'การจัดการข้อมูล',
          desc: lang === 'en'
            ? 'Prepared and labeled datasets for text similarity and object detection projects.'
            : 'จัดเตรียมและทำความสะอาดข้อมูล (Labeling Datasets) สำหรับโครงการตรวจสอบความคล้ายคลึงของข้อความและการตรวจจับวัตถุ',
        },
        {
          title: lang === 'en' ? 'Cloud Utilization' : 'การใช้งานระบบคลาวด์',
          desc: lang === 'en'
            ? 'Utilized AWS services (including data management) to support project requirements.'
            : 'ใช้งานบริการ AWS (รวมถึงระบบการจัดการข้อมูล) เพื่อสนับสนุนโครงการและระบบงานต่างๆ',
        },
        {
          title: lang === 'en' ? 'Model Evaluation' : 'การประเมินประสิทธิภาพโมเดล',
          desc: lang === 'en'
            ? 'Collaborated to test and evaluate AI/ML models (ResNet50, Mobile NetV3).'
            : 'ร่วมทดสอบและประเมินผลประสิทธิภาพของโมเดล AI/ML (ResNet50, Mobile NetV3)',
        },
        {
          title: lang === 'en' ? 'Predictive Analysis' : 'การวิเคราะห์เชิงพยากรณ์',
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
      logo: '🏪',
      tasks: [
        {
          title: lang === 'en' ? 'Customer Service' : 'การบริการลูกค้า',
          desc: lang === 'en'
            ? 'Provided front-line customer service, efficiently addressing inquiries to ensure a positive customer experience.'
            : 'ให้บริการลูกค้าหน้าร้าน ให้คำแนะนำและแก้ไขปัญหาต่างๆ เพื่อสร้างประสบการณ์ที่ดีให้กับลูกค้า',
        },
        {
          title: lang === 'en' ? 'Store Operations' : 'การจัดการภายในร้าน',
          desc: lang === 'en'
            ? 'Managed daily store operations, including stock checks, product sorting, and counter service.'
            : 'บริหารจัดการงานภายในร้านประจำวัน รวมถึงการตรวจเช็คสต็อกสินค้า การจัดเรียงสินค้า และการบริการเคาน์เตอร์แคชเชียร์',
        },
        {
          title: lang === 'en' ? 'Multitasking & Efficiency' : 'การทำงานหลากหลายและการจัดเวลา',
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
      title: 'Grocery Store Management System',
      titleTh: 'ระบบบริหารจัดการร้านค้าของชำ',
      desc: 'Led a project to design and build a complete desktop application in Java. Personally coded 100% of the functionality, designed the database, mapped the flowcharts, and engineered the GUI.',
      descTh: 'ทำหน้าที่เป็นหัวหน้าโครงการและออกแบบพัฒนาระบบบริหารจัดการร้านค้าของชำด้วยภาษา Java คีย์ความสำเร็จคือการเขียนโค้ดเอง 100% วางแผนผังโครงสร้างฐานข้อมูล และออกแบบส่วนต่อประสานกราฟิก (GUI) ทั้งหมด',
      tags: ['Java', 'Java Swing', 'Database Design', 'Software Engineering'],
      link: 'https://github.com/hamsmart1/Grocery-Store-Project-with-JAVA-CLASS-Complete-',
      icon: '🛒'
    },
    {
      title: 'PosturePal Demo',
      titleTh: 'เดโม PosturePal ตรวจจับท่านั่งเพื่อสุขภาพ',
      desc: 'Developed a posture monitoring and alignment demo application, aiming to utilize technology to promote workspace ergonomics and healthy posture habits.',
      descTh: 'พัฒนาเดโมแอปพลิเคชันช่วยตรวจจับท่านั่งและการจัดสรีระทางร่างกายในการนั่งทำงาน เพื่อส่งเสริมการบริหารการยศาสตร์ (Ergonomics) และป้องกันโรคออฟฟิศซินโดรม',
      tags: ['Python', 'Computer Vision', 'Ergonomics', 'UI Design'],
      link: 'https://github.com/hamsmart1/posturepal-demo',
      icon: '🧘'
    },
    {
      title: 'PC SHOP Ecommerce Website',
      titleTh: 'เว็บไซต์อีคอมเมิร์ซ PC SHOP',
      desc: 'Developed a full online storefront for computer hardware sales. Includes dynamic catalog browsing and standard order flow designs.',
      descTh: 'พัฒนาระบบร้านค้าออนไลน์และจัดจำหน่ายอุปกรณ์คอมพิวเตอร์แบบอีคอมเมิร์ซ รวมถึงการจัดแสดงแค็ตตาล็อกสินค้าและการออกแบบระบบตะกร้าสั่งซื้อแบบไดนามิก',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'E-Commerce'],
      link: 'https://github.com/hamsmart1/PCSHOP',
      icon: '💻'
    },
    {
      title: 'MyColoringBook Application',
      titleTh: 'แอปพลิเคชันสมุดระบายสีของฉัน',
      desc: 'Designed and implemented an interactive coloring book application for children, incorporating customizable brush colors and responsive canvas mechanics.',
      descTh: 'ออกแบบและพัฒนาระบบสมุดภาพระบายสีจำลองเพื่อการเรียนรู้ มีฟังก์ชันในการสลับถังสีและการปรับจานสีได้อย่างลื่นไหลบนบอร์ดแสดงผลที่เป็นระบบตอบสนองหน้าจอ',
      tags: ['Java', 'Graphic GUI', 'Canvas API', 'Software Development'],
      link: 'https://github.com/hamsmart1/MyColoringBook',
      icon: '🎨'
    }
  ];

  const skillCategories = [
    {
      title: t.skillsTitle + ' (Technical Skills)',
      skills: [
        { name: 'Python', level: t.levelProficient },
        { name: 'Java', level: t.levelProficient },
        { name: 'HTML & CSS', level: t.levelProficient },
        { name: 'JavaScript (React)', level: t.levelIntermediate },
        { name: 'MySQL', level: t.levelIntermediate },
        { name: 'Agile Software Development', level: t.levelIntermediate },
        { name: 'System Troubleshooting', level: t.levelAdvanced },
        { name: 'System Maintenance', level: t.levelAdvanced },
        { name: 'Basic Networking', level: t.levelIntermediate },
      ],
    },
    {
      title: lang === 'en' ? 'Specialized AI & Data Knowledge' : 'ความรู้เฉพาะทางด้าน AI & Data',
      skills: [
        { name: 'Optical Character Recognition (OCR)', level: t.levelAdvanced },
        { name: 'Object Detection', level: t.levelIntermediate },
        { name: 'Text Similarity & NLP', level: t.levelIntermediate },
        { name: 'Model Evaluation (ResNet50, MobileNetV3)', level: t.levelIntermediate },
        { name: 'AWS Services', level: t.levelIntermediate },
      ],
    },
    {
      title: lang === 'en' ? 'Soft Skills & Languages' : 'ทักษะส่วนบุคคลและภาษา',
      skills: [
        { name: lang === 'en' ? 'Thai' : 'ภาษาไทย', level: t.levelNative },
        { name: lang === 'en' ? 'English' : 'ภาษาอังกฤษ', level: t.levelGood },
        { name: lang === 'en' ? 'Teamwork & Collaboration' : 'การทำงานร่วมกันเป็นทีม', level: t.levelAdvanced },
        { name: lang === 'en' ? 'Problem-Solving' : 'การแก้ไขปัญหาเฉพาะหน้า', level: t.levelAdvanced },
        { name: lang === 'en' ? 'Time Management' : 'การบริหารเวลา', level: t.levelAdvanced },
        { name: lang === 'en' ? 'Customer Service' : 'การบริการลูกค้า', level: t.levelAdvanced },
      ],
    },
  ];

  const downloadFiles = [
    {
      name: lang === 'en' ? 'Resume (PDF)' : 'เรซูเม่อย่างเป็นทางการ (PDF)',
      path: '/files/Resume_PRO.pdf',
      icon: '📄',
      desc: lang === 'en' ? 'Standard resume layout.' : 'รูปแบบเรซูเม่ทางการที่เป็นมาตรฐานสากล',
      type: 'download'
    },
    {
      name: lang === 'en' ? 'Infographic Resume (PDF)' : 'เรซูเม่รูปแบบอินโฟกราฟิก (PDF)',
      path: '/files/Resume_infoGraphic.pdf',
      icon: '🎨',
      desc: lang === 'en' ? 'Visual infographics resume layout.' : 'รูปแบบเรซูเม่ที่เน้นกราฟิกและสีสันสวยงาม',
      type: 'download'
    },
    {
      name: lang === 'en' ? 'Full Portfolio (PDF)' : 'แฟ้มสะสมผลงานฉบับเต็ม (PDF)',
      path: '/files/Portfolio.pdf',
      icon: '💼',
      desc: lang === 'en' ? 'Project showcase and certificates collection.' : 'การรวบรวมผลงานโครงการและเกียรติบัตรต่างๆ',
      type: 'download'
    },
    {
      name: lang === 'en' ? 'CEFR C1 Certificate (PDF)' : 'ใบรับรองระดับภาษาอังกฤษ CEFR C1 (PDF)',
      path: '/files/CEFR_C1.pdf',
      icon: '🇬🇧',
      desc: lang === 'en' ? 'Official English language proficiency certificate.' : 'ใบรับรองความสามารถทางภาษาอังกฤษระดับ C1 อย่างเป็นทางการ',
      type: 'download'
    },
    {
      name: lang === 'en' ? 'Academic Transcript' : 'ใบแสดงผลการเรียน (Transcript)',
      path: 'mailto:hamsmart47@gmail.com?subject=Request for Academic Transcript - Nonrawit Yodthong',
      icon: '🏫',
      desc: lang === 'en' ? 'Official transcripts are available upon request.' : 'ใบแสดงผลการเรียนอย่างเป็นทางการ (สามารถติดต่อขอได้ผ่านทางอีเมล)',
      type: 'email'
    },
  ];

  return (
    <div className="app-container">
      <div className="glass-grid"></div>
      
      {/* Sidebar / Profile Area */}
      <aside className="profile-sidebar">
        <div className="sidebar-card neon-card">
          {/* Language Switcher */}
          <div className="language-switcher-container">
            <div className="language-switcher">
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
          </div>

          <div className="profile-img-container">
            <img src={contactInfo.profileImg} alt={contactInfo.name} className="profile-image glow-profile" />
          </div>
          
          <h1 className="name neon-text">{contactInfo.name}</h1>
          <h2 className="title">{t.roleTitle}</h2>
          
          <div className="meta-info">
            <p className="university">🎓 {education.institution}</p>
            <p className="faculty">⚙️ {education.faculty}</p>
            <p className="major">📚 {education.degree}</p>
            <p className="address">📍 {contactInfo.address}</p>
          </div>

          <button 
            className="mobile-contact-toggle"
            onClick={() => setShowContact(!showContact)}
          >
            {showContact ? t.hideContact : t.showContact}
          </button>

          <div className={`collapsible-contact ${showContact ? 'expanded' : ''}`}>
            <hr className="divider" />

            <ul className="contact-list">
              <li>
                <span className="icon">📞</span>
                <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
              </li>
              <li>
                <span className="icon">✉️</span>
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </li>
              <li>
                <span className="icon">🔗</span>
                <a href={contactInfo.linkedin} target="_blank" rel="noreferrer">{t.linkedin}</a>
              </li>
              <li>
                <span className="icon">🌳</span>
                <a href={contactInfo.linktree} target="_blank" rel="noreferrer">{t.linktree}</a>
              </li>
            </ul>

            <div className="quick-download-btn">
              <a href="/files/Resume_PRO.pdf" download className="btn-primary-glow">
                📥 {t.downloadResume}
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="content-area">
        <nav className="tab-navigation neon-nav">
          <button 
            className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            {t.tabExperience}
          </button>
          <button 
            className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            {t.tabEducation}
          </button>
          <button 
            className={`tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            {t.tabProjects}
          </button>
          <button 
            className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            {t.tabSkills}
          </button>
          <button 
            className={`tab-btn ${activeTab === 'downloads' ? 'active' : ''}`}
            onClick={() => setActiveTab('downloads')}
          >
            {t.tabDownloads}
          </button>
        </nav>

        <div className="tab-content-container glass-card">
          {/* Work Experience Tab */}
          {activeTab === 'experience' && (
            <section className="tab-pane active-pane fade-in">
              <h3 className="section-title">{t.experienceTitle}</h3>
              <div className="timeline">
                {experience.map((exp, idx) => (
                  <div className="timeline-item animate-item" key={idx} style={{ animationDelay: `${idx * 0.1}s` }}>
                    <div className="timeline-badge">{exp.logo}</div>
                    <div className="timeline-card">
                      <div className="card-header-flex">
                        <div>
                          <h4 className="role-title">{exp.role}</h4>
                          <h5 className="company-title">{exp.company}</h5>
                        </div>
                        <span className="duration-badge">{exp.duration}</span>
                      </div>
                      <ul className="task-list">
                        {exp.tasks.map((task, tIdx) => (
                          <li key={tIdx}>
                            <strong>{task.title}:</strong> {task.desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education Tab */}
          {activeTab === 'education' && (
            <section className="tab-pane active-pane fade-in">
              <h3 className="section-title">{t.educationTitle}</h3>
              <div className="education-card">
                <div className="edu-header">
                  <div className="edu-icon">🏫</div>
                  <div>
                    <h4>{education.institution}</h4>
                    <h5>{education.degree}</h5>
                    <p className="edu-meta">{education.faculty} | {education.duration}</p>
                  </div>
                </div>
                <div className="gpax-display-card glow-border">
                  <span className="gpax-label">{t.gpaxLabel}</span>
                  <span className="gpax-value neon-glow-text">{education.gpax}</span>
                  <span className="gpax-desc">{t.outstanding}</span>
                </div>
              </div>
            </section>
          )}

          {/* Projects Tab (God-tier addition) */}
          {activeTab === 'projects' && (
            <section className="tab-pane active-pane fade-in">
              <h3 className="section-title">{t.projectsTitle}</h3>
              <div className="projects-grid">
                {projects.map((proj, idx) => (
                  <div className="project-card animate-item" key={idx} style={{ animationDelay: `${idx * 0.15}s` }}>
                    <div className="project-card-header">
                      <div className="project-icon">{proj.icon}</div>
                      <div>
                        <h4>{lang === 'en' ? proj.title : proj.titleTh}</h4>
                        <div className="project-tags">
                          {proj.tags.map((tag, tIdx) => (
                            <span className="project-tag" key={tIdx}>{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="project-desc">{lang === 'en' ? proj.desc : proj.descTh}</p>
                    <div className="project-footer">
                      <a href={proj.link} target="_blank" rel="noreferrer" className="btn-project-link">
                        🐙 {t.sourceCode}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <section className="tab-pane active-pane fade-in">
              <h3 className="section-title">{t.skillsTitle}</h3>
              <div className="skills-grid">
                {skillCategories.map((cat, idx) => (
                  <div className="skills-category-card" key={idx}>
                    <h4 className="category-title">{cat.title}</h4>
                    <div className="skills-badges">
                      {cat.skills.map((skill, sIdx) => (
                        <div className="skill-badge" key={sIdx}>
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-level">{skill.level}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Downloads Tab */}
          {activeTab === 'downloads' && (
            <section className="tab-pane active-pane fade-in">
              <h3 className="section-title">{t.downloadsTitle}</h3>
              <p className="section-desc">{t.downloadsDesc}</p>
              <div className="downloads-grid">
                {downloadFiles.map((file, idx) => (
                  <div className="download-card" key={idx}>
                    <div className="download-icon-box">{file.icon}</div>
                    <div className="download-info">
                      <h4>{file.name}</h4>
                      <p>{file.desc}</p>
                    </div>
                    {file.type === 'email' ? (
                      <a href={file.path} className="btn-download btn-request">
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
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
