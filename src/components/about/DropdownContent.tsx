import { useState } from "react";
import { AboutData } from "../../database/about-data";
function DropdownContent({ data }: { data: AboutData[] }) {
  const [expand, setExpand] = useState(false);
  const [selected, setSelected] = useState(0);

  const buttonExpand = (index: number): string =>
    expand && index === selected
      ? "transition-all duration-1000 -rotate-180"
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
                    <p>{item.company}</p>
                    <p className="text-xs sm:text-sm font-medium">
                      {item.location}
                    </p>
                    <p className="text-xs sm:text-sm font-thin">
                      {item.startDate} - {item.endDate}
                    </p>
                  </span>
                </p>
              </div>
              <svg
                className={`size-5 w-1/12 transition duration-300 ${buttonExpand(
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
              {item.jobDesc.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
}

export default DropdownContent;
