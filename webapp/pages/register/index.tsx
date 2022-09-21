import type { NextPage } from "next";
import Head from "next/head";
import styles from "./register.module.css";

const Register: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Register</title>
        <meta name="description" content="Monedero App register page." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Register</h1>
        <p className={styles.description}>Coming soon!</p>
      </main>
    </div>
  );
};

export default Register;
