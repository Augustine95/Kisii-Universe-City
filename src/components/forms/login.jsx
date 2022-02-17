import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import FormField from "./FormField";

export default function Login() {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required().label("Username"),
    password: Yup.string().min(4).max(255).required().label("Password"),
  });

  return (
    <section>
      <form className="form">
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          {({ handleChange, handleSubmit, errors }) => (
            <>
              <h1 className="form__heading">Login</h1>
              <FormField
                error={errors.username}
                label="Username"
                onChange={handleChange("username")}
              />
              <FormField
                error={errors.password}
                label="Password"
                type="password"
                onChange={handleChange("password")}
              />
              <button
                className="btn btn--stretched btn--primary"
                onClick={handleSubmit}
              >
                Login
              </button>
            </>
          )}
        </Formik>
      </form>
    </section>
  );
}
