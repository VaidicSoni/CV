import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Vaidic Soni",
  initials: "VS",
  location: "San Marcos, TX, USA",
  locationLink: "https://maps.app.goo.gl/Lo6SiXVX4y6cLtDo8",
  about:
    "Computer Science and Mathematics at Texas State University",
  summary:
    "I see technology as a vast, intricate system of ideas, constantly evolving and reshaping the way we interact with the world. Writing code feels like adding a tiny piece to that ever-expanding puzzle, an endless cycle of breaking, fixing, and refining. There is something fascinating about optimization, the pursuit of making things run just a little bit faster, a little bit smoother. I enjoy deconstructing complex problems, whether in software, automation, or even abstract thought experiments that challenge conventional logic. Outside of programming, I get lost in philosophical questions about AI and ethics, analyzing patterns, and strategizing over a chessboard where every move is a new possibility. I thrive on curiosity, conversation, and the satisfaction of finding elegant solutions to difficult problems. If you ever want to talk about systems, intelligence, or the beauty of a well-structured idea, I am always open to exploring new perspectives. :)",
  avatarUrl: "https://www.gravatar.com/avatar/9ec53619ce7f65853cea22675dda802d?s=200&d=identicon",
  personalWebsiteUrl: "https://vaidicsoni.github.io/",
  contact: {
    email: "wse11@txstate.edu.edu",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/VaidicSoni",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vaidic-soni1004/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Texas State University",
      degree: "Bachelor's Degree in Compter Science and Minor in Mathematics",
      start: "2023",
      end: "2027",
    },
  ],
  work: [
    {
      company: "Goldman Sachs",
      badges: ["Remote"],
      title: "Software Engineering Virtual Experience",
      start: "June 2024",
      end: "July 2024",
      description:
        "Assessed IT security at Goldman Sachs, identifying password hashing vulnerabilities using Hashcat and recommending enhancements. Built a dynamic web app with HTML, CSS, and JavaScript (ES6+), implementing local caching and Docker for scalability. Developed a RabbitMQ-based message queue, cutting API response times by 40% and improving system reliability.",
    },
    {
      company: "Pink Flower Higher Secondary School",
      badges: ["Indore, India"],
      title: "Data Engineering Intern",
      start: "June 2022",
      end: "June 2023",
      description:
        "Designed and managed data pipelines for student performance data, ensuring efficient storage and retrieval. Developed ETL processes using Python and SQL to automate data collection. Created interactive visualizations with Power BI and Excel, enhancing data-driven decision-making. Optimized database queries, improving report generation speed by 40%.",
    },
    {
      company: "Pink Flower Higher Secondary School",
      badges: ["Indore, India"],
      title: "Teaching Assistant",
      start: "June 2022",
      end: "June 2023",
      description:
        "Mentored high school students on open-source development, internet basics (HTTP, TCP/IP), and digital literacy. Automated grade transfers by writing Python scripts to parse data from third-party edtech software. Guided students on version control workflows in Git and GitHub, including repository management.",
    }
  ],
  skills: [
    "C++",
    "Python",
    "Java",
    "SQL",
    "MySQL",
    "HTML",
    "CSS",
    "JavaScript",
    "Linux",
    "Git",
    "Assembly Language"
  ],
  projects: [
    {
      title: "Weather Anytime",
      techStack: ["Python", "PyQt5", "OpenWeather API"],
      description: "Developed a real-time weather application with location-based search and dynamic UI using PyQt5.",
      link: {
        label: "github.com",
        href: "https://github.com/VaidicSoni/Weather-App",
      },
    },
    {
      title: "Portfolio Website",
      techStack: ["HTML", "CSS", "JavaScript"],
      description: "Built a responsive portfolio website showcasing projects and technical skills, implementing HTML, CSS, and JavaScript animations.",
      link: {
        label: "github.com",
        href: "https://vaidicsoni.github.io/",
      },
    }
  ],
  campusActivities: [
    {
      title: "Resident Assistant",
      location: "Texas State University",
      start: "Aug 2024",
      end: "Present",
      description: "• Supervise and support a residence hall floor of 25+ students, serving as a 24/7 emergency contact and resource. • Trained in trauma detection, CPR, and emergency response to ensure resident safety and crisis management. • Plan and lead community programs, fostering student engagement, teamwork, and a supportive living environment.",
    },
    {
      title: "Information Desk Assistant",
      location: "Texas State University",
      start: "Jan 2024",
      end: "May 2024",
      description: "• Managed administrative tasks, including data entry, document preparation, and maintaining organized records. • Maintained an organized workspace and assisted in coordinating schedules to ensure smooth desk operations. • Delivered clear and accurate information about campus services, policies, and upcoming events, enhancing visitor experience and accessibility.",
    }
  ]
}