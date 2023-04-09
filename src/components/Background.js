import React from "react";

const Background = () => {
  return (
    <section className="section background">
      <div className="section-title">BACKGROUND</div>
      <div className="section-bgTitle">BACKGROUND</div>
      <div className="background-section">
        <div className="bg-section">
          <p>
            I recently graduated from{" "}
            <a
              href="https://pcacs.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-link"
            >
              Pillai College of Arts, Commerce and Science
            </a>{" "}
            after completing B.Sc. in Computer Science
          </p>
          <p>
            I'm a UI/UX designer and a webflow developer. I can develop
            case-studies for respective apps and websites comprising user
            personas, user journey maps etc. You can find me on{" "}
            <a
              href="https://www.behance.net/vishnuj4"
              className="underline-link"
            >
              Bēhance
            </a>{" "}
            and{" "}
            <a
              href="https://www.linkedin.com/in/vishnujkumar/"
              className="underline-link"
            >
              LinkedIn
            </a>
          </p>
          <p>
            <strong>When I'm not in front of a computer screen</strong>, I'm
            probably reading books, travelling, photography or playing video
            games.
          </p>
        </div>

        <div className="bg-btn">
          <button className="blob-btn">
            <a
              className="arrow-link"
              href="https://drive.google.com/file/d/1_g7zAANLuLO2tSWj8yWiFqyYmYmq6rsa/view?pli=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              View my resume
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
        </div>
      </div>
    </section>
  );
};

export default Background;
