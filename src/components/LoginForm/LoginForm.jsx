import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from 'redux/auth/authOperations';
import * as Yup from 'yup';

const LogInScheme = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(8, 'Password must contain 8 characters as min')
    .matches(/[a-zA-Z]/, 'Password must contain at least one Latin letter')
    .required('Required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Log In form</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LogInScheme}
        onSubmit={(values, actions) => {
          dispatch(register(values));
          actions.resetForm();
        }}
      >
        <Form autoComplete="off">
          <label>
            Email
            <Field type="email" name="email" placeholder="john@gmail.com" />
            <ErrorMessage name="email" component="span" />
          </label>
          <label>
            <Field type="password" name="password" placeholder="********" />
            <ErrorMessage name="password" component="span" />
          </label>
          <button type="submit">Log In</button>
        </Form>
      </Formik>

      <p>
        Is it your first time here? Please,
        <Link to="/register">Register!</Link>
      </p>
    </div>
  );
};
