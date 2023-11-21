import React from "react";
import pic from "../../data/img/aboutPic.png";

const AboutMe = () => {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src={pic} alt="about me" />
      </div>
      <div
        className="hero--section--content--box
      about--section--box"
      >
        <div className="skills-section--content">
          <h1 className="skills--section--heading">About Me</h1>
          <p className="skills--section--description">
            I'm a Full Stack Developer specializing in React and Node.js, with
            1.5 years of hands-on experience. My expertise lies in optimizing
            React components, achieving GTMatrix ratings of 74 and above. At
            Starweaver Group, I enhanced website security and user tracking by
            implementing permissions and access controls.
          </p>
          <br />
          <p className="skills--section--description">
            Starting as a React Developer Intern, I refined frontend skills and
            supported backend development in Node.js. This foundational
            experience paved the way for my current role as a proficient Full
            Stack Developer, adept at improving web applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
