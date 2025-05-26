import React from 'react';
import styles from './Certifications.module.css';

export const Certifications = () => {
  return (
    <section id="certifications" className={styles.certificationSection}>
      <h2>CERTIFICATIONS</h2> <br />
      <div className={styles.certificationContainer}>
        <ul>
          <li className={styles.certificationItem}>
            <a href="https://drive.google.com/file/d/1BGLvG_LD8elKAe0Vd4d02cHv6icElLN9/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={styles.certificationLink}>
               Microsoft Certified - Azure Fundamentals Certification
            </a>
          </li>
          <li className={styles.certificationItem}>
            <a href="https://drive.google.com/file/d/191fpbVZFbWkK9EkYyMMpQc2WZLUJHher/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={styles.certificationLink}>
              Javascript Certified
            </a>
          </li>
          <li className={styles.certificationItem}>
            <a href="https://drive.google.com/file/d/1H5O5ZWeKf8OowHbXqcidxdfTLudRAZcH/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={styles.certificationLink}>
              JQuery
            </a>
          </li>
          <li className={styles.certificationItem}>
            <a href="https://drive.google.com/file/d/11iSaJGrbNL0TvseXKfT6EyYg7rxJBftu/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className={styles.certificationLink}>
            MYSQL and Database Design
            </a>
          </li>
          <li className={styles.certificationItem}>
            <a href="https://drive.google.com/file/d/1zHhQBgBbkISHyQKETE9vOBX53gegKkH7/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={styles.certificationLink}>
            AWS Certified Cloud Practitioner
            </a>
          </li>

           <br />

      
        </ul>
      </div>
    </section>
  );
};
