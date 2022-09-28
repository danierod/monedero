import { Formik } from "formik";
import type { NextPage } from "next";
import Head from "next/head";
import { off } from "process";
import Input from "../../ui/input/Input";
import styles from "./register.module.scss";

const Register: NextPage = () => {
  type FormErrors = {
    email?: string;
    password?: string;
  };

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
              Join us and don&apos;t let your wallet manage your life anymore!
            </p>

            <Formik
              initialValues={{ email: "", password: "" }}
              validate={(values) => {
                const errors: FormErrors = {};
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }

                if (!values.password) {
                  errors.password = "Required";
                }

                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <Input
                    type="email"
                    name="email"
                    value={values.email}
                    placeholder="Email Address"
                    errorMessage={
                      errors.email && touched.email ? errors.email : undefined
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Input
                    type="password"
                    name="password"
                    value={values.password}
                    placeholder="Password"
                    errorMessage={
                      errors.password && touched.password
                        ? errors.password
                        : undefined
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </form>
              )}
            </Formik>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Register;
