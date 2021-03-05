import styles from "../styles.module.css";

export default function Skills({ skillSet }) {
  const {
    attitude,
    communication,
    htmlAndCss,
    javascript,
    react,
    tooling,
    etc,
  } = skillSet;

  return (
    <section>
      <h1 className={styles.heading1}>Skills</h1>
      <h2>Attitude</h2>
      <ul className={styles.default}>
        {attitude.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h2>Communication</h2>
      <ul className={styles.default}>
        {communication.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h2>HTML & CSS</h2>
      <ul className={styles.default}>
        {htmlAndCss.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h2>Javascript</h2>
      <ul className={styles.default}>
        {javascript.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h2>React</h2>
      <ul className={styles.default}>
        {react.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h2>Tooling</h2>
      <ul className={styles.default}>
        {tooling.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h2>Etc.</h2>
      <ul className={styles.default}>
        {etc.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
