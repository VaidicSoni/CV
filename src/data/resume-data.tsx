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
        "Assessed IT security vulnerabilities, improved password protection using Hashcat, developed a web app for dynamic data visualization, and implemented RabbitMQ for asynchronous task processing, reducing API response times by 40%.",
    },
    {
      company: "Pink Flower Higher Secondary School",
      badges: ["Indore, India"],
      title: "Data Engineering Intern",
      start: "June 2022",
      end: "June 2023",
      description:
        "Designed and managed data pipelines, automated ETL processes using Python and SQL, created interactive Power BI dashboards, and optimized database queries to improve report generation speed by 40%.",
    },
    {
      company: "Pink Flower Higher Secondary School",
      badges: ["Indore, India"],
      title: "Teaching Assistant",
      start: "June 2022",
      end: "June 2023",
      description:
        "Mentored high school students on open-source development, taught HTTP and TCP/IP concepts, wrote Python scripts for automating grade transfers, and provided training in Git and GitHub.",
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
      description: "Built a responsive portfolio website showcasing projects and technical skills, implementing JavaScript animations.",
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
      description: "Supervise a residence hall floor, serve as an emergency contact, and organize student engagement programs.",
    },
    {
      title: "Information Desk Assistant",
      location: "Texas State University",
      start: "Jan 2024",
      end: "May 2024",
      description: "Managed administrative tasks, coordinated schedules, and provided campus information to visitors.",
    }
  ]
}