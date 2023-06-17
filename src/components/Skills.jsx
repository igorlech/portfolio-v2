import "../styles/skills.scss";

import { Fade } from "react-awesome-reveal";

export default function Skills() {
  return (
    <section className="skills-section">
      <Fade triggerOnce="true" direction="up">
        <h2 className="skills-heading heading" id="skills-heading">
          my main skills
        </h2>
      </Fade>
    </section>
  );
}
