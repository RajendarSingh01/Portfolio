import React from "react";
import pic from "../../data/img/about-me.png";

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
          <p className="section-title">About</p>
          <h1 className="skills--section--heading">About Me</h1>
          <p className="hero--section-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea numquam
            voluptate sapiente eum dolore neque dolorem? Perspiciatis iusto,
            obcaecati deserunt perferendis labore possimus veritatis ipsam
            laborum distinctio iure quaerat!
          </p>
          <p className="hero--section-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea numquam
            voluptate sapiente eum dolore neque dolorem? Perspiciatis iusto,
            obcaecati deserunt perferendis labore possimus veritatis ipsam
            laborum distinctio iure quaerat!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
