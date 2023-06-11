import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import * as Yup from 'yup';
import {
  Form,
  Label,
  ErrorMessage,
  Field,
  Button,
  Title,
  Link,
} from './LoginForm.styled';

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
      <Title>Log In form</Title>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LogInScheme}
        onSubmit={(values, actions) => {
          dispatch(logIn(values));
          actions.resetForm();
        }}
      >
        <Form autoComplete="off">
          <Label>
            Email
            <Field type="email" name="email" placeholder="john@gmail.com" />
            <ErrorMessage name="email" component="span" />
          </Label>
          <Label>
            Password
            <Field type="password" name="password" placeholder="********" />
            <ErrorMessage name="password" component="span" />
          </Label>
          <Button type="submit">Log In</Button>
        </Form>
      </Formik>

      <p>
        Is it your first time here? Please,
        <Link to="/register">Register!</Link>
      </p>
    </div>
  );
};
