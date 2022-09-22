import type { NextPage } from "next";
import Head from "next/head";
import styles from "./register.module.scss";

const Register: NextPage = () => {
  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <div className={styles.formContainer}>
          <Head>
            <title>Register</title>
            <meta name="description" content="Monedero App register page." />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className={styles.main}>
            <h1 className={styles.title}>Sign up</h1>
            <p className={styles.description}>
              Join us and don't let your wallet manage your life anymore!
            </p>

            <form>
              <input
                className={styles.input}
                type="email"
                name="email"
                placeholder="Email Address"
              />
              <input
                className={styles.input}
                type="password"
                name="password"
                placeholder="Password"
              />
            </form>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Register;
