import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <>
       
      {/* About Section */}
      <section className={styles.container} id="about"> <br />
        <h2 className={styles.title}>About</h2> 
        <div className={styles.content}>


          <img
            src={getImageUrl("about/Software_Architecture_And_Design.png")}
            alt="Software_Architecture_And_Design"
            className={styles.aboutImage}
          />
          <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
             
             <div className={styles.aboutItemText}>
          <h3>Frontend</h3>
          <p>
            Skilled in HTML, CSS, JavaScript, React.js,Typescript,Next.js. Passionate about building scalable applications.
          </p>
        </div>
      </li>
      <li className={styles.aboutItem}>
   
        <div className={styles.aboutItemText}>
          <h3>Accessibility & Testing</h3>
          <p>
          Accessibility (WCAG 2.1), NVDA, JAWS, TalkBack, VoiceOver, ARIA Roles
          </p>
        </div>
      </li>
      <li className={styles.aboutItem}>
 
        <div className={styles.aboutItemText}>
          <h3>DevOps Tools</h3>
          <p>
            Proficient in  Git, GitHub, GitLab, Jenkins, CI/CD Pipelines, SonarQube, AWS, Azure, JIRA, Kibana. Focus on deployment efficiency and system optimization.
          </p>
          <br />
        </div>
      </li>
    </ul>
  </div>
      </section>
    </>
  );
};
