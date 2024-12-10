import { useInView } from "motion/react";
import { useRef } from "react";
import Certification from "../components/about/Certification";
import ContentContainer from "../components/about/ContentContainer";
import Education from "../components/about/Education";
import Profile from "../components/about/Profile";
import ToolTechnology from "../components/about/ToolTechnology";
import WorkExperience from "../components/about/WorkExperience";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  const effectTransitionLeft: string = isInView
  ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
const effectTransitionRight: string = isInView
  ? 
  "translate-x-0 opacity-100" : "translate-x-full opacity-0"

const transitionAndDuration: string = "transition-all duration-1000"; 


  return (
    <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center pt-28 sm:pt-32" ref={ref}>
      <ContentContainer title="Summary" className={`${effectTransitionLeft} ${transitionAndDuration}`}>
        <Profile
          imgsrc="../src/assets/pp-img.png"
          title="Rhaka Gemilang Sentosa"
          desc="Hello everyone, my name is Rhaka, and I currently live in Gresik, East Java. 
          I am a self-taught web developer with over 1 year of experience and a Computer Engineering graduate with 5 years of work experience outside my field of study. 
          Now, I am pursuing a career change to web development, aiming to become a full-stack developer. 
          I am dedicated to continuously improving my skills and am eager to take on new challenges. 
          I am looking for a company that can support my growth and allow me to contribute in an innovative work environment. 
          I am excited about the opportunity to work and learn together."
        />
      </ContentContainer>

      <ContentContainer title="Experience" note="in other fields" className={`${effectTransitionRight} ${transitionAndDuration}`}>
        <WorkExperience />
      </ContentContainer>
    
      <ContentContainer title="Education" className={`${effectTransitionLeft} ${transitionAndDuration}`}>
        <Education />
      </ContentContainer>

      <ContentContainer title="Certification" className={`${effectTransitionRight} ${transitionAndDuration}`}>
        <Certification/>
      </ContentContainer>

      <ContentContainer title="Tools and Technologies" className={`${effectTransitionLeft} ${transitionAndDuration}`}>
        <ToolTechnology/>
      </ContentContainer>

    </div>
  );
}

export default About;
