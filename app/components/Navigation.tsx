import { Link } from "@remix-run/react";

const resource = [
  {
    name: "Home",
    icon: "/icon/home.svg",
  },
  {
    name: "About",
    icon: "/icon/info.svg",
  },
  {
    name: "Blog",
    icon: "/icon/blog.svg",
  },
  {
    name: "Projects",
    icon: "/icon/computer.svg",
  },
];

export default function Navigation() {
  return (
    <nav className="flex justify-center">
      <ul className="flex gap-10 sm:gap-20 p-5 m-5 border rounded-2xl shadow-xl">
        {resource.map((item) => (
          <li
            key={item.name}
            className="w-5 h-5 sm:w-8 sm:h-8 group hover:scale-110"
          >
            <Link to={"/"} className="flex flex-col items-center relative">
              <img src={item.icon} alt={item.name} />
              <span className="text-xs sm:text-sm text-black font-medium hidden group-hover:block group-hover:absolute group-hover:-bottom-10 ">
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
