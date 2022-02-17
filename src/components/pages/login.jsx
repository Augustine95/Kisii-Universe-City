import React from "react";
import * as Yup from "yup";

import { AppForm, FormField, SubmitButton } from "../forms/index";

export default function Login() {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required().label("Username"),
    password: Yup.string().min(4).max(255).required().label("Password"),
  });

  return (
    <section>
      <form className="form">
        <AppForm
          initialValues={{ username: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <h1 className="form__heading">Login</h1>
          <FormField label="Username" />
          <FormField label="Password" type="password" />
          <SubmitButton title="Login" />
        </AppForm>
      </form>
    </section>
  );
}
