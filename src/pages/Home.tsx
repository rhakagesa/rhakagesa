import { useEffect, useState } from "react";

function Home() {
  const [loading, setLoading] = useState(true);

  const effectTransitionLeft: string = loading
    ? "-translate-x-full opacity-0"
    : "translate-x-0 opacity-100";
  const effectTransitionRight: string = loading
    ? "translate-x-full opacity-0"
    : "translate-x-0 opacity-100";
  const effectTransitionScale: string = loading
    ? "scale-0 opacity-0"
    : "scale-100 opacity-100";
  const transitionAndDuration: string = "transition-all duration-1000";

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="max-w-screen-xl h-screen mx-auto flex items-center">
      <div className="mx-auto max-w-xl text-center">
        <h1
          className={`${effectTransitionLeft} ${transitionAndDuration} text-3xl text-gray-500 font-extrabold sm:text-5xl `}
        > Rhaka Gemilang
          <br></br>
          <strong className="font-extrabold text-gray-800 sm:block">Portofolio Website.</strong>
        </h1>
        <hr
          className={`${effectTransitionScale} ${transitionAndDuration} my-4 w-60 border-[1px] sm:border-2 rounded-full sm:w-96 mx-auto border-gray-400`}
        />
        <p
          className={`${effectTransitionRight} ${transitionAndDuration} mt-4 text-gray-800 sm:text-xl/relaxed `}
        >
          Hello 👋 , welcome to my portofolio. Here you can find information
          about me and my projects. Hope you like it 😊.
        </p>
      </div>
    </div>
  );
}

export default Home;
