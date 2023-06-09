import { Contact } from 'components/Contact/Contact';
import { Container, ErrorMsg } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContactsToShow,
  selectError,
  selectIsLoading,
} from 'redux/selectors';
import { useEffect } from 'react';
import { getContacts } from 'redux/contacts/contactsOperations';
import Loader from 'components/Loader/Loader';

export const ContactsList = () => {
  const contactsToShow = useSelector(selectContactsToShow);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <Container>
      <h2>Contacts</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {contactsToShow?.map(contact => (
            <li key={contact.id}>
              <Contact contact={contact} />
            </li>
          ))}
        </ul>
      )}

      {!contactsToShow?.length && !error && !isLoading && (
        <ErrorMsg>There are no contacts in your Phonebook.</ErrorMsg>
      )}

      {error && <ErrorMsg>{error}</ErrorMsg>}
    </Container>
  );
};
