import Head from "next/head";

import Header from "../components/Header";
import Experience from "../components/Experience";
import Education from "../components/Educations";

import styles from "../styles.module.css";

import {
  pageTitle,
  profile,
  experiences,
  educations,
  lastUpdated,
} from "../config";

export default function Resume() {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <article className={styles.container}>
        <Header profile={profile} updated={lastUpdated} />
        <Experience experiences={experiences} />
        <Education educations={educations} />
        <footer className={styles.default}>
          <p>
            <small>감사합니다.</small>
          </p>
        </footer>
      </article>
    </>
  );
}
