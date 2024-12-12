import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";
import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from 'formik';




const LoginForm = () => {
    const dispatch = useDispatch();
    const emailId = nanoid(2);
    const passwordId = nanoid(2);
    

    const handleSubmit = (values, actions) => {
        console.log(values);

        dispatch(  
            logIn({
            email: values.email,
            password: values.password
        })
    )

    
    actions.resetForm();
    };

    return (
        <Formik onSubmit={handleSubmit} initialValues={{email: "", password: ""}} > 
        
        <Form className={css.form} >
            <label htmlFor={emailId}>Email</label>
            <Field type="email" name="email" id={emailId} className={css.email} />
            <ErrorMessage name="name" component="span" />
            <label htmlFor={passwordId}>Password</label>
            <Field type="password"
            name="password"
            id={passwordId}
            className={css.password} />
            <ErrorMessage name="password" component="span" />
            <button className={css.button} type="submit">Login</button>
        </Form>
        </Formik>
    );
};
export default LoginForm;