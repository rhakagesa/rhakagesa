export interface ProjectData {
    imgsrc: string,
    title: string,
    company: string,
    desc: string,
    tech: string[],
    link: string
}

export const realProjects: ProjectData[] = [
    {
        imgsrc: "../src/assets/vue-logo.svg",
        title: "Proyeksi Kirim App",
        company: "PT. Bumi Sari Teknologi",
        desc: "I developed a web-based application to enhance the efficiency of shipment administration, which was previously done manually using Excel. The application is built with Vue for the Front-End and Express for the Back-End, and is deployed on Vercel. The database is managed using Supabase and ORM Prisma, with the source code stored on GitHub. This solution addresses issues such as data input errors and simplifies access to necessary information for report recipients.",
        tech: [
            "vue", "express", "prismaorm", "postgresql", "vercel", "supabase", "github", "jwt", "vuetify"
        ],
        link: "https://www.canva.com/design/DAGSju9HE-g/6p7Hpyv-oXZx_bfy--l1ow/view?utm_content=DAGSju9HE-g&utm_campaign=designshare&utm_medium=link&utm_source=editor#2"
    }
]

export const miniProjects: ProjectData[] = [
    {
        imgsrc: "../src/assets/kelas-logo.jpg",
        title: "Final Project - Backend Developer",
        company: "Kelas.work by Kelas.com",
        desc: "I made this project to fulfill the graduation requirements and get certified in the 'Bootcamp Backend Developer' by Kelas.work by Kelas.com. This project had two parts, in the first project I created a simple 'to-do-list' web application using ExpressJS, EJS, Bootstrap, Sequelize and PostgreSQL. The main focus of this project was to implement the concepts of MVC and CRUD. Then the second project is a development of the first project with a different focus on creating a RESTful API, TDD and documentation for each end point that has been created. Then implement authentication and authorization for security. In this project, the additional technologies that I used were Postman, Bycript, Express JWT, Jest and Supertest.",
        tech: [
            "bootstrap" ,"ejs", "express", "sequelize", "postgresql", "github", "postman", "jest", "jwt"
        ],
        link: "https://docs.google.com/presentation/d/139UFQnYphLDFvLXwLzmQnO2fUIVbgXfyOllRBQDWD0o/edit?usp=sharing"
    },
    {
        imgsrc: "../src/assets/dicoding-logo.jpg",
        title: "Notes App",
        company: "Dicoding Indonesia",
        desc: "I made this project to fulfill the graduation requirements and get certified in the 'Belajar Membuat Aplikasi Web dengan React' module by Dicoding Indonesia. This project was created using React as the library, then implementing CRUD functions to perform actions on the application such as adding, deleting, updating, and archiving notes using React Hooks (useState).",
        tech: ["React", "React Hooks", "JavaScript", "CSS"],
        link: "https://rhakagesa.github.io/submission-notes-app/"
    },
    {
        imgsrc: "../src/assets/dicoding-logo.jpg",
        title: "Bookshelf App",
        company: "Dicoding Indonesia",
        desc: "I made this project to fulfill the graduation requirements and get certified in the 'Belajar Membuat Front-End Web untuk Pemula' module by Dicoding Indonesia. This project was created using basic web programming languages such as HTML, CSS, JavaScript. The focus of this project is to use localStorage in the web browser to store data from users, and also implement CRUD functions using the DOM.",
        tech: ["HTML", "CSS", "JavaScript", "localStorage", "DOM"],
        link: "https://rhakagesa.github.io/submission-bookshelf-apps/"
    },
    {
        imgsrc: "../src/assets/dicoding-logo.jpg",
        title: "Web Portfolio",
        company: "Dicoding Indonesia",
        desc: "I made this project to fulfill the graduation requirements and get certified in the 'Belajar Dasar Pemrograman Web' module by Dicoding Indonesia. This project was created using basic web programming languages such as HTML for the structure of web pages, and I implemented semantic HTML to make the code easier to read. Then CSS to style the web, and JavaScript to make the web look dynamic. The focus of this project is to implement semantic HTML and responsive web.",
        tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        link: "https://rhakagesa.github.io/submission-dasar-pemrograman-web/"
    }
]
