import type { MetaFunction } from "@remix-run/node";
import Home from "~/pages/Home";

export const meta: MetaFunction = () => {
  return [
    { title: "rhakagesa | Portofolio Website" },
    { name: "description", content: "Welcome to my Website!" },
  ];
};

export default function Index() {
  return (
    <div className="bg-white w-full h-full">
      <Home />
    </div>
  );
}
