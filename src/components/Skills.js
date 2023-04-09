import React from "react";
import { FaHtml5, FaCss3, FaFigma } from "react-icons/fa";
import {
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiWebflow,
  SiInvision,
} from "react-icons/si";

const Skills = () => {
  return (
    <section className="section skills">
      <div className="section-title">TOOLS</div>
      <div className="section-bgTitle">TOOLS</div>

      <div className="tools-icon">
        <FaFigma className="icon-hover is" />
        <SiAdobexd className="icon-hover is" />
        <SiAdobephotoshop className="icon-hover is" />
        <SiAdobeillustrator className="icon-hover is" />
        <SiInvision className="icon-hover is" />
        <SiWebflow className="icon-hover is" />
        <SiAdobeindesign className="icon-hover is" />
        <FaHtml5 className="icon-hover is" />
        <FaCss3 className="icon-hover is" />
      </div>
    </section>
  );
};

export default Skills;
