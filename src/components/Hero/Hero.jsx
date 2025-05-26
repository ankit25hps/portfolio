import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import myPic from "../../../assets/hero/Pi7_Passport_Photo.jpeg"; // Import the image directly
// vite-project/assets/hero/Pi7_Passport_Photo.jpeg

export const Hero = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (count >= 14) return;

    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 150);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <section className={styles.container}>
      <video className={styles.backgroundVideo} autoPlay loop muted>
        <source src="assets/hero/Space-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={styles.content}>
        <br />
        <h1 className={styles.title}>Hi, I'm Ankit Kumar</h1>
        <p className={styles.description}>
        Hi, I'm Ankit Kumar, a Frontend Developer with over 2.6 years of experience building accessible, responsive, and user-friendly web applications. I specialize in HTML, CSS, JavaScript, React.js, and Next.js, and have strong working knowledge of accessibility standards like WCAG 2.1, with hands-on testing using NVDA, JAWS, TalkBack, and VoiceOver. I've worked on real-time user stories, fixed critical UI bugs, and implemented ARIA roles to enhance digital inclusivity. In my previous role at Verizon via Cognizant, I also contributed to improving code quality through SonarQube and supported DevOps workflows using Jenkins and CI/CD pipelines. I'm passionate about building clean, scalable UIs that work for everyone, including users with disabilities.
          <br /><br />
          I specialize in software development and DevOps, focusing on building scalable applications and optimizing deployment processes.
        </p>
        <a href="https://www.linkedin.com/in/ankit-kumar-0516771b1/" className={styles.connectBtn}>
          Connect +
        </a>
        {/* <button className={styles.hackathonButton}>
          Participated in {count} Hackathons
        </button> */}
      </div>
      <img
        src={myPic} // Use the imported image
        alt="Hero image of Ankit Kumar"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};