import "../styles/skills.scss";
import codeIcon from "../assets/code-icon.png";

import { Fade } from "react-awesome-reveal";

export default function Skills() {
  return (
    <section className="skills-section">
      <Fade triggerOnce="true" direction="up">
        <h2 className="skills-heading heading" id="skills-heading">
          my skills
        </h2>
        <div className="skills-icon-cont">
          <img className="skills-icon" src={codeIcon}></img>
        </div>
      </Fade>
    </section>
  );
}
