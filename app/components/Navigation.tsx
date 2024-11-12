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
      <ul className="flex gap-7 p-6 m-5 border-[3px] border-black rounded-xl">
        {resource.map((item) => (
          <li key={item.name} className="w-8 h-8 group hover:scale-110">
            <Link to={"/"} className="flex flex-col items-center">
              <img src={item.icon} alt={item.name} />
              <span className="text-xs text-black font-medium hidden group-hover:block">
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
