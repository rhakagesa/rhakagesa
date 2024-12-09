export interface AboutData {
  jobTitle: string;
  company: string;
  imgsrc: string;
  location: string;
  startDate: string;
  endDate: string;
  jobDesc: string[];
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

export const educationCertification: AboutData[] = [
  {
    jobTitle: "Bachelor of Engineering",
    company: "Universitas Brawijaya",
    imgsrc: "../src/assets/ub-logo.jpeg",
    location: "Malang, East Java",
    startDate: "2016",
    endDate: "2020",
    jobDesc: [
      "GPA 3.58/4.00",
      "Faculty of Computer Science",
      "Majoring in Computer Engineering",
    ],
  },
];
