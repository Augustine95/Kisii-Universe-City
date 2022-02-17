import React from "react";
import * as Yup from "yup";

import { AppForm, FormField, SubmitButton } from "../forms/index";

export default function Register() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    username: Yup.string().required().label("Username"),
    password: Yup.string().required().min(4).label("Password"),
  });

  return (
    <section>
      <form className="form">
        <AppForm
          initialValues={{ name: "", username: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <h1 className="form__heading">Register</h1>
          <FormField label="Name" />
          <FormField label="Username" />
          <FormField label="Password" type="password" />
          <SubmitButton title="Register" />
        </AppForm>
      </form>
    </section>
  );
}
