import React, { useState, useEffect } from 'react';
import './App.css';

// Premium SVG Icons
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const FolderIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="svg-icon folder-icon">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-icon contact-icon-svg">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-icon contact-icon-svg">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-icon contact-icon-svg">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-icon btn-icon-svg">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

const FilePdfIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="svg-icon file-icon-svg">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="search-icon-svg">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const GraduationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
  </svg>
);

const BrainIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-3.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2z"></path>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-3.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2z"></path>
  </svg>
);

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const BriefcaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

const App = () => {
  const [lang, setLang] = useState('th');
  const [theme, setTheme] = useState('dark'); // 'dark' (Midnight Executive) or 'light' (Corporate Clean)
  const [activeSection, setActiveSection] = useState('about');
  const [expCategory, setExpCategory] = useState('all'); // 'all', 'technical', 'business'
  const [projectFilter, setProjectFilter] = useState('all'); // 'all', 'ai', 'software', 'web'
  const [projectSearch, setProjectSearch] = useState('');
  
  // Contact Form States
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formStatus, setFormStatus] = useState('idle'); // 'idle', 'submitting', 'success'
  const [toast, setToast] = useState({ show: false, message: '' });

  const triggerToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => {
      setToast({ show: false, message: '' });
    }, 4000);
  };

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
      experienceTitle: 'Professional Experience',
      educationTitle: 'Education',
      projectsTitle: 'Featured Projects',
      skillsTitle: 'Expertise Matrix',
      downloadsTitle: 'Executive Credentials',
      downloadsDesc: 'Access and download verified copies of resumes, portfolios, and certifications.',
      gpaxLabel: 'GPAX',
      outstanding: 'Outstanding Academic Standing',
      downloadBtnText: 'Download',
      requestTrans: 'Request File',
      sourceCode: 'Source Code',
      address: 'Bangkok, Thailand',
      aboutText: 'A results-oriented Software Developer specializing in AI and Data engineering. Proven track record in designing optical character recognition (OCR) pipelines, developing computer vision models, and building high-performance Java/React systems. Academic gold medalist at Panyapiwat Institute of Management with a passion for robust architecture and automation.',
      aboutTextTh: 'นักพัฒนาซอฟต์แวร์ที่มีความมุ่งมั่นและเชี่ยวชาญด้านวิศวกรรม AI และข้อมูล มีประสบการณ์ทำงานจริงในการพัฒนาและทดสอบระบบคอมพิวเตอร์วิทัศน์ (Computer Vision), ระบบประมวลผลคำอักขระ (OCR) และสถาปัตยกรรมเว็บแอปพลิเคชัน โดดเด่นด้วยผลการเรียนเกียรตินิยมเหรียญทอง สถาบันการจัดการปัญญาภิวัฒน์ มีความมุ่งมั่นในการเขียนโค้ดที่ถูกต้อง สะอาด และระบบงานอัตโนมัติ',
      filterAll: 'All Positions',
      filterTech: 'AI & Data Engineering',
      filterBiz: 'Sales & Customer Operations',
      searchPlaceholder: 'Search projects by tag or title...',
      allCat: 'All Projects',
      aiCat: 'AI & OCR Pipelines',
      softwareCat: 'Software Systems',
      webCat: 'Web & Ecommerce',
      statsTitle: 'Key Professional Indicators',
      contactTitle: 'Executive Inquiry',
      contactDesc: 'Send an invitation to interview or connect regarding professional opportunities. Inquiries are processed instantly.',
      formName: 'Full Name',
      formEmail: 'Email Address',
      formMsg: 'Message Description',
      formSubmit: 'Submit Inquiry',
      formSending: 'Sending Inquiry...',
      formSent: 'Inquiry Logged Successfully!',
      themeTooltip: 'Switch Theme'
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
      navAbout: 'ข้อมูลส่วนตัว',
      navExperience: 'ประสบการณ์ทำงาน',
      navEducation: 'การศึกษา',
      navProjects: 'ผลงานโครงการ',
      navSkills: 'ทักษะและความสามารถ',
      navDownloads: 'เอกสารดาวน์โหลด',
      experienceTitle: 'ประสบการณ์ทำงานอย่างเป็นทางการ',
      educationTitle: 'ประวัติการศึกษา',
      projectsTitle: 'ผลงานโครงการเด่น',
      skillsTitle: 'ทักษะความชำนาญจำแนกหมวดหมู่',
      downloadsTitle: 'เอกสารอ้างอิงอย่างเป็นทางการ',
      downloadsDesc: 'เข้าถึงและดาวน์โหลด Resume, Portfolio และใบรับรองต่างๆ อย่างเป็นทางการ',
      gpaxLabel: 'เกรดเฉลี่ยสะสม (GPAX)',
      outstanding: 'ผลการเรียนดีเยี่ยมโดดเด่น',
      downloadBtnText: 'ดาวน์โหลด',
      requestTrans: 'ขอเอกสาร',
      sourceCode: 'ดูโค้ดผลงาน',
      address: 'กรุงเทพมหานคร, ประเทศไทย',
      aboutText: 'A results-oriented Software Developer specializing in AI and Data engineering. Proven track record in designing optical character recognition (OCR) pipelines, developing computer vision models, and building high-performance Java/React systems. Academic gold medalist at Panyapiwat Institute of Management with a passion for robust architecture and automation.',
      aboutTextTh: 'นักพัฒนาซอฟต์แวร์ที่มีความมุ่งมั่นและเชี่ยวชาญด้านวิศวกรรม AI และข้อมูล มีประสบการณ์ทำงานจริงในการพัฒนาและทดสอบระบบคอมพิวเตอร์วิทัศน์ (Computer Vision), ระบบประมวลผลคำอักขระ (OCR) และสถาปัตยกรรมเว็บแอปพลิเคชัน โดดเด่นด้วยผลการเรียนเกียรตินิยมเหรียญทอง สถาบันการจัดการปัญญาภิวัฒน์ มีความมุ่งมั่นในการเขียนโค้ดที่ถูกต้อง สะอาด และระบบงานอัตโนมัติ',
      filterAll: 'ทุกตำแหน่ง',
      filterTech: 'ด้านเทคโนโลยีและ AI',
      filterBiz: 'ด้านบริหารลูกค้าและฝ่ายขาย',
      searchPlaceholder: 'ค้นหาผลงานโครงการ...',
      allCat: 'โครงการทั้งหมด',
      aiCat: 'ระบบ AI & OCR',
      softwareCat: 'ซอฟต์แวร์ / Java',
      webCat: 'เว็บแอปพลิเคชัน',
      statsTitle: 'ดัชนีชี้วัดความสามารถหลัก (KPIs)',
      contactTitle: 'ช่องทางติดต่อและนัดสัมภาษณ์งาน',
      contactDesc: 'ส่งข้อมูลความต้องการสัมภาษณ์งานหรือข้อเสนอร่วมงานโดยตรง ระบบจะทำการบันทึกข้อมูลแบบเรียลไทม์',
      formName: 'ชื่อ-นามสกุล ผู้ติดต่อ',
      formEmail: 'อีเมลติดต่อกลับ',
      formMsg: 'ข้อความ/รายละเอียดข้อเสนอ',
      formSubmit: 'ส่งข้อมูลติดต่อกลับ',
      formSending: 'กำลังส่งข้อมูล...',
      formSent: 'บันทึกข้อมูลการติดต่อเรียบร้อยแล้ว!',
      themeTooltip: 'เปลี่ยนธีมสี'
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

  const stats = [
    { label: lang === 'en' ? 'GPAX Outstanding' : 'ผลการศึกษาเหรียญทอง', value: '3.89', icon: <GraduationIcon /> },
    { label: lang === 'en' ? 'English Level' : 'ความสามารถภาษาอังกฤษ', value: 'CEFR C1', icon: <GlobeIcon /> },
    { label: lang === 'en' ? 'AI Project Core' : 'โปรเจกต์ AI & OCR หลัก', value: '2 ระบบ', icon: <BrainIcon /> },
    { label: lang === 'en' ? 'Core Code Integrity' : 'การพัฒนาโค้ดระบบหลัก', value: '100%', icon: <BriefcaseIcon /> },
  ];

  const experience = [
    {
      company: lang === 'en' ? 'Smarttelcoms Co., Ltd.' : 'บริษัท สมาร์ทเทลคอม จำกัด',
      role: lang === 'en' ? 'AI & DATA Intern' : 'นักศึกษาฝึกงานด้าน AI & DATA',
      duration: lang === 'en' ? 'JANUARY - MAY 2025' : 'มกราคม - พฤษภาคม 2568',
      type: 'technical',
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
      type: 'business',
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
      category: 'ai'
    },
    {
      title: 'Grocery Store Management System',
      titleTh: 'ระบบบริหารจัดการร้านค้าของชำ',
      desc: 'Led a project to design and build a complete desktop application in Java. Personally coded 100% of the functionality, designed the database, mapped the flowcharts, and engineered the GUI.',
      descTh: 'ทำหน้าที่เป็นหัวหน้าโครงการและออกแบบพัฒนาระบบบริหารจัดการร้านค้าของชำด้วยภาษา Java คีย์ความสำเร็จคือการเขียนโค้ดเอง 100% วางแผนผังโครงสร้างฐานข้อมูล และออกแบบส่วนต่อประสานกราฟิก (GUI) ทั้งหมด',
      tags: ['Java', 'Java Swing', 'Database Design', 'Software Engineering'],
      link: 'https://github.com/hamsmart1/Grocery-Store-Project-with-JAVA-CLASS-Complete-',
      category: 'software'
    },
    {
      title: 'PosturePal Demo',
      titleTh: 'เดโม PosturePal ตรวจจับท่านั่งเพื่อสุขภาพ',
      desc: 'Developed a posture monitoring and alignment demo application, aiming to utilize technology to promote workspace ergonomics and healthy posture habits.',
      descTh: 'พัฒนาเดโมแอปพลิเคชันช่วยตรวจจับท่านั่งและการจัดสรีระทางร่างกายในการนั่งทำงาน เพื่อส่งเสริมการบริหารการยศาสตร์ (Ergonomics) และป้องกันโรคออฟฟิศซินโดรม',
      tags: ['Python', 'Computer Vision', 'Ergonomics', 'UI Design'],
      link: 'https://github.com/hamsmart1/posturepal-demo',
      category: 'ai'
    },
    {
      title: 'PC SHOP Ecommerce Website',
      titleTh: 'เว็บไซต์อีคอมเมิร์ซ PC SHOP',
      desc: 'Developed a full online storefront for computer hardware sales. Includes catalog browsing and shopping cart flows.',
      descTh: 'พัฒนาระบบร้านค้าออนไลน์และจัดจำหน่ายอุปกรณ์คอมพิวเตอร์แบบอีคอมเมิร์ซ รวมถึงการจัดแสดงแค็ตตาล็อกสินค้าและการออกแบบระบบตะกร้าสั่งซื้อ',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'E-Commerce'],
      link: 'https://github.com/hamsmart1/PCSHOP',
      category: 'web'
    },
    {
      title: 'MyColoringBook Application',
      titleTh: 'แอปพลิเคชันสมุดระบายสีของฉัน',
      desc: 'Designed and implemented an interactive coloring book application for children, incorporating customizable brush colors and responsive canvas mechanics.',
      descTh: 'ออกแบบและพัฒนาระบบสมุดภาพระบายสีจำลองเพื่อการเรียนรู้ มีฟังก์ชันในการสลับถังสีและการปรับจานสีได้อย่างลื่นไหลบนบอร์ดแสดงผลที่เป็นระบบตอบสนองหน้าจอ',
      tags: ['Java', 'Graphic GUI', 'Canvas API', 'Software Development'],
      link: 'https://github.com/hamsmart1/MyColoringBook',
      category: 'software'
    }
  ];

  const skillCategories = [
    {
      title: 'Technical Skills',
      titleTh: 'ทักษะด้านเทคนิคคอร์ฟังก์ชัน',
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
      type: 'download',
      size: '52 KB'
    },
    {
      name: lang === 'en' ? 'Infographic Resume (PDF)' : 'เรซูเม่รูปแบบอินโฟกราฟิก (PDF)',
      path: '/files/Resume_infoGraphic.pdf',
      desc: lang === 'en' ? 'Visual infographics resume layout.' : 'รูปแบบเรซูเม่ที่เน้นกราฟิกและสีสันสวยงาม',
      type: 'download',
      size: '1.2 MB'
    },
    {
      name: lang === 'en' ? 'Full Portfolio (PDF)' : 'แฟ้มสะสมผลงานฉบับเต็ม (PDF)',
      path: '/files/Portfolio.pdf',
      desc: lang === 'en' ? 'Project showcase and certificates collection.' : 'การรวบรวมผลงานโครงการและเกียรติบัตรต่างๆ',
      type: 'download',
      size: '4.8 MB'
    },
    {
      name: lang === 'en' ? 'CEFR C1 Certificate (PDF)' : 'ใบรับรองระดับภาษาอังกฤษ CEFR C1 (PDF)',
      path: '/files/CEFR_C1.pdf',
      desc: lang === 'en' ? 'Official English language proficiency certificate.' : 'ใบรับรองความสามารถทางภาษาอังกฤษระดับ C1 อย่างเป็นทางการ',
      type: 'download',
      size: '220 KB'
    },
    {
      name: lang === 'en' ? 'Academic Transcript' : 'ใบแสดงผลการเรียน (Transcript)',
      path: 'mailto:hamsmart47@gmail.com?subject=Request for Academic Transcript - Nonrawit Yodthong',
      desc: lang === 'en' ? 'Official transcripts are available upon request.' : 'ใบแสดงผลการเรียนอย่างเป็นทางการ (สามารถติดต่อขอได้ผ่านทางอีเมล)',
      type: 'email',
      size: 'Upon Request'
    },
  ];

  // Set active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'education', 'projects', 'skills', 'downloads', 'contact'];
      const scrollPosition = window.scrollY + 250;

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

  // Filter experience logic
  const filteredExperience = experience.filter(exp => {
    if (expCategory === 'all') return true;
    return exp.type === expCategory;
  });

  // Filter & Search projects logic
  const filteredProjects = projects.filter(proj => {
    const matchesCategory = projectFilter === 'all' || proj.category === projectFilter;
    const searchLower = projectSearch.toLowerCase();
    const matchesSearch = proj.title.toLowerCase().includes(searchLower) || 
                          proj.titleTh.toLowerCase().includes(searchLower) ||
                          proj.desc.toLowerCase().includes(searchLower) ||
                          proj.descTh.toLowerCase().includes(searchLower) ||
                          proj.tags.some(tag => tag.toLowerCase().includes(searchLower));
    return matchesCategory && matchesSearch;
  });

  // Contact Form Submission Handler
  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage) {
      triggerToast(lang === 'en' ? 'Please fill in all fields.' : 'กรุณากรอกข้อมูลให้ครบถ้วนก่อนส่ง');
      return;
    }
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      triggerToast(lang === 'en' ? 'Inquiry logged successfully!' : 'บันทึกข้อมูลการติดต่อเรียบร้อยแล้ว!');
      // Save locally as a mock data pipeline demonstration
      const messages = JSON.parse(localStorage.getItem('ham_inquiries') || '[]');
      messages.push({ name: formName, email: formEmail, message: formMessage, timestamp: new Date().toISOString() });
      localStorage.setItem('ham_inquiries', JSON.stringify(messages));
      
      setFormName('');
      setFormEmail('');
      setFormMessage('');
      setTimeout(() => setFormStatus('idle'), 2000);
    }, 1500);
  };

  return (
    <div className={`app-container theme-${theme}`}>
      {/* Toast Notification */}
      {toast.show && (
        <div className="toast-notification">
          <span>{toast.message}</span>
        </div>
      )}

      {/* Sticky Left Sidebar */}
      <aside className="sidebar">
        <div>
          {/* Controls Bar */}
          <div className="sidebar-controls">
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

            {/* Theme Toggle Button */}
            <button 
              className="theme-toggle"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              title={t.themeTooltip}
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
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
            <a 
              href="#contact" 
              className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={() => setActiveSection('contact')}
            >
              — {lang === 'en' ? 'Contact' : 'ช่องทางติดต่อ'}
            </a>
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="sidebar-footer">
          <div className="contact-info">
            <div className="contact-item">
              <MapPinIcon />
              <span>{contactInfo.address}</span>
            </div>
            <div className="contact-item">
              <MailIcon />
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </div>
            <div className="contact-item">
              <PhoneIcon />
              <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
            </div>
          </div>
          <div className="social-links">
            <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" className="social-link">
              <LinkedInIcon /> LinkedIn
            </a>
            <a href={contactInfo.linktree} target="_blank" rel="noreferrer" className="social-link">
              <ExternalLinkIcon /> Linktree
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        {/* About Section */}
        <section id="about" className="section">
          <div className="section-header">
            <span className="section-num">01 /</span>
            <h3 className="section-title">{lang === 'en' ? 'Executive Profile' : 'ประวัติส่วนตัว'}</h3>
          </div>
          <p className="intro-text">
            {lang === 'en' ? t.aboutText : t.aboutTextTh}
          </p>

          {/* Key Indicators Dashboard */}
          <div className="dashboard-title-wrapper">
            <span className="dashboard-line"></span>
            <span className="dashboard-title-text">{t.statsTitle}</span>
            <span className="dashboard-line"></span>
          </div>
          <div className="stats-grid">
            {stats.map((stat, idx) => (
              <div className="stat-card" key={idx}>
                <div className="stat-icon-wrap">
                  {stat.icon}
                </div>
                <div className="stat-info">
                  <span className="stat-val">{stat.value}</span>
                  <span className="stat-lbl">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="experience" className="section">
          <div className="section-header">
            <span className="section-num">02 /</span>
            <h3 className="section-title">{t.experienceTitle}</h3>
          </div>

          {/* Timeline Filters */}
          <div className="filter-pill-container">
            <button 
              className={`filter-pill ${expCategory === 'all' ? 'active' : ''}`}
              onClick={() => setExpCategory('all')}
            >
              {t.filterAll}
            </button>
            <button 
              className={`filter-pill ${expCategory === 'technical' ? 'active' : ''}`}
              onClick={() => setExpCategory('technical')}
            >
              {t.filterTech}
            </button>
            <button 
              className={`filter-pill ${expCategory === 'business' ? 'active' : ''}`}
              onClick={() => setExpCategory('business')}
            >
              {t.filterBiz}
            </button>
          </div>

          <div className="timeline-container">
            <div className="timeline-line"></div>
            {filteredExperience.map((exp, idx) => (
              <div className="timeline-item" key={idx}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <span className="timeline-time">{exp.duration}</span>
                    <span className="timeline-company">{exp.company}</span>
                  </div>
                  <h4 className="timeline-role">{exp.role}</h4>
                  <ul className="timeline-tasks">
                    {exp.tasks.map((task, tIdx) => (
                      <li key={tIdx} className="timeline-task-item">{task.desc}</li>
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
          <div className="education-card">
            <div className="edu-header">
              <span className="edu-duration">{education.duration}</span>
              <div className="edu-gpax-box">
                <span className="gpax-lbl">{t.gpaxLabel}</span>
                <span className="gpax-val">{education.gpax}</span>
              </div>
            </div>
            <h4 className="edu-degree">{education.degree}</h4>
            <h5 className="edu-institution">{education.institution}</h5>
            <p className="edu-faculty">{education.faculty}</p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <div className="section-header">
            <span className="section-num">04 /</span>
            <h3 className="section-title">{t.projectsTitle}</h3>
          </div>

          {/* Interactive Project Tools */}
          <div className="projects-controls">
            {/* Search */}
            <div className="project-search-container">
              <SearchIcon />
              <input 
                type="text" 
                id="project-search-input"
                name="projectSearch"
                className="project-search-input"
                placeholder={t.searchPlaceholder}
                value={projectSearch}
                onChange={(e) => setProjectSearch(e.target.value)}
              />
              {projectSearch && (
                <button className="clear-search" onClick={() => setProjectSearch('')}>×</button>
              )}
            </div>
            {/* Categories */}
            <div className="project-categories">
              <button 
                className={`category-pill ${projectFilter === 'all' ? 'active' : ''}`}
                onClick={() => setProjectFilter('all')}
              >
                {t.allCat}
              </button>
              <button 
                className={`category-pill ${projectFilter === 'ai' ? 'active' : ''}`}
                onClick={() => setProjectFilter('ai')}
              >
                {t.aiCat}
              </button>
              <button 
                className={`category-pill ${projectFilter === 'software' ? 'active' : ''}`}
                onClick={() => setProjectFilter('software')}
              >
                {t.softwareCat}
              </button>
              <button 
                className={`category-pill ${projectFilter === 'web' ? 'active' : ''}`}
                onClick={() => setProjectFilter('web')}
              >
                {t.webCat}
              </button>
            </div>
          </div>

          {/* Projects Display */}
          <div className="projects-grid">
            {filteredProjects.map((proj, idx) => (
              <div className="project-card" key={idx}>
                <div className="project-card-header">
                  <div className="project-folder">
                    <FolderIcon />
                  </div>
                  <div className="project-links">
                    <a href={proj.link} target="_blank" rel="noreferrer" className="project-link-icon" title="View Source Code">
                      <GithubIcon />
                    </a>
                  </div>
                </div>
                <div className="project-card-body">
                  <h4 className="project-title">{lang === 'en' ? proj.title : proj.titleTh}</h4>
                  <p className="project-desc">{lang === 'en' ? proj.desc : proj.descTh}</p>
                </div>
                <div className="project-card-footer">
                  <div className="project-tags">
                    {proj.tags.map((tag, tIdx) => (
                      <span className="project-tag" key={tIdx}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filteredProjects.length === 0 && (
            <div className="empty-projects-state">
              <p>{lang === 'en' ? 'No projects match your search/filter criteria.' : 'ไม่พบโครงการที่ตรงกับคำค้นหาหรือตัวกรองที่เลือก'}</p>
            </div>
          )}
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
                <div className="download-row-main">
                  <div className="download-file-icon">
                    <FilePdfIcon />
                  </div>
                  <div className="download-info">
                    <h4>{file.name}</h4>
                    <p>{file.desc}</p>
                  </div>
                </div>
                <div className="download-action">
                  <span className="file-size-badge">{file.size}</span>
                  {file.type === 'email' ? (
                    <a href={file.path} className="btn-download btn-email">
                      <MailIcon /> {t.requestTrans}
                    </a>
                  ) : (
                    <a href={file.path} download className="btn-download">
                      <DownloadIcon /> {t.downloadBtnText}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="section">
          <div className="section-header">
            <span className="section-num">07 /</span>
            <h3 className="section-title">{t.contactTitle}</h3>
          </div>
          <div className="contact-form-card">
            <p className="contact-form-desc">{t.contactDesc}</p>
            <form onSubmit={handleContactSubmit} className="contact-form">
              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="name-input">{t.formName}</label>
                  <input 
                    type="text" 
                    id="name-input"
                    className="form-control" 
                    placeholder="e.g. Dr. John Doe"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email-input">{t.formEmail}</label>
                  <input 
                    type="email" 
                    id="email-input"
                    className="form-control" 
                    placeholder="e.g. john.doe@corporate.com"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message-input">{t.formMsg}</label>
                <textarea 
                  id="message-input"
                  rows="4" 
                  className="form-control textarea" 
                  placeholder={lang === 'en' ? 'Describe the project details or interview schedule...' : 'พิมพ์รายละเอียดงานหรือตารางเวลาที่ขอนัดหมายสัมภาษณ์...'}
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  required
                />
              </div>
              <button 
                type="submit" 
                className="btn-submit"
                disabled={formStatus === 'submitting'}
              >
                {formStatus === 'submitting' ? (
                  <>
                    <span className="spinner"></span> {t.formSending}
                  </>
                ) : formStatus === 'success' ? (
                  t.formSent
                ) : (
                  t.formSubmit
                )}
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
