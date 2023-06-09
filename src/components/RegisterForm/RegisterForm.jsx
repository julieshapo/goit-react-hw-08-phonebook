import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from 'redux/auth/authOperations';
import * as Yup from 'yup';

const RegistrationScheme = Yup.object({
  name: Yup.string()
    .min(3, 'Name should contain 3 characters as min')
    .max(10, 'Name should contain 10 characters as max')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(8, 'Password must contain 8 characters as min')
    .matches(/[a-zA-Z]/, 'Password must contain at least one Latin letter')
    .required('Required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Registration form</h2>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={RegistrationScheme}
        onSubmit={(values, actions) => {
          dispatch(register(values));
          actions.resetForm();
        }}
      >
        <Form autoComplete="off">
          <label>
            Username
            <Field type="text" name="name" placeholder="John" />
            <ErrorMessage name="name" component="span" />
          </label>
          <label>
            Email
            <Field type="email" name="email" placeholder="john@gmail.com" />
            <ErrorMessage name="email" component="span" />
          </label>
          <label>
            <Field type="password" name="password" placeholder="********" />
            <ErrorMessage name="password" component="span" />
          </label>
          <button type="submit">Register</button>
        </Form>
      </Formik>

      <p>
        Already have an account? Let's <Link to="/login">Log In!</Link>
      </p>
    </div>
  );
};
