import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { nanoid } from "@reduxjs/toolkit";




 const RegisterForm = () => {
    const nameId = nanoid(2);
    const emailId = nanoid(2);
    const passwordId = nanoid(2);
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
       console.log(values);

        dispatch(register({
            name: values.name,
            email: values.email,
            password: values.password,
        })
    );
    actions.resetForm();
};
return (
    <Formik initialValues={{name: "", email: "", password: ""}} onSubmit={handleSubmit}> 
    <Form className={CSS.form}>
        <label htmlFor={nameId} >
            Username
        </label>
        <Field type="text" name="name" id={nameId} />
        <ErrorMessage name="name" component="span" />
        <label htmlFor={emailId}>
            Email
        </label>
          <Field type="email" name="email" id={emailId} />
          <ErrorMessage name="name" component="span" />
        <label htmlFor={passwordId}>
            Password
        </label>
            <Field type="password" name="password"  id={passwordId}/>
            <ErrorMessage name="name" component="span" />
        <button type="submit">Register</button>
    </Form>
    </Formik>
);
};
export default RegisterForm;