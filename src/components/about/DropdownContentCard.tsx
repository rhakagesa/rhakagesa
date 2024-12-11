import { useState } from "react";
import { AboutData } from "../../database/about-data";
function DropdownContentCard({ data }: { data: AboutData[]}) {
  const [expand, setExpand] = useState(false);
  const [selected, setSelected] = useState(0);

  const buttonExpand = (index: number): string =>
    expand && index === selected
      ? "transition-all duration-300 -rotate-180"
      : "";
  const expandEffect = (index: number): string =>
    expand && index === selected ? "block" : "hidden";

  const expandHandler = (index: number) => {
    setExpand(!expand);
    setSelected(index);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      {data &&
        data.map((item, index) => (
          <div className="flex flex-col gap-2" key={index}>
            <div
              className="flex gap-3 w-full cursor-pointer items-center"
              onClick={() => expandHandler(index)}
            >
              <img
                src={item.imgsrc}
                alt={item.imgsrc}
                className="aspect-square w-1/6 object-contain border-r-2 pr-2 "
              />
              <div className="flex flex-col w-5/6">
                <h3 className="text-base sm:text-lg font-bold text-gray-900">
                  {item.jobTitle}
                </h3>
                <p className="text-xs sm:text-base text-gray-700 font-semibold flex items-center">
                  <span className="flex flex-col">
                    <span>{item.company}</span>
                    <span className="text-xs sm:text-sm font-medium">
                      {item.location}
                    </span>
                    <span className="text-xs sm:text-sm font-thin">
                      {item.startDate} - {item.endDate}
                    </span>
                    {item.credentials && (
                      <span className="text-xs sm:text-sm font-thin">
                        Credential ID {item.credentials}
                      </span>
                    )}
                  </span>
                </p>
              </div>
              <svg
                className={`size-5 w-1/12 ${buttonExpand(
                  index
                )}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <ul
              className={`${expandEffect(
                index
              )} text-xs sm:text-base text-gray-700 list-disc list-inside`}
            >
              {item.credentials && (
               <p>Module that have been learned :</p> 
              )}
              {item.jobDesc.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>

            {item.link && 
              <a
                  className="group relative inline-flex items-center overflow-hidden rounded-b-md bg-gray-400 px-8 py-3 text-white hover:bg-gray-600  active:bg-gray-700"
                  href={item.link}
                  target="_blank"
                  >
                  <span className="absolute -end-full transition-all group-hover:end-4">
                    <svg
                      className="size-5 rtl:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                  <span className="text-xs sm:text-sm font-semibold transition-all group-hover:me-4"> Details </span>
              </a>}
          </div>
        ))
        }
        

    </div>
  );
}

export default DropdownContentCard;
