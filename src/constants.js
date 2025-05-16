// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Experience Section Logo's
import aksaLogo from './assets/company_logo/aksa_logo.png';

// Education Section Logo's
import custLogo from './assets/education_logo/cust_logo.png';

// Project Section Logo's
import p1 from './assets/work_logo/p1.png';
import p2 from './assets/work_logo/p2.png';
import p3 from './assets/work_logo/p3.png';
import p5 from './assets/work_logo/p5.png';
import p4 from './assets/work_logo/p4.png';
import p6 from './assets/work_logo/p6.png';
import p8 from './assets/work_logo/p8.png';
import p9 from './assets/work_logo/p9.png';
import p11 from './assets/work_logo/p11.png';
import p10 from './assets/work_logo/p10.png';
import p7 from './assets/work_logo/p7.png';  
import p12 from './assets/work_logo/p12.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Python', logo: pythonLogo }, 
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: aksaLogo,
      role: "Frontend Developer",
      company: "Aksa Sds",
      desc: "Developed dynamic and scalable web applications using the ReactJS framework, handling both frontend development. Collaborated with cross-functional teams to build responsive UI, implement RESTFUL APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Redux",
        "API's",
      ],
    },
  ];
  
  export const education = [
    {
     
    
      id: 1,
      img: custLogo,
      school: "Capital University Of Science& Technology, Islamabad",
      date: "Aug 2017 - Dec 2023",
      desc: "I completed my Bachelor's degree in Computer Science (BSCS) from CUST UNIVERSITY Of Science & Technology, Islamabad. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. projects that applied theoretical concepts to real-world problems.",
      degree: "BSCS(Computer Science) ",
    },
    
    
      
  ];
  
  export const projects = [
    {
      id: 0,
      title: "INFOTECH Landing Page",
      description:
        "Built a fully responsive static website using HTML5 and CSS3, featuring a top navigation bar with “Menu,” “Login,” and “Sign Up” controls and a prominent brand header (“INFOTECH”). The website also includes an image slider, a “About Us” section, and a footer with contact information and social media links.",
      image: p1,
      tags: ["HTML", "CSS"],
      github: "https://github.com/hamzahf123/InfoTech-landing-page",
      webapp: "https://infotechpk.netlify.app/",
    },
    {
      id: 1,
      title: "Portfolio Landing Page",
      description:
        "Simple portfolio landing page built with HTML and CSS.",
      image: p2,
      tags: [ "HTML", "CSS"],
      github: "https://github.com/hamzahf123/portfolio_landingPage",
      webapp: "https://cssportfoliopk.netlify.app/",
    },
    {
      id: 2,
      title: "Tic Tac Toe Game",
      description:
        "I built a fully interactive, browserbased TicTacToe game using vanilla HTML5, CSS3, and JavaScript. The application features a clean, responsive design that adapts to different screen sizes, intuitive clicktoplay controls, and realtime win/tie detection. Core skills demonstrated include DOM manipulation, event handling, gamestate logic, and UI/UX design. Players can start a new game at any time, and a dynamically displayed message declares the winner or tie and offers a “New Game” button to reset the board.",
      image: p3,
      tags: [ "HTML", "CSS", "JavaScript"],
      github: "https://github.com/hamzahf123/Tic-Tac-Game",
      webapp: "https://mytictacpk.netlify.app/",
    },
    {
      id: 3,
      title: "Online Book Store",
      description:
        "An interactive and visually appealing e-commerce website for an online bookstore, developed as a personal project to demonstrate front-end web development skills. The site features a dynamic homepage with a promotional banner, interactive product carousels for featured and newly arrived books, and sections for client reviews and blog content. Built with HTML, CSS, and JavaScript, and enhanced using Swiper.js for responsive sliders and Font Awesome for iconography.",
      image: p4,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/hamzahf123/OnlineBookStore",
      webapp: "https://bcs173031hamzaferoze.netlify.app/",
    },
    {
      id: 4,
      title: "Music Player",
      description:
        "A sleek and interactive music player website designed to provide a seamless audio experience for users. This project features an intuitive user interface with modern UI/UX elements, allowing users to browse, play, and manage their favorite tracks effortlessly. Built using HTML, CSS, and JavaScript, the player supports essential functionalities like play, pause, skip, volume control, and playlist creation",
      image: p5,
      tags: [ "HTML", "CSS", "JavaScript"],
      github: "https://github.com/hamzahf123/MusicApp",
      webapp: "https://mysongspk.netlify.app/",
    },
    {
      id: 5,
      title: "Pinterest Clone",
      description:
        "A visually engaging Pinterest-inspired platform designed to allow users to discover, save, and share images effortlessly. This project replicates key functionalities of Pinterest, including image uploads, pin creation, categorized boards, and a dynamic search feature.Built with HTML, CSS, and JavaScript for a sleek and responsive front-end, the site ensures a seamless user experience across devices",
      image: p6,
      tags: ["HTML", "CSS", "JavaScript", ],
      github: "https://github.com/hamzahf123/Pinterest",
      webapp: "https://mypinterest.netlify.app/",
    },
    {
      id: 6,
      title: "Movie Search App",
      description:
        "A dynamic, responsive web application that enables users to discover, search, and explore detailed information about movies.Technologies Used: React, Vite, Tailwind CSS, TMDB API, React Router, Context API.The key features of this  app includes Real-time movie search with auto-suggestions,Detailed movie pages featuring trailers, cast, and ratings Responsive design optimized for variousdevices Client-side routing for seamless navigation",
      image: p8,
      tags: ["HTML", "CSS", "JavaScript", "ReactJs", "API", ],
      github: "https://github.com/hamzahf123/MovieAppReactjs",
      webapp: "https://mymoviespk.netlify.app/",
    },
    {
      id: 7,
      title: "UI Dashboard",
      description:
        "A responsive and interactive web dashboard built using ReactJS.Developed a modular, component-based user interface , designed for data visualization and user interaction. Implemented modern web development best practices including ES modules, responsive layout via viewport configuration, and scalable project structure. The application serves as a base for interactive dashboards and can be extended with charting libraries like Chart.js",
      image: p9,
      tags: [ "HTML", "CSS", "Javascript", "ReactJS", ],
      github: "https://github.com/hamzahf123/UiDashboardReactjs",
      webapp: "https://myuidashboardpk.netlify.app/",
    },
    {
      id: 8,
      title: "Codepen Clone",
      description:
        " A fully interactive front-end development playground inspired by CodePen, designed to allow users to write, preview, and share HTML, CSS, and JavaScript code snippets in real time. This project features a responsive and user-friendly interface where developers can experiment with code and see live updates instantly.Built using modern web technologies like ReactJS, it supports a split-screen editor for seamless coding and debugging. The platform also includes functionalities such as syntax highlighting, auto-saving, and a customizable workspace to enhance user productivity.",
      image: p11,
      tags: [ "HTML", "CSS", "Javascript", "ReactJS", ],
      github: "https://github.com/hamzahf123/CodepenCloneReactJS",
      webapp: "https://mycodepenpk.netlify.app/",
    },

     {
      id: 9,
      title: "UltraEdit Software Landing Page",
      description:
        "A simple landing page built with HTML and CSS. The page features a clean and modern design, and is optimized for both mobile and desktop devices.",
      image: p10,
      tags: [ "HTML", "CSS", "Javascript" ],
      github: "https://github.com/hamzahf123/CssGrid",
      webapp: "https://myultraedit98.netlify.app/",
    },
     {
      id: 10,
      title: "Nike Landing Page",
      description:
        "A simple landing page built with ReactJS. The page features a clean and modern design, and is optimized for both mobile and desktop devices.",
      image: p7,
      tags: [ "HTML", "CSS", "Javascript", "ReactJs" ],
      github: "https://github.com/hamzahf123/NikeShoesReactjs",
      webapp: "https://mynikeshoespk.netlify.app/",
    },
     {
      id: 11,
      title: "Weather App",
      description:
        "A responsive and interactive weather forecasting web application developed using React and Vite. The app fetches real-time weather data based on the user's location or search query, providing current conditions such as temperature, humidity, and weather status. Designed with a clean UI, it ensures seamless user experience across devices. Built with performance in mind, leveraging Vite's fast development environment and modular architecture for scalable and maintainable code.",
      image: p12,
      tags: [ "HTML", "CSS", "Javascript", "ReactJs" , "API"],
      github: "https://github.com/hamzahf123/WeatherAppReactjs",
      webapp: "https://myweatherappto.netlify.app/",
    },
  ];  