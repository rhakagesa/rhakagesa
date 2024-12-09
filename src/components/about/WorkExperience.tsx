import { useState } from "react";
const resource: {jobTitle:string, company:string, imgsrc:string,  location:string, startDate:string, endDate:string, jobDesc:string[]}[] = [
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
            "Manage and use inventory computerization software or systems for monitoring and reporting"
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
            "Make regular student progress and evaluation reports"
        ],
    },
    {
        jobTitle: "Administrator",
        company: "LDPS Abu Dzar Al-Ghifari",
        imgsrc: "../src/assets/alghifari-logo.svg",
        location: "Gresik, East Java",
        startDate: "October 2019",
        endDate: "August 2022",
        jobDesc: [
            "Responsible for managing finances, including receiving, storing and recording all financial transactions",
            "Compile financial reports on a regular basis, covering receipts and expenditures",
            "Coordinating the socialization of institutional donations to support operations and development",
            "Handle receiving and responding to incoming letters. Responsible for archiving relevant letters and documents",
            "Conducting socialization of the institution's activities through various media, such as printed banners, flyers, brochures, as well as social media platforms such as Facebook, Instagram, etc."],
    }
    
]

function WorkExperience() {
    const [expand, setExpand] = useState(false)
    const [selected, setSelected] = useState(0)

    const buttonExpand = (index:number) :string=> expand && index === selected ? "transition-all duration-1000 -rotate-180" : "";
    const expandEffect = (index:number) :string=> expand && index === selected ? "block" : "hidden";

    const expandHandler = (index: number) => {
        setExpand(!expand)
        setSelected(index)
    }
    
    return(
        <div className="flex flex-col gap-4">
            {resource.map((item, index) => ( 
                <div className="flex flex-col gap-2 min-w-[600px]" key={index}>
                    <div className="flex gap-3 w-full cursor-pointer" 
                    onClick={() => expandHandler(index)}
                    >
                        <img src={item.imgsrc} alt={item.imgsrc} className="aspect-square w-16 object-contain border-r-2 pr-2" />
                        <div className="flex flex-col">
                            <h3 className="text-base sm:text-lg font-bold text-gray-900">{item.jobTitle}</h3>
                            <p className="text-xs sm:text-base text-gray-700 font-semibold flex items-center">
                                    <span className="flex flex-col">
                                        <p>{item.company}</p> 
                                        <p className="text-xs sm:text-sm font-medium">{item.location}</p>
                                        <p className="text-xs sm:text-sm font-thin">{item.startDate} - {item.endDate}</p> 
                                    </span>
                                </p>
                        </div>
                        <svg
                            className={`size-5 shrink-0 transition duration-300 ${buttonExpand(index)}`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>                
                    <ul className={`${expandEffect(index)} text-xs sm:text-base text-gray-700 list-disc list-inside`}>
                            {item.jobDesc.map((desc, index) => (
                                <li key={index} >{desc}</li>
                            ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default WorkExperience
