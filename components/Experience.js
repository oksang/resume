import React from "react";

import styles from "../styles.module.css";

export default function Experiences({ expList }) {
  return (
    <section>
      <h1 className={styles.heading1}>Experience</h1>
      {expList.map((exp) => {
        const { companyName, duration, job, projects } = exp;

        return (
          <React.Fragment key={companyName}>
            <h2 className={styles.heading2}>{companyName}</h2>
            <table className={styles.default}>
              <tbody>
                <tr>
                  <td className={styles.default}>기간</td>
                  <td className={styles.default}>{duration}</td>
                </tr>
                <tr>
                  <td className={styles.default}>직무</td>
                  <td className={styles.default}>{job}</td>
                </tr>
                <tr>
                  <td className={styles.default}>프로젝트</td>
                  <td className={styles.default}>
                    {projects.map((project) => project.name).toString()}
                  </td>
                </tr>
              </tbody>
            </table>
            {projects.map((project) => (
              <React.Fragment key={project.name}>
                <h3 className={styles.heading3}>{project.name}</h3>
                <ul>
                  <li>{project.summary}</li>
                  <li>{project.duration}</li>
                  {project.descriptions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </React.Fragment>
            ))}
          </React.Fragment>
        );
      })}
    </section>
  );
}