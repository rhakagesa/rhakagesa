import { ProjectData } from "../../database/project-data";
function ProjectCard({ data }: { data: ProjectData[] }) {
  return (
    <div className="flex flex-col gap-4">
      {data &&
        data.map((item, index) => (
          <a href={item.link} target="_blank">
            <div
              key={index}
              className="rounded-xl bg-gradient-to-r from-gray-300 via-gray-500 to-gray-600 p-0.5 shadow-sm transition hover:to-gray-400 hover:from-gray-200 hover:via-gray-300 hover:shadow-xl"
            >
              <div className="flex flex-col rounded-lg bg-white p-4 sm:p-6">
                <div className="flex justify-between items-center">
                  <h3 className="flex flex-col text-base sm:text-lg font-bold text-gray-900">
                    {item.title}
                    <span className="font-thin">{item.company}</span>
                  </h3>
                  <img
                    src={item.imgsrc}
                    alt={item.imgsrc}
                    className="aspect-square w-12 object-contain"
                  />
                </div>

                <p className="text-sm sm:text-base text-gray-700 text-justify leading-relaxed">
                  {item.desc}
                </p>

                <div className="mt-4 flex flex-wrap gap-1">
                  {item.tech &&
                    item.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="whitespace-now rounded-md bg-gray-300 px-2.5 py-1 text-xs sm:text-sm text-gray-800"
                      >
                        {tech.toUpperCase()}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          </a>
        ))}
    </div>
  );
}

export default ProjectCard;
