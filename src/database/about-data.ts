export interface AboutData {
  jobTitle: string;
  company: string;
  imgsrc: string;
  location?: string;
  startDate: string;
  endDate: string;
  jobDesc: string[] ;
  link?: string;
  credentials?: string;
}

export const workExperience: AboutData[] = [
  {
    jobTitle: "Staff Invetory Control",
    company: "PT. Pupuk Karya Polowijo",
    imgsrc: "../src/assets/pkp-logo.png",
    location: "Gresik, East Java",
    startDate: "August 2022",
    endDate: "December 2024",
    jobDesc: [
      "Monitor and record the entry and exit of goods in the warehouse or storage",
      "Evaluate and monitor inventory reports, including stock movements and changes on a regular basis",
      "Manage and use inventory computerization software or systems for monitoring and reporting",
    ],
  },
  {
    jobTitle: "Teacher",
    company: "Kuttab Al-Fatih",
    imgsrc: "../src/assets/kafmlg-logo.jpg",
    location: "Malang, East Java",
    startDate: "July 2020",
    endDate: "August 2022",
    jobDesc: [
      "Plan and organize lessons in accordance with established curriculum standards",
      "Teaching and explaining learning materials effectively to students",
      "Create and administer assessments and evaluations of student learning outcomes",
      "Identifying students' individual needs and potentials for their optimal development",
      "Conduct character building, and guidance and counseling to students",
      "Apply the use of technology in learning to improve the effectiveness and efficiency of the learning process",
      "Regularly participate in training and self-development to improve teaching quality",
      "Make regular student progress and evaluation reports",
    ],
  },
  {
    jobTitle: "Administrator",
    company: "LDPS Abu Dzar Al-Ghifari",
    imgsrc: "../src/assets/alghifari-logo.svg",
    location: "Malang, East Java",
    startDate: "October 2019",
    endDate: "August 2022",
    jobDesc: [
      "Responsible for managing finances, including receiving, storing and recording all financial transactions",
      "Compile financial reports on a regular basis, covering receipts and expenditures",
      "Coordinating the socialization of institutional donations to support operations and development",
      "Handle receiving and responding to incoming letters. Responsible for archiving relevant letters and documents",
      "Conducting socialization of the institution's activities through various media, such as printed banners, flyers, brochures, as well as social media platforms such as Facebook, Instagram, etc.",
    ],
  },
];

export const education: AboutData[] = [
  {
    jobTitle: "Bachelor of Engineering, Computer Engineering",
    company: "Universitas Brawijaya",
    imgsrc: "../src/assets/ub-logo.jpeg",
    location: "Malang, East Java",
    startDate: "2016",
    endDate: "2020",
    jobDesc: [
      "GPA 3.58/4.00",
      "Faculty of Computer Science",
      "Majoring in Computer Engineering",
      "Thesis : Deteksi Pergerakan Bola Mata untuk Pemilihan Empat Menu Menggunakan Metode Facial Landmark dengan Ekstraksi Fitur LBP dan Klasifikasi K-NN"
    ],
    link: "https://j-ptiik.ub.ac.id/index.php/j-ptiik/article/view/7157/3454"
  },
];

export const certifications: AboutData[] = [
   {
    jobTitle: "Belajar Dasar-Dasar DevOps",
    company: "Dicoding Indonesia",
    imgsrc: "../src/assets/dicoding-logo.jpg",
    startDate: "Issued Oct 2024",
    endDate: "Expired Oct 2027",
    location: "Online",
    credentials: "07Z6485DWPQR",
    jobDesc: [
      "Introduction to DevOps", "DevOps Principles", "CALMS Framework", "DevOps Practices",
    ],
    link: "https://www.dicoding.com/certificates/07Z6485DWPQR"
  },
  {
    jobTitle: "Belajar Jaringan Komputer untuk Pemula",
    company: "Dicoding Indonesia",
    imgsrc: "../src/assets/dicoding-logo.jpg",
    startDate: "Issued Oct 2024",
    endDate: "Expired Oct 2027",
    location: "Online",
    credentials: "1RXY2LWW1XVM",
    jobDesc: [
      "Basic Networking Concepts", "Network Models", "IP Address", "Domain Name System", "Network Security",
    ],
    link: "https://www.dicoding.com/certificates/1RXY2LWW1XVM"
  },
  {
    jobTitle: "Bootcamp Back-End Developer",
    company: "Kelas.work by Kelas.com",
    imgsrc: "../src/assets/kelas-logo.jpg",
    startDate: "Issued Jul 2024",
    endDate: "",
    location: "Online",
    credentials: "CERT-051C3AEB",
    jobDesc: [
      "Introduction to Back-End Development in Web Development", "Git Commands", "Fundamental JavaScript", "Database using PostgreSQL", "Using ORM with Sequelize", "Build a RESTful API with ExpressJS", "Using EJS for Template Engine","Authentication and Authorization using JWT", "Write API Documentation with Markdown", "TDD with Jest", "Testing API with Postman"
    ],
    link: "https://drive.google.com/file/d/1QOuNiPsrJszxrS3IRcrsW5QDmhhqFX_M/view?usp=sharing"
  },
  {
    jobTitle: "Belajar Membuat Aplikasi Web dengan React",
    company: "Dicoding Indonesia",
    imgsrc: "../src/assets/dicoding-logo.jpg",
    startDate: "Issued Oct 2023",
    endDate: "Expired Oct 2026",
    location: "Online",
    credentials: "EYX4YK7OJZDL",
    jobDesc: [
      "Introduction to React", "Basic Concepts of React", "React UI Components", "Stateful Components"
    ],
    link: "https://www.dicoding.com/certificates/EYX4YK7OJZDL"
  },
  {
    jobTitle: "Belajar Membuat Front-End Web untuk Pemula",
    company: "Dicoding Indonesia",
    imgsrc: "../src/assets/dicoding-logo.jpg",
    startDate: "Issued Oct 2023",
    endDate: "Expired Oct 2026",
    location: "Online",
    credentials: "KEXLLYKN0XG2",
    jobDesc: [
      "Browser Object Model and DOM Manipulation", "Event Handling", "Data Storage with Web Storage"
    ],
    link: "https://www.dicoding.com/certificates/KEXLLYKN0XG2"
  },
  {
    jobTitle: "Belajar Dasar Pemrograman JavaScript",
    company: "Dicoding Indonesia",
    imgsrc: "../src/assets/dicoding-logo.jpg",
    startDate: "Issued Sep 2023",
    endDate: "Expired Sep 2026",
    location: "Online",
    credentials: "81P27VO6JZOY",
    jobDesc: [
      "Introduction and Fundamentals of JavaScript ", "Data Structure", "Object Oriented Programming", "Functional Programming", "Module", "Error Handling", "Asynchronous Programming", "Node Package Manager", "JavaScript Testing",
    ],
    link: "https://www.dicoding.com/certificates/81P27VO6JZOY"
  },
  {
    jobTitle: "Belajar Dasar Pemrograman Web",
    company: "Dicoding Indonesia",
    imgsrc: "../src/assets/dicoding-logo.jpg",
    startDate: "Issued Sep 2023",
    endDate: "Expired Sep 2026",
    location: "Online",
    credentials: "53XE4NE0RZRN",
    jobDesc: [
      "Introduction and Fundamentals of HTML", " Introduction and Fundamentals of CSS", "Layout Reponsive with Flexbox",
    ],
    link: "https://www.dicoding.com/certificates/53XE4NE0RZRN"
  },

]

export const logosIcon: string[]= [
  "../src/assets/ts-logo.svg",
  "../src/assets/nodejs-logo.svg",
  "../src/assets/react.svg",
  "../src/assets/vue-logo.svg",
  "../src/assets/tailwindcss-logo.svg",
  "../src/assets/expressjs-logo.svg",
  "../src/assets/postgresql-logo.svg",
  "../src/assets/mongodb-logo.png",
  "../src/assets/mysql-logo.svg",
  "../src/assets/prisma-logo.svg",
  "../src/assets/sequelize-logo.svg",
  "../src/assets/jest-logo.png",
  "../src/assets/postman-logo.png",
  "../src/assets/git-logo.svg",
  "../src/assets/vscode-logo.svg",
]