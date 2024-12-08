import { Link } from "react-router";

const resource: { name: string; path: string }[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Project",
    path: "/project",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

function NavigationBar() {
  return (
    <div className="absolute w-full top-10 z-50 flex items-center justify-center">
      <div className="w-min h-min border-[1px] sm:border-[3px] border-gray-400 rounded-3xl px-5 py-4 bg-white bg-opacity-80">
        <nav className="flex gap-4">
          {resource &&
            resource.map((item, index) => (
              <Link
                to={item.path}
                className="text-xs sm:text-lg font-medium text-gray-500 hover:text-gray-800"
                key={index}
              >
                {item.name}
              </Link>
            ))}
        </nav>
      </div>
    </div>
  );
}

export default NavigationBar;
