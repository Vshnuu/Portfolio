import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-copyright">
        <div className="top">
          <span>Curated by </span>
        </div>
        <div className="bottom">
          <span> Vishnu Kumar</span>
          <br className="br" />
          <span> 2022</span>
        </div>
      </div>

      <div className="footer-links">
        <a
          href="mailto:vishnujkumar07@gmail.com"
          title="email"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text">email</span>
        </a>
        <a
          href="https://www.behance.net/vishnuj4"
          title="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text">Bēhance</span>
        </a>
        <a
          href="https://www.linkedin.com/in/vishnujkumar/"
          title="linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text">linkedin</span>
        </a>
        <a
          href="https://instagram.com/vshnnu.ux?igshid=YmMyMTA2M2Y="
          title="twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text">Instagram</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
