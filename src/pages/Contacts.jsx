import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactList/ContactList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsThunk } from 'redux/contacts/contactsOperations';
import { selectStatusPending } from 'redux/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectStatusPending);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <div>
      <title>Your PhoneBook</title>
      <ContactForm />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactsList />
    </div>
  );
};

export default Contacts;
