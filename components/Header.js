import styles from "../styles.module.css";

export default function Header({ profile, updated }) {
  const { name, summary, github, blog, mail, place } = profile;
  const mailToMe = `mailto:${mail}`;

  return (
    <section>
      <h1 className={styles.heading1}>{name}</h1>
      <sub className={styles.updated}>최종 수정일: {updated}</sub>
      <p className={styles.default}>{summary}</p>
      <table className={styles.default}>
        <tbody>
          <tr>
            <td className={styles.default}>
              <strong>Github</strong>
            </td>
            <td className={styles.default}>
              <a href={github}>{github}</a>
            </td>
          </tr>
          <tr>
            <td className={styles.default}>
              <strong>Blog</strong>
            </td>
            <td className={styles.default}>
              <a href={blog}>{blog}</a>
            </td>
          </tr>
          <tr>
            <td className={styles.default}>
              <strong>Mail</strong>
            </td>
            <td className={styles.default}>
              <a href={mailToMe}>{mail}</a>
            </td>
          </tr>
          <tr>
            <td className={styles.default}>
              <strong>Place</strong>
            </td>
            <td className={styles.default}>{place}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
