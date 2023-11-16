import React from "react";
import hero_img from "../../data/img/hero_img.png";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--context--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Rajendar</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">React</span> <br />
            Web Developer
          </h1>
          <p className="hero--section--description">
            Passionate about crafting seamless digital experiences
            <br /> that leave a lasting impression.
          </p>
        </div>
        <Link
          className="btn btn-primary"
          activeClass="navbar--active--content"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="Contact"
        >
          {" "}
          Get In Touch
        </Link>
      </div>
      <div className="hero--section--img">
        <img src={hero_img} alt="person img" />
      </div>
    </section>
  );
};

export default HeroSection;
