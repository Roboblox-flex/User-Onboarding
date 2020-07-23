import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Form.jsx";
import User from "./User.jsx";

import formSchema from "./formSchema.jsx";
import axios from "axios";
import * as Yup from "yup";

const initialUsers = [
  {
    name: "Gabe",
    email: "gabe@gabe.com",
    // password: "kashflakjsf",
    terms: false,
  },
];
const initialFormValues = {
  name: "",
  email: "",
  password: "",
  terms: false,
};
const initialFormErrors = {
  name: "",
  email: "",
  password: "",
  terms: "",
};
const initialDisabled = true;

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getUsers = () => {
    return users;
  };

  const postNewUser = (newUser) => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((response) => {
        setUsers([...users, response.data]);
      })
      .catch((error) => {
        debugger;
      })
      .finally(() => {
        setFormValues(initialFormValues);
      });
  };

  const onInputChange = (evt) => {
    const { name, value } = evt.target;
    Yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const onCheckboxChange = (evt) => {
    const { name, checked } = evt.target;
    Yup.reach(formSchema, name)
      .validate(checked)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setFormValues({
      ...formValues,
      [name]: checked,
    });
  };
  const onSubmit = (evt) => {
    evt.preventDefault();

    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms,
    };
    postNewUser(newUser);
  };

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className="App">
      <h1>User Onboarding</h1>
      <Form
        values={formValues}
        onInputChange={onInputChange}
        onCheckboxChange={onCheckboxChange}
        onSubmit={onSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      {users.map((user) => {
        return <User key={user.name} user={user} />;
      })}
    </div>
  );
}

export default App;
