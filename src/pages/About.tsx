function About() {
  return (
    <div className="max-w-screen-xl h-screen mx-auto flex items-center">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-3xl text-gray-500 font-extrabold sm:text-5xl">
          Rhaka Gemilang Sentosa
          <strong className="font-extrabold text-gray-800 sm:block">
            {" "}
            Fullstack Web Developer{" "}
          </strong>
        </h1>

        <p className="mt-4 text-gray-800 sm:text-xl/relaxed">
          Hello 👋 , welcome to my portofolio. Here you can find information
          about me and my projects. Hope you like it 😊.
        </p>
      </div>
    </div>
  );
}

export default About;
