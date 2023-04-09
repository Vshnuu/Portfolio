import React from "react";
import ProjectData from "./ProjectData";

const Projects = () => {
  return (
    <>
      <section className="section projects">
        <div className="section-title">Projects</div>
        <div className="section-bgTitle">PROJECTS</div>
        <div className="section-content projectss">
          <ProjectData
            title="Freelance Projects"
            link="https://github.com/Deeraj2/Crypto-app"
          />
          <ProjectData
            title="Personal Projects"
            link="https://github.com/Deeraj2/Secrets"
          />
        </div>
      </section>
      <div className=" section-content projects-flex">
        <a
          href="https://github.com/Deeraj2"
          className=" underline-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="blob-btn margin-right">
            Check my other projects here!
            <span className="blob-btn__inner">
              <span className="blob-btn__blobs">
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
              </span>
            </span>
          </button>
        </a>
      </div>
    </>
  );
};

export default Projects;
