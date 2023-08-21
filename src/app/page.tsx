import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>Press Space to Start</h1>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div id={styles.button} className={styles.red} />
            <div id={styles.button} className={styles.green} />
            <div id={styles.button} className={styles.blue} />
            <div id={styles.button} className={styles.yellow} />
          </div>
        </div>
      </main>
    </>
  );
}
