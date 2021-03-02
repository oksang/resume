import React from "react";

import styles from "../styles.module.css";

export default function Education({ educations }) {
  return (
    <section>
      <h1 className={styles.heading1}>Education</h1>
      {educations.map((education) => {
        const { title, duration, summary, descriptions } = education;

        return (
          <React.Fragment key={title}>
            <h2 className={styles.heading2}>{title}</h2>
            <p className={styles.default}>
              {duration}, {summary}
            </p>
            <ul>
              {descriptions.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </React.Fragment>
        );
      })}
    </section>
  );
}
