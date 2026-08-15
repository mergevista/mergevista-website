import styles from "./back-to-top.module.css";

export default function BackToTop() {
  return <a className={styles.link} href="#top">Back to top <span aria-hidden="true">↑</span></a>;
}
