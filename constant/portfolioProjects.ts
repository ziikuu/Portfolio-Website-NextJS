{/* Metadata of each project */}
export const projects = [
    {
      title: "Smart Hydroponics System",
      url: "https://github.com/ziikuu/Flask-React-Lettuce-Website",
      description:
        "Led development of an IoT-powered hydroponics system with ML-driven predictive analytics. Improved lettuce yield by 10% and reduced manual labor by 77 hours per week through automated monitoring and real-time data insights.",
      image: "/projects/Hydrponics-Hardware.jpg",
      techStack: ["React", "Arduino Cloud", "C++", "TensorFlow", "Python", "Flask", "Firebase", "ESP32", "Docker"],
      imagePosition: "object-center",
      id: "hydroponics",
      //Case Study Metadata
      result: "Delivered system with 95% user satisfaction rate in real-world testing.",
      role: "Team Lead, Principal Investigator, Full Stack Developer",
      team: [
        { name: "Gwyn", role: "(Research Associate, Data Annotator)" },
        { name: "Jay", role: "(Research Associate, Data Annotator)" },
        { name: "Ja", role: "(Researcher)" },
      ],
      type: "Thesis Project",
      longDescription: "Urban hydroponic farming struggles with manual monitoring that causes missed issues and inconsistent harvests. This project built a smart system using IoT and AI/ML to automate monitoring and forecasting, reducing labor while improving crop reliability and sustainability in cities.",
    },
    {
      title: "Avelo Jewelry Repair Shop - Portfolio Website",
      url: "https://avelo-jewelry-portfolio-website.vercel.app/",
      description:
        "I designed and developed a responsive portfolio website to showcase Avelo Jewelry Workshop’s custom creations, making it easier for clients to browse designs and find inspiration for personalized orders. The project highlighted the craftsmanship of the brand while boosting engagement by providing an accessible digital showcase for potential customers.",
      image: "/projects/Avelo-Jewelry-Portfolio.webp",
      techStack: ["Next.js", "Tailwind CSS", "Git", "GitHub", "Vercel"],
      imagePosition: "object-center",
      reverse: true,
      id: "avelo-jewelry",
      //Case Study Metadata
      result: "The website boosted user engagement by giving clients an accessible way to browse jewelry designs online, leading to more inquiries and inspiration for custom orders. It also delivered strong design showcase value by highlighting the craftsmanship of Avelo Jewelry Repair Shop, making the brand’s unique creations visible and memorable to potential customers.",
      role: "Web Developer, Freelancer",
      team: "Solo",
      type: "Freelance Project",
      longDescription: "Designed and developed a responsive portfolio website to showcase the jewelry collections and services of Avelo Jewelry Repair Shop. Focused on creating a clean, modern design that highlights craftsmanship while improving the brand’s online presence. Delivered as a freelance project to support the family business, applying professional web development practices and deployment workflows.",
    },
    {
      title: "Job Application Platform",
      url: "https://github.com/ziikuu/CoESS-LinkUp",
      description:
        "Project Lead for a full-stack job application platform. Managed cross-functional team through complete development lifecycle, integrating front-end and back-end systems with enhanced performance and usability.",
      image: "/projects/CoESS-LinkUp_Hero.png",
      techStack: ["Nuxt.js", "Vue.js", "Git", "GitHub", "Vercel"],
      imagePosition: "object-center",
      id: "job-application",
      //Case Study Metadata
      result: "Project Lead, managed cross-functional team through full development lifecycle.",
      role: "Project Manager, Team Lead, Full Stack Developer",
      team: [
        { name: "Gwyn", role: "(Documentation Specialist)" },
        { name: "Jay", role: "(Content Writer)" },
        { name: "Ja", role: "(Graphic Designer)" },
        { name: "Zheandrex", role: "(Associate Developer)" },
      ],
      type: "Coursework",
      longDescription: "Led a team to build a Nuxt‑based website that helps students and graduates connect with alumni for internships and job opportunities. Managed the full development lifecycle, ensuring usability, performance, and collaboration. The platform streamlined networking by giving students direct access to alumni support, making career exploration more approachable.",
    },
    {
      title: "Partner School Contact Tracking System",
      url: "https://github.com/your-username/contact-tracker",
      description:
        "Developed during internship at University of the East to increase marketing outreach by 20%. Built mobile application to efficiently track contact details of 160+ partner schools, streamlining communication processes.",
      image: "/projects/CareerTalks_contacts.webp",
      techStack: ["React Native", "Firebase", "JavaScript", "Mobile Development"],
      reverse: true,
      id: "contact-tracker",
      //Case Study Metadata
      result: "Increased marketing outreach to 20% by developing an application to track contact details of at least 160 partner schools.",
      role: "Team Lead, Mobile App Developer",
      team: [
        { name: "Kenneth", role: "(Data Migration Specialist)" },
        { name: "JC", role: "(Mobile App Developer)" },
        { name: "Zheandrex", role: "(Data Encoder)" },
      ],
      type: "Internship",
      longDescription: "During my internship at the University of the East Marketing Department, I developed a mobile application to efficiently track and manage contact details of over 160 partner schools, boosting marketing outreach by 20%. The project streamlined communication processes and supported outreach initiatives such as guided campus tours and technical training programs, making collaboration with partner institutions more effective",
    },
  ];

  export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string; // optional
  image: string;
  technologies?: string[]; // if you use this
  techStack: string[];
  url?: string;
  imagePosition?: string;
  id: string;
  reverse?: boolean;
  team?: 
    Array<{        // Add this
      name: string;
      role: string;
    }>;
}