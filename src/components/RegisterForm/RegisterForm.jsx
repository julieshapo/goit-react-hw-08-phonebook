import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import * as Yup from 'yup';
import {
  Form,
  Label,
  Field,
  ErrorMessage,
  Button,
  Title,
  Link,
} from './RegisterForm.styled';

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
      <Title>Registration form</Title>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={RegistrationScheme}
        onSubmit={(values, actions) => {
          dispatch(register(values));
          actions.resetForm();
        }}
      >
        <Form autoComplete="off">
          <Label>
            Username
            <Field type="text" name="name" placeholder="John" />
            <ErrorMessage name="name" component="span" />
          </Label>
          <Label>
            Email
            <Field type="email" name="email" placeholder="john@gmail.com" />
            <ErrorMessage name="email" component="span" />
          </Label>
          <Label>
            <Field type="password" name="password" placeholder="********" />
            <ErrorMessage name="password" component="span" />
          </Label>
          <Button type="submit">Register</Button>
        </Form>
      </Formik>

      <p>
        Already have an account? Let's <Link to="/login">Log In!</Link>
      </p>
    </div>
  );
};
