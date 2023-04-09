import React from "react";
import Typewriter from "typewriter-effect";
import "./Header.scss";

const Header = () => {
  return (
    <header className="intro" initial="hidden" animate="show">
      <div className="intro-hello">
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 10,
            strings: ["Hello!", "Namaste!", "Haalo!", "Olá!", "Kon'nichiwa!"],
          }}
        />
        {/* &lt; Hello!! /&gt; */}
      </div>
      <h2 className="intro-tagline">
        <div className="para-1">
          I'm <span className="name">Vishnu Kumar</span>, a{" "}
          <span className="name">UI/UX designer </span> based in Mumbai, India.
          I love building beautiful interfaces for web apps, mobile applications
          and everything in between!
        </div>
        <br />
        <div className="para-2">
          The aim is to build practical as well as convienient interfaces for my
          users
        </div>
      </h2>
      <h3 className="intro-contact">
        <span>Get in touch 👉🏼</span>{" "}
        <span className="intro-btn">
          <button className="blob-btn">
            <a href="mailto:vishnujkumar07@gmail.com">
              vishnujkumar07@gmail.com
            </a>
            <span className="blob-btn__inner">
              <span className="blob-btn__blobs">
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
              </span>
            </span>
          </button>
        </span>
      </h3>
    </header>
  );
};

export default Header;
