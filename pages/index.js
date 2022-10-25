import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Feelin' Lucky</title>
        <meta name="description" content="Roll the dice." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className={styles.main}>Step right up and win a prize!</main>

      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/jamesngannon/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with 🤍 by James
        </a>
      </footer>
    </div>
  );
}
