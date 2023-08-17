import { useDispatch, useSelector } from 'react-redux';
import { createContact } from '../../redux/contacts/contactsOperations';
import toast from 'react-hot-toast';

import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  FormLabel,
  Form,
  Field,
  ErrorMessage,
  Title,
} from './ContactForm.styled';
import { selectContacts } from 'redux/selectors';
import { ButtonSubmit } from 'components/ButtonSubmit/ButtonSubmit';

const ContactScheme = Yup.object().shape({
  name: Yup.string()
    .matches(
      /(^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$)/,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan'
    )
    .required('Required!'),
  number: Yup.string()
    .matches(
      /(\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Required!'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  return (
    <div>
      <Title>Phonebook</Title>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={ContactScheme}
        onSubmit={(values, actions) => {
          if (contacts.find(contact => contact.name === values.name)) {
            toast.error(`${values.name} is already in contacts.`);
            return;
          }
          dispatch(createContact(values, values.name));
          actions.resetForm();
        }}
      >
        <Form>
          <FormLabel>
            Name
            <Field name="name" placeholder="Jane Smith" autoComplete="off" />
            <ErrorMessage name="name" component="span" />
          </FormLabel>
          <FormLabel>
            Number
            <Field name="number" placeholder="111-11-11" autoComplete="off" />
            <ErrorMessage name="number" component="span" />
          </FormLabel>
          <ButtonSubmit type="submit">Add contact</ButtonSubmit>
        </Form>
      </Formik>
    </div>
  );
};
