import { useMutation } from "@apollo/client";
import { useForm, useFieldset } from "@conform-to/react";
import { validate } from "@conform-to/zod";
import { z } from "zod";

import type { NextPage } from "next";
import Head from "next/head";
import Input from "../../ui/input/Input";
import styles from "./signup.module.scss";
import { SIGNUP } from "../../graphql/Signup.graphql";

type FormErrors = {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
};

const schema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().optional(),
    email: z.string().min(1, "Email is required").email("Please enter a valid"),
    password: z.string().min(1, "Password is required"),
    confirmPassword: z.string().min(1, "Confirm password is required"),
  })
  .refine((value) => value.password === value.confirmPassword, {
    message: "Password does not match",
    path: ["confirmPassword"],
  });

const SignUp: NextPage = () => {
  const [signUp, { data, loading, error }] = useMutation(SIGNUP);

  const form = useForm<z.infer<typeof schema>>({
    onValidate({ formData }) {
      return validate(formData, schema);
    },
    onSubmit(event, { submission }) {
      event.preventDefault();

      signUp({ variables: submission.value });
    },
  });

  const { firstName, lastName, email, password, confirmPassword } = useFieldset(
    form.ref,
    form.config
  );

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
              <form {...form.props}>
                <Input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  errorMessage={firstName.error}
                />

                <Input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  errorMessage={lastName.error}
                />

                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="off"
                  errorMessage={email.error}
                />

                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  errorMessage={password.error}
                />
                <Input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  errorMessage={confirmPassword.error}
                />

                <button type="submit">
                  {loading ? "Loading ..." : "Sign up"}
                </button>
              </form>
            )}
            {/* </Formik> */}
            {/* )} */}
          </main>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
