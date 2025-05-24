import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>This is H1 title</h1>
        <Link href="/about">Go to About</Link>
      </main>
    </div>
  );
}
