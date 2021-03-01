import Header from "../components/Header";
import Experience from "../components/Experience";
import Education from "../components/Educations";

import styles from "../styles.module.css";

import { profile, experiences, educations } from "../config";

export default function Resume() {
  return (
    <article className={styles.container}>
      <Header profile={profile} updated="2021.2.25" />
      <Experience experiences={experiences} />
      <Education educations={educations} />
    </article>
  );
}
