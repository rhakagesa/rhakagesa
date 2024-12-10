import Certification from "../components/about/Certification";
import ContentContainer from "../components/about/ContentContainer";
import Education from "../components/about/Education";
import Profile from "../components/about/Profile";
import ToolTechnology from "../components/about/ToolTechnology";
import WorkExperience from "../components/about/WorkExperience";

function About() {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center pt-28 sm:pt-32">
      <ContentContainer title="Summary">
        <Profile
          imgsrc="../src/assets/pp-img-2.png"
          title="Rhaka Gemilang Sentosa"
          desc="Hello everyone, my name is Rhaka, and I currently live in Gresik, East Java. 
          I am a self-taught web developer with over 1 year of experience and a Computer Engineering graduate with 5 years of work experience outside my field of study. 
          Now, I am pursuing a career change to web development, aiming to become a full-stack developer. 
          I am dedicated to continuously improving my skills and am eager to take on new challenges. 
          I am looking for a company that can support my growth and allow me to contribute in an innovative work environment. 
          I am excited about the opportunity to work and learn together."
        />
      </ContentContainer>

      <ContentContainer title="Experience" note="in other fields">
        <WorkExperience />
      </ContentContainer>

      <ContentContainer title="Education">
        <Education />
      </ContentContainer>

      <ContentContainer title="Certification">
        <Certification />
      </ContentContainer>

      <ContentContainer title="Tools and Technologies">
        <ToolTechnology />
      </ContentContainer>
    </div>
  );
}

export default About;
