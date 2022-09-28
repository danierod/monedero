import { useMutation } from "@apollo/client";
import { Formik } from "formik";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { REGISTER } from "../../graphql/Register.graphql";
import Input from "../../ui/input/Input";
import styles from "./register.module.scss";

type FormErrors = {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
};

const Register: NextPage = () => {
  const [register, { data, loading, error }] = useMutation(REGISTER);

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

            {data ? (
              <h2>User is successfully signed up!</h2>
            ) : (
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  password: "",
                }}
                validate={(values) => {
                  const errors: FormErrors = {};
                  if (!values.email) {
                    errors.email = "Required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Invalid email address";
                  }

                  if (!values.password) {
                    errors.password = "Required";
                  }

                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  // setTimeout(() => {
                  //   alert(JSON.stringify(values, null, 2));
                  //   setSubmitting(false);
                  // }, 400);
                  register({ variables: values });
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
                      type="text"
                      name="firstName"
                      value={values.firstName}
                      placeholder="First name"
                      errorMessage={
                        errors.firstName && touched.firstName
                          ? errors.firstName
                          : undefined
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <Input
                      type="text"
                      name="lastName"
                      value={values.lastName}
                      placeholder="Last name"
                      errorMessage={
                        errors.lastName && touched.lastName
                          ? errors.lastName
                          : undefined
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                    <Input
                      type="email"
                      name="email"
                      value={values.email}
                      placeholder="Email"
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

                    <button type="submit">
                      {loading ? "Loading ..." : "Sign up"}
                    </button>
                  </form>
                )}
              </Formik>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Register;
